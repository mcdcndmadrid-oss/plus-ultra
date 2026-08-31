import { useState } from 'react'
import { useHistoriaStore } from '../store/useHistoriaStore'
import type { TipoEvento } from '../types/historia'
import { IconoEvento, IconoFiltro } from './IconoEvento'

const TIPOS: { valor: TipoEvento; etiqueta: string }[] = [
  { valor: 'batalla', etiqueta: 'Batallas' },
  { valor: 'fundacion', etiqueta: 'Fundaciones' },
  { valor: 'tratado', etiqueta: 'Tratados' },
  { valor: 'descubrimiento', etiqueta: 'Descubrimientos' },
  { valor: 'rebelion', etiqueta: 'Rebeliones' },
]

// Filtro de categorías de acontecimiento: afecta tanto al mapa como al
// panel de Acontecimientos, para poder aislar p. ej. solo las batallas
// de una época sin tener que leer cada icono uno a uno.
export function FiltroEventos() {
  const [abierto, setAbierto] = useState(false)
  const tiposOcultos = useHistoriaStore((s) => s.tiposOcultos)
  const toggleTipoOculto = useHistoriaStore((s) => s.toggleTipoOculto)
  const activo = tiposOcultos.length > 0

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setAbierto((a) => !a)}
        aria-label="Filtrar tipos de acontecimiento"
        aria-expanded={abierto}
        className={`flex h-8 w-8 items-center justify-center rounded-full transition-colors ${
          activo
            ? 'bg-amber-500 text-white'
            : 'text-stone-600 hover:bg-stone-100 dark:text-stone-300 dark:hover:bg-stone-700'
        }`}
      >
        <IconoFiltro className="h-4 w-4" />
      </button>

      {abierto && (
        <>
          <button
            type="button"
            aria-label="Cerrar filtro"
            onClick={() => setAbierto(false)}
            className="fixed inset-0 z-10 cursor-default"
          />
          <div className="absolute top-10 right-0 z-20 w-52 rounded-xl border border-stone-200 bg-white/95 p-2 shadow-lg backdrop-blur dark:border-stone-700 dark:bg-stone-900/95">
            <p className="px-2 py-1 text-[11px] font-semibold tracking-wide text-stone-400 uppercase dark:text-stone-500">
              Mostrar en el mapa
            </p>
            {TIPOS.map((t) => {
              const oculto = tiposOcultos.includes(t.valor)
              return (
                <label
                  key={t.valor}
                  className="flex cursor-pointer items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-stone-700 hover:bg-stone-50 dark:text-stone-200 dark:hover:bg-stone-800"
                >
                  <input
                    type="checkbox"
                    checked={!oculto}
                    onChange={() => toggleTipoOculto(t.valor)}
                    className="accent-stone-800 dark:accent-amber-500"
                  />
                  <IconoEvento tipo={t.valor} className="h-3.5 w-3.5 shrink-0 text-stone-500 dark:text-stone-400" />
                  {t.etiqueta}
                </label>
              )
            })}
          </div>
        </>
      )}
    </div>
  )
}
