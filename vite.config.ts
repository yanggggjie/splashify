import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'hhttps://api.unsplash.com/',
        changeOrigin: true,
        rewrite: (path) => {
          return path.replace(/^\/api/, '')
        },
      },
    },
  },
})
