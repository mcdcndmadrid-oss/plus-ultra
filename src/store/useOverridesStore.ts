import { create } from 'zustand'
import { persist } from 'zustand/middleware'

// Las cuatro colecciones editables. El contenido importado de Wikipedia
// (src/data/*.ts) es siempre el "de respaldo": este store solo guarda
// las DIFERENCIAS respecto a ese respaldo, y esas diferencias
// prevalecen siempre que existen. Se persiste en localStorage, así que
// las ediciones sobreviven a recargar la página (pero son locales a
// este navegador; exportar a CSV/JSON es la forma de compartirlas o de
// incorporarlas de verdad a src/data/*.ts).
export type Coleccion = 'eventos' | 'personajes' | 'rutas' | 'territorios'

export const COLECCIONES: Coleccion[] = [
  'eventos',
  'personajes',
  'rutas',
  'territorios',
]

// Un valor `null` es una tumba: "este id del respaldo está eliminado".
// Un objeto es la versión editada (o un elemento nuevo, si el id no
// existe en el respaldo).
type MapaOverrides = Record<string, Record<string, unknown> | null>

interface OverridesState {
  datos: Record<Coleccion, MapaOverrides>
  // Se incrementa en cada mutación: los módulos no-React (MapaHistorico
  // trabaja con funciones planas, no hooks) lo usan como dependencia de
  // efecto para saber cuándo refrescar.
  version: number
  setOverride: (
    coleccion: Coleccion,
    id: string,
    valor: Record<string, unknown>,
  ) => void
  eliminar: (coleccion: Coleccion, id: string) => void
  restaurar: (coleccion: Coleccion, id: string) => void
  tieneOverride: (coleccion: Coleccion, id: string) => boolean
  vaciarTodo: () => void
  exportarJSON: () => string
  importarJSON: (json: string) => void
}

const VACIO: Record<Coleccion, MapaOverrides> = {
  eventos: {},
  personajes: {},
  rutas: {},
  territorios: {},
}

export const useOverridesStore = create<OverridesState>()(
  persist(
    (set, get) => ({
      datos: VACIO,
      version: 0,
      setOverride: (coleccion, id, valor) =>
        set((s) => ({
          datos: {
            ...s.datos,
            [coleccion]: { ...s.datos[coleccion], [id]: valor },
          },
          version: s.version + 1,
        })),
      eliminar: (coleccion, id) =>
        set((s) => ({
          datos: {
            ...s.datos,
            [coleccion]: { ...s.datos[coleccion], [id]: null },
          },
          version: s.version + 1,
        })),
      restaurar: (coleccion, id) =>
        set((s) => {
          const copia = { ...s.datos[coleccion] }
          delete copia[id]
          return {
            datos: { ...s.datos, [coleccion]: copia },
            version: s.version + 1,
          }
        }),
      tieneOverride: (coleccion, id) => id in get().datos[coleccion],
      vaciarTodo: () => set({ datos: VACIO, version: get().version + 1 }),
      exportarJSON: () => JSON.stringify(get().datos, null, 2),
      importarJSON: (json) => {
        const datos = JSON.parse(json) as Record<Coleccion, MapaOverrides>
        set((s) => ({ datos, version: s.version + 1 }))
      },
    }),
    { name: 'plusultra-overrides' },
  ),
)
