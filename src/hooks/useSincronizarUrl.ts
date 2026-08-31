import { useEffect, useRef } from 'react'
import { useHistoriaStore } from '../store/useHistoriaStore'
import type { Seleccion, SeleccionTipo } from '../types/historia'

const TIPOS_VALIDOS: SeleccionTipo[] = [
  'territorio',
  'ruta',
  'evento',
  'personaje',
]

function leerSeleccionInicial(params: URLSearchParams): Seleccion | null {
  const sel = params.get('sel')
  if (!sel) return null
  const [tipo, ...resto] = sel.split(':')
  const id = resto.join(':')
  if (!id || !TIPOS_VALIDOS.includes(tipo as SeleccionTipo)) return null
  return { tipo: tipo as SeleccionTipo, id }
}

// Deja la fecha y la selección actuales en la URL (?year=1521&sel=evento:id)
// para poder compartir o guardar un enlace a un momento concreto del
// visualizador. Se lee una vez al montar y se escribe (con historial
// reemplazado, no apilado) cada vez que cambian, con un pequeño retraso
// para no generar una entrada por cada píxel al arrastrar el slider.
export function useSincronizarUrl() {
  const inicializado = useRef(false)

  useEffect(() => {
    if (inicializado.current) return
    inicializado.current = true
    const params = new URLSearchParams(window.location.search)
    const anio = params.get('year')
    if (anio && !Number.isNaN(Number(anio))) {
      useHistoriaStore.getState().setFecha(Number(anio))
    }
    const seleccion = leerSeleccionInicial(params)
    if (seleccion) useHistoriaStore.getState().seleccionar(seleccion)

    // Los paneles empiezan colapsados en pantallas estrechas: se decide
    // aquí (tras montar, con el layout ya asentado) y no al crear el
    // store, porque el ancho de ventana justo al cargar el módulo no es
    // fiable en todos los entornos de vista previa/incrustación.
    if (window.innerWidth < 640) {
      useHistoriaStore.setState({
        panelEventosColapsado: true,
        panelPersonajesColapsado: true,
      })
    }
  }, [])

  useEffect(() => {
    return useHistoriaStore.subscribe((estado, previo) => {
      if (
        estado.fechaActual === previo.fechaActual &&
        estado.seleccion === previo.seleccion
      ) {
        return
      }
      window.clearTimeout(temporizador)
      temporizador = window.setTimeout(() => {
        const { fechaActual, seleccion } = useHistoriaStore.getState()
        const url = new URL(window.location.href)
        url.searchParams.set('year', String(Math.floor(fechaActual)))
        if (seleccion) {
          url.searchParams.set('sel', `${seleccion.tipo}:${seleccion.id}`)
        } else {
          url.searchParams.delete('sel')
        }
        window.history.replaceState({}, '', url)
      }, 400)
    })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
}

let temporizador = 0
