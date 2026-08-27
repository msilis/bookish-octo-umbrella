import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'

export async function GET(context) {
    const items = await getCollection('blog')
    return rss({
        title: 'Miks Silis Blog',
        description: 'Frontend engineering thoughts and observations',
        site: context.site,
        items: items.map((post) => ({
            title: post.data.title,
            pubDate: post.data.date,
            link: `/blog/${post.id}`,
        })),
    })
}
