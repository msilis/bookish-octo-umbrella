import type { APIRoute } from 'astro';

const getRobotsTxt = (sitemapUrl: string) => `
User-agent: *
Allow: /

# Block AI scrapers & training crawlers
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: ClaudeBot
Disallow: /

User-agent: Anthropic-ai
Disallow: /

User-agent: PerplexityBot
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: CCBot
Disallow: /

User-agent: Bytespider
Disallow: /

Sitemap: ${sitemapUrl}
`.trim();

export const GET: APIRoute = ({ site }) => {
  const siteUrl = site ? site.toString().replace(/\/$/, '') : 'https://example.com';
  const sitemapUrl = `${siteUrl}/sitemap-index.xml`;
  return new Response(getRobotsTxt(sitemapUrl), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
