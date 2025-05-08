import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(), react()],
  server: {
    allowedHosts: [
      'e65b-116-204-140-205.ngrok-free.app'  // 👈 your ngrok host here
    ]
  }
})
