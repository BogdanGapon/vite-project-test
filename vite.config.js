import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
// https://vitejs.dev/config/
export default defineConfig({
  base: '/vite-project-test/',
  plugins: [react()],
  resolve: {
    alias: {
      src: path.resolve('src/'),
    },
  },
});
