import type { Map as MapLibreMap } from 'maplibre-gl'
import type { TipoEvento } from '../types/historia'

// Mismas formas que IconoEvento.tsx, en formato de trazos SVG crudos
// para poder "hornearlas" en una imagen raster que MapLibre pueda usar
// como icono de una capa de símbolos (los marcadores del mapa no pueden
// ser componentes React).
const TRAZOS_POR_TIPO: Record<TipoEvento, string> = {
  batalla: '<path d="M5 19 19 5"/><path d="M15 5h4v4"/><path d="M19 19 5 5"/><path d="M9 5H5v4"/>',
  fundacion:
    '<path d="M4 21h16"/><path d="M5 21V10"/><path d="M19 21V10"/><path d="M3 10l9-6 9 6"/><path d="M9 21v-6h6v6"/>',
  tratado:
    '<path d="M3 12l4-4 4 3 4-3 4 4"/><path d="M3 12v3l4 3"/><path d="M19 12v3l-4 3"/><path d="M7 15l4 3 4-3"/>',
  descubrimiento:
    '<circle cx="12" cy="12" r="9"/><path d="M14.5 9.5 13 13l-3.5 1.5L11 11z"/>',
  rebelion:
    '<path d="M12 3v6"/><path d="M5 10l7-3 7 3"/><path d="M5 10v4a7 7 0 0 0 14 0v-4"/><path d="M9 21h6"/><path d="M12 17v4"/>',
}

// Color neutro para eventos que no pertenecen a ninguna campaña.
export const COLOR_EVENTO_SIN_CAMPANA = '#78716c'

const TAMANO_ICONO = 56

function construirSvgIcono(tipo: TipoEvento, color: string): string {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${TAMANO_ICONO}" height="${TAMANO_ICONO}" viewBox="0 0 ${TAMANO_ICONO} ${TAMANO_ICONO}">
    <circle cx="28" cy="28" r="25" fill="#ffffff" stroke="${color}" stroke-width="3"/>
    <g transform="translate(16,16)" fill="none" stroke="${color}" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round">
      ${TRAZOS_POR_TIPO[tipo]}
    </g>
  </svg>`
}

// El color de la campaña forma parte del id: cada combinación
// (tipo, color) es una imagen distinta cargada en el mapa.
export function idIconoEvento(tipo: TipoEvento, color: string): string {
  return `icono-evento-${tipo}-${color.replace('#', '')}`
}

// Los iconos son un recurso de estilo: MapLibre los descarta en cada
// setStyle(), así que hay que recargarlos cada vez que cambia la capa
// base (ver MapaHistorico.tsx). `colores` es la lista de colores de
// campaña presentes en los datos actuales (más el neutro de reserva).
export function cargarIconosEventos(
  map: MapLibreMap,
  colores: string[],
): Promise<void> {
  const tipos = Object.keys(TRAZOS_POR_TIPO) as TipoEvento[]
  const combinaciones = tipos.flatMap((tipo) =>
    [...new Set([...colores, COLOR_EVENTO_SIN_CAMPANA])].map((color) => ({
      tipo,
      color,
    })),
  )
  return Promise.all(
    combinaciones.map(
      ({ tipo, color }) =>
        new Promise<void>((resolve) => {
          const id = idIconoEvento(tipo, color)
          if (map.hasImage(id)) {
            resolve()
            return
          }
          const img = new Image(TAMANO_ICONO, TAMANO_ICONO)
          img.onload = () => {
            if (!map.hasImage(id)) map.addImage(id, img)
            resolve()
          }
          // Un icono que falle no debe bloquear el resto del mapa.
          img.onerror = () => resolve()
          img.src =
            'data:image/svg+xml;charset=utf-8,' +
            encodeURIComponent(construirSvgIcono(tipo, color))
        }),
    ),
  ).then(() => undefined)
}
