import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    __DEV_API_URL__: JSON.stringify('http://localhost:8080/api'), // Local development
    __PROD_API_URL__: JSON.stringify('http://production-api-url/api'), // Production
  },
})
