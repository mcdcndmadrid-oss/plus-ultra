#!/usr/bin/env node
// Rellena el campo `resumen` de cada Ruta en src/data/rutas.ts a partir
// del extracto real de su articuloWiki (la introducción completa del
// artículo, igual que hace fetch-wikipedia.mjs para eventos y
// personajes). Sustituye el texto genérico autogenerado que mostraba
// VentanaDetalle ("Ruta de tipo X documentada entre Y y Z").
//
// Uso: node scripts/rellenar-resumenes-rutas.mjs

import { readFile, writeFile } from 'node:fs/promises'

const WIKI_EXTRACTO = (titulo) =>
  'https://es.wikipedia.org/w/api.php?action=query&format=json&origin=*' +
  '&prop=extracts&exintro=1&explaintext=1&redirects=1' +
  `&titles=${encodeURIComponent(titulo)}`

function esperar(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

async function obtenerJSON(url, intento = 1) {
  const res = await fetch(url, {
    headers: { 'User-Agent': 'PlusUltra-Pipeline/0.1 (proyecto educativo)' },
  })
  if (res.status === 429 && intento <= 3) {
    await esperar(3000 * intento)
    return obtenerJSON(url, intento + 1)
  }
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} — ${url}`)
  const json = await res.json()
  await esperar(1200)
  return json
}

function tituloDesdeUrl(url) {
  const ultimo = url.split('/wiki/')[1]
  return decodeURIComponent(ultimo).replace(/_/g, ' ')
}

async function obtenerExtracto(articuloWiki) {
  const titulo = tituloDesdeUrl(articuloWiki)
  const data = await obtenerJSON(WIKI_EXTRACTO(titulo))
  const paginas = Object.values(data.query?.pages ?? {})
  const pagina = paginas[0]
  if (!pagina || pagina.missing !== undefined) {
    throw new Error(`artículo no encontrado: "${titulo}"`)
  }
  const extracto = pagina.extract?.trim()
  if (!extracto) throw new Error('extracto vacío')
  if (/^[A-ZÁÉÍÓÚÑ][\wÁÉÍÓÚÑáéíóúñ ]+ puede (referirse|hacer referencia) a/.test(extracto)) {
    throw new Error('página de desambiguación')
  }
  return extracto
}

async function main() {
  const rutaTs = 'src/data/rutas.ts'
  const src = await readFile(rutaTs, 'utf-8')
  const inicio = src.indexOf('[')
  const fin = src.lastIndexOf(']')
  // eslint-disable-next-line no-eval
  const rutas = eval(src.slice(inicio, fin + 1))

  console.log(`Rellenando resumen de ${rutas.length} rutas...\n`)
  const fallos = []
  for (const r of rutas) {
    if (r.resumen) continue // ya tiene uno escrito a mano, no lo tocamos
    process.stdout.write(`  · ${r.nombre} ... `)
    if (!r.articuloWiki) {
      console.log('SIN articuloWiki, se omite')
      fallos.push(r.id)
      continue
    }
    try {
      r.resumen = await obtenerExtracto(r.articuloWiki)
      console.log('OK')
    } catch (err) {
      console.log(`FALLÓ (${err.message})`)
      fallos.push(r.id)
    }
  }

  const ts = `import type { Ruta } from '../types/historia'

// Rutas marítimas: generadas con searoute-ts (grafo de navegación
// mundial: sigue costas y estrechos reales, evita tierra). No depende de
// infraestructura moderna salvo canales artificiales (Suez, Panamá), que
// estas rutas no utilizan — por tanto es una aproximación honesta a la
// navegación real de la época, no un anacronismo.
//
// Rutas terrestres: los puntos son los hitos históricos documentados
// (ciudades, batallas) tomados de las crónicas; NO se generan con un
// enrutador de carreteras modernas (eso sería tan anacrónico como
// mostrar fronteras actuales). MapaHistorico.tsx suaviza estos pocos
// puntos con una curva Catmull-Rom al dibujarlos, sin inventar un
// trayecto que no está documentado.

export const rutas: Ruta[] = ${JSON.stringify(rutas, null, 2)}
`
  await writeFile(rutaTs, ts, 'utf-8')

  console.log(`\n✅ ${rutaTs} actualizado.`)
  if (fallos.length) {
    console.log(`\n⚠ ${fallos.length} rutas sin resumen automático (rellenar a mano):`)
    for (const id of fallos) console.log(`  - ${id}`)
  }
}

main()
