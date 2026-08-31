import { create } from 'zustand'
import type { CapaBase, Seleccion, TipoEvento } from '../types/historia'

export const ANIO_MIN = 1469
export const ANIO_MAX = 1899

const MOVIL = () =>
  typeof window !== 'undefined' && window.innerWidth < 640

interface HistoriaState {
  fechaActual: number
  capaBase: CapaBase
  seleccion: Seleccion | null
  hover: Seleccion | null
  reproduciendo: boolean
  // Colapso de los paneles flotantes: en escritorio ambos empiezan
  // abiertos; en móvil empiezan cerrados y abrir uno cierra el otro
  // (mantenerlos flotando a la vez no cabe en una pantalla estrecha).
  panelEventosColapsado: boolean
  panelPersonajesColapsado: boolean
  // Tipos de acontecimiento ocultos del mapa y del panel (filtro).
  tiposOcultos: TipoEvento[]
  busquedaAbierta: boolean
  setFecha: (fecha: number) => void
  setCapaBase: (capa: CapaBase) => void
  seleccionar: (seleccion: Seleccion | null) => void
  setHover: (hover: Seleccion | null) => void
  toggleReproduccion: () => void
  togglePanelEventos: () => void
  togglePanelPersonajes: () => void
  toggleTipoOculto: (tipo: TipoEvento) => void
  setBusquedaAbierta: (abierta: boolean) => void
}

export const useHistoriaStore = create<HistoriaState>((set) => ({
  fechaActual: 1492,
  capaBase: 'minimalista',
  seleccion: null,
  hover: null,
  reproduciendo: false,
  // Empiezan siempre expandidos: decidir "colapsado" según el ancho de
  // ventana en el momento en que se crea el store es poco fiable (el
  // panel de previsualización puede redimensionarse justo después de
  // montar). La exclusión mutua en móvil se aplica más abajo, en el
  // momento del clic, cuando el layout ya está asentado.
  panelEventosColapsado: false,
  panelPersonajesColapsado: false,
  tiposOcultos: [],
  busquedaAbierta: false,
  setFecha: (fecha) =>
    set({ fechaActual: Math.min(ANIO_MAX, Math.max(ANIO_MIN, fecha)) }),
  setCapaBase: (capaBase) => set({ capaBase }),
  seleccionar: (seleccion) => set({ seleccion }),
  setHover: (hover) => set({ hover }),
  toggleReproduccion: () => set((s) => ({ reproduciendo: !s.reproduciendo })),
  togglePanelEventos: () =>
    set((s) => {
      const seVaAbrir = s.panelEventosColapsado
      return {
        panelEventosColapsado: !s.panelEventosColapsado,
        panelPersonajesColapsado:
          seVaAbrir && MOVIL() ? true : s.panelPersonajesColapsado,
      }
    }),
  togglePanelPersonajes: () =>
    set((s) => {
      const seVaAbrir = s.panelPersonajesColapsado
      return {
        panelPersonajesColapsado: !s.panelPersonajesColapsado,
        panelEventosColapsado:
          seVaAbrir && MOVIL() ? true : s.panelEventosColapsado,
      }
    }),
  toggleTipoOculto: (tipo) =>
    set((s) => ({
      tiposOcultos: s.tiposOcultos.includes(tipo)
        ? s.tiposOcultos.filter((t) => t !== tipo)
        : [...s.tiposOcultos, tipo],
    })),
  setBusquedaAbierta: (busquedaAbierta) => set({ busquedaAbierta }),
}))
