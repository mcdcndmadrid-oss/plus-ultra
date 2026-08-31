// Capa de fusión: combina el contenido de respaldo (extraído de
// Wikipedia, en src/data/*.ts) con las ediciones manuales guardadas en
// useOverridesStore. La edición manual SIEMPRE prevalece sobre el
// respaldo — ver useOverridesStore.ts para el porqué.
//
// Esta fusión solo existe como VISTA PREVIA en el navegador de quien
// edita (vía localStorage). Los visitantes normales de la página nunca
// tienen overrides guardados, así que ven exactamente el respaldo — el
// contenido "de verdad" solo cambia para todos cuando se exportan los
// overrides y se aplican a src/data/*.ts antes de desplegar (ver
// scripts/aplicar-overrides.mjs).
import { useMemo } from 'react'
import { eventos as eventosBase } from './eventos'
import { personajes as personajesBase } from './personajes'
import { reclamaciones as reclamacionesBase } from './reclamaciones'
import { rutas as rutasBase } from './rutas'
import { territorios as territoriosBase } from './territorios'
import { useOverridesStore } from '../store/useOverridesStore'
import type { Coleccion } from '../store/useOverridesStore'
import type { Evento, Personaje, Ruta, Territorio } from '../types/historia'

function fusionar<T extends { id: string }>(
  base: T[],
  overrides: Record<string, Record<string, unknown> | null>,
): T[] {
  const resultado: T[] = []
  const vistos = new Set<string>()

  for (const item of base) {
    vistos.add(item.id)
    const ov = overrides[item.id]
    if (ov === null) continue // eliminado en el editor
    resultado.push(ov ? ({ ...item, ...ov } as T) : item)
  }
  // Elementos creados en el editor, que no existen en el respaldo.
  for (const [id, ov] of Object.entries(overrides)) {
    if (!vistos.has(id) && ov !== null) resultado.push(ov as T)
  }
  return resultado
}

export function obtenerEventos(): Evento[] {
  return fusionar(eventosBase, useOverridesStore.getState().datos.eventos)
}

export function obtenerPersonajes(): Personaje[] {
  return fusionar(
    personajesBase,
    useOverridesStore.getState().datos.personajes,
  )
}

export function obtenerRutas(): Ruta[] {
  return fusionar(rutasBase, useOverridesStore.getState().datos.rutas)
}

export function obtenerTerritorios(): Territorio[] {
  return fusionar(
    territoriosBase,
    useOverridesStore.getState().datos.territorios,
  )
}

// Las reclamaciones no son editables en el módulo (por ahora) — se
// reexportan tal cual para que MapaHistorico tenga un único punto de
// entrada a los datos.
export function obtenerReclamaciones() {
  return reclamacionesBase
}

// --- Variantes reactivas (hooks), para componentes React que deben
// re-renderizar en cuanto el editor cambia algo. ---
export function useEventosEditables(): Evento[] {
  const overrides = useOverridesStore((s) => s.datos.eventos)
  return useMemo(() => fusionar(eventosBase, overrides), [overrides])
}

export function usePersonajesEditables(): Personaje[] {
  const overrides = useOverridesStore((s) => s.datos.personajes)
  return useMemo(() => fusionar(personajesBase, overrides), [overrides])
}

export function useRutasEditables(): Ruta[] {
  const overrides = useOverridesStore((s) => s.datos.rutas)
  return useMemo(() => fusionar(rutasBase, overrides), [overrides])
}

export function useTerritoriosEditables(): Territorio[] {
  const overrides = useOverridesStore((s) => s.datos.territorios)
  return useMemo(() => fusionar(territoriosBase, overrides), [overrides])
}

export const BASE: Record<Coleccion, { id: string }[]> = {
  eventos: eventosBase,
  personajes: personajesBase,
  rutas: rutasBase,
  territorios: territoriosBase,
}
