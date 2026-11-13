# Revue des Juristes de Sciences Po – website

Static rebuild of https://www.revuedesjuristesdesciencespo.fr (previously on Wix), built with [Astro](https://astro.build).
French lives at `/`, English at `/en/`. URLs match the old Wix site.

## Editing content (no code)

Editors use **[Pages CMS](https://app.pagescms.org)**: sign in with GitHub, open this repository, and edit
articles, issues, the team, and page text in a form. Saving commits to the repo and the host redeploys within a minute or two.
The editor is configured in [`.pages.yml`](.pages.yml). Editors need a GitHub account with write access to the repo.

## Where things are

| Content | File |
|---|---|
| Blog articles | `src/content/posts/*.md` |
| Issues archive | `src/content/issues.yml` + PDFs in `public/issues/` |
| Team | `src/content/team.yml` |
| Page text (FR / EN) | `src/content/pages/fr/*.md`, `src/content/pages/en/*.md` |
| Blog categories | `src/content/categories.yml` |
| Footer contact & partners | `src/content/site.yml` |
| Images | `public/media/` |
| Old-URL redirects | `public/_redirects` |

## Development

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

`scripts/import-wix.mjs` is the one-off script that exported posts, images and PDFs from Wix.

## Hosting

Hosted on **Cloudflare Pages**, connected to this GitHub repo: build command `npm run build`, output directory `dist`
(Node version from `.node-version`). Every push to `main` redeploys. Old Wix URLs are redirected by `public/_redirects`.
Cloudflare Pages rejects files over 25 MB, so compress large PDFs before adding them.
