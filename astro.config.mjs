import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://demo3.jakefixestech.com',
  integrations: [
    tailwind(),
    sitemap({
      customPages: ['https://demo3.jakefixestech.com/'],
    }),
  ],
});