import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path' // <-- CUMA NAMBAH INI DOANG DI ATAS

export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"), // <-- DAN SELIPIN INI BIAR ALIAS @/ BERFUNGSI SEMPURNA!
    },
  },
})

