import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vite.dev/config/
export default defineConfig({
  // Prevent PostCSS from picking up a parent-dir Tailwind v3 install;
  // styling is handled by @tailwindcss/vite (Tailwind v4).
  css: {
    postcss: {
      plugins: [],
    },
  },
  plugins: [react(), tailwindcss()],
})
