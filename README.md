# Plus Ultra — Visualizador de la expansión del Imperio español

**Plus Ultra** es una aplicación web interactiva que permite explorar la evolución territorial del Imperio español a lo largo del tiempo: su expansión, las rutas de exploradores y conquistadores, las batallas y acontecimientos clave, y los personajes que los protagonizaron. La fuente principal de contenido es la Wikipedia en español, complementada con Wikidata y datasets geográficos históricos de licencia abierta.

> *Plus Ultra* ("más allá") es el lema heráldico de España, adoptado por Carlos I como divisa de un imperio que rebasó las Columnas de Hércules.

---

## 1. Concepto

El centro de la aplicación es un **mapa interactivo** de estética minimalista. Todo el estado de la app gira en torno a una única variable: **la fecha seleccionada** en la línea temporal. Al mover el slider, el mapa, los paneles laterales y los personajes mostrados se actualizan para reflejar ese momento histórico.

- **Rango temporal**: 1469 (unión dinástica de Castilla y Aragón) — 1899 (venta de las últimas posesiones del Pacífico), con posibilidad de extenderlo hasta 1976 (Sáhara español).
- **Ámbito geográfico completo**: no solo América. El proyecto incluye Filipinas y el Pacífico, Flandes, Italia, Portugal y su imperio (1580–1640) y el norte de África — el contexto europeo que suele faltar en visualizadores similares.
- **Expansión y contracción**: se muestran tanto las conquistas como las **pérdidas** (independencias americanas, tratados, 1898), con un código visual diferenciado. El "viaje" de 1810–1898 es tan interesante como el de 1492–1580.

## 2. Interfaz

```
┌─────────────┬──────────────────────────────┬─────────────┐
│ Aconteci-   │                              │ Personajes  │
│ mientos     │            MAPA              │ de la época │
│ de la época │   (territorios + rutas +     │ (con foto)  │
│ (lista      │    marcadores de eventos)    │             │
│ cronológica)│                              │             │
├─────────────┴──────────────────────────────┴─────────────┤
│  ◀ 1469 ═══════●══════════════════════════ 1899 ▶  ⏯    │
└──────────────────────────────────────────────────────────┘
```

### Mapa
- **Capa base minimalista** por defecto: fondo claro, fronteras sutiles, sin ruido visual.
- **Capas opcionales**: mapa físico (tinte hipsométrico + relieve sombreado) e imagen satélite, seleccionables desde un control discreto.
- **Territorios** coloreados según pertenencia y tipo (virreinato, audiencia, capitanía, plaza), con transiciones suaves al cambiar la fecha.
- **Rutas** de exploradores y conquistadores como líneas animadas.
- **Marcadores de eventos**: batallas, fundaciones, tratados, descubrimientos, rebeliones.
- **Proyección de globo 3D** opcional: para rutas transoceánicas (Galeón de Manila, Flota de Indias) el globo cuenta la historia mejor que Mercator.

### Línea temporal (slider inferior)
- Viaje libre a cualquier fecha, con marcas en hitos clave.
- **Reproducción automática**: el tiempo avanza solo, como un documental.
- **Granularidad variable**: años en general; meses o días en episodios densos (la conquista de Tenochtitlan merece resolución diaria).

### Paneles laterales
- **Izquierda**: acontecimientos, conquistas y viajes relevantes de la época seleccionada, en orden cronológico.
- **Derecha**: personajes relevantes de la época, con imagen.
- Ambos colapsables (esencial en móvil) y **sincronizados con el mapa**: al pasar el cursor por un elemento del panel se resalta en el mapa, y viceversa.

### Ventanas flotantes
Al pulsar sobre cualquier elemento (en el mapa o en los paneles) se abre una ficha con: título, imagen, fecha, resumen extraído de Wikipedia, elementos relacionados navegables (tipo wiki interno) y enlace **"Leer más en Wikipedia"** (atribución conforme a la licencia CC BY-SA).

## 3. Funcionalidades adicionales

| Funcionalidad | Descripción |
|---|---|
| **Modo historia guiada** | Recorridos narrados (p. ej. *La conquista de México, 1519–1521*): el mapa vuela automáticamente entre puntos acompañado de texto. |
| **Flujos comerciales** | Capa opcional con la Flota de Indias, el Galeón de Manila y las rutas de la plata, animadas. |
| **URL compartible** | Fecha, posición del mapa y selección codificadas en la URL (`/1571/batalla-de-lepanto`) para enlazar momentos concretos. |
| **Búsqueda global** | Ctrl+K: buscar personajes, eventos y lugares y saltar a su fecha y ubicación. |
| **Honestidad metodológica** | Aviso de "fronteras aproximadas" con nota sobre fuentes: las fronteras históricas son discutibles y la app lo reconoce. |
| **i18n** | Arquitectura preparada para varios idiomas desde el inicio, aunque el lanzamiento sea solo en español. |
| **Modo claro/oscuro** | Acorde con la estética minimalista. |

## 4. Arquitectura técnica

Aplicación **100 % estática**, sin backend: rápida, barata de servir y funcional offline. El contenido histórico vive en ficheros JSON/GeoJSON generados en tiempo de desarrollo; en producción no se llama a la API de Wikipedia.

| Capa | Tecnología | Motivo |
|---|---|---|
| Frontend | React + TypeScript + Vite | Ecosistema maduro; tipado fuerte para un modelo de datos complejo |
| Mapa | MapLibre GL JS | Open source, sin claves de pago; estilos propios, terreno 3D, globo, animaciones |
| Estado | Zustand | Store ligero: `{ fechaActual, capaBase, seleccion, filtros }` |
| Estilos | Tailwind CSS | Estética minimalista y theming claro/oscuro |
| Teselas | Terrarium/AWS Terrain (mapa físico), Esri World Imagery (satélite) | Gratuitas con atribución |
| Despliegue | GitHub Pages / Netlify / Cloudflare Pages | Sitio estático |

### Modelo de datos

Cuatro colecciones con referencias cruzadas por `id`:

```
data/
  territorios.geojson   → polígonos { id, nombre, desde, hasta, tipo, articuloWiki }
  rutas.geojson         → líneas { id, nombre, protagonistaIds, fechaInicio, fechaFin, tipo, articuloWiki }
  eventos.json          → { id, titulo, fecha, coordenadas, tipo, resumen, imagenWiki, articuloWiki, personajeIds }
  personajes.json       → { id, nombre, nacimiento, muerte, periodoRelevancia, rol, resumen, imagenWiki, articuloWiki, eventoIds }
```

El mapa filtra territorios y rutas por la fecha del slider mediante las propiedades `desde`/`hasta`.

## 5. Pipeline de datos

Scripts de desarrollo (Node) que generan los ficheros de `data/`:

1. **Lista curada de artículos semilla**: "Imperio español", conquistas, virreinatos, batallas, personajes... La curación manual es inevitable; los scripts la asisten, no la sustituyen. **Criterio de personajes**: solo figuras españolas o al servicio de la Corona española (conquistadores, funcionarios, intérpretes como La Malinche); los protagonistas de los pueblos originarios u otras potencias no se perfilan como "personaje", aunque sí pueden aparecer citados dentro del resumen de los eventos en los que participaron.
2. **API REST de Wikipedia en español** (`/api/rest_v1/page/summary/...`): resúmenes, imagen principal y coordenadas.
3. **Wikidata**: fechas, coordenadas e imágenes de forma estructurada — complemento clave al texto de los artículos.
4. **Geometrías territoriales**: [Historical Basemaps](https://github.com/aourednik/historical-basemaps) (instantáneas del mapa político mundial en años concretos: 1492, 1500, 1530, 1600, 1650, 1700, 1715, 1783, 1800, 1815, 1880, 1900 — no es continuo). Cada territorio histórico se trocea en varios **tramos** consecutivos, uno por cada instantánea disponible dentro de su vigencia (p. ej. el Virreinato de Nueva España tiene 8 tramos entre 1521 y 1821), así la frontera cambia de forma varias veces a lo largo del tiempo en vez de mantener una silueta fija — ver [generar-territorios.mjs](scripts/generar-territorios.mjs) y la nota de "fronteras aproximadas" en la sección 3.
5. **Validación**: script que comprueba rangos temporales, referencias cruzadas y geometrías.

### Anacronismo del mapa base

**Resuelto en parte.** El estilo "Minimalista" (Positron) se descarga en tiempo de ejecución y se le retiran las capas de fronteras y topónimos político-administrativos modernos (`boundary_*`, `label_country/state/city/town/village`), dejando solo geografía física atemporal (costas, mares, ríos). El "Mapa físico" se sustituyó además por el mapa de relieve de Esri (Natural Earth), que tampoco incluye fronteras ni ciudades modernas — ver [estilosMapa.ts](src/components/estilosMapa.ts).

Los territorios españoles ya se pintan con geometría real por época (ver sección 5). Queda pendiente:

- **Reinos y potencias vecinas**: Francia, Portugal, Inglaterra, Imperio Otomano... con sus fronteras del momento (Historical Basemaps las tiene; solo falta curar el manifiesto igual que se hizo para España).
- **Catálogo de ciudades históricas**: etiquetas que aparezcan/desaparezcan según su fecha de fundación y usen el nombre de la época (p. ej. "Tenochtitlan" antes de 1521, no "Ciudad de México").

Esto amplía considerablemente la curación de datos de esta fase, pero es necesario para que el mapa sea históricamente honesto y no una capa moderna con adornos encima.

## 6. Plan de desarrollo

| Fase | Entregable |
|---|---|
| **1. Esqueleto** | Mapa minimalista + slider + estado global. Datos de prueba: 2-3 territorios, la ruta de Colón (1492), 5 eventos. |
| **2. Interacción** | Paneles laterales, ventanas flotantes, resaltado cruzado, capas de mapa físico y satélite. |
| **3. Pipeline de datos** | Scripts Wikipedia/Wikidata ✅, integración de Historical Basemaps ✅ (11 territorios reales: Castilla, España, Nueva España, Perú, Nueva Granada, Río de la Plata, Filipinas, Nápoles, Sicilia, Milán, Cerdeña), primera época completa (1469–1550) — en curso, ver [ROADMAP.md](scripts/ROADMAP.md). |
| **4. Contenido exhaustivo** | Resto de épocas: Filipinas, Flandes e Italia, unión ibérica, independencias, 1898. |
| **5. Pulido** | Historias guiadas, reproducción automática, flujos comerciales, globo 3D, móvil, rendimiento y accesibilidad. |

### Riesgo principal

El código es la parte fácil; **el cuello de botella es la curación de datos**, especialmente los polígonos territoriales por época. Por eso la fase 3 valida el pipeline con una sola época antes de intentar ser exhaustivo, y se parte de Historical Basemaps en lugar de digitalizar desde cero.

## 7. Licencias y atribución

- Contenido textual e imágenes: Wikipedia / Wikimedia Commons (CC BY-SA), con enlace de atribución en cada ficha.
- Fronteras históricas: Historical Basemaps y fuentes que se documentarán en la nota metodológica.
- Teselas de terreno y satélite: atribución de sus proveedores en el mapa.
