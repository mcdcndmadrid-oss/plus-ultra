import { useEffect, useMemo, useRef } from 'react'
import { useEventosEditables } from '../data/datosEditables'
import { ANIO_MAX, ANIO_MIN, useHistoriaStore } from '../store/useHistoriaStore'

function formatearAnio(anio: number) {
  const entero = Math.floor(anio)
  return entero < 0 ? `${-entero} a.C.` : `${entero}`
}

function porcentaje(anio: number) {
  return ((anio - ANIO_MIN) / (ANIO_MAX - ANIO_MIN)) * 100
}

interface Marca {
  anio: number
  tipo: 'siglo' | 'medio' | 'extremo'
}

function calcularMarcas(): Marca[] {
  const marcas: Marca[] = [{ anio: ANIO_MIN, tipo: 'extremo' }]
  const primerSiglo = Math.ceil(ANIO_MIN / 100) * 100
  for (let anio = primerSiglo; anio < ANIO_MAX; anio += 100) {
    marcas.push({ anio, tipo: 'siglo' })
    const medio = anio + 50
    if (medio > ANIO_MIN && medio < ANIO_MAX) {
      marcas.push({ anio: medio, tipo: 'medio' })
    }
  }
  marcas.push({ anio: ANIO_MAX, tipo: 'extremo' })
  return marcas
}

// Densidad de acontecimientos por década: deja ver de un vistazo dónde
// hay más actividad histórica, en vez de tener que arrastrar el slider
// a ciegas para descubrirlo.
const ANCHO_CUBETA = 10

function calcularDensidad(fechas: number[]) {
  const numCubetas = Math.ceil((ANIO_MAX - ANIO_MIN) / ANCHO_CUBETA)
  const cuentas = new Array(numCubetas).fill(0)
  for (const f of fechas) {
    const i = Math.min(
      numCubetas - 1,
      Math.max(0, Math.floor((f - ANIO_MIN) / ANCHO_CUBETA)),
    )
    cuentas[i]++
  }
  const maximo = Math.max(1, ...cuentas)
  return cuentas.map((c, i) => ({
    inicio: ANIO_MIN + i * ANCHO_CUBETA,
    cuenta: c,
    alturaRel: c / maximo,
  }))
}

export function LineaTemporal() {
  const fechaActual = useHistoriaStore((s) => s.fechaActual)
  const setFecha = useHistoriaStore((s) => s.setFecha)
  const reproduciendo = useHistoriaStore((s) => s.reproduciendo)
  const toggleReproduccion = useHistoriaStore((s) => s.toggleReproduccion)
  const eventos = useEventosEditables()

  const marcas = useMemo(calcularMarcas, [])
  const densidad = useMemo(
    () => calcularDensidad(eventos.map((e) => e.fecha)),
    [eventos],
  )
  const intervaloRef = useRef<ReturnType<typeof setInterval> | null>(null)

  useEffect(() => {
    if (reproduciendo) {
      intervaloRef.current = setInterval(() => {
        const { fechaActual: actual, setFecha: set } =
          useHistoriaStore.getState()
        if (actual >= ANIO_MAX) {
          useHistoriaStore.setState({ reproduciendo: false })
          return
        }
        set(actual + 1)
      }, 150)
    }
    return () => {
      if (intervaloRef.current) clearInterval(intervaloRef.current)
    }
  }, [reproduciendo])

  return (
    <div className="absolute right-2 bottom-2 left-2 z-10 flex items-center gap-2 rounded-xl border border-stone-200 bg-white/95 px-2.5 py-2 shadow-lg backdrop-blur sm:right-4 sm:bottom-4 sm:left-4 sm:gap-4 sm:px-4 sm:py-3 dark:border-stone-700 dark:bg-stone-900/95">
      <button
        type="button"
        onClick={toggleReproduccion}
        className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-stone-800 text-white hover:bg-stone-700 dark:bg-amber-500 dark:text-stone-950 dark:hover:bg-amber-400"
        aria-label={reproduciendo ? 'Pausar' : 'Reproducir'}
      >
        {reproduciendo ? '⏸' : '▶'}
      </button>

      <span className="w-11 shrink-0 text-sm font-semibold tabular-nums text-stone-700 sm:w-14 dark:text-stone-200">
        {formatearAnio(fechaActual)}
      </span>

      <div className="relative flex-1">
        {/* Histograma de densidad, detrás del carril de la barra. */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-x-0 -top-2 flex h-4 items-end gap-px sm:-top-3 sm:h-5"
        >
          {densidad.map((d) => (
            <div
              key={d.inicio}
              title={`${d.cuenta} acontecimientos en la década de ${d.inicio}`}
              className="flex-1 rounded-t-sm bg-stone-300 dark:bg-stone-700"
              style={{ height: `${Math.max(8, d.alturaRel * 100)}%` }}
            />
          ))}
        </div>

        <input
          type="range"
          min={ANIO_MIN}
          max={ANIO_MAX}
          step={1}
          value={fechaActual}
          onChange={(e) => setFecha(Number(e.target.value))}
          aria-label="Año en la línea temporal"
          className="relative z-10 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-stone-200 accent-stone-800 dark:bg-stone-700 dark:accent-amber-500"
        />

        {/* Cronograma: marcas de siglo (con año) y medio siglo (sin
            etiqueta), todas seleccionables. */}
        <div className="relative z-20 mt-1.5 h-7">
          {marcas.map((m) => (
            <button
              key={m.anio}
              type="button"
              onClick={() => setFecha(m.anio)}
              className="group absolute top-0 flex -translate-x-1/2 flex-col items-center"
              style={{ left: `${porcentaje(m.anio)}%` }}
            >
              <span
                className={`block w-px ${
                  m.tipo === 'medio'
                    ? 'h-1.5 bg-stone-300 dark:bg-stone-600'
                    : 'h-2 bg-stone-400 group-hover:bg-stone-700 dark:bg-stone-500 dark:group-hover:bg-stone-200'
                }`}
              />
              {m.tipo !== 'medio' && (
                <span
                  className={`mt-0.5 hidden text-[10px] tabular-nums text-stone-400 group-hover:text-stone-700 sm:block dark:text-stone-500 dark:group-hover:text-stone-200 ${
                    m.tipo === 'extremo' ? 'font-medium' : ''
                  }`}
                >
                  {formatearAnio(m.anio)}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
