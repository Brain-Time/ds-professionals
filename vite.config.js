// vite.config.js
// Vite 5 Konfiguration mit React-Plugin, @ Alias und Tailwind CSS v4
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import path from 'path';

export default defineConfig({
  plugins: [
    // React Fast Refresh + JSX Transform
    react(),
    // Tailwind CSS v4 als Vite-Plugin (kein postcss.config nötig)
    tailwindcss(),
  ],

  resolve: {
    alias: {
      // @ zeigt immer auf src/ → saubere Imports ohne ../../
      '@': path.resolve(__dirname, './src'),
    },
  },

  // Dev-Server Einstellungen
  server: {
    port: 3000,
    open: true,
  },

  // Build-Optimierungen für Lighthouse 95+
  build: {
    outDir: 'dist',
    // Code-Splitting für bessere Performance
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor-Chunk: React & Router
          vendor: ['react', 'react-dom', 'react-router-dom'],
          // Animation-Chunk: Framer Motion (groß → separat)
          animations: ['framer-motion'],
        },
      },
    },
    // Kleinere Chunks für besseres Caching
    chunkSizeWarningLimit: 600,
  },

  // Optimierungen für schnelleren Dev-Start
  optimizeDeps: {
    include: ['react', 'react-dom', 'react-router-dom', 'framer-motion'],
  },
});
