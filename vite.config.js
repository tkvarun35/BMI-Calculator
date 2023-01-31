import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  scripts: {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview",
    "host": "vite --host"
  }
})
