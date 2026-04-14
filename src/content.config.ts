import { defineCollection, z } from 'astro:content';
import { docsLoader } from '@astrojs/starlight/loaders';
import { docsSchema } from '@astrojs/starlight/schema';

export const collections = {
    docs: defineCollection({
        loader: docsLoader(),
        schema: (context) => docsSchema({
            extend: z.object({
                categories: z.array(z.string()).optional(),
                description: z.string().optional(),
                thumbnail: z.string().optional(),
            }),
        })(context),
    }),
};