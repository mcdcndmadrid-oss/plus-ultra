import type { CapaBase } from '../types/historia'
import { useHistoriaStore } from '../store/useHistoriaStore'
import { FiltroEventos } from './FiltroEventos'
import { IconoBuscar } from './IconoEvento'

const OPCIONES: { valor: CapaBase; etiqueta: string; corta: string }[] = [
  { valor: 'minimalista', etiqueta: 'Minimalista', corta: 'Mín.' },
  { valor: 'fisico', etiqueta: 'Mapa físico', corta: 'Físico' },
  { valor: 'satelite', etiqueta: 'Satélite', corta: 'Satél.' },
]

export function SelectorCapas() {
  const capaBase = useHistoriaStore((s) => s.capaBase)
  const setCapaBase = useHistoriaStore((s) => s.setCapaBase)
  const setBusquedaAbierta = useHistoriaStore((s) => s.setBusquedaAbierta)

  return (
    <div className="absolute top-20 left-1/2 z-10 flex -translate-x-1/2 items-center gap-1.5 sm:top-4">
      <div className="flex gap-1 rounded-full bg-white/90 p-1 text-xs shadow-lg backdrop-blur dark:bg-stone-900/90">
        {OPCIONES.map((o) => (
          <button
            key={o.valor}
            type="button"
            onClick={() => setCapaBase(o.valor)}
            className={`rounded-full px-2.5 py-1.5 whitespace-nowrap transition-colors sm:px-3 ${
              capaBase === o.valor
                ? 'bg-stone-800 text-white dark:bg-amber-500 dark:text-stone-950'
                : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800'
            }`}
          >
            <span className="hidden sm:inline">{o.etiqueta}</span>
            <span className="sm:hidden">{o.corta}</span>
          </button>
        ))}
      </div>

      <div className="flex items-center gap-1 rounded-full bg-white/90 p-1 shadow-lg backdrop-blur dark:bg-stone-900/90">
        <button
          type="button"
          onClick={() => setBusquedaAbierta(true)}
          aria-label="Buscar (Ctrl+K)"
          title="Buscar (Ctrl+K)"
          className="flex h-8 w-8 items-center justify-center rounded-full text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-800"
        >
          <IconoBuscar className="h-4 w-4" />
        </button>
        <FiltroEventos />
      </div>
    </div>
  )
}
