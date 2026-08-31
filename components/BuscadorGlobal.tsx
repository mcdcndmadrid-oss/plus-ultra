import { useEffect, useMemo, useRef, useState } from 'react'
import {
  useEventosEditables,
  usePersonajesEditables,
  useRutasEditables,
  useTerritoriosEditables,
} from '../data/datosEditables'
import { useHistoriaStore } from '../store/useHistoriaStore'
import { IconoBuscar, IconoEvento, IconoRuta } from './IconoEvento'
import type { Seleccion, SeleccionTipo } from '../types/historia'

interface Resultado {
  seleccion: Seleccion
  titulo: string
  subtitulo: string
  fecha: number
  tipo: SeleccionTipo
}

const ETIQUETA_TIPO: Record<SeleccionTipo, string> = {
  evento: 'Acontecimiento',
  personaje: 'Personaje',
  ruta: 'Campaña',
  territorio: 'Territorio',
}

function normalizar(texto: string): string {
  return texto
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
}

// Buscador global (Ctrl/Cmd+K): con más de ochenta personajes y un
// centenar de acontecimientos, navegar solo arrastrando la línea
// temporal se queda corto — esto permite saltar directamente a
// cualquier elemento por nombre.
export function BuscadorGlobal() {
  const abierto = useHistoriaStore((s) => s.busquedaAbierta)
  const setAbierto = useHistoriaStore((s) => s.setBusquedaAbierta)
  const setFecha = useHistoriaStore((s) => s.setFecha)
  const seleccionar = useHistoriaStore((s) => s.seleccionar)

  const [consulta, setConsulta] = useState('')
  const [indice, setIndice] = useState(0)
  const inputRef = useRef<HTMLInputElement>(null)

  const eventos = useEventosEditables()
  const personajes = usePersonajesEditables()
  const rutas = useRutasEditables()
  const territorios = useTerritoriosEditables()

  useEffect(() => {
    const manejar = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setAbierto(!useHistoriaStore.getState().busquedaAbierta)
      }
      if (e.key === 'Escape') setAbierto(false)
    }
    window.addEventListener('keydown', manejar)
    return () => window.removeEventListener('keydown', manejar)
  }, [setAbierto])

  useEffect(() => {
    if (abierto) {
      setConsulta('')
      setIndice(0)
      requestAnimationFrame(() => inputRef.current?.focus())
    }
  }, [abierto])

  const todos = useMemo<Resultado[]>(() => {
    const deEventos: Resultado[] = eventos.map((e) => ({
      seleccion: { tipo: 'evento', id: e.id },
      titulo: e.titulo,
      subtitulo: `${Math.floor(e.fecha)}`,
      fecha: e.fecha,
      tipo: 'evento',
    }))
    const dePersonajes: Resultado[] = personajes.map((p) => ({
      seleccion: { tipo: 'personaje', id: p.id },
      titulo: p.nombre,
      subtitulo: p.rol,
      fecha: p.periodoRelevancia[0],
      tipo: 'personaje',
    }))
    const deRutas: Resultado[] = rutas.map((r) => ({
      seleccion: { tipo: 'ruta', id: r.id },
      titulo: r.nombre,
      subtitulo: `${Math.floor(r.fechaInicio)}–${Math.floor(r.fechaFin)}`,
      fecha: r.fechaInicio,
      tipo: 'ruta',
    }))
    // Un territorio histórico se trocea en varios tramos consecutivos
    // (mismo nombre, distinto id): nos quedamos solo con el más antiguo
    // de cada uno para no repetir "Corona de España" nueve veces.
    const territorioPorNombre = new Map<string, (typeof territorios)[number]>()
    for (const t of territorios) {
      const previo = territorioPorNombre.get(t.nombre)
      if (!previo || t.desde < previo.desde) territorioPorNombre.set(t.nombre, t)
    }
    const deTerritorios: Resultado[] = [...territorioPorNombre.values()].map(
      (t) => ({
        seleccion: { tipo: 'territorio', id: t.id },
        titulo: t.nombre,
        subtitulo: `${t.origenDesde}–${t.motivoFin === 'vigente' ? '1899' : t.hasta}`,
        fecha: t.desde,
        tipo: 'territorio',
      }),
    )
    return [...deEventos, ...dePersonajes, ...deRutas, ...deTerritorios]
  }, [eventos, personajes, rutas, territorios])

  const resultados = useMemo(() => {
    const q = normalizar(consulta.trim())
    if (!q) return []
    const vistos = new Set<string>()
    const filtrados: Resultado[] = []
    for (const r of todos) {
      const clave = `${r.tipo}:${r.seleccion.id}`
      if (vistos.has(clave)) continue
      if (
        normalizar(r.titulo).includes(q) ||
        normalizar(r.subtitulo).includes(q)
      ) {
        vistos.add(clave)
        filtrados.push(r)
      }
    }
    return filtrados.slice(0, 30)
  }, [consulta, todos])

  const elegir = (r: Resultado) => {
    setFecha(r.fecha)
    seleccionar(r.seleccion)
    setAbierto(false)
  }

  if (!abierto) return null

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-stone-900/40 pt-[12vh] backdrop-blur-sm">
      <button
        type="button"
        aria-label="Cerrar buscador"
        onClick={() => setAbierto(false)}
        className="absolute inset-0 cursor-default"
      />
      <div className="relative z-10 w-full max-w-lg overflow-hidden rounded-xl border border-stone-200 bg-white shadow-2xl dark:border-stone-700 dark:bg-stone-900">
        <div className="flex items-center gap-2 border-b border-stone-200 px-4 py-3 dark:border-stone-700">
          <IconoBuscar className="h-4 w-4 shrink-0 text-stone-400" />
          <input
            ref={inputRef}
            type="text"
            value={consulta}
            onChange={(e) => {
              setConsulta(e.target.value)
              setIndice(0)
            }}
            onKeyDown={(e) => {
              if (e.key === 'ArrowDown') {
                e.preventDefault()
                setIndice((i) => Math.min(i + 1, resultados.length - 1))
              } else if (e.key === 'ArrowUp') {
                e.preventDefault()
                setIndice((i) => Math.max(i - 1, 0))
              } else if (e.key === 'Enter' && resultados[indice]) {
                elegir(resultados[indice])
              }
            }}
            placeholder="Buscar acontecimientos, personajes, campañas, territorios…"
            className="w-full bg-transparent text-sm text-stone-800 outline-none placeholder:text-stone-400 dark:text-stone-100"
          />
          <kbd className="hidden shrink-0 rounded border border-stone-200 px-1.5 py-0.5 text-[10px] text-stone-400 sm:block dark:border-stone-700">
            Esc
          </kbd>
        </div>

        <div className="max-h-[50vh] overflow-y-auto">
          {consulta.trim() === '' && (
            <p className="px-4 py-8 text-center text-xs text-stone-400">
              Escribe para buscar entre {todos.length} elementos.
            </p>
          )}
          {consulta.trim() !== '' && resultados.length === 0 && (
            <p className="px-4 py-8 text-center text-xs text-stone-400">
              Sin resultados para «{consulta}».
            </p>
          )}
          {resultados.map((r, i) => (
            <button
              key={`${r.tipo}:${r.seleccion.id}`}
              type="button"
              onClick={() => elegir(r)}
              onMouseEnter={() => setIndice(i)}
              className={`flex w-full items-center gap-3 px-4 py-2.5 text-left ${
                i === indice
                  ? 'bg-amber-50 dark:bg-amber-500/10'
                  : ''
              }`}
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-stone-100 text-stone-500 dark:bg-stone-800 dark:text-stone-400">
                {r.tipo === 'evento' ? (
                  <IconoEvento
                    tipo={
                      (eventos.find((e) => e.id === r.seleccion.id)?.tipo) ??
                      'descubrimiento'
                    }
                    className="h-3.5 w-3.5"
                  />
                ) : r.tipo === 'ruta' ? (
                  <IconoRuta className="h-3.5 w-3.5" />
                ) : (
                  <span className="text-[10px] font-semibold">
                    {r.titulo.charAt(0)}
                  </span>
                )}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block truncate text-sm font-medium text-stone-800 dark:text-stone-100">
                  {r.titulo}
                </span>
                <span className="block truncate text-xs text-stone-400">
                  {ETIQUETA_TIPO[r.tipo]} · {r.subtitulo}
                </span>
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
