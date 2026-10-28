// One-off import of the old Wix site: blog posts, categories, issue PDFs and media.
// Usage: node scripts/import-wix.mjs
import * as cheerio from 'cheerio';
import TurndownService from 'turndown';
import { mkdir, writeFile, access } from 'node:fs/promises';
import path from 'node:path';

const BASE = 'https://www.revuedesjuristesdesciencespo.fr';
const ROOT = path.resolve(import.meta.dirname, '..');
const POSTS_DIR = path.join(ROOT, 'src/content/posts');
const MEDIA_DIR = path.join(ROOT, 'public/media/posts');
const ISSUES_DIR = path.join(ROOT, 'public/issues');
const DUMP_DIR = path.join(ROOT, 'scripts/dump');

// Posts that were only tests or duplicates on Wix.
const SKIP = new Set(['this-is-a-test-post', 'test-post']);

const get = async (url) => {
  for (let i = 0; i < 3; i++) {
    const res = await fetch(url);
    if (res.ok) return res;
    await new Promise((r) => setTimeout(r, 1000 * (i + 1)));
  }
  throw new Error(`GET ${url} failed`);
};
const html = async (url) => (await get(url)).text();
const exists = (p) => access(p).then(() => true, () => false);

async function download(url, dest) {
  if (await exists(dest)) return;
  const buf = Buffer.from(await (await get(url)).arrayBuffer());
  await mkdir(path.dirname(dest), { recursive: true });
  await writeFile(dest, buf);
}

// Wix media ids look like 1826fe_<hash>~mv2.png; the bare URL is the original upload.
async function saveWixImage(id) {
  const file = id.replace('~mv2', '');
  await download(`https://static.wixstatic.com/media/${id}`, path.join(MEDIA_DIR, file));
  return `/media/posts/${file}`;
}

const sitemap = async (name) =>
  [...(await html(`${BASE}/${name}`)).matchAll(/<loc>(.*?)<\/loc>/g)].map((m) => m[1]);

const slugOf = (url) => decodeURIComponent(new URL(url).pathname.split('/').pop());

const yaml = (v) => JSON.stringify(v);

const FR_WORDS = /\b(le|la|les|des|une|est|dans|pour|qui|du|et)\b/gi;
const EN_WORDS = /\b(the|of|and|is|in|to|that|for|with|this)\b/gi;
const detectLang = (text) =>
  (text.match(FR_WORDS) || []).length > (text.match(EN_WORDS) || []).length ? 'fr' : 'en';

const turndown = new TurndownService({ headingStyle: 'atx', bulletListMarker: '-', emDelimiter: '*' });
turndown.remove(['button', 'svg', 'script', 'style']);

async function importCategories() {
  const cats = {};
  const postCats = {};
  for (const url of await sitemap('blog-categories-sitemap.xml')) {
    if (!url.includes('/categories/')) continue;
    const slug = slugOf(url);
    const $ = cheerio.load(await html(url));
    const name = $('h1').first().text().trim() || $('title').text().split('|')[0].trim();
    cats[slug] = name;
    // Category pages paginate as /page/N.
    for (let page = 1; page < 10; page++) {
      const $p = page === 1 ? $ : cheerio.load(await html(`${url}/page/${page}`).catch(() => ''));
      const links = $p('a[href*="/post/"]').map((_, a) => slugOf($p(a).attr('href'))).get();
      if (!links.length) break;
      for (const s of new Set(links)) (postCats[s] ??= new Set()).add(slug);
      if (page === 1 && !$('a[href*="/page/2"]').length) break;
    }
  }
  await writeFile(
    path.join(ROOT, 'src/content/categories.json'),
    JSON.stringify(Object.entries(cats).map(([slug, name]) => ({ slug, name })), null, 2) + '\n'
  );
  return postCats;
}

async function importPost(url, postCats) {
  const slug = slugOf(url);
  const $ = cheerio.load(await html(url));
  const ld = JSON.parse($('script[type="application/ld+json"]').first().text() || '{}');
  const title = $('[data-hook="post-title"]').first().text().trim() || ld.headline;
  const author = $('[data-hook="user-name"]').first().text().trim() || ld.author?.name || '';
  const date = $('meta[property="article:published_time"]').attr('content') || ld.datePublished;
  const description = $('meta[name="description"]').attr('content') || '';

  const cv = $('[data-id="content-viewer"]').first();
  for (const fig of cv.find('figure').toArray()) {
    const id = $(fig).find('wow-image').attr('id');
    const caption = $(fig).find('figcaption').text().trim();
    if (!id) { $(fig).remove(); continue; }
    const src = await saveWixImage(id);
    $(fig).replaceWith(`<p><img src="${src}" alt="${caption.replace(/"/g, '&quot;')}"></p>${caption ? `<p><em>${caption}</em></p>` : ''}`);
  }
  // Wix wraps every inline run in styled spans; links carry the real target.
  cv.find('a').each((_, a) => { $(a).attr('href', $(a).attr('href')?.replace(BASE, '') || ''); });
  const body = turndown.turndown(cv.html() || '')
    .replace(/^[ \t ​]+$/gm, '')
    .replace(/\n{3,}/g, '\n\n')
    .trim();

  let cover = '';
  const og = $('meta[property="og:image"]').attr('content');
  const ogId = og?.match(/media\/([^/]+~mv2\.\w+)/)?.[1];
  if (ogId) cover = await saveWixImage(ogId);

  const fm = [
    '---',
    `title: ${yaml(title)}`,
    `author: ${yaml(author)}`,
    `date: ${date}`,
    `lang: ${detectLang(body)}`,
    `categories: ${yaml([...(postCats[slug] || [])])}`,
    cover ? `cover: ${yaml(cover)}` : null,
    `description: ${yaml(description)}`,
    '---',
  ].filter((l) => l !== null);
  await writeFile(path.join(POSTS_DIR, `${slug}.md`), fm.join('\n') + '\n\n' + body + '\n');
}

async function importIssues() {
  const $ = cheerio.load(await html(`${BASE}/nos-revues-semestrielles`));
  const issues = [];
  for (const a of $('a[href*=".pdf"]').toArray()) {
    const href = $(a).attr('href');
    const title = $(a).text().trim().replace(/\s+/g, ' ');
    if (!title || issues.some((i) => i.wixUrl === href)) continue;
    const file = path.basename(new URL(href).pathname);
    await download(href, path.join(ISSUES_DIR, file));
    issues.push({ title, pdf: `/issues/${file}`, wixUrl: href });
  }
  // The archive lists newest first, ending at issue 1 / the first numbered PDF.
  await writeFile(path.join(DUMP_DIR, 'issues.json'), JSON.stringify(issues, null, 2));
}

// Plain-text dumps of the static pages, used to write the new page content by hand.
async function dumpPages() {
  const pages = await sitemap('pages-sitemap.xml');
  for (const url of pages) {
    for (const prefix of ['', '/en']) {
      const p = new URL(url).pathname;
      const $ = cheerio.load(await html(BASE + prefix + p));
      $('script,style,svg,header,footer').remove();
      const main = $('main').length ? $('main') : $('body');
      const imgs = main.find('wow-image').map((_, w) => $(w).attr('id')).get();
      const links = main.find('a').map((_, a) => `${$(a).text().trim()} -> ${$(a).attr('href')}`).get();
      const text = main.find('h1,h2,h3,h4,h5,h6,p,li').map((_, e) => `[${e.tagName}] ${$(e).text().trim()}`).get()
        .filter((l) => !/^\[\w+\] ?$/.test(l));
      const name = (decodeURIComponent(p).replace(/\//g, '_') || '_home') + (prefix ? '.en' : '.fr');
      await writeFile(path.join(DUMP_DIR, name + '.txt'),
        `URL: ${BASE + prefix + p}\n\nIMAGES:\n${imgs.join('\n')}\n\nLINKS:\n${links.join('\n')}\n\nTEXT:\n${text.join('\n')}\n`);
    }
  }
}

await mkdir(POSTS_DIR, { recursive: true });
await mkdir(DUMP_DIR, { recursive: true });
const postCats = await importCategories();
const posts = (await sitemap('blog-posts-sitemap.xml')).filter((u) => !SKIP.has(slugOf(u)));
for (const url of posts) {
  try { await importPost(url, postCats); console.log('post', slugOf(url)); }
  catch (e) { console.error('FAILED', url, e.message); }
}
await importIssues();
console.log('issues done');
await dumpPages();
console.log('pages dumped');
