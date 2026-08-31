import type {
  GeoJSONSource,
  Map as MapLibreMap,
  MapLayerMouseEvent,
} from 'maplibre-gl'
import { Map as Maplibre, NavigationControl, setWorkerUrl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useRef } from 'react'
import {
  obtenerEventos,
  obtenerReclamaciones,
  obtenerRutas,
  obtenerTerritorios,
} from '../data/datosEditables'
import { suavizarLinea } from '../lib/spline'
import { useHistoriaStore } from '../store/useHistoriaStore'
import { useOverridesStore } from '../store/useOverridesStore'
import {
  COLOR_EVENTO_SIN_CAMPANA,
  cargarIconosEventos,
  idIconoEvento,
} from './iconosMapa'
import { colorPorReino } from './coloresTerritorio'
import { estiloParaCapa } from './estilosMapa'
import type { Evento, Ruta, Territorio, TipoEvento } from '../types/historia'

// El build de producción (Vite/Rolldown) no siempre consigue empaquetar
// el worker interno de MapLibre en la ruta que este espera por defecto,
// lo que rompe el renderizado de tiles vectoriales en el despliegue
// (aunque en desarrollo funciona). Se sirve como asset estático propio
// (public/maplibre-gl-worker.mjs) y se apunta ahí explícitamente, con
// BASE_URL para que funcione igual en la raíz del dominio o en un
// subdirectorio (GitHub Pages).
setWorkerUrl(`${import.meta.env.BASE_URL}maplibre-gl-worker.mjs`)

const RUTA_ANCHO_NORMAL = 3.5
const RUTA_ANCHO_RESALTADO = 6

// Ventana de "actualidad": lo ocurrido dentro de estos años se ve a toda
// opacidad; lo anterior sigue visible (no desaparece del mapa) pero muy
// atenuado, como rastro histórico de lo ya sucedido.
const RECENCIA_ANIOS = 15
const OPACIDAD_ANTIGUA_EVENTO = 0.25
const OPACIDAD_ANTIGUA_RUTA = 0.3
const OPACIDAD_ANTIGUA_HALO = 0.12

function geojsonTerritorios(territorios: Territorio[], fecha: number) {
  return {
    type: 'FeatureCollection' as const,
    features: territorios
      .filter((t) => fecha >= t.desde && fecha <= t.hasta)
      .map((t) => ({
        type: 'Feature' as const,
        geometry: t.geometry,
        properties: {
          id: t.id,
          nombre: t.nombre,
          color: colorPorReino(t.nombre),
        },
      })),
  }
}

function colorDeTerritorioBase(territorios: Territorio[], territorioId: string): string {
  const tramo = territorios.find((t) => t.id.startsWith(`${territorioId}-`))
  return tramo ? colorPorReino(tramo.nombre) : '#57534e'
}

function geojsonReclamaciones(territorios: Territorio[], fecha: number) {
  return {
    type: 'FeatureCollection' as const,
    features: obtenerReclamaciones()
      .filter((r) => fecha >= r.desde && fecha <= r.hasta)
      .map((r) => ({
        type: 'Feature' as const,
        geometry: r.geometry,
        properties: {
          id: r.id,
          nombre: r.nombre,
          color: colorDeTerritorioBase(territorios, r.territorioId),
        },
      })),
  }
}

// Las rutas con pocos puntos son hitos históricos documentados unidos a
// mano (ver rutas.ts): se suavizan con una curva para que no se vean
// como segmentos rectos. Las que ya tienen muchos puntos (rutas
// marítimas generadas con searoute-ts) son un trayecto real y no se
// tocan, para no distorsionarlo.
const UMBRAL_PUNTOS_SUAVIZADO = 15

function geojsonRutas(rutas: Ruta[], fecha: number) {
  return {
    type: 'FeatureCollection' as const,
    features: rutas
      // Una ruta se muestra desde que empieza; no desaparece al acabar,
      // solo se atenúa (ver `reciente` más abajo).
      .filter((r) => fecha >= r.fechaInicio)
      .map((r) => {
        const coords = r.geometry.coordinates as [number, number][]
        const suave =
          coords.length < UMBRAL_PUNTOS_SUAVIZADO
            ? suavizarLinea(coords)
            : coords
        const reciente = fecha - r.fechaFin <= RECENCIA_ANIOS
        return {
          type: 'Feature' as const,
          geometry: { type: 'LineString' as const, coordinates: suave },
          properties: { id: r.id, nombre: r.nombre, color: r.color, reciente },
        }
      }),
  }
}

function colorDeEvento(rutas: Ruta[], rutaId: string | undefined): string {
  const ruta = rutaId ? rutas.find((r) => r.id === rutaId) : undefined
  return ruta?.color ?? COLOR_EVENTO_SIN_CAMPANA
}

function geojsonEventos(
  eventos: Evento[],
  rutas: Ruta[],
  fecha: number,
  tiposOcultos: TipoEvento[],
) {
  return {
    type: 'FeatureCollection' as const,
    features: eventos
      // Un evento se muestra desde que ocurre; no desaparece después,
      // solo se atenúa si ya queda lejos en el pasado. Los tipos
      // ocultados desde el filtro del panel no se dibujan en absoluto.
      .filter((e) => e.fecha <= fecha && !tiposOcultos.includes(e.tipo))
      .map((e) => ({
        type: 'Feature' as const,
        geometry: { type: 'Point' as const, coordinates: e.coordenadas },
        properties: {
          id: e.id,
          titulo: e.titulo,
          icono: idIconoEvento(e.tipo, colorDeEvento(rutas, e.rutaId)),
          reciente: fecha - e.fecha <= RECENCIA_ANIOS,
        },
      })),
  }
}

async function agregarCapasDatos(map: MapLibreMap) {
  const { fechaActual: fecha, tiposOcultos } = useHistoriaStore.getState()
  const territorios = obtenerTerritorios()
  const rutas = obtenerRutas()
  const eventos = obtenerEventos()

  if (!map.getSource('territorios')) {
    map.addSource('territorios', {
      type: 'geojson',
      data: geojsonTerritorios(territorios, fecha),
    })
    map.addLayer({
      id: 'territorios-relleno',
      type: 'fill',
      source: 'territorios',
      paint: { 'fill-color': ['get', 'color'], 'fill-opacity': 0.35 },
    })
    map.addLayer({
      id: 'territorios-borde',
      type: 'line',
      source: 'territorios',
      paint: { 'line-color': ['get', 'color'], 'line-width': 1.5 },
    })
  }

  if (!map.getSource('reclamaciones')) {
    map.addSource('reclamaciones', {
      type: 'geojson',
      data: geojsonReclamaciones(territorios, fecha),
    })
    // Solo contorno discontinuo, sin relleno: es extensión RECLAMADA,
    // no control efectivo (ver src/data/reclamaciones.ts).
    map.addLayer({
      id: 'reclamaciones-borde',
      type: 'line',
      source: 'reclamaciones',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': ['get', 'color'],
        'line-width': 1.5,
        'line-dasharray': [3, 2],
        'line-opacity': 0.7,
      },
    })
  }

  if (!map.getSource('rutas')) {
    map.addSource('rutas', {
      type: 'geojson',
      data: geojsonRutas(rutas, fecha),
    })
    // Halo blanco para que la ruta destaque sobre cualquier capa base
    // (incluida la satélite) antes de dibujar la línea discontinua.
    map.addLayer({
      id: 'rutas-halo',
      type: 'line',
      source: 'rutas',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': '#ffffff',
        'line-width': RUTA_ANCHO_NORMAL + 2.5,
        'line-opacity': [
          'case',
          ['get', 'reciente'],
          0.75,
          OPACIDAD_ANTIGUA_HALO,
        ],
      },
    })
    map.addLayer({
      id: 'rutas-linea',
      type: 'line',
      source: 'rutas',
      layout: { 'line-cap': 'round', 'line-join': 'round' },
      paint: {
        'line-color': ['get', 'color'],
        'line-width': RUTA_ANCHO_NORMAL,
        'line-dasharray': [2, 1.5],
        'line-opacity': [
          'case',
          ['get', 'reciente'],
          1,
          OPACIDAD_ANTIGUA_RUTA,
        ],
      },
    })
  }

  if (!map.getSource('eventos')) {
    await cargarIconosEventos(
      map,
      rutas.map((r) => r.color),
    )
    map.addSource('eventos', {
      type: 'geojson',
      data: geojsonEventos(eventos, rutas, fecha, tiposOcultos),
    })
    map.addLayer({
      id: 'eventos-punto',
      type: 'symbol',
      source: 'eventos',
      layout: {
        'icon-image': ['get', 'icono'],
        'icon-size': ['case', ['get', 'reciente'], 0.55, 0.4],
        'icon-allow-overlap': true,
        'icon-ignore-placement': true,
      },
      paint: {
        'icon-opacity': [
          'case',
          ['get', 'reciente'],
          1,
          OPACIDAD_ANTIGUA_EVENTO,
        ],
      },
    })
  }
}

function actualizarCapasDatos(
  map: MapLibreMap,
  fecha: number,
  tiposOcultos: TipoEvento[],
) {
  const territorios = obtenerTerritorios()
  const rutas = obtenerRutas()
  const eventos = obtenerEventos()

  const srcTerritorios = map.getSource(
    'territorios',
  ) as GeoJSONSource | undefined
  srcTerritorios?.setData(geojsonTerritorios(territorios, fecha))

  const srcReclamaciones = map.getSource('reclamaciones') as
    | GeoJSONSource
    | undefined
  srcReclamaciones?.setData(geojsonReclamaciones(territorios, fecha))

  const srcRutas = map.getSource('rutas') as GeoJSONSource | undefined
  srcRutas?.setData(geojsonRutas(rutas, fecha))

  const srcEventos = map.getSource('eventos') as GeoJSONSource | undefined
  srcEventos?.setData(geojsonEventos(eventos, rutas, fecha, tiposOcultos))
}

export function MapaHistorico() {
  const contenedorRef = useRef<HTMLDivElement>(null)
  const mapaRef = useRef<MapLibreMap | null>(null)

  const capaBase = useHistoriaStore((s) => s.capaBase)
  const fechaActual = useHistoriaStore((s) => s.fechaActual)
  const seleccionar = useHistoriaStore((s) => s.seleccionar)
  const hover = useHistoriaStore((s) => s.hover)
  const tiposOcultos = useHistoriaStore((s) => s.tiposOcultos)
  const versionOverrides = useOverridesStore((s) => s.version)

  // Inicialización del mapa (una sola vez). El estilo minimalista se
  // descarga y se filtra de forma asíncrona (ver estilosMapa.ts), así
  // que el mapa se construye en cuanto está listo.
  useEffect(() => {
    if (!contenedorRef.current) return
    let cancelado = false

    estiloParaCapa('minimalista').then((estiloInicial) => {
      if (cancelado || !contenedorRef.current) return

      const map = new Maplibre({
        container: contenedorRef.current,
        style: estiloInicial,
        center: [-45, 15],
        zoom: 2.2,
        attributionControl: { compact: true },
      })
      map.addControl(new NavigationControl(), 'top-right')

      map.on('load', () => agregarCapasDatos(map))

      const manejarClic =
        (tipo: 'territorio' | 'ruta' | 'evento') =>
        (e: MapLayerMouseEvent) => {
          const id = e.features?.[0]?.properties?.id
          if (id) seleccionar({ tipo, id })
        }

      map.on('click', 'territorios-relleno', manejarClic('territorio'))
      map.on('click', 'rutas-linea', manejarClic('ruta'))
      map.on('click', 'eventos-punto', manejarClic('evento'))

      for (const capa of [
        'territorios-relleno',
        'rutas-linea',
        'eventos-punto',
      ]) {
        map.on('mouseenter', capa, () => {
          map.getCanvas().style.cursor = 'pointer'
        })
        map.on('mouseleave', capa, () => {
          map.getCanvas().style.cursor = ''
        })
      }

      // Resaltado cruzado: al pasar el cursor sobre un marcador de evento
      // se resalta también en el panel de acontecimientos, y viceversa.
      map.on('mouseenter', 'eventos-punto', (e) => {
        const id = e.features?.[0]?.properties?.id
        if (id) useHistoriaStore.getState().setHover({ tipo: 'evento', id })
      })
      map.on('mouseleave', 'eventos-punto', () => {
        useHistoriaStore.getState().setHover(null)
      })
      map.on('mouseenter', 'rutas-linea', (e) => {
        const id = e.features?.[0]?.properties?.id
        if (id) useHistoriaStore.getState().setHover({ tipo: 'ruta', id })
      })
      map.on('mouseleave', 'rutas-linea', () => {
        useHistoriaStore.getState().setHover(null)
      })

      mapaRef.current = map
    })

    return () => {
      cancelado = true
      mapaRef.current?.remove()
      mapaRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Cambio de capa base: hay que reconstruir el estilo y reinsertar las
  // fuentes/capas de datos cuando el nuevo estilo termine de cargar.
  useEffect(() => {
    const map = mapaRef.current
    if (!map) return
    let cancelado = false
    estiloParaCapa(capaBase).then((estilo) => {
      if (cancelado) return
      map.setStyle(estilo)
      map.once('styledata', () => agregarCapasDatos(map))
    })
    return () => {
      cancelado = true
    }
  }, [capaBase])

  // Actualización de datos al mover el slider temporal, o cuando cambia
  // algo en el módulo de edición (versionOverrides).
  useEffect(() => {
    const map = mapaRef.current
    if (!map) return
    if (map.isStyleLoaded()) {
      actualizarCapasDatos(map, fechaActual, tiposOcultos)
    } else {
      map.once('idle', () =>
        actualizarCapasDatos(map, fechaActual, tiposOcultos),
      )
    }
  }, [fechaActual, versionOverrides, tiposOcultos])

  // Resaltado del marcador de evento cuando el hover proviene del panel
  // (o del propio mapa, sin efecto visible adicional en ese caso).
  useEffect(() => {
    const map = mapaRef.current
    if (!map) return
    const hoverId = hover?.tipo === 'evento' ? hover.id : null

    const aplicar = () => {
      if (!map.getLayer('eventos-punto')) return
      map.setLayoutProperty('eventos-punto', 'icon-size', [
        'case',
        ['==', ['get', 'id'], hoverId ?? ''],
        0.8,
        ['case', ['get', 'reciente'], 0.55, 0.4],
      ])
    }

    if (map.isStyleLoaded()) aplicar()
    else map.once('idle', aplicar)
  }, [hover])

  // Resaltado de la ruta/campaña completa cuando el hover proviene del
  // panel (cabecera de campaña) o de la propia línea en el mapa.
  useEffect(() => {
    const map = mapaRef.current
    if (!map) return
    const hoverId = hover?.tipo === 'ruta' ? hover.id : null

    const aplicar = () => {
      if (!map.getLayer('rutas-linea')) return
      map.setPaintProperty('rutas-linea', 'line-width', [
        'case',
        ['==', ['get', 'id'], hoverId ?? ''],
        RUTA_ANCHO_RESALTADO,
        RUTA_ANCHO_NORMAL,
      ])
    }

    if (map.isStyleLoaded()) aplicar()
    else map.once('idle', aplicar)
  }, [hover])

  return (
    <div className="absolute inset-0">
      <div ref={contenedorRef} className="h-full w-full" />
    </div>
  )
}
