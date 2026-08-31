#!/usr/bin/env node
// Genera trayectos MARÍTIMOS reales con searoute-ts (grafo de navegación
// mundial: sigue costas y estrechos reales, evita tierra). No depende de
// infraestructura moderna salvo canales artificiales (Suez, Panamá), que
// estas rutas no utilizan — es una aproximación honesta a la navegación
// real de la época, no un anacronismo.
//
// IMPORTANTE — por qué no hay un equivalente para rutas TERRESTRES: se
// probó a usar un enrutador de carreteras (OSRM) para las campañas de
// tierra, pero eso hace que la ruta siga la red viaria MODERNA, que es
// tan anacrónico como mostrar fronteras actuales sobre un mapa de 1519.
// Las rutas terrestres se dejan como los hitos históricos documentados
// en rutas.ts, suavizados con una curva Catmull-Rom en MapaHistorico.tsx
// (ver suavizarLinea en src/lib/spline.ts) — sin inventar un trayecto
// que ninguna fuente histórica respalda.
//
// Uso: node scripts/generar-rutas-maritimas.mjs

import { seaRoute } from 'searoute-ts'
import { writeFile } from 'node:fs/promises'

function puntoGeoJSON([lon, lat]) {
  return {
    type: 'Feature',
    geometry: { type: 'Point', coordinates: [lon, lat] },
    properties: {},
  }
}

// Encadena tramos marítimos consecutivos entre cada par de waypoints.
function rutaMaritima(waypoints) {
  const coords = []
  for (let i = 0; i < waypoints.length - 1; i++) {
    const tramo = seaRoute(
      puntoGeoJSON(waypoints[i]),
      puntoGeoJSON(waypoints[i + 1]),
    )
    const puntos = tramo.geometry.coordinates
    coords.push(...(i === 0 ? puntos : puntos.slice(1)))
  }
  return coords
}

// Waypoints históricos (puertos de partida/llegada, puntos de paso
// documentados) de cada ruta marítima.
const RUTAS_MARITIMAS = {
  'primer-viaje-colon': [
    [-6.3, 37.2],
    [-16.9, 28.1],
    [-75.1, 24.3],
  ],
  'magallanes-elcano': [
    [-6.35, 36.78],
    [-58.4, -34.6],
    [-70.0, -53.5],
    [-110, -20],
    [123.97, 10.31],
    [127.4, -3.7],
    [18.4, -34.4],
    [-6.35, 36.78],
  ],
}

async function main() {
  const resultado = {}
  for (const [id, waypoints] of Object.entries(RUTAS_MARITIMAS)) {
    process.stdout.write(`${id} ... `)
    try {
      const coords = rutaMaritima(waypoints)
      resultado[id] = coords
      console.log(`OK (${coords.length} puntos)`)
    } catch (err) {
      console.log(`FALLÓ: ${err.message}`)
    }
  }

  await writeFile(
    'scripts/output/rutas-maritimas.json',
    JSON.stringify(resultado, null, 2),
    'utf-8',
  )
  console.log('\n✅ Escrito scripts/output/rutas-maritimas.json')
}

main()
