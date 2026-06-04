import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react({
      jsxRuntime: 'automatic',
    }),
  ],
  esbuild: {
    jsxInject: "import React from 'react'",
  },
  build: {
    rollupOptions: {
      input: {
        main: fileURLToPath(new URL('./index.html', import.meta.url)),
        invitation2026: fileURLToPath(new URL('./invitation-2026.html', import.meta.url)),
        nikkahInvitation9346: fileURLToPath(new URL('./nikkah-invitation-9346.html', import.meta.url)),
        receptionInvitation2122: fileURLToPath(new URL('./reception-invitation-2122.html', import.meta.url)),
      },
    },
  },
})
