import type { Evento } from '../types/historia'

export const eventos: Evento[] = [
  {
    id: 'llegada-guanahani',
    titulo: 'Llegada a Guanahaní (San Salvador)',
    tipo: 'descubrimiento',
    fecha: 1492.83,
    coordenadas: [-75.1, 24.3],
    resumen:
      'El 12 de octubre de 1492, la expedición de Cristóbal Colón avista tierra en las Bahamas, en lo que se considera el primer contacto europeo documentado con América.',
    articuloWiki:
      'https://es.wikipedia.org/wiki/Descubrimiento_de_Am%C3%A9rica',
    personajeIds: ['colon'],
    rutaId: 'primer-viaje-colon',
  },
  {
    id: 'fundacion-veracruz',
    titulo: 'Veracruz',
    tipo: 'fundacion',
    fecha: 1519.15,
    coordenadas: [-96.13, 19.2],
    resumen:
      'Heroica Veracruz es una ciudad mexicana, cabecera del municipio de Veracruz, situada en el Estado de Veracruz. Forma parte de la  zona metropolitana de Veracruz.​​ Tiene el segundo puerto marítimo comercial más importante de México. En 2020 contaba con una población de 405 953 habitantes.​\nEstá ubicada a 90 km de distancia de la capital del estado, Xalapa y a 400 km de distancia de la Ciudad de México. Su clima es tropical cálido, con una temperatura media anual de 25.3 °C y con una precipitación media anual de 1500 mm.\nFue fundada por el explorador Hernán Cortés el 22 de abril de 1519 con el nombre de Villa Rica de la Vera Cruz, siendo el primer ayuntamiento de la América continental. Durante tres siglos fue el puerto monopolístico de la Carrera de Indias. Además, ha recibido el nombramiento de Cuatro veces heroica por decreto presidencial, a raíz de haber enfrentado cuatro distintas invasiones extranjeras.​',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/VeracruzCityCollage.jpg/960px-VeracruzCityCollage.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Veracruz',
    personajeIds: ['cortes'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'alianza-tlaxcala',
    titulo: 'República de Tlaxcallan',
    tipo: 'tratado',
    fecha: 1519.65,
    coordenadas: [-98.24, 19.32],
    resumen:
      'La República de Tlaxcallan —también denominada Confederación de Tlaxcala o Tlaxkallan Altepeyotl— fue una unión político-militar de cuatro altépetl nahuas (Tepeticpac, Tizatlán, Ocotelulco y Quiahuiztlán) que mantuvo su independencia frente al Imperio mexica durante el Período Posclásico Tardío (1200-1521 d. C.) y desempeñó un papel decisivo en la Conquista de México al aliarse con Hernán Cortés en 1519.​ Se trata de uno de los pocos ejemplos mesoamericanos documentados de gobierno colegiado sin monarquía hereditaria centralizada y ha sido calificada como «república indígena» por la investigación arqueológica y etnohistórica reciente.​\nLa singularidad de Tlaxcallan radica en su estructura política descentralizada, basada en el consenso entre múltiples casas señoriales, su resistencia exitosa contra el expansionismo mexica durante casi un siglo, y su posterior alianza estratégica con los conquistadores españoles que le permitió conservar privilegios únicos durante el período colonial temprano.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Tlaxcala_Peoples.png/960px-Tlaxcala_Peoples.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Rep%C3%BAblica_de_Tlaxcallan',
    personajeIds: ['cortes', 'malinche'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'matanza-cholula',
    titulo: 'Matanza de Cholula',
    tipo: 'batalla',
    fecha: 1519.75,
    coordenadas: [-98.3, 19.06],
    resumen:
      'La matanza de Cholula fue un ataque realizado por las fuerzas militares de Hernán Cortés en su trayecto a la ciudad de México-Tenochtitlan en 1519. Francisco López de Gómara​ indica que la matanza de Cholula inició después de que Cortés apresara y asesinara a líderes cholultecas, desatando con este acto la matanza de 6000 personas en menos de dos horas.[cita requerida] Acorde con sus cartas de relación,​ Cortés afirma que tomó dicha decisión como una acción preventiva ante una posible emboscada por parte de 20 000 soldados mexicas.​',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/3/3d/%27La_Conquista_de_Cholula%27_ca._1670-1730._Workshop_of_Los_Gonzalez_%281670-1730%29_-_Museo_Franz_Mayer_-_Mexico_2024_%282%29.jpg/960px-%27La_Conquista_de_Cholula%27_ca._1670-1730._Workshop_of_Los_Gonzalez_%281670-1730%29_-_Museo_Franz_Mayer_-_Mexico_2024_%282%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Matanza_de_Cholula',
    personajeIds: ['cortes', 'malinche'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'entrada-tenochtitlan',
    titulo: 'Conquista de México',
    tipo: 'descubrimiento',
    fecha: 1519.85,
    coordenadas: [-99.13, 19.43],
    resumen:
      'La conquista de México, conquista de México-Tenochtitlan o conquista del Imperio mexica (1519–1521)​​​ fue una serie de campañas militares dirigidas por Hernán Cortés en alianza con los pueblos originarios del valle de México, con el objetivo de sitiar, derrocar y ocupar la capital del Imperio Mexica acontecidos entre los años 1519 y 1521; que concluyeron con el asalto final y la toma de la ciudad de México-Tenochtitlan, el 13 de agosto de 1521. Este hecho marcó el inicio de un largo proceso de colonización, evangelización y mestizaje de Mesoamérica y el resto de lo que hoy es México y el sur de Estados Unidos por parte de los conquistadores españoles.​ No sería hasta tres siglos más tarde que luego de la independencia de México se entenderá a «México» como la totalidad del territorio heredado del anterior Virreinato de la Nueva España.\nPosteriormente se desarrollaron otras expediciones y campañas militares, tanto de Hernán Cortés como de sus capitanes, entre 1521 y 1525 en la zona central, norte y sur del territorio de los actuales México y Centroamérica, las cuales fueron sentando los primeros límites del Virreinato de Nueva España. Desde esta base inicial, el proceso continuó con la incorporación de otros territorios por diversos conquistadores y adelantados españoles: California, la península de Yucatán, la zona occidental conocida como Nueva Galicia, la zona noreste conocida como Nuevo Reino de León, la zona norte​ donde se encontraba la Nueva Vizcaya y otros territorios de América del Norte y Central. A partir de estos acontecimientos, que modificaron drásticamente la geopolítica mundial en los albores del siglo XVI, discurrirían aproximadamente tres siglos de dominación territorial española​ y resistencia indígena.\nLas fuentes principales de información de las campañas de Cortés y sus capitanes son las crónicas de Indias redactadas en el siglo XVI, de las que destacan la Historia verdadera de la conquista de la Nueva España de Bernal Díaz del Castillo, quien participó en las campañas bélicas, las cartas de relación​ de Hernán Cortés al rey Carlos I de España, y la obra de Francisco López de Gómara, conocida como Historia general de las Indias, quien nunca pisó el continente americano pero pasó los últimos momentos de la vida de Hernán Cortés escuchando sus memorias.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Conquista-de-M%C3%A9xico-por-Cort%C3%A9s-Tenochtitlan-Painting.png/960px-Conquista-de-M%C3%A9xico-por-Cort%C3%A9s-Tenochtitlan-Painting.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Conquista_de_M%C3%A9xico',
    personajeIds: ['cortes', 'malinche'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'matanza-toxcatl',
    titulo: 'Matanza de Tóxcatl',
    tipo: 'batalla',
    fecha: 1520.3,
    coordenadas: [-99.13, 19.435],
    resumen:
      'La matanza de Tóxcatl, también llamada la Matanza del Templo Mayor, fue un episodio de la conquista de México en que los españoles dieron muerte a cuatrocientos nobles mexicas en el momento en que estos se encontraban haciendo una ceremonia religiosa.​​ El responsable de la masacre fue Pedro de Alvarado —apodado Tonatiuh, El Sol por los mexicas—,​ ya que había pensado que se trataba de una trampa de parte de los mexicas. Estaba a cargo de las tropas españolas ya que Hernán Cortés se encontraba en las costas del Golfo de México combatiendo a Pánfilo Narváez que zarpó desde Cuba con la misión de capturarlo.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Matanza_templo2.jpg/960px-Matanza_templo2.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Matanza_de_T%C3%B3xcatl',
    personajeIds: ['alvarado'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'noche-triste',
    titulo: 'Noche Triste',
    tipo: 'batalla',
    fecha: 1520.5,
    coordenadas: [-99.15, 19.44],
    resumen:
      'La Noche Triste (llamada «Noche Victoriosa» por algunos sectores en México)​​​​ es el nombre de la derrota sufrida por las tropas españolas de Hernán Cortés​​​​ a manos del ejército mexica la noche del 30 de junio al 1 de julio de 1520, último día del mes Tecuilhuitontli,​ en las afueras de Tenochtitlan, en Tacuba bajo un frondoso árbol de ahuehuete en lo que hoy es la Ciudad de México.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/The_Sad_Night_%28Noche_Triste%29_%28Conquest_of_Mexico%29_Painting.jpg/960px-The_Sad_Night_%28Noche_Triste%29_%28Conquest_of_Mexico%29_Painting.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Noche_Triste',
    personajeIds: ['cortes'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'batalla-otumba',
    titulo: 'Batalla de Otumba',
    tipo: 'batalla',
    fecha: 1520.55,
    coordenadas: [-98.76, 19.7],
    resumen:
      'La batalla de Otumba fue un enfrentamiento entre las fuerzas mexicas y aliadas encabezadas por el cihuacóatl Matlatzincátzin y las de Hernán Cortés conformadas por los conquistadores españoles y sus aliados tlaxcaltecas, que se llevó a cabo el 7 de julio​ de 1520 en Temalcatitlán​ —una llanura cercana a Otumba— durante el desarrollo de la conquista de México. El resultado de la batalla fue una victoria para los españoles y sus aliados tlaxcaltecas, la cual permitió a Cortés volver a reorganizar su ejército, el cual había sufrido bajas unos días antes en el episodio conocido como la Noche Triste. Un año más tarde, mediante el refuerzo de su ejército con nuevos hombres y pertrechos, y la creación de alianzas con los pueblos indígenas que habían sido sojuzgados por los mexicas, Cortés logró sitiar y conquistar México-Tenochtitlan.\nLa victoria del ejército de Hernán Cortés (españoles y aliados tlaxcaltecas), en extrema inferioridad numérica, cambió el rumbo de la conquista de Mesoamérica y ha sido reconocida como una de las más grandes hazañas bélicas en la historia del Imperio español.​',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/9/9e/De_la_conquista_de_M%C3%A9jico_%28Otumba%29_-_Manuel_Ram%C3%ADrez_Ib%C3%A1%C3%B1ez.jpg/960px-De_la_conquista_de_M%C3%A9jico_%28Otumba%29_-_Manuel_Ram%C3%ADrez_Ib%C3%A1%C3%B1ez.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Batalla_de_Otumba',
    personajeIds: ['cortes'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'caida-tenochtitlan',
    titulo: 'Sitio de Tenochtitlan',
    tipo: 'batalla',
    fecha: 1521.65,
    coordenadas: [-99.13, 19.43],
    resumen:
      'El sitio de Tenochtitlan (1521), fue un evento mayor en la conquista española de América, marcando el final de la era mexica. El Sitio duró del 26 de mayo al 13 de agosto de 1521.​\nMuchas batallas se dieron entre los mexicas y los conquistadores durante el Asedio.\nEl sitio de Tenochtitlan fue la fase final y definitiva de la conquista del Imperio mexica. La victoria española marcó la caída de su hegemonía en Mesoamérica y el inicio del Virreinato de la Nueva España. Igualmente representa el final de la primera etapa de la unión del mundo europeo y el mesoamericano, siendo parte de la colonización española de América.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/20/Conquista-de-M%C3%A9xico-por-Cort%C3%A9s-Tenochtitlan-Painting.png/960px-Conquista-de-M%C3%A9xico-por-Cort%C3%A9s-Tenochtitlan-Painting.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Sitio_de_Tenochtitlan',
    personajeIds: ['cortes', 'gonzalo-sandoval', 'bernal-diaz'],
    rutaId: 'conquista-mexico',
  },
  {
    id: 'captura-atahualpa',
    titulo: 'Captura de Atahualpa',
    tipo: 'batalla',
    fecha: 1532.87,
    coordenadas: [-78.52, -7.16],
    resumen:
      'La captura de Atahualpa,​ batalla de Cajamarca,​​ matanza de Cajamarca,​​ o masacre de Cajamarca​​ fue un ataque sorpresa realizado por el contingente de Francisco Pizarro contra la comitiva de Atahualpa. Ocurrió en la tarde del 16 de noviembre de 1532 en la Plaza de Armas de Cajamarca, donde los españoles lograron apresar al inca. La captura de Atahualpa marcó el inicio de la conquista del Tahuantinsuyo.​\nLa emboscada tuvo una duración breve de 30 minutos. La acción derivó en una avalancha humana que produjo una estampida de enorme mortandad entre los presentes dentro del recinto.​',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/e/ef/La_Captura_de_Atahualpa_-_Juan_Lepiani_1920s.png/960px-La_Captura_de_Atahualpa_-_Juan_Lepiani_1920s.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Captura_de_Atahualpa',
    personajeIds: ['pizarro', 'soto', 'felipillo', 'pedro-candia'],
    rutaId: 'conquista-peru',
  },
  {
    id: 'conquista-cuzco',
    titulo: 'Conquista del Imperio incaico',
    tipo: 'descubrimiento',
    fecha: 1533.9,
    coordenadas: [-71.97, -13.52],
    resumen:
      'La conquista del Imperio incaico, también conocida como conquista del Perú​​​ o del Tahuantinsuyo,​fue el proceso mediante el cual la Monarquía Hispánica incorporó los territorios del Imperio incaico a sus dominios en América durante el siglo XVI. Formó parte de la expansión española en el continente y condujo al establecimiento de las gobernaciones de Nueva Castilla y Nueva Toledo, antecedentes del posterior Virreinato del Perú.\nLas primeras expediciones españolas hacia los Andes partieron desde Panamá durante la década de 1520. Inicialmente fueron encabezadas por Pascual de Andagoya, y después por Francisco Pizarro, Diego de Almagro y Hernando de Luque. La conquista se desarrolló en un contexto de crisis interna del Tahuantinsuyo, marcada por el conflicto entre Huáscar y Atahualpa. Después de la captura de Atahualpa en Cajamarca el 16 de noviembre de 1532 y la ejecución del Sapa Inca al año siguiente, los conquistadores marcharon en dirección al Cuzco con el apoyo de diversos pueblos indígenas, así como sectores de la nobleza cusqueña, logrando ocupar la ciudad el 15 de noviembre de 1533. La derrota definitiva de los partidarios de Atahualpa no se completó hasta finales de 1534 y comienzos de 1535, con la muerte de Quizquiz a manos de su propia soldadesca, la captura y ejecución de Rumiñahui, y la ocupación de las regiones septentrionales del antiguo imperio.\nAunque los españoles gobernaron inicialmente en alianza con una facción de la nobleza incaica, pronto surgieron tensiones entre conquistadores e incas, así como entre los propios españoles. Estas culminaron en la rebelión de Manco Inca en 1536. Tras el fracaso de los sitios de Cuzco y Lima, el soberano inca se retiró primero a Vitcos y posteriormente a Vilcabamba, desde donde dirigió la resistencia contra el dominio español y promovió levantamientos en diferentes regiones andinas. Paralelamente, el control de los europeos se vio debilitado por una serie de guerras civiles entre los propios conquistadores.\nLa autoridad de la Corona se consolidó tras la derrota de los rebeldes españoles a mediados del siglo XVI. No obstante, la resistencia de Vilcabamba perduró hasta 1572, cuando las fuerzas del virrey Francisco de Toledo ocuparon el territorio y ejecutaron a Túpac Amaru I, poniendo fin al último Estado inca independiente. Este acontecimiento se considera el cierre definitivo de la conquista del Tahuantinsuyo.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/7/71/Montaje_2_conquista_del_Peru.png/960px-Montaje_2_conquista_del_Peru.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Conquista_del_Imperio_incaico',
    personajeIds: ['pizarro', 'almagro'],
    rutaId: 'conquista-peru',
  },
  {
    id: 'fundacion-lima',
    titulo: 'Lima',
    tipo: 'fundacion',
    fecha: 1535.05,
    coordenadas: [-77.03, -12.05],
    resumen:
      'Lima, llamada originalmente Ciudad de los Reyes, es la capital y ciudad más poblada del Perú. Está situada en los valles de los ríos Chillón, Rímac y Lurín, en la zona desértica de la costa central del país, frente al océano Pacífico. La ciudad es considerada el centro político, cultural, económico, financiero, comercial y gastronómico del Perú. Por su importancia geoestratégica, ha sido definida como una ciudad global de «clase beta+».​Jurisdiccionalmente, se extiende principalmente dentro de la provincia de Lima y en una porción menor, al oeste, dentro de la provincia constitucional del Callao, donde se ubican el puerto marítimo y el Aeropuerto Internacional Jorge Chávez. Ambas provincias cuentan con autonomía regional desde el año 2002.\nLa proyección censal de 2023 indica que la ciudad de Lima tiene una población estimada de 10 092 000 habitantes, lo que la convierte en la ciudad más poblada del país. Junto con la ciudad del Callao, forma un área urbana contigua conocida como área metropolitana de Lima-Callao, que abarca un total de 10 151 200 habitantes. Al considerar la provincia constitucional del Callao, la aglomeración total alcanza una población de 11 342 100 habitantes, haciéndola una de las treinta aglomeraciones urbanas más pobladas del mundo.​​\nLa historia de Lima se remonta a miles de años atrás, cuando estuvo habitada por los lima, los ichma y posteriormente los incas. El 18 de enero de 1535, el conquistador español Francisco Pizarro estableció la «Ciudad de los Reyes» sobre el fértil valle del Rímac, cerca del océano Pacífico. Como capital del Virreinato del Perú, Lima se convirtió rápidamente en el centro político, cultural y económico de la América del Sur española. Tras la Guerra de Independencia del Perú, Lima se convirtió en la capital de la recién formada república. En los siglos XX y XXI, la ciudad experimentó una importante modernización y expansión urbana, albergando a casi un tercio de la población peruana y convirtiéndose en un crisol de culturas con tradiciones, festivales, música y gastronomía que la caracterizan.\nEn octubre de 2013, Lima fue elegida para albergar los Juegos Panamericanos de 2019; estos juegos se llevaron a cabo en sedes de Lima y sus alrededores, y fueron el evento deportivo más grande jamás organizado por el país. También fue sede de las reuniones de la Cooperación Económica Asia-Pacífico (APEC) de 2008 y 2016, las reuniones anuales del Fondo Monetario Internacional y el Grupo del Banco Mundial en octubre de 2015, la Conferencia de las Naciones Unidas sobre el Cambio Climático en diciembre de 2014 y el concurso Miss Universo 1982. En noviembre de 2024, fue sede de las reuniones de la APEC por tercera vez.​',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/6/69/Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg/960px-Bas%C3%ADlica_Catedral_Metropolitana_de_Lima_%28cropped%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Lima',
    personajeIds: ['pizarro', 'nicolas-ribera'],
    rutaId: 'conquista-peru',
  },
  {
    id: 'sitio-cuzco',
    titulo: 'Sitio del Cuzco',
    tipo: 'rebelion',
    fecha: 1536.3,
    coordenadas: [-71.97, -13.52],
    resumen:
      'El sitio de Cusco, también conocido como el cerco de Cusco, fue un prolongado asedio de 10 meses iniciado el 6 de mayo de 1536 por Manco Inca Yupanqui, en el contexto de la Conquista del Imperio Incaico.\nTácticamente, el resultado fue un estancamiento militar:​ los conquistadores españoles  no lograron romper el cerco, ni siquiera tras la recaptura de Sacsayhuamán, mientras que las tropas incas tampoco consiguieron tomar la ciudad. Sin embargo, estratégicamente, el desenlace favoreció a los europeos, quienes resistieron el tiempo suficiente para que regrese la expedición de Diego de Almagro desde Chile y se aproximen los refuerzos españoles al mando de Alonso de Alvarado.\nAnte la inminente llegada de estas tropas,​ la desaparición del ejército encargado de controlar la sierra central​ y la creciente escasez de suministros, Manco Inca decidió levantar el sitio el 18 de abril de 1537 y replegarse hacia Ollantaytambo para reorganizar sus fuerzas.',
    imagenWiki:
      'https://upload.wikimedia.org/wikipedia/commons/9/92/Cusco_bat.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    articuloWiki: 'https://es.wikipedia.org/wiki/Sitio_del_Cuzco',
    personajeIds: ['hernando-pizarro', 'juan-pizarro'],
    rutaId: 'conquista-peru',
  },
  {
    id: 'batalla-salinas',
    titulo: 'Batalla de las Salinas',
    tipo: 'batalla',
    fecha: 1538.3,
    coordenadas: [-71.9, -13.6],
    resumen:
      'La batalla de las Salinas fue un decisivo conflicto militar entre las fuerzas de Hernando y Gonzalo Pizarro contra las de Diego de Almagro, el 6 de abril de 1538. El enfrentamiento entre Francisco Pizarro y Diego de Almagro durante el proceso de la conquista española del Tahuantinsuyo se originó en la disputa por la posesión de la ciudad de Cuzco, que ambos consideraban bajo su jurisdicción y que estaba en poder de Almagro desde 1537. \nLa batalla tuvo lugar en las antiguas salinas incas de Cachipampa, situadas a 5 km al sur de Cuzco, ciudad que fue ocupada por los almagristas después de su victoria en Abancay. Ambos líderes afirmaron representar la autoridad de la Corona española; los de Pizarro controlaban la provincia de Nueva Castilla, mientras que los de Almagro operaban en Nueva Toledo.\nLuego de una hora de masacre, la batalla se resolvió con una victoria de los pizarristas: gracias a la captura de Almagro y sus lugartenientes, y la muerte de Rodrigo Orgóñez en el campo de batalla, los Pizarro persiguió al enemigo tomando posesión del Cuzco. Almagro fue ejecutado en julio de 1538.',
    imagenWiki:
      'https://upload.wikimedia.org/wikipedia/commons/2/2d/Diego-de-Almagro.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled',
    articuloWiki: 'https://es.wikipedia.org/wiki/Batalla_de_las_Salinas',
    personajeIds: ['hernando-pizarro', 'almagro'],
    rutaId: 'conquista-peru',
  },
  {
    id: 'partida-expedicion',
    titulo: 'Expedición de Magallanes y Elcano',
    tipo: 'descubrimiento',
    fecha: 1519.65,
    coordenadas: [-6.35, 36.78],
    resumen:
      'La expedición de Magallanes y Elcano fue una expedición marítima española del siglo XVI.\nSupuso primera circunnavegación de la Tierra, el hallazgo del estrecho de Magallanes y el descubrimiento para los europeos de las islas Filipinas, además del descubrimiento de las islas Marianas, islas Desventuradas e isla Ámsterdam.​​ \nFue capitaneada inicialmente por Fernando de Magallanes, y completada por Juan Sebastián Elcano. \n\n \n\nLa expedición tenía el inédito propósito de abrir una ruta comercial con las islas de las especias (islas Molucas, Indonesia) por occidente, buscando un paso marítimo entre el océano Atlántico y el océano Pacífico. \nEstaba formada por cinco naves, las cuales bajaron el río Guadalquivir desde Sevilla el día 10 de agosto de 1519. Algunos días después, el capitán general y los capitanes de las otras naves se vinieron en las chalupas tras ultimar los preparativos, por lo que las naves partieron definitivamente de Sanlúcar de Barrameda el 20 de septiembre de 1519.​​ La escuadra, después de haber explorado durante meses el litoral americano al sur de Brasil, logró cruzar el estrecho de Magallanes el 28 de noviembre de 1520. En su travesía por el Pacífico llegó a las islas Filipinas, donde, el 27 de abril de 1521, muere Fernando de Magallanes en la batalla de Mactán. Los expedicionarios continuaron la navegación hasta las Molucas, objetivo de su viaje, donde eligieron a Juan Sebastián Elcano para capitanear el viaje de regreso. Navegando hacia el oeste por el océano Índico y dando la vuelta a África, el 6 de septiembre de 1522 la Victoria, única nave que quedaba en la expedición, retornó a Sanlúcar de Barrameda, convirtiéndose en la primera embarcación de la historia en dar la vuelta al mundo. Ese mismo día la nave fue remolcada río arriba hasta Sevilla, debido a las malas condiciones en las que se encontraba la nave, llegando dos días después (8 de septiembre de 1522)​​ con su carga de especias.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2c/Magellan_Elcano_Circumnavigation-es.svg/960px-Magellan_Elcano_Circumnavigation-es.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki:
      'https://es.wikipedia.org/wiki/Expedici%C3%B3n_de_Magallanes_y_Elcano',
    personajeIds: ['magallanes', 'elcano', 'pigafetta'],
    rutaId: 'magallanes-elcano',
  },
  {
    id: 'paso-estrecho',
    titulo: 'Estrecho de Magallanes',
    tipo: 'descubrimiento',
    fecha: 1520.85,
    coordenadas: [-70, -53.5],
    resumen:
      'El estrecho de Magallanes es un paso marítimo localizado en el extremo sur de Chile,​ entre el territorio continental sudamericano, la isla Grande de Tierra del Fuego y varias islas ubicadas al oeste de esta hacia el océano Pacífico. Es el principal paso natural entre los océanos Pacífico y Atlántico. El estrecho que los navegantes bautizaron como «Estrecho de Todos los Santos» al descubrirlo en la fiesta a la que hacía honor, actualmente lleva el nombre del almirante Fernando de Magallanes, quien lo descubrió en 1520 durante la expedición española a las Molucas (1519-1522).\nAdministrativamente, pertenece a la región de Magallanes y de la Antártica Chilena, el territorio chileno más austral.​\nDe acuerdo con la Organización Hidrográfica Internacional, su boca oriental está determinada por la línea que une el cabo Vírgenes con el cabo del Espíritu Santo.​ Este límite de la OHI no coincide con lo establecido en el Tratado de 1984, firmado por Argentina y Chile, en su artículo 10.º: «el término oriental del Estrecho de Magallanes [está] determinado por punta Dungeness en el Norte y cabo del Espíritu Santo en el Sur»,​ considerándolo íntegramente dentro de la jurisdicción de Chile, en la región de Magallanes y de la Antártica Chilena.\nDe acuerdo con los tratados argentino-chilenos de 1881 y 1984, tanto el acceso a su boca oriental como la navegación en el estrecho se encuentran asegurados a los buques de todas las banderas en todo tiempo y circunstancia.',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/0/05/StraitOfMagellan.jpg/960px-StraitOfMagellan.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Estrecho_de_Magallanes',
    personajeIds: ['magallanes'],
    rutaId: 'magallanes-elcano',
  },
  {
    id: 'batalla-mactan',
    titulo: 'Batalla de Mactán',
    tipo: 'batalla',
    fecha: 1521.3,
    coordenadas: [123.97, 10.31],
    resumen:
      'La batalla de Mactán tuvo lugar el 27 de abril de 1521 en la isla de Mactán (Filipinas). Unos 1500 guerreros de la isla al mando de Lapu-Lapu, el caudillo de Mactán, vencieron a un grupo de 49 miembros de la expedición española al mando de Fernando de Magallanes, quien murió en combate.​',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4b/Magellans_Ermordung.jpg/960px-Magellans_Ermordung.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Batalla_de_Mact%C3%A1n',
    personajeIds: ['magallanes'],
    rutaId: 'magallanes-elcano',
  },
  {
    id: 'regreso-elcano',
    titulo: 'Victoria (nao)',
    tipo: 'descubrimiento',
    fecha: 1522.68,
    coordenadas: [-6.35, 36.78],
    resumen:
      'La nao Victoria fue un buque de alto bordo (borde alto u oceánico) de la primera escuadra que la Monarquía Hispánica, concretamente la Corona de Castilla, previó para ir a las «islas de las especias», siempre que se hallaran comprendidas dentro de las demarcaciones españolas, esto es, para ser exactos, de la Corona de Castilla y sin tocar en las portuguesas. Fue llamada en su día la «Armada de la especiería» o «Armada de Magallanes». Las singladuras se concluyeron con la primera vuelta al mundo (1519-1522), siendo este el único navío que completó dicho periplo. La tradición cuenta que la nao Victoria se construyó en los astilleros de Zarauz (País Vasco), territorio integrante de la Corona de Castilla, de los que no queda ningún rastro. Aunque investigaciones recientes sugieren que pudo haber sido construida en Ondarroa, Vizcaya. Documentos notariales indican que en 1518, la nave, entonces llamada Santa María y propiedad de Domingo de Apallua, vecino de Ondárroa, fue adquirida por la Corona para la expedición de Magallanes y Elcano. Por tanto, aunque no existe consenso definitivo, existen evidencias que respaldan la hipótesis de que la nao Victoria fue construida en Ondarroa.​​​',
    imagenWiki:
      'https://thumb.wikimedia.org/wikipedia/commons/thumb/2/29/Ships_Through_the_Ages_%288%29.jpg/960px-Ships_Through_the_Ages_%288%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail',
    articuloWiki: 'https://es.wikipedia.org/wiki/Victoria_(nao)',
    personajeIds: ['elcano', 'pigafetta'],
    rutaId: 'magallanes-elcano',
  },
  {
    id: "toma-alhama",
    titulo: "Toma de Alhama de Granada",
    tipo: "batalla",
    fecha: 1482.15,
    coordenadas: [-4.1, 36.97],
    resumen:
      "El 28 de febrero de 1482, un golpe de mano de fuerzas de Rodrigo Ponce de León, marqués de Cádiz, tomó por sorpresa la fortaleza de Alhama, plaza clave en el corazón del reino nazarí de Granada entre Málaga y la capital. Su pérdida, tan sentida por los granadinos que dio origen al lamento «¡Ay de mi Alhama!», marcó el inicio de la guerra de Granada (1482-1492).",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_Granada",
    personajeIds: ["marques-cadiz"],
    rutaId: "guerra-granada",
  },
  {
    id: "sitio-ronda",
    titulo: "Toma de Ronda",
    tipo: "batalla",
    fecha: 1485.4,
    coordenadas: [-5.16, 36.74],
    resumen:
      "En mayo de 1485 el rey Fernando II puso sitio a Ronda, plaza fuerte de la serranía occidental del reino de Granada. El asedio, apoyado por artillería de pólvora, obligó a la ciudad a capitular en pocos días, lo que privó a los nazaríes de una de sus posiciones defensivas más importantes en el oeste del reino.",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_Granada",
    personajeIds: ["fernando-ii"],
    rutaId: "guerra-granada",
  },
  {
    id: "rendicion-baza",
    titulo: "Cerco de Baza",
    tipo: "batalla",
    fecha: 1489.83,
    coordenadas: [-2.77, 37.49],
    resumen:
      "Entre junio y diciembre de 1489 los Reyes Católicos sitiaron Baza, la plaza mejor defendida del oriente granadino, en un cerco inusualmente largo que mantuvieron sin levantar pese al invierno, con un campamento estable de decenas de miles de hombres. La rendición de la ciudad en diciembre arrastró la capitulación de Almería, Guadix y Almuñécar, y dejó a la ciudad de Granada completamente aislada.",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_Granada",
    personajeIds: ["fernando-ii", "isabel-i"],
    rutaId: "guerra-granada",
  },
  {
    id: "sitio-malaga",
    titulo: "Toma de Málaga (1487)",
    tipo: "batalla",
    fecha: 1487.65,
    coordenadas: [
  -4.42,
  36.72
],
    resumen: "Se conoce como la toma de Málaga al asedio llevado a cabo en 1487​ mediante el cual los Reyes Católicos conquistaron la ciudad de Málaga a al Reino nazarí de Granada, en el contexto de la guerra de Granada. El asedio duró unos cuatro meses de duración y supuso un episodio sangriento en la guerra final por la conquista del Reino nazarí de Granada.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/53/Malaga_Alcazaba_25-9-2007a.JPG/960px-Malaga_Alcazaba_25-9-2007a.JPG?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Toma_de_M%C3%A1laga_(1487)",
    personajeIds: [
  "fernando-ii",
  "isabel-i"
],
    rutaId: "guerra-granada",
  },
  {
    id: "toma-granada",
    titulo: "Guerra de Granada",
    tipo: "tratado",
    fecha: 1492.04,
    coordenadas: [
  -3.6,
  37.18
],
    resumen: "La guerra de Granada fue el conjunto de campañas militares que tuvieron lugar entre 1482 y 1492, emprendidas por la reina Isabel I de Castilla y su esposo, el rey Fernando II de Aragón, en el interior del reino nazarí de Granada, que culminaron con la rendición del sultán Boabdil, quien había oscilado entre la alianza, el doble juego, la contemporización y el enfrentamiento abierto con ambos bandos.\nLa victoria cristiana tuvo como consecuencias la integración en la Corona de Castilla del último reino musulmán de la península ibérica, finalizándose el proceso histórico de la Reconquista que los reinos cristianos habían comenzado en el siglo VIII. Ese hecho motivó que el papa Alejandro VI concediese a Isabel y Fernando el título de Reyes Católicos en 1496.\nLos diez años de guerra no fueron un esfuerzo continuo: solían marcar un ritmo estacional de campañas iniciadas en primavera y detenidas en el invierno. Además, el conflicto estuvo sujeto a numerosas vicisitudes bélicas y civiles. En el bando cristiano fue decisiva la capacidad de integración en una misión común que emprendió principalmente la Corona de Castilla, apoyada por la nobleza castellana y el imprescindible impulso del clero, bajo la autoridad de la emergente Monarquía Católica. La participación de la Corona de Aragón fue de menor importancia: aparte de la presencia del propio rey Fernando, su participación consistió en la colaboración naval, la aportación de expertos artilleros y el empréstito financiero. En el bando musulmán fueron notables los enfrentamientos internos entre distintas facciones que favorecieron el éxito de sus contrarios.\nLa protocolaria entrega de las llaves de la ciudad de Granada y la ciudad palatina de la Alhambra el 2 de enero de 1492 se sigue conmemorando todos los años en esa fecha, con un tremolar de banderas desde el Ayuntamiento de Granada.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/31/La_Rendici%C3%B3n_de_Granada_-_Pradilla.jpg/960px-La_Rendici%C3%B3n_de_Granada_-_Pradilla.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_Granada",
    personajeIds: [
  "fernando-ii",
  "isabel-i",
  "gran-capitan"
],
    rutaId: "guerra-granada",
  },
  {
    id: "fundacion-isabela",
    titulo: "La Isabela",
    tipo: "fundacion",
    fecha: 1493.9,
    coordenadas: [
  -70.99,
  19.9
],
    resumen: "La Isabela fue una villa fundada por Cristóbal Colón en 1494 durante su Segundo Viaje, situada en la provincia de Puerto Plata, República Dominicana.​​​​\nSe trató de la primera población establecida por los españoles en América, tras el malogrado fuerte Navidad.​ \nSus restos se encuentran en el Parque Nacional Histórico La Isabela.​ \nTanto la primera como la última población de fundación española en América y Asia comparten nombre; La Isabela por Isabel la Católica e Isabela (1848) por Isabel II de Borbón en Basilan, Filipinas.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/a/a1/La_Isabela_SDQ_10_2019_1144.jpg/960px-La_Isabela_SDQ_10_2019_1144.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/La_Isabela",
    personajeIds: [
  "colon"
],
    rutaId: "viajes-colon-2-4",
  },
  {
    id: "fundacion-santo-domingo",
    titulo: "Santo Domingo",
    tipo: "fundacion",
    fecha: 1496.6,
    coordenadas: [
  -69.9,
  18.48
],
    resumen: "Santo Domingo (oficialmente, Santo Domingo de Guzmán y típicamente conocida como \"La Capital\") es la capital de la República Dominicana. La ciudad está situada sobre el mar Caribe, en la desembocadura del río Ozama, en la costa meridional de La Española, a 155 km al sureste de Santiago.​\nFundada por Bartolomé Colón el 5 de agosto de 1496,​ en la margen oriental del río Ozama, y luego trasladada por Nicolás de Ovando en 1502 a la margen occidental del mismo río. Conocida por ser el primer asentamiento europeo permanente en América, y por ser la primera sede del gobierno de la Corona de Castilla en el Nuevo Mundo. Se encuentra dentro de los límites del Distrito Nacional, este último bordeado a su vez por tres costados por la provincia de Santo Domingo. Limita al sur con el mar Caribe, al este con el municipio Santo Domingo Este, al oeste con Santo Domingo Oeste y al norte con Santo Domingo Norte; entre todas forman el Gran Santo Domingo, cuya área metropolitana supera ya los 4 millones de habitantes, lo que la convierte en la más grande de la República Dominicana, de La Española y de las Antillas en su conjunto.\nLa ciudad fue designada como Capital Americana de la Cultura en 2010.​ Además, ha sido sede de importantes eventos deportivos, como los Juegos Panamericanos en 2003, los Juegos Centroamericanos y del Caribe en 1974 y 2026 y en múltiples ocasiones, la Serie del Caribe.​​ \nEn Santo Domingo se encuentran la primera catedral y el primer castillo de América; ambos ubicados en la Ciudad Colonial, zona declarada como Patrimonio de la Humanidad por la UNESCO. Gracias a esto, la ciudad, especialmente su centro histórico reciben más de un millón de visitantes internacionales cada año.\nHoy, Santo Domingo constituye el mayor centro cultural, financiero, político, comercial e industrial de la República Dominicana. Santo Domingo también sirve como el principal puerto del país. Uno de los puertos de la ciudad se encuentra en la desembocadura del río Ozama, acoge a los buques más grandes, y recibe tráfico tanto de pasajeros como de carga.\nSanto Domingo llevó el nombre de «Ciudad Trujillo» desde 1936 hasta 1961, debido a un cambio hecho por el dictador Rafael Leónidas Trujillo Molina.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e3/SantoDomingoedit.JPG/960px-SantoDomingoedit.JPG?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Santo_Domingo",
    personajeIds: [
  "bartolome-colon"
],
    rutaId: "viajes-colon-2-4",
  },
  {
    id: "tercer-viaje-colon",
    titulo: "Tercer viaje de Colón",
    tipo: "descubrimiento",
    fecha: 1498.55,
    coordenadas: [
  -61.4,
  10.5
],
    resumen: "El tercer viaje de Cristóbal Colón (salida de Sanlúcar de Barrameda, 30 de mayo de 1498 – llegada a Cádiz, 25 de noviembre de 1500) fue una expedición transoceánica comandada por Cristóbal Colón que tuvo como objetivo continuar la exploración de las nuevas tierras en nombre de los reyes de España conocidos como los Reyes Católicos. En esta expedición visitó la costa norte de la actual Venezuela.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/9/93/Viaje_3_Colon.svg/960px-Viaje_3_Colon.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Tercer_viaje_de_Col%C3%B3n",
    personajeIds: [
  "colon"
],
    rutaId: "viajes-colon-2-4",
  },
  {
    id: "cuarto-viaje-colon",
    titulo: "Cuarto viaje de Cristóbal Colón",
    tipo: "descubrimiento",
    fecha: 1502.4,
    coordenadas: [-82.4, 15.8],
    resumen:
      "Entre mayo de 1502 y noviembre de 1504, ya enfermo y desposeído de sus títulos de gobierno, Colón emprendió su última expedición en busca de un paso hacia Asia, explorando la costa de la actual Honduras, Nicaragua, Costa Rica y Panamá. La expedición terminó en naufragio: la tripulación quedó varada un año en Jamaica antes de ser rescatada.",
    articuloWiki: "https://es.wikipedia.org/wiki/Viajes_de_Crist%C3%B3bal_Col%C3%B3n",
    personajeIds: ["colon"],
    rutaId: "viajes-colon-2-4",
  },
  {
    id: "conquista-gran-canaria",
    titulo: "Conquista de Gran Canaria",
    tipo: "batalla",
    fecha: 1483.29,
    coordenadas: [
  -15.58,
  28.1
],
    resumen: "La conquista de Gran Canaria fue un proceso histórico que tuvo lugar entre 1478 y 1483 durante el cual la isla de Gran Canaria, en el archipiélago atlántico de Canarias, fue incorporada a la Corona de Castilla mediante una ocupación militar del territorio habitado por los aborígenes canarios. Fue la primera de la denominada etapa realenga de la conquista de las islas Canarias, pues fue promovida y financiada directamente por los Reyes Católicos. Asimismo, formó parte en sus inicios de los conflictos habidos entre Castilla y Portugal durante la guerra de sucesión castellana.\nLa conquista duró casi cinco años debido tanto a la resistencia de los aborígenes, quienes se aprovecharon de la difícil orografía insular, como a las disensiones que se produjeron entre los conquistadores y la falta de refuerzos.​ Se distinguen dos fases principales: una primera entre 1478 y 1480 caracterizada por el estancamiento del proceso debido a los problemas internos entre la hueste conquistadora, y una segunda, entre 1480 y 1483, en que bajo el mando único del gobernador Pedro de Vera se intensificó la presión sobre los canarios.​\nComo resultado de la victoria castellana la isla pasó a formar parte de la Corona de Castilla, fue progresivamente colonizada por pobladores europeos y la cultura aborigen desapareció. Los antiguos canarios fueron en parte expatriados y en parte incorporados a la nueva sociedad.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Parlamento_04.jpg/960px-Parlamento_04.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Conquista_de_Gran_Canaria",
    personajeIds: [
  "pedro-vera"
],
    rutaId: "conquista-canarias",
  },
  {
    id: "conquista-la-palma",
    titulo: "Conquista de La Palma",
    tipo: "batalla",
    fecha: 1493.4,
    coordenadas: [
  -17.92,
  28.68
],
    resumen: "La conquista de La Palma fue el proceso histórico por el cual la isla de La Palma, en el archipiélago de Canarias ―España―, fue incorporada a la corona de Castilla mediante la toma militar del territorio habitado por los aborígenes benahoaritas. Fue una empresa particular dirigida por el capitán andaluz Alonso Fernández de Lugo con el patrocinio de los Reyes Católicos y se desarrolló entre 1492 y 1493.\nLos derechos de conquista pertenecían a la Corona, por lo que la de La Palma se encuadra en la denominada etapa realenga de la conquista de las islas Canarias. Fue la penúltima isla del archipiélago en ser incorporada a Castilla, tras Gran Canaria (1478-1483) y justo antes de Tenerife (1494-1496).\nLa conquista fue breve, pues duró siete meses desde el primer desembarco hasta la rendición de los últimos focos de resistencia. La rapidez de la campaña se debió principalmente a la existencia de pactos previos de los castellanos con varios bandos aborígenes, que aceptaron convertirse al cristianismo y reconocer la autoridad de los reyes de Castilla. La resistencia aborigen fue escasa y se concentró en el bando de Aceró, cuyo caudillo Tanausú se negó a someterse a los conquistadores. Finalmente su captura por parte de Alonso de Lugo puso fin oficial a la conquista.\nLa victoria castellana provocó que la isla pasara a ser territorio de realengo bajo la gobernación de Alonso de Lugo, iniciándose su repoblación. Por su parte, la cultura aborigen colapsó y los supervivientes fueron integrándose poco a poco en la nueva sociedad.",
    
    articuloWiki: "https://es.wikipedia.org/wiki/Conquista_de_La_Palma",
    personajeIds: [
  "alonso-lugo"
],
    rutaId: "conquista-canarias",
  },
  {
    id: "conquista-tenerife",
    titulo: "Conquista de Tenerife",
    tipo: "batalla",
    fecha: 1496.6,
    coordenadas: [
  -16.25,
  28.47
],
    resumen: "La conquista de Tenerife fue el proceso histórico por el cual la isla de Tenerife, en el archipiélago atlántico africano de Canarias ―España―, fue incorporada a la corona de Castilla entre 1494 y 1496 mediante la ocupación militar del territorio habitado por los aborígenes guanches. La llevó a cabo de manera particular el capitán andaluz Alonso Fernández de Lugo con la autorización de los Reyes Católicos, a quienes pertenecían los derechos de conquista.\nFue la última isla canaria en ser conquistada, justo después de la de La Palma (1492-1493), formando parte de la denominada etapa realenga de la conquista de Canarias pues fue asumida por los reyes de Castilla.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/e/eb/AcentejoBattle.JPG?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Conquista_de_Tenerife",
    personajeIds: [
  "alonso-lugo"
],
    rutaId: "conquista-canarias",
  },
  {
    id: "fundacion-san-sebastian-uraba",
    titulo: "San Sebastián de Urabá",
    tipo: "fundacion",
    fecha: 1509.85,
    coordenadas: [
  -77.35,
  8.65
],
    resumen: "San Sebastián de Urabá fue un fuerte español del siglo XVI situado en Necoclí, en Antioquia, en Colombia.  \nFundado el 20 de enero de 1510 por Alonso de Ojeda, fue el primer intento de asentamiento español en suelo continental americano. Fue abandonado poco después ante el ataque de los indígenas y un aprovisionamiento deficiente, dando lugar a la fundación de la población de Santa María de la Antigua del Darién.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e1/Conquest_of_Colombia.png/960px-Conquest_of_Colombia.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/San_Sebasti%C3%A1n_de_Urab%C3%A1",
    personajeIds: [
  "alonso-ojeda"
],
    rutaId: "tierra-firme-ojeda-nicuesa",
  },
  {
    id: "fundacion-nombre-de-dios",
    titulo: "Nombre de Dios (Panamá)",
    tipo: "fundacion",
    fecha: 1510.3,
    coordenadas: [-79.72, 9.58],
    resumen:
      "Mientras Ojeda fundaba San Sebastián de Urabá en el sector oriental de Tierra Firme, Diego de Nicuesa exploró la costa occidental del istmo panameño y, tras un naufragio y penurias severas, fundó en 1510 el puerto de Nombre de Dios, cabecera de su gobernación de Castilla de Oro. El asentamiento, precario y hostilizado por los indígenas, sería años más tarde la terminal atlántica del camino real hacia Panamá, ruta clave de la Carrera de Indias.",
    articuloWiki: "https://es.wikipedia.org/wiki/Diego_de_Nicuesa",
    personajeIds: ["diego-nicuesa"],
    rutaId: "tierra-firme-ojeda-nicuesa",
  },
  {
    id: "fundacion-santa-maria-darien",
    titulo: "Santa María la Antigua del Darién",
    tipo: "fundacion",
    fecha: 1510.75,
    coordenadas: [
  -77.13,
  8.13
],
    resumen: "Santa María la Antigua del Darién fue una ciudad fundada en 1510 al este del istmo de Panamá, en la región del Darién en territorio actual de Colombia durante la colonización española de América, por Martín Fernández de Enciso y Vasco Núñez de Balboa en honor a la Virgen de la Antigua, de la que Núñez era devoto.​​Fue la capital de la Gobernación de Castilla de Oro hasta 1520, cuando la población se traslada  completamente al actual sitio de Panamá Viejo en la actual  Ciudad de Panamá por orden de Pedrarias Dávila.​\nSanta María la Antigua del Darién fue la precursora de la actual Ciudad de Panamá, es considerada la primera ciudad fundada por los españoles en tierra firme americana,​ constituyendo el punto de partida para la conquista del continente y en la que participaron Francisco Pizarro, Sebastián de Belalcázar, Diego de Almagro, Gonzalo Fernández de Oviedo y Pedro Arias Dávila.​  \nSus restos se encuentran en Colombia, en la costa occidental del golfo de Urabá, en el departamento colombiano del Chocó (vereda Santuario, municipio de Unguía).",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Cross_of_Burgundy.svg/960px-Flag_of_Cross_of_Burgundy.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Santa_Mar%C3%ADa_la_Antigua_del_Dari%C3%A9n",
    personajeIds: [
  "alonso-ojeda"
],
    rutaId: "tierra-firme-ojeda-nicuesa",
  },
  {
    id: "descubrimiento-mar-del-sur",
    titulo: "Descubrimiento del Mar del Sur",
    tipo: "descubrimiento",
    fecha: 1513.75,
    coordenadas: [-78.2, 8.05],
    resumen:
      "El 25 de septiembre de 1513, tras cruzar a pie el istmo de Panamá al frente de una expedición de españoles e indígenas guías, Vasco Núñez de Balboa avistó desde una cumbre el océano Pacífico, al que llamó «Mar del Sur». Días después tomó posesión de sus aguas en nombre de la Corona de Castilla, un hallazgo que revelaría que las tierras descubiertas por Colón eran un continente separado de Asia por un nuevo océano.",
    articuloWiki: "https://es.wikipedia.org/wiki/Vasco_N%C3%BA%C3%B1ez_de_Balboa",
    personajeIds: ["balboa"],
    rutaId: "balboa-mar-del-sur",
  },
  {
    id: "fundacion-baracoa",
    titulo: "Baracoa",
    tipo: "fundacion",
    fecha: 1511.6,
    coordenadas: [
  -74.5,
  20.35
],
    resumen: "Baracoa (en taíno: Presencia del mar), llamada también la \"Ciudad Primada de Cuba\" por haber sido la primera ciudad fundada en el país, es una ciudad y municipio situados en la provincia de Guantánamo, Cuba. \nLos principales productos de la región son el coco, el cacao y el café, aunque desde finales de la década del 90 del pasado siglo el turismo se ha convertido en una de sus principales fuentes de ingreso debido a su extraordinaria belleza y rica historia.\nLa ciudad fue fundada el 15 de agosto de 1511 con el nombre de Nuestra Señora de la Asunción de Baracoa por el conquistador español Diego Velázquez, que ostentaba entonces el título de Adelantado. Es el más antiguo asentamiento de la Isla después de la llegada de los colonizadores españoles y de ahí debe su nombre de Ciudad Primada. En 1518 recibió el nombramiento de ciudad. Fue la primera capital y el primer obispado de la Isla.\nDeclarada Monumento Nacional, la ciudad está situada entre los ríos Macaguanigua y Miel. Entre sus atracciones naturales se encuentra el río Toa, marcado por numerosas cascadas, siendo la más conocida El Saltadero con 17 metros de altura, y el Yunque, elevación que debe su nombre a la similitud de la misma con la pieza que usan los herreros. La llamada la Bella Durmiente, vista desde lejos, asemeja a una joven echada.\nEn esta ciudad se conserva dentro de una vitrina y con un pedestal de plata la Cruz de la Parra, símbolo de la cristianidad, que trajera Cristóbal Colón en su primer viaje.\nSe presume que el nombre de la ciudad provenga de un vocablo aborigen que significa “presencia de mar” en franca alusión al ambiente marino que contrasta con las montañas y los ríos de la región de gran belleza natural.\nEl acceso a la ciudad desde la capital provincial constituye una aventura ya que hay que recurrir a una vía muy peculiar que serpentea entre las montañas y que lleva el nombre de Viaducto de la Farola. Esta carretera cuenta con 11 puentes voladizos y su punto más elevado está en el Alto de Cotilla, un parteaguas a más de 600 metros sobre el nivel del mar donde se eleva un mirador desde el que se puede alcanzar a ver la costa Norte y la costa Sur, tocado por la leyenda de ver las luces de la Haití. En esta misma vía se celebra anualmente una carrera de maratón.\nEl acceso desde el oeste sucede a través de la carretera Holguín-Mayarí-Moa-Baracoa consistente en una carretera asfaltada en los 180 km hasta Moa y unos 16 km hasta Punta Gorda. El trecho restante de unos 60 km es un terraplén que cruza importantes ríos sobre puentes de hormigón.\nEl término municipal modificó su jurisdicción varias veces. Muchos de los actuales territorios de Moa pertenecieron a Baracoa y los nativos de esta parte holguinera comparten costumbres y rasgos muy similares con los baracoenses.\nLa región fue fuertemente afectada por el Huracán Matthew en octubre de 2016.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/56/Cuidad_de_Baracoa.jpg/960px-Cuidad_de_Baracoa.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Baracoa",
    personajeIds: [
  "velazquez-cuellar"
],
    rutaId: "conquista-cuba-pr",
  },
  {
    id: "conquista-puerto-rico",
    titulo: "Conquista de Puerto Rico",
    tipo: "fundacion",
    fecha: 1508.65,
    coordenadas: [-66.12, 18.47],
    resumen:
      "En 1508 Juan Ponce de León, que había acompañado a Colón en su segundo viaje, encabezó la colonización de Puerto Rico (Borinquén) con la fundación de Caparra, el primer asentamiento español en la isla, del que fue nombrado primer gobernador. La resistencia taína, encabezada por el cacique Agüeybaná II, fue sofocada hacia 1511, consolidando el control español sobre la isla.",
    articuloWiki: "https://es.wikipedia.org/wiki/Juan_Ponce_de_Le%C3%B3n",
    personajeIds: ["ponce-leon"],
    rutaId: "conquista-cuba-pr",
  },
  {
    id: "batalla-pinar",
    titulo: "Conquista de Guatemala",
    tipo: "batalla",
    fecha: 1524.1,
    coordenadas: [
  -91.52,
  14.83
],
    resumen: "La conquista de Guatemala fue un conflicto que forma parte de la colonización española de América en el territorio de lo que hoy es la república de Guatemala en Centroamérica. Antes de la conquista, este territorio comprendía varios reinos mesoamericanos, la mayoría de los cuales pertenecía a la civilización maya.\nEl primer contacto entre los mayas y los exploradores españoles se dio en el siglo xvi, cuando un barco español que navegaba de Panamá a Santo Domingo, naufragó en la costa este de la península de Yucatán en 1511. En 1517 y 1519 siguieron varias expediciones españolas que tocaron tierra en diferentes partes de la costa de Yucatán. La conquista española del territorio de los mayas fue un conflicto prolongado que duró casi dos siglos por la tenacidad de la resistencia de los reinos mayas a su integración en el imperio español.\nLa tecnología y las tácticas españolas y nativas eran muy diferentes. Los pueblos indígenas de Guatemala no solamente carecían de elementos claves de la tecnología del Viejo Mundo como una rueda funcional, caballos, hierro, acero y pólvora, sino que también eran muy susceptibles a las enfermedades del Viejo Mundo contra las cuales no tenían resistencia alguna. Muchos mayas preferían las incursiones y la emboscada a la guerra a gran escala, y utilizaban lanzas, flechas y espadas de madera con hojas de obsidiana. En respuesta a la caballería española, los mayas del altiplano recurrieron a cavar hoyos con estacas de madera. Los xincas de la llanura costera del sur utilizaban flechas envenenadas. Los españoles vieron la toma de prisioneros como un estorbo para la victoria final; en cambio, los mayas dieron prioridad a la captura de prisioneros vivos y la apropiación de botín.\nPedro de Alvarado llegó a Guatemala a principios de 1524 al mando de una fuerza mixta compuesta de conquistadores españoles y sus aliados nativos, en su mayoría de Tlaxcala y Cholula. Los nombres geográficos a lo largo de Guatemala tienen topónimos en náhuatl debido a la influencia de estos aliados mexicanos que también sirvieron como guías y traductores para los españoles. Los kakchiqueles se les unieron. Mientras tanto, cada uno de los demás reinos mayas del altiplano había sido derrotado por los españoles y sus guerreros aliados, tanto de México como de los reinos mayas previamente subyugados. El pueblo itza' y otros pueblos mayas de las tierras bajas en la cuenca del Petén establecieron contacto con Hernán Cortés por primera vez en 1525, pero el reino itza' era hostil a la invasión de los españoles y mantuvo su independencia hasta 1697, cuando un resuelto ataque de los españoles finalmente derrotó el último reino maya independiente.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/c/cf/Map_of_the_Spanish_Conquest_of_Guatemala-es.svg/960px-Map_of_the_Spanish_Conquest_of_Guatemala-es.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Conquista_de_Guatemala",
    personajeIds: [
  "pedro-alvarado"
],
    rutaId: "conquista-guatemala",
  },
  {
    id: "fundacion-santiago-guatemala",
    titulo: "Antigua Guatemala",
    tipo: "fundacion",
    fecha: 1524.6,
    coordenadas: [
  -90.73,
  14.62
],
    resumen: "Antigua Guatemala (usualmente abreviada  como Antigua) es una ciudad de origen colonial en el antiplano central de Guatemala, en las faldas del Volcán de Agua, aproximadamente a 40 km al suroeste de la Ciudad de Guatemala. Fue la capital de la Capitanía General de Guatemala entre 1542 y 1773, periodo durante la cual se desarrolló gran parte de su arquitectura y trazado urbano de marcada influencia barroca. Estas características históricas y culturales llevaron que la ciudad fuera declarada Patrimonio Cultural de la Humanidad por la UNESCO en 1979.​ En la actualidad, Antigua Guatemala es la cabecera del departamento de Sacatepéquez.\nDurante la época virreinal el espacio geográfico era conocido como Santiago de los Caballeros de Guatemala, nombre que llevaba la capital de la Capitanía General de Guatemala, que estuvo asentada allí entre 1541 y 1776, año en que la ciudad fue trasladada al Valle de la Ermita luego de que los terremotos de Santa Marta derrumbaran la ciudad por tercera vez en el mismo siglo.​ Se cree que este hecho fue aprovechado por las autoridades civiles como excusa para debilitar a las autoridades eclesiásticas —siguiendo las recomendaciones de las Reformas Borbónicas emprendidas por la Corona española en la segunda mitad del siglo xviii—​ obligando a las órdenes regulares a trasladarse de sus majestuosos conventos destruidos a frágiles estructuras temporales en la nueva ciudad.​\nA partir de la tragedia, la ciudad pasó a llamarse «arruinada Guatemala», «Santiago de Guatemala antiguo» y la «antigua ciudad».  Fue abandonada por todas las autoridades reales y municipales, y en 1784 por las dos últimas parroquias: Candelaria y Nuestra Señora de los Remedios, quedándose también sin autoridades eclesiásticas.​ Sin embargo, el 4 de agosto de 1786 fue declarada como Villa de la Antigua Guatemala oficializándose su creación.​ Pocos años después, el arzobispo Cayetano Francos y Monroy autorizó el funcionamiento de tres parroquias interinas que llevaron el nombre de sus antecesoras: San Sebastián, Candelaria y Los Remedios, en donde se guardó la mayor cantidad de obras de arte religioso que permaneció en la Antigua Guatemala desde ese período.​\nTras la Independencia de Centroamérica, en 1821, Antigua recuperó la categoría de ciudad y fue nombrada como cabecera del departamento de Sacatepéquez.​ Así mismo, el Estado de Guatemala estableció circuitos y distritos para la aplicación de justicia por medio de juicios de jurados en 1825, y la Antigua Guatemala fue asignada como sede del circuito homónimo en el distrito n.º 8 (Sacatepéquez).​\nPosterior al terremoto de 1976, y el deseo de su preservación, la ciudad fue designada como Patrimonio de la Humanidad por la UNESCO en 1979.​​ Su desarrollo posterior se ha marcado por un boom del mercado inmobiliario y una migración de las familias locales a las afueras,​ a comunidades como Ciudad Vieja, San Juan del Obispo, Jocotenango, San Lucas y San Pedro, Las Huertas. \nEn el siglo xxi, es un importante destino turístico guatemalteco por su bien preservada arquitectura barroca española con fachadas barrocas del Nuevo Mundo, así como un gran número de ruinas de iglesias católicas, incluso aún después de los severos daños que sus estructuras sufrieron por el abandono en que estuvieron entre 1776 y 1940​​ y por los terremotos de 1874,​ de 1917​ y de 1976.​ También es reconocida por las solemnes procesiones de Semana Santa, que se han realizado anualmente desde antes del traslado de la capital a la Nueva Guatemala.​ De acuerdo con el censo oficial de 2018, tiene una población de 46 054 habitantes.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Antigua_-_Arco.jpg/960px-Antigua_-_Arco.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Antigua_Guatemala",
    personajeIds: [
  "pedro-alvarado"
],
    rutaId: "conquista-guatemala",
  },
  {
    id: "expedicion-jimenez-quesada",
    titulo: "Nuevo Reino de Granada",
    tipo: "batalla",
    fecha: 1537.3,
    coordenadas: [
  -73.6,
  5.2
],
    resumen: "El Nuevo Reino de Granada o Reino de la Nueva Granada fue una provincia virreinal establecida por el Imperio español en el norte de Sudamérica. Pronto tomo centro en Santafé, que con el tiempo se torno en un eje político, económico, y cultural propia, antecedente a la actual República de Colombia.\nNueva Granada correspondió al territorio bajo la jurisdicción de la Real Audiencia de Santafé de Bogotá (1550-1717) y posteriormente correspondiente al Virreinato de Nueva Granada (1717-1819) cuya sede fue Santafé de Bogotá.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f5/Flag_of_Cross_of_Burgundy.svg/960px-Flag_of_Cross_of_Burgundy.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Nuevo_Reino_de_Granada",
    personajeIds: [
  "jimenez-quesada"
],
    rutaId: "conquista-nueva-granada",
  },
  {
    id: "fundacion-bogota",
    titulo: "Bogotá",
    tipo: "fundacion",
    fecha: 1538.65,
    coordenadas: [
  -74.08,
  4.71
],
    resumen: "Bogotá, oficialmente Bogotá, Distrito Capital​​ (antiguamente conocida como Santafé de Bogotá),​​ es la capital de la República de Colombia y del departamento de Cundinamarca. Está administrada como distrito capital, y goza de autonomía para la gestión de sus intereses dentro de los límites de la Constitución y la ley.​​ A diferencia de los demás distritos de Colombia, Bogotá es una entidad territorial de primer orden, con las atribuciones administrativas que la ley confiere a los departamentos.​ Está constituida por 20 localidades, cada una con su propio alcalde local y una Junta Administradora Local (JAL).​ Es el epicentro político, económico, administrativo, industrial, artístico, cultural, deportivo y turístico del país.​​​​\nBogotá fue fundada como capital del Nuevo Reino de Granada el 6 de agosto de 1538 por el conquistador español Gonzalo Jiménez de Quesada después de una dura expedición a los Andes.\nEs la tercera capital más alta del mundo después de Sucre (2790 m s. n. m.) y Quito (2850 m s. n. m.). Se encuentra a un promedio de 2625 m s. n. m. Está ubicada en el centro de Colombia, en la región natural conocida como la sabana de Bogotá, que forma parte del altiplano cundiboyacense, formación ubicada en la cordillera Oriental de los Andes.\nSu área urbana tiene una longitud de 33 km de sur a norte, y 16 km de oriente a occidente. Como capital, alberga los organismos de mayor jerarquía de la rama ejecutiva (Presidencia de la República), legislativa (Congreso de Colombia) y judicial (Corte Suprema de Justicia, Corte Constitucional, Consejo de Estado y el Consejo Superior de la Judicatura).\nSegún The Economist, en el plano económico, Bogotá se destaca por su fortaleza económica asociada al tamaño de su producción, las facilidades para crear empresas y hacer negocios, la madurez financiera, la atracción de empresas globales y la calidad de su capital humano.​​ Es el principal mercado de Colombia y de la región andina, y el primer destino de la inversión extranjera directa que llega a Colombia (70 %).​​ Tiene el mayor PIB nominal y per cápita del país, aportando la mayor parte al total nacional (24,5 %),​ y es la sexta ciudad por tamaño del PIB en Latinoamérica (de unos 106 678 millones de dólares) con un PIB per cápita nominal de 11 594 dólares y un PIB PPA per cápita de 20 120 dólares,​ igualmente es la plataforma empresarial más grande de Colombia en donde ocurren la mayoría de los emprendimientos de alto impacto.​\nEl aeropuerto de la ciudad, Aeropuerto Internacional El Dorado, llamado así por el mítico El Dorado, tiene el mayor volumen de carga transportada en Iberoamerica, y es el primero en Sudamérica en cantidad de personas.​ Es la ciudad de Colombia con el mayor número de universidades (114) y centros de investigación.​ Cuenta con una amplia oferta cultural representada en una gran cantidad de museos, teatros y bibliotecas públicas (BibloRed), que le ha otorgado el reconocimiento de la «Atenas de Suramérica».​ La ciudad de Bogotá ocupa el lugar 55 en el Global Cities Index 2018,​ y es considerada una ciudad global tipo Beta + por el GaWC.​\nEl Foro Económico Mundial (WEF) Organización Internacional con sede en Ginebra (Suiza) destacó a Bogotá dentro de las cinco ciudades del mundo, por promover, en medio de la pandemia de COVID-19, el uso de la bicicleta. Aunque ya disponía de 550 km de infraestructura ciclista, a mediados de marzo de 2020 se le habían añadido de manera temporal 117 km más.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b0/Museo-del-Oro-Fachada_%2827842494739%29.jpg/960px-Museo-del-Oro-Fachada_%2827842494739%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Bogot%C3%A1",
    personajeIds: [
  "jimenez-quesada"
],
    rutaId: "conquista-nueva-granada",
  },
  {
    id: "fundacion-santiago-chile",
    titulo: "Santiago de Chile",
    tipo: "fundacion",
    fecha: 1541.15,
    coordenadas: [
  -70.65,
  -33.45
],
    resumen: "Santiago, también conocido como Santiago de Chile, es la capital y ciudad más poblada del país. Ubicada en la región Metropolitana de Santiago y situada a orillas del río Mapocho, Santiago fue fundada por el español extremeño Pedro Gutiérrez de Valdivia, bajo el nombre de Santiago de la Nueva Extremadura, en honor al apóstol Santiago, convirtiéndose así en la capital de la Gobernación de la Nueva Extremadura,​ en el siglo XVI. Es el centro económico y administrativo del país, además de ser la aglomeración urbana más grande.\nLa ciudad alberga los principales organismos públicos (palacio de gobierno, Poder Judicial y una serie de organizaciones internacionales), comerciales, culturales y financieros del país, a excepción del Congreso Nacional,​ la Armada Nacional, el Sernapesca y el Ministerio de las Culturas, las Artes y el Patrimonio, ubicados en la ciudad de Valparaíso. Es sede, también, de la Comisión Económica para América Latina y el Caribe (CEPAL).\nAunque generalmente se concibe como una única ciudad, Santiago no constituye una sola unidad político-administrativa, puesto que sus distritos son llamados comunas, que en Chile comuna es el concepto político-administrativo homólogo de ciudad, contando cada comuna santiaguina con su propio municipio, alcalde y concejo municipal. La ciudad está dividida en al menos 43 comunas, de las cuales 28 se encuentran completamente dentro del radio urbano y 15 comunas fuera de este, pero todas muy conectadas a través de modernas autopistas y avenidas. La mayor parte de la metrópoli se encuentra dentro de la provincia de Santiago, y partes de ella se encuentran en comunas pertenecientes a otras provincias de la Región Metropolitana, estas son San Bernardo, Calera de Tango, Buin, Puente Alto, Talagante, Peñaflor, Padre Hurtado, El Monte, Melipilla e Isla de Maipo.\nSantiago se encuentra aproximadamente en las coordenadas 33°26′16″S 70°39′01″O (a similar latitud que Ciudad del Cabo y Sídney) y a una altitud media de 567 m s. n. m.​ Con una extensión de 837,89 km²,​ Santiago contaba en 2017 con una población de 6 254 314 habitantes, lo que equivalía al 35,6 % de la población total del país.​ Santiago es la séptima área metropolitana más poblada de Hispanoamérica, también la séptima ciudad más habitada de América Latina y del hemisferio sur​ y, según algunas estimaciones, una de las 50 aglomeraciones urbanas más pobladas del mundo.​ Con sus más de 7 millones de habitantes, es el núcleo urbano más poblado de Chile, muy por delante del Gran Concepción, el Gran Valparaíso, la conurbación de La Serena-Coquimbo, el área metropolitana de Temuco y Antofagasta, que son los siguientes más poblados.\nSantiago se posiciona habitualmente como una ciudad líder en América Latina en una serie de factores sociales, económicos y ambientales. La capital chilena es la segunda ciudad más competitiva de América Latina, solo superada por São Paulo,​​ así como la tercera con mejor calidad de vida (la segunda de Sudamérica y la 90.ª del mundo)​ y la más segura de Latinoamérica. Además, es considerada como una «ciudad global de clase Alfa-»,​ y la 53.ª ciudad con mayores ingresos del mundo, con un PIB (PPA) de 91 000 millones de USD en 2005 y una estimación de 160 000 millones de USD hacia 2020.​\nAsimismo, en 2012 fue calificada como la tercera ciudad latinoamericana más competitiva —también la tercera sudamericana y la 68.ª mundial—​​ y en 2013 fue clasificada como la ciudad más inteligente de la región.​ Finalmente, según un estudio global divulgado por la Economist Intelligence Unit, Santiago sería la segunda mejor ciudad latinoamericana para vivir, luego de Buenos Aires.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Montaje_de_Santiago_de_Chile_%28202103220%29.jpg/960px-Montaje_de_Santiago_de_Chile_%28202103220%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Santiago_de_Chile",
    personajeIds: [
  "pedro-valdivia"
],
    rutaId: "conquista-chile",
  },
  {
    id: "fundacion-concepcion",
    titulo: "Concepción (Chile)",
    tipo: "fundacion",
    fecha: 1550.2,
    coordenadas: [
  -72.6,
  -36.68
],
    resumen: "Concepción es una ciudad y comuna ubicada en la zona central de Chile, a aproximadamente 450 km al sur de la capital, Santiago, y a unos 30 km al norte del Centro Geográfico de Chile continental, ubicado en la comuna de Coronel. Concepción es también el centro geográfico y demográfico del área metropolitana de Concepción, así como la capital de la provincia homónima y de la Región del Biobío. El núcleo urbano de Concepción ejerce un significativo impacto en el comercio nacional​ al ser parte de una de las regiones con mayor industrialización del país,​ y es una de las tres urbes chilenas más pobladas de la zona central, junto con la de Valparaíso, después de Santiago. Limita al norte con las comunas de Talcahuano y Penco; al sur con las comunas Chiguayante y Hualqui; al este con la comuna de Florida, al oeste con Hualpén, con el río Biobío y la comuna de San Pedro de la Paz.​\nLa ciudad fue emplazada, en primera instancia, en la Bahía de Concepción, en el territorio que después se convirtió en la comuna de Penco, actualmente parte de la conurbación de Concepción. El gentilicio de la ciudad, «penquista», hace alusión al lugar de su fundación original. El centro y casco histórico de la ciudad se encuentra en el Valle de la Mocha, donde se trasladó luego de ser destruida por un terremoto.\nEl origen de Concepción se remonta al año 1550, cuando fue fundada por Pedro de Valdivia a título de la Corona española, bajo el nombre de La Concepción de María Purísima del Nuevo Extremo, y fue la capital del Reino de Chile entre 1565 y 1573, manteniéndose luego como el centro militar y político del reino por todo el resto del periodo colonial chileno.​ Posteriormente, formó parte del primer intento independentista de Chile en 1810, a manos del abogado Juan Martínez de Rozas.​ Ha sido el centro de la conurbación más poblada del centro del país desde inicios del siglo XX, y posee como símbolo cultural la Plaza de la Independencia, lugar donde se llevó a cabo la declaración solemne sobre la secesión chilena del realismo español.\nConcepción concentra su actividad en el área de servicios y funciona como el centro financiero de toda la metrópoli.​ Es conocida por ser una ciudad universitaria, ya que posee numerosas instituciones educacionales, entre las que destacan la Universidad de Concepción, la Universidad del Bío-Bío y la Universidad Católica de la Santísima Concepción.​  La comuna alberga además variados puentes históricos, murales, parques y lagunas, así como importantes centros culturales como el Teatro Biobío, la Casa del Arte, el Museo de Historia Natural y el Teatro Universidad de Concepción. Dentro de su oferta turística, también destaca la variedad de bares y locales de entretenimiento que le brinda una activa vida nocturna a la ciudad.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/b/b5/Nuevos_trenes_Biotren.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Concepci%C3%B3n_(Chile)",
    personajeIds: [
  "pedro-valdivia"
],
    rutaId: "conquista-chile",
  },
  {
    id: "batalla-tucapel",
    titulo: "Batalla de Tucapel",
    tipo: "batalla",
    fecha: 1553.98,
    coordenadas: [
  -73.15,
  -37.75
],
    resumen: "La batalla de Tucapel (también conocido como el desastre de Tucapel) fue una pelea decisiva efectuada dentro del contexto de la guerra de Arauco entre los mapuches liderados por Lautaro y las huestes de Pedro de Valdivia en la loma de Tucapel, Chile el 25 de diciembre de 1553​ o el 1 de enero de 1554.​ Resultó en una derrota para los españoles y la captura y muerte de Valdivia. Acabó el mito de la invencibilidad española en batallas campales entre los mapuches.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e9/%C3%9Altimos_momentos_Valdivia.jpg/960px-%C3%9Altimos_momentos_Valdivia.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Tucapel",
    personajeIds: [
  "pedro-valdivia"
],
    rutaId: "conquista-chile",
  },
  {
    id: "primera-fundacion-buenos-aires",
    titulo: "Primera fundación de Buenos Aires",
    tipo: "fundacion",
    fecha: 1536.15,
    coordenadas: [-58.37, -34.61],
    resumen:
      "El 2 de febrero de 1536, Pedro de Mendoza, primer adelantado del Río de la Plata al frente de la mayor expedición española enviada hasta entonces a América, fundó el puerto de Nuestra Señora Santa María del Buen Ayre en la orilla occidental del Río de la Plata. Asediado por los pueblos originarios y el hambre, el asentamiento fue abandonado hacia 1541 y sus pobladores se trasladaron a Asunción; la ciudad no sería refundada de forma definitiva hasta 1580, por Juan de Garay.",
    articuloWiki: "https://es.wikipedia.org/wiki/Pedro_de_Mendoza",
    personajeIds: ["pedro-mendoza"],
    rutaId: "rio-de-la-plata",
  },
  {
    id: "sitio-medina-campo",
    titulo: "Guerra de las Comunidades de Castilla",
    tipo: "rebelion",
    fecha: 1520.65,
    coordenadas: [
  -4.9,
  41.31
],
    resumen: "La guerra de las Comunidades de Castilla fue el levantamiento armado de los llamados comuneros, acaecido en la Corona de Castilla desde el año 1520 hasta 1522, es decir, a comienzos del reinado de Carlos I. Las ciudades protagonistas fueron las del interior de la Meseta Central, situándose a la cabeza del alzamiento las de Segovia, Toledo y Valladolid. Su carácter ha sido objeto de agitado debate historiográfico, con posturas y enfoques contradictorios.​ Así, algunos estudiosos califican las Comunidades como una revuelta antiseñorial; otros, como una de las primeras revoluciones burguesas de la Era Moderna,​ y otra postura defiende que se trató más bien de un movimiento antifiscal y particularista, de índole medievalizante.\nEl levantamiento se produjo en un momento de inestabilidad política de la Corona, que se arrastraba desde la muerte de Isabel la Católica en 1504. En octubre de 1517, el rey Carlos I llegó a Asturias proveniente de Flandes, donde se había autoproclamado rey de sus posesiones hispánicas en 1516. A las Cortes de Valladolid de 1518 llegó sin saber hablar apenas castellano y trayendo consigo un gran número de nobles y clérigos flamencos como corte, lo que produjo recelos entre las élites sociales castellanas, que sintieron que su advenimiento les acarrearía una pérdida de poder y estatus social. Este descontento fue transmitiéndose a las capas populares y, como primera protesta pública, aparecieron pasquines en las iglesias donde podía leerse:\n\n \n\nLas demandas fiscales, coincidentes con la salida del rey para la elección imperial en Alemania tras las Cortes de Santiago y La Coruña de 1520, produjeron una serie de revueltas urbanas que se coordinaron e institucionalizaron, encontrando un candidato alternativo a la corona en la «reina propietaria de Castilla», la madre de Carlos, Juana, cuya incapacidad o locura podía ser objeto de revisión, aunque la propia Juana, de hecho, no colaborara. Tras prácticamente un año de rebelión, se habían reorganizado los partidarios del emperador —particularmente la alta nobleza y los territorios periféricos castellanos, como los reinos andaluces y Granada— y las tropas imperiales asestaron un golpe casi definitivo a las comuneras en Villalar el 23 de abril de 1521. Allí mismo, al día siguiente, se decapitó a los líderes comuneros: Padilla, Bravo y Maldonado. El ejército comunero quedaba, así, descompuesto. Solamente Toledo mantuvo viva su rebeldía, hasta su rendición definitiva casi un año después, el 3 de febrero de 1522.\nLas Comunidades han sido siempre motivo de atento estudio histórico en España, y su significado a veces ha sido mitificado y utilizado políticamente, en particular a partir de la visita del Empecinado a Villalar el 23 de abril de 1821, con motivo del tercer centenario de la derrota, tal como era sentida por los liberales. Pintores como Antonio Gisbert retrataron a los comuneros en algunas de sus obras, y se firmaron documentos como el Pacto Federal Castellano, con claras referencias a las Comunidades. Los intelectuales conservadores o reaccionarios adoptaron interpretaciones mucho más favorables a la postura imperial y críticas hacia los comuneros. A partir de la segunda mitad del siglo xx, se revitalizaron los estudios históricos utilizando una metodología renovada.\nMás recientemente, en el plano político, desde principios de la transición a la democracia, se comenzó a conmemorar la derrota cada 23 de abril, alcanzando finalmente, con la conformación de Castilla y León como autonomía, el estatus de Día de la Comunidad. Asimismo, su utilización como elemento simbólico está muy presente en los movimientos castellanistas y regionalistas castellanoleoneses. Ha tenido una notable difusión popular mediante el poema épico Los comuneros, de Luis López Álvarez, musicalizado por el Nuevo Mester de Juglaría.​",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Los_comuneros_Padilla%2C_Bravo_y_Maldonado_en_el_pat%C3%ADbulo_por_Antonio_Gisbert.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_las_Comunidades_de_Castilla",
    personajeIds: [
  "juan-padilla"
],
    rutaId: "guerra-comunidades",
  },
  {
    id: "batalla-villalar",
    titulo: "Batalla de Villalar",
    tipo: "batalla",
    fecha: 1521.32,
    coordenadas: [
  -5.1,
  41.53
],
    resumen: "La batalla de Villalar fue un enfrentamiento armado librado durante la guerra de las Comunidades de Castilla que enfrentó el 23 de abril de 1521 en Villalar a las fuerzas realistas partidarias del rey Carlos I de España, capitaneadas por Íñigo Fernández de Velasco y Mendoza, condestable castellano que ejercía de gobernador del reino por la ausencia del monarca,​ y las comuneras de la Santa Junta conformada en Ávila en julio del año anterior.\nLas consecuencias del enfrentamiento fueron profundas, ya que la derrota comunera y el ajusticiamiento de sus líderes un día después puso fin casi por completo al conflicto —excepto en Toledo, donde la resistencia se prolongó hasta febrero de 1522—.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/2d/BatallaDeVillalar.jpg/960px-BatallaDeVillalar.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Villalar",
    personajeIds: [
  "juan-padilla"
],
    rutaId: "guerra-comunidades",
  },
  {
    id: "batalla-pavia",
    titulo: "Batalla de Pavía",
    tipo: "batalla",
    fecha: 1525.15,
    coordenadas: [
  9.16,
  45.18
],
    resumen: "La batalla de Pavía se libró el 24 de febrero de 1525 entre el ejército francés al mando del rey Francisco I y las tropas germano-españolas del emperador Carlos I de España, con victoria de estas últimas, en las proximidades de la ciudad italiana de Pavía.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d3/Battle_of_Pavia%2C_oil_on_panel.jpg/960px-Battle_of_Pavia%2C_oil_on_panel.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Pav%C3%ADa",
    personajeIds: [
  "marques-pescara",
  "carlos-i"
],
    rutaId: "guerras-italianas",
  },
  {
    id: "saco-de-roma",
    titulo: "Saco de Roma",
    tipo: "batalla",
    fecha: 1527.4,
    coordenadas: [
  12.48,
  41.9
],
    resumen: "El Saco de Roma​ (también conocida como El saqueo de Roma) es la denominación con la que se conoce el saqueo que llevaron a cabo en la ciudad de Roma las amotinadas tropas alemanas y españolas de Carlos V el 6 de mayo de 1527. Este hecho señaló una victoria imperial crucial en el conflicto entre el emperador y la Liga de Cognac (la alianza formada por el Papado, Francia, Milán, Venecia y Florencia firmada el 2 de mayo de 1526).\n«Saco» es la adaptación al castellano de la voz italiana sacco, que significa literalmente «saqueo».​",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Sack_of_Rome_1527.jpeg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Saco_de_Roma",
    personajeIds: [
  "carlos-i"
],
    rutaId: "guerras-italianas",
  },
  {
    id: "paz-cambrai",
    titulo: "Paz de Cambrai",
    tipo: "tratado",
    fecha: 1529.65,
    coordenadas: [
  3.23,
  50.18
],
    resumen: "La Paz de Cambrai o Paz de las Damas fue el tratado firmado entre el Sacro Imperio y Francia en la ciudad homónima el 5 de agosto de 1529.\nLa paz de Cambrai fue firmada entre Luisa de Saboya, en nombre de su hijo Francisco I de Francia, y Margarita de Austria, en nombre de su sobrino el emperador Carlos V, por eso se le conoce también como la Paz de las Damas.\nCon ella se pretendía poner fin a la Guerra de la Liga de Cognac. El Emperador renunciaba a sus derechos sobre el ducado de Borgoña. Francisco I hacía lo propio sobre las regiones de Flandes, Artois y Lens.​  Abandonando además sus pretensiones sobre Italia.\nTambién se negoció la liberación de los príncipes franceses Francisco y Enrique (que luego sería Enrique II de Francia), hijos del rey francés, que estaban rehenes en Madrid en cumplimiento de tratado de Madrid (1526) a cambio del pago de dos millones de escudos.\nLuisa y Margarita estaban emparentadas ya que Margarita después de quedar viuda del Príncipe heredero Juan de Aragón y Castilla (hijo de los Reyes Católicos) fue desposada con Filiberto II de Saboya hermano de Luisa. Ambas eran cuñadas.\nMeses después del tratado las tropas españolas abandonarían en 1530 la Baja Navarra por su difícil defensa,​ recuperada por Enrique II de Navarra.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/03/Bernaerd_van_Orley_002.jpg/960px-Bernaerd_van_Orley_002.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Paz_de_Cambrai",
    personajeIds: [
  "carlos-i"
],
    rutaId: "guerras-italianas",
  },
  {
    id: "caida-vilcabamba",
    titulo: "Caída de Vilcabamba",
    tipo: "batalla",
    fecha: 1572.5,
    coordenadas: [-73.03, -13.13],
    resumen:
      "En junio de 1572, tropas al mando de Martín García Óñez de Loyola, enviadas por el virrey Francisco de Toledo, asaltaron Vilcabamba, la remota capital selvática del Estado neoinca fundado por Manco Inca. Su último soberano, Túpac Amaru I, fue capturado en la huida y ejecutado en el Cuzco meses después, poniendo fin a treinta y seis años de resistencia inca organizada frente a la dominación española.",
    articuloWiki: "https://es.wikipedia.org/wiki/Vilcabamba_La_Vieja",
    personajeIds: ["onez-loyola", "francisco-toledo"],
    rutaId: "resistencia-vilcabamba",
  },
  {
    id: "rebelion-manco-inca",
    titulo: "Rebelión de Manco Inca",
    tipo: "rebelion",
    fecha: 1536.4,
    coordenadas: [-72.0, -13.35],
    resumen:
      "En abril de 1536, el inca títere Manco Inca Yupanqui, que hasta entonces había colaborado con los Pizarro, se alzó en armas y puso sitio al Cuzco durante casi un año. Tras el fracaso del cerco, se retiró con sus partidarios a la remota región selvática de Vilcabamba, donde fundó un reducido Estado neoinca que resistió la dominación española durante treinta y seis años más, hasta su caída definitiva en 1572.",
    articuloWiki: "https://es.wikipedia.org/wiki/Manco_Inca_Yupanqui",
    personajeIds: ["pizarro"],
    rutaId: "resistencia-vilcabamba",
  },
  {
    id: "batalla-lepanto",
    titulo: "Batalla de Lepanto",
    tipo: "batalla",
    fecha: 1571.77,
    coordenadas: [
  21.13,
  38.31
],
    resumen: "La batalla de Lepanto (en italiano: Battaglia di Lepanto; en turco: İnebahtı deniz muharebesi, 'batalla naval de İnebahtı') fue un combate naval que tuvo lugar el 7 de octubre de 1571 en el golfo de Patras, cerca de la ciudad griega de Naupacto, en ese entonces conocida como Lepanto.​\nSe enfrentaron en ella la armada del Imperio otomano contra la coalición católica organizada por el papa Pío V, llamada Liga Santa, formada por el Imperio español, los Estados Pontificios, la República de Venecia, la Orden de Malta, la República de Génova y el Ducado de Saboya. Las fuerzas otomanas navegaban hacia el oeste desde su estación naval en Lepanto cuando se encontraron con la flota de la Liga Santa que navegaba hacia el este desde Mesina, en Sicilia. El Imperio español y la República veneciana eran las principales potencias de la coalición, ya que la liga estaba financiada en gran parte por Felipe II de España, y Venecia era el principal contribuyente de barcos.​\nLos católicos, liderados por Juan de Austria, resultaron victoriosos, y se salvaron tan solo treinta galeras otomanas. Se frenó así el expansionismo otomano en el Mediterráneo oriental durante algunas décadas y se provocó que los corsarios aliados de los otomanos abandonaran sus ataques y expansiones hacia el Mediterráneo occidental.​ Los turcos reconstruyeron rápidamente su flota, pero las enormes pérdidas de tripulaciones experimentadas en Lepanto ocasionaron que la marina otomana perdiera su iniciativa naval a partir de la década de 1580.​\nFue la mayor batalla naval de la historia occidental desde la antigüedad clásica, con más de 400 barcos de guerra. Marcó además el último gran enfrentamiento en el mundo occidental que se libró casi en su totalidad entre naves de remo,​ específicamente las galeras y galeazas, descendientes directas de los antiguos barcos de guerra trirreme. La batalla fue en esencia una «batalla de infantería sobre plataformas flotantes».​ En las décadas siguientes, el galeón desplazaría a la galera como principal navío de guerra de su época, demonstrado de nuevo por españoles e italianos en la batalla del cabo Celidonia, que fue considerada un epílogo para Lepanto.​\n\nLa victoria de la Liga Santa es de gran importancia en la historia de Europa y del Imperio Otomano, ya que marcó el punto de inflexión de la expansión militar otomana en el Mediterráneo, si bien las guerras otomanas en Europa continuarían durante otro siglo. Durante mucho tiempo se le ha comparado con la batalla de Salamina, tanto por los paralelismos tácticos como por su importancia crucial en la defensa de Europa contra la expansión imperial.​ También tuvo una gran importancia simbólica en un periodo en el que Europa estaba desgarrada por sus propias guerras de religión tras la Reforma Protestante. El Papa Pío V instituyó la fiesta de Nuestra Señora de la Victoria, y Felipe II de España utilizó la victoria para reforzar su posición como «Rey Católico» y defensor de la cristiandad contra la incursión musulmana.​ El historiador Paul K. Davis escribe que:Más que una victoria militar, Lepanto fue una victoria moral. Durante décadas, los turcos otomanos habían aterrorizado a Europa, y las victorias de Solimán el Magnífico provocaron una gran preocupación en la Europa cristiana. La derrota en Lepanto ejemplificó aún más el rápido deterioro del poderío otomano bajo Selim II, y los cristianos se regocijaron de este revés para los otomanos. La mística del poder otomano se vio empañada significativamente por esta batalla, y la Europa cristiana se animó.​En esta batalla participó Miguel de Cervantes, que resultó herido y perdió la movilidad de su mano izquierda, lo que le valió el sobrenombre de «manco de Lepanto». Este escritor, que estaba muy orgulloso de haber combatido allí, la calificó como «la más memorable y alta ocasión que vieron los pasados siglos, ni esperan ver los venideros».​​​ También introdujo la historia en el Quijote, a través de la narración del cautivo, como típica obra de literatura de frontera.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Spanish_School_-_Battle_of_Lepanto_Victorious_ships_entering_the_Port_of_Messina_%28oil_on_canvas%29_-_%28MeisterDrucke-1423651%29.jpg/960px-Spanish_School_-_Battle_of_Lepanto_Victorious_ships_entering_the_Port_of_Messina_%28oil_on_canvas%29_-_%28MeisterDrucke-1423651%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Lepanto",
    personajeIds: [
  "juan-austria"
],
    rutaId: "lepanto",
  },
  {
    id: "fundacion-san-miguel-cebu",
    titulo: "Capitanía general de Filipinas",
    tipo: "fundacion",
    fecha: 1565.3,
    coordenadas: [
  123.89,
  10.32
],
    resumen: "La capitanía general de Filipinas (en tagalo: Kapitaniya Heneral ng Pilipinas), también conocida como Reino de Filipinas, es un antiguo territorio español perteneciente al virreinato de Nueva España, con sede en Manila, que existió desde 1571 hasta 1898.​\nLa capitanía fue establecida por la Monarquía Hispánica en las Indias Orientales Españolas. Además del archipiélago filipino, incluía la isla de Palaos, las Islas Marianas (actuales territorios estadounidenses de Guam y Marianas del Norte) y las Islas Carolinas (actuales Estados Federados de Micronesia). El virrey de Nueva España, con sede en la Ciudad de México, ejercía sobre estos territorios atribuciones relativas a asuntos económicos, ya que en lo demás el capitán general trataba directamente con el rey y el Consejo de Indias.\nFilipinas fue territorio español hasta finales de 1898. El 12 de junio de 1898 los filipinos bajo el mando del general Emilio Aguinaldo declararon su efímera independencia. El 10 de diciembre de 1898, por el Tratado de París se puso fin a la guerra hispano-estadounidense, y las Filipinas y Guam fueron cedidas a los Estados Unidos. Las Marianas (salvo Guam), Carolinas y Palaos fueron vendidas al Imperio alemán por el Tratado germano-español de 12 de febrero de 1899.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7d/Flag_of_Spain_%281785%E2%80%931873%2C_1875%E2%80%931931%29.svg/960px-Flag_of_Spain_%281785%E2%80%931873%2C_1875%E2%80%931931%29.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Capitan%C3%ADa_general_de_Filipinas",
    personajeIds: [
  "legazpi"
],
    rutaId: "filipinas-legazpi",
  },
  {
    id: "descubrimiento-tornaviaje",
    titulo: "Tornaviaje",
    tipo: "descubrimiento",
    fecha: 1565.45,
    coordenadas: [
  -121.9,
  36.6
],
    resumen: "El tornaviaje es, literalmente, el «viaje de regreso».​ Entre los tornaviajes históricos más destacados se encuentra el de Cristóbal Colón, quien, aprovechando los vientos alisios a la altura de las islas Canarias para su viaje hacia el Nuevo Continente, sabía que para su tornaviaje​ contaría con lo que más tarde, hacia finales del siglo XVIII, se llamaría la corriente del Golfo,​ aunque fue documentada por primera vez en 1513 por Antón de Alaminos, el piloto de Juan Ponce de León, poco después de descubrir las costas de Florida.​\n\n \n\nPor otra parte, una vez descubierto el archipiélago filipino y la ruta para llegar a él a través del paso en el extremo meridional de América por Magallanes en su expedición (1519-1522), interesaba descubrir la ruta de retorno hacia el este hasta América, ya que el Tratado de Tordesillas impedía a España el establecimiento de una ruta marítima por el oeste, porque pasaría por la zona de jurisdicción portuguesa.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4c/Andres_Urdaneta_Tornaviaje.jpg/960px-Andres_Urdaneta_Tornaviaje.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Tornaviaje",
    personajeIds: [
  "urdaneta"
],
    rutaId: "filipinas-legazpi",
  },
  {
    id: "fundacion-manila",
    titulo: "Manila",
    tipo: "fundacion",
    fecha: 1571.45,
    coordenadas: [
  120.98,
  14.6
],
    resumen: "Manila (en pampango: Menila; en zambal: Ibali), oficialmente Ciudad de Manila (Filipino: Lungsod ng Maynila), es la capital de Filipinas y la segunda ciudad del país por número de habitantes, después de Ciudad Quezon.​\nLa ciudad está situada en la costa oriental de la bahía de Manila, en la isla de Luzón, junto a la desembocadura del río Pásig; la ciudad limita al norte con las ciudades de Navotas y Caloocan; al nordeste con Ciudad Quezon; al este con San Juan y Mandaluyong; al sudeste con Makati y al sur con Pasay.\nManila tiene una población total de 1 652 171 de acuerdo con el censo de 2013,​ siendo la segunda ciudad más poblada del país después de la cercana Ciudad Quezon. La población habita un área de apenas 38,55 kilómetros cuadrados (14,88 mi²), lo que hace a Manila una de las ciudades más densamente pobladas del mundo.​\nEl Gran Manila es el área metropolitana más poblada de toda Filipinas ​ y la décima del mundo, con una población estimada en 20,5 millones.​\nLa ciudad se divide en seis distritos legislativos y consiste en dieciséis distritos geográficos: Binondo, Ermita, Intramuros, Malate, Paco, Pandacán, Port Area, Quiapo, Sampaloc, San Andrés, San Miguel, San Nicolás, Santa Ana, Santa Cruz, Santa Mesa y Tondo. El comercio más activo y algunos de los lugares más históricos y emblemáticos de gran importancia cultural en el país, como la sede del Ejecutivo filipino y la Suprema Corte de las Filipinas, se encuentran en esta ciudad. Manila es sede de varias instituciones científicas y educativas, numerosas instalaciones deportivas, así como de un amplio elenco de entidades culturales del país y otros lugares cultural e históricamente significativos.\nEl primer relato escrito acerca de la ciudad es la Inscripción de la Laguna Copperplate, que data del siglo X. La ciudad fue invadida por Bolkiah, sultán de Brunéi, y fue cristianizada ya en el siglo XVI, cuando los conquistadores españoles llegaron por primera vez. Fue incorporada el 24 de junio de 1571 por el conquistador español Miguel López de Legazpi. Manila se convirtió finalmente en el centro de las actividades españolas en Extremo Oriente y destino de la ruta comercial del Galeón de Acapulco a Manila, el cual conectaba a la América Española con Asia. \nLa ciudad recibió el apodo de la «perla de Oriente», como resultado de su ubicación central en las vitales rutas del comercio marítimo por el Pacífico. Varias insurrecciones chinas, revueltas locales, una ocupación británica y un motín cipayo se produjeron tiempo después de eso. Manila también vio el surgimiento de la Revolución filipina, que fue seguida por la ocupación estadounidense, contribuyendo a la planificación urbana de la ciudad y al desarrollo solo para que la mayoría de dichas mejoras se perdiera por la devastación de la Segunda Guerra Mundial. Después de esto, la ciudad ha sido reconstruida.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/f1/Manila_Harbour_View_by_night_%28Thomas_Yie%29_-_Flickr.jpg/960px-Manila_Harbour_View_by_night_%28Thomas_Yie%29_-_Flickr.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Manila",
    personajeIds: [
  "legazpi"
],
    rutaId: "filipinas-legazpi",
  },
  {
    id: "batalla-alcantara-1580",
    titulo: "Batalla de Alcántara (1580)",
    tipo: "batalla",
    fecha: 1580.65,
    coordenadas: [
  -9.13,
  38.72
],
    resumen: "La batalla de Alcántara, librada el 25 de agosto de 1580, fue una victoria del ejército español, con portugueses leales, comandado por Fernando Álvarez de Toledo y Pimentel, III duque de Alba de Tormes, sobre las tropas portuguesas del pretendiente Antonio, prior de Crato, en la freguesia de Alcântara, cerca de Lisboa, Portugal.\nComo consecuencia de esta batalla, el rey Felipe II de España fue reconocido rey de Portugal como Felipe I, en una unión dinástica con los demás reinos hispánicos que se prolongó hasta 1640, y que significó el apogeo del Imperio español.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b2/Batalha_de_Alc%C3%A2ntara.jpg/960px-Batalha_de_Alc%C3%A2ntara.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Alc%C3%A1ntara_(1580)",
    personajeIds: [
  "duque-alba"
],
    rutaId: "union-iberica",
  },
  {
    id: "cortes-tomar",
    titulo: "Cortes de Tomar",
    tipo: "tratado",
    fecha: 1581.3,
    coordenadas: [
  -8.42,
  39.6
],
    resumen: "Las Cortes de Tomar de 1581 fueron concebidas por el Rey Felipe II de España para tranquilizar a los tres estados de Portugal que en aquellos momentos no tenían plena confianza en el soberano.\nRestablecido de una epidemia, Felipe II partió de Badajoz a Elvas en 1580. El monarca estaba inquieto en lo que respecta al tercer estado, el pueblo. Al partir de Elvas ya en 1581 y pasando por Arronches, Crato y Ponte de Sor llegó a Tomar, donde iban a ser establecidas las Cortes.\nEl rey estaba asediado por los que le pedían el pago de sus servicios políticos que lo elevaron a su condición distinguida. Así veía Felipe II realizado su sueño ibérico. Días después aparecía en la puerta del Convento de Cristo el famoso edicto en el cual Felipe II indultaba a las personas relacionadas con la rebelión del prior de Crato contra su legítima autoridad. A raíz de esto los tres estados le pidieron al rey que les concediese los privilegios que les había prometido anteriormente. El rey les respondió diciendo que les haría llegar la respectiva carta de registro. \nEn las Cortes de Tomar de 1581, Felipe II intentó obtener el apoyo de los tres estados y para concretar la unión dinástica con Portugal tuvo que someterse a lo siguiente:\n\nRespetar las libertades, privilegios, usos y costumbres de la monarquía portuguesa.\nReunir las Cortes siempre en Portugal y mantener las leyes portuguesas.\nLos cargos de virrey o gobernador de Portugal deberán ser mantenidos por portugueses o miembros de la familia real.\nLos cargos previstos para la Corte y la administración general del Reino serán siempre ocupados por portugueses.\nLos portugueses podrán también ocupar funciones públicas en Castilla.\nEl comercio de la India y Guinea solo podrá llevarse a cabo por portugueses.\nNo podrán ser concedidos títulos de ciudades o villas si no son a portugueses.\nLa lengua de las actas y documentos oficiales será en portugués.\nTodos los años serán creadas doscientas nuevas viviendas (serán entregadas a los hidalgos a partir de los doce años) y la Reina deberá tener siempre como damas nobles portuguesas.\nLas guarniciones castellanas serán retiradas.\nAsí quedaron acautelados los intereses de las clases altas, y Portugal pasará a ser gobernada bajo la forma de unión personal, manteniendo su soberanía, instituciones y privilegios. Se trata, pues, de una unión dinástica, no territorial, ya que no se producirá una homogeneización administrativa y jurídica.\nDespués de las Cortes de Tomar, Felipe II de Habsburgo fue proclamado Felipe I de Portugal logrando una unión dinástica.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Philip_II.jpg/960px-Philip_II.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Cortes_de_Tomar",
    personajeIds: [
  "felipe-ii"
],
    rutaId: "union-iberica",
  },
  {
    id: "batalla-gravelinas",
    titulo: "Batalla de Gravelinas",
    tipo: "batalla",
    fecha: 1588.6,
    coordenadas: [
  2.1,
  51
],
    resumen: "La batalla de Gravelinas tuvo lugar el 13 de julio de 1558, en el pueblo de Gravelinas, cerca de Calais, marcando el final de la guerra entre Francia y el Imperio español, que se prolongó desde el año 1547 hasta 1559.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4a/Pieter_Snayers_Siege_of_Gravelines.jpg/960px-Pieter_Snayers_Siege_of_Gravelines.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Gravelinas",
    personajeIds: [
  "medina-sidonia"
],
    rutaId: "armada-invencible",
  },
  {
    id: "rebelion-alpujarras",
    titulo: "Rebelión de las Alpujarras",
    tipo: "rebelion",
    fecha: 1568.98,
    coordenadas: [
  -3.35,
  36.95
],
    resumen: "La rebelión de las Alpujarras fue un conflicto acontecido en España entre 1568 y 1571 durante el reinado de Felipe II. La abundante población morisca del Reino de Granada se alzó en armas en protesta contra la Pragmática Sanción de 1567, que limitaba sus libertades culturales. Cuando el poder real consiguió vencer a los sublevados, se decidió deportar a los moriscos supervivientes a varios puntos del resto de la Corona de Castilla, cuya población morisca pasó de veinte mil a cien mil personas.​ Por la gravedad y la intensidad de sus combates también se le conoce como la Guerra de las Alpujarras. Felipe II quedó sobrecogido ante las masacres de sacerdotes llevadas a cabo por los rebeldes. Aparte de las muertes y de las expulsiones, miles fueron vendidos como esclavos dentro de España. En la Córdoba de 1573 había unos mil quinientos esclavos moriscos.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/e/e0/Rebeli%C3%B3n_de_Las_Alpujarras.svg/960px-Rebeli%C3%B3n_de_Las_Alpujarras.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Rebeli%C3%B3n_de_las_Alpujarras",
    personajeIds: [
  "juan-austria"
],
    rutaId: "alpujarras",
  },
  {
    id: "ejecucion-egmont-horn",
    titulo: "Guerra de los Ochenta Años",
    tipo: "rebelion",
    fecha: 1568.42,
    coordenadas: [
  4.35,
  50.85
],
    resumen: "La guerra de los Ochenta Años (también conocida como la revuelta neerlandesa, o en España como la guerra de Flandes) fue un conflicto que enfrentó a algunas de las Diecisiete Provincias de los Países Bajos contra su soberano Felipe II de España. La rebelión comenzó en el año 1568, en tiempos de Margarita de Parma, gobernadora de los Países Bajos españoles, y finalizó en el 1648 con el reconocimiento de la independencia de las siete Provincias Unidas, hoy conocidas como los Países Bajos. Como pretexto, las relaciones de Margarita con la nobleza neerlandesa protestante nunca fueron del todo fluidas. Este hecho, sumado a su inoperancia y a la distancia existente entre ambos países, hizo que se fueran alejando cada vez más de la política española en busca de sus intereses económicos y políticos con un aire de independencia que comenzaba a gestarse en el ambiente. Los países que hoy se conocen como Bélgica y Luxemburgo formaban parte de las Diecisiete Provincias, pero permanecieron leales a la Corona (los territorios bajo el dominio del Obispado de Lieja no formaban parte de las Diecisiete Provincias, sino directamente estaban en el Sacro Imperio Romano Germánico).\nEl resultado final de la guerra de los Ochenta Años fue la independencia oficial de los Países Bajos tras la Paz de Westfalia; pero no está tan claro que esta fuera la causa de la guerra. Esta fue el resultado final de las discrepancias entre la Monarquía Hispánica y la parte de los súbditos a los que tenían que gobernar en estas provincias. \nLas Provincias Unidas emergieron de la guerra como una potencia mundial gracias a su poderosa armada y flota mercante, y experimentaron un importante auge económico y cultural.\nPara la Corona española, la independencia de las Provincias Unidas representó una gran pérdida de prestigio. El mantenimiento económico de la guerra durante un periodo tan prolongado contribuyó en gran parte a provocar las sucesivas bancarrotas de la Corona española a lo largo de los siglos XVI y XVII, y al hundimiento de la economía de España.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/4e/Vel%C3%A1zquez_-_de_Breda_o_Las_Lanzas_%28Museo_del_Prado%2C_1634-35%29.jpg/960px-Vel%C3%A1zquez_-_de_Breda_o_Las_Lanzas_%28Museo_del_Prado%2C_1634-35%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_los_Ochenta_A%C3%B1os",
    personajeIds: [
  "duque-alba"
],
    rutaId: "guerra-flandes",
  },
  {
    id: "guerra-treinta-anos",
    titulo: "Guerra de los Treinta Años",
    tipo: "batalla",
    fecha: 1618.4,
    coordenadas: [
  14.42,
  50.09
],
    resumen: "La guerra de los Treinta Años fue una guerra librada en la Europa Central (principalmente el Sacro Imperio Romano Germánico) entre los años 1618 y 1648, en la que intervinieron la mayoría de las grandes potencias europeas de la época. Este conflicto marcó el futuro del conjunto de Europa en los siglos posteriores.​​ Conflictos relacionados incluyen la guerra de los Ochenta Años, la guerra de Sucesión de Mantua, la guerra franco-española, la guerra de Torstenson, la guerra luso-neerlandesa y la guerra de Restauración portuguesa.\nAunque inicialmente se trataba de un conflicto político-religioso entre Estados partidarios de la reforma y la contrarreforma dentro del propio Sacro Imperio Romano Germánico (SIRG), la intervención paulatina de las distintas potencias europeas convirtió gradualmente el conflicto en una guerra general por toda Europa, por razones no necesariamente relacionadas con la religión:​ búsqueda de una situación de equilibrio político, alcanzar la hegemonía en el escenario europeo, enfrentamiento con una potencia rival, etc.\nLa Paz de Augsburgo de 1555 había intentado resolver el conflicto religioso dentro del Sacro Imperio dividiéndolo en Estados católicos y luteranos, pero esta resolución fue desestabilizada posteriormente por la expansión del protestantismo más allá de esos límites. Combinado con desacuerdos sobre los límites de la autoridad imperial, la religión fue de esta manera un factor importante en el estallido de la guerra. Sin embargo, su alcance fue en gran medida consecuencia de fuerzas externas como la rivalidad Francia-Habsburgo y la Revuelta neerlandesa.\nLa guerra empezó en 1618, cuando el emperador católico Fernando II fue reemplazado como rey de Bohemia por el protestante Federico V del Palatinado. Si bien Federico fue derrocado prontamente, su participación significó que los combates se expandieron hacia el Palatinado. Su importancia estratégica provino de las Provincias Unidas de los Países Bajos y el Imperio español, para entonces envueltos en la guerra de los Ochenta Años, mientras que la adquisición de territorios imperiales le dio a gobernantes como Cristián IV de Dinamarca o Gustavo Adolfo de Suecia motivos renovados para intervenir. Estos factores, junto con los miedos protestantes de que su religión estaba amenazada, transformaron una disputa dinástica interna en un conflicto más amplio.\nLa guerra de los Treinta Años llegó a su final con la Paz de Westfalia y la Paz de los Pirineos, y supuso el punto culminante de la rivalidad entre Francia y los territorios de los Habsburgo (el Imperio español y el Sacro Imperio Romano Germánico) por la hegemonía en Europa, que conduciría en años posteriores a nuevas guerras entre ambas potencias.\nEl mayor impacto de esta guerra, en la que se usaron mercenarios de forma generalizada, fue la total devastación de lugares enteros que fueron esquilmados por los ejércitos necesitados de suministros. Los continuos episodios de hambrunas y enfermedades diezmaron la población civil de los Estados alemanes y, en menor medida, de los Países Bajos e Italia, además de llevar a la bancarrota a muchas de las potencias implicadas.​ Aunque la guerra duró treinta años, los conflictos que la generaron siguieron sin resolverse durante mucho tiempo.​\nDurante el curso de esta, la población del Sacro Imperio se vio reducida en un 30 %.​ En Brandeburgo se llegó al 50 %, y en otras regiones incluso a dos tercios. La población masculina en Alemania disminuyó a la mitad. En los Países Checos la población cayó en un tercio a causa de la guerra, el hambre, las enfermedades y la expulsión masiva de checos protestantes. Solo los ejércitos suecos destruyeron durante la guerra dos mil castillos, dieciocho mil villas y mil quinientos pueblos en Alemania.​​​​\nEn el territorio del Sacro Imperio Romano Germánico, que se convirtió en el principal teatro de operaciones, la larga serie de conflictos que forman la guerra pueden dividirse en cinco etapas diferenciadas:\n\nrevuelta bohemia e intervención imperial (1618-1620)\ncampañas militares en el Palatinado (1620-1624)\nintervención danesa (1625-1629)\nintervención sueca (1630-1635)\nintervención francesa (1635-1648)\nLos conflictos fuera de Alemania tomaron la forma de guerras locales: \n\nguerra de los Ochenta Años\nguerra de la Valtelina\nguerra anglo-española\nguerra genovesa-saboyana\nguerra polaco-sueca\nguerra anglo-francesa\nguerra de Sucesión de Mantua\nguerra ruso-polaca\nguerra polaco-otomana\nguerra franco-española\nguerra de Restauración portuguesa\nguerra de Torstenson\nSigfried Steinberg también marca la guerra de los Treinta Años como doce guerras interrumpidas por la tregua y la paz.​ La guerra de los Treinta Años no fue un único conflicto de 30 años de duración sin interrupciones. Durante este período se desencadenaron 13 guerras y se firmaron 10 tratados de paz.​ Los historiadores de la época del siglo XVII consideraron cada uno de estos conflictos por separado en lugar de una única guerra. El nombre «Guerra de los Treinta Años» se acuñó a finales del siglo XVII.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/3/35/Batalla_de_N%C3%B6rdlingen_III%2C_Peter_Snayers.jpg/960px-Batalla_de_N%C3%B6rdlingen_III%2C_Peter_Snayers.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_los_Treinta_A%C3%B1os",
    personajeIds: [
  "spinola"
],
    rutaId: "treinta-anos",
  },
  {
    id: "sitio-breda",
    titulo: "Sitio de Breda (1624-1625)",
    tipo: "batalla",
    fecha: 1624.7,
    coordenadas: [4.78, 51.59],
    resumen:
      "Entre agosto de 1624 y junio de 1625, Ambrosio Spínola sitió con los tercios españoles la plaza fuerte de Breda, una de las más importantes de las Provincias Unidas rebeldes, hasta forzar la rendición del gobernador holandés Justino de Nassau. La victoria, inmortalizada por Velázquez en «Las lanzas», fue uno de los mayores éxitos militares españoles de la Guerra de los Ochenta Años, aunque la ciudad volvería a manos holandesas en 1637.",
    articuloWiki: "https://es.wikipedia.org/wiki/Sitio_de_Breda",
    personajeIds: ["spinola"],
    rutaId: "treinta-anos",
  },
  {
    id: "guerra-segadors",
    titulo: "Sublevación de Cataluña",
    tipo: "rebelion",
    fecha: 1640.5,
    coordenadas: [
  2.15,
  41.39
],
    resumen: "La sublevación de Cataluña, revuelta de los catalanes, guerra de Cataluña o guerra de los Segadores (en catalán: guerra dels Segadors) afectó a gran parte de Cataluña entre los años 1640 y 1652 y llegó a su fin en 1659. Tuvo como efecto más duradero la firma del Tratado de los Pirineos entre la monarquía española y la francesa, por el que el condado del Rosellón y la mitad del condado de Cerdaña, hasta aquel momento partes integrantes del principado de Cataluña, uno de los territorios de España, pasaron a la soberanía del Reino de Francia.\nLa sublevación comienza con el Corpus de Sangre del 7 de junio de 1640, explosión de violencia en Barcelona (cuyo hecho más trascendente es el asesinato del conde de Santa Coloma, noble catalán y virrey de Cataluña) protagonizada por campesinos y segadores que se sublevaron debido a los abusos cometidos por el ejército real, compuesto por mercenarios de diversas procedencias, desplegado en el Principado a causa de la guerra con la Monarquía de Francia, enmarcada dentro de la guerra de los Treinta Años (1618-1648).\nLos sublevados justificaron la rebelión principalmente con argumentos religiosos, acusando al Ejército Real de haber cometido sacrilegios. Se acusó, de modo especial, al tercio mandado por el napolitano Leonardo Molas​ de haber robado e incendiado la iglesia de Riudarenas con el Santísimo Sacramento. Polemistas de la época como Francisco de Quevedo o Pedro Calderón de la Barca (que fue uno de los soldados allí acantonados) negaron esta imputación,​ afirmando que nada tenía que ver la rebelión de los catalanes con la defensa de la religión, pues los Tercios combatían por ella, y que el origen del conflicto había sido la negativa de los paisanos a dar alojamiento a los soldados.​",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/2/21/Asediodebarcelona1652_nuevo.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Sublevaci%C3%B3n_de_Catalu%C3%B1a",
    personajeIds: [],
    rutaId: "rebeliones-1640",
  },
  {
    id: "restauracion-portugal",
    titulo: "Guerra de Restauración portuguesa",
    tipo: "rebelion",
    fecha: 1640.98,
    coordenadas: [
  -9.14,
  38.71
],
    resumen: "La guerra de Restauración portuguesa (en portugués: Guerra da Restauração) enfrentó a Portugal con el resto de reinos, estados y señoríos hispánicos. Esta contienda comenzó con el levantamiento a favor de la restauración de la independencia el 1 de diciembre de 1640 —que puso fin a la monarquía dual de los Habsburgo, que databa de 1580— y terminó con el Tratado de Lisboa de 1668, firmado por Alfonso VI de Portugal y Carlos II de España, en el cual se reconoció la total independencia de Portugal. El alzamiento de 1640 y la dilatada guerra que desencadenó pusieron fin a un periodo de sesenta años de dominio de la Casa de Austria en Portugal.​​\nEl período de 1640 a 1668 se caracterizó por enfrentamientos periódicos entre Portugal y España, tanto pequeñas contiendas como graves conflictos armados, muchos de los cuales implicaron a potencias no ibéricas. España participó en la guerra de los Treinta Años hasta 1648 y en la guerra franco-española hasta 1659, mientras que Portugal participó en la guerra luso-neerlandesa hasta 1663. El frente se mantuvo estático y, por parte española, fundamentalmente a la defensiva hasta 1660, dada la prioridad que la corte hispánica otorgó a sofocar la sublevación de Cataluña.​ Las principales plazas no cambiaron de manos.​\nLa guerra estableció la Casa de Braganza como nueva dinastía reinante de Portugal, en sustitución de los Austrias. Esto puso fin a la llamada Unión Ibérica.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/7/79/Joao_IV_proclaimed_king-modificated.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_Restauraci%C3%B3n_portuguesa",
    personajeIds: [],
    rutaId: "rebeliones-1640",
  },
  {
    id: "guerra-sucesion-espanola",
    titulo: "Guerra de sucesión española",
    tipo: "batalla",
    fecha: 1701.6,
    coordenadas: [
  -3.7,
  40.42
],
    resumen: "La guerra de sucesión española​ fue una guerra internacional entre grandes potencias europeas que duró desde 1701 hasta la firma del Tratado de Utrecht en 1714. Tuvo como causa fundamental la muerte sin descendencia de Carlos II de España, último representante de la Casa de Habsburgo, en noviembre de 1700, lo que dio lugar a una lucha por el control del Imperio español entre los partidarios de las dinastías reclamantes de los Borbones y los Habsburgo. Su heredero oficial era Felipe de Anjou, nieto de Luis XIV de Francia, cuyos principales partidarios eran Francia y la mayor parte de España. Su rival, el archiduque Carlos de Austria, contaba con el apoyo de la Gran Alianza, cuyos principales miembros incluían a Austria, las Provincias Unidas y Gran Bretaña. La guerra dejó como principal consecuencia la instauración de la casa de Borbón en el trono de España.​ Entre los conflictos relacionados importantes se incluyen la Gran Guerra del Norte de 1700 a 1721 y la Guerra de la reina Ana en América del Norte.\nSi bien para 1701 España ya no era la potencia europea predominante, su imperio global todavía incluía los Países Bajos Españoles, grandes partes de Italia y América. La posibilidad de su adquisición por parte de Francia o Austria amenazaba el equilibrio de poder europeo, y la proclamación de Felipe como rey de España el 16 de noviembre de 1700 condujo a la guerra. Los franceses mantuvieron la ventaja en las primeras etapas, pero se vieron obligados a adoptar una postura defensiva después de 1706. Aunque los aliados continuaron avanzando en el norte de Francia, para 1709 Felipe había consolidado su posición en España, la causa aparente de la guerra.\nEn el interior del país, la guerra de sucesión evolucionó hasta convertirse en una guerra civil entre borbónicos, cuyo principal apoyo lo encontraron en Castilla, y austracistas, mayoritarios en Aragón, cuyos últimos rescoldos no se extinguieron hasta 1714, con la capitulación de Barcelona, y 1715, con la rendición de Mallorca ante las fuerzas de Felipe V. \nCuando el emperador José I murió en 1711, el archiduque Carlos sucedió a su hermano como emperador del Sacro Imperio Romano Germánico. En tanto una unión de España y Austria era tan mal recibida como una con Francia, el nuevo gobierno británico argumentó que no tenía sentido continuar. A esas alturas, sólo los subsidios británicos mantenían a sus aliados en la guerra, y su retirada condujo a la Paz de Utrecht en 1713, seguida de los tratados de Rastatt y Baden en 1714.\nFelipe fue confirmado como rey de España, pero renunció a su derecho y al de sus descendientes al trono francés. Para la Monarquía Hispánica, las principales consecuencias de la guerra fueron la pérdida de sus posesiones europeas, incluyendo gran parte de sus territorios italianos a favor de Saboya y Austria, junto con los Países Bajos Españoles, aunque permaneció prácticamente intacto fuera de Europa. Asimismo, la abolición de las leyes e instituciones de la Corona de Aragón, lo que puso fin al modelo «federal» de monarquía,​ o «monarquía compuesta»,​ de los austrias.​ Gran Bretaña recibió Gibraltar y Menorca y obtuvo importantes concesiones comerciales en las Américas españolas. Para los neerlandeses, a pesar de haber logrado su ansiado Tratado de la Barrera, la guerra se considera el comienzo de su declive como gran potencia europea. Aunque Luis XIV logró colocar a su nieto en el trono español, Francia quedó económicamente agotada.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/49/Villars_a_Denain1.jpg/960px-Villars_a_Denain1.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Guerra_de_sucesi%C3%B3n_espa%C3%B1ola",
    personajeIds: [
  "felipe-v"
],
    rutaId: "guerra-sucesion",
  },
  {
    id: "sitio-barcelona-1714",
    titulo: "Sitio de Barcelona (1713-1714)",
    tipo: "batalla",
    fecha: 1714.75,
    coordenadas: [
  2.17,
  41.38
],
    resumen: "El sitio de Barcelona fue una de las últimas operaciones militares de la guerra de sucesión española. Se produjo entre el 25 de julio de 1713 y el 11 de septiembre de 1714. El combate enfrentó a los defensores de Barcelona formados por la coronela y partidarios de Carlos VI del Sacro Imperio Romano Germánico; con las tropas de Felipe V de España y sus aliados franceses.\nDesde 1980 en recuerdo de los caídos y la defensa por parte de los barceloneses, se conmemora como fiesta oficial de Cataluña (Diada Nacional de Catalunya), el Día Once de Septiembre.​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Sitio-barcelona-11-septiembre-1714.jpg/960px-Sitio-barcelona-11-septiembre-1714.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Sitio_de_Barcelona_(1713-1714)",
    personajeIds: [
  "felipe-v"
],
    rutaId: "guerra-sucesion",
  },
  {
    id: "expulsion-jesuitas",
    titulo: "Expulsión de los jesuitas de España de 1767",
    tipo: "tratado",
    fecha: 1767.15,
    coordenadas: [
  -3.7,
  40.42
],
    resumen: "La expulsión de los jesuitas de España de 1767 fue ordenada por el rey Carlos III, siguiendo los ejemplos recientes portugués de 1759 y francés de 1762, bajo la acusación de haber sido los instigadores de los motines populares del año anterior, conocidos con el nombre de Motín de Esquilache. Seis años después el monarca español consiguió que el papa Clemente XIV suprimiera la orden de los jesuitas. No obstante, sería restablecida por Pío VII el 7 de agosto de 1814 y el rey Fernando VII les permitió el regreso a España el 15 de mayo de 1815.​ Los jesuitas serían expulsados de España tres veces más: en 1820, durante el Trienio Liberal; en 1835, durante la Regencia de María Cristina de Borbón; y en 1932, bajo la Segunda República.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/3/39/Retrato_de_Carlos_III_de_Espa%C3%B1a.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Expulsi%C3%B3n_de_los_jesuitas_de_Espa%C3%B1a_de_1767",
    personajeIds: [
  "carlos-iii"
],
    rutaId: "reformas-borbonicas",
  },
  {
    id: "expedicion-malaspina",
    titulo: "Expedición Malaspina",
    tipo: "descubrimiento",
    fecha: 1789.6,
    coordenadas: [
  -6.28,
  36.53
],
    resumen: "El Viaje científico y político alrededor del mundo, más conocido como Expedición Malaspina o Malaspina-Bustamante, en honor a Alejandro Malaspina y José de Bustamante y Guerra, fue una expedición financiada por la Corona española en la época ilustrada de Carlos IV. La expedición se prolongó a lo largo del periodo entre 1789-1794. Recorrió las costas de toda América desde Buenos Aires a Alaska, las Filipinas y Marianas, Vavao, Nueva Zelanda y Australia. El 21 de septiembre de 1794, la expedición regresó a España habiendo generado un ingente patrimonio de conocimiento sobre historia natural, cartografía, etnografía, astronomía, hidrografía, medicina —todas ellas ramas de conocimiento de gran importancia geopolítica—, así como sobre los aspectos políticos, económicos y sociales de estos territorios. La mayor parte de los fondos se conservan en el Museo de América, Museo Naval de Madrid, el Real Observatorio de la Armada, el Real Jardín Botánico y el Museo Nacional de Ciencias Naturales. En la actualidad, siguen siendo objeto de estudio por parte de historiadores y biólogos.​​",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Descubiertaatrevida.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Expedici%C3%B3n_Malaspina",
    personajeIds: [
  "malaspina"
],
    rutaId: "expedicion-malaspina",
  },
  {
    id: "toma-habana-1762",
    titulo: "Toma de La Habana",
    tipo: "batalla",
    fecha: 1762.5,
    coordenadas: [
  -82.35,
  23.13
],
    resumen: "La toma de La Habana por los británicos fue un enfrentamiento militar librado en agosto de 1762, en el contexto de la guerra de los Siete Años. En ella, las fuerzas inglesas al mando del teniente general George Keppel derrotaron a los defensores liderados por el gobernador de Cuba, el mariscal de campo Juan de Prado y Portocarrero.\nEste hecho dejó al descubierto las debilidades de las defensas españolas en el mar Caribe y fue consecuencia de la entrada en conflicto del Reino de Gran Bretaña con la Corona española, aliada del Reino de Francia, otro tradicional enemigo de los británicos. \nEn un principio los británicos intentaron establecer una especie de colonia llamada «Cumberland» que sirviera de punto de apoyo a una invasión en la isla, por el sur, en lo que hoy es la provincia de Guantánamo, pero las condiciones fueron muy hostiles tanto por el terreno, como el constante hostigamiento de los lugareños, por lo que finalmente desistieron.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/4/45/British_fleet_entering_Havana.jpg/960px-British_fleet_entering_Havana.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Toma_de_La_Habana",
    personajeIds: [],
    rutaId: "guerra-siete-anos",
  },
  {
    id: "dos-mayo-1808",
    titulo: "Levantamiento del 2 de Mayo",
    tipo: "rebelion",
    fecha: 1808.33,
    coordenadas: [
  -3.7,
  40.42
],
    resumen: "El Levantamiento del 2 de Mayo​ es el nombre por el que se conocen los hechos acontecidos ese día de 1808 contra la invasión francesa de España en la ciudad de Madrid.​​ Posteriormente a que se reprimiera la protesta por las fuerzas napoleónicas presentes en la ciudad, por todo el país se extendió una ola de proclamas de indignación y llamamientos públicos a la insurrección armada, que desembocarían en la guerra de la Independencia española.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/76/El_dos_de_mayo_de_1808_en_Madrid.jpg/960px-El_dos_de_mayo_de_1808_en_Madrid.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Levantamiento_del_2_de_Mayo",
    personajeIds: [],
    rutaId: "guerra-independencia-espanola",
  },
  {
    id: "sitio-zaragoza",
    titulo: "Sitio de Zaragoza (1808)",
    tipo: "batalla",
    fecha: 1808.5,
    coordenadas: [
  -0.88,
  41.65
],
    resumen: "Los sitios de Zaragoza fueron dos asedios sufridos por la ciudad aragonesa de Zaragoza durante la guerra de la Independencia española, que enfrentó a los ejércitos de ocupación del Primer Imperio francés de Napoleón Bonaparte y a fuerzas españolas leales a la dinastía Borbón.\nLa plaza era clave para garantizar las comunicaciones del noreste y el abastecimiento de las tropas en Cataluña, así como para controlar Aragón. Por ello, tras la sublevación de la ciudad a consecuencia de los sucesos del Dos de mayo de 1808, se envió a un ejército a restablecer el control de la ciudad. Aunque las tropas francesas eran superiores en número y armamento, la ciudad resistió.\nSin embargo, a finales de año, los franceses regresaron en mayor número, reanudándose el sitio. A pesar de la feroz resistencia de la ciudad, inmortalizada por varios cronistas, la ciudad, diezmada por la guerra y las epidemias derivadas del sitio, capituló finalmente el 21 de febrero de 1809.\nLos sitios de Zaragoza fueron uno de los acontecimientos más representativos de la guerra de Independencia española, legando un gran número de héroes y leyendas a la tradición popular, y siendo fuente de inspiración para varios escritores.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5a/La_defensa_de_Zaragoza.jpg/960px-La_defensa_de_Zaragoza.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Sitio_de_Zaragoza_(1808)",
    personajeIds: [
  "palafox"
],
    rutaId: "guerra-independencia-espanola",
  },
  {
    id: "batalla-bailen",
    titulo: "Batalla de Bailén",
    tipo: "batalla",
    fecha: 1808.58,
    coordenadas: [
  -3.78,
  38.1
],
    resumen: "La batalla de Bailén se libró durante la guerra de la Independencia española y supuso la primera derrota en campo abierto de la historia del ejército napoleónico. Tuvo lugar el 19 de julio de 1808 junto a la ciudad jienense de Bailén. Enfrentó a un ejército francés de unos 22 000 soldados al mando del general Dupont con otro español más numeroso (unos 29 770) a las órdenes del general Teodoro Reding, aunque el general en jefe del llamado Ejército de Andalucía era el general Castaños. Aunque la primera derrota del Ejército de Napoleón en territorio español ocurrió entre el 8 y el 14 de junio de 1808, en la batalla de la Poza de Santa Isabel, en la bahía de Cádiz.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d7/La_Rendici%C3%B3n_de_Bail%C3%A9n_%28Casado_del_Alisal%29.jpg/960px-La_Rendici%C3%B3n_de_Bail%C3%A9n_%28Casado_del_Alisal%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Bail%C3%A9n",
    personajeIds: [],
    rutaId: "guerra-independencia-espanola",
  },
  {
    id: "batalla-vitoria",
    titulo: "Batalla de Vitoria",
    tipo: "batalla",
    fecha: 1813.48,
    coordenadas: [
  -2.67,
  42.85
],
    resumen: "La batalla de Vitoria (en euskera: Gasteizko gudua) fue librada el 21 de junio de 1813 entre las tropas francesas que escoltaban a José Bonaparte en su huida y un conglomerado de tropas españolas, británicas y portuguesas al mando de Arthur Wellesley, el futuro duque de Wellington.\nLa victoria aliada sancionó la retirada definitiva de las tropas francesas de España (con la excepción de Cataluña) y forzó a Napoleón a devolver la corona del país a Fernando VII por el tratado de Valençay de 1813.\nEl acuerdo definitivo de paz entre la España del ya rey Fernando VII y el nuevo rey de Francia Luis XVIII se firmó el 20 de julio de 1814. Previamente, el 30 de mayo se firmaba un primer acuerdo en París —aunque el embajador español no lo pudo firmar a no tener poderes plenipotenciarios—, finalizando así la guerra de la Independencia española.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/7/7c/Vitoria_-_Plaza_Virgen_Blanca_02.jpg/960px-Vitoria_-_Plaza_Virgen_Blanca_02.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Vitoria",
    personajeIds: [],
    rutaId: "guerra-independencia-espanola",
  },
  {
    id: "plan-iguala",
    titulo: "Plan de Iguala",
    tipo: "tratado",
    fecha: 1821.16,
    coordenadas: [
  -99.53,
  18.35
],
    resumen: "El Plan de Iguala o Plan de Independencia de la América Septentrional​ fue un documento político proclamado por Agustín de Iturbide y Vicente Guerrero el 24 de febrero de 1821 en la ciudad de Iguala; en el cual se declaraba a la Nueva España como país soberano e independiente.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/4/49/Plan_de_Iguala_foja_1.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Plan_de_Iguala",
    personajeIds: [
  "iturbide"
],
    rutaId: "independencia-mexico",
  },
  {
    id: "tratados-cordoba",
    titulo: "Tratados de Córdoba",
    tipo: "tratado",
    fecha: 1821.65,
    coordenadas: [
  -96.93,
  18.89
],
    resumen: "Los Tratados de Córdoba es un documento en el que se acuerda la Independencia de México y la retirada de las tropas españolas de la capital del país, firmado en la ciudad de Córdoba, Veracruz, el 24 de agosto de 1821, por Agustín de Iturbide (comandante del Ejército Trigarante) y por Juan O'Donojú (jefe político superior de la Provincia de Nueva España), días después de la batalla de Azcapotzalco. El texto está compuesto por diecisiete artículos que representan una extensión al Plan de Iguala.​ Dicho acuerdo fue rechazado por el gobierno de España. El reconocimiento de la independencia mexicana ocurre mediante otro acuerdo, del 28 de diciembre de 1836, el «Tratado de paz y amistad entre México y España».",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fa/Tratados_de_C%C3%B3rdoba.JPG/960px-Tratados_de_C%C3%B3rdoba.JPG?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Tratados_de_C%C3%B3rdoba",
    personajeIds: [
  "iturbide"
],
    rutaId: "independencia-mexico",
  },
  {
    id: "batalla-boyaca",
    titulo: "Batalla de Boyacá",
    tipo: "batalla",
    fecha: 1819.65,
    coordenadas: [
  -73.36,
  5.46
],
    resumen: "La batalla de Boyacá o  batalla del puente de Boyacá fue la confrontación más importante de la guerra de independencia de Colombia que garantizó el éxito de la Campaña Libertadora de Nueva Granada. Este acontecimiento tuvo lugar el día 7 de agosto de 1819 en el cruce del río Teatinos, en inmediaciones de Tunja. La batalla finaliza  con la rendición en masa de la división realista, y fue la culminación de 78 días de  campaña iniciada desde Venezuela para liberar la Nueva Granada.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Batalla_de_Boyaca_de_Martin_Tovar_y_Tovar.jpg/960px-Batalla_de_Boyaca_de_Martin_Tovar_y_Tovar.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Boyac%C3%A1",
    personajeIds: [],
    rutaId: "campanas-bolivar",
  },
  {
    id: "batalla-carabobo",
    titulo: "Batalla de Carabobo",
    tipo: "batalla",
    fecha: 1821.48,
    coordenadas: [
  -67.95,
  10.21
],
    resumen: "Batalla de Carabobo puede estar haciendo referencia a:\n\nBatalla de Carabobo (1814), primera batalla de Carabobo.\nBatalla de Carabobo (1821), segunda batalla de Carabobo.",
    
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Carabobo",
    personajeIds: [],
    rutaId: "campanas-bolivar",
  },
  {
    id: "batalla-pichincha",
    titulo: "Batalla de Pichincha",
    tipo: "batalla",
    fecha: 1822.4,
    coordenadas: [
  -78.55,
  -0.18
],
    resumen: "La batalla del Pichincha ocurrió el 24 de mayo de 1822 en las faldas del volcán Pichincha, cerca de la ciudad de Quito. Significó la independencia de la Real Audiencia de Quito (actual República del Ecuador) y su posterior unificación a la Gran Colombia.\nEl encuentro, que ocurrió en el contexto de las guerras de independencia hispanoamericanas, enfrentó al ejército independentista unido bajo el mando del general de brigada venezolano Antonio José de Sucre, conformado: por una División la de Gran Colombia, la División del Sur (actual Ecuador) y otra División peruana bajo el mando de Andrés de Santa Cruz, coronel del ejército del Perú, contra el ejército realista comandado por el comandante Melchor Aymerich. La derrota de las fuerzas españolas condujo a la liberación de Quito y aseguró la anexión de las provincias que pertenecían a la Real Audiencia de Quito, también conocida como la Presidencia de Quito, a la Gran Colombia y de la jurisdicción administrativa colombiana finalmente emergió la que hoy conocemos como República del Ecuador.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/52/Batalladepichincha.jpg/960px-Batalladepichincha.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Pichincha",
    personajeIds: [],
    rutaId: "campanas-bolivar",
  },
  {
    id: "batalla-chacabuco",
    titulo: "Batalla de Chacabuco",
    tipo: "batalla",
    fecha: 1817.13,
    coordenadas: [
  -70.65,
  -33.05
],
    resumen: "La batalla de Chacabuco fue una decisiva contienda de la Independencia de Chile en la cual combatieron el Ejército de los Andes, formado por tropas de las Provincias Unidas del Río de la Plata y chilenas exiliadas en Mendoza, y el Ejército Realista, resultando en una firme victoria para el bando independentista comandado por el general José de San Martín. La batalla tuvo lugar el 12 de febrero de 1817, en la Hacienda de Chacabuco (Colina), a 55 km al norte de la ciudad de Santiago",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/dd/Batalla_de_Chacabuco_-_Pedro_Subercaseaux_%28cropped%29.jpg/960px-Batalla_de_Chacabuco_-_Pedro_Subercaseaux_%28cropped%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Chacabuco",
    personajeIds: [
  "mariano-osorio"
],
    rutaId: "campanas-san-martin",
  },
  {
    id: "batalla-maipu",
    titulo: "Batalla de Maipú",
    tipo: "batalla",
    fecha: 1818.32,
    coordenadas: [
  -70.75,
  -33.52
],
    resumen: "La batalla de Maipú, también conocida como batalla de Maipo, fue un enfrentamiento armado decisivo dentro del contexto de la guerra de la Independencia de Chile. Tuvo lugar el 5 de abril de 1818 en el sector conocido como Cerrillos del Maipo, al poniente de la ciudad de Santiago, donde se enfrentaron las fuerzas patriotas del Ejército Unido Libertador de Chile –formado por las tropas rioplatenses (de la actual Argentina) y chilenas– al mando del general José de San Martín, contra el ejército realista al mando del general Mariano Osorio, compuesto por expedicionarios del Virreinato del Perú y de España, así como por tropas de la Capitanía General de Chile.\nEs considerada uno de los enfrentamientos más decisivos de la guerra de la Independencia de Chile y un hito fundamental en la consolidación del proceso emancipador del Cono Sur.​ Su victoria aseguró la independencia de Chile y permitió al Ejército Unido (luego Ejército Libertador del Perú) continuar con las campañas libertadoras hacia el Virreinato del Perú. Además, tuvo un profundo significado simbólico y político, consolidando la figura del general José de San Martín como uno de los líderes más influyentes del proceso independentista sudamericano.​",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/1/17/BatallaDeMaipu.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Maip%C3%BA",
    personajeIds: [],
    rutaId: "campanas-san-martin",
  },
  {
    id: "batalla-ayacucho",
    titulo: "Batalla de Ayacucho",
    tipo: "batalla",
    fecha: 1824.83,
    coordenadas: [
  -74.13,
  -13.42
],
    resumen: "La batalla de Ayacucho representó el enfrentamiento más grande e importante de las campañas finales de las guerras de independencia hispanoamericanas, librada entre los ejércitos de las repúblicas de Perú y Colombia y el del Reino de España. En esta campaña militar se consolidó la independencia de la República del Perú y de los nuevos estados sudamericanos de habla hispana.\nLa batalla se desarrolló en la Pampa de Quinua, a una altitud de 3400 m.s.n.m., y a 37 kilómetros de la ciudad de Ayacucho, Perú, el 9 de diciembre de 1824.​ \nLa victoria de los patriotas supuso la desaparición del contingente militar realista más importante que seguía en pie. El Ejército Real del Perú fue derrotado tras recibir la orden de combatir desde una posición militar completamente inadecuada: el cerro Condorcunca.​Este evento suele ser considerado el final de las guerras de independencia en América del Sur.​​​   \nLa capitulación del virrey del Perú selló la independencia del Perú de forma definitiva. La Armada española abandonó la zona de conflicto según lo pactado. Los últimos bastiones realistas se rendirán sucesivamente a partir de entonces. En 1825 el Alto Perú en la campaña de Sucre y batalla de Tumusla. En 1826 caen la isla de Chiloé y la fortaleza del Real Felipe del Callao, que resistió un asedio durante 718 días. Se extinguió el foco de guerrillas en la guerra de Iquicha (1825-1828). En 1828, el Brigadier realista Francisco Javier de Aguilera lideró el último levantamiento, ocupando la ciudad de Vallegrande en Bolivia. En 1831, se rinde el caudillo José Dionisio Cisneros en Venezuela. En Chile, la montonera de los Hermanos Pincheira sería destruida definitivamente en 1832. Finalmente en 1833, tras la muerte del rey Fernando VII, el gobierno español abandonó definitivamente los planes de reconquista. Tres años después, en 1836, las Cortes españolas renunciaron formalmente a cualquier reivindicación sobre la América continental. El reconocimiento del Perú se obtuvo de facto en 1865 y el tratado definitivo se firmó en 1879.​​​​",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/df/Batalla_de_Ayacucho_by_Mart%C3%ADn_Tovar_y_Tovar_%281827_-_1902%29.jpg/960px-Batalla_de_Ayacucho_by_Mart%C3%ADn_Tovar_y_Tovar_%281827_-_1902%29.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Ayacucho",
    personajeIds: [
  "jose-serna"
],
    rutaId: "campanas-san-martin",
  },
  {
    id: "batalla-cavite",
    titulo: "Batalla de Cavite",
    tipo: "batalla",
    fecha: 1898.36,
    coordenadas: [
  120.9,
  14.5
],
    resumen: "La batalla de Cavite, llamado en los Estados Unidos como batalla de la Bahía de Manila,​ fue el enfrentamiento entre fuerzas navales estadounidenses y españolas ocurrido el 1 de mayo de 1898 en la bahía de Manila en el contexto de la guerra hispano-estadounidense.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/5/5d/GuerraHispanoamericanaCombateDeCavite18980501.jpg/960px-GuerraHispanoamericanaCombateDeCavite18980501.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_de_Cavite",
    personajeIds: [],
    rutaId: "guerra-hispano-americana",
  },
  {
    id: "batalla-santiago-cuba",
    titulo: "Batalla naval de Santiago de Cuba",
    tipo: "batalla",
    fecha: 1898.53,
    coordenadas: [
  -75.82,
  19.98
],
    resumen: "La batalla naval de Santiago de Cuba tuvo lugar el 3 de julio de 1898 a la salida de la bahía de Santiago de Cuba durante la guerra hispano-estadounidense.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/1/1f/Combate_en_Santiago_de_Cuba%2C_1898.jpg/960px-Combate_en_Santiago_de_Cuba%2C_1898.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Batalla_naval_de_Santiago_de_Cuba",
    personajeIds: [
  "cervera"
],
    rutaId: "guerra-hispano-americana",
  },
  {
    id: "tratado-paris-1898",
    titulo: "Tratado de París (1898)",
    tipo: "tratado",
    fecha: 1898.9,
    coordenadas: [
  2.35,
  48.86
],
    resumen: "El Tratado de París, firmado el 10 de diciembre de 1898, dio por finalizada la guerra hispano-estadounidense y por él España abandonó sus demandas sobre Cuba, Puerto Rico, Filipinas y Guam. Cuba declaró su independencia en 1902 pero se mantuvo bajo influencia dominante estadounidense por medio de la Enmienda Platt y otros tratados hasta la revolución comunista liderada por Fidel Castro en 1959. Filipinas fue oficialmente entregada a los Estados Unidos por veinte millones de dólares y se mantuvo bajo autoridad directa estadounidense como territorio hasta el establecimiento de la Mancomunidad Filipina en 1935, que terminó con la independencia de las islas con el Tratado de Manila en 1946. Puerto Rico quedó bajo el control directo político y la autoridad de los Estados Unidos para ser territorio estadounidense,​ logrando el establecimiento de un gobierno civil electo y la ciudadanía estadounidense con las leyes de Foraker en 1900 y Jones-Shafroth en 1917. Puerto Rico retuvo su estado político de territorio estadounidense no incorporado con el establecimiento del estado libre asociado en 1950. Al igual que Puerto Rico, Guam pasó a ser un territorio estadounidense no incorporado en 1950.\nAunque durante las negociaciones España intentó incluir numerosas enmiendas, finalmente no tuvo más remedio que aceptar todas y cada una de las imposiciones estadounidenses, puesto que había perdido la guerra y era consciente de que el superior poderío armamentístico estadounidense podría poner en peligro otras posesiones españolas en Europa y África.\nEl tratado se firmó sin la presencia de los representantes de los territorios traspasados a Estados Unidos, lo que provocó un gran descontento entre la población de los mismos, especialmente en el caso de Filipinas, que acabaría enfrentándose contra los Estados Unidos en la guerra filipino-estadounidense.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/0/09/Kurz_and_Allison%2C_Spanish-American_Treaty_of_Peace%2C_Paris_1898.jpg/960px-Kurz_and_Allison%2C_Spanish-American_Treaty_of_Peace%2C_Paris_1898.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Tratado_de_Par%C3%ADs_(1898)",
    personajeIds: [],
    rutaId: "guerra-hispano-americana",
  },
  {
    id: "fundacion-san-agustin",
    titulo: "San Agustín (Florida)",
    tipo: "fundacion",
    fecha: 1565.65,
    coordenadas: [
  -81.31,
  29.9
],
    resumen: "San Agustín (en inglés: Saint Augustine) es una ciudad del condado de San Juan de Florida, Estados Unidos, en la región conocida como «la Primera Costa de Florida». En el censo del año 2020, la ciudad tenía una población de 14 329 habitantes. Fue fundada en septiembre de 1565 por el explorador y almirante español Pedro Menéndez de Avilés y es la ciudad de origen español y europeo más antigua del territorio continental​ de Estados Unidos habitada de forma permanente.​",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/3/38/StAugustineC12.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/San_Agust%C3%ADn_(Florida)",
    personajeIds: [
  "menendez-aviles"
],
    rutaId: "conquista-florida",
  },
  {
    id: "descubrimiento-amazonas",
    titulo: "Primera expedición española al río Amazonas",
    tipo: "descubrimiento",
    fecha: 1542.15,
    coordenadas: [
  -50,
  -1.5
],
    resumen: "La primera expedición española al río Amazonas se realizó el 12 de febrero de 1542 por parte del conquistador español Francisco de Orellana, segundo al mando de la expedición liderada por Gonzalo Pizarro, quien siendo teniente gobernador de Quito partió desde allí en la Navidad de 1540 por orden de su hermano, Francisco Pizarro, para encontrar al país denominado de la \"Canela\".  La navegación completa del cauce más caudaloso y largo​ de la Tierra no fue algo intencionado, sino que se debió a una concatenación de acontecimientos desencadenados por los deseos de localizar los grandes bosques de canela, El Dorado y tal vez un nuevo reino indígena.\nAunque la desembocadura del río ya se conocía, Gonzalo Pizarro organizó una gran expedición para descubrir y explotar la supuesta canela y localizar el oro, pero al llegar a la zona indicada no encontraron nada de lo esperado. Debido a lo desconocido del terreno y lo falible de los guías indígenas, Orellana trató de recoger información y alimentos adelantándose con unos 70 hombres. Las condiciones del afluente tomado no les permitieron volver y debieron seguir avanzando, afrontando todo tipo de penurias. Dichas penurias han arrojado sombras sobre la veracidad del relato escrito por el dominico Gaspar de Carvajal, miembro de la expedición, entre las que destaca el contacto con un pueblo integrado por mujeres al que rendían vasallaje otros habitantes del lugar.\nTras dos meses avanzando por un afluente, el río Napo, y siete por el propio Amazonas, los españoles llegaron a la desembocadura en el Atlántico. Francisco de Orellana fue juzgado y acusado de traición, pero resultó absuelto de todo cargo. Regresó nuevamente al río al frente de otra expedición, con el objetivo de recorrerlo en sentido inverso, pero falleció en el intento.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/2/21/Francisco_de_Orellana_Amazon_River_voyage_%281541-1542%29.svg/960px-Francisco_de_Orellana_Amazon_River_voyage_%281541-1542%29.svg.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Primera_expedici%C3%B3n_espa%C3%B1ola_al_r%C3%ADo_Amazonas",
    personajeIds: ["francisco-orellana", "gonzalo-pizarro"],
    rutaId: "descubrimiento-amazonas",
  },
  {
    id: "sitio-cartagena-1741",
    titulo: "Sitio de Cartagena de Indias (1741)",
    tipo: "batalla",
    fecha: 1741.25,
    coordenadas: [
  -75.51,
  10.4
],
    resumen: "El sitio o batalla de Cartagena de Indias, del 13 de marzo al 20 de mayo de 1741, fue el episodio decisivo que marcó el desenlace de la guerra del Asiento (1739-1748), uno de los conflictos armados entre España y Gran Bretaña ocurridos durante el siglo XVIII.\nComo resultado de tensiones comerciales desde hacía tiempo, la guerra se libró principalmente en el mar Caribe; los británicos intentaron capturar puertos españoles clave en la región, incluidos Portobelo y Chagres en la actual Panamá, La Habana (actual Cuba) y Cartagena de Indias (actual Colombia).\nDos ataques navales anteriores fracasaron en 1740, mientras que el tercer intento en marzo de 1741 fue un asalto naval y terrestre combinado. Los británicos se vieron obligados a retirarse, tras haber perdido, según estimaciones, entre nueve mil quinientos y once mil quinientos hombres, influido por la fiebre amarilla; algunas unidades sufrieron tasas de mortalidad del 80 al 90 %. Fue una de las mayores derrotas en la historia de la Royal Navy. La victoria demostró la capacidad de España para defender su posición y puso fin, en gran medida, a las operaciones militares en esta área. Ambos países pusieron su atención en la guerra de sucesión austriaca y las hostilidades terminaron con el Tratado de Aix-la-Chapelle de 1748.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/e/ee/Ataque_Cartagena_de_Indias.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Sitio_de_Cartagena_de_Indias_(1741)",
    personajeIds: [
  "blas-de-lezo"
],
    rutaId: "cartagena-de-indias",
  },
  {
    id: "segunda-fundacion-buenos-aires",
    titulo: "Segunda fundación de Buenos Aires",
    tipo: "fundacion",
    fecha: 1580.5,
    coordenadas: [-58.37, -34.61],
    resumen:
      "El 11 de junio de 1580, Juan de Garay, partiendo desde Asunción, refundó de forma definitiva la ciudad de Buenos Aires en el mismo emplazamiento abandonado tras el fracaso de la expedición de Pedro de Mendoza en 1541, con el nombre de Ciudad de la Santísima Trinidad y Puerto de Santa María del Buen Ayre. Esta vez el asentamiento prosperó y se convertiría, dos siglos después, en la capital del Virreinato del Río de la Plata.",
    articuloWiki: "https://es.wikipedia.org/wiki/Juan_de_Garay",
    personajeIds: ["juan-garay"],
    rutaId: "rio-de-la-plata",
  },
  {
    id: "toma-panzacola",
    titulo: "Toma de Panzacola",
    tipo: "batalla",
    fecha: 1781.3,
    coordenadas: [-87.22, 30.4],
    resumen:
      "Entre marzo y mayo de 1781, Bernardo de Gálvez, gobernador de Luisiana, dirigió un asedio combinado naval y terrestre contra Panzacola (Pensacola), capital de la Florida Occidental británica, forzando su rendición. La victoria completó la reconquista española del golfo de México durante la guerra angloamericana, aportando un apoyo decisivo a la independencia de las Trece Colonias y devolviendo ambas Floridas a la Corona española en la paz de 1783.",
    articuloWiki: "https://es.wikipedia.org/wiki/Bernardo_de_G%C3%A1lvez",
    personajeIds: ["bernardo-galvez"],
    rutaId: "campana-galvez-golfo",
  },
  {
    id: "conquista-nueva-galicia",
    titulo: "Nueva Galicia",
    tipo: "batalla",
    fecha: 1530.4,
    coordenadas: [
  -103.35,
  20.68
],
    resumen: "El Reino de la Nueva Galicia fue una entidad administrativa y territorial de la Corona de Castilla, comprendido dentro del virreinato de la Nueva España, pero con cierto grado de independencia −variable− en cuanto a su gobierno y administración.​ Su fundación se realizó bajo patrocinio regio con el objeto de compensar el creciente poder del bando de Hernán Cortés en el centro y sur de Mesoamérica. El territorio que correspondía al reino era conocido por los nahuas de la región como Xalixco (del náhuatl: Xalixko ‘xalli: arena; ixtli: faz; -ko: sufijo locativo’‘encima de la arena’).​\nTuvo una extensión territorial que varió enormemente durante sus tres siglos de existencia, aunque su conformación más estable comprendió los actuales estados mexicanos de Jalisco, Nayarit, Aguascalientes y Zacatecas.​ Sin embargo, su capital fue la sede de Real Audiencia de Guadalajara, cuya jurisdicción alcanzó los actuales territorios estadounidenses de Texas, Nuevo México y California, así como los mexicanos de Tamaulipas, Nuevo León, Sinaloa, Coahuila, Sonora, Chihuahua, Baja California y Baja California Sur. En cuanto a la jurisdicción eclesiástica, todos los territorios anteriormente mencionados fueron dependientes del obispado de Guadalajara.\nPara 1786 la Corona Española como parte de las llamadas Reformas Borbónicas, llevó a cabo una reorganización territorial, con la finalidad de controlar mejor sus dominios y para obtener más cantidad de impuestos, controlando el comercio de todo tipo y de cada región, por lo que los reinos de la Nueva Galicia, de la Nueva España, las provincias y gobernaciones que en forma general dependían del virreinato de la Nueva España, fueron agrupados en intendencias, así la Provincia de Nueva Galicia y la Provincia de Colima, que se juntaron para formar la Intendencia de Guadalajara, las provincias de San Luis Potosí, San Francisco de Coahuila, el Nuevo Reino de León, la Provincia de Tamaulipas y el Territorio de Tejas integraron la Intendencia de San Luis Potosí, mientras que la Provincia de Los Zacatecas formó por sí sola la Intendencia de Zacatecas.",
    
    articuloWiki: "https://es.wikipedia.org/wiki/Nueva_Galicia",
    personajeIds: [
  "nuno-guzman"
],
    rutaId: "conquista-nueva-galicia",
  },
  {
    id: "expedicion-narvaez-florida",
    titulo: "Pánfilo de Narváez",
    tipo: "descubrimiento",
    fecha: 1528.3,
    coordenadas: [
  -82.7,
  27.5
],
    resumen: "Pánfilo de Narváez (Navalmanzano, Corona de Castilla, ca. 1470 - Costas de Florida occidental, cerca del delta del Misisipi, Imperio español, 1528) fue un militar, adelantado y conquistador español, nombrado gobernador de la Florida.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d5/Panfilo_de_Narvaez.jpg/960px-Panfilo_de_Narvaez.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/P%C3%A1nfilo_de_Narv%C3%A1ez",
    personajeIds: [
  "panfilo-narvaez",
  "cabeza-vaca"
],
    rutaId: "expedicion-cabeza-vaca",
  },
  {
    id: "establecimiento-virreinato-nueva-espana",
    titulo: "Establecimiento del Virreinato de Nueva España",
    tipo: "tratado",
    fecha: 1535.85,
    coordenadas: [-99.13, 19.43],
    resumen:
      "A finales de 1535, Antonio de Mendoza y Pacheco llegó a México como primer virrey, gobernador, capitán general y presidente de la Real Audiencia, dando forma institucional definitiva al Virreinato de Nueva España sobre los territorios conquistados por Cortés. Durante su gobierno se impuso la autoridad real sobre los conquistadores, se fundó la primera imprenta de América, se abrió la Casa de Moneda y se creó el Colegio de Santa Cruz de Tlatelolco.",
    articuloWiki: "https://es.wikipedia.org/wiki/Antonio_de_Mendoza_y_Pacheco",
    personajeIds: ["antonio-mendoza"],
    rutaId: "virreinato-nueva-espana",
  },
  {
    id: "expedicion-coronado-cibola",
    titulo: "Expedición de Vázquez de Coronado a Cíbola",
    tipo: "descubrimiento",
    fecha: 1540.65,
    coordenadas: [-108.05, 34.7],
    resumen:
      "Entre 1540 y 1542, Francisco Vázquez de Coronado encabezó una gran expedición desde Nueva Galicia en busca de las legendarias «siete ciudades de Cíbola», explorando por primera vez para la Corona española el actual suroeste de Estados Unidos: Arizona, Nuevo México, Texas, Oklahoma y Kansas, además de ser el primer europeo en avistar el Gran Cañón del Colorado. La expedición no halló las riquezas buscadas, pero extendió el conocimiento y la reclamación española sobre un vastísimo territorio norteamericano.",
    articuloWiki: "https://es.wikipedia.org/wiki/Francisco_V%C3%A1zquez_de_Coronado",
    personajeIds: ["vazquez-coronado"],
    rutaId: "expedicion-coronado",
  },
  {
    id: "conquista-quito",
    titulo: "Conquista de Quito",
    tipo: "batalla",
    fecha: 1534.4,
    coordenadas: [-78.52, -0.22],
    resumen:
      "En 1534, Sebastián de Belalcázar partió desde el recién fundado San Miguel de Piura con un pequeño ejército hacia el norte, adelantándose a Pedro de Alvarado, y conquistó Quito, el antiguo centro septentrional del Imperio incaico. Fundó allí San Francisco de Quito y prosiguió después hacia el norte, fundando Popayán y Cali y extendiendo la conquista española hasta el actual suroeste de Colombia.",
    articuloWiki: "https://es.wikipedia.org/wiki/Sebasti%C3%A1n_de_Belalc%C3%A1zar",
    personajeIds: ["belalcazar"],
    rutaId: "conquista-quito-popayan",
  },
  {
    id: "batalla-isla-terceira",
    titulo: "Batalla de la Isla Terceira",
    tipo: "batalla",
    fecha: 1583.6,
    coordenadas: [-27.21, 38.66],
    resumen:
      "El 26 de julio de 1583, la flota de Álvaro de Bazán, marqués de Santa Cruz, derrotó de forma aplastante a una escuadra franco-portuguesa que apoyaba al pretendiente Antonio de Crato frente a la isla Terceira, en las Azores. La victoria consolidó el control español sobre el archipiélago tras la Unión Ibérica y es considerada una de las primeras grandes batallas navales de la era oceánica, además de un antecedente directo de la organización de la Armada Invencible que Bazán proyectaría años después.",
    articuloWiki: "https://es.wikipedia.org/wiki/%C3%81lvaro_de_Baz%C3%A1n_y_Guzm%C3%A1n",
    personajeIds: ["alvaro-bazan"],
    rutaId: "batalla-terceira",
  },
  {
    id: "costeo-california-cabrillo",
    titulo: "Juan Rodríguez Cabrillo",
    tipo: "descubrimiento",
    fecha: 1542.75,
    coordenadas: [
  -117.24,
  32.71
],
    resumen: "Juan Rodríguez Cabrillo o Juan de Palma (1497- 3 de enero de 1543) fue un marino y explorador español conocido por haber realizado una de las primeras expediciones europeas de la costa oeste de América del Norte al servicio de la Corona Española, navegando cerca de la costa del actual estado de California y participando en la fundación de la ciudad de Oaxaca, en México.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Juan_Rodr%C3%ADguez_Cabrillo.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Juan_Rodr%C3%ADguez_Cabrillo",
    personajeIds: [
  "cabrillo"
],
    rutaId: "costeo-california",
  },
  {
    id: "costeo-golfo-mexico-pineda",
    titulo: "Expedición de Alonso Álvarez de Pineda",
    tipo: "descubrimiento",
    fecha: 1519.4,
    coordenadas: [-94.9, 29.3],
    resumen:
      "En 1519, por encargo del gobernador de Jamaica Francisco de Garay, Alonso Álvarez de Pineda exploró y cartografió por primera vez toda la costa del golfo de México, desde la Florida hasta el río Pánuco, en el actual México. Su expedición demostró que la Florida no era una isla y que no existía un paso navegable hacia Asia por esa vía, elaborando el primer mapa conocido del golfo completo —un adelanto decisivo sobre la geografía real de Norteamérica frente a otras potencias europeas.",
    articuloWiki: "https://es.wikipedia.org/wiki/Alonso_%C3%81lvarez_de_Pineda",
    personajeIds: ["alvarez-pineda"],
    rutaId: "costeo-golfo-mexico",
  },
  {
    id: "costeo-venezuela-ojeda-vespucio",
    titulo: "Expedición de Alonso de Ojeda y Américo Vespucio (1499)",
    tipo: "descubrimiento",
    fecha: 1499.4,
    coordenadas: [-71.6, 10.65],
    resumen:
      "En 1499, Alonso de Ojeda encabezó una expedición —con Américo Vespucio y Juan de la Cosa a bordo— que exploró y cartografió por primera vez de forma sistemática la costa norte de Suramérica, desde el golfo de Paria hasta el cabo de la Vela, incluyendo el lago de Maracaibo, cuyas viviendas palafíticas dieron origen al nombre «Venezuela» («pequeña Venecia»). Fue el primer reconocimiento europeo detallado de ese litoral, apenas un año después de que Colón avistara Tierra Firme en su tercer viaje.",
    articuloWiki: "https://es.wikipedia.org/wiki/Alonso_de_Ojeda",
    personajeIds: ["alonso-ojeda", "vespucio", "juan-de-la-cosa"],
    rutaId: "costeo-venezuela",
  },
  {
    id: "deposicion-virrey-apodaca",
    titulo: "Deposición del virrey Apodaca",
    tipo: "rebelion",
    fecha: 1821.5,
    coordenadas: [-99.13, 19.43],
    resumen:
      "El 5 de julio de 1821, con Iturbide y el Ejército Trigarante controlando ya buena parte del territorio tras el Plan de Iguala, un golpe de los propios oficiales realistas depuso al virrey Juan Ruiz de Apodaca, incapaz de contener el avance independentista. Su caída, sin que la metrópoli pudiera enviar refuerzos, precipitó la firma de los Tratados de Córdoba semanas después y el fin efectivo de tres siglos de dominio español en México.",
    articuloWiki: "https://es.wikipedia.org/wiki/Juan_Ruiz_de_Apodaca",
    personajeIds: ["virrey-apodaca"],
    rutaId: "independencia-mexico",
  },
  {
    id: "sitio-cartagena-1815",
    titulo: "Sitio de Cartagena de Indias (1815)",
    tipo: "batalla",
    fecha: 1815.65,
    coordenadas: [-75.51, 10.4],
    resumen:
      "Entre agosto y diciembre de 1815, Pablo Morillo, al mando de la mayor expedición militar enviada por España a América, sitió y recuperó Cartagena de Indias para la Corona tras más de cien días de asedio, abriendo la llamada «Reconquista» española de Nueva Granada y Venezuela. La brutal represión posterior contra los independentistas alimentaría la resistencia que, pocos años después, culminaría en la victoria de Bolívar en Boyacá.",
    articuloWiki: "https://es.wikipedia.org/wiki/Pablo_Morillo",
    personajeIds: ["pablo-morillo"],
    rutaId: "campanas-bolivar",
  },  {
    id: "expedicion-grijalva",
    titulo: "Juan de Grijalva",
    tipo: "descubrimiento",
    fecha: 1518.35,
    coordenadas: [
  -95.9,
  18.15
],
    resumen: "Juan de Grijalva (Cuéllar (Castilla), 1489-Olancho, Honduras, 1527) fue un descubridor y conquistador español que participó en la exploración y conquista de Cuba con el adelantado Diego Velázquez de Cuéllar (1511), de quien, además de su sobrino, fue su capitán. ​También participó en la exploración a las costas mexicanas —en la que destacaron la exploración de Yucatán y de Tabasco (1518)—; en la exploración de Francisco de Garay de las costas y territorios del Norte en el actual Estado de Veracruz y golfo de México (1522-1523) y finalmente en la conquista de Honduras con Pedrarias Dávila (1527), en la que pereció.",
    imagenWiki: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Juan_de_Grijalva.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Juan_de_Grijalva",
    personajeIds: [
  "juan-grijalva"
],
    rutaId: "expedicion-grijalva",
  },
  {
    id: "conquista-yucatan",
    titulo: "Conquista de Yucatán",
    tipo: "batalla",
    fecha: 1542,
    coordenadas: [
  -89.62,
  20.97
],
    resumen: "La llamada conquista de Yucatán está referida a la exploración y establecimiento del dominio español sobre los territorios septentrionales y centrales de la península de Yucatán, incluyendo los actuales estados de Chiapas y Tabasco en México, además de los actuales estados independientes de Guatemala, Belice, Honduras y El Salvador, en Centroamérica. Este episodio se inició en 1527, finalizando en 1697 cuando los españoles tomaron Tayasal, en lo que ahora es El Petén (Guatemala).\nLa conquista fue un proceso trabajoso y alargado en el tiempo que solo pudo llevarse a término mediante el auxilio de guerreros nahúas una vez finalizada la conquista de Tenochtitlán por Hernán Cortés.​ Aun así, la resistencia de la población fue característica definitoria de los pobladores mayas de este territorio que, incluso bajo el nuevo estado mexicano independiente, siguió mostrando signos de rebeldía. Buen ejemplo de este carácter fue el levantamiento que tuvo lugar ya bien avanzado el siglo XIX y que fue conocido como Guerra de Castas.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/b/b6/Yucatan_peninsula_250m.jpg/960px-Yucatan_peninsula_250m.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Conquista_de_Yucat%C3%A1n",
    personajeIds: [
  "francisco-montejo"
],
    rutaId: "conquista-yucatan",
  },  {
    id: "conquista-michoacan",
    titulo: "Conquista de Michoacán",
    tipo: "batalla",
    fecha: 1522.35,
    coordenadas: [-101.19, 19.7],
    resumen:
      "En 1522, Cristóbal de Olid, capitán de confianza de Cortés, encabezó la expedición que sometió sin apenas resistencia armada al reino purépecha (tarasco) de Michoacán, el segundo estado más poderoso de Mesoamérica tras el mexica, cuyo señor Tangáxuan II se sometió a la Corona española. Dos años después, el propio Olid se rebelaría contra Cortés al frente de una expedición a Las Hibueras (Honduras), lo que le costaría la vida.",
    articuloWiki: "https://es.wikipedia.org/wiki/Conquista_de_Michoac%C3%A1n",
    personajeIds: [
  "cristobal-olid"
],
    rutaId: "conquista-michoacan",
  },
  {
    id: "exploracion-orinoco",
    titulo: "Exploración del río Orinoco",
    tipo: "descubrimiento",
    fecha: 1531.5,
    coordenadas: [-63.6, 8.15],
    resumen:
      "En 1531, Diego de Ordás, veterano capitán de la conquista de México, remontó el curso bajo y medio del río Orinoco en busca de El Dorado, siendo el primer europeo en explorar sistemáticamente ese cauce; murió en el viaje de regreso a España. Jerónimo Ortal, que había acompañado la expedición, heredó su gobernación y organizó nuevas incursiones hacia el interior de la actual Venezuela en los años siguientes, sin dar tampoco con el reino legendario.",
    imagenWiki:
      "https://upload.wikimedia.org/wikipedia/commons/0/08/Ordaz.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail_unscaled",
    articuloWiki: "https://es.wikipedia.org/wiki/Diego_de_Ord%C3%A1s",
    personajeIds: ["diego-ordas", "jeronimo-ortal"],
    rutaId: "exploracion-orinoco",
  },
  {
    id: "gobernacion-hurtado-mendoza",
    titulo: "Gobernación de García Hurtado de Mendoza en Chile",
    tipo: "batalla",
    fecha: 1557.7,
    coordenadas: [-72.6, -36.68],
    resumen:
      "Tras la muerte de Valdivia en Tucapel, García Hurtado de Mendoza, hijo del virrey del Perú, fue nombrado gobernador de Chile en 1557 con apenas veintidós años. Refundó Concepción, sometió temporalmente a los principales caciques mapuches —entre ellos Caupolicán, ejecutado en 1558— y extendió la conquista hasta Chiloé y el estrecho de Magallanes, aunque la guerra de Arauco proseguiría durante siglos. En su expedición participó el soldado y poeta Alonso de Ercilla, que inmortalizaría estos episodios en La Araucana.",
    articuloWiki: "https://es.wikipedia.org/wiki/Garc%C3%ADa_Hurtado_de_Mendoza",
    personajeIds: ["garcia-hurtado"],
    rutaId: "gobernacion-hurtado-mendoza",
  },
  {
    id: "consolidacion-asuncion",
    titulo: "Consolidación de Asunción bajo Domingo de Irala",
    tipo: "fundacion",
    fecha: 1542.0,
    coordenadas: [-57.64, -25.3],
    resumen:
      "Tras el fracaso y abandono de la primera Buenos Aires, Domingo Martínez de Irala se convirtió en la práctica en el hombre fuerte de la gobernación del Río de la Plata desde Asunción, fundada en 1537, a la que consolidó como capital de facto de la provincia durante casi dos décadas. Bajo su gobierno, confirmado varias veces por elección de los propios colonos, Asunción se convirtió en el centro de la colonización del Paraguay y en la base para la exploración del Chaco y el oriente boliviano.",
    articuloWiki: "https://es.wikipedia.org/wiki/Domingo_Mart%C3%ADnez_de_Irala",
    personajeIds: ["domingo-irala"],
    rutaId: "consolidacion-asuncion",
  },  {
    id: "fundacion-santa-marta",
    titulo: "Santa Marta (Colombia)",
    tipo: "fundacion",
    fecha: 1525.55,
    coordenadas: [
  -74.2,
  11.24
],
    resumen: "Santa Marta, oficialmente Distrito Turístico, Cultural e Histórico de Santa Marta, es un distrito de Colombia, capital del departamento del Magdalena en la Región Caribe. Fue fundada el 29 de julio de 1525 por el español Rodrigo de Bastidas, lo que la convierte en la ciudad en pie más antigua de Colombia y la segunda más antigua de América del Sur. Esta ciudad, emplazada en la bahía de su mismo nombre, es uno de los principales destinos turísticos del país por sus numerosas playas, reservas naturales, su patrimonio cultural e histórico y por ser uno de los accesos a la montaña más alta del mundo en zona costera, la Sierra Nevada de Santa Marta y a sus antiguas comunidades indígenas.​ Desde 1991 fue organizada constitucionalmente como Distrito Turístico, Cultural e Histórico.​ \nEs conocida por sus actividades turísticas, la historia de sus calles y sus playas.​ El balneario El Rodadero es uno de los principales destinos del Caribe colombiano. Su casco urbano se encuentra entre la Sierra Nevada de Santa Marta y el mar Caribe, y el parque Tayrona y Ciudad Perdida se encuentra bajo su jurisdicción. Entre sus atracciones culturales e históricas están la Casa de la Aduana, la Catedral Basílica, la Biblioteca Banco de la República, el Seminario San Juan Nepomuceno, el Paseo Bastidas, la Quinta de San Pedro Alejandrino, la plaza de Bolívar y el parque Los Novios.\nSu núcleo más poblado y de mayor actividad comercial es la zona central, desde donde se desarrolló la ciudad a partir del siglo XVII. El plano comprendido entre la carrera Primera y las avenidas Santa Rita y del Ferrocarril enmarca su centro histórico y su núcleo comercial, encontrándose además su núcleo de turismo de playa en la zona de El Rodadero. \nSanta Marta es conocida por haber sido el lugar en el que Simón Bolívar falleció en 1830 en la Quinta de San Pedro Alejandrino, en esa época quedaba a las afueras de la ciudad.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/f/fe/Arrecifes.jpg/960px-Arrecifes.jpg?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Santa_Marta_(Colombia)",
    personajeIds: [
  "rodrigo-bastidas"
],
    rutaId: "fundacion-santa-marta",
  },
  {
    id: "conquista-jamaica",
    titulo: "Conquista de Jamaica",
    tipo: "batalla",
    fecha: 1509.5,
    coordenadas: [-77.29, 18.47],
    resumen:
      "En 1509, por encargo de Diego Colón, Juan de Esquivel encabezó la colonización de Jamaica y fue nombrado su primer gobernador, fundando la villa de Sevilla la Nueva cerca de la actual Saint Ann's Bay. La isla, con escasa población indígena taína superviviente y sin oro que explotar en cantidad, quedó relegada a un papel secundario como base ganadera y de aprovisionamiento dentro del sistema colonial caribeño.",
    articuloWiki: "https://es.wikipedia.org/wiki/Juan_de_Esquivel",
    personajeIds: ["juan-esquivel"],
    rutaId: "conquista-jamaica",
  },  {
    id: "expedicion-villalobos",
    titulo: "Expedición de Villalobos a Filipinas",
    tipo: "descubrimiento",
    fecha: 1543.1,
    coordenadas: [124.65, 8.95],
    resumen:
      "En 1542, Ruy López de Villalobos zarpó de Nueva España al frente de una expedición que llegó al archipiélago que Magallanes había avistado dos décadas antes y le dio el nombre de «Felipinas» en honor al entonces príncipe Felipe (futuro Felipe II), origen del nombre actual de Filipinas. El intento de colonización fracasó por el hambre y la falta de apoyo desde México, pero durante el viaje uno de sus capitanes, Íñigo Ortiz de Retes, avistó y bautizó Nueva Guinea. Dos décadas después, la expedición de Legazpi y Urdaneta culminaría lo que Villalobos no pudo completar.",
    articuloWiki: "https://es.wikipedia.org/wiki/Ruy_L%C3%B3pez_de_Villalobos",
    personajeIds: [
  "ruy-lopez-villalobos",
  "inigo-ortiz-retes"
],
    rutaId: "expedicion-villalobos",
  },
  {
    id: "fortificacion-estrecho-magallanes",
    titulo: "Fundación de Nombre de Jesús y Rey Felipe",
    tipo: "fundacion",
    fecha: 1584.05,
    coordenadas: [-70.85, -52.65],
    resumen:
      "Nombrado gobernador y capitán general de las Tierras del Estrecho de Magallanes, Pedro Sarmiento de Gamboa fundó en 1584 las ciudades de Nombre de Jesús y Rey Felipe, en un intento de fortificar el estrecho para cerrar el paso a corsarios ingleses como Francis Drake. El proyecto terminó en tragedia: sus habitantes murieron de hambre en las condiciones extremas del lugar, que pasó a ser conocido internacionalmente como «Puerto del Hambre»; el último superviviente fue rescatado en 1590 por un navío inglés.",
    imagenWiki: "https://thumb.wikimedia.org/wikipedia/commons/thumb/d/d4/Pedro_Sarmiento_de_Gamboa_%28RPS_16-11-2014%29_Alcal%C3%A1_de_Henares.png/960px-Pedro_Sarmiento_de_Gamboa_%28RPS_16-11-2014%29_Alcal%C3%A1_de_Henares.png?utm_source=es.wikipedia.org&utm_campaign=api&utm_content=thumbnail",
    articuloWiki: "https://es.wikipedia.org/wiki/Pedro_Sarmiento_de_Gamboa",
    personajeIds: [
  "sarmiento-gamboa"
],
    rutaId: "fortificacion-estrecho-magallanes",
  },
]
