// For hosts without server redirects (GitHub Pages): turns public/_redirects into files in dist/.
// Page redirects become small HTML pages that forward instantly; old Wix PDF links get a copy of the PDF.
// Wildcard rules (with *) are skipped. Run after `npm run build`.
import { readFileSync, writeFileSync, mkdirSync, copyFileSync, existsSync } from 'node:fs';
import { dirname, join } from 'node:path';

const dist = 'dist';
const site = 'https://www.revuedesjuristesdesciencespo.fr';
let pages = 0, pdfs = 0;

for (const line of readFileSync('public/_redirects', 'utf8').split('\n')) {
  const [from, to] = line.trim().split(/\s+/);
  if (!from || from.startsWith('#') || !to || from.includes('*')) continue;

  if (from.endsWith('.pdf')) {
    const src = join(dist, to);
    if (!existsSync(src)) { console.warn(`missing ${to}`); continue; }
    const dest = join(dist, from);
    mkdirSync(dirname(dest), { recursive: true });
    copyFileSync(src, dest);
    pdfs++;
    continue;
  }

  const target = to.endsWith('/') ? to : `${to}/`;
  const dest = join(dist, from, 'index.html');
  if (existsSync(dest)) continue;
  mkdirSync(dirname(dest), { recursive: true });
  writeFileSync(dest, `<!doctype html><meta charset="utf-8"><title>Redirection</title>
<link rel="canonical" href="${site}${target}"><meta name="robots" content="noindex">
<meta http-equiv="refresh" content="0; url=${target}"><a href="${target}">${target}</a>\n`);
  pages++;
}

// GitHub Pages would otherwise skip folders starting with "_" (like _astro and _files).
writeFileSync(join(dist, '.nojekyll'), '');
console.log(`static redirects: ${pages} pages, ${pdfs} PDFs`);
