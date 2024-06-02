import { defineCollection, z } from 'astro:content';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
	docs: defineCollection({ 
		schema: (ctx) => {
			const initializedSchema = docsSchema()
			const schema = initializedSchema(ctx)
			
			return schema
				.extend({ 
					image: z.string().optional(),
					template: z.enum(["doc", "splash", "news", "especial"]).default("doc")
				})
		}
	}),
};