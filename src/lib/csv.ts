// CSV mínimo, sin dependencias: basta para nuestro caso de uso
// (columnas controladas, sin CSV "salvaje" de terceros).

export function filasACsv(filas: Record<string, string>[]): string {
  if (filas.length === 0) return ''
  const columnas = Object.keys(filas[0])
  const escapar = (valor: string) => {
    if (/[",\n]/.test(valor)) return `"${valor.replace(/"/g, '""')}"`
    return valor
  }
  const lineas = [
    columnas.map(escapar).join(','),
    ...filas.map((fila) => columnas.map((c) => escapar(fila[c] ?? '')).join(',')),
  ]
  return lineas.join('\n')
}

export function csvAFilas(texto: string): Record<string, string>[] {
  const filas = analizarCsv(texto)
  if (filas.length === 0) return []
  const [columnas, ...resto] = filas
  return resto
    .filter((fila) => fila.some((c) => c.trim() !== ''))
    .map((fila) =>
      Object.fromEntries(columnas.map((c, i) => [c, fila[i] ?? ''])),
    )
}

// Parser CSV carácter a carácter: soporta campos entrecomillados con
// comas, saltos de línea y comillas escapadas ("").
function analizarCsv(texto: string): string[][] {
  const filas: string[][] = []
  let fila: string[] = []
  let campo = ''
  let entreComillas = false

  for (let i = 0; i < texto.length; i++) {
    const c = texto[i]
    if (entreComillas) {
      if (c === '"') {
        if (texto[i + 1] === '"') {
          campo += '"'
          i++
        } else {
          entreComillas = false
        }
      } else {
        campo += c
      }
    } else if (c === '"') {
      entreComillas = true
    } else if (c === ',') {
      fila.push(campo)
      campo = ''
    } else if (c === '\n' || c === '\r') {
      if (c === '\r' && texto[i + 1] === '\n') i++
      fila.push(campo)
      filas.push(fila)
      fila = []
      campo = ''
    } else {
      campo += c
    }
  }
  if (campo !== '' || fila.length > 0) {
    fila.push(campo)
    filas.push(fila)
  }
  return filas
}
