import type { APIRoute } from 'astro';
import { SITE } from '@/lib/site';

/**
 * Explicitly welcome the AI search crawlers and Google/Bing; keep private and
 * low-value paths out. Everything else is open.
 */
const bots = [
  'Googlebot', 'Bingbot', 'Applebot', 'DuckDuckBot',
  'GPTBot', 'OAI-SearchBot', 'ChatGPT-User',
  'ClaudeBot', 'Claude-SearchBot', 'Claude-User', 'anthropic-ai',
  'PerplexityBot', 'Perplexity-User',
  'Google-Extended', 'Amazonbot', 'xAI-Bot', 'Grok',
];

export const GET: APIRoute = () => {
  const body = [
    ...bots.flatMap((b) => [`User-agent: ${b}`, 'Allow: /', '']),
    'User-agent: *',
    'Allow: /',
    'Disallow: /search/',
    'Disallow: /members/',
    'Disallow: /account/',
    'Disallow: /subscribe/thanks/',
    'Disallow: /tools/is-this-a-scam/thanks/',
    '',
    `Sitemap: ${SITE.url}/sitemap-index.xml`,
    '',
    `# Latchkey Daily: ${SITE.tagline}`,
    `# Machine-readable overview: ${SITE.url}/llms.txt`,
    '',
  ].join('\n');
  return new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
};
