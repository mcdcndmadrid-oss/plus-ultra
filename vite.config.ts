import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg'],
      // Sin esto, el service worker y el manifest solo se generan en
      // `npm run build`; activarlo en desarrollo permite comprobar la
      // instalabilidad con `npm run dev` sin tener que compilar antes.
      devOptions: { enabled: true, type: 'module' },
      manifest: {
        name: 'Plus Ultra',
        short_name: 'Plus Ultra',
        description:
          'Visualizador interactivo de la expansión territorial del Imperio español (1469–1899).',
        lang: 'es',
        start_url: '/',
        display: 'standalone',
        // El editor privado (?editor=1) no debe entrar en el ámbito de la
        // PWA: cualquier navegación fuera del visor público sale del
        // "modo app" y abre el navegador normal.
        scope: '/',
        background_color: '#12262f',
        theme_color: '#12262f',
        icons: [
          { src: '/icons/icon-192.png', sizes: '192x192', type: 'image/png' },
          { src: '/icons/icon-512.png', sizes: '512x512', type: 'image/png' },
          {
            src: '/icons/icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable',
          },
        ],
      },
      workbox: {
        // Los tiles de mapa (MapLibre/OpenFreeMap/Esri) y las imágenes de
        // Wikipedia se piden a decenas de orígenes externos y cambian de
        // URL constantemente: no tiene sentido intentar precachearlos
        // como "cacheables por wildcard". Solo se precachea el propio
        // bundle de la app; el resto sigue funcionando en línea como
        // hasta ahora, sin caché offline.
        globPatterns: ['**/*.{js,css,html,svg,png,ico}'],
        // El bundle principal incluye MapLibre GL y supera el límite por
        // defecto de precaché (2 MiB); se sube a 4 MiB para poder
        // precachearlo sin tener que trocear el build todavía.
        maximumFileSizeToCacheInBytes: 4 * 1024 * 1024,
      },
    }),
  ],
  optimizeDeps: {
    exclude: ['maplibre-gl'],
  },
})
