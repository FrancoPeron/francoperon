import { defineConfig } from 'vite';

export default defineConfig({
  // ... other config options ...
  optimizeDeps: {
    exclude: ['stream'],
  },
});