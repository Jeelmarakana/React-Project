import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Uncomment this base if deploying to GitHub Pages under a repo name:
  // base: '/jb-ornament/',
})
