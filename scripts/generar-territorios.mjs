#!/usr/bin/env node
// Genera src/data/territorios.ts a partir de geometrías reales del
// dataset abierto Historical Basemaps (github.com/aourednik/
// historical-basemaps), que publica instantáneas del mapa político
// mundial en años concretos: 1492, 1500, 1530, 1600, 1650, 1700, 1715,
// 1783, 1800, 1815, 1880, 1900.
//
// A diferencia de la primera versión (una sola geometría estática por
// territorio para todo su rango de fechas), este script usa TODAS las
// instantáneas disponibles dentro de la vigencia histórica de cada
// territorio y las trocea en varios "tramos" consecutivos — así la
// frontera cambia de forma varias veces a lo largo de su vida en vez de
// una silueta fija, aproximando mucho mejor la evolución real. Sigue
// sin ser continuo año a año (el dataset no lo es), pero es la mayor
// resolución temporal que da la fuente sin inventar geometría.
//
// Uso: node scripts/generar-territorios.mjs

import { simplify } from '@turf/simplify'
import { writeFile } from 'node:fs/promises'

const BASE_URL =
  'https://raw.githubusercontent.com/aourednik/historical-basemaps/master/geojson/world_'

const cacheAnios = new Map()

async function obtenerAnio(anio) {
  if (!cacheAnios.has(anio)) {
    const res = await fetch(`${BASE_URL}${anio}.geojson`)
    if (!res.ok) throw new Error(`${res.status} al descargar el año ${anio}`)
    cacheAnios.set(anio, await res.json())
  }
  return cacheAnios.get(anio)
}

async function obtenerGeometria(anio, nombreOrigen) {
  const datos = await obtenerAnio(anio)
  const feature = datos.features.find((f) => f.properties.NAME === nombreOrigen)
  if (!feature) {
    throw new Error(`"${nombreOrigen}" no encontrado en el año ${anio}`)
  }
  const simplificada = simplify(feature, { tolerance: 0.015, highQuality: true })
  return simplificada.geometry
}

// Manifiesto curado: para cada territorio, sus fechas históricas reales
// (desde/hasta) y la lista de instantáneas del dataset disponibles
// dentro de ese rango, con el nombre exacto (varía entre años: p. ej.
// "Vice Royalty of Peru" vs "Vice-Royalty of Peru") bajo el que aparece
// en cada una. Los tramos deben ir en orden ascendente de año.
const MANIFIESTO = [
  {
    id: 'castilla',
    nombre: 'Corona de Castilla',
    tipo: 'reino',
    desde: 1469,
    hasta: 1516,
    motivoFin: 'vigente',
    articuloWiki: 'https://es.wikipedia.org/wiki/Corona_de_Castilla',
    tramos: [
      { anio: 1492, nombre: 'Castille' },
      { anio: 1500, nombre: 'Castille' },
    ],
  },
  {
    id: 'espana',
    nombre: 'Corona de España',
    tipo: 'reino',
    desde: 1516,
    hasta: 1899,
    motivoFin: 'vigente',
    articuloWiki: 'https://es.wikipedia.org/wiki/Imperio_espa%C3%B1ol',
    tramos: [
      { anio: 1530, nombre: 'Spain' },
      { anio: 1600, nombre: 'Spain' },
      { anio: 1650, nombre: 'Spain' },
      { anio: 1700, nombre: 'Spain' },
      { anio: 1715, nombre: 'Spain' },
      { anio: 1783, nombre: 'Spain' },
      { anio: 1800, nombre: 'Spain' },
      { anio: 1815, nombre: 'Spain' },
      { anio: 1880, nombre: 'Spain' },
    ],
  },
  {
    id: 'nueva-espana',
    nombre: 'Virreinato de Nueva España',
    tipo: 'virreinato',
    desde: 1521,
    hasta: 1821,
    motivoFin: 'independencia',
    articuloWiki:
      'https://es.wikipedia.org/wiki/Virreinato_de_Nueva_Espa%C3%B1a',
    tramos: [
      { anio: 1530, nombre: 'Vice Royalty of New Spain' },
      { anio: 1600, nombre: 'Vice Royalty of New Spain' },
      { anio: 1650, nombre: 'Vice-Royalty of New Spain' },
      { anio: 1700, nombre: 'Vice-Royalty of New Spain' },
      { anio: 1715, nombre: 'Vice-Royalty of New Spain' },
      { anio: 1783, nombre: 'Vice-Royalty of New Spain' },
      { anio: 1800, nombre: 'Vice-Royalty of New Spain' },
      { anio: 1815, nombre: 'Vice-Royalty of New Spain' },
    ],
  },
  {
    id: 'peru',
    nombre: 'Virreinato del Perú',
    tipo: 'virreinato',
    desde: 1542,
    hasta: 1824,
    motivoFin: 'independencia',
    articuloWiki: 'https://es.wikipedia.org/wiki/Virreinato_del_Per%C3%BA',
    tramos: [
      { anio: 1650, nombre: 'Vice Royalty of Peru' },
      { anio: 1700, nombre: 'Vice Royalty of Peru' },
      { anio: 1715, nombre: 'Vice-Royalty of Peru' },
      { anio: 1783, nombre: 'Vice-Royalty of Peru' },
      { anio: 1800, nombre: 'Vice-Royalty of Peru' },
      { anio: 1815, nombre: 'Vice-Royalty of Peru' },
    ],
  },
  {
    id: 'nueva-granada',
    nombre: 'Virreinato de Nueva Granada',
    tipo: 'virreinato',
    desde: 1717,
    hasta: 1819,
    motivoFin: 'independencia',
    articuloWiki:
      'https://es.wikipedia.org/wiki/Virreinato_de_Nueva_Granada',
    tramos: [
      { anio: 1783, nombre: 'Vice-Royalty of New Granada' },
      { anio: 1800, nombre: 'Vice-Royalty of New Granada' },
      { anio: 1815, nombre: 'Vice-Royalty of New Granada' },
    ],
  },
  {
    id: 'rio-de-la-plata',
    nombre: 'Virreinato del Río de la Plata',
    tipo: 'virreinato',
    desde: 1776,
    hasta: 1810,
    motivoFin: 'independencia',
    articuloWiki:
      'https://es.wikipedia.org/wiki/Virreinato_del_R%C3%ADo_de_la_Plata',
    tramos: [
      { anio: 1783, nombre: 'Viceroyalty of the Río de la Plata' },
      { anio: 1800, nombre: 'Viceroyalty of the Río de la Plata' },
    ],
  },
  {
    id: 'filipinas',
    nombre: 'Capitanía General de Filipinas',
    tipo: 'capitania',
    desde: 1565,
    hasta: 1898,
    motivoFin: 'guerra-cuba',
    articuloWiki:
      'https://es.wikipedia.org/wiki/Capitan%C3%ADa_General_de_Filipinas',
    tramos: [
      { anio: 1650, nombre: 'Philippines' },
      { anio: 1700, nombre: 'Philippines' },
      { anio: 1715, nombre: 'Philippines' },
      { anio: 1783, nombre: 'Philippines' },
      { anio: 1800, nombre: 'Philippines' },
      { anio: 1815, nombre: 'Philippines' },
      { anio: 1880, nombre: 'Philippines' },
    ],
  },
  {
    id: 'napoles',
    nombre: 'Reino de Nápoles',
    tipo: 'reino',
    desde: 1516,
    hasta: 1714,
    motivoFin: 'utrecht',
    articuloWiki: 'https://es.wikipedia.org/wiki/Reino_de_N%C3%A1poles',
    tramos: [
      { anio: 1530, nombre: 'Naples' },
      { anio: 1600, nombre: 'Naples' },
      { anio: 1650, nombre: 'Naples' },
      { anio: 1700, nombre: 'Naples' },
    ],
  },
  {
    id: 'sicilia',
    nombre: 'Reino de Sicilia',
    tipo: 'reino',
    desde: 1516,
    hasta: 1713,
    motivoFin: 'utrecht',
    articuloWiki: 'https://es.wikipedia.org/wiki/Reino_de_Sicilia',
    tramos: [
      { anio: 1530, nombre: 'Sicily' },
      { anio: 1600, nombre: 'Sicily' },
      { anio: 1650, nombre: 'Sicily' },
      { anio: 1700, nombre: 'Sicily' },
    ],
  },
  {
    id: 'milan',
    nombre: 'Ducado de Milán',
    tipo: 'ducado',
    desde: 1535,
    hasta: 1714,
    motivoFin: 'utrecht',
    articuloWiki: 'https://es.wikipedia.org/wiki/Ducado_de_Mil%C3%A1n',
    tramos: [
      { anio: 1600, nombre: 'Milan' },
      { anio: 1650, nombre: 'Milan' },
      { anio: 1700, nombre: 'Milan' },
    ],
  },
  {
    id: 'cerdena',
    nombre: 'Reino de Cerdeña',
    tipo: 'reino',
    desde: 1516,
    hasta: 1713,
    motivoFin: 'utrecht',
    articuloWiki: 'https://es.wikipedia.org/wiki/Reino_de_Cerde%C3%B1a',
    tramos: [
      { anio: 1530, nombre: 'Sardinia' },
      { anio: 1600, nombre: 'Sardinia' },
      { anio: 1650, nombre: 'Sardinia' },
      { anio: 1700, nombre: 'Sardinia' },
    ],
  },
  {
    id: 'paises-bajos',
    nombre: 'Países Bajos Españoles',
    tipo: 'reino',
    desde: 1516,
    hasta: 1714,
    motivoFin: 'utrecht',
    articuloWiki: 'https://es.wikipedia.org/wiki/Pa%C3%ADses_Bajos_Espa%C3%B1oles',
    // El dataset solo distingue "Habsburg Netherlands" (todo el territorio,
    // antes de la escisión de las Provincias Unidas) en 1530 y 1600; de
    // 1650 a 1714 no hay instantánea propia, así que el último tramo
    // conserva la silueta de 1600 hasta el traspaso a Austria en Utrecht.
    tramos: [
      { anio: 1530, nombre: 'Habsburg Netherlands' },
      { anio: 1600, nombre: 'Habsburg Netherlands' },
    ],
  },
  {
    id: 'portugal-union',
    nombre: 'Portugal (Unión Ibérica)',
    tipo: 'reino',
    desde: 1580,
    hasta: 1640,
    motivoFin: 'restauracion-portugal',
    articuloWiki: 'https://es.wikipedia.org/wiki/Uni%C3%B3n_Ib%C3%A9rica',
    // El dataset dibuja Portugal como entidad continua en todos los años
    // (no distingue la unión dinástica de 1580-1640, un cambio de
    // soberano sin fusión administrativa); se usa la silueta de 1600,
    // el único año dentro del periodo, para todo el tramo.
    tramos: [{ anio: 1600, nombre: 'Portugal' }],
  },
  {
    id: 'florida-1',
    nombre: 'Florida',
    tipo: 'gobernacion',
    desde: 1565,
    hasta: 1763,
    motivoFin: 'cesion',
    articuloWiki: 'https://es.wikipedia.org/wiki/Florida_espa%C3%B1ola',
    // Primera etapa española, hasta su cesión a Gran Bretaña en 1763
    // (Tratado de París). El dataset solo la etiqueta como entidad
    // propia ("Florida"/"Florida (Spain)") en estas tres instantáneas.
    tramos: [
      { anio: 1650, nombre: 'Florida' },
      { anio: 1700, nombre: 'Florida' },
      { anio: 1715, nombre: 'Florida (Spain)' },
    ],
  },
  {
    id: 'florida-2',
    nombre: 'Florida',
    tipo: 'gobernacion',
    desde: 1783,
    hasta: 1821,
    motivoFin: 'cesion',
    articuloWiki: 'https://es.wikipedia.org/wiki/Florida_espa%C3%B1ola',
    // Segunda etapa española (recuperada de Gran Bretaña en 1783, cedida
    // a EE. UU. en 1821 por el tratado Adams-Onís). Sin instantánea
    // propia en este rango; reutiliza la silueta de 1715 (la costa de
    // la península no cambia).
    tramos: [{ anio: 1715, nombre: 'Florida (Spain)' }],
  },
  {
    id: 'luisiana',
    nombre: 'Luisiana',
    tipo: 'gobernacion',
    desde: 1762,
    hasta: 1803,
    motivoFin: 'cesion',
    articuloWiki: 'https://es.wikipedia.org/wiki/Luisiana_(Nueva_Espa%C3%B1a)',
    tramos: [
      { anio: 1783, nombre: 'Luisiana' },
      { anio: 1800, nombre: 'Luisiana' },
    ],
  },
  {
    id: 'cuba-pr',
    nombre: 'Capitanía General de Cuba',
    tipo: 'capitania',
    desde: 1511,
    hasta: 1898,
    motivoFin: 'guerra-cuba',
    articuloWiki: 'https://es.wikipedia.org/wiki/Capitan%C3%ADa_General_de_Cuba',
    // El dataset solo etiqueta "Cuba (Spain)" como entidad aparte hasta
    // 1700; tras la independencia continental (1810-1825) siguió siendo
    // española hasta 1898, así que el último tramo conserva esa silueta
    // hasta la guerra hispano-estadounidense.
    tramos: [
      { anio: 1530, nombre: 'Cuba (Spain)' },
      { anio: 1600, nombre: 'Cuba (Spain)' },
      { anio: 1650, nombre: 'Cuba (Spain)' },
      { anio: 1700, nombre: 'Cuba (Spain)' },
    ],
  },
]

async function main() {
  const bloques = []
  for (const t of MANIFIESTO) {
    console.log(`${t.id} (${t.tramos.length} tramos)`)
    for (let i = 0; i < t.tramos.length; i++) {
      const tramo = t.tramos[i]
      const segDesde = i === 0 ? t.desde : tramo.anio
      const segHasta =
        i === t.tramos.length - 1 ? t.hasta : t.tramos[i + 1].anio
      process.stdout.write(
        `  [${segDesde}-${segHasta}] <- ${tramo.anio} "${tramo.nombre}" ... `,
      )
      try {
        const geometry = await obtenerGeometria(tramo.anio, tramo.nombre)
        bloques.push({
          id: `${t.id}-${tramo.anio}`,
          nombre: t.nombre,
          tipo: t.tipo,
          desde: segDesde,
          hasta: segHasta,
          // Año de incorporación ORIGINAL del territorio (no del tramo):
          // así todos los tramos de un mismo territorio comparten el
          // mismo tono de rojo por siglo, aunque su forma cambie.
          origenDesde: t.desde,
          motivoFin: t.motivoFin,
          articuloWiki: t.articuloWiki,
          geometry,
        })
        console.log('OK')
      } catch (err) {
        console.log(`FALLÓ: ${err.message}`)
      }
    }
  }

  const ts = `import type { Territorio } from '../types/historia'

// Geometrías reales tomadas de Historical Basemaps
// (github.com/aourednik/historical-basemaps), generadas con
// scripts/generar-territorios.mjs. Cada territorio histórico se
// trocea en varios TRAMOS consecutivos (mismo id base, distinto año),
// uno por cada instantánea del dataset disponible dentro de su
// vigencia, para que la frontera cambie de forma a lo largo del tiempo
// en vez de mantener una silueta fija — ver nota de "fronteras
// aproximadas" en el README.
export const territorios: Territorio[] = ${JSON.stringify(bloques, null, 2)}
`

  await writeFile('src/data/territorios.ts', ts, 'utf-8')
  console.log(
    `\n✅ src/data/territorios.ts generado con ${bloques.length} tramos (${MANIFIESTO.length} territorios)`,
  )
}

main()
