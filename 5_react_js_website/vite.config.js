import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  server:{
    port:3000,
    proxy:{
      /**
       * 
       * apply proxy for all request that starts with "/api"
       */
      '/api':{
        /** the target server using proxy */
          target:'https://json-server-nu-beige.vercel.app',
          /** from different port -> 3000 -> 8000 
           * 
           * the browser disabled it for default
          */
          changeOrigin: true,
        /** rewrite url deleting /api */
          rewrite:(path) => path.replace(/^\/api/,''),
      },
    }
  },
});
