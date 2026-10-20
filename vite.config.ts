import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Relative asset paths so the build works on GitHub Pages (/Sayed1/) and any static host.
  base: './',
});
