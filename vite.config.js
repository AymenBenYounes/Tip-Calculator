import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  build: '/Tip-Calculator/',
  server:{
    port:3000
  },
  plugins: [react()],
})
