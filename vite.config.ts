import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import 'regenerator-runtime/runtime'; // Add this line

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});