import { svelte } from '@sveltejs/vite-plugin-svelte';
import { defineConfig } from 'vite';

const config = defineConfig({
  server: {
    port: 5000
  },
  plugins: [svelte()]
});

export default config;
