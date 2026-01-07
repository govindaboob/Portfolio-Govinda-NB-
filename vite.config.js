import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // For Vercel, use root base path
  base: '/',
  plugins: [react()]
})
