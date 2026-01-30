import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: ``
      }
    }
  },
  build: {
    outDir: 'dist',
    sourcemap: false
  },
  base: process.env.NODE_ENV === 'production' ? '/sveak-test-project/' : '/'
});