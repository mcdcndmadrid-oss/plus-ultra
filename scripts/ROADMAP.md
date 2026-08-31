# Hoja de ruta de contenido — Fase 4 (exhaustividad)

Lista maestra de campañas/episodios a cubrir con el pipeline
(`scripts/fetch-wikipedia.mjs` + `scripts/aplicar-ejemplo.mjs`), organizada
cronológicamente. Cada entrada se convierte en una semilla en
`scripts/semillas/<id>.json` y en una `Ruta` en `src/data/rutas.ts` cuando
aplica. Marcar `[x]` según se complete.

## Era de los Reyes Católicos (1469–1516)

- [x] Primer viaje de Cristóbal Colón (1492–1493)
- [x] Guerra de Granada (1482–1492)
- [x] Segundo, tercer y cuarto viajes de Colón (1493–1504)
- [x] Conquista de las Islas Canarias (culminada 1496)
- [x] Expediciones a Tierra Firme: Alonso de Ojeda, Diego de Nicuesa (1509–1511)
- [x] Vasco Núñez de Balboa y el descubrimiento del Mar del Sur (1513)
- [x] Conquista de Cuba y Puerto Rico (1508–1511)

## Era de Carlos I (1516–1556)

- [x] Conquista de México — campaña de Hernán Cortés (1519–1521)
- [x] Conquista del Perú — campaña de Francisco Pizarro (1532–1538)
- [x] Expedición Magallanes-Elcano: primera vuelta al mundo (1519–1522)
- [x] Guerra de las Comunidades de Castilla (1520–1521)
- [x] Conquista de Guatemala — Pedro de Alvarado (1523–1524)
- [x] Conquista de Nueva Granada — Jiménez de Quesada (1536–1538)
- [x] Conquista de Chile — Pedro de Valdivia (1540–1553)
- [x] Conquista del Río de la Plata y fundación de Buenos Aires (1536)
- [x] Saco de Roma (1527)
- [x] Guerras Italianas contra Francia (1521–1544)
- [x] Rebelión de Manco Inca y Vilcabamba (1536–1572) — ampliar más allá del cerco del Cuzco

## Era de Felipe II (1556–1598)

- [x] Batalla de Lepanto (1571)
- [x] Conquista y colonización de Filipinas — Legazpi (1565)
- [x] Unión Ibérica: anexión de Portugal (1580)
- [x] La Armada Invencible (1588)
- [x] Rebelión de las Alpujarras (1568–1571)
- [x] Guerra de Flandes / Ochenta Años (inicio, 1568)

## Siglo XVII (decadencia y guerras)

- [x] Guerra de los Treinta Años — participación española (1618–1648)
- [x] Sitio de Breda (1624–1625)
- [x] Rebelión de Cataluña — Guerra dels Segadors (1640–1652)
- [x] Restauración de Portugal (1640)
- [x] Guerra de Sucesión Española (1701–1714)

## Siglo XVIII (Borbones)

- [x] Reformas borbónicas y expulsión de los jesuitas (1767)
- [x] Expediciones científicas: Malaspina, límites (1789–1794)
- [x] Guerra de los Siete Años — pérdida y recuperación de La Habana (1762–1763)

## Independencias y ocaso (siglo XIX)

- [x] Guerra de la Independencia Española (1808–1814)
- [x] Independencia de México (1810–1821)
- [x] Campañas de Simón Bolívar (1810–1824)
- [x] Campañas de José de San Martín (1812–1824)
- [x] Guerra hispano-estadounidense (1898)

## Figuras y episodios añadidos tras revisión crítica (no estaban en la lista original)

- [x] Segunda fundación de Buenos Aires — Juan de Garay (1580)
- [x] Conquista y colonización de la Florida — Pedro Menéndez de Avilés,
      fundación de San Agustín (1565)
- [x] Descubrimiento del río Amazonas — Francisco de Orellana (1541–1542)
- [x] Defensa de Cartagena de Indias — Blas de Lezo (1741)
- [x] Campaña de Bernardo de Gálvez en el golfo de México — toma de
      Panzacola (1779–1781)
- [x] Francisco de Toledo, virrey organizador del Perú, añadido a la
      caída de Vilcabamba (1572)

## Notas de proceso

- Cada campaña sigue el patrón de `scripts/semillas/conquista-mexico.json`:
  personajes (solo españoles o al servicio de España) + eventos con
  `fechaAprox`, `coordenadas` y `personajeIds`.
- Verificar SIEMPRE los títulos de Wikipedia antes de escribir la semilla
  (ver método usado en el chat: `action=query&titles=...&redirects=1`),
  con al menos 1–1.5s entre peticiones para no chocar con el límite de
  tasa (429).
- Tras `fetch-wikipedia.mjs` y `aplicar-ejemplo.mjs`, añadir manualmente
  la `Ruta` correspondiente en `src/data/rutas.ts` con los `rutaId`
  enlazados en cada evento, un `color` propio (hex) que la distinga de
  las demás campañas, y sus `protagonistaIds`.
- **Rutas marítimas**: generarlas con `generar-rutas-maritimas.mjs` +
  `aplicar-rutas-maritimas.mjs` (usa el grafo de navegación real de
  searoute-ts). Añadir los waypoints históricos (puertos/puntos de paso)
  al diccionario `RUTAS_MARITIMAS` del primer script.
- **Rutas terrestres**: NUNCA generarlas con un enrutador de carreteras
  (OSRM u otro) — seguirían la red viaria MODERNA, tan anacrónico como
  mostrar fronteras actuales. Basta con los hitos históricos documentados
  como coordinates de la `Ruta`; `MapaHistorico.tsx` los suaviza con una
  curva Catmull-Rom (`suavizarLinea`, en `src/lib/spline.ts`) al dibujar.
- Revisar los avisos de validación del pipeline antes de dar la campaña
  por cerrada.
