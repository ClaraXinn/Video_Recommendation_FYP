import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    tailwindcss({
      config: {
        darkMode: 'class',
        content: [
          './index.html',
          './src/**/*.{js,ts,jsx,tsx}',
        ],
      },
    }),
  ],
  server: {
    port: 3000,
  }
})
