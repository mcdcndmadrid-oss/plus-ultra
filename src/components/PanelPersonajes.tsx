import {
  usePersonajesEditables,
  useEventosEditables,
  useRutasEditables,
} from '../data/datosEditables'
import type { Evento, Personaje, Ruta } from '../types/historia'
import { useHistoriaStore } from '../store/useHistoriaStore'
import { IconoRuta } from './IconoEvento'

interface Bloque {
  rutaId: string | null
  personajes: Personaje[]
  fechaMin: number
}

function rutaDePersonaje(p: Personaje, eventos: Evento[]): string | null {
  for (const eventoId of p.eventoIds) {
    const evento = eventos.find((e) => e.id === eventoId)
    if (evento?.rutaId) return evento.rutaId
  }
  return null
}

function agruparPorCampana(
  lista: Personaje[],
  eventos: Evento[],
  rutas: Ruta[],
): Bloque[] {
  const porRuta = new Map<string | null, Personaje[]>()
  for (const p of lista) {
    const clave = rutaDePersonaje(p, eventos)
    if (!porRuta.has(clave)) porRuta.set(clave, [])
    porRuta.get(clave)!.push(p)
  }
  const bloques: Bloque[] = []
  for (const [rutaId, ps] of porRuta) {
    if (rutaId === null) {
      // Los personajes sin campaña asociada se muestran sueltos.
      for (const p of ps) {
        bloques.push({ rutaId: null, personajes: [p], fechaMin: p.periodoRelevancia[0] })
      }
    } else {
      const ruta = rutas.find((r) => r.id === rutaId)
      bloques.push({
        rutaId,
        personajes: ps,
        fechaMin: ruta?.fechaInicio ?? ps[0].periodoRelevancia[0],
      })
    }
  }
  bloques.sort((a, b) => a.fechaMin - b.fechaMin)
  return bloques
}

export function PanelPersonajes() {
  const colapsado = useHistoriaStore((s) => s.panelPersonajesColapsado)
  const togglePanel = useHistoriaStore((s) => s.togglePanelPersonajes)
  const fechaActual = useHistoriaStore((s) => s.fechaActual)
  const seleccionar = useHistoriaStore((s) => s.seleccionar)
  const hover = useHistoriaStore((s) => s.hover)
  const setHover = useHistoriaStore((s) => s.setHover)
  const personajes = usePersonajesEditables()
  const eventos = useEventosEditables()
  const rutas = useRutasEditables()

  const personajesEpoca = personajes.filter(
    (p) =>
      fechaActual >= p.periodoRelevancia[0] - 3 &&
      fechaActual <= p.periodoRelevancia[1] + 3,
  )
  const bloques = agruparPorCampana(personajesEpoca, eventos, rutas)

  return (
    <aside
      className={`absolute top-4 right-4 z-10 flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-xl border border-stone-200 bg-white/95 shadow-lg backdrop-blur transition-[width] dark:border-stone-700 dark:bg-stone-900/95 ${
        colapsado ? 'w-40' : 'w-[calc(100vw-2rem)] sm:w-72'
      }`}
    >
      <button
        type="button"
        onClick={togglePanel}
        aria-expanded={!colapsado}
        className="flex items-center justify-between border-b border-stone-200 px-4 py-3 text-left dark:border-stone-700"
      >
        <div>
          <h2 className="text-sm font-semibold text-stone-800 dark:text-stone-100">
            Personajes
          </h2>
          <p className="text-xs text-stone-400 dark:text-stone-500">
            En torno a {Math.floor(fechaActual)}
          </p>
        </div>
        <span className="text-stone-400 dark:text-stone-500">{colapsado ? '▸' : '▾'}</span>
      </button>
      {!colapsado && (
        <div className="flex-1 overflow-y-auto">
          {bloques.length === 0 && (
            <p className="px-4 py-6 text-center text-xs text-stone-400 dark:text-stone-500">
              Sin personajes destacados en esta época.
            </p>
          )}
          {bloques.map((bloque) => {
            const ruta = bloque.rutaId
              ? rutas.find((r) => r.id === bloque.rutaId)
              : undefined

            return (
              <div
                key={bloque.rutaId ?? bloque.personajes[0].id}
                className="border-b border-stone-100 dark:border-stone-800"
                style={ruta ? { borderRight: `3px solid ${ruta.color}` } : undefined}
              >
                {ruta && (
                  <button
                    type="button"
                    onClick={() => seleccionar({ tipo: 'ruta', id: ruta.id })}
                    onMouseEnter={() =>
                      setHover({ tipo: 'ruta', id: ruta.id })
                    }
                    onMouseLeave={() => setHover(null)}
                    className={`flex w-full items-center gap-1.5 px-4 pt-3 pb-1 text-left transition-colors ${
                      hover?.tipo === 'ruta' && hover.id === ruta.id
                        ? 'bg-stone-50 dark:bg-stone-800'
                        : 'hover:bg-stone-50 dark:hover:bg-stone-800'
                    }`}
                  >
                    <IconoRuta
                      className="h-3.5 w-3.5 shrink-0"
                      style={{ color: ruta.color }}
                    />
                    <span
                      className="text-[11px] font-semibold"
                      style={{ color: ruta.color }}
                    >
                      {ruta.nombre}
                    </span>
                  </button>
                )}
                <ul>
                  {bloque.personajes.map((p) => (
                    <li key={p.id}>
                      <button
                        type="button"
                        onClick={() =>
                          seleccionar({ tipo: 'personaje', id: p.id })
                        }
                        onMouseEnter={() =>
                          setHover({ tipo: 'personaje', id: p.id })
                        }
                        onMouseLeave={() => setHover(null)}
                        className={`flex w-full items-center gap-3 py-3 pr-4 text-left transition-colors ${
                          ruta ? 'pl-8' : 'pl-4'
                        } ${
                          hover?.tipo === 'personaje' && hover.id === p.id
                            ? 'bg-amber-50 dark:bg-amber-500/10'
                            : 'hover:bg-stone-50 dark:hover:bg-stone-800'
                        }`}
                      >
                        {p.imagenWiki ? (
                          <img
                            src={p.imagenWiki}
                            alt={p.nombre}
                            className="h-10 w-10 shrink-0 rounded-full object-cover object-top"
                            style={
                              ruta
                                ? { boxShadow: `0 0 0 2px ${ruta.color}` }
                                : undefined
                            }
                          />
                        ) : (
                          <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-stone-200 text-sm font-semibold text-stone-500 dark:bg-stone-700 dark:text-stone-300">
                            {p.nombre.charAt(0)}
                          </div>
                        )}
                        <div>
                          <p className="text-sm font-medium text-stone-800 dark:text-stone-100">
                            {p.nombre}
                          </p>
                          <p className="text-xs text-stone-400 dark:text-stone-500">{p.rol}</p>
                        </div>
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      )}
    </aside>
  )
}
