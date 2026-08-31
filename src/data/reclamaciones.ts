import type { Reclamacion } from '../types/historia'

// Contornos ESQUEMÁTICOS (no digitalizados de una fuente cartográfica
// precisa) que representan la extensión RECLAMADA de un territorio más
// allá de su zona de control efectivo — ver nota en types/historia.ts y
// la sección "fronteras aproximadas" del README. Se dibujan como línea
// discontinua superpuesta al territorio, nunca como relleno sólido.
export const reclamaciones: Reclamacion[] = [
  {
    id: 'nueva-espana-pacifico-norte',
    territorioId: 'nueva-espana',
    nombre: 'Reclamación española del Pacífico Norte',
    // 1790: Convención de Nootka, España reafirma en exclusiva su
    // reclamación sobre la costa del Pacífico hasta más allá del
    // paralelo 54°40′. 1819: Tratado Adams-Onís, España cede a EE. UU.
    // toda reclamación al norte del paralelo 42.
    desde: 1790,
    hasta: 1819,
    articuloWiki: 'https://es.wikipedia.org/wiki/Convenci%C3%B3n_de_Nutka',
    geometry: {
      type: 'Polygon',
      coordinates: [
        [
          [-124.4, 42.0],
          [-124.6, 44.0],
          [-124.3, 46.0],
          [-124.7, 48.0],
          [-125.8, 49.3],
          [-127.5, 50.7],
          [-129.0, 52.5],
          [-130.5, 54.0],
          [-131.5, 54.67],
          [-115.0, 54.67],
          [-111.0, 42.0],
          [-124.4, 42.0],
        ],
      ],
    },
  },
]
