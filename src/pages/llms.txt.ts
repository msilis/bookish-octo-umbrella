import type { APIRoute } from 'astro';
import { getCollection } from 'astro:content';

export const GET: APIRoute = async ({ site }) => {
  const posts = await getCollection('blog');
  const baseUrl = site ? site.toString().replace(/\/$/, '') : 'https://example.com';

  const sortedPosts = posts.sort(
    (a, b) => new Date(b.data.date).getTime() - new Date(a.data.date).getTime()
  );

  const postList = sortedPosts
    .map((post) => `- [${post.data.title}](${baseUrl}/blog/${post.id})`)
    .join('\n');

  const content = `# Electrical Ellipse

> Documentation and articles from Electrical Ellipse for LLMs and AI agents.

## Core Pages
- [Home](${baseUrl}/)
- [About](${baseUrl}/about)
- [Contact](${baseUrl}/contact)

## Blog Posts
${postList.length > 0 ? postList : '- No blog posts published yet.'}
`.trim();

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
    },
  });
};
