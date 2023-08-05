import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { basePath } from './src/env.js'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    outDir: 'docs',
    sourcemap: false,
  },
  base: basePath,
  server: {
    port: 8080
  }
})
