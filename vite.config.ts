import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  appType: 'mpa',
  build: {
    chunkSizeWarningLimit: 600,
    rollupOptions: {
      input: {
        main: resolve(process.cwd(), 'index.html'),
        webgl: resolve(process.cwd(), 'services/webgl-development/index.html'),
        threejs: resolve(process.cwd(), 'services/threejs-development/index.html'),
        threeD: resolve(process.cwd(), 'services/3d-website-development/index.html'),
        usa: resolve(process.cwd(), 'services/usa-3d-website-development/index.html'),
        aurelia: resolve(process.cwd(), 'work/aurelia-ridge/index.html'),
        kinetic: resolve(process.cwd(), 'work/kinetic-commerce/index.html'),
        vertex: resolve(process.cwd(), 'work/vertex-os/index.html'),
      },
    },
  },
  server: {
    host: '0.0.0.0',
    allowedHosts: true,
  },
})
