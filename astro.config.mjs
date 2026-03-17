import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://thefiftystandard.com',
  output: 'static',
  integrations: [sitemap()],
});
