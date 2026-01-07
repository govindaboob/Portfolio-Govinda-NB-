import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Set the correct base path for GitHub Pages project site
  // Replace with your repo name if it changes
  base: '/Portfolio-Govinda-NB-/',
  plugins: [react()]
})
