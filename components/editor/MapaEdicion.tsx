import { Map as Maplibre, NavigationControl, setWorkerUrl } from 'maplibre-gl'
import 'maplibre-gl/dist/maplibre-gl.css'
import { useEffect, useRef } from 'react'
import {
  TerraDraw,
  TerraDrawLineStringMode,
  TerraDrawPointMode,
  TerraDrawPolygonMode,
  TerraDrawSelectMode,
} from 'terra-draw'
import { TerraDrawMapLibreGLAdapter } from 'terra-draw-maplibre-gl-adapter'
import type { Geometry } from 'geojson'

// Ver la nota en MapaHistorico.tsx: el worker de MapLibre no se empaqueta
// de forma fiable en el build de producción, así que se sirve como
// asset estático propio.
setWorkerUrl(`${import.meta.env.BASE_URL}maplibre-gl-worker.mjs`)

type ModoDibujo = 'point' | 'linestring' | 'polygon'

interface Props {
  modo: ModoDibujo
  valor: Geometry | null
  onChange: (geometry: Geometry) => void
  alto?: number
}

// Widget de mapa embebido para el editor: dibuja/edita un único punto,
// línea o polígono con terra-draw y avisa del resultado vía onChange.
// Es intencionadamente independiente de MapaHistorico.tsx (ese es el
// mapa del visor público; este es una herramienta de edición aparte).
export function MapaEdicion({ modo, valor, onChange, alto = 320 }: Props) {
  const contenedorRef = useRef<HTMLDivElement>(null)
  const drawRef = useRef<TerraDraw | null>(null)
  const onChangeRef = useRef(onChange)
  onChangeRef.current = onChange

  useEffect(() => {
    if (!contenedorRef.current) return

    const map = new Maplibre({
      container: contenedorRef.current,
      style: 'https://tiles.openfreemap.org/styles/positron',
      center: valor ? centroide(valor) : [-30, 10],
      zoom: valor ? 3.5 : 1.5,
      attributionControl: { compact: true },
    })
    map.addControl(new NavigationControl(), 'top-right')

    const draw = new TerraDraw({
      adapter: new TerraDrawMapLibreGLAdapter({ map }),
      modes: [
        new TerraDrawPointMode(),
        new TerraDrawLineStringMode(),
        new TerraDrawPolygonMode(),
        new TerraDrawSelectMode({
          flags: {
            point: { feature: { draggable: true } },
            linestring: {
              feature: { draggable: true, coordinates: { draggable: true } },
            },
            polygon: {
              feature: { draggable: true, coordinates: { draggable: true } },
            },
          },
        }),
      ],
    })

    map.on('load', () => {
      draw.start()
      if (valor) {
        draw.addFeatures([
          {
            type: 'Feature',
            geometry: valor,
            properties: { mode: modo },
          } as Parameters<typeof draw.addFeatures>[0][number],
        ])
        draw.setMode('select')
      } else {
        draw.setMode(modo)
      }
    })

    const emitir = () => {
      const snapshot = draw.getSnapshot()
      const feature = snapshot[snapshot.length - 1]
      if (feature) onChangeRef.current(feature.geometry as Geometry)
    }
    draw.on('finish', emitir)
    draw.on('change', emitir)

    drawRef.current = draw
    return () => {
      draw.stop()
      map.remove()
      drawRef.current = null
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return (
    <div
      ref={contenedorRef}
      style={{ height: alto }}
      className="w-full overflow-hidden rounded-lg border border-stone-200"
    />
  )
}

function centroide(g: Geometry): [number, number] {
  const puntos: [number, number][] = []
  const recorrer = (c: unknown): void => {
    if (Array.isArray(c) && typeof c[0] === 'number') {
      puntos.push(c as [number, number])
    } else if (Array.isArray(c)) {
      c.forEach(recorrer)
    }
  }
  if ('coordinates' in g) recorrer(g.coordinates)
  if (puntos.length === 0) return [-30, 10]
  const lon = puntos.reduce((s, p) => s + p[0], 0) / puntos.length
  const lat = puntos.reduce((s, p) => s + p[1], 0) / puntos.length
  return [lon, lat]
}
