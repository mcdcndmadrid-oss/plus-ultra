#!/usr/bin/env node
// Pipeline de datos (Fase 3): a partir de una "semilla" curada a mano
// (título de Wikipedia + metadatos mínimos), descarga el resumen y la
// imagen desde la Wikipedia en español y las fechas estructuradas desde
// Wikidata, y produce los ficheros TypeScript que consume la app.
//
// Uso: node scripts/fetch-wikipedia.mjs scripts/semillas/<archivo>.json

import { mkdir, writeFile } from 'node:fs/promises'
import path from 'node:path'

// La API REST de resumen solo devuelve el primer párrafo. Para tener la
// introducción completa (todos los párrafos previos al primer epígrafe,
// que es justo el resumen "muy exhaustivo pero conciso" que necesitamos)
// usamos la Action API con exintro=1&explaintext=1.
const WIKI_EXTRACTO = (titulo) =>
  'https://es.wikipedia.org/w/api.php?action=query&format=json&origin=*' +
  '&prop=extracts%7Cpageimages%7Ccoordinates%7Cinfo%7Cpageprops' +
  '&exintro=1&explaintext=1&piprop=thumbnail&pithumbsize=700&inprop=url' +
  '&ppprop=wikibase_item&redirects=1' +
  `&titles=${encodeURIComponent(titulo)}`

const WIKIDATA_ENTITY = (qid) =>
  `https://www.wikidata.org/wiki/Special:EntityData/${qid}.json`

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
  // Cortesía con la API pública: espaciamos las peticiones para no
  // disparar el límite de tasa de Wikipedia/Wikidata.
  await esperar(1200)
  return json
}

function anioDeFechaISO(fechaISO) {
  if (!fechaISO) return undefined
  const m = /^([+-]\d+)-(\d{2})-(\d{2})/.exec(fechaISO)
  if (!m) return undefined
  const anio = Number(m[1])
  const mes = Number(m[2])
  // Año decimal aproximado para poder ubicar el hito en la línea temporal.
  return anio + (mes - 1) / 12
}

async function obtenerFechasWikidata(qid) {
  if (!qid) return {}
  try {
    const data = await obtenerJSON(WIKIDATA_ENTITY(qid))
    const claims = data.entities?.[qid]?.claims ?? {}
    const fechaClaim = (prop) =>
      claims[prop]?.[0]?.mainsnak?.datavalue?.value?.time
    return {
      nacimiento: anioDeFechaISO(fechaClaim('P569')),
      muerte: anioDeFechaISO(fechaClaim('P570')),
    }
  } catch (err) {
    console.warn(`  ⚠ No se pudieron leer fechas de Wikidata (${qid}): ${err.message}`)
    return {}
  }
}

async function resolverArticulo(titulo) {
  const data = await obtenerJSON(WIKI_EXTRACTO(titulo))
  const paginas = Object.values(data.query?.pages ?? {})
  const pagina = paginas[0]
  if (!pagina || pagina.missing !== undefined) {
    throw new Error(`artículo no encontrado: "${titulo}"`)
  }
  const qid = pagina.pageprops?.wikibase_item
  const fechas = await obtenerFechasWikidata(qid)
  const coord = pagina.coordinates?.[0]
  return {
    titulo: pagina.title,
    resumen: pagina.extract?.trim(),
    imagenWiki: pagina.thumbnail?.source,
    articuloWiki: pagina.fullurl,
    coordenadas: coord ? [coord.lon, coord.lat] : undefined,
    ...fechas,
  }
}

async function main() {
  const semillaPath = process.argv[2]
  if (!semillaPath) {
    console.error('Uso: node scripts/fetch-wikipedia.mjs <semilla.json>')
    process.exit(1)
  }

  const semilla = JSON.parse(
    await (await import('node:fs/promises')).readFile(semillaPath, 'utf-8'),
  )

  const personajes = []
  const eventos = []
  const avisos = []

  console.log(`\n📚 Personajes (${semilla.personajes.length})`)
  for (const p of semilla.personajes) {
    process.stdout.write(`  · ${p.titulo} ... `)
    try {
      const art = await resolverArticulo(p.titulo)
      if (!art.resumen) avisos.push(`${p.id}: sin extracto de Wikipedia`)
      if (!art.imagenWiki) avisos.push(`${p.id}: sin imagen`)
      if (!art.nacimiento && !art.muerte)
        avisos.push(`${p.id}: sin fechas estructuradas en Wikidata`)
      personajes.push({
        id: p.id,
        nombre: art.titulo,
        nacimiento: art.nacimiento,
        muerte: art.muerte,
        periodoRelevancia: p.periodoRelevancia,
        rol: p.rol,
        resumen: art.resumen,
        imagenWiki: art.imagenWiki,
        articuloWiki: art.articuloWiki,
        eventoIds: semilla.eventos
          .filter((e) => e.personajeIds?.includes(p.id))
          .map((e) => e.id),
      })
      console.log('OK')
    } catch (err) {
      console.log(`FALLÓ (${err.message})`)
      avisos.push(`${p.id}: error de red/API — ${err.message}`)
    }
  }

  console.log(`\n🗺  Eventos (${semilla.eventos.length})`)
  for (const e of semilla.eventos) {
    process.stdout.write(`  · ${e.titulo} ... `)
    try {
      const art = await resolverArticulo(e.titulo)
      if (!art.coordenadas && !e.coordenadas)
        avisos.push(`${e.id}: sin coordenadas (ni en Wikipedia ni en la semilla)`)
      eventos.push({
        id: e.id,
        titulo: art.titulo,
        tipo: e.tipo,
        fecha: e.fechaAprox,
        coordenadas: e.coordenadas ?? art.coordenadas,
        resumen: art.resumen,
        imagenWiki: art.imagenWiki,
        articuloWiki: art.articuloWiki,
        personajeIds: e.personajeIds ?? [],
        rutaId: e.rutaId,
      })
      console.log('OK')
    } catch (err) {
      console.log(`FALLÓ (${err.message})`)
      avisos.push(`${e.id}: error de red/API — ${err.message}`)
    }
  }

  const outDir = path.join(process.cwd(), 'scripts', 'output')
  await mkdir(outDir, { recursive: true })
  const outFile = path.join(
    outDir,
    path.basename(semillaPath, '.json') + '.json',
  )
  await writeFile(
    outFile,
    JSON.stringify({ personajes, eventos, avisos }, null, 2),
    'utf-8',
  )

  console.log(`\n✅ Escrito ${outFile}`)
  if (avisos.length) {
    console.log(`\n⚠ Avisos de validación (${avisos.length}):`)
    for (const a of avisos) console.log(`  - ${a}`)
  }
}

main()
