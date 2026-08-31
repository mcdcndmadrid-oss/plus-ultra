#!/usr/bin/env node
// Aplica un export de overrides del editor (JSON descargado desde
// useOverridesStore.exportarJSON(), vía el botón del módulo de edición
// o la consola del navegador) a los ficheros fuente reales
// (src/data/*.ts). A partir de ahí el contenido editado ya es el
// respaldo "oficial" para TODOS los visitantes, no solo para quien
// editó — este es el paso de "publicar" que menciona
// src/store/useOverridesStore.ts.
//
// Uso: node scripts/aplicar-overrides.mjs ruta/al/overrides.json

import { readFile, writeFile } from 'node:fs/promises'

const RUTA_TS = {
  eventos: 'src/data/eventos.ts',
  personajes: 'src/data/personajes.ts',
  rutas: 'src/data/rutas.ts',
  territorios: 'src/data/territorios.ts',
}
const NOMBRE_EXPORT = {
  eventos: 'eventos',
  personajes: 'personajes',
  rutas: 'rutas',
  territorios: 'territorios',
}
const TIPO_TS = {
  eventos: 'Evento',
  personajes: 'Personaje',
  rutas: 'Ruta',
  territorios: 'Territorio',
}

function fusionar(base, overrides) {
  const resultado = []
  const vistos = new Set()
  for (const item of base) {
    vistos.add(item.id)
    const ov = overrides[item.id]
    if (ov === null) continue
    resultado.push(ov ? { ...item, ...ov } : item)
  }
  for (const [id, ov] of Object.entries(overrides)) {
    if (!vistos.has(id) && ov !== null) resultado.push(ov)
  }
  return resultado
}

async function leerArrayTs(rutaTs) {
  const src = await readFile(rutaTs, 'utf-8')
  const inicio = src.indexOf('[')
  const fin = src.lastIndexOf(']')
  // eslint-disable-next-line no-eval
  return eval(src.slice(inicio, fin + 1))
}

async function main() {
  const rutaOverrides = process.argv[2]
  if (!rutaOverrides) {
    console.error('Uso: node scripts/aplicar-overrides.mjs <overrides.json>')
    process.exit(1)
  }
  const overridesPorColeccion = JSON.parse(
    await readFile(rutaOverrides, 'utf-8'),
  )

  for (const [coleccion, overrides] of Object.entries(overridesPorColeccion)) {
    if (Object.keys(overrides).length === 0) continue
    const rutaTs = RUTA_TS[coleccion]
    if (!rutaTs) {
      console.warn(`⚠ Colección desconocida "${coleccion}", se ignora`)
      continue
    }
    const base = await leerArrayTs(rutaTs)
    const fusionado = fusionar(base, overrides)

    const nombre = NOMBRE_EXPORT[coleccion]
    const tipo = TIPO_TS[coleccion]
    const contenido = `import type { ${tipo} } from '../types/historia'

export const ${nombre}: ${tipo}[] = ${JSON.stringify(fusionado, null, 2)}
`
    await writeFile(rutaTs, contenido, 'utf-8')
    console.log(
      `✅ ${rutaTs}: ${base.length} -> ${fusionado.length} elementos (${Object.keys(overrides).length} overrides aplicados)`,
    )
  }

  console.log(
    '\nEjecuta `npx prettier --write src/data/*.ts` y revisa el diff antes de hacer commit.',
  )
}

main()
