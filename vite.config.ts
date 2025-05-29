import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-simple-typewriter']
  },
  build: {
    rollupOptions: {
      external: ['react-simple-typewriter'],
      output: {
        globals: {
          'react-simple-typewriter': 'ReactSimpleTypewriter'
        }
      }
    }
  }
});
