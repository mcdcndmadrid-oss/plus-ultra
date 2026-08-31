#!/usr/bin/env node
// Simplifica (Douglas-Peucker) las rutas marítimas reales generadas por
// generar-rutas-maritimas.mjs y las inyecta en src/data/rutas.ts,
// sustituyendo la geometría de cada ruta por su id.
//
// Las rutas terrestres NO pasan por este script: ver la nota en
// generar-rutas-maritimas.mjs sobre por qué enrutar por carreteras
// modernas sería anacrónico.

import { simplify } from '@turf/simplify'
import { readFile, writeFile } from 'node:fs/promises'

const TOLERANCIA_GRADOS = {
  'primer-viaje-colon': 0.02,
  'magallanes-elcano': 0.05,
}

const rutasReales = JSON.parse(
  await readFile('scripts/output/rutas-maritimas.json', 'utf-8'),
)

let rutasTs = await readFile('src/data/rutas.ts', 'utf-8')

// Reemplaza el array "coordinates: [ ... ]" del bloque de la ruta `id`
// contando profundidad de corchetes en vez de con una regex (los pares
// [lon, lat] anidados rompen cualquier regex no-greedy simple).
function reemplazarCoordinates(fuente, id, nuevoArrayLiteral) {
  const marcaId = `id: '${id}',`
  const inicioBloque = fuente.indexOf(marcaId)
  if (inicioBloque === -1) return null

  const marcaCoords = 'coordinates: ['
  const inicioCoords = fuente.indexOf(marcaCoords, inicioBloque)
  if (inicioCoords === -1) return null

  const inicioArray = inicioCoords + marcaCoords.length - 1
  let profundidad = 0
  let finArray = -1
  for (let i = inicioArray; i < fuente.length; i++) {
    if (fuente[i] === '[') profundidad++
    else if (fuente[i] === ']') {
      profundidad--
      if (profundidad === 0) {
        finArray = i
        break
      }
    }
  }
  if (finArray === -1) return null

  return (
    fuente.slice(0, inicioArray) +
    nuevoArrayLiteral +
    fuente.slice(finArray + 1)
  )
}

for (const [id, coordinates] of Object.entries(rutasReales)) {
  const linea = {
    type: 'Feature',
    properties: {},
    geometry: { type: 'LineString', coordinates },
  }
  const simplificada = simplify(linea, {
    tolerance: TOLERANCIA_GRADOS[id] ?? 0.02,
    highQuality: true,
  })
  const coordsFinal = simplificada.geometry.coordinates

  const actualizado = reemplazarCoordinates(
    rutasTs,
    id,
    JSON.stringify(coordsFinal),
  )
  if (!actualizado) {
    console.log(`⚠ No se encontró el bloque de coordinates para "${id}"`)
    continue
  }
  rutasTs = actualizado
  console.log(`${id}: ${coordinates.length} -> ${coordsFinal.length} puntos`)
}

await writeFile('src/data/rutas.ts', rutasTs, 'utf-8')
console.log('\n✅ src/data/rutas.ts actualizado con rutas marítimas reales')
