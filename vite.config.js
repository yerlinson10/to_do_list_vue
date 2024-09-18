import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'
import tailwind from 'tailwindcss'
import autoprefixer from 'autoprefixer'

// https://vitejs.dev/config/
export default defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [vue()],
  "baseUrl": ".",
    "paths": {
      "@/*": [
        "src/*"
      ]
    },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) ,
      '@lib': fileURLToPath(new URL('@/lib', import.meta.url)) ,
    },
  },
})
