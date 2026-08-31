import type { ExpressionSpecification, StyleSpecification } from 'maplibre-gl'
import type { CapaBase } from '../types/historia'

const URL_POSITRON = 'https://tiles.openfreemap.org/styles/positron'

// Capas de fronteras y topónimos político-administrativos MODERNOS que
// hay que ocultar del estilo minimalista: mostrar el México de hoy o
// etiquetas de países actuales sobre un mapa de 1519 es anacrónico. Se
// mantienen en cambio los nombres de mares, ríos y lagos (geografía
// física, no político-administrativa) — ver README, sección "Pendiente:
// anacronismo del mapa base".
const CAPAS_ANACRONICAS = new Set([
  'boundary_3',
  'boundary_2',
  'boundary_disputed',
  'label_other',
  'label_village',
  'label_town',
  'label_state',
  'label_city',
  'label_city_capital',
  'label_country_3',
  'label_country_2',
  'label_country_1',
])

// Las capas de etiquetas del estilo remoto priorizan "name_en" (inglés)
// sobre el nombre local. Las reescribimos para que prefieran el nombre
// en español (name:es) del propio dato de OpenStreetMap, con reserva en
// el nombre local y, solo si no hay otra opción, el inglés.
const CAMPO_TEXTO_ES: ExpressionSpecification = [
  'coalesce',
  ['get', 'name:es'],
  ['get', 'name'],
  ['get', 'name_en'],
]

const CAPAS_CON_TEXTO_TRADUCIBLE = new Set([
  'waterway_line_label',
  'water_name_point_label',
  'water_name_line_label',
])

function traducidaAlEspanol(
  capa: StyleSpecification['layers'][number],
): StyleSpecification['layers'][number] {
  if (!CAPAS_CON_TEXTO_TRADUCIBLE.has(capa.id) || !('layout' in capa)) {
    return capa
  }
  return {
    ...capa,
    layout: { ...capa.layout, 'text-field': CAMPO_TEXTO_ES },
  } as StyleSpecification['layers'][number]
}

let estiloMinimalistaPromesa: Promise<StyleSpecification> | null = null

// El estilo Positron es un JSON remoto; lo descargamos una vez, le
// quitamos las capas anacrónicas, traducimos sus etiquetas al español y
// reutilizamos el resultado.
function estiloMinimalistaHistorico(): Promise<StyleSpecification> {
  if (!estiloMinimalistaPromesa) {
    estiloMinimalistaPromesa = fetch(URL_POSITRON)
      .then((r) => r.json())
      .then((estilo: StyleSpecification) => ({
        ...estilo,
        layers: estilo.layers
          .filter((l) => !CAPAS_ANACRONICAS.has(l.id))
          .map(traducidaAlEspanol),
      }))
  }
  return estiloMinimalistaPromesa
}

// Imagen satélite (Esri World Imagery, uso gratuito con atribución).
const ESTILO_SATELITE: StyleSpecification = {
  version: 8,
  sources: {
    esri: {
      type: 'raster',
      tiles: [
        'https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}',
      ],
      tileSize: 256,
      attribution: 'Esri, Maxar, Earthstar Geographics',
    },
  },
  layers: [{ id: 'esri', type: 'raster', source: 'esri' }],
}

// Capas de ETIQUETAS de accidentes geográficos (mares, ríos, lagos) del
// estilo vectorial — geografía física atemporal, no anacrónica — que se
// superponen al mapa de relieve para que tenga nombres.
const CAPAS_ETIQUETAS_FISICAS = new Set([
  'waterway_line_label',
  'water_name_point_label',
  'water_name_line_label',
])

let estiloFisicoPromesa: Promise<StyleSpecification> | null = null

// Mapa físico: mapa de relieve pre-renderizado de Esri (basado en Natural
// Earth), con sombreado, tinte hipsométrico y red hidrográfica ya
// incorporados, más las etiquetas de mares/ríos/lagos tomadas del mismo
// estilo vectorial ya filtrado de anacronismos — así el mapa físico
// también tiene nombres de accidentes geográficos, no solo relieve mudo.
// La capa "mountain_peak" existe en las teselas vectoriales pero
// Positron no la usa; la añadimos nosotros para que el mapa físico
// también tenga nombres de picos y cordilleras, no solo de agua.
const CAPA_PICOS: StyleSpecification['layers'][number] = {
  id: 'picos-etiqueta',
  type: 'symbol',
  source: 'openmaptiles',
  'source-layer': 'mountain_peak',
  filter: ['has', 'name'],
  minzoom: 4,
  layout: {
    'text-field': CAMPO_TEXTO_ES,
    'text-font': ['Noto Sans Italic'],
    'text-size': 11,
    'text-anchor': 'bottom',
    'text-offset': [0, -0.3],
  },
  paint: {
    'text-color': '#4a3728',
    'text-halo-color': '#ffffff',
    'text-halo-width': 1.2,
  },
}

function estiloFisicoHistorico(): Promise<StyleSpecification> {
  if (!estiloFisicoPromesa) {
    estiloFisicoPromesa = estiloMinimalistaHistorico().then((vectorial) => {
      const capasEtiquetas = vectorial.layers.filter((l) =>
        CAPAS_ETIQUETAS_FISICAS.has(l.id),
      )
      return {
        version: 8,
        sources: {
          'esri-fisico': {
            type: 'raster',
            tiles: [
              'https://server.arcgisonline.com/ArcGIS/rest/services/World_Physical_Map/MapServer/tile/{z}/{y}/{x}',
            ],
            tileSize: 256,
            maxzoom: 8,
            attribution: 'Esri, USGS, NOAA — Natural Earth',
          },
          ...vectorial.sources,
        },
        glyphs: vectorial.glyphs,
        layers: [
          { id: 'esri-fisico', type: 'raster', source: 'esri-fisico' },
          ...capasEtiquetas,
          CAPA_PICOS,
        ],
      } satisfies StyleSpecification
    })
  }
  return estiloFisicoPromesa
}

export function estiloParaCapa(
  capa: CapaBase,
): Promise<string | StyleSpecification> {
  switch (capa) {
    case 'satelite':
      return Promise.resolve(ESTILO_SATELITE)
    case 'fisico':
      return estiloFisicoHistorico()
    default:
      return estiloMinimalistaHistorico()
  }
}
