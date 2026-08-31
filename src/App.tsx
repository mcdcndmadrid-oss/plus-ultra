import { useState } from 'react'
import { BuscadorGlobal } from './components/BuscadorGlobal'
import { ModuloEdicion } from './components/editor/ModuloEdicion'
import { LineaTemporal } from './components/LineaTemporal'
import { MapaHistorico } from './components/MapaHistorico'
import { PanelEventos } from './components/PanelEventos'
import { PanelPersonajes } from './components/PanelPersonajes'
import { SelectorCapas } from './components/SelectorCapas'
import { VentanaDetalle } from './components/VentanaDetalle'
import { useSincronizarUrl } from './hooks/useSincronizarUrl'

// El editor es una herramienta PRIVADA: solo se monta si la URL lleva
// ?editor=1. No hay ningún enlace visible hacia él en la app pública —
// los visitantes normales nunca ven ni cargan este código.
function tieneAccesoEditor(): boolean {
  if (typeof window === 'undefined') return false
  return new URLSearchParams(window.location.search).get('editor') === '1'
}

function App() {
  const [editorAbierto, setEditorAbierto] = useState(tieneAccesoEditor())
  useSincronizarUrl()

  if (editorAbierto) {
    return (
      <ModuloEdicion
        onCerrar={() => {
          const url = new URL(window.location.href)
          url.searchParams.delete('editor')
          window.history.replaceState({}, '', url)
          setEditorAbierto(false)
        }}
      />
    )
  }

  return (
    <div className="relative h-screen w-screen overflow-hidden bg-stone-50 dark:bg-stone-950">
      <MapaHistorico />

      <SelectorCapas />
      <PanelEventos />
      <PanelPersonajes />
      <LineaTemporal />

      <VentanaDetalle />
      <BuscadorGlobal />
    </div>
  )
}

export default App
