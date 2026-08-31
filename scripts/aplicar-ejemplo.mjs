#!/usr/bin/env node
// Inyecta la salida del pipeline (scripts/output/<semilla>.json) en los
// ficheros de datos de la app (src/data/*.ts): sustituye cualquier
// entrada existente con el mismo id y añade las nuevas al final.

import { readFile, writeFile } from 'node:fs/promises'

const semillaArg = process.argv[2] ?? 'conquista-mexico'
const salida = JSON.parse(
  await readFile(`scripts/output/${semillaArg}.json`, 'utf-8'),
)

function ts(valor) {
  return JSON.stringify(valor, null, 2)
}

function quitarBloque(fuente, id) {
  // El id es siempre la primera propiedad del objeto en los ficheros
  // generados, así que el bloque a eliminar empieza justo ahí (si el
  // patrón buscara líneas previas de forma perezosa, se comería también
  // los objetos anteriores del array).
  const patron = new RegExp(`\\n {2}\\{\\n {4}id: '${id}',[\\s\\S]*?\\n {2}\\},\\n`)
  return fuente.replace(patron, '\n')
}

// --- personajes.ts --------------------------------------------------
let personajesTs = await readFile('src/data/personajes.ts', 'utf-8')
for (const p of salida.personajes) {
  personajesTs = quitarBloque(personajesTs, p.id)
}

const bloquesPersonajes = salida.personajes
  .map((p) => {
    return `  {
    id: ${ts(p.id)},
    nombre: ${ts(p.nombre)},
    ${p.nacimiento !== undefined ? `nacimiento: ${p.nacimiento},` : ''}
    ${p.muerte !== undefined ? `muerte: ${p.muerte},` : ''}
    periodoRelevancia: ${ts(p.periodoRelevancia)},
    rol: ${ts(p.rol)},
    resumen: ${ts(p.resumen)},
    ${p.imagenWiki ? `imagenWiki: ${ts(p.imagenWiki)},` : ''}
    articuloWiki: ${ts(p.articuloWiki)},
    eventoIds: ${ts(p.eventoIds)},
  },`
  })
  .join('\n')

// El elemento previo al cierre puede venir de un script generador
// (JSON.stringify, sin coma final) o de ediciones a mano (con coma
// final) — nos aseguramos de que siempre quede una coma antes de
// insertar los bloques nuevos, o el array queda con sintaxis inválida.
personajesTs = personajesTs.replace(/(\S)\s*\]\s*$/, (_, ultimo) =>
  ultimo === ',' ? `${ultimo}${bloquesPersonajes}\n]\n` : `${ultimo},${bloquesPersonajes}\n]\n`,
)
await writeFile('src/data/personajes.ts', personajesTs, 'utf-8')

// --- eventos.ts -------------------------------------------------------
let eventosTs = await readFile('src/data/eventos.ts', 'utf-8')
for (const e of salida.eventos) {
  eventosTs = quitarBloque(eventosTs, e.id)
}

const bloquesEventos = salida.eventos
  .map((e) => {
    return `  {
    id: ${ts(e.id)},
    titulo: ${ts(e.titulo)},
    tipo: ${ts(e.tipo)},
    fecha: ${e.fecha},
    coordenadas: ${ts(e.coordenadas)},
    resumen: ${ts(e.resumen)},
    ${e.imagenWiki ? `imagenWiki: ${ts(e.imagenWiki)},` : ''}
    articuloWiki: ${ts(e.articuloWiki)},
    personajeIds: ${ts(e.personajeIds)},
    ${e.rutaId ? `rutaId: ${ts(e.rutaId)},` : ''}
  },`
  })
  .join('\n')

eventosTs = eventosTs.replace(/(\S)\s*\]\s*$/, (_, ultimo) =>
  ultimo === ',' ? `${ultimo}${bloquesEventos}\n]\n` : `${ultimo},${bloquesEventos}\n]\n`,
)
await writeFile('src/data/eventos.ts', eventosTs, 'utf-8')

console.log('✅ src/data/personajes.ts y src/data/eventos.ts actualizados')
console.log(
  `   ${salida.personajes.length} personajes, ${salida.eventos.length} eventos`,
)
