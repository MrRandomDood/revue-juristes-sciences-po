import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.revuedesjuristesdesciencespo.fr',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
