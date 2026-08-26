import rss from '@astrojs/rss'

export function GET(context) {
    return rss({
        title: 'Miks Silis Blog',
        description: 'Frontend engineering thoughts and observations',
        site: context.site,
        items: [],
    })
}
