// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://estebannromeroo.github.io',
  base: '/astro-landing-delete',
  vite: {
    plugins: [tailwindcss()]
  }
});