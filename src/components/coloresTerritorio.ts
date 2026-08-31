// Un color propio por reino/virreinato/posesión (el campo `nombre` del
// territorio), en vez de tonos de rojo por siglo: así se distingue de un
// vistazo qué corona/administración concreta gobernaba cada zona del
// mapa en un momento dado, aunque varias convivan en la misma época.
//
// Los tonos se agrupan por la corona histórica de la que dependía cada
// territorio, para que el parentesco se note en el propio color:
//  - Rojos: Corona de Castilla y todo lo que de ella deriva (España y
//    los virreinatos/capitanías americanas y filipinas, incorporados a
//    la Corona de Castilla, no a la de Aragón).
//  - Ámbares/dorados: posesiones de la Corona de Aragón en el
//    Mediterráneo (Nápoles, Sicilia, Cerdeña) y Milán, administrado
//    dentro de esa misma órbita italiana aunque llegara por herencia
//    borgoñona-habsbúrgica.
//  - Azul: los Países Bajos españoles, heredados por línea borgoñona,
//    fuera de ambas coronas peninsulares.
const COLOR_POR_REINO: Record<string, string> = {
  // Familia Castilla/España (rojos)
  'Corona de Castilla': '#7f1d1d',
  'Corona de España': '#b91c1c',
  'Virreinato de Nueva España': '#dc2626',
  'Virreinato del Perú': '#ef4444',
  'Virreinato de Nueva Granada': '#f87171',
  'Virreinato del Río de la Plata': '#fca5a5',
  'Capitanía General de Filipinas': '#e11d48',
  'Capitanía General de Cuba': '#be123c',
  Florida: '#fb7185',
  Luisiana: '#fda4af',
  // Familia Corona de Aragón / Italia (ámbares y dorados)
  'Reino de Nápoles': '#ca8a04',
  'Reino de Sicilia': '#a16207',
  'Reino de Cerdeña': '#eab308',
  'Ducado de Milán': '#facc15',
  // Herencia borgoñona, fuera de Castilla y Aragón
  'Países Bajos Españoles': '#1e3a8a',
  // Unión dinástica, corona propia (no forma parte de Castilla ni Aragón)
  'Portugal (Unión Ibérica)': '#166534',
}

const COLOR_RESERVA = '#57534e'

// Paleta de reserva para un territorio que aún no tenga color asignado
// en COLOR_POR_REINO (p. ej. uno nuevo añadido al manifiesto): genera un
// tono estable a partir de su nombre, para que no rompa el mapa mientras
// se le asigna un color definitivo dentro de su familia.
const RESERVA_ROTATORIA = [
  '#0f766e',
  '#9333ea',
  '#b45309',
  '#334155',
  '#166534',
  '#be123c',
]

function hashSimple(texto: string): number {
  let h = 0
  for (let i = 0; i < texto.length; i++) h = (h * 31 + texto.charCodeAt(i)) | 0
  return Math.abs(h)
}

export function colorPorReino(nombre: string): string {
  return (
    COLOR_POR_REINO[nombre] ??
    RESERVA_ROTATORIA[hashSimple(nombre) % RESERVA_ROTATORIA.length] ??
    COLOR_RESERVA
  )
}
