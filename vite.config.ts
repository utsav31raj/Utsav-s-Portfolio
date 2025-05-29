import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    target: 'es2015',
    outDir: 'dist',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-simple-typewriter', 'framer-motion', 'react-tilt']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react-simple-typewriter']
  }
});
