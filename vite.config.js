/**
 * vite.config.js
 * ─────────────────────────────────────────────────────────────
 * Vite 8 + Rolldown + SEO/Performance optimiert
 * ─────────────────────────────────────────────────────────────
 */

import { defineConfig }   from 'vite';
import react              from '@vitejs/plugin-react';
import tailwindcss        from '@tailwindcss/vite';
import compression        from 'vite-plugin-compression';

export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    // Gzip
    compression({
      algorithm: 'gzip',
      ext:       '.gz',
      threshold: 1024,
    }),
    // Brotli (bessere Kompression, moderne Browser)
    compression({
      algorithm: 'brotliCompress',
      ext:       '.br',
      threshold: 1024,
    }),
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
    // Bilder inline wenn < 4kb
    assetsInlineLimit:    4096,

    rollupOptions: {
      output: {
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