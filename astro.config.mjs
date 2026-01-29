// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://EstebannRomeroo.github.io',
  base: '/astro-landing-delete',
  vite: {
    plugins: [tailwindcss()]
  }
});