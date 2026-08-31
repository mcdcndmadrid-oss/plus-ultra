import { useMemo, useState } from 'react'
import {
  useEventosEditables,
  usePersonajesEditables,
  useRutasEditables,
  useTerritoriosEditables,
} from '../../data/datosEditables'
import { csvAFilas, filasACsv } from '../../lib/csv'
import {
  csvAEventos,
  csvAPersonajes,
  csvARutas,
  csvATerritorios,
  eventosACsv,
  personajesACsv,
  rutasACsv,
  territoriosACsv,
} from '../../lib/csvColecciones'
import { useOverridesStore } from '../../store/useOverridesStore'
import type { Coleccion } from '../../store/useOverridesStore'
import type {
  Evento,
  Personaje,
  Ruta,
  Territorio,
} from '../../types/historia'
import { MapaEdicion } from './MapaEdicion'

const ETIQUETAS_COLECCION: Record<Coleccion, string> = {
  eventos: 'Acontecimientos',
  personajes: 'Personajes',
  rutas: 'Rutas / campañas',
  territorios: 'Territorios',
}

function nombreDe(item: Record<string, unknown>): string {
  return String(item.titulo ?? item.nombre ?? item.id ?? '(sin nombre)')
}

// Módulo de edición PRIVADO: solo se monta si la URL lleva ?editor=1
// (ver App.tsx). Los visitantes normales nunca lo ven ni lo cargan.
// Las ediciones se guardan en localStorage (useOverridesStore) como
// vista previa personal; para que un cambio llegue a todos los
// visitantes hay que exportarlo y aplicarlo a src/data/*.ts antes de
// desplegar (scripts/aplicar-overrides.mjs).
export function ModuloEdicion({ onCerrar }: { onCerrar: () => void }) {
  const [coleccion, setColeccion] = useState<Coleccion>('eventos')
  const [seleccionId, setSeleccionId] = useState<string | null>(null)
  const [busqueda, setBusqueda] = useState('')

  const eventos = useEventosEditables()
  const personajes = usePersonajesEditables()
  const rutas = useRutasEditables()
  const territorios = useTerritoriosEditables()

  const datosPorColeccion: Record<Coleccion, { id: string }[]> = {
    eventos,
    personajes,
    rutas,
    territorios,
  }
  const lista = datosPorColeccion[coleccion]
  const tieneOverride = useOverridesStore((s) => s.tieneOverride)
  const eliminar = useOverridesStore((s) => s.eliminar)
  const restaurar = useOverridesStore((s) => s.restaurar)
  const setOverride = useOverridesStore((s) => s.setOverride)

  const filtrada = useMemo(() => {
    const q = busqueda.trim().toLowerCase()
    if (!q) return lista
    return lista.filter((item) =>
      nombreDe(item as Record<string, unknown>).toLowerCase().includes(q),
    )
  }, [lista, busqueda])

  const seleccionado = lista.find((i) => i.id === seleccionId) ?? null

  function cambiarColeccion(c: Coleccion) {
    setColeccion(c)
    setSeleccionId(null)
    setBusqueda('')
  }

  function nuevo() {
    const id = window.prompt(
      'Identificador del nuevo elemento (minúsculas, sin espacios, p. ej. "batalla-de-x")',
    )
    if (!id) return
    if (lista.some((i) => i.id === id)) {
      window.alert('Ya existe un elemento con ese id.')
      return
    }
    setOverride(coleccion, id, plantillaVacia(coleccion, id))
    setSeleccionId(id)
  }

  function exportarCsv() {
    const filas =
      coleccion === 'eventos'
        ? eventosACsv(eventos)
        : coleccion === 'personajes'
          ? personajesACsv(personajes)
          : coleccion === 'rutas'
            ? rutasACsv(rutas)
            : territoriosACsv(territorios)
    const csv = filasACsv(filas)
    const blob = new Blob([csv], { type: 'text/csv;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = `${coleccion}.csv`
    a.click()
    URL.revokeObjectURL(url)
  }

  function exportarOverridesJSON() {
    const json = useOverridesStore.getState().exportarJSON()
    const blob = new Blob([json], { type: 'application/json;charset=utf-8' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'overrides.json'
    a.click()
    URL.revokeObjectURL(url)
  }

  function importarCsv(archivo: File) {
    const lector = new FileReader()
    lector.onload = () => {
      const filas = csvAFilas(String(lector.result))
      const items =
        coleccion === 'eventos'
          ? csvAEventos(filas)
          : coleccion === 'personajes'
            ? csvAPersonajes(filas)
            : coleccion === 'rutas'
              ? csvARutas(filas)
              : csvATerritorios(filas)
      for (const item of items) {
        setOverride(coleccion, item.id, item as unknown as Record<string, unknown>)
      }
      window.alert(`${items.length} filas importadas como overrides de "${coleccion}".`)
    }
    lector.readAsText(archivo, 'utf-8')
  }

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-stone-100">
      <header className="flex shrink-0 items-center justify-between border-b border-stone-300 bg-stone-900 px-4 py-2.5 text-white">
        <div className="flex items-center gap-3">
          <span className="rounded bg-amber-500 px-2 py-0.5 text-xs font-bold tracking-wide uppercase text-stone-900">
            Editor · privado
          </span>
          <nav className="flex gap-1">
            {(Object.keys(ETIQUETAS_COLECCION) as Coleccion[]).map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => cambiarColeccion(c)}
                className={`rounded px-3 py-1 text-sm ${
                  coleccion === c
                    ? 'bg-white text-stone-900'
                    : 'text-stone-300 hover:bg-stone-800'
                }`}
              >
                {ETIQUETAS_COLECCION[c]}
              </button>
            ))}
          </nav>
        </div>
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={exportarOverridesJSON}
            title="Exporta TODAS las ediciones (todas las colecciones) para aplicarlas con scripts/aplicar-overrides.mjs"
            className="rounded bg-amber-600 px-3 py-1.5 text-sm hover:bg-amber-500"
          >
            Exportar overrides (JSON)
          </button>
          <button
            type="button"
            onClick={onCerrar}
            className="rounded bg-stone-700 px-3 py-1.5 text-sm hover:bg-stone-600"
          >
            Cerrar editor
          </button>
        </div>
      </header>

      <div className="flex min-h-0 flex-1">
        {/* Lista */}
        <aside className="flex w-80 shrink-0 flex-col border-r border-stone-300 bg-white">
          <div className="flex items-center gap-2 border-b border-stone-200 p-3">
            <input
              type="text"
              placeholder="Buscar…"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              className="min-w-0 flex-1 rounded border border-stone-300 px-2 py-1.5 text-sm"
            />
            <button
              type="button"
              onClick={nuevo}
              className="shrink-0 rounded bg-stone-800 px-2.5 py-1.5 text-sm text-white hover:bg-stone-700"
            >
              + Nuevo
            </button>
          </div>
          <div className="flex gap-2 border-b border-stone-200 p-2">
            <button
              type="button"
              onClick={exportarCsv}
              className="flex-1 rounded border border-stone-300 px-2 py-1 text-xs hover:bg-stone-50"
            >
              ⬇ Exportar CSV
            </button>
            <label className="flex-1 cursor-pointer rounded border border-stone-300 px-2 py-1 text-center text-xs hover:bg-stone-50">
              ⬆ Importar CSV
              <input
                type="file"
                accept=".csv"
                className="hidden"
                onChange={(e) => {
                  const f = e.target.files?.[0]
                  if (f) importarCsv(f)
                  e.target.value = ''
                }}
              />
            </label>
          </div>
          <ul className="flex-1 overflow-y-auto">
            {filtrada.map((item) => {
              const overridden = tieneOverride(coleccion, item.id)
              return (
                <li key={item.id}>
                  <button
                    type="button"
                    onClick={() => setSeleccionId(item.id)}
                    className={`flex w-full items-center justify-between gap-2 border-b border-stone-100 px-3 py-2 text-left text-sm ${
                      seleccionId === item.id
                        ? 'bg-amber-50'
                        : 'hover:bg-stone-50'
                    }`}
                  >
                    <span className="truncate">
                      {nombreDe(item as Record<string, unknown>)}
                    </span>
                    {overridden && (
                      <span
                        title="Editado manualmente"
                        className="h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500"
                      />
                    )}
                  </button>
                </li>
              )
            })}
            {filtrada.length === 0 && (
              <li className="px-3 py-6 text-center text-xs text-stone-400">
                Sin resultados.
              </li>
            )}
          </ul>
        </aside>

        {/* Formulario */}
        <main className="min-h-0 flex-1 overflow-y-auto p-6">
          {!seleccionado && (
            <p className="text-sm text-stone-400">
              Selecciona un elemento de la lista, o crea uno nuevo.
            </p>
          )}
          {seleccionado && (
            <Formulario
              key={`${coleccion}-${seleccionado.id}`}
              coleccion={coleccion}
              item={seleccionado}
              overridden={tieneOverride(coleccion, seleccionado.id)}
              onGuardar={(valor) => setOverride(coleccion, seleccionado.id, valor)}
              onEliminar={() => {
                eliminar(coleccion, seleccionado.id)
                setSeleccionId(null)
              }}
              onRestaurar={() => restaurar(coleccion, seleccionado.id)}
            />
          )}
        </main>
      </div>
    </div>
  )
}

function plantillaVacia(
  coleccion: Coleccion,
  id: string,
): Record<string, unknown> {
  switch (coleccion) {
    case 'eventos':
      return {
        id,
        titulo: '',
        tipo: 'fundacion',
        fecha: 1500,
        coordenadas: [0, 0],
        resumen: '',
        personajeIds: [],
      } satisfies Evento
    case 'personajes':
      return {
        id,
        nombre: '',
        periodoRelevancia: [1500, 1550],
        rol: '',
        resumen: '',
        eventoIds: [],
      } satisfies Personaje
    case 'rutas':
      return {
        id,
        nombre: '',
        tipo: 'exploracion',
        protagonistaIds: [],
        fechaInicio: 1500,
        fechaFin: 1510,
        color: '#1d4ed8',
        resumen: '',
        geometry: { type: 'LineString', coordinates: [] },
      } satisfies Ruta
    case 'territorios':
      return {
        id,
        nombre: '',
        tipo: 'reino',
        desde: 1500,
        hasta: 1600,
        origenDesde: 1500,
        motivoFin: 'vigente',
        geometry: { type: 'Polygon', coordinates: [] },
      } satisfies Territorio
  }
}

// --- Formulario --------------------------------------------------------

function Formulario({
  coleccion,
  item,
  overridden,
  onGuardar,
  onEliminar,
  onRestaurar,
}: {
  coleccion: Coleccion
  item: { id: string }
  overridden: boolean
  onGuardar: (valor: Record<string, unknown>) => void
  onEliminar: () => void
  onRestaurar: () => void
}) {
  const [valor, setValor] = useState<Record<string, unknown>>(
    item as unknown as Record<string, unknown>,
  )
  const campo = (clave: string, v: unknown) =>
    setValor((s) => ({ ...s, [clave]: v }))

  return (
    <div className="mx-auto max-w-2xl space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold text-stone-800">
          {ETIQUETAS_COLECCION[coleccion]} · {String(item.id)}
        </h2>
        <div className="flex gap-2">
          {overridden && (
            <button
              type="button"
              onClick={onRestaurar}
              className="rounded border border-stone-300 px-2.5 py-1 text-xs hover:bg-stone-50"
            >
              Restaurar original
            </button>
          )}
          <button
            type="button"
            onClick={onEliminar}
            className="rounded border border-red-300 px-2.5 py-1 text-xs text-red-700 hover:bg-red-50"
          >
            Eliminar
          </button>
        </div>
      </div>

      <CampoTexto etiqueta="id" valor={String(valor.id ?? '')} onChange={(v) => campo('id', v)} disabled />

      {coleccion === 'eventos' && (
        <>
          <CampoTexto etiqueta="Título" valor={String(valor.titulo ?? '')} onChange={(v) => campo('titulo', v)} />
          <CampoSelect
            etiqueta="Tipo"
            valor={String(valor.tipo ?? '')}
            opciones={['batalla', 'fundacion', 'tratado', 'descubrimiento', 'rebelion']}
            onChange={(v) => campo('tipo', v)}
          />
          <CampoNumero etiqueta="Fecha (año decimal)" valor={Number(valor.fecha ?? 0)} onChange={(v) => campo('fecha', v)} />
          <CampoTextoLargo etiqueta="Resumen" valor={String(valor.resumen ?? '')} onChange={(v) => campo('resumen', v)} />
          <CampoTexto etiqueta="Imagen (URL)" valor={String(valor.imagenWiki ?? '')} onChange={(v) => campo('imagenWiki', v)} />
          <CampoTexto etiqueta="Artículo Wikipedia (URL)" valor={String(valor.articuloWiki ?? '')} onChange={(v) => campo('articuloWiki', v)} />
          <CampoTexto
            etiqueta="Personajes (ids separados por coma)"
            valor={((valor.personajeIds as string[]) ?? []).join(', ')}
            onChange={(v) => campo('personajeIds', v.split(',').map((s) => s.trim()).filter(Boolean))}
          />
          <CampoTexto etiqueta="Ruta/campaña (id, opcional)" valor={String(valor.rutaId ?? '')} onChange={(v) => campo('rutaId', v || undefined)} />
          <div>
            <p className="mb-1 text-xs font-medium text-stone-500">Ubicación (clic en el mapa)</p>
            <MapaEdicion
              modo="point"
              valor={
                Array.isArray(valor.coordenadas)
                  ? { type: 'Point', coordinates: valor.coordenadas as [number, number] }
                  : null
              }
              onChange={(g) => {
                if (g.type === 'Point') campo('coordenadas', g.coordinates)
              }}
            />
          </div>
        </>
      )}

      {coleccion === 'personajes' && (
        <>
          <CampoTexto etiqueta="Nombre" valor={String(valor.nombre ?? '')} onChange={(v) => campo('nombre', v)} />
          <CampoTexto etiqueta="Rol" valor={String(valor.rol ?? '')} onChange={(v) => campo('rol', v)} />
          <div className="grid grid-cols-2 gap-4">
            <CampoNumero etiqueta="Nacimiento" valor={Number(valor.nacimiento ?? 0) || undefined} onChange={(v) => campo('nacimiento', v)} />
            <CampoNumero etiqueta="Muerte" valor={Number(valor.muerte ?? 0) || undefined} onChange={(v) => campo('muerte', v)} />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <CampoNumero
              etiqueta="Relevancia desde"
              valor={Number((valor.periodoRelevancia as number[])?.[0] ?? 0)}
              onChange={(v) => campo('periodoRelevancia', [v, (valor.periodoRelevancia as number[])?.[1] ?? v])}
            />
            <CampoNumero
              etiqueta="Relevancia hasta"
              valor={Number((valor.periodoRelevancia as number[])?.[1] ?? 0)}
              onChange={(v) => campo('periodoRelevancia', [(valor.periodoRelevancia as number[])?.[0] ?? v, v])}
            />
          </div>
          <CampoTextoLargo etiqueta="Resumen" valor={String(valor.resumen ?? '')} onChange={(v) => campo('resumen', v)} />
          <CampoTexto etiqueta="Imagen (URL)" valor={String(valor.imagenWiki ?? '')} onChange={(v) => campo('imagenWiki', v)} />
          <CampoTexto etiqueta="Artículo Wikipedia (URL)" valor={String(valor.articuloWiki ?? '')} onChange={(v) => campo('articuloWiki', v)} />
          <CampoTexto
            etiqueta="Eventos (ids separados por coma)"
            valor={((valor.eventoIds as string[]) ?? []).join(', ')}
            onChange={(v) => campo('eventoIds', v.split(',').map((s) => s.trim()).filter(Boolean))}
          />
        </>
      )}

      {coleccion === 'rutas' && (
        <>
          <CampoTexto etiqueta="Nombre" valor={String(valor.nombre ?? '')} onChange={(v) => campo('nombre', v)} />
          <CampoSelect
            etiqueta="Tipo"
            valor={String(valor.tipo ?? '')}
            opciones={['exploracion', 'conquista', 'comercial']}
            onChange={(v) => campo('tipo', v)}
          />
          <div className="grid grid-cols-2 gap-4">
            <CampoNumero etiqueta="Fecha inicio" valor={Number(valor.fechaInicio ?? 0)} onChange={(v) => campo('fechaInicio', v)} />
            <CampoNumero etiqueta="Fecha fin" valor={Number(valor.fechaFin ?? 0)} onChange={(v) => campo('fechaFin', v)} />
          </div>
          <CampoColor etiqueta="Color" valor={String(valor.color ?? '#1d4ed8')} onChange={(v) => campo('color', v)} />
          <CampoTextoLargo etiqueta="Resumen" valor={String(valor.resumen ?? '')} onChange={(v) => campo('resumen', v)} />
          <CampoTexto etiqueta="Imagen (URL)" valor={String(valor.imagenWiki ?? '')} onChange={(v) => campo('imagenWiki', v)} />
          <CampoTexto
            etiqueta="Protagonistas (ids separados por coma)"
            valor={((valor.protagonistaIds as string[]) ?? []).join(', ')}
            onChange={(v) => campo('protagonistaIds', v.split(',').map((s) => s.trim()).filter(Boolean))}
          />
          <CampoTexto etiqueta="Artículo Wikipedia (URL)" valor={String(valor.articuloWiki ?? '')} onChange={(v) => campo('articuloWiki', v)} />
          <div>
            <p className="mb-1 text-xs font-medium text-stone-500">Trazado (dibuja la línea en el mapa)</p>
            <MapaEdicion
              modo="linestring"
              valor={(valor.geometry as GeoJSON.Geometry) ?? null}
              onChange={(g) => campo('geometry', g)}
            />
          </div>
        </>
      )}

      {coleccion === 'territorios' && (
        <>
          <CampoTexto etiqueta="Nombre" valor={String(valor.nombre ?? '')} onChange={(v) => campo('nombre', v)} />
          <CampoSelect
            etiqueta="Tipo"
            valor={String(valor.tipo ?? '')}
            opciones={['reino', 'virreinato', 'audiencia', 'capitania', 'gobernacion', 'ducado', 'plaza', 'protectorado']}
            onChange={(v) => campo('tipo', v)}
          />
          <div className="grid grid-cols-3 gap-4">
            <CampoNumero etiqueta="Desde (tramo)" valor={Number(valor.desde ?? 0)} onChange={(v) => campo('desde', v)} />
            <CampoNumero etiqueta="Hasta (tramo)" valor={Number(valor.hasta ?? 0)} onChange={(v) => campo('hasta', v)} />
            <CampoNumero etiqueta="Origen (siglo/color)" valor={Number(valor.origenDesde ?? 0)} onChange={(v) => campo('origenDesde', v)} />
          </div>
          <CampoSelect
            etiqueta="Motivo de fin"
            valor={String(valor.motivoFin ?? 'vigente')}
            opciones={['vigente', 'utrecht', 'independencia', 'guerra-cuba', 'descolonizacion', 'restauracion-portugal', 'cesion']}
            onChange={(v) => campo('motivoFin', v)}
          />
          <CampoTexto etiqueta="Artículo Wikipedia (URL)" valor={String(valor.articuloWiki ?? '')} onChange={(v) => campo('articuloWiki', v)} />
          <div>
            <p className="mb-1 text-xs font-medium text-stone-500">Frontera (dibuja el polígono en el mapa)</p>
            <MapaEdicion
              modo="polygon"
              valor={(valor.geometry as GeoJSON.Geometry) ?? null}
              onChange={(g) => campo('geometry', g)}
            />
          </div>
        </>
      )}

      <button
        type="button"
        onClick={() => onGuardar(valor)}
        className="rounded-lg bg-stone-800 px-4 py-2 text-sm font-medium text-white hover:bg-stone-700"
      >
        Guardar cambios
      </button>
    </div>
  )
}

// --- Campos de formulario reutilizables --------------------------------

function CampoTexto({
  etiqueta,
  valor,
  onChange,
  disabled,
}: {
  etiqueta: string
  valor: string
  onChange: (v: string) => void
  disabled?: boolean
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-stone-500">{etiqueta}</span>
      <input
        type="text"
        value={valor}
        disabled={disabled}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border border-stone-300 px-2.5 py-1.5 text-sm disabled:bg-stone-100 disabled:text-stone-400"
      />
    </label>
  )
}

function CampoTextoLargo({
  etiqueta,
  valor,
  onChange,
}: {
  etiqueta: string
  valor: string
  onChange: (v: string) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-stone-500">{etiqueta}</span>
      <textarea
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        rows={6}
        className="w-full rounded border border-stone-300 px-2.5 py-1.5 text-sm"
      />
    </label>
  )
}

function CampoNumero({
  etiqueta,
  valor,
  onChange,
}: {
  etiqueta: string
  valor: number | undefined
  onChange: (v: number) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-stone-500">{etiqueta}</span>
      <input
        type="number"
        step="any"
        value={valor ?? ''}
        onChange={(e) => onChange(Number(e.target.value))}
        className="w-full rounded border border-stone-300 px-2.5 py-1.5 text-sm"
      />
    </label>
  )
}

function CampoSelect({
  etiqueta,
  valor,
  opciones,
  onChange,
}: {
  etiqueta: string
  valor: string
  opciones: string[]
  onChange: (v: string) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-stone-500">{etiqueta}</span>
      <select
        value={valor}
        onChange={(e) => onChange(e.target.value)}
        className="w-full rounded border border-stone-300 bg-white px-2.5 py-1.5 text-sm"
      >
        {opciones.map((o) => (
          <option key={o} value={o}>
            {o}
          </option>
        ))}
      </select>
    </label>
  )
}

function CampoColor({
  etiqueta,
  valor,
  onChange,
}: {
  etiqueta: string
  valor: string
  onChange: (v: string) => void
}) {
  return (
    <label className="block">
      <span className="mb-1 block text-xs font-medium text-stone-500">{etiqueta}</span>
      <div className="flex items-center gap-2">
        <input
          type="color"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className="h-8 w-12 rounded border border-stone-300"
        />
        <input
          type="text"
          value={valor}
          onChange={(e) => onChange(e.target.value)}
          className="flex-1 rounded border border-stone-300 px-2.5 py-1.5 text-sm"
        />
      </div>
    </label>
  )
}
