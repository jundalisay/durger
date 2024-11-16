import { defineConfig } from 'vite';
import basicSsl from '@vitejs/plugin-basic-ssl';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    // nodePolyfills({
    //   include: ['buffer', 'process', 'util', 'events'],
    //   globals: {
    //     Buffer: true,
    //     global: true,
    //     process: true,
    //   },
    // }),
  ],
  // plugins: [react(), basicSsl()],
  build: {
      outDir: './docs',
  },
  base: './',
  server: {
      port: 5174,
  },
});
