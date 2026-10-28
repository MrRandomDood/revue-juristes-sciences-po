import { defineCollection, z } from 'astro:content';
import { glob, file } from 'astro/loaders';
import { parse } from 'yaml';

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    author: z.string().default(''),
    date: z.coerce.date(),
    lang: z.enum(['fr', 'en']).default('fr'),
    categories: z.array(z.string()).default([]),
    cover: z.string().optional().nullable(),
    description: z.string().optional().nullable(),
    draft: z.boolean().default(false),
  }),
});

// Free-form page text, one file per page and language: src/content/pages/<lang>/<page>.md
const pages = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/pages' }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

const issues = defineCollection({
  loader: file('./src/content/issues.yml', { parser: (text) => yamlList(text, 'issues', 'number') }),
  schema: z.object({
    number: z.coerce.number(),
    title: z.string(),
    year: z.union([z.string(), z.number()]).optional().transform((y) => (y ? String(y) : '')),
    cover: z.string().optional().nullable(),
    pdf: z.string().optional().nullable(),
  }),
});

const categories = defineCollection({
  loader: file('./src/content/categories.yml', { parser: (text) => yamlList(text, 'categories', 'slug') }),
  schema: z.object({ slug: z.string(), name: z.string() }),
});

// The data files hold a top-level list (`issues:`, `categories:`) so the CMS can edit them as one form.
function yamlList(text: string, key: string, idField: string) {
  return (parse(text)[key] ?? []).map((item: Record<string, unknown>) => ({ id: String(item[idField]), ...item }));
}

export const collections = { posts, pages, issues, categories };
