import { useEventosEditables, useRutasEditables } from '../data/datosEditables'
import type { Evento } from '../types/historia'
import { useHistoriaStore } from '../store/useHistoriaStore'
import { IconoEvento, IconoRuta } from './IconoEvento'

const VENTANA_ANIOS = 15

const ETIQUETAS_TIPO: Record<string, string> = {
  batalla: 'Batalla',
  fundacion: 'Fundación',
  tratado: 'Tratado',
  descubrimiento: 'Descubrimiento',
  rebelion: 'Rebelión',
}

interface Bloque {
  rutaId: string | null
  eventos: Evento[]
  fechaMin: number
}

function agruparPorCampana(lista: Evento[]): Bloque[] {
  const porRuta = new Map<string | null, Evento[]>()
  for (const e of lista) {
    const clave = e.rutaId ?? null
    if (!porRuta.has(clave)) porRuta.set(clave, [])
    porRuta.get(clave)!.push(e)
  }
  const bloques: Bloque[] = []
  for (const [rutaId, es] of porRuta) {
    es.sort((a, b) => a.fecha - b.fecha)
    if (rutaId === null) {
      // Los eventos sin campaña se muestran como bloques individuales.
      for (const e of es) bloques.push({ rutaId: null, eventos: [e], fechaMin: e.fecha })
    } else {
      bloques.push({ rutaId, eventos: es, fechaMin: es[0].fecha })
    }
  }
  bloques.sort((a, b) => a.fechaMin - b.fechaMin)
  return bloques
}

export function PanelEventos() {
  const colapsado = useHistoriaStore((s) => s.panelEventosColapsado)
  const togglePanel = useHistoriaStore((s) => s.togglePanelEventos)
  const fechaActual = useHistoriaStore((s) => s.fechaActual)
  const seleccionar = useHistoriaStore((s) => s.seleccionar)
  const hover = useHistoriaStore((s) => s.hover)
  const setHover = useHistoriaStore((s) => s.setHover)
  const tiposOcultos = useHistoriaStore((s) => s.tiposOcultos)
  const eventos = useEventosEditables()
  const rutas = useRutasEditables()

  const eventosEpoca = eventos.filter(
    (e) =>
      Math.abs(e.fecha - fechaActual) <= VENTANA_ANIOS &&
      !tiposOcultos.includes(e.tipo),
  )
  const bloques = agruparPorCampana(eventosEpoca)

  return (
    <aside
      className={`absolute top-4 left-4 z-10 flex max-h-[calc(100vh-7rem)] flex-col overflow-hidden rounded-xl border border-stone-200 bg-white/95 shadow-lg backdrop-blur transition-[width] dark:border-stone-700 dark:bg-stone-900/95 ${
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
            Acontecimientos
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
              Sin acontecimientos registrados en esta época.
            </p>
          )}
          {bloques.map((bloque) => {
            const ruta = bloque.rutaId
              ? rutas.find((r) => r.id === bloque.rutaId)
              : undefined

            return (
              <div
                key={bloque.rutaId ?? bloque.eventos[0].id}
                className="border-b border-stone-100 dark:border-stone-800"
                style={ruta ? { borderLeft: `3px solid ${ruta.color}` } : undefined}
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
                      {ruta.nombre} · {Math.floor(ruta.fechaInicio)}–
                      {Math.floor(ruta.fechaFin)}
                    </span>
                  </button>
                )}
                <ul>
                  {bloque.eventos.map((e) => (
                    <li key={e.id}>
                      <button
                        type="button"
                        onClick={() =>
                          seleccionar({ tipo: 'evento', id: e.id })
                        }
                        onMouseEnter={() =>
                          setHover({ tipo: 'evento', id: e.id })
                        }
                        onMouseLeave={() => setHover(null)}
                        className={`flex w-full flex-col gap-0.5 py-2 pr-4 text-left transition-colors ${
                          ruta ? 'pl-8' : 'pl-4'
                        } ${
                          hover?.tipo === 'evento' && hover.id === e.id
                            ? 'bg-amber-50 dark:bg-amber-500/10'
                            : 'hover:bg-stone-50 dark:hover:bg-stone-800'
                        }`}
                      >
                        <span className="flex items-center gap-1.5">
                          <IconoEvento
                            tipo={e.tipo}
                            className="h-3.5 w-3.5 shrink-0"
                            style={{ color: ruta?.color ?? '#78716c' }}
                          />
                          <span className="text-sm font-medium text-stone-800 dark:text-stone-100">
                            {e.titulo}
                          </span>
                        </span>
                        <span className="pl-5 text-xs text-stone-400 dark:text-stone-500">
                          {Math.floor(e.fecha)} · {ETIQUETAS_TIPO[e.tipo] ?? e.tipo}
                        </span>
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
