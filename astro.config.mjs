// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://latchkeydaily.com',
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
  integrations: [
    sitemap({
      filter: (page) =>
        !page.includes('/search/') &&
        !page.includes('/members/') &&
        !page.includes('/subscribe/thanks/'),
      changefreq: 'daily',
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
