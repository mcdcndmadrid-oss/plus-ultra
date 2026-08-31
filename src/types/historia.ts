import type { Geometry, LineString, Polygon } from 'geojson'

// Modelo de datos histórico. Las fechas se expresan como año decimal
// (p. ej. 1521.6 ≈ agosto de 1521) para permitir granularidad de mes/día
// en episodios densos sin complicar el tipo con calendarios completos.

export type TipoTerritorio =
  | 'reino'
  | 'virreinato'
  | 'audiencia'
  | 'capitania'
  | 'gobernacion'
  | 'ducado'
  | 'plaza'
  | 'protectorado'

// Cómo y cuándo se perdió el territorio (o si sigue vigente al final de
// la línea temporal). Inspirado en el mapa diacrónico del Imperio
// español de Wikimedia Commons: colorear por destino histórico, no por
// tipo administrativo, hace mucho más legible el declive del imperio.
export type MotivoFinTerritorio =
  | 'vigente'
  | 'utrecht'
  | 'independencia'
  | 'guerra-cuba'
  | 'descolonizacion'
  | 'restauracion-portugal'
  | 'cesion'

export interface Territorio {
  id: string
  nombre: string
  tipo: TipoTerritorio
  desde: number
  hasta: number
  // Año de incorporación ORIGINAL del territorio a la Corona (no el
  // inicio de este tramo concreto): un territorio con varios tramos
  // conserva el mismo `origenDesde` en todos ellos, para colorearlo de
  // forma consistente por el siglo en que se expandió.
  origenDesde: number
  motivoFin: MotivoFinTerritorio
  articuloWiki?: string
  geometry: Geometry
}

// Extensión RECLAMADA (no efectivamente controlada): territorio que la
// Corona reivindicaba ante otras potencias —por exploración, misiones o
// caminos reales— más allá de la zona con asentamientos y gobierno
// real, que es lo que muestra `Territorio`. Se dibuja como contorno
// discontinuo superpuesto, igual que el mapa diacrónico del Imperio
// español de Wikimedia Commons distingue "extensión efectiva" de
// "máxima extensión y reclamaciones". Es, por construcción, la capa más
// aproximada/esquemática de todo el modelo.
export interface Reclamacion {
  id: string
  territorioId: string
  nombre: string
  desde: number
  hasta: number
  articuloWiki?: string
  geometry: Polygon
}

export type TipoRuta = 'exploracion' | 'conquista' | 'comercial'

export interface Ruta {
  id: string
  nombre: string
  tipo: TipoRuta
  protagonistaIds: string[]
  fechaInicio: number
  fechaFin: number
  // Color distintivo de la campaña (hex): identifica su ruta, los
  // marcadores de sus eventos y su cabecera en el panel, para poder
  // distinguir varias campañas simultáneas de un vistazo.
  color: string
  // Descripción real de la campaña/empresa (de Wikipedia o escrita a
  // mano si no hay artículo dedicado): sustituye el texto genérico
  // autogenerado ("Ruta de tipo X documentada entre Y y Z").
  resumen: string
  imagenWiki?: string
  articuloWiki?: string
  geometry: LineString
}

export type TipoEvento =
  | 'batalla'
  | 'fundacion'
  | 'tratado'
  | 'descubrimiento'
  | 'rebelion'

export interface Evento {
  id: string
  titulo: string
  tipo: TipoEvento
  fecha: number
  coordenadas: [number, number]
  resumen: string
  imagenWiki?: string
  articuloWiki?: string
  personajeIds: string[]
  // Campaña o ruta a la que pertenece este evento (opcional): agrupa
  // eventos que forman parte de una misma expedición o campaña militar,
  // como los hitos de la conquista de México bajo la ruta de Cortés.
  rutaId?: string
}

export interface Personaje {
  id: string
  nombre: string
  nacimiento?: number
  muerte?: number
  periodoRelevancia: [number, number]
  rol: string
  resumen: string
  imagenWiki?: string
  articuloWiki?: string
  eventoIds: string[]
}

export type CapaBase = 'minimalista' | 'fisico' | 'satelite'

export type SeleccionTipo = 'territorio' | 'ruta' | 'evento' | 'personaje'

export interface Seleccion {
  tipo: SeleccionTipo
  id: string
}
