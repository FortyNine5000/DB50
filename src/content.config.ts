import { z, defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';

const articles = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/articles' }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    publishedDate: z.string(),
    modifiedDate: z.string().optional(),
    author: z.string().default('The Fifty Standard'),
    readingTime: z.string().optional(),
    tags: z.array(z.string()).optional(),
    relatedSlugs: z.array(z.string()).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { articles };
