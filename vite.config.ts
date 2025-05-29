import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
    include: ['react-simple-typewriter']
  },
  resolve: {
    dedupe: ['react', 'react-dom', 'react-simple-typewriter']
  }
});
