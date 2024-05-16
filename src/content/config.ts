import { z, defineCollection } from "astro:content";

export const collections = {
  blog: defineCollection({
    schema: z.object({
      title: z.string(),
      excerpt: z.string(),
      category: z.string().trim(),
      author: z.string().trim(),
      draft: z.boolean().optional(),
      tags: z.array(z.string()),
      image: z.string().optional(),
      publishDate: z.string().transform((str) => new Date(str)),
    }),
  }),
  work: defineCollection({
		schema: z.object({
			title: z.string(),
			publishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
			description: z.string(),
			tags: z.array(z.string()),
			tec: z.array(z.string()),
			links: z.array(z.record(z.string())),
		}),
	}),
  project: defineCollection({
		schema: z.object({
			title: z.string(),
			publishDate: z.coerce.date(),
			img: z.string(),
			img_alt: z.string().optional(),
			description: z.string(),
			tags: z.array(z.string()),
			tec: z.array(z.string()),
			links: z.array(z.record(z.string())),
		}),
	}),
};
