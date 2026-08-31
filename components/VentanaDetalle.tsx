import { useEffect, useState } from 'react'
import {
  useEventosEditables,
  usePersonajesEditables,
  useRutasEditables,
  useTerritoriosEditables,
} from '../data/datosEditables'
import { useHistoriaStore } from '../store/useHistoriaStore'
import { IconoEvento, IconoRuta } from './IconoEvento'
import type { Evento, Personaje, Ruta, TipoEvento, Territorio } from '../types/historia'

interface Detalle {
  tipoEvento?: TipoEvento
  esRuta?: boolean
  color?: string
  titulo: string
  subtitulo: string
  resumen: string
  imagenWiki?: string
  articuloWiki?: string
}

interface Colecciones {
  eventos: Evento[]
  personajes: Personaje[]
  rutas: Ruta[]
  territorios: Territorio[]
}

function resolverDetalle(
  tipo: string,
  id: string,
  { eventos, personajes, rutas, territorios }: Colecciones,
): Detalle | null {
  if (tipo === 'territorio') {
    const t = territorios.find((x) => x.id === id)
    if (!t) return null
    return {
      titulo: t.nombre,
      subtitulo: `${t.desde} – ${t.hasta}`,
      resumen: `Territorio de tipo "${t.tipo}" bajo administración de la Corona española entre ${t.desde} y ${t.hasta}.`,
      articuloWiki: t.articuloWiki,
    }
  }
  if (tipo === 'ruta') {
    const r = rutas.find((x) => x.id === id)
    if (!r) return null
    return {
      esRuta: true,
      color: r.color,
      titulo: r.nombre,
      subtitulo: `${Math.floor(r.fechaInicio)} – ${Math.floor(r.fechaFin)}`,
      resumen: r.resumen,
      imagenWiki: r.imagenWiki,
      articuloWiki: r.articuloWiki,
    }
  }
  if (tipo === 'evento') {
    const e = eventos.find((x) => x.id === id)
    if (!e) return null
    const ruta = e.rutaId ? rutas.find((r) => r.id === e.rutaId) : undefined
    return {
      tipoEvento: e.tipo,
      color: ruta?.color,
      titulo: e.titulo,
      subtitulo: `${Math.floor(e.fecha)}`,
      resumen: e.resumen,
      imagenWiki: e.imagenWiki,
      articuloWiki: e.articuloWiki,
    }
  }
  if (tipo === 'personaje') {
    const p = personajes.find((x) => x.id === id)
    if (!p) return null
    return {
      titulo: p.nombre,
      subtitulo: p.rol,
      resumen: p.resumen,
      imagenWiki: p.imagenWiki,
      articuloWiki: p.articuloWiki,
    }
  }
  return null
}

export function VentanaDetalle() {
  const seleccion = useHistoriaStore((s) => s.seleccion)
  const seleccionar = useHistoriaStore((s) => s.seleccionar)
  const [imagenAmpliada, setImagenAmpliada] = useState(false)
  const eventos = useEventosEditables()
  const personajes = usePersonajesEditables()
  const rutas = useRutasEditables()
  const territorios = useTerritoriosEditables()

  useEffect(() => {
    setImagenAmpliada(false)
  }, [seleccion?.tipo, seleccion?.id])

  useEffect(() => {
    if (!seleccion) return
    const manejar = (e: KeyboardEvent) => {
      if (e.key === 'Escape') seleccionar(null)
    }
    window.addEventListener('keydown', manejar)
    return () => window.removeEventListener('keydown', manejar)
  }, [seleccion, seleccionar])

  if (!seleccion) return null
  const detalle = resolverDetalle(seleccion.tipo, seleccion.id, {
    eventos,
    personajes,
    rutas,
    territorios,
  })
  if (!detalle) return null

  const parrafos = detalle.resumen
    .split('\n')
    .map((p) => p.trim())
    .filter(Boolean)

  return (
    <div
      className="fixed inset-0 z-20 flex items-center justify-center bg-stone-900/40 p-4 backdrop-blur-sm"
      onClick={() => seleccionar(null)}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="ventana-detalle-titulo"
        className="relative flex max-h-[85vh] w-full max-w-2xl flex-col overflow-hidden rounded-xl bg-white shadow-2xl dark:bg-stone-900"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={() => seleccionar(null)}
          className="absolute top-3 right-3 z-20 flex h-8 w-8 items-center justify-center rounded-full bg-white/90 text-stone-500 shadow hover:bg-white hover:text-stone-800 dark:bg-stone-800/90 dark:text-stone-300 dark:hover:bg-stone-800 dark:hover:text-stone-50"
          aria-label="Cerrar"
        >
          ✕
        </button>

        {imagenAmpliada && detalle.imagenWiki && (
          <div className="absolute inset-0 z-10 flex items-center justify-center bg-stone-900/95">
            <img
              src={detalle.imagenWiki}
              alt={detalle.titulo}
              className="max-h-full max-w-full object-contain"
            />
            <button
              type="button"
              onClick={() => setImagenAmpliada(false)}
              className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/90 px-4 py-1.5 text-xs font-medium text-stone-700 shadow hover:bg-white"
            >
              ← Volver a la ficha
            </button>
          </div>
        )}

        <div className="overflow-y-auto">
          {detalle.imagenWiki && (
            <div className="relative">
              <img
                src={detalle.imagenWiki}
                alt={detalle.titulo}
                className="h-80 w-full object-cover object-top"
              />
              <button
                type="button"
                onClick={() => setImagenAmpliada(true)}
                className="absolute bottom-3 right-3 flex items-center gap-1.5 rounded-full bg-white/90 px-3 py-1.5 text-xs font-medium text-stone-700 shadow hover:bg-white"
              >
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth={1.8}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-3.5 w-3.5"
                  aria-hidden="true"
                >
                  <path d="M8 3H4v4" />
                  <path d="M16 3h4v4" />
                  <path d="M8 21H4v-4" />
                  <path d="M16 21h4v-4" />
                </svg>
                Ver imagen completa
              </button>
            </div>
          )}

          <div className="p-6">
            <div>
              <h3
                id="ventana-detalle-titulo"
                className="pr-8 text-xl font-semibold text-stone-900 dark:text-stone-50"
              >
                {detalle.titulo}
              </h3>
              <p
                className="mt-0.5 flex items-center gap-1 text-xs font-medium uppercase tracking-wide"
                style={{ color: detalle.color ?? '#b45309' }}
              >
                {detalle.tipoEvento && (
                  <IconoEvento
                    tipo={detalle.tipoEvento}
                    className="h-3.5 w-3.5"
                  />
                )}
                {detalle.esRuta && <IconoRuta className="h-3.5 w-3.5" />}
                {detalle.subtitulo}
              </p>
            </div>

            <div className="mt-4 space-y-3 text-[15px] leading-relaxed text-stone-600 dark:text-stone-300">
              {parrafos.map((parrafo, i) => (
                // eslint-disable-next-line react/no-array-index-key
                <p key={i}>{parrafo}</p>
              ))}
            </div>

            {detalle.articuloWiki && (
              <a
                href={detalle.articuloWiki}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-block text-sm font-medium text-blue-700 hover:underline dark:text-blue-400"
              >
                Leer más en Wikipedia →
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
