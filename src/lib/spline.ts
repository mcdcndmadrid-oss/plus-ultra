// Interpolación Catmull-Rom: genera una curva suave que pasa exactamente
// por cada punto de control (a diferencia de un B-spline puro, que no
// garantiza pasar por ellos). Ideal para que una ruta histórica siga
// "suavizando" el trayecto entre hitos reales sin dejar de tocarlos.

type Punto = [number, number]

function puntoCatmullRom(
  p0: Punto,
  p1: Punto,
  p2: Punto,
  p3: Punto,
  t: number,
): Punto {
  const t2 = t * t
  const t3 = t2 * t
  const x =
    0.5 *
    (2 * p1[0] +
      (-p0[0] + p2[0]) * t +
      (2 * p0[0] - 5 * p1[0] + 4 * p2[0] - p3[0]) * t2 +
      (-p0[0] + 3 * p1[0] - 3 * p2[0] + p3[0]) * t3)
  const y =
    0.5 *
    (2 * p1[1] +
      (-p0[1] + p2[1]) * t +
      (2 * p0[1] - 5 * p1[1] + 4 * p2[1] - p3[1]) * t2 +
      (-p0[1] + 3 * p1[1] - 3 * p2[1] + p3[1]) * t3)
  return [x, y]
}

/**
 * Suaviza una polilínea (lon/lat) interpolando una curva Catmull-Rom que
 * pasa por todos los puntos originales. `segmentosPorTramo` controla la
 * densidad de la curva entre cada par de puntos consecutivos.
 */
export function suavizarLinea(
  puntos: Punto[],
  segmentosPorTramo = 16,
): Punto[] {
  if (puntos.length < 3) return puntos

  // Se duplican los extremos para que la curva también llegue con
  // suavidad al primer y al último punto real.
  const extendidos: Punto[] = [
    puntos[0],
    ...puntos,
    puntos[puntos.length - 1],
  ]

  const resultado: Punto[] = []
  for (let i = 0; i < extendidos.length - 3; i++) {
    const [p0, p1, p2, p3] = [
      extendidos[i],
      extendidos[i + 1],
      extendidos[i + 2],
      extendidos[i + 3],
    ]
    for (let s = 0; s < segmentosPorTramo; s++) {
      resultado.push(puntoCatmullRom(p0, p1, p2, p3, s / segmentosPorTramo))
    }
  }
  resultado.push(puntos[puntos.length - 1])
  return resultado
}
