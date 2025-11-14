import { glob } from "astro/loaders";
import { defineCollection, z } from "astro:content";

const date = z.object({
  day: z.number().int().min(1).max(31),
  month: z.number().int().min(1).max(12),
  year: z.number().int(),
  order: z.number().int().optional(),
});

const blog = defineCollection({
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      description: z.string().optional(),
      author: z.string(),
      createdDate: date,
      updatedDate: date.optional(),
      image: image().optional(),
      tags: z.array(z.string()),
      index: z.number().int().optional(),
    }),
});

export const collections = { blog };
