/**
 * vite.config.js
 * ─────────────────────────────────────────────────────────────
 * Vite 8 + Rolldown kompatibel
 * manualChunks als Funktion (Objekt-Syntax nicht mehr supported)
 * ─────────────────────────────────────────────────────────────
 */

import { defineConfig } from 'vite';
import react            from '@vitejs/plugin-react';
import tailwindcss      from '@tailwindcss/vite';

export default defineConfig({
  plugins: [
    tailwindcss(),  // ← muss VOR react() stehen
    react(),
  ],

  // ── Dev Server ───────────────────────────────────────────
  server: {
    port: 3000,
    open: true,
    hmr: {
      protocol: 'ws',
      host:     'localhost',
      port:     3000,
    },
  },

  // ── Preview Server ───────────────────────────────────────
  preview: {
    port: 4173,
  },

  // ── Build ────────────────────────────────────────────────
  build: {
    target:               'es2020',
    chunkSizeWarningLimit: 600,
    minify:               'oxc',
    sourcemap:            false,

    rollupOptions: {
      output: {
        // Vite 8 / Rolldown: manualChunks muss eine Funktion sein
        manualChunks(id) {
          if (id.includes('node_modules')) {
            if (id.includes('react-dom') || id.includes('react/'))
              return 'vendor-react';
            if (id.includes('react-router-dom'))
              return 'vendor-router';
            if (id.includes('framer-motion'))
              return 'vendor-motion';
            if (id.includes('react-helmet-async'))
              return 'vendor-helmet';
            if (id.includes('react-hook-form') || id.includes('@emailjs'))
              return 'vendor-form';
          }
        },

        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },
  },
});

