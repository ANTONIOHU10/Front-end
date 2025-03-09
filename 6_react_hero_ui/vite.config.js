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

    proxy:{
      /**
       * 
       * apply proxy for all request that starts with "/api"
       */
      '/api':{
        /** the target server using proxy */
        target:'http://localhost:8000',
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
