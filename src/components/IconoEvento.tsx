import type { CSSProperties } from 'react'
import type { TipoEvento } from '../types/historia'

interface Props {
  tipo: TipoEvento
  className?: string
  style?: CSSProperties
}

interface IconoBaseProps {
  className?: string
  style?: CSSProperties
}

const PROPS_SVG = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

function Batalla({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <path d="M5 19 19 5" />
      <path d="M15 5h4v4" />
      <path d="M19 19 5 5" />
      <path d="M9 5H5v4" />
    </svg>
  )
}

function Fundacion({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <path d="M4 21h16" />
      <path d="M5 21V10" />
      <path d="M19 21V10" />
      <path d="M3 10l9-6 9 6" />
      <path d="M9 21v-6h6v6" />
    </svg>
  )
}

function Tratado({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <path d="M3 12l4-4 4 3 4-3 4 4" />
      <path d="M3 12v3l4 3" />
      <path d="M19 12v3l-4 3" />
      <path d="M7 15l4 3 4-3" />
    </svg>
  )
}

function Descubrimiento({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <circle cx="12" cy="12" r="9" />
      <path d="M14.5 9.5 13 13l-3.5 1.5L11 11z" />
    </svg>
  )
}

function Rebelion({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <path d="M12 3v6" />
      <path d="M5 10l7-3 7 3" />
      <path d="M5 10v4a7 7 0 0 0 14 0v-4" />
      <path d="M9 21h6" />
      <path d="M12 17v4" />
    </svg>
  )
}

const ICONOS: Record<TipoEvento, typeof Batalla> = {
  batalla: Batalla,
  fundacion: Fundacion,
  tratado: Tratado,
  descubrimiento: Descubrimiento,
  rebelion: Rebelion,
}

export function IconoEvento({ tipo, className, style }: Props) {
  const Icono = ICONOS[tipo]
  return <Icono className={className} style={style} />
}

export function IconoRuta({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <circle cx="5" cy="6" r="1.6" fill="currentColor" stroke="none" />
      <circle cx="19" cy="18" r="1.6" fill="currentColor" stroke="none" />
      <path d="M6.5 7C10 10 9 14 12 15s4 3 6.5 3" strokeDasharray="2.5 2.5" />
    </svg>
  )
}

export function IconoBuscar({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <circle cx="11" cy="11" r="7" />
      <path d="m20 20-3.5-3.5" />
    </svg>
  )
}

export function IconoFiltro({ className, style }: IconoBaseProps) {
  return (
    <svg className={className} style={style} {...PROPS_SVG}>
      <path d="M4 5h16" />
      <path d="M7 12h10" />
      <path d="M10 19h4" />
    </svg>
  )
}
