import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: './customization-main', 
  plugins: [react()],
   assetsInclude: ['**/*.glb']
})
