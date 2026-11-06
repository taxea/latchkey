import type { APIContext } from 'astro';
import { feed, type FeedSection } from '@/lib/feed';

export function getStaticPaths() {
  return (['newsletter', 'scams', 'protect', 'watch'] as FeedSection[]).map((section) => ({ params: { section } }));
}

export async function GET(context: APIContext) {
  return feed(context.params.section as FeedSection, context.site);
}
