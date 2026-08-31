#!/usr/bin/env node
// Sustituye el resumen de algunas rutas concretas por texto escrito a
// mano centrado en la CAMPAÑA (no en la biografía de un protagonista,
// que es lo que traía el extracto automático de fetch-wikipedia cuando
// el articuloWiki de la ruta apuntaba a una persona en vez de a un
// artículo dedicado a la expedición/conquista).
//
// Uso: node scripts/reescribir-resumenes-rutas.mjs

import { readFile, writeFile } from 'node:fs/promises'

const NUEVOS_RESUMENES = {
  'primer-viaje-colon':
    'Zarpó de Palos de la Frontera el 3 de agosto de 1492 con las carabelas Pinta, Niña y la nao Santa María. Tras hacer escala en las Canarias, cruzó el Atlántico y avistó tierra en Guanahaní el 12 de octubre, iniciando el contacto europeo sostenido con América. Colón exploró después las costas de Cuba y La Española, donde la Santa María naufragó, antes de regresar a España en marzo de 1493 con la noticia del hallazgo.',
  'viajes-colon-2-4':
    'Tras el éxito del primer viaje, Colón encabezó tres expediciones más: la segunda (1493-1496) fundó La Isabela y colonizó La Española; la tercera (1498-1500) alcanzó por primera vez Tierra Firme, en la costa de Venezuela, y terminó con Colón depuesto y enviado a España encadenado; la cuarta (1502-1504) exploró la costa de Centroamérica en busca de un paso hacia Asia y acabó en un naufragio de un año en Jamaica. Estos viajes consolidaron la presencia española en el Caribe más allá del hallazgo inicial.',
  'tierra-firme-ojeda-nicuesa':
    'En 1509, la Corona dividió la costa de Tierra Firme entre dos gobernaciones rivales: Nueva Andalucía, al este, para Alonso de Ojeda, y Castilla de Oro, al oeste, para Diego de Nicuesa. Ambas expediciones fracasaron por el hambre, las enfermedades y la resistencia indígena —Ojeda fundó y perdió San Sebastián de Urabá; Nicuesa naufragó antes de fundar el precario Nombre de Dios—, pero de sus restos surgiría, ya bajo Vasco Núñez de Balboa, el primer asentamiento estable del continente: Santa María la Antigua del Darién.',
  'balboa-mar-del-sur':
    'En septiembre de 1513, Vasco Núñez de Balboa cruzó a pie el istmo de Panamá al frente de una expedición de españoles e indígenas guías y fue el primer europeo en avistar el océano Pacífico desde América, al que llamó «Mar del Sur», tomando posesión de sus aguas en nombre de la Corona de Castilla. El hallazgo reveló que las tierras descubiertas por Colón formaban un continente separado de Asia por un nuevo océano.',
  'conquista-cuba-pr':
    'Entre 1508 y 1511, Juan Ponce de León colonizó Puerto Rico desde la fundación de Caparra, sofocando la resistencia taína del cacique Agüeybaná II, mientras Diego Velázquez de Cuéllar sometía Cuba y fundaba sus primeras siete villas, entre ellas Baracoa, la primera capital de la isla. Ambas conquistas aseguraron el control español sobre el Caribe mayor y sirvieron de base logística para las expediciones posteriores a México y Tierra Firme.',
  'conquista-nueva-granada':
    'En 1536, Gonzalo Jiménez de Quesada remontó el río Magdalena al frente de una expedición que partió de Santa Marta, y tras dos años de penurias alcanzó el altiplano cundiboyacense, sometiendo a la confederación muisca. En 1538 fundó Santa Fe de Bogotá, capital del futuro Nuevo Reino de Granada, en una carrera de fundación disputada con las expediciones rivales de Sebastián de Belalcázar, llegada desde Quito, y Nikolaus Federmann, desde Venezuela.',
  'conquista-chile':
    'Pedro de Valdivia partió de Cuzco en 1540 al frente de una pequeña hueste y, tras cruzar el desierto de Atacama, fundó Santiago de Chile en 1541, iniciando la conquista del territorio araucano pese a la constante y prolongada resistencia mapuche (la guerra de Arauco). Fundó también Concepción y otras plazas antes de morir en 1553 en la batalla de Tucapel, capturado por el toqui Lautaro.',
  'rio-de-la-plata':
    'En 1536, Pedro de Mendoza, primer adelantado del Río de la Plata al mando de la mayor expedición enviada hasta entonces a América, fundó el puerto de Buenos Aires. Asediado por los pueblos originarios y el hambre, el asentamiento fue abandonado hacia 1541 y sus pobladores se trasladaron a Asunción; la ciudad no sería refundada de forma definitiva hasta 1580, por Juan de Garay.',
  'conquista-florida':
    'En 1565, Pedro Menéndez de Avilés fundó San Agustín, el asentamiento europeo más antiguo de los actuales Estados Unidos, tras expulsar por la fuerza a la colonia protestante francesa de Fort Caroline, cercana. La colonización española de la Florida se prolongaría, con una interrupción británica entre 1763 y 1783, hasta su cesión a los Estados Unidos por el tratado Adams-Onís de 1819-1821.',
  'virreinato-nueva-espana':
    'A finales de 1535, Antonio de Mendoza llegó a México como primer virrey, gobernador, capitán general y presidente de la Real Audiencia, dando forma institucional definitiva al Virreinato de Nueva España sobre los territorios conquistados por Cortés. Durante su gobierno se impuso la autoridad real sobre los conquistadores, se fundó la primera imprenta de América, se abrió la Casa de Moneda y se creó el Colegio de Santa Cruz de Tlatelolco.',
  'conquista-nueva-galicia':
    'Entre 1529 y 1536, Nuño Beltrán de Guzmán encabezó una violenta campaña de conquista al occidente de México, fundando Guadalajara y otras ciudades y sometiendo brutalmente a los pueblos originarios de la región, lo que le valió ser procesado y encarcelado por la Corona. El territorio conquistado se organizó como el Reino de la Nueva Galicia, con audiencia propia desde 1548.',
  'expedicion-cabeza-vaca':
    'En 1527, Pánfilo de Narváez desembarcó en la Florida al frente de una expedición que terminó en naufragio y desastre casi total. Álvar Núñez Cabeza de Vaca, uno de los cuatro únicos supervivientes, pasó ocho años recorriendo a pie —cautivo, comerciante y curandero entre distintos pueblos indígenas— el actual sur de Estados Unidos y norte de México, hasta reencontrarse con tropas españolas en Sinaloa en 1536: la primera travesía europea documentada del interior de Norteamérica.',
}

async function main() {
  const rutaTs = 'src/data/rutas.ts'
  const src = await readFile(rutaTs, 'utf-8')
  const inicio = src.indexOf('[')
  const fin = src.lastIndexOf(']')
  // eslint-disable-next-line no-eval
  const rutas = eval(src.slice(inicio, fin + 1))

  let cambiados = 0
  for (const r of rutas) {
    if (NUEVOS_RESUMENES[r.id]) {
      r.resumen = NUEVOS_RESUMENES[r.id]
      cambiados++
    }
  }

  const ts = `import type { Ruta } from '../types/historia'

// Rutas marítimas: generadas con searoute-ts (grafo de navegación
// mundial: sigue costas y estrechos reales, evita tierra). No depende de
// infraestructura moderna salvo canales artificiales (Suez, Panamá), que
// estas rutas no utilizan — por tanto es una aproximación honesta a la
// navegación real de la época, no un anacronismo.
//
// Rutas terrestres: los puntos son los hitos históricos documentados
// (ciudades, batallas) tomados de las crónicas; NO se generan con un
// enrutador de carreteras modernas (eso sería tan anacrónico como
// mostrar fronteras actuales). MapaHistorico.tsx suaviza estos pocos
// puntos con una curva Catmull-Rom al dibujarlos, sin inventar un
// trayecto que no está documentado.

export const rutas: Ruta[] = ${JSON.stringify(rutas, null, 2)}
`
  await writeFile(rutaTs, ts, 'utf-8')
  console.log(`✅ ${cambiados} resúmenes de rutas reescritos centrados en la campaña.`)
}

main()
