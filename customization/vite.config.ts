import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './customization/', 
  plugins: [react()],
  assetsInclude: ['**/*.glb']
})
