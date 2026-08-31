// Conversión entre los tipos tipados de cada colección y filas CSV
// planas. Los campos con listas (personajeIds, protagonistaIds...) se
// unen con ";". Los campos con estructuras complejas (geometry) se
// guardan como una celda de texto JSON: no pensadas para editarse a
// mano en la hoja de cálculo (para eso está el editor de mapa), pero
// así el CSV sigue siendo un export/import fiel y completo.
import type { Evento, Personaje, Ruta, Territorio } from '../types/historia'

function num(v: number | undefined): string {
  return v === undefined ? '' : String(v)
}
function numOpt(v: string): number | undefined {
  return v.trim() === '' ? undefined : Number(v)
}

// --- Eventos -----------------------------------------------------------

export function eventosACsv(lista: Evento[]): Record<string, string>[] {
  return lista.map((e) => ({
    id: e.id,
    titulo: e.titulo,
    tipo: e.tipo,
    fecha: num(e.fecha),
    lon: num(e.coordenadas[0]),
    lat: num(e.coordenadas[1]),
    resumen: e.resumen,
    imagenWiki: e.imagenWiki ?? '',
    articuloWiki: e.articuloWiki ?? '',
    personajeIds: e.personajeIds.join(';'),
    rutaId: e.rutaId ?? '',
  }))
}

export function csvAEventos(filas: Record<string, string>[]): Evento[] {
  return filas.map((f) => ({
    id: f.id,
    titulo: f.titulo,
    tipo: f.tipo as Evento['tipo'],
    fecha: Number(f.fecha),
    coordenadas: [Number(f.lon), Number(f.lat)],
    resumen: f.resumen,
    imagenWiki: f.imagenWiki || undefined,
    articuloWiki: f.articuloWiki || undefined,
    personajeIds: f.personajeIds ? f.personajeIds.split(';').filter(Boolean) : [],
    rutaId: f.rutaId || undefined,
  }))
}

// --- Personajes ----------------------------------------------------------

export function personajesACsv(lista: Personaje[]): Record<string, string>[] {
  return lista.map((p) => ({
    id: p.id,
    nombre: p.nombre,
    nacimiento: num(p.nacimiento),
    muerte: num(p.muerte),
    periodoInicio: num(p.periodoRelevancia[0]),
    periodoFin: num(p.periodoRelevancia[1]),
    rol: p.rol,
    resumen: p.resumen,
    imagenWiki: p.imagenWiki ?? '',
    articuloWiki: p.articuloWiki ?? '',
    eventoIds: p.eventoIds.join(';'),
  }))
}

export function csvAPersonajes(filas: Record<string, string>[]): Personaje[] {
  return filas.map((f) => ({
    id: f.id,
    nombre: f.nombre,
    nacimiento: numOpt(f.nacimiento),
    muerte: numOpt(f.muerte),
    periodoRelevancia: [Number(f.periodoInicio), Number(f.periodoFin)],
    rol: f.rol,
    resumen: f.resumen,
    imagenWiki: f.imagenWiki || undefined,
    articuloWiki: f.articuloWiki || undefined,
    eventoIds: f.eventoIds ? f.eventoIds.split(';').filter(Boolean) : [],
  }))
}

// --- Rutas -----------------------------------------------------------

export function rutasACsv(lista: Ruta[]): Record<string, string>[] {
  return lista.map((r) => ({
    id: r.id,
    nombre: r.nombre,
    tipo: r.tipo,
    protagonistaIds: r.protagonistaIds.join(';'),
    fechaInicio: num(r.fechaInicio),
    fechaFin: num(r.fechaFin),
    color: r.color,
    resumen: r.resumen,
    imagenWiki: r.imagenWiki ?? '',
    articuloWiki: r.articuloWiki ?? '',
    geometryJSON: JSON.stringify(r.geometry),
  }))
}

export function csvARutas(filas: Record<string, string>[]): Ruta[] {
  return filas.map((f) => ({
    id: f.id,
    nombre: f.nombre,
    tipo: f.tipo as Ruta['tipo'],
    protagonistaIds: f.protagonistaIds
      ? f.protagonistaIds.split(';').filter(Boolean)
      : [],
    fechaInicio: Number(f.fechaInicio),
    fechaFin: Number(f.fechaFin),
    color: f.color,
    resumen: f.resumen ?? '',
    imagenWiki: f.imagenWiki || undefined,
    articuloWiki: f.articuloWiki || undefined,
    geometry: JSON.parse(f.geometryJSON),
  }))
}

// --- Territorios -----------------------------------------------------------

export function territoriosACsv(lista: Territorio[]): Record<string, string>[] {
  return lista.map((t) => ({
    id: t.id,
    nombre: t.nombre,
    tipo: t.tipo,
    desde: num(t.desde),
    hasta: num(t.hasta),
    origenDesde: num(t.origenDesde),
    motivoFin: t.motivoFin,
    articuloWiki: t.articuloWiki ?? '',
    geometryJSON: JSON.stringify(t.geometry),
  }))
}

export function csvATerritorios(filas: Record<string, string>[]): Territorio[] {
  return filas.map((f) => ({
    id: f.id,
    nombre: f.nombre,
    tipo: f.tipo as Territorio['tipo'],
    desde: Number(f.desde),
    hasta: Number(f.hasta),
    origenDesde: Number(f.origenDesde),
    motivoFin: f.motivoFin as Territorio['motivoFin'],
    articuloWiki: f.articuloWiki || undefined,
    geometry: JSON.parse(f.geometryJSON),
  }))
}
