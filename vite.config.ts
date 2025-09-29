// vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  base: '/01-ts-basics/',
  build: {
    outDir: 'docs', // билд будет в /docs для GitHub Pages
  },
});
