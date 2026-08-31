import type { Ruta } from '../types/historia'

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

export const rutas: Ruta[] = [
  {
    "id": "primer-viaje-colon",
    "nombre": "Primer viaje de Cristóbal Colón",
    "tipo": "exploracion",
    "protagonistaIds": [
      "colon"
    ],
    "fechaInicio": 1492.65,
    "fechaFin": 1493.2,
    "color": "#0891b2",
    "articuloWiki": "https://es.wikipedia.org/wiki/Viajes_de_Crist%C3%B3bal_Col%C3%B3n",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -6.02,
          37.335
        ],
        [
          -6.651914,
          36.732048
        ],
        [
          -6.731768,
          35.691895
        ],
        [
          -8.160605,
          34.393164
        ],
        [
          -8.7725,
          33.88375
        ],
        [
          -10.79,
          32.745
        ],
        [
          -12.335,
          31.65
        ],
        [
          -14.7975,
          29.7775
        ],
        [
          -15.418281,
          29.48793
        ],
        [
          -16.025703,
          28.764063
        ],
        [
          -17.75625,
          29.2175
        ],
        [
          -19.96125,
          29.97875
        ],
        [
          -30,
          30
        ],
        [
          -32.825,
          30.055
        ],
        [
          -40,
          30
        ],
        [
          -42.395,
          30.045
        ],
        [
          -50,
          30
        ],
        [
          -56.66,
          29.005
        ],
        [
          -63.095,
          28.36
        ],
        [
          -67.1825,
          27.42875
        ],
        [
          -68,
          27.485
        ],
        [
          -69.79,
          27.1675
        ],
        [
          -72.2925,
          26.8575
        ],
        [
          -73.25875,
          26.544375
        ],
        [
          -74.1325,
          26.39125
        ],
        [
          -75.3175,
          26.279375
        ],
        [
          -75.2,
          24.7975
        ]
      ]
    },
    "resumen": "Zarpó de Palos de la Frontera el 3 de agosto de 1492 con las carabelas Pinta, Niña y la nao Santa María. Tras hacer escala en las Canarias, cruzó el Atlántico y avistó tierra en Guanahaní el 12 de octubre, iniciando el contacto europeo sostenido con América. Colón exploró después las costas de Cuba y La Española, donde la Santa María naufragó, antes de regresar a España en marzo de 1493 con la noticia del hallazgo."
  },
  {
    "id": "conquista-mexico",
    "nombre": "Campaña de Hernán Cortés contra Tenochtitlan",
    "tipo": "conquista",
    "protagonistaIds": [
      "cortes"
    ],
    "fechaInicio": 1519.15,
    "fechaFin": 1521.65,
    "color": "#b91c1c",
    "articuloWiki": "https://es.wikipedia.org/wiki/Conquista_de_M%C3%A9xico",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -96.13,
          19.2
        ],
        [
          -98.24,
          19.32
        ],
        [
          -98.3,
          19.06
        ],
        [
          -99.13,
          19.43
        ],
        [
          -99.15,
          19.44
        ],
        [
          -98.76,
          19.7
        ],
        [
          -98.24,
          19.32
        ],
        [
          -99.13,
          19.43
        ]
      ]
    },
    "resumen": "La conquista de México, conquista de México-Tenochtitlan o conquista del Imperio mexica (1519–1521)​​​ fue una serie de campañas militares dirigidas por Hernán Cortés en alianza con los pueblos originarios del valle de México, con el objetivo de sitiar, derrocar y ocupar la capital del Imperio Mexica acontecidos entre los años 1519 y 1521; que concluyeron con el asalto final y la toma de la ciudad de México-Tenochtitlan, el 13 de agosto de 1521. Este hecho marcó el inicio de un largo proceso de colonización, evangelización y mestizaje de Mesoamérica y el resto de lo que hoy es México y el sur de Estados Unidos por parte de los conquistadores españoles.​ No sería hasta tres siglos más tarde que luego de la independencia de México se entenderá a «México» como la totalidad del territorio heredado del anterior Virreinato de la Nueva España.\nPosteriormente se desarrollaron otras expediciones y campañas militares, tanto de Hernán Cortés como de sus capitanes, entre 1521 y 1525 en la zona central, norte y sur del territorio de los actuales México y Centroamérica, las cuales fueron sentando los primeros límites del Virreinato de Nueva España. Desde esta base inicial, el proceso continuó con la incorporación de otros territorios por diversos conquistadores y adelantados españoles: California, la península de Yucatán, la zona occidental conocida como Nueva Galicia, la zona noreste conocida como Nuevo Reino de León, la zona norte​ donde se encontraba la Nueva Vizcaya y otros territorios de América del Norte y Central. A partir de estos acontecimientos, que modificaron drásticamente la geopolítica mundial en los albores del siglo XVI, discurrirían aproximadamente tres siglos de dominación territorial española​ y resistencia indígena.\nLas fuentes principales de información de las campañas de Cortés y sus capitanes son las crónicas de Indias redactadas en el siglo XVI, de las que destacan la Historia verdadera de la conquista de la Nueva España de Bernal Díaz del Castillo, quien participó en las campañas bélicas, las cartas de relación​ de Hernán Cortés al rey Carlos I de España, y la obra de Francisco López de Gómara, conocida como Historia general de las Indias, quien nunca pisó el continente americano pero pasó los últimos momentos de la vida de Hernán Cortés escuchando sus memorias."
  },
  {
    "id": "conquista-peru",
    "nombre": "Campaña de Francisco Pizarro contra el Imperio inca",
    "tipo": "conquista",
    "protagonistaIds": [
      "pizarro"
    ],
    "fechaInicio": 1532.6,
    "fechaFin": 1538.3,
    "color": "#7c3aed",
    "articuloWiki": "https://es.wikipedia.org/wiki/Conquista_del_Imperio_incaico",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -80.45,
          -3.57
        ],
        [
          -78.52,
          -7.16
        ],
        [
          -71.97,
          -13.52
        ],
        [
          -77.03,
          -12.05
        ],
        [
          -71.97,
          -13.52
        ],
        [
          -71.9,
          -13.6
        ]
      ]
    },
    "resumen": "La conquista del Imperio incaico, también conocida como conquista del Perú​​​ o del Tahuantinsuyo,​fue el proceso mediante el cual la Monarquía Hispánica incorporó los territorios del Imperio incaico a sus dominios en América durante el siglo XVI. Formó parte de la expansión española en el continente y condujo al establecimiento de las gobernaciones de Nueva Castilla y Nueva Toledo, antecedentes del posterior Virreinato del Perú.\nLas primeras expediciones españolas hacia los Andes partieron desde Panamá durante la década de 1520. Inicialmente fueron encabezadas por Pascual de Andagoya, y después por Francisco Pizarro, Diego de Almagro y Hernando de Luque. La conquista se desarrolló en un contexto de crisis interna del Tahuantinsuyo, marcada por el conflicto entre Huáscar y Atahualpa. Después de la captura de Atahualpa en Cajamarca el 16 de noviembre de 1532 y la ejecución del Sapa Inca al año siguiente, los conquistadores marcharon en dirección al Cuzco con el apoyo de diversos pueblos indígenas, así como sectores de la nobleza cusqueña, logrando ocupar la ciudad el 15 de noviembre de 1533. La derrota definitiva de los partidarios de Atahualpa no se completó hasta finales de 1534 y comienzos de 1535, con la muerte de Quizquiz a manos de su propia soldadesca, la captura y ejecución de Rumiñahui, y la ocupación de las regiones septentrionales del antiguo imperio.\nAunque los españoles gobernaron inicialmente en alianza con una facción de la nobleza incaica, pronto surgieron tensiones entre conquistadores e incas, así como entre los propios españoles. Estas culminaron en la rebelión de Manco Inca en 1536. Tras el fracaso de los sitios de Cuzco y Lima, el soberano inca se retiró primero a Vitcos y posteriormente a Vilcabamba, desde donde dirigió la resistencia contra el dominio español y promovió levantamientos en diferentes regiones andinas. Paralelamente, el control de los europeos se vio debilitado por una serie de guerras civiles entre los propios conquistadores.\nLa autoridad de la Corona se consolidó tras la derrota de los rebeldes españoles a mediados del siglo XVI. No obstante, la resistencia de Vilcabamba perduró hasta 1572, cuando las fuerzas del virrey Francisco de Toledo ocuparon el territorio y ejecutaron a Túpac Amaru I, poniendo fin al último Estado inca independiente. Este acontecimiento se considera el cierre definitivo de la conquista del Tahuantinsuyo."
  },
  {
    "id": "magallanes-elcano",
    "nombre": "Expedición Magallanes-Elcano: primera vuelta al mundo",
    "tipo": "exploracion",
    "protagonistaIds": [
      "magallanes",
      "elcano"
    ],
    "fechaInicio": 1519.65,
    "fechaFin": 1522.68,
    "color": "#059669",
    "articuloWiki": "https://es.wikipedia.org/wiki/Expedici%C3%B3n_de_Magallanes_y_Elcano",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -6.651914,
          36.732048
        ],
        [
          -6.731768,
          35.691895
        ],
        [
          -8.7725,
          33.88375
        ],
        [
          -17.9725,
          21.075
        ],
        [
          -23,
          15
        ],
        [
          -24.525,
          13.925
        ],
        [
          -27.63,
          7.675
        ],
        [
          -30.875,
          0.89
        ],
        [
          -31.52,
          0
        ],
        [
          -32.71125,
          -3.33875
        ],
        [
          -33.8,
          -5.25
        ],
        [
          -36.2,
          -13
        ],
        [
          -39.5,
          -20
        ],
        [
          -41.3,
          -23.5
        ],
        [
          -43.395,
          -26.94
        ],
        [
          -49.74875,
          -32.2175
        ],
        [
          -54.615,
          -35.25
        ],
        [
          -56.35625,
          -35.05625
        ],
        [
          -58.35125,
          -34.49875
        ],
        [
          -57.26375,
          -34.81875
        ],
        [
          -56.16,
          -37.125
        ],
        [
          -57.1,
          -38.25
        ],
        [
          -61.25,
          -39.3
        ],
        [
          -63.9,
          -43.4
        ],
        [
          -64.7,
          -45.72
        ],
        [
          -65.995,
          -48.815
        ],
        [
          -68,
          -52.4
        ],
        [
          -68.5,
          -52.47
        ],
        [
          -69.395,
          -52.41
        ],
        [
          -69.72,
          -52.595
        ],
        [
          -70.45,
          -52.755
        ],
        [
          -70.57,
          -52.96
        ],
        [
          -70.50125,
          -53.52625
        ],
        [
          -69.51,
          -53.445
        ],
        [
          -70.50125,
          -53.52625
        ],
        [
          -70.966562,
          -53.885625
        ],
        [
          -71.415,
          -53.915
        ],
        [
          -71.99,
          -53.75
        ],
        [
          -74.185,
          -52.825
        ],
        [
          -75.19125,
          -52.84125
        ],
        [
          -80,
          -50
        ],
        [
          -84.89,
          -45.405
        ],
        [
          -90,
          -40
        ],
        [
          -95,
          -35.385
        ],
        [
          -100,
          -30
        ],
        [
          -105,
          -25.275
        ],
        [
          -110,
          -20
        ],
        [
          -114.39,
          -20.06
        ],
        [
          -140,
          -20
        ],
        [
          -149.60957,
          -17.408496
        ],
        [
          -165.06,
          -15.17125
        ],
        [
          -170,
          -10
        ],
        [
          -180,
          0
        ],
        [
          -185.1,
          3.435
        ],
        [
          -193.6,
          9.1
        ],
        [
          -200,
          10
        ],
        [
          -230,
          10
        ],
        [
          -233.6,
          10.5
        ],
        [
          -233,
          8
        ],
        [
          -234.155,
          5.49875
        ],
        [
          -234.5,
          1.2
        ],
        [
          -233.4875,
          -0.7675
        ],
        [
          -233.115,
          -1.995
        ],
        [
          -233.313906,
          -2.502187
        ],
        [
          -232.385,
          -3.67
        ],
        [
          -233.313906,
          -2.502187
        ],
        [
          -234.79,
          -3.9175
        ],
        [
          -234.775,
          -4.8425
        ],
        [
          -234.425,
          -7.066875
        ],
        [
          -234.4625,
          -8.311563
        ],
        [
          -235.45,
          -8.655
        ],
        [
          -237.744687,
          -11.198125
        ],
        [
          -245.845,
          -20.615
        ],
        [
          -246.57375,
          -21.290625
        ],
        [
          -249.274375,
          -22.964375
        ],
        [
          -254.475,
          -25.7
        ],
        [
          -258.25,
          -27.49
        ],
        [
          -261.28,
          -28.79
        ],
        [
          -264.455,
          -30.085
        ],
        [
          -270,
          -32.085
        ],
        [
          -276.38,
          -33.935
        ],
        [
          -280,
          -34.795
        ],
        [
          -285.655,
          -35.99
        ],
        [
          -293.165,
          -37.08
        ],
        [
          -302.475,
          -37.715
        ],
        [
          -310,
          -37.735
        ],
        [
          -317.045,
          -37.275
        ],
        [
          -320,
          -36.95
        ],
        [
          -325.835,
          -36.16
        ],
        [
          -333.945,
          -34.52375
        ],
        [
          -342,
          -35
        ],
        [
          -342.569688,
          -34.205938
        ],
        [
          -341.575,
          -33.875
        ],
        [
          -342.569688,
          -34.205938
        ],
        [
          -343.38,
          -33.275
        ],
        [
          -370,
          0
        ],
        [
          -377.078125,
          11.311563
        ],
        [
          -377.9425,
          14.78
        ],
        [
          -377.9725,
          21.075
        ],
        [
          -368.7725,
          33.88375
        ],
        [
          -366.731768,
          35.691895
        ],
        [
          -366.651914,
          36.732048
        ]
      ]
    },
    "resumen": "La expedición de Magallanes y Elcano fue una expedición marítima española del siglo XVI.\nSupuso primera circunnavegación de la Tierra, el hallazgo del estrecho de Magallanes y el descubrimiento para los europeos de las islas Filipinas, además del descubrimiento de las islas Marianas, islas Desventuradas e isla Ámsterdam.​​ \nFue capitaneada inicialmente por Fernando de Magallanes, y completada por Juan Sebastián Elcano. \n\n \n\nLa expedición tenía el inédito propósito de abrir una ruta comercial con las islas de las especias (islas Molucas, Indonesia) por occidente, buscando un paso marítimo entre el océano Atlántico y el océano Pacífico. \nEstaba formada por cinco naves, las cuales bajaron el río Guadalquivir desde Sevilla el día 10 de agosto de 1519. Algunos días después, el capitán general y los capitanes de las otras naves se vinieron en las chalupas tras ultimar los preparativos, por lo que las naves partieron definitivamente de Sanlúcar de Barrameda el 20 de septiembre de 1519.​​ La escuadra, después de haber explorado durante meses el litoral americano al sur de Brasil, logró cruzar el estrecho de Magallanes el 28 de noviembre de 1520. En su travesía por el Pacífico llegó a las islas Filipinas, donde, el 27 de abril de 1521, muere Fernando de Magallanes en la batalla de Mactán. Los expedicionarios continuaron la navegación hasta las Molucas, objetivo de su viaje, donde eligieron a Juan Sebastián Elcano para capitanear el viaje de regreso. Navegando hacia el oeste por el océano Índico y dando la vuelta a África, el 6 de septiembre de 1522 la Victoria, única nave que quedaba en la expedición, retornó a Sanlúcar de Barrameda, convirtiéndose en la primera embarcación de la historia en dar la vuelta al mundo. Ese mismo día la nave fue remolcada río arriba hasta Sevilla, debido a las malas condiciones en las que se encontraba la nave, llegando dos días después (8 de septiembre de 1522)​​ con su carga de especias."
  },
  {
    "id": "guerra-granada",
    "nombre": "Guerra de Granada",
    "tipo": "conquista",
    "protagonistaIds": [
      "fernando-ii",
      "isabel-i",
      "gran-capitan"
    ],
    "fechaInicio": 1482.15,
    "fechaFin": 1492.04,
    "color": "#ca8a04",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerra_de_Granada",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -4.1,
          36.97
        ],
        [
          -5.16,
          36.74
        ],
        [
          -4.42,
          36.72
        ],
        [
          -2.77,
          37.49
        ],
        [
          -3.6,
          37.18
        ]
      ]
    },
    "resumen": "La guerra de Granada fue el conjunto de campañas militares que tuvieron lugar entre 1482 y 1492, emprendidas por la reina Isabel I de Castilla y su esposo, el rey Fernando II de Aragón, en el interior del reino nazarí de Granada, que culminaron con la rendición del sultán Boabdil, quien había oscilado entre la alianza, el doble juego, la contemporización y el enfrentamiento abierto con ambos bandos.\nLa victoria cristiana tuvo como consecuencias la integración en la Corona de Castilla del último reino musulmán de la península ibérica, finalizándose el proceso histórico de la Reconquista que los reinos cristianos habían comenzado en el siglo VIII. Ese hecho motivó que el papa Alejandro VI concediese a Isabel y Fernando el título de Reyes Católicos en 1496.\nLos diez años de guerra no fueron un esfuerzo continuo: solían marcar un ritmo estacional de campañas iniciadas en primavera y detenidas en el invierno. Además, el conflicto estuvo sujeto a numerosas vicisitudes bélicas y civiles. En el bando cristiano fue decisiva la capacidad de integración en una misión común que emprendió principalmente la Corona de Castilla, apoyada por la nobleza castellana y el imprescindible impulso del clero, bajo la autoridad de la emergente Monarquía Católica. La participación de la Corona de Aragón fue de menor importancia: aparte de la presencia del propio rey Fernando, su participación consistió en la colaboración naval, la aportación de expertos artilleros y el empréstito financiero. En el bando musulmán fueron notables los enfrentamientos internos entre distintas facciones que favorecieron el éxito de sus contrarios.\nLa protocolaria entrega de las llaves de la ciudad de Granada y la ciudad palatina de la Alhambra el 2 de enero de 1492 se sigue conmemorando todos los años en esa fecha, con un tremolar de banderas desde el Ayuntamiento de Granada."
  },
  {
    "id": "viajes-colon-2-4",
    "nombre": "Segundo, tercer y cuarto viajes de Colón",
    "tipo": "exploracion",
    "protagonistaIds": [
      "colon",
      "bartolome-colon"
    ],
    "fechaInicio": 1493.75,
    "fechaFin": 1504.83,
    "color": "#0e7490",
    "articuloWiki": "https://es.wikipedia.org/wiki/Viajes_de_Crist%C3%B3bal_Col%C3%B3n",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -6.35,
          36.78
        ],
        [
          -70.99,
          19.9
        ],
        [
          -69.9,
          18.48
        ],
        [
          -61.4,
          10.5
        ],
        [
          -82.4,
          15.8
        ],
        [
          -77.9,
          18.4
        ]
      ]
    },
    "resumen": "Tras el éxito del primer viaje, Colón encabezó tres expediciones más: la segunda (1493-1496) fundó La Isabela y colonizó La Española; la tercera (1498-1500) alcanzó por primera vez Tierra Firme, en la costa de Venezuela, y terminó con Colón depuesto y enviado a España encadenado; la cuarta (1502-1504) exploró la costa de Centroamérica en busca de un paso hacia Asia y acabó en un naufragio de un año en Jamaica. Estos viajes consolidaron la presencia española en el Caribe más allá del hallazgo inicial."
  },
  {
    "id": "conquista-canarias",
    "nombre": "Conquista de las Islas Canarias",
    "tipo": "conquista",
    "protagonistaIds": [
      "pedro-vera",
      "alonso-lugo"
    ],
    "fechaInicio": 1483.29,
    "fechaFin": 1496.6,
    "color": "#15803d",
    "articuloWiki": "https://es.wikipedia.org/wiki/Conquista_de_las_islas_Canarias",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -15.58,
          28.1
        ],
        [
          -17.92,
          28.68
        ],
        [
          -16.25,
          28.47
        ]
      ]
    },
    "resumen": "La conquista de las Islas Canarias  fue el proceso por el que el archipiélago de Canarias (España)  fue incorporado a la Corona de Castilla mediante una progresiva toma militar del territorio habitado por los aborígenes canarios a lo largo del siglo XV.\nSe llevó a cabo entre 1402 y 1496, y no fue una conquista sencilla en lo militar dada la resistencia de los aborígenes en algunas islas. Tampoco lo fue en lo político, puesto que confluyeron los intereses particulares de la nobleza, empeñada en fortalecer su poder económico y político mediante la adquisición de las islas, y los estados, particularmente Castilla, en plena fase de expansión territorial y en un proceso de fortalecimiento de la Corona frente a la nobleza.\nLos historiadores distinguen dos periodos en la conquista de Canarias:\n\nConquista señorial, llevada a cabo por la nobleza en beneficio propio y sin una participación directa de la Corona, que otorgaba el derecho de conquista a cambio de un pacto de vasallaje. Se distinguen asimismo dentro de ella la conquista betencuriana o normanda, llevada a cabo por los caballeros franceses Jean de Béthencourt y Gadifer de La Salle entre 1402 y 1405, que afectó a las islas de Lanzarote, El Hierro y Fuerteventura; y la conquista señorial castellana, realizada por nobles castellanos que se apropiaron, mediante compras, cesiones y matrimonios, de las primeras islas conquistadas e incorporaron la isla de La Gomera hacia 1450.\nConquista realenga, llevada a cabo directamente bajo patrocinio de la Corona durante el reinado de los Reyes Católicos, quienes asumieron los derechos de conquista de las islas que faltaban por dominar: Gran Canaria, La Palma y Tenerife. Esta etapa tuvo lugar entre 1478 y 1496."
  },
  {
    "id": "tierra-firme-ojeda-nicuesa",
    "nombre": "Expediciones a Tierra Firme: Ojeda y Nicuesa",
    "tipo": "conquista",
    "protagonistaIds": [
      "alonso-ojeda",
      "diego-nicuesa"
    ],
    "fechaInicio": 1509.85,
    "fechaFin": 1510.75,
    "color": "#9333ea",
    "articuloWiki": "https://es.wikipedia.org/wiki/Alonso_de_Ojeda",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -77.35,
          8.65
        ],
        [
          -77.13,
          8.13
        ]
      ]
    },
    "resumen": "En 1509, la Corona dividió la costa de Tierra Firme entre dos gobernaciones rivales: Nueva Andalucía, al este, para Alonso de Ojeda, y Castilla de Oro, al oeste, para Diego de Nicuesa. Ambas expediciones fracasaron por el hambre, las enfermedades y la resistencia indígena —Ojeda fundó y perdió San Sebastián de Urabá; Nicuesa naufragó antes de fundar el precario Nombre de Dios—, pero de sus restos surgiría, ya bajo Vasco Núñez de Balboa, el primer asentamiento estable del continente: Santa María la Antigua del Darién."
  },
  {
    "id": "balboa-mar-del-sur",
    "nombre": "Balboa y el descubrimiento del Mar del Sur",
    "tipo": "exploracion",
    "protagonistaIds": [
      "balboa"
    ],
    "fechaInicio": 1513.6,
    "fechaFin": 1513.75,
    "color": "#0369a1",
    "articuloWiki": "https://es.wikipedia.org/wiki/Vasco_N%C3%BA%C3%B1ez_de_Balboa",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -77.13,
          8.13
        ],
        [
          -78.2,
          8.05
        ]
      ]
    },
    "resumen": "En septiembre de 1513, Vasco Núñez de Balboa cruzó a pie el istmo de Panamá al frente de una expedición de españoles e indígenas guías y fue el primer europeo en avistar el océano Pacífico desde América, al que llamó «Mar del Sur», tomando posesión de sus aguas en nombre de la Corona de Castilla. El hallazgo reveló que las tierras descubiertas por Colón formaban un continente separado de Asia por un nuevo océano."
  },
  {
    "id": "conquista-cuba-pr",
    "nombre": "Conquista de Cuba y Puerto Rico",
    "tipo": "conquista",
    "protagonistaIds": [
      "ponce-leon",
      "velazquez-cuellar"
    ],
    "fechaInicio": 1508.65,
    "fechaFin": 1511.6,
    "color": "#be123c",
    "articuloWiki": "https://es.wikipedia.org/wiki/Juan_Ponce_de_Le%C3%B3n",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -66.12,
          18.47
        ],
        [
          -74.5,
          20.35
        ]
      ]
    },
    "resumen": "Entre 1508 y 1511, Juan Ponce de León colonizó Puerto Rico desde la fundación de Caparra, sofocando la resistencia taína del cacique Agüeybaná II, mientras Diego Velázquez de Cuéllar sometía Cuba y fundaba sus primeras siete villas, entre ellas Baracoa, la primera capital de la isla. Ambas conquistas aseguraron el control español sobre el Caribe mayor y sirvieron de base logística para las expediciones posteriores a México y Tierra Firme."
  },
  {
    "id": "conquista-guatemala",
    "nombre": "Conquista de Guatemala",
    "tipo": "conquista",
    "protagonistaIds": [
      "pedro-alvarado"
    ],
    "fechaInicio": 1524.1,
    "fechaFin": 1524.6,
    "color": "#ea580c",
    "articuloWiki": "https://es.wikipedia.org/wiki/Pedro_de_Alvarado",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -91.52,
          14.83
        ],
        [
          -90.73,
          14.62
        ]
      ]
    },
    "resumen": "Pedro de Alvarado y Contreras «Tonatiuh» (Lobón, Extremadura, Reino de Castilla; 1485-Guadalajara, Reino de la Nueva Galicia, Virreinato de la Nueva España: 4 de julio de 1541), I adelantado, gobernador y capitán general del Reino de Guatemala, caballero de la Orden de Santiago, fue un conquistador español que participó en la conquista de Cuba, en la exploración por Juan de Grijalva del golfo de México y de las costas de Yucatán, y en la conquista de México-Tenochtitlán dirigida por Hernán Cortés, así como en la conquista del área maya en gran parte de América Central (Guatemala, Honduras, El Salvador y partes de Nicaragua),​ pudiéndolo haberlo sido también del Perú, si no fuera por su renuncia a favor del adelantado Diego de Almagro. Fue conocido por el sobrenombre de Tonatiuh, que significa el Sol en lengua náhuatl."
  },
  {
    "id": "conquista-nueva-granada",
    "nombre": "Conquista del Nuevo Reino de Granada",
    "tipo": "conquista",
    "protagonistaIds": [
      "jimenez-quesada"
    ],
    "fechaInicio": 1537.3,
    "fechaFin": 1538.65,
    "color": "#4d7c0f",
    "articuloWiki": "https://es.wikipedia.org/wiki/Gonzalo_Jim%C3%A9nez_de_Quesada",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -73.6,
          5.2
        ],
        [
          -74.08,
          4.71
        ]
      ]
    },
    "resumen": "En 1536, Gonzalo Jiménez de Quesada remontó el río Magdalena al frente de una expedición que partió de Santa Marta, y tras dos años de penurias alcanzó el altiplano cundiboyacense, sometiendo a la confederación muisca. En 1538 fundó Santa Fe de Bogotá, capital del futuro Nuevo Reino de Granada, en una carrera de fundación disputada con las expediciones rivales de Sebastián de Belalcázar, llegada desde Quito, y Nikolaus Federmann, desde Venezuela."
  },
  {
    "id": "conquista-chile",
    "nombre": "Conquista de Chile",
    "tipo": "conquista",
    "protagonistaIds": [
      "pedro-valdivia"
    ],
    "fechaInicio": 1541.15,
    "fechaFin": 1553.98,
    "color": "#0f766e",
    "articuloWiki": "https://es.wikipedia.org/wiki/Pedro_de_Valdivia",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -70.65,
          -33.45
        ],
        [
          -72.6,
          -36.68
        ],
        [
          -73.15,
          -37.75
        ]
      ]
    },
    "resumen": "Pedro de Valdivia partió de Cuzco en 1540 al frente de una pequeña hueste y, tras cruzar el desierto de Atacama, fundó Santiago de Chile en 1541, iniciando la conquista del territorio araucano pese a la constante y prolongada resistencia mapuche (la guerra de Arauco). Fundó también Concepción y otras plazas antes de morir en 1553 en la batalla de Tucapel, capturado por el toqui Lautaro."
  },
  {
    "id": "rio-de-la-plata",
    "nombre": "Expedición al Río de la Plata y fundación de Buenos Aires",
    "tipo": "exploracion",
    "protagonistaIds": [
      "pedro-mendoza"
    ],
    "fechaInicio": 1536.15,
    "fechaFin": 1536.15,
    "color": "#c026d3",
    "articuloWiki": "https://es.wikipedia.org/wiki/Pedro_de_Mendoza",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -6.3,
          36.53
        ],
        [
          -58.37,
          -34.61
        ]
      ]
    },
    "resumen": "En 1536, Pedro de Mendoza, primer adelantado del Río de la Plata al mando de la mayor expedición enviada hasta entonces a América, fundó el puerto de Buenos Aires. Asediado por los pueblos originarios y el hambre, el asentamiento fue abandonado hacia 1541 y sus pobladores se trasladaron a Asunción; la ciudad no sería refundada de forma definitiva hasta 1580, por Juan de Garay."
  },
  {
    "id": "guerra-comunidades",
    "nombre": "Guerra de las Comunidades de Castilla",
    "tipo": "conquista",
    "protagonistaIds": [
      "juan-padilla"
    ],
    "fechaInicio": 1520.65,
    "fechaFin": 1521.32,
    "color": "#78350f",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerra_de_las_Comunidades_de_Castilla",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -4.9,
          41.31
        ],
        [
          -5.1,
          41.53
        ]
      ]
    },
    "resumen": "La guerra de las Comunidades de Castilla fue el levantamiento armado de los llamados comuneros, acaecido en la Corona de Castilla desde el año 1520 hasta 1522, es decir, a comienzos del reinado de Carlos I. Las ciudades protagonistas fueron las del interior de la Meseta Central, situándose a la cabeza del alzamiento las de Segovia, Toledo y Valladolid. Su carácter ha sido objeto de agitado debate historiográfico, con posturas y enfoques contradictorios.​ Así, algunos estudiosos califican las Comunidades como una revuelta antiseñorial; otros, como una de las primeras revoluciones burguesas de la Era Moderna,​ y otra postura defiende que se trató más bien de un movimiento antifiscal y particularista, de índole medievalizante.\nEl levantamiento se produjo en un momento de inestabilidad política de la Corona, que se arrastraba desde la muerte de Isabel la Católica en 1504. En octubre de 1517, el rey Carlos I llegó a Asturias proveniente de Flandes, donde se había autoproclamado rey de sus posesiones hispánicas en 1516. A las Cortes de Valladolid de 1518 llegó sin saber hablar apenas castellano y trayendo consigo un gran número de nobles y clérigos flamencos como corte, lo que produjo recelos entre las élites sociales castellanas, que sintieron que su advenimiento les acarrearía una pérdida de poder y estatus social. Este descontento fue transmitiéndose a las capas populares y, como primera protesta pública, aparecieron pasquines en las iglesias donde podía leerse:\n\n \n\nLas demandas fiscales, coincidentes con la salida del rey para la elección imperial en Alemania tras las Cortes de Santiago y La Coruña de 1520, produjeron una serie de revueltas urbanas que se coordinaron e institucionalizaron, encontrando un candidato alternativo a la corona en la «reina propietaria de Castilla», la madre de Carlos, Juana, cuya incapacidad o locura podía ser objeto de revisión, aunque la propia Juana, de hecho, no colaborara. Tras prácticamente un año de rebelión, se habían reorganizado los partidarios del emperador —particularmente la alta nobleza y los territorios periféricos castellanos, como los reinos andaluces y Granada— y las tropas imperiales asestaron un golpe casi definitivo a las comuneras en Villalar el 23 de abril de 1521. Allí mismo, al día siguiente, se decapitó a los líderes comuneros: Padilla, Bravo y Maldonado. El ejército comunero quedaba, así, descompuesto. Solamente Toledo mantuvo viva su rebeldía, hasta su rendición definitiva casi un año después, el 3 de febrero de 1522.\nLas Comunidades han sido siempre motivo de atento estudio histórico en España, y su significado a veces ha sido mitificado y utilizado políticamente, en particular a partir de la visita del Empecinado a Villalar el 23 de abril de 1821, con motivo del tercer centenario de la derrota, tal como era sentida por los liberales. Pintores como Antonio Gisbert retrataron a los comuneros en algunas de sus obras, y se firmaron documentos como el Pacto Federal Castellano, con claras referencias a las Comunidades. Los intelectuales conservadores o reaccionarios adoptaron interpretaciones mucho más favorables a la postura imperial y críticas hacia los comuneros. A partir de la segunda mitad del siglo xx, se revitalizaron los estudios históricos utilizando una metodología renovada.\nMás recientemente, en el plano político, desde principios de la transición a la democracia, se comenzó a conmemorar la derrota cada 23 de abril, alcanzando finalmente, con la conformación de Castilla y León como autonomía, el estatus de Día de la Comunidad. Asimismo, su utilización como elemento simbólico está muy presente en los movimientos castellanistas y regionalistas castellanoleoneses. Ha tenido una notable difusión popular mediante el poema épico Los comuneros, de Luis López Álvarez, musicalizado por el Nuevo Mester de Juglaría.​"
  },
  {
    "id": "guerras-italianas",
    "nombre": "Guerras Italianas contra Francia",
    "tipo": "conquista",
    "protagonistaIds": [
      "carlos-i",
      "marques-pescara"
    ],
    "fechaInicio": 1525.15,
    "fechaFin": 1529.65,
    "color": "#525252",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerras_Italianas",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          9.16,
          45.18
        ],
        [
          12.48,
          41.9
        ],
        [
          3.23,
          50.18
        ]
      ]
    },
    "resumen": "Las guerras italianas, también conocidas como las Grandes Guerras Italianas y las Guerras de Italia, fueron una serie de conflictos sucedidos entre 1494 y 1559 que implicaron, en distintas ocasiones, a los principales Estados de la Europa Occidental: Francia, Corona de Castilla, Corona de Aragón, Sacro Imperio Romano Germánico, Inglaterra, la República de Venecia, los Estados Pontificios y la mayoría de las ciudades-estado italianas, así como también el Imperio otomano.\nInicialmente se trató de una disputa dinástica acerca de los derechos hereditarios de Francia sobre el Ducado de Milán y el Reino de Sicilia Citerior, pero las guerras se convirtieron rápidamente en luchas territoriales y de poder entre los distintos participantes, que estuvieron marcadas por juegos de alianzas, contra-alianzas y frecuentes traiciones."
  },
  {
    "id": "resistencia-vilcabamba",
    "nombre": "Rebelión de Manco Inca y resistencia de Vilcabamba",
    "tipo": "conquista",
    "protagonistaIds": [
      "pizarro",
      "onez-loyola"
    ],
    "fechaInicio": 1536.4,
    "fechaFin": 1572.5,
    "color": "#a16207",
    "articuloWiki": "https://es.wikipedia.org/wiki/Vilcabamba_(Per%C3%BA)",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -72,
          -13.35
        ],
        [
          -73.03,
          -13.13
        ]
      ]
    },
    "resumen": "Los incas de Vilcabamba fueron los cuatro monarcas sucesores de Atahualpa y legítimos herederos de Huayna Cápac que se enfrentaron al desmantelamiento del Imperio inca por parte de los colonizadores españoles y sus aliados indígenas. Estos incas formaron la resistencia de la élite cusqueña y, entre 1537 a 1572, gobernaron sobre un reducido pero influyente estado incaico llamado muchas veces Imperio Neoinca de Vilcabamba. \nEstuvo ubicado al este de la ciudad del Cusco y, en su máximo esplendor, abarcó parte de los actuales departamentos peruanos de Cusco, Apurímac y Ayacucho. Este estado fue reconocido por el Imperio español a consecuencia del establecimiento de negociaciones, relaciones diplomáticas y tratados. \nLos Incas de Vilcabamba fueron:\n\nManco Inca Yupanqui\nSayri Túpac Inca\nTitu Cusi Yupanqui\nTúpac Amaru"
  },
  {
    "id": "lepanto",
    "nombre": "Batalla de Lepanto",
    "tipo": "conquista",
    "protagonistaIds": [
      "juan-austria"
    ],
    "fechaInicio": 1571.77,
    "fechaFin": 1571.77,
    "color": "#1e3a8a",
    "articuloWiki": "https://es.wikipedia.org/wiki/Batalla_de_Lepanto",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          16.86,
          41.13
        ],
        [
          21.13,
          38.31
        ]
      ]
    },
    "resumen": "La batalla de Lepanto (en italiano: Battaglia di Lepanto; en turco: İnebahtı deniz muharebesi, 'batalla naval de İnebahtı') fue un combate naval que tuvo lugar el 7 de octubre de 1571 en el golfo de Patras, cerca de la ciudad griega de Naupacto, en ese entonces conocida como Lepanto.​\nSe enfrentaron en ella la armada del Imperio otomano contra la coalición católica organizada por el papa Pío V, llamada Liga Santa, formada por el Imperio español, los Estados Pontificios, la República de Venecia, la Orden de Malta, la República de Génova y el Ducado de Saboya. Las fuerzas otomanas navegaban hacia el oeste desde su estación naval en Lepanto cuando se encontraron con la flota de la Liga Santa que navegaba hacia el este desde Mesina, en Sicilia. El Imperio español y la República veneciana eran las principales potencias de la coalición, ya que la liga estaba financiada en gran parte por Felipe II de España, y Venecia era el principal contribuyente de barcos.​\nLos católicos, liderados por Juan de Austria, resultaron victoriosos, y se salvaron tan solo treinta galeras otomanas. Se frenó así el expansionismo otomano en el Mediterráneo oriental durante algunas décadas y se provocó que los corsarios aliados de los otomanos abandonaran sus ataques y expansiones hacia el Mediterráneo occidental.​ Los turcos reconstruyeron rápidamente su flota, pero las enormes pérdidas de tripulaciones experimentadas en Lepanto ocasionaron que la marina otomana perdiera su iniciativa naval a partir de la década de 1580.​\nFue la mayor batalla naval de la historia occidental desde la antigüedad clásica, con más de 400 barcos de guerra. Marcó además el último gran enfrentamiento en el mundo occidental que se libró casi en su totalidad entre naves de remo,​ específicamente las galeras y galeazas, descendientes directas de los antiguos barcos de guerra trirreme. La batalla fue en esencia una «batalla de infantería sobre plataformas flotantes».​ En las décadas siguientes, el galeón desplazaría a la galera como principal navío de guerra de su época, demonstrado de nuevo por españoles e italianos en la batalla del cabo Celidonia, que fue considerada un epílogo para Lepanto.​\n\nLa victoria de la Liga Santa es de gran importancia en la historia de Europa y del Imperio Otomano, ya que marcó el punto de inflexión de la expansión militar otomana en el Mediterráneo, si bien las guerras otomanas en Europa continuarían durante otro siglo. Durante mucho tiempo se le ha comparado con la batalla de Salamina, tanto por los paralelismos tácticos como por su importancia crucial en la defensa de Europa contra la expansión imperial.​ También tuvo una gran importancia simbólica en un periodo en el que Europa estaba desgarrada por sus propias guerras de religión tras la Reforma Protestante. El Papa Pío V instituyó la fiesta de Nuestra Señora de la Victoria, y Felipe II de España utilizó la victoria para reforzar su posición como «Rey Católico» y defensor de la cristiandad contra la incursión musulmana.​ El historiador Paul K. Davis escribe que:Más que una victoria militar, Lepanto fue una victoria moral. Durante décadas, los turcos otomanos habían aterrorizado a Europa, y las victorias de Solimán el Magnífico provocaron una gran preocupación en la Europa cristiana. La derrota en Lepanto ejemplificó aún más el rápido deterioro del poderío otomano bajo Selim II, y los cristianos se regocijaron de este revés para los otomanos. La mística del poder otomano se vio empañada significativamente por esta batalla, y la Europa cristiana se animó.​En esta batalla participó Miguel de Cervantes, que resultó herido y perdió la movilidad de su mano izquierda, lo que le valió el sobrenombre de «manco de Lepanto». Este escritor, que estaba muy orgulloso de haber combatido allí, la calificó como «la más memorable y alta ocasión que vieron los pasados siglos, ni esperan ver los venideros».​​​ También introdujo la historia en el Quijote, a través de la narración del cautivo, como típica obra de literatura de frontera.​"
  },
  {
    "id": "filipinas-legazpi",
    "nombre": "Conquista y colonización de Filipinas",
    "tipo": "conquista",
    "protagonistaIds": [
      "legazpi",
      "urdaneta"
    ],
    "fechaInicio": 1565.3,
    "fechaFin": 1571.45,
    "color": "#be185d",
    "articuloWiki": "https://es.wikipedia.org/wiki/Miguel_L%C3%B3pez_de_Legazpi",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -104.68,
          19.2
        ],
        [
          -236.11,
          10.32
        ],
        [
          -239.02,
          14.6
        ]
      ]
    },
    "resumen": "Miguel López de Legazpi (Zumárraga, 1502-Manila, 20 de agosto de 1572), apodado «el Adelantado» y «el Viejo», fue un marino español que llegó al grado de almirante. Fue el primer gobernador de la Capitanía General de las Filipinas. \nMiguel López de Legazpi emprendió la conquista y colonización del archipiélago de las Filipinas en 1565 al fundar las ciudades de Cebú en 1565 y Manila en 1571.​"
  },
  {
    "id": "union-iberica",
    "nombre": "Unión Ibérica: anexión de Portugal",
    "tipo": "conquista",
    "protagonistaIds": [
      "duque-alba",
      "felipe-ii"
    ],
    "fechaInicio": 1580.65,
    "fechaFin": 1581.3,
    "color": "#166534",
    "resumen": "Tras la muerte sin heredero directo del rey Sebastián I en Alcazarquivir (1578) y el breve reinado del cardenal Enrique, Felipe II hizo valer sus derechos dinásticos al trono portugués como nieto de Manuel I. El duque de Alba invadió Portugal y derrotó al pretendiente rival, Antonio de Crato, en la batalla de Alcántara (agosto de 1580); las Cortes de Tomar reconocieron a Felipe II como rey de Portugal en 1581, uniendo las coronas de España y Portugal —y sus imperios coloniales— bajo un mismo monarca sin fusionar sus administraciones. La unión se mantuvo hasta la Restauración portuguesa de 1640.",
    "articuloWiki": "https://es.wikipedia.org/wiki/Uni%C3%B3n_Ib%C3%A9rica",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -9.13,
          38.72
        ],
        [
          -8.42,
          39.6
        ]
      ]
    }
  },
  {
    "id": "armada-invencible",
    "nombre": "La Armada Invencible",
    "tipo": "conquista",
    "protagonistaIds": [
      "medina-sidonia"
    ],
    "fechaInicio": 1588.45,
    "fechaFin": 1588.7,
    "color": "#1e293b",
    "articuloWiki": "https://es.wikipedia.org/wiki/Armada_Invencible",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -8.7,
          42.23
        ],
        [
          -1.4,
          50.6
        ],
        [
          2.1,
          51
        ],
        [
          -4.5,
          58.5
        ],
        [
          -9.9,
          51.6
        ]
      ]
    },
    "resumen": "La Grande y Felicísima Armada o Gran Armada de 1588 (apodada posteriormente Armada Invencible)​ fue una expedición militar marítima que, tras el triunfo en la batalla de Lepanto y la consolidación del poder español en Europa, fue planificada por el monarca español Felipe II para destronar a su contraparte Isabel I e invadir Inglaterra. El ataque que llevó a cabo ocurrió en el contexto de la guerra anglo-española de 1585-1604,​ y aunque fracasó, la guerra se prolongó dieciséis años más y terminó con el Tratado de Londres de 1604, favorable a España.​\nFelipe II decidió articular el ataque conjuntamente y de manera compleja desde los puertos del litoral atlántico español (de Andalucía a Guipúzcoa pasando por Portugal —desde donde zarpó el grueso de la flota—, Galicia, Asturias, Santander y Vizcaya; y desde las posesiones españolas en los actuales Países Bajos). Se armó una gran flota en puertos españoles que recibió el nombre de Grande y Felicísima Armada. Las naves enviadas desde la península ibérica participarían en el combate, mientras que las fuerzas españolas que salieran simultáneamente desde los Países Bajos, con los Tercios de Flandes, se encontrarían entre el canal de la Mancha y el mar del Norte con las que habían partido de la península ibérica, con el objetivo de desembarcar en Inglaterra.​ Esta invasión no pretendía la anexión de las islas británicas al Imperio español, sino la expulsión de Isabel I del trono inglés, y respondía a la ejecución de María Estuardo, a la política antiespañola de piratería y a la guerra de Flandes.​ Debía gobernarla el almirante de Castilla Álvaro de Bazán, marqués de Santa Cruz, pero falleció poco antes de la partida de la flota, y le sustituyó a toda prisa Alonso Pérez de Guzmán (VII duque de Medina Sidonia). Estaba compuesta por 137 barcos que zarparon de Lisboa, y de ellos, 122 barcos entraron en el canal de la Mancha.​\nLas turbulentas condiciones meteorológicas en el mar causaron el naufragio de muchas naves. Sin embargo, 87 barcos —unas dos terceras partes de la flota— regresaron a España​ sin haber cumplido su misión de derrotar a las fuerzas inglesas y de favorecer el ataque desde Flandes.​​ En 1589 Inglaterra llevó a cabo una expedición militar para destruir los barcos españoles que estaban siendo reparados en La Coruña, Santander y San Sebastián, así como para iniciar una insurrección antiespañola en Lisboa. Esta expedición fue conocida como la Invencible Inglesa, o Contraarmada, y también fracasó en sus objetivos.​"
  },
  {
    "id": "alpujarras",
    "nombre": "Rebelión de las Alpujarras",
    "tipo": "conquista",
    "protagonistaIds": [
      "juan-austria"
    ],
    "fechaInicio": 1568.98,
    "fechaFin": 1571,
    "color": "#92400e",
    "articuloWiki": "https://es.wikipedia.org/wiki/Rebeli%C3%B3n_de_las_Alpujarras",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -3.35,
          36.95
        ],
        [
          -3.14,
          36.92
        ]
      ]
    },
    "resumen": "La rebelión de las Alpujarras fue un conflicto acontecido en España entre 1568 y 1571 durante el reinado de Felipe II. La abundante población morisca del Reino de Granada se alzó en armas en protesta contra la Pragmática Sanción de 1567, que limitaba sus libertades culturales. Cuando el poder real consiguió vencer a los sublevados, se decidió deportar a los moriscos supervivientes a varios puntos del resto de la Corona de Castilla, cuya población morisca pasó de veinte mil a cien mil personas.​ Por la gravedad y la intensidad de sus combates también se le conoce como la Guerra de las Alpujarras. Felipe II quedó sobrecogido ante las masacres de sacerdotes llevadas a cabo por los rebeldes. Aparte de las muertes y de las expulsiones, miles fueron vendidos como esclavos dentro de España. En la Córdoba de 1573 había unos mil quinientos esclavos moriscos.​"
  },
  {
    "id": "guerra-flandes",
    "nombre": "Guerra de Flandes (Guerra de los Ochenta Años)",
    "tipo": "conquista",
    "protagonistaIds": [
      "duque-alba"
    ],
    "fechaInicio": 1568.42,
    "fechaFin": 1568.42,
    "color": "#334155",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerra_de_los_Ochenta_A%C3%B1os",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          4.4,
          50.85
        ],
        [
          4.35,
          50.85
        ]
      ]
    },
    "resumen": "La guerra de los Ochenta Años (también conocida como la revuelta neerlandesa, o en España como la guerra de Flandes) fue un conflicto que enfrentó a algunas de las Diecisiete Provincias de los Países Bajos contra su soberano Felipe II de España. La rebelión comenzó en el año 1568, en tiempos de Margarita de Parma, gobernadora de los Países Bajos españoles, y finalizó en el 1648 con el reconocimiento de la independencia de las siete Provincias Unidas, hoy conocidas como los Países Bajos. Como pretexto, las relaciones de Margarita con la nobleza neerlandesa protestante nunca fueron del todo fluidas. Este hecho, sumado a su inoperancia y a la distancia existente entre ambos países, hizo que se fueran alejando cada vez más de la política española en busca de sus intereses económicos y políticos con un aire de independencia que comenzaba a gestarse en el ambiente. Los países que hoy se conocen como Bélgica y Luxemburgo formaban parte de las Diecisiete Provincias, pero permanecieron leales a la Corona (los territorios bajo el dominio del Obispado de Lieja no formaban parte de las Diecisiete Provincias, sino directamente estaban en el Sacro Imperio Romano Germánico).\nEl resultado final de la guerra de los Ochenta Años fue la independencia oficial de los Países Bajos tras la Paz de Westfalia; pero no está tan claro que esta fuera la causa de la guerra. Esta fue el resultado final de las discrepancias entre la Monarquía Hispánica y la parte de los súbditos a los que tenían que gobernar en estas provincias. \nLas Provincias Unidas emergieron de la guerra como una potencia mundial gracias a su poderosa armada y flota mercante, y experimentaron un importante auge económico y cultural.\nPara la Corona española, la independencia de las Provincias Unidas representó una gran pérdida de prestigio. El mantenimiento económico de la guerra durante un periodo tan prolongado contribuyó en gran parte a provocar las sucesivas bancarrotas de la Corona española a lo largo de los siglos XVI y XVII, y al hundimiento de la economía de España."
  },
  {
    "id": "treinta-anos",
    "nombre": "Guerra de los Treinta Años y sitio de Breda",
    "tipo": "conquista",
    "protagonistaIds": [
      "spinola"
    ],
    "fechaInicio": 1618.4,
    "fechaFin": 1625.4,
    "color": "#7c2d12",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerra_de_los_Treinta_A%C3%B1os",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          14.42,
          50.09
        ],
        [
          4.78,
          51.59
        ]
      ]
    },
    "resumen": "La guerra de los Treinta Años fue una guerra librada en la Europa Central (principalmente el Sacro Imperio Romano Germánico) entre los años 1618 y 1648, en la que intervinieron la mayoría de las grandes potencias europeas de la época. Este conflicto marcó el futuro del conjunto de Europa en los siglos posteriores.​​ Conflictos relacionados incluyen la guerra de los Ochenta Años, la guerra de Sucesión de Mantua, la guerra franco-española, la guerra de Torstenson, la guerra luso-neerlandesa y la guerra de Restauración portuguesa.\nAunque inicialmente se trataba de un conflicto político-religioso entre Estados partidarios de la reforma y la contrarreforma dentro del propio Sacro Imperio Romano Germánico (SIRG), la intervención paulatina de las distintas potencias europeas convirtió gradualmente el conflicto en una guerra general por toda Europa, por razones no necesariamente relacionadas con la religión:​ búsqueda de una situación de equilibrio político, alcanzar la hegemonía en el escenario europeo, enfrentamiento con una potencia rival, etc.\nLa Paz de Augsburgo de 1555 había intentado resolver el conflicto religioso dentro del Sacro Imperio dividiéndolo en Estados católicos y luteranos, pero esta resolución fue desestabilizada posteriormente por la expansión del protestantismo más allá de esos límites. Combinado con desacuerdos sobre los límites de la autoridad imperial, la religión fue de esta manera un factor importante en el estallido de la guerra. Sin embargo, su alcance fue en gran medida consecuencia de fuerzas externas como la rivalidad Francia-Habsburgo y la Revuelta neerlandesa.\nLa guerra empezó en 1618, cuando el emperador católico Fernando II fue reemplazado como rey de Bohemia por el protestante Federico V del Palatinado. Si bien Federico fue derrocado prontamente, su participación significó que los combates se expandieron hacia el Palatinado. Su importancia estratégica provino de las Provincias Unidas de los Países Bajos y el Imperio español, para entonces envueltos en la guerra de los Ochenta Años, mientras que la adquisición de territorios imperiales le dio a gobernantes como Cristián IV de Dinamarca o Gustavo Adolfo de Suecia motivos renovados para intervenir. Estos factores, junto con los miedos protestantes de que su religión estaba amenazada, transformaron una disputa dinástica interna en un conflicto más amplio.\nLa guerra de los Treinta Años llegó a su final con la Paz de Westfalia y la Paz de los Pirineos, y supuso el punto culminante de la rivalidad entre Francia y los territorios de los Habsburgo (el Imperio español y el Sacro Imperio Romano Germánico) por la hegemonía en Europa, que conduciría en años posteriores a nuevas guerras entre ambas potencias.\nEl mayor impacto de esta guerra, en la que se usaron mercenarios de forma generalizada, fue la total devastación de lugares enteros que fueron esquilmados por los ejércitos necesitados de suministros. Los continuos episodios de hambrunas y enfermedades diezmaron la población civil de los Estados alemanes y, en menor medida, de los Países Bajos e Italia, además de llevar a la bancarrota a muchas de las potencias implicadas.​ Aunque la guerra duró treinta años, los conflictos que la generaron siguieron sin resolverse durante mucho tiempo.​\nDurante el curso de esta, la población del Sacro Imperio se vio reducida en un 30 %.​ En Brandeburgo se llegó al 50 %, y en otras regiones incluso a dos tercios. La población masculina en Alemania disminuyó a la mitad. En los Países Checos la población cayó en un tercio a causa de la guerra, el hambre, las enfermedades y la expulsión masiva de checos protestantes. Solo los ejércitos suecos destruyeron durante la guerra dos mil castillos, dieciocho mil villas y mil quinientos pueblos en Alemania.​​​​\nEn el territorio del Sacro Imperio Romano Germánico, que se convirtió en el principal teatro de operaciones, la larga serie de conflictos que forman la guerra pueden dividirse en cinco etapas diferenciadas:\n\nrevuelta bohemia e intervención imperial (1618-1620)\ncampañas militares en el Palatinado (1620-1624)\nintervención danesa (1625-1629)\nintervención sueca (1630-1635)\nintervención francesa (1635-1648)\nLos conflictos fuera de Alemania tomaron la forma de guerras locales: \n\nguerra de los Ochenta Años\nguerra de la Valtelina\nguerra anglo-española\nguerra genovesa-saboyana\nguerra polaco-sueca\nguerra anglo-francesa\nguerra de Sucesión de Mantua\nguerra ruso-polaca\nguerra polaco-otomana\nguerra franco-española\nguerra de Restauración portuguesa\nguerra de Torstenson\nSigfried Steinberg también marca la guerra de los Treinta Años como doce guerras interrumpidas por la tregua y la paz.​ La guerra de los Treinta Años no fue un único conflicto de 30 años de duración sin interrupciones. Durante este período se desencadenaron 13 guerras y se firmaron 10 tratados de paz.​ Los historiadores de la época del siglo XVII consideraron cada uno de estos conflictos por separado en lugar de una única guerra. El nombre «Guerra de los Treinta Años» se acuñó a finales del siglo XVII."
  },
  {
    "id": "guerra-sucesion",
    "nombre": "Guerra de Sucesión Española",
    "tipo": "conquista",
    "protagonistaIds": [
      "felipe-v"
    ],
    "fechaInicio": 1701.6,
    "fechaFin": 1714.75,
    "color": "#4c1d95",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerra_de_Sucesi%C3%B3n_Espa%C3%B1ola",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -3.7,
          40.42
        ],
        [
          2.17,
          41.38
        ]
      ]
    },
    "resumen": "La guerra de sucesión española​ fue una guerra internacional entre grandes potencias europeas que duró desde 1701 hasta la firma del Tratado de Utrecht en 1714. Tuvo como causa fundamental la muerte sin descendencia de Carlos II de España, último representante de la Casa de Habsburgo, en noviembre de 1700, lo que dio lugar a una lucha por el control del Imperio español entre los partidarios de las dinastías reclamantes de los Borbones y los Habsburgo. Su heredero oficial era Felipe de Anjou, nieto de Luis XIV de Francia, cuyos principales partidarios eran Francia y la mayor parte de España. Su rival, el archiduque Carlos de Austria, contaba con el apoyo de la Gran Alianza, cuyos principales miembros incluían a Austria, las Provincias Unidas y Gran Bretaña. La guerra dejó como principal consecuencia la instauración de la casa de Borbón en el trono de España.​ Entre los conflictos relacionados importantes se incluyen la Gran Guerra del Norte de 1700 a 1721 y la Guerra de la reina Ana en América del Norte.\nSi bien para 1701 España ya no era la potencia europea predominante, su imperio global todavía incluía los Países Bajos Españoles, grandes partes de Italia y América. La posibilidad de su adquisición por parte de Francia o Austria amenazaba el equilibrio de poder europeo, y la proclamación de Felipe como rey de España el 16 de noviembre de 1700 condujo a la guerra. Los franceses mantuvieron la ventaja en las primeras etapas, pero se vieron obligados a adoptar una postura defensiva después de 1706. Aunque los aliados continuaron avanzando en el norte de Francia, para 1709 Felipe había consolidado su posición en España, la causa aparente de la guerra.\nEn el interior del país, la guerra de sucesión evolucionó hasta convertirse en una guerra civil entre borbónicos, cuyo principal apoyo lo encontraron en Castilla, y austracistas, mayoritarios en Aragón, cuyos últimos rescoldos no se extinguieron hasta 1714, con la capitulación de Barcelona, y 1715, con la rendición de Mallorca ante las fuerzas de Felipe V. \nCuando el emperador José I murió en 1711, el archiduque Carlos sucedió a su hermano como emperador del Sacro Imperio Romano Germánico. En tanto una unión de España y Austria era tan mal recibida como una con Francia, el nuevo gobierno británico argumentó que no tenía sentido continuar. A esas alturas, sólo los subsidios británicos mantenían a sus aliados en la guerra, y su retirada condujo a la Paz de Utrecht en 1713, seguida de los tratados de Rastatt y Baden en 1714.\nFelipe fue confirmado como rey de España, pero renunció a su derecho y al de sus descendientes al trono francés. Para la Monarquía Hispánica, las principales consecuencias de la guerra fueron la pérdida de sus posesiones europeas, incluyendo gran parte de sus territorios italianos a favor de Saboya y Austria, junto con los Países Bajos Españoles, aunque permaneció prácticamente intacto fuera de Europa. Asimismo, la abolición de las leyes e instituciones de la Corona de Aragón, lo que puso fin al modelo «federal» de monarquía,​ o «monarquía compuesta»,​ de los austrias.​ Gran Bretaña recibió Gibraltar y Menorca y obtuvo importantes concesiones comerciales en las Américas españolas. Para los neerlandeses, a pesar de haber logrado su ansiado Tratado de la Barrera, la guerra se considera el comienzo de su declive como gran potencia europea. Aunque Luis XIV logró colocar a su nieto en el trono español, Francia quedó económicamente agotada."
  },
  {
    "id": "reformas-borbonicas",
    "nombre": "Reformas borbónicas y expulsión de los jesuitas",
    "tipo": "conquista",
    "protagonistaIds": [
      "carlos-iii"
    ],
    "fechaInicio": 1767.15,
    "fechaFin": 1767.15,
    "color": "#0e7490",
    "articuloWiki": "https://es.wikipedia.org/wiki/Expulsi%C3%B3n_de_los_jesuitas_de_Espa%C3%B1a",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -3.71,
          40.41
        ],
        [
          -3.7,
          40.42
        ]
      ]
    },
    "resumen": "La expulsión de los jesuitas de España de 1767 fue ordenada por el rey Carlos III, siguiendo los ejemplos recientes portugués de 1759 y francés de 1762, bajo la acusación de haber sido los instigadores de los motines populares del año anterior, conocidos con el nombre de Motín de Esquilache. Seis años después el monarca español consiguió que el papa Clemente XIV suprimiera la orden de los jesuitas. No obstante, sería restablecida por Pío VII el 7 de agosto de 1814 y el rey Fernando VII les permitió el regreso a España el 15 de mayo de 1815.​ Los jesuitas serían expulsados de España tres veces más: en 1820, durante el Trienio Liberal; en 1835, durante la Regencia de María Cristina de Borbón; y en 1932, bajo la Segunda República."
  },
  {
    "id": "expedicion-malaspina",
    "nombre": "Expedición Malaspina",
    "tipo": "exploracion",
    "protagonistaIds": [
      "malaspina"
    ],
    "fechaInicio": 1789.6,
    "fechaFin": 1794.7,
    "color": "#0d9488",
    "articuloWiki": "https://es.wikipedia.org/wiki/Expedici%C3%B3n_Malaspina",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -6.28,
          36.53
        ],
        [
          -70.65,
          -33.45
        ],
        [
          -77.03,
          -12.05
        ],
        [
          -122.42,
          37.77
        ],
        [
          -220.3,
          35.68
        ],
        [
          -208.79,
          -33.87
        ],
        [
          -366.28,
          36.53
        ]
      ]
    },
    "resumen": "El Viaje científico y político alrededor del mundo, más conocido como Expedición Malaspina o Malaspina-Bustamante, en honor a Alejandro Malaspina y José de Bustamante y Guerra, fue una expedición financiada por la Corona española en la época ilustrada de Carlos IV. La expedición se prolongó a lo largo del periodo entre 1789-1794. Recorrió las costas de toda América desde Buenos Aires a Alaska, las Filipinas y Marianas, Vavao, Nueva Zelanda y Australia. El 21 de septiembre de 1794, la expedición regresó a España habiendo generado un ingente patrimonio de conocimiento sobre historia natural, cartografía, etnografía, astronomía, hidrografía, medicina —todas ellas ramas de conocimiento de gran importancia geopolítica—, así como sobre los aspectos políticos, económicos y sociales de estos territorios. La mayor parte de los fondos se conservan en el Museo de América, Museo Naval de Madrid, el Real Observatorio de la Armada, el Real Jardín Botánico y el Museo Nacional de Ciencias Naturales. En la actualidad, siguen siendo objeto de estudio por parte de historiadores y biólogos.​​"
  },
  {
    "id": "guerra-siete-anos",
    "nombre": "Guerra de los Siete Años: pérdida y recuperación de La Habana",
    "tipo": "conquista",
    "protagonistaIds": [],
    "fechaInicio": 1762.5,
    "fechaFin": 1763.15,
    "color": "#7f1d1d",
    "articuloWiki": "https://es.wikipedia.org/wiki/Toma_de_La_Habana",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -82.4,
          23.1
        ],
        [
          -82.35,
          23.13
        ]
      ]
    },
    "resumen": "La toma de La Habana por los británicos fue un enfrentamiento militar librado en agosto de 1762, en el contexto de la guerra de los Siete Años. En ella, las fuerzas inglesas al mando del teniente general George Keppel derrotaron a los defensores liderados por el gobernador de Cuba, el mariscal de campo Juan de Prado y Portocarrero.\nEste hecho dejó al descubierto las debilidades de las defensas españolas en el mar Caribe y fue consecuencia de la entrada en conflicto del Reino de Gran Bretaña con la Corona española, aliada del Reino de Francia, otro tradicional enemigo de los británicos. \nEn un principio los británicos intentaron establecer una especie de colonia llamada «Cumberland» que sirviera de punto de apoyo a una invasión en la isla, por el sur, en lo que hoy es la provincia de Guantánamo, pero las condiciones fueron muy hostiles tanto por el terreno, como el constante hostigamiento de los lugareños, por lo que finalmente desistieron."
  },
  {
    "id": "guerra-independencia-espanola",
    "nombre": "Guerra de la Independencia Española",
    "tipo": "conquista",
    "protagonistaIds": [
      "palafox"
    ],
    "fechaInicio": 1808.33,
    "fechaFin": 1813.48,
    "color": "#facc15",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerra_de_la_Independencia_Espa%C3%B1ola",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -3.7,
          40.42
        ],
        [
          -0.88,
          41.65
        ],
        [
          -3.78,
          38.1
        ],
        [
          -2.67,
          42.85
        ]
      ]
    },
    "resumen": "La guerra de la Independencia española fue un conflicto bélico que se dio entre 1808 y 1814, dentro del contexto de las guerras napoleónicas, que enfrentó a las potencias aliadas de España, Reino Unido y Portugal contra Napoleón Bonaparte, cuya pretensión era, tras las abdicaciones de Bayona, la de instalar en el trono español a su hermano, José Bonaparte, y constituir España como Estado satélite del Primer Imperio francés.​\nLa guerra de la Independencia, también conocida en español como la francesada,​ guerra del Francés,​ o guerra de los Seis Años​ entre otros, se solapa y se contiene en lo que en otros países se denomina la guerra peninsular, iniciada en 1807 al declarar Francia y España la guerra a Portugal, tradicional aliado del Reino Unido. Estos conceptos se usan muchas veces de forma intercambiable (sobre todo cuando la guerra franco-española se considera una parte intrínseca de la intervención napoleónica en la península). La guerra también tuvo un importante componente de guerra civil a nivel nacional entre «afrancesados» y patriotas. El conflicto se desarrolló en plena crisis del Antiguo Régimen y sobre un complejo trasfondo de profundos cambios sociales y políticos impulsados por el surgimiento de la identidad nacional española y la influencia en el campo de los «patriotas» de algunos de los ideales nacidos de la Ilustración y la Revolución francesa, paradójicamente difundidos por la élite de los «afrancesados». Con motivo del bicentenario de la guerra de la Independencia, Frigdiano Álvaro Durántez Prados puso en tela de juicio dicho nombre, ya que no se trata de un conflicto de carácter independentista, según el carácter que se le ha ido dando a estas conflagraciones, y propuso la denominación «guerra de 1808» o «guerra peninsular».​​\nSegún el historiador Pedro Rújula, la guerra de la Independencia forma parte de un ciclo de guerras, iniciado con la guerra de la Convención (1793-1795) y que culmina con la primera guerra carlista (1833-1840), que estaría «caracterizado por el choque entre revolución y contrarrevolución».​ Para movilizar a la población contra la invasión francesa se retomó «el viejo discurso utilizado con éxito para luchar contra la República. “Religión, Rey y Patria”, volvía a ser la divisa».​ De esa tríada, el rey (cautivo en Valençay tras las abdicaciones de Bayona) se convirtió en la pieza clave. Así lo consignó la Junta de Gobierno en la declaración de guerra: «No dejaremos las armas de la mano hasta que el emperador Napoleón I restituya a nuestro rey y señor Fernando VII».​"
  },
  {
    "id": "independencia-mexico",
    "nombre": "Independencia de México",
    "tipo": "conquista",
    "protagonistaIds": [
      "iturbide",
      "virrey-apodaca"
    ],
    "fechaInicio": 1821.16,
    "fechaFin": 1821.65,
    "color": "#166534",
    "articuloWiki": "https://es.wikipedia.org/wiki/Independencia_de_M%C3%A9xico",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -99.53,
          18.35
        ],
        [
          -96.93,
          18.89
        ]
      ]
    },
    "resumen": "La independencia de México fue la consecuencia de un proceso político y social resuelto por las armas, que puso fin al dominio español mediante una guerra civil multifacética. Tuvo lugar en la mayor parte de los territorios de Nueva España,​ y dio como resultado el surgimiento del Primer Imperio mexicano. La pérdida de esta posesión tuvo una importancia decisiva para la economía del Imperio español, ya que los ingresos mexicanos representaban el ochenta por ciento del total de los caudales americanos al final del periodo colonial.​ La guerra por la independencia mexicana comenzó el día 16 de septiembre de 1810, y terminó con la entrada del Ejército Trigarante a la Ciudad de México, el día 27 de septiembre de 1821.\nEl movimiento de la independencia de México tiene como marco la Ilustración y las revoluciones liberales de la última parte del siglo XVIII. Por esa época la élite ilustrada comenzaba a reflexionar acerca de la ideas de soberanía popular y las relaciones entre la España peninsular y el resto del imperio. Los cambios en la estructura social y política derivados de las reformas borbónicas, a los que se sumó una profunda crisis económica en Nueva España, también generaron un malestar entre algunos segmentos de la población.\nLa ocupación francesa de la metrópoli en 1808 desencadenó en Nueva España una crisis política que desembocó en el movimiento armado. En ese año, el rey Carlos IV y Fernando VII abdicaron sucesivamente en favor de Napoleón Bonaparte, que dejó la corona de España a su hermano José Bonaparte. Como respuesta, el ayuntamiento de México —con apoyo del virrey José de Iturrigaray— reclamó la soberanía en ausencia del rey legítimo; la reacción condujo a un golpe de Estado contra el virrey y llevó a la cárcel a los cabecillas del movimiento.\nA pesar de la derrota de los criollos en Ciudad de México en 1808, en otras ciudades de Nueva España se reunieron pequeños grupos de conjurados que pretendieron seguir los pasos del ayuntamiento de México. Tal fue el caso de la conjura de Valladolid, descubierta en 1809 y cuyos participantes fueron puestos en prisión. En 1810, los conspiradores de Querétaro estuvieron a punto de correr la misma suerte pero, al verse descubiertos, optaron por tomar las armas el 16 de septiembre en compañía de los habitantes indígenas y campesinos del pueblo de Dolores (Guanajuato), convocados por el cura Miguel Hidalgo y Costilla.\nA partir de 1810, el movimiento independentista pasó por varias etapas según el estado militar de la insurgencia, pues los sucesivos líderes fueron derrotados, capturados y puestos en prisión o ejecutados por las fuerzas leales a España. Al principio se reivindicaba la soberanía popular pero se reconocía a Fernando VII como rey de España y sus colonias, luego los líderes asumieron después posturas más radicales, incluyendo cuestiones de orden social como la abolición de la esclavitud. José María Morelos y Pavón convocó a las provincias independentistas a conformar el Congreso de Anáhuac, que proclamó la independencia del trono de España, disuelta para siempre jamás, y se atribuyó toda la soberanía y un marco legal propio. Tras la derrota de Morelos, el movimiento se redujo a una guerra de guerrillas. Hacia 1820, solo quedaban algunos núcleos rebeldes, sobre todo en la sierra Madre del Sur y en Veracruz.\nEn 1820, otra revolución de carácter liberal en España a partir del pronunciamiento de Riego, para someter el gobierno despótico de Fernando VII y restablecer la Constitución de Cádiz. Al ver afectados sus intereses, los criollos decidieron apoyar una monarquía independiente en Nueva España, para lo cual buscaron el apoyo de la resistencia insurgente. Agustín de Iturbide dirigió el brazo militar de los conspiradores, y a principios de 1821 pudo encontrarse con Vicente Guerrero. Se proclamó el Plan de Iguala que convocó a la reunión de todas las facciones insurgentes y contó con el apoyo de la aristocracia y el clero de Nueva España. Una tímida y desacertada reacción del virrey Apodaca provocó la desbandada militar y determinó el cambio de postura de las élites novohispanas que hasta entonces habían respaldado el dominio español. Finalmente, la independencia de México se consumó y se declaró independiente el 27 de septiembre de 1821.\nDe esta forma, Nueva España se convirtió en el Imperio mexicano, una efímera monarquía independiente que, tras una revolución, dio paso a una república federal en 1823, entre conflictos internos y la separación de América Central.\nDespués de acabar con la resistencia de la fortaleza de San Juan de Ulúa, Veracruz, entre otros episodios de los intentos de reconquista, incluyendo la expedición de Isidro Barradas en 1829, España reconoció la independencia de México en 1836, tras el fallecimiento del monarca Fernando VII."
  },
  {
    "id": "campanas-bolivar",
    "nombre": "Campañas independentistas del norte de Suramérica",
    "tipo": "conquista",
    "protagonistaIds": [
      "pablo-morillo"
    ],
    "fechaInicio": 1819.65,
    "fechaFin": 1822.4,
    "color": "#065f46",
    "articuloWiki": "https://es.wikipedia.org/wiki/Sim%C3%B3n_Bol%C3%ADvar",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -73.36,
          5.46
        ],
        [
          -67.95,
          10.21
        ],
        [
          -78.55,
          -0.18
        ]
      ]
    },
    "resumen": "Simón José Antonio de la Santísima Trinidad Bolívar Ponte y Palacios Blanco (Caracas, 24 de julio de 1783​​-Santa Marta, 17 de diciembre de 1830), conocido como el Libertador, fue un militar, estratega y político venezolano,​ líder fundamental de la independencia de lo que son hoy Venezuela, Colombia, Ecuador y Panamá. Fue uno de los principales artífices de la independencia de Perú, y aprobó el reconocimiento de Bolivia como república.​ Es una figura destacada en los procesos de emancipación hispanoamericana frente al Imperio español, y por sus actos, se le otorgó el título de Libertador.\nPor sus acciones durante la Campaña Admirable, recibió el título de Libertador de Venezuela. Lideró las campañas que condujeron a la independencia de varias naciones americanas y fue fundador de la Gran Colombia. Tuvo un conflicto político con su amigo y ayudante de campo Antonio José de Sucre, quien, junto a Casimiro Olañeta, impulsó la creación de un nuevo Estado en las provincias del Alto Perú. Este fue denominado inicialmente «República Bolívar» y posteriormente «República de Bolivia», nombre con el que finalmente fue reconocido por Bolívar. Impulsó el Congreso Anfictiónico de Panamá con el objetivo de crear una confederación hispanoamericana desde México hasta la Argentina. Este proyecto, que incluía a Cuba, Puerto Rico y La Florida, así como el apoyo a la independencia de las Provincias Unidas del Río de la Plata, no pudo concretarse debido a conflictos internos en la Gran Colombia y al abandono de su proyecto de Federación de los Andes. \nEn sus últimos años, Bolívar se desilusionó cada vez más con las repúblicas sudamericanas y se distanció de ellas por su ideología centralista. Fue destituido sucesivamente de sus cargos hasta que renunció a la presidencia de Colombia y murió de tuberculosis en 1830.  Su actuación ha sido objeto de controversias, y sus críticos lo han señalado por autoritarismo o el Decreto de Guerra a Muerte.​ ​ No obstante, su legado es diverso y de gran alcance dentro y fuera de América Latina. Se le considera un héroe y un ícono nacional y cultural en toda Latinoamérica; las naciones de Bolivia y Venezuela (como República Bolivariana de Venezuela) llevan su nombre, y se le ha conmemorado en todo el mundo en forma de arte público, en nombres de calles y en la cultura popular."
  },
  {
    "id": "campanas-san-martin",
    "nombre": "Campañas independentistas del cono sur",
    "tipo": "conquista",
    "protagonistaIds": [
      "mariano-osorio",
      "jose-serna"
    ],
    "fechaInicio": 1817.13,
    "fechaFin": 1824.83,
    "color": "#155e75",
    "articuloWiki": "https://es.wikipedia.org/wiki/Jos%C3%A9_de_San_Mart%C3%ADn",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -70.65,
          -33.05
        ],
        [
          -70.75,
          -33.52
        ],
        [
          -74.13,
          -13.42
        ]
      ]
    },
    "resumen": "José Francisco de San Martín y Matorras​ (Yapeyú, virreinato del Río de la Plata, 25 de febrero de 1778-Boulogne-sur-Mer, Francia, 17 de agosto de 1850)​ fue un militar y político argentino, conocido como libertador de la Argentina y Chile, y uno de los principales artífices de la emancipación del Perú. Es una de las figuras más trascendentes de las guerras de independencia hispanoamericanas junto a Simón Bolívar.\nEn abril de 1784, cuando tenía seis años, llegó con su familia a la ciudad española de Cádiz –previa estadía en Buenos Aires– y se radicó luego en la ciudad de Málaga.​​\nComenzó sus estudios en el Real Seminario de Nobles de Madrid y en la Escuela de Temporalidades de Málaga en 1786. Ingresó al ejército español e hizo su carrera militar en el Regimiento de Murcia.​ Combatió en el norte de África, luego contra la dominación napoleónica de España y participó en las batallas de Bailén y La Albuera.​\nCon 34 años, en 1812, tras haber alcanzado el grado de teniente coronel, y luego de una escala en Londres, retornó a Buenos Aires, donde se puso al servicio de la independencia de las Provincias Unidas del Río de la Plata.​ Se le encomendó la creación del Regimiento de Granaderos a Caballo (que hoy lleva su nombre), que tuvo su bautismo de fuego en el combate de San Lorenzo.​ Se le encargó la jefatura del Ejército del Norte, en reemplazo del general Manuel Belgrano.​ Allí concibió su plan continental, comprendiendo que el triunfo patriota en la guerra de la independencia hispanoamericana solo se lograría con la eliminación de todos los núcleos realistas que eran los centros de poder leales a mantener el sistema colonial en América.​\nNombrado gobernador de Cuyo, con sede en la ciudad de Mendoza, puso en marcha su proyecto.​ Tras organizar al Ejército de los Andes, cruzó la cordillera de los Andes y lideró la emancipación de Chile, en las batallas de Chacabuco y Maipú. Luego, utilizando una flota organizada y financiada por Chile,​​ y luego de recibir instrucciones del Senado de Chile,​​ atacó al centro del poder español en Sudamérica, la ciudad de Lima, y declaró la independencia del Perú en 1821. Finalizó su carrera de las armas luego de producida la Entrevista de Guayaquil con Simón Bolívar, en 1822, donde le cedió su ejército y la meta de finalizar la liberación del Perú.​\nEn la Argentina se lo reconoce como el Padre de la Patria​ y el «Libertador»,​ y se lo valora como el principal héroe y prócer del panteón nacional. El ejército argentino lo reconoce como general de la nación sin asignarle ningún grado especial. En Perú también se lo recuerda como el «Fundador de la Libertad del Perú», el «Fundador de la República», el «Generalísimo de las Armas» y el «Protector» del país.​ El Ejército de Chile le reconoce el grado de capitán general.​"
  },
  {
    "id": "guerra-hispano-americana",
    "nombre": "Guerra hispano-estadounidense",
    "tipo": "conquista",
    "protagonistaIds": [
      "cervera"
    ],
    "fechaInicio": 1898.36,
    "fechaFin": 1898.9,
    "color": "#991b1b",
    "articuloWiki": "https://es.wikipedia.org/wiki/Guerra_hispano-estadounidense",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          120.9,
          14.5
        ],
        [
          284.18,
          19.98
        ],
        [
          357.65,
          48.86
        ]
      ]
    },
    "resumen": "La guerra hispano-estadounidense (en inglés: Spanish–American War) fue un conflicto bélico que enfrentó a España y Estados Unidos de abril a agosto de 1898, al intervenir Estados Unidos en la guerra de independencia cubana (1895-1898). La derrota de España y la consiguiente pérdida de sus últimas provincias americanas y asiáticas de ultramar dieron lugar en España a la expresión «Desastre del 98».​\nTras su derrota, España perdió Cuba (que quedó bajo tutela de Estados Unidos), Puerto Rico, Filipinas y Guam (que pasaron a ser dependencias territoriales de Estados Unidos). El resto de posesiones españolas del Pacífico fueron vendidas al Imperio alemán mediante el tratado hispano-alemán del 12 de febrero de 1899, por el cual España cedió al Imperio alemán sus últimos archipiélagos ―las Marianas (excepto Guam), las Palaos y las Carolinas― a cambio de 25 millones de pesetas (17 millones de marcos), ya que eran indefendibles por España.\nEl siglo XIX representó para el Imperio español un claro declive, mientras que los Estados Unidos pasaron de convertirse en un país recién fundado a ser una potencia regional media. En el caso español la decadencia, que ya venía de antes, se aceleró primero con la invasión napoleónica, que a su vez provocaría las Guerras de independencia hispanoamericanas, y posteriormente la inestabilidad política (pronunciamientos, revoluciones, guerras civiles...) desangraron al país social y económicamente. La difícil defensa española de sus colonias ultramarinas se puso de manifiesto durante la crisis de las Carolinas en 1885.​\nEn cambio, a lo largo de ese siglo Estados Unidos se expandió territorialmente por vía político-económica (compra de territorios como Luisiana, Alaska...) como político-militar (guerra contra México, genocidio de los pueblos indígenas y Guerras Indias...) además de recibir gran cantidad de inmigrantes. Ese proceso se interrumpió unos años por la guerra civil estadounidense y la Reconstrucción, pero la aparición de Estados Unidos como nueva potencia era incuestionable.​\nLas tensiones entre España y Estados Unidos existían desde siglos antes, incluyendo conflictos en territorios como Florida, Texas y otros que fueron posteriormente anexionados por Estados Unidos. Respecto a Cuba en los años 1870 con episodios (como el incidente del Virginius). España se encontraba, en el caso de una hipotética guerra contra Estados Unidos, en clara desventaja tanto en el aspecto militar (tamaño y capacidades de las flotas de guerra, además de que España llevaba años luchando contra guerrillas de independentistas), como en el demográfico (en 1890 Estados Unidos tenía más de 62 millones de habitantes por unos 18 millones en España), el geográfico (Estados Unidos luchaba cerca de su territorio en el caso de Cuba, mientras que España tenía que mantener una peor logística, por mayores distancias, con Cuba o Filipinas) y el económico-industrial (Estados Unidos tenía grandes zonas industrializadas, mientras que España era principalmente agrícola). Sin embargo, la agitación nacionalista española, en la que la prensa escrita tuvo una influencia clave, provocó que el gobierno español no pudiera ceder y vender Cuba a Estados Unidos como por ejemplo antes había vendido Florida a ese país en 1821. Si el gobierno español vendía Cuba sería visto como una traición por una parte de la sociedad española y probablemente habría habido una nueva revolución.​ Así que el gobierno prefirió librar una guerra perdida de antemano, antes que arriesgarse a una revolución, es decir optó por una «demolición controlada» para preservar el Régimen de la Restauración.​\nLa guerra fue relativamente breve. La explosión del acorazado Maine el 15 de febrero de 1898 fue el casus belli de esta guerra. Aún hoy se sigue discutiendo si fue un accidente, un ataque intencionado español o un ataque de «bandera falsa» de los propios estadounidenses. Entonces la opinión pública estadounidense, convenientemente agitada por sus medios de comunicación (como la prensa amarilla), clamaba venganza y la guerra se declaró oficialmente un mes después. Aunque para las tropas estadounidenses la lucha en territorio cubano no fue tan favorable como se esperaban (batalla de El Caney y batalla de las Colinas de San Juan), las dos incontestables victorias navales estadounidenses (la batalla naval de Cavite en Filipinas el 1 de mayo, y la batalla naval de Santiago de Cuba el 3 de julio) provocaron que el gobierno español pidiera en verano negociar la paz, que por intermediación de Francia, se plasmaría en el Tratado de París el 10 de diciembre. Las últimas colonias en el océano Pacífico se venderían al año siguiente al Imperio alemán por ser indefendibles.\nLa derrota y pérdida de los últimos vestigios del Imperio español (salvo posesiones africanas) fue un profundo shock para la psique nacional de España y provocó una profunda revaluación filosófica y artística de la sociedad española conocidos como el «Regeneracionismo» y la «Generación del 98».​​\nEstados Unidos ganó varias posesiones insulares en todo el mundo, lo que provocó un polémico debate sobre un país que oscilaba entre el aislacionismo y el expansionismo.​\nPoco tiempo después, en febrero de 1899, estalló la guerra filipino-estadounidense (1899-1902), en la que los filipinos se enfrentaron a las fuerzas estadounidenses que pasaron a tomar posesión del archipiélago."
  },
  {
    "id": "conquista-florida",
    "nombre": "Conquista y colonización de la Florida",
    "tipo": "conquista",
    "protagonistaIds": [
      "menendez-aviles"
    ],
    "fechaInicio": 1565.65,
    "fechaFin": 1565.65,
    "color": "#0284c7",
    "articuloWiki": "https://es.wikipedia.org/wiki/Pedro_Men%C3%A9ndez_de_Avil%C3%A9s",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -6.55,
          43.55
        ],
        [
          -81.31,
          29.9
        ]
      ]
    },
    "resumen": "En 1565, Pedro Menéndez de Avilés fundó San Agustín, el asentamiento europeo más antiguo de los actuales Estados Unidos, tras expulsar por la fuerza a la colonia protestante francesa de Fort Caroline, cercana. La colonización española de la Florida se prolongaría, con una interrupción británica entre 1763 y 1783, hasta su cesión a los Estados Unidos por el tratado Adams-Onís de 1819-1821."
  },
  {
    "id": "descubrimiento-amazonas",
    "nombre": "Descubrimiento del río Amazonas",
    "tipo": "exploracion",
    "protagonistaIds": [
      "francisco-orellana",
      "gonzalo-pizarro"
    ],
    "fechaInicio": 1541.9,
    "fechaFin": 1542.15,
    "color": "#16a34a",
    "articuloWiki": "https://es.wikipedia.org/wiki/Descubrimiento_del_r%C3%ADo_Amazonas",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -78.5,
          -1.25
        ],
        [
          -50,
          -1.5
        ]
      ]
    },
    "resumen": "La primera expedición española al río Amazonas se realizó el 12 de febrero de 1542 por parte del conquistador español Francisco de Orellana, segundo al mando de la expedición liderada por Gonzalo Pizarro, quien siendo teniente gobernador de Quito partió desde allí en la Navidad de 1540 por orden de su hermano, Francisco Pizarro, para encontrar al país denominado de la \"Canela\".  La navegación completa del cauce más caudaloso y largo​ de la Tierra no fue algo intencionado, sino que se debió a una concatenación de acontecimientos desencadenados por los deseos de localizar los grandes bosques de canela, El Dorado y tal vez un nuevo reino indígena.\nAunque la desembocadura del río ya se conocía, Gonzalo Pizarro organizó una gran expedición para descubrir y explotar la supuesta canela y localizar el oro, pero al llegar a la zona indicada no encontraron nada de lo esperado. Debido a lo desconocido del terreno y lo falible de los guías indígenas, Orellana trató de recoger información y alimentos adelantándose con unos 70 hombres. Las condiciones del afluente tomado no les permitieron volver y debieron seguir avanzando, afrontando todo tipo de penurias. Dichas penurias han arrojado sombras sobre la veracidad del relato escrito por el dominico Gaspar de Carvajal, miembro de la expedición, entre las que destaca el contacto con un pueblo integrado por mujeres al que rendían vasallaje otros habitantes del lugar.\nTras dos meses avanzando por un afluente, el río Napo, y siete por el propio Amazonas, los españoles llegaron a la desembocadura en el Atlántico. Francisco de Orellana fue juzgado y acusado de traición, pero resultó absuelto de todo cargo. Regresó nuevamente al río al frente de otra expedición, con el objetivo de recorrerlo en sentido inverso, pero falleció en el intento."
  },
  {
    "id": "cartagena-de-indias",
    "nombre": "Defensa de Cartagena de Indias",
    "tipo": "conquista",
    "protagonistaIds": [
      "blas-de-lezo"
    ],
    "fechaInicio": 1741.2,
    "fechaFin": 1741.38,
    "color": "#0c4a6e",
    "articuloWiki": "https://es.wikipedia.org/wiki/Sitio_de_Cartagena_de_Indias_(1741)",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -75.51,
          10.4
        ],
        [
          -75.48,
          10.42
        ]
      ]
    },
    "resumen": "El sitio o batalla de Cartagena de Indias, del 13 de marzo al 20 de mayo de 1741, fue el episodio decisivo que marcó el desenlace de la guerra del Asiento (1739-1748), uno de los conflictos armados entre España y Gran Bretaña ocurridos durante el siglo XVIII.\nComo resultado de tensiones comerciales desde hacía tiempo, la guerra se libró principalmente en el mar Caribe; los británicos intentaron capturar puertos españoles clave en la región, incluidos Portobelo y Chagres en la actual Panamá, La Habana (actual Cuba) y Cartagena de Indias (actual Colombia).\nDos ataques navales anteriores fracasaron en 1740, mientras que el tercer intento en marzo de 1741 fue un asalto naval y terrestre combinado. Los británicos se vieron obligados a retirarse, tras haber perdido, según estimaciones, entre nueve mil quinientos y once mil quinientos hombres, influido por la fiebre amarilla; algunas unidades sufrieron tasas de mortalidad del 80 al 90 %. Fue una de las mayores derrotas en la historia de la Royal Navy. La victoria demostró la capacidad de España para defender su posición y puso fin, en gran medida, a las operaciones militares en esta área. Ambos países pusieron su atención en la guerra de sucesión austriaca y las hostilidades terminaron con el Tratado de Aix-la-Chapelle de 1748."
  },
  {
    "id": "campana-galvez-golfo",
    "nombre": "Campaña de Bernardo de Gálvez en el golfo de México",
    "tipo": "conquista",
    "protagonistaIds": [
      "bernardo-galvez"
    ],
    "fechaInicio": 1779.7,
    "fechaFin": 1781.3,
    "color": "#c2410c",
    "articuloWiki": "https://es.wikipedia.org/wiki/Bernardo_de_G%C3%A1lvez",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -90.07,
          29.95
        ],
        [
          -88.04,
          30.68
        ],
        [
          -87.22,
          30.4
        ]
      ]
    },
    "resumen": "Bernardo Vicente de Gálvez Gallardo y Madrid, i conde de Gálvez  (Macharaviaya, provincia de Málaga, España; 23 de julio de 1746-Tacubaya; Ciudad de México, Virreinato de Nueva España, Imperio Español 30 de noviembre de 1786) fue un militar y político español, héroe de Pensacola, virrey de Nueva España y, a título póstumo, ciudadano honorífico estadounidense.​​\nSu fecha de nacimiento se celebra como el \"Día de Gálvez\" en varias ciudades de Estados Unidos. Sus importantes contribuciones a la independencia de las Trece Colonias de Norteamérica respecto a Reino Unido han sido reconocidas por varios grupos importantes, pero aún quedan fuera de la mayoría de los libros de texto.\nEn 1762, participó en la invasión de Portugal, campaña de la guerra de los Siete Años.​ Lo hizo en una unidad selecta franco-española, el Regimiento Royal-Cantabres, donde adquirió el dominio del francés, muy útil en su carrera posterior.​\nEn 1764 marchó a América, donde pasó los siguientes ocho años.​ Luchó contra los apaches en la frontera norte del Virreinato de Nueva España.​ De vuelta en Europa, tomó parte en el fallido desembarco de Argel de 1775.​\nSiendo gobernador de Luisiana, participó en la guerra de Independencia de los Estados Unidos con una serie de afortunadas incursiones contra los británicos (1779-1781) que le permitieron expulsarlos de la Florida Occidental.​ En su carrera contó con el importante apoyo de su poderoso tío, el ministro de Indias José de Gálvez y Gallardo.​ En 1784, se le concedió el título de Conde. \nPasó sus últimos años como virrey de Nueva España, donde tuvo que afrontar una terrible hambruna debida a las malas cosechas.​ Comenzó las obras del Palacio de Chapultepec (hoy Museo Nacional de Historia de México).​\nFue nombrado ciudadano honorífico de los Estados Unidos por el presidente Barack Obama por su contribución a la derrota inglesa y su participación activa en favor del Ejército Continental. Hoy su retrato figura con los del resto en la sala de fundadores del Congreso de los Estados Unidos."
  },
  {
    "id": "virreinato-nueva-espana",
    "nombre": "Establecimiento del Virreinato de Nueva España",
    "tipo": "conquista",
    "protagonistaIds": [
      "antonio-mendoza"
    ],
    "fechaInicio": 1535.85,
    "fechaFin": 1535.85,
    "color": "#7c2d12",
    "articuloWiki": "https://es.wikipedia.org/wiki/Antonio_de_Mendoza_y_Pacheco",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -99.14,
          19.42
        ],
        [
          -99.13,
          19.43
        ]
      ]
    },
    "resumen": "A finales de 1535, Antonio de Mendoza llegó a México como primer virrey, gobernador, capitán general y presidente de la Real Audiencia, dando forma institucional definitiva al Virreinato de Nueva España sobre los territorios conquistados por Cortés. Durante su gobierno se impuso la autoridad real sobre los conquistadores, se fundó la primera imprenta de América, se abrió la Casa de Moneda y se creó el Colegio de Santa Cruz de Tlatelolco."
  },
  {
    "id": "conquista-nueva-galicia",
    "nombre": "Conquista de Nueva Galicia",
    "tipo": "conquista",
    "protagonistaIds": [
      "nuno-guzman"
    ],
    "fechaInicio": 1529.5,
    "fechaFin": 1536,
    "color": "#b45309",
    "articuloWiki": "https://es.wikipedia.org/wiki/Nu%C3%B1o_Beltr%C3%A1n_de_Guzm%C3%A1n",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -99.13,
          19.43
        ],
        [
          -103.35,
          20.68
        ]
      ]
    },
    "resumen": "Entre 1529 y 1536, Nuño Beltrán de Guzmán encabezó una violenta campaña de conquista al occidente de México, fundando Guadalajara y otras ciudades y sometiendo brutalmente a los pueblos originarios de la región, lo que le valió ser procesado y encarcelado por la Corona. El territorio conquistado se organizó como el Reino de la Nueva Galicia, con audiencia propia desde 1548."
  },
  {
    "id": "expedicion-coronado",
    "nombre": "Expedición de Vázquez de Coronado a Cíbola",
    "tipo": "exploracion",
    "protagonistaIds": [
      "vazquez-coronado"
    ],
    "fechaInicio": 1540.3,
    "fechaFin": 1542.4,
    "color": "#a16207",
    "articuloWiki": "https://es.wikipedia.org/wiki/Francisco_V%C3%A1zquez_de_Coronado",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -103.35,
          20.68
        ],
        [
          -108.05,
          34.7
        ],
        [
          -111.6,
          36.1
        ],
        [
          -99.5,
          38.5
        ]
      ]
    },
    "resumen": "Francisco Vázquez de Coronado y Luján (Salamanca, 3 de diciembre de 1510-Ciudad de México, 22 de septiembre de 1554), más conocido como Coronado, fue un conquistador español. Llegó al Virreinato de Nueva España en 1535 acompañando al primer virrey, Antonio de Mendoza. Entre 1540 y 1542 fue capitán general de una expedición que recorrió partes de los actuales estados de Arizona, Nuevo México, Texas, Oklahoma y Kansas de los Estados Unidos de América."
  },
  {
    "id": "conquista-quito-popayan",
    "nombre": "Conquista de Quito y Popayán",
    "tipo": "conquista",
    "protagonistaIds": [
      "belalcazar"
    ],
    "fechaInicio": 1534.4,
    "fechaFin": 1538,
    "color": "#166534",
    "articuloWiki": "https://es.wikipedia.org/wiki/Sebasti%C3%A1n_de_Belalc%C3%A1zar",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -80.63,
          -5.2
        ],
        [
          -78.52,
          -0.22
        ],
        [
          -76.61,
          2.44
        ],
        [
          -76.53,
          3.44
        ]
      ]
    },
    "resumen": "Sebastián de Belalcázar,​ nacido como Sebastián Moyano y Cabrera (Belalcázar, Corona de Castilla, 1480-Cartagena de Indias, Gobernación de Cartagena, Imperio español, 1551), fue un militar, explorador, descubridor y conquistador español, que fue nombrado adelantado y gobernador de Popayán en 1540, para recién tomar posesión del cargo en 1542.​​\nLlegó al Nuevo Mundo en 1514 con Pedrarias Dávila, participando en la fundación de Panamá (1519) y obteniendo una encomienda en Natá. En 1524, se unió a Francisco Hernández de Córdoba en la conquista de Nicaragua, donde fue nombrado alcalde de León. En 1531, Belalcázar se dirigió a Perú para unirse a Francisco Pizarro en la conquista del Imperio Inca, participando en la captura de Atahualpa en Cajamarca. Posteriormente, se le encargó la defensa del norte del Tahuantinsuyo junto a Diego de Almagro y, adelantándose a Pedro de Alvarado, fundó Santiago de Quito (1534), la primera ciudad española en el actual Ecuador, cerca de Riobamba. Luego, continuó la conquista hacia el norte, fundando San Juan Bautista de Ambato (1534) y San Francisco de Quito (1534) sobre las ruinas de la antigua capital inca. También contribuyó a la fundación de San Gregorio de Portoviejo (1535) y Santiago de Guayaquil (1535), importantes puertos en la costa ecuatoriana. Su expedición continuó hacia el norte, fundando Santiago de Cali (1536) y Asunción de Popayán (1537) en el actual territorio colombiano, antes de dirigirse al Nuevo Reino de Granada en busca de El Dorado, donde se encontró con Gonzalo Jiménez de Quesada y Nicolás Federmann.​"
  },
  {
    "id": "batalla-terceira",
    "nombre": "Batalla de la Isla Terceira",
    "tipo": "conquista",
    "protagonistaIds": [
      "alvaro-bazan"
    ],
    "fechaInicio": 1583.6,
    "fechaFin": 1583.6,
    "color": "#1e293b",
    "articuloWiki": "https://es.wikipedia.org/wiki/%C3%81lvaro_de_Baz%C3%A1n_y_Guzm%C3%A1n",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -8.7,
          42.23
        ],
        [
          -27.21,
          38.66
        ]
      ]
    },
    "resumen": "Álvaro de Bazán y Guzmán (Granada, 12 de diciembre de 1526-Lisboa, 9 de febrero de 1588), I marqués de Santa Cruz, grande de España de segunda clase, I señor y marqués de la villa del Viso y I señor de la villa de Valdepeñas, fue un militar y almirante español del siglo XVI. Ofició como comendador mayor de León y de Villamayor, Alhambra y La Solana en la Orden de Santiago, miembro del Consejo de su Majestad Felipe II y capitán general del Mar Océano y de la gente de guerra del Reino de Portugal.\nAlmirante líder tanto en el Mediterráneo como en el Atlántico, se le considera el mayor comandante naval de la historia de España.​​ Fue pionero en el desarrollo de la guerra anfibia y el uso de los galeones ibéricos como buques de guerra, además de otras técnicas y embarcaciones diseñadas por él mismo, lo que haría posible muchos de los éxitos logísticos y militares de la Monarquía Hispánica.​​ Se le atribuye el logro de no haber perdido jamás una batalla bajo su mando, habiéndose enfrentado a franceses, ingleses y musulmanes en una carrera de casi cincuenta años.\nEra hijo del también almirante invicto Álvaro de Bazán el Viejo, desarrollador de galeones, del que heredó el señorío de Viso del Marqués, donde construyó el Palacio del Marqués de Santa Cruz, hoy Archivo General de la Marina. Su propio hijo y heredero Álvaro de Bazán y Benavides se destacó como otro prestigioso comandante naval en el Mediterráneo."
  },
  {
    "id": "expedicion-cabeza-vaca",
    "nombre": "Expedición de Narváez y travesía de Cabeza de Vaca",
    "tipo": "exploracion",
    "protagonistaIds": [
      "panfilo-narvaez",
      "cabeza-vaca"
    ],
    "fechaInicio": 1528.3,
    "fechaFin": 1536.5,
    "color": "#7e22ce",
    "articuloWiki": "https://es.wikipedia.org/wiki/%C3%81lvar_N%C3%BA%C3%B1ez_Cabeza_de_Vaca",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -82.7,
          27.5
        ],
        [
          -95.3,
          29.3
        ],
        [
          -106.5,
          29
        ],
        [
          -109.9,
          27.5
        ]
      ]
    },
    "resumen": "En 1527, Pánfilo de Narváez desembarcó en la Florida al frente de una expedición que terminó en naufragio y desastre casi total. Álvar Núñez Cabeza de Vaca, uno de los cuatro únicos supervivientes, pasó ocho años recorriendo a pie —cautivo, comerciante y curandero entre distintos pueblos indígenas— el actual sur de Estados Unidos y norte de México, hasta reencontrarse con tropas españolas en Sinaloa en 1536: la primera travesía europea documentada del interior de Norteamérica."
  },
  {
    "id": "rebeliones-1640",
    "nombre": "Rebeliones de 1640: Cataluña y Portugal",
    "tipo": "conquista",
    "protagonistaIds": [],
    "fechaInicio": 1640.5,
    "fechaFin": 1640.98,
    "color": "#57534e",
    "resumen": "En el mismo año de 1640, el hundimiento fiscal y militar de la Monarquía Hispánica bajo el conde-duque de Olivares —exigida por la guerra de los Treinta Años— provocó dos rebeliones simultáneas: la sublevación de Cataluña (guerra dels Segadors), contra la presencia de tropas reales, y la restauración de Portugal, que puso fin a sesenta años de Unión Ibérica con la proclamación de Juan IV como rey. Cataluña sería finalmente reincorporada a la Corona en 1652, pero Portugal consolidó su independencia de forma definitiva.",
    "articuloWiki": "https://es.wikipedia.org/wiki/Crisis_de_1640",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          2.15,
          41.39
        ],
        [
          -9.14,
          38.71
        ]
      ]
    }
  },
  {
    "id": "costeo-golfo-mexico",
    "nombre": "Primer costeo completo del golfo de México",
    "tipo": "exploracion",
    "protagonistaIds": [
      "alvarez-pineda"
    ],
    "fechaInicio": 1519.2,
    "fechaFin": 1519.6,
    "color": "#0891b2",
    "resumen": "Alonso Álvarez de Pineda navegó y cartografió de corrido toda la costa del golfo de México en 1519, desde la península de Florida hasta el río Pánuco, siendo el primer europeo en dejar constancia de que se trataba de un litoral continuo y no de un paso hacia Asia.",
    "articuloWiki": "https://es.wikipedia.org/wiki/Alonso_%C3%81lvarez_de_Pineda",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -81.3,
          25.1
        ],
        [
          -84.3,
          29.9
        ],
        [
          -88,
          30.3
        ],
        [
          -90.1,
          29.2
        ],
        [
          -93.8,
          29.7
        ],
        [
          -97.1,
          27.8
        ],
        [
          -97.4,
          22.2
        ]
      ]
    }
  },
  {
    "id": "costeo-california",
    "nombre": "Primer costeo europeo de California",
    "tipo": "exploracion",
    "protagonistaIds": [
      "cabrillo"
    ],
    "fechaInicio": 1542.75,
    "fechaFin": 1543,
    "color": "#7c3aed",
    "resumen": "Juan Rodríguez Cabrillo zarpó de Navidad (Nueva España) en 1542 y remontó por primera vez la costa del actual estado de California hasta más allá de la actual frontera con Oregón, muriendo durante la expedición; su piloto Bartolomé Ferrer continuó el viaje. Fue el primer reconocimiento europeo de ese litoral, siete décadas antes de la llegada inglesa a la costa del Pacífico norteamericano.",
    "articuloWiki": "https://es.wikipedia.org/wiki/Juan_Rodr%C3%ADguez_Cabrillo",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -104.68,
          19.2
        ],
        [
          -117.24,
          32.71
        ],
        [
          -119.7,
          34.4
        ],
        [
          -121.9,
          36.6
        ],
        [
          -124.1,
          40.8
        ],
        [
          -124.2,
          42.8
        ]
      ]
    }
  },
  {
    "id": "costeo-venezuela",
    "nombre": "Costeo de Venezuela y descubrimiento del lago de Maracaibo",
    "tipo": "exploracion",
    "protagonistaIds": [
      "alonso-ojeda",
      "vespucio",
      "juan-de-la-cosa"
    ],
    "fechaInicio": 1499.25,
    "fechaFin": 1499.6,
    "color": "#059669",
    "resumen": "La expedición de Alonso de Ojeda de 1499, con Américo Vespucio y Juan de la Cosa a bordo, exploró y cartografió por primera vez de forma sistemática toda la costa norte de Suramérica, desde el golfo de Paria hasta el cabo de la Vela, incluido el lago de Maracaibo.",
    "articuloWiki": "https://es.wikipedia.org/wiki/Alonso_de_Ojeda",
    "geometry": {
      "type": "LineString",
      "coordinates": [
        [
          -61.7,
          10.3
        ],
        [
          -66.9,
          10.6
        ],
        [
          -71.6,
          10.65
        ],
        [
          -72.3,
          11.75
        ]
      ]
    }
  },
  {
    id: 'expedicion-grijalva',
    nombre: 'Expedición de Juan de Grijalva',
    tipo: 'exploracion',
    protagonistaIds: ['juan-grijalva'],
    fechaInicio: 1518.25,
    fechaFin: 1518.5,
    color: '#0e7490',
    resumen:
      'En 1518, un año antes de la llegada de Cortés, Juan de Grijalva exploró la costa del golfo de México desde Cozumel hasta el río Pánuco, siendo el primer europeo en tener noticia directa del imperio mexica al comerciar con emisarios de Moctezuma II en las cercanías de la actual Veracruz. Su informe sobre las riquezas de la región impulsó al gobernador de Cuba, Diego Velázquez, a organizar la expedición de Hernán Cortés al año siguiente.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Juan_de_Grijalva',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-86.9, 20.4],
        [-91.5, 18.65],
        [-95.9, 18.15],
        [-97.4, 22.2],
      ],
    },
  },
  {
    id: 'conquista-yucatan',
    nombre: 'Conquista de Yucatán',
    tipo: 'conquista',
    protagonistaIds: ['francisco-montejo'],
    fechaInicio: 1527.0,
    fechaFin: 1546.0,
    color: '#b45309',
    resumen:
      'Francisco de Montejo inició en 1527 la conquista de la península de Yucatán, una campaña excepcionalmente larga y costosa frente a la resistencia maya, que se prolongó durante casi veinte años en tres expediciones sucesivas dirigidas por él mismo y por su hijo, Francisco de Montejo «el Mozo». La fundación de Mérida en 1542, sobre las ruinas de la ciudad maya de Tho, marcó el asentamiento definitivo del poder español en la región.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Conquista_de_Yucat%C3%A1n',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-88.3, 21.16],
        [-89.62, 20.97],
        [-90.53, 19.85],
      ],
    },
  },
  {
    id: 'conquista-michoacan',
    nombre: 'Conquista de Michoacán',
    tipo: 'conquista',
    protagonistaIds: ['cristobal-olid'],
    fechaInicio: 1522.35,
    fechaFin: 1522.6,
    color: '#78716c',
    resumen:
      'En 1522, Cristóbal de Olid encabezó la expedición que sometió sin apenas resistencia armada al reino purépecha (tarasco) de Michoacán, el segundo estado más poderoso de Mesoamérica tras el mexica, cuyo señor Tangáxuan II se sometió pacíficamente a la Corona española.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Conquista_de_Michoac%C3%A1n',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-99.13, 19.43],
        [-101.19, 19.7],
      ],
    },
  },
  {
    id: 'exploracion-orinoco',
    nombre: 'Exploración del río Orinoco',
    tipo: 'exploracion',
    protagonistaIds: ['diego-ordas', 'jeronimo-ortal'],
    fechaInicio: 1531.3,
    fechaFin: 1535.0,
    color: '#65a30d',
    resumen:
      'Diego de Ordás remontó el curso bajo y medio del Orinoco en 1531 buscando El Dorado, siendo el primer europeo en explorarlo sistemáticamente; a su muerte, Jerónimo Ortal continuó las incursiones hacia el interior de la actual Venezuela.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Diego_de_Ord%C3%A1s',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-61.3, 8.6],
        [-63.6, 8.15],
        [-66.9, 7.9],
      ],
    },
  },
  {
    id: 'gobernacion-hurtado-mendoza',
    nombre: 'Gobernación de García Hurtado de Mendoza en Chile',
    tipo: 'conquista',
    protagonistaIds: ['garcia-hurtado'],
    fechaInicio: 1557.4,
    fechaFin: 1561.0,
    color: '#166534',
    resumen:
      'García Hurtado de Mendoza gobernó Chile entre 1557 y 1561, refundando Concepción, sometiendo temporalmente a los principales caciques mapuches y extendiendo la exploración española hasta Chiloé y el estrecho de Magallanes.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Garc%C3%ADa_Hurtado_de_Mendoza',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-70.65, -33.45],
        [-72.6, -36.68],
        [-73.6, -42.5],
      ],
    },
  },
  {
    id: 'consolidacion-asuncion',
    nombre: 'Consolidación de Asunción bajo Domingo de Irala',
    tipo: 'conquista',
    protagonistaIds: ['domingo-irala'],
    fechaInicio: 1537.0,
    fechaFin: 1556.0,
    color: '#a21caf',
    resumen:
      'Tras el fracaso de la primera Buenos Aires, Domingo Martínez de Irala consolidó Asunción como capital de facto de la gobernación del Río de la Plata durante casi dos décadas, y la convirtió en la base de la colonización del Paraguay.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Domingo_Mart%C3%ADnez_de_Irala',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-58.37, -34.61],
        [-57.64, -25.3],
      ],
    },
  },
  {
    id: 'conquista-jamaica',
    nombre: 'Conquista de Jamaica',
    tipo: 'conquista',
    protagonistaIds: ['juan-esquivel'],
    fechaInicio: 1509.5,
    fechaFin: 1510.0,
    color: '#0f766e',
    resumen:
      'En 1509, Juan de Esquivel encabezó la colonización de Jamaica por encargo de Diego Colón y fue nombrado su primer gobernador, fundando Sevilla la Nueva, primera villa española de la isla.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Juan_de_Esquivel',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-76.8, 17.95],
        [-77.29, 18.47],
      ],
    },
  },
  {
    id: 'fundacion-santa-marta',
    nombre: 'Fundación de Santa Marta',
    tipo: 'exploracion',
    protagonistaIds: ['rodrigo-bastidas'],
    fechaInicio: 1525.55,
    fechaFin: 1525.55,
    color: '#0369a1',
    resumen:
      'En 1525, Rodrigo de Bastidas —que ya había explorado y cartografiado esta costa desde 1500-1502— fundó Santa Marta, la ciudad más antigua aún en pie de Colombia y una de las primeras de Suramérica continental.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Rodrigo_de_Bastidas',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-74.0, 10.65],
        [-74.2, 11.24],
      ],
    },
  },
  {
    id: 'expedicion-villalobos',
    nombre: 'Expedición de Villalobos a Filipinas',
    tipo: 'exploracion',
    protagonistaIds: ['ruy-lopez-villalobos', 'inigo-ortiz-retes'],
    fechaInicio: 1542.9,
    fechaFin: 1546.25,
    color: '#9d174d',
    resumen:
      'Villalobos exploró en 1542-1543 el archipiélago que bautizó «Felipinas» en honor al futuro Felipe II, origen del nombre Filipinas; durante el viaje, su capitán Íñigo Ortiz de Retes avistó y nombró Nueva Guinea. El intento de colonización fracasó, pero abrió el camino que Legazpi culminaría dos décadas después.',
    articuloWiki: 'https://es.wikipedia.org/wiki/Ruy_L%C3%B3pez_de_Villalobos',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-104.68, 19.2],
        [-236.11, 10.32],
        [-235.35, 8.95],
        [-219.3, -4.7],
      ],
    },
  },
  {
    id: 'fortificacion-estrecho-magallanes',
    nombre: 'Fortificación del estrecho de Magallanes',
    tipo: 'conquista',
    protagonistaIds: ['sarmiento-gamboa'],
    fechaInicio: 1584.05,
    fechaFin: 1584.4,
    color: '#312e81',
    resumen:
      'En 1584, Pedro Sarmiento de Gamboa fundó Nombre de Jesús y Rey Felipe para fortificar el estrecho de Magallanes contra los corsarios ingleses; el hambre y el clima extremo aniquilaron a sus pobladores, y el lugar pasó a la historia como «Puerto del Hambre».',
    articuloWiki: 'https://es.wikipedia.org/wiki/Pedro_Sarmiento_de_Gamboa',
    geometry: {
      type: 'LineString',
      coordinates: [
        [-6.3, 36.53],
        [-70.85, -52.65],
      ],
    },
  },
]
