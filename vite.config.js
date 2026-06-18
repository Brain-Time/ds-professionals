/**
 * vite.config.js
 * ─────────────────────────────────────────────────────────────
 * Performance-optimierter Vite Build + HMR WebSocket Fix
 * ─────────────────────────────────────────────────────────────
 */

import { defineConfig }  from 'vite';
import react             from '@vitejs/plugin-react';
import tailwindcss       from '@tailwindcss/vite';    // ← NEU ✅

export default defineConfig({
  plugins: [
    tailwindcss(),   // ← muss VOR react() stehen ✅
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

  // ── Preview Server (nach npm run build) ─────────────────
  preview: {
    port: 4173,
  },

  build: {
    target: 'es2020',
    chunkSizeWarningLimit: 500,

    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react':  ['react', 'react-dom'],
          'vendor-router': ['react-router-dom'],
          'vendor-motion': ['framer-motion'],
          'vendor-helmet': ['react-helmet-async'],
          'vendor-form':   ['react-hook-form', '@emailjs/browser'],
        },
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      },
    },

    minify:    'esbuild',
    sourcemap: false,
  },
});