import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.revuedesjuristesdesciencespo.fr',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  // Show articles exactly as written: no automatic curly quotes, dashes or ellipses.
  markdown: { smartypants: false },
});
