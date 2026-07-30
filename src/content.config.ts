import { defineCollection } from 'astro:content'
import { glob } from 'astro/loaders'
import z from 'zod'

const blog = defineCollection({
    loader: glob({ pattern: '**/[^_]*.{md,mdx}', base: './src/content/blog' }),
    schema: z.object({
        layout: z.string().optional(),
        title: z.string(),
        date: z.coerce.date(),
    }),
})

export const collections = { blog }
