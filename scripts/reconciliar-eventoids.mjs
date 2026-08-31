#!/usr/bin/env node
// Reconcilia personajes.eventoIds con eventos.personajeIds: para cada
// evento, se asegura de que cada personaje que referencia (personajeIds)
// tenga ese evento en su propia lista eventoIds. Corrige el caso en que
// un evento se escribió a mano en eventos.ts sin actualizar también el
// personaje correspondiente (rompía el agrupamiento por campaña en
// PanelPersonajes, que depende de eventoIds para encontrar la ruta).
//
// Uso: node scripts/reconciliar-eventoids.mjs

import { readFile, writeFile } from 'node:fs/promises'

async function leerArray(ruta) {
  const src = await readFile(ruta, 'utf-8')
  const inicio = src.indexOf('[')
  const fin = src.lastIndexOf(']')
  // eslint-disable-next-line no-eval
  return eval(src.slice(inicio, fin + 1))
}

async function main() {
  const personajes = await leerArray('src/data/personajes.ts')
  const eventos = await leerArray('src/data/eventos.ts')

  let corregidos = 0
  for (const e of eventos) {
    for (const pid of e.personajeIds ?? []) {
      const p = personajes.find((x) => x.id === pid)
      if (!p) {
        console.warn(`⚠ evento "${e.id}" referencia personaje inexistente "${pid}"`)
        continue
      }
      if (!p.eventoIds.includes(e.id)) {
        p.eventoIds.push(e.id)
        corregidos++
        console.log(`  + ${p.id}.eventoIds += "${e.id}"`)
      }
    }
  }

  if (corregidos === 0) {
    console.log('✅ Nada que corregir, todo reconciliado ya.')
    return
  }

  const ts = `import type { Personaje } from '../types/historia'

export const personajes: Personaje[] = ${JSON.stringify(personajes, null, 2)}
`
  await writeFile('src/data/personajes.ts', ts, 'utf-8')
  console.log(`\n✅ src/data/personajes.ts actualizado (${corregidos} referencias añadidas).`)
}

main()
