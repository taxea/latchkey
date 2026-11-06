import rss, { type RSSFeedItem } from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE } from './site';

export type FeedSection = 'all' | 'newsletter' | 'scams' | 'protect' | 'watch';

export async function feedItems(section: FeedSection): Promise<RSSFeedItem[]> {
  const items: RSSFeedItem[] = [];
  if (section === 'all' || section === 'newsletter') {
    for (const i of await getCollection('issues')) items.push({ title: i.data.title, description: i.data.preview, link: `/newsletter/issues/${i.id}/`, pubDate: i.data.date, categories: ['Newsletter'] });
  }
  if (section === 'all' || section === 'scams') {
    for (const a of await getCollection('alerts')) items.push({ title: a.data.title, description: a.data.summary, link: `/scams/alerts/${a.id}/`, pubDate: a.data.date, categories: ['Scam alert'] });
    for (const s of await getCollection('scams')) items.push({ title: s.data.title, description: s.data.definition, link: `/scams/${s.id}/`, pubDate: s.data.published, categories: ['Scam'] });
  }
  if (section === 'all' || section === 'protect') {
    for (const g of await getCollection('guides')) items.push({ title: g.data.title, description: g.data.atRisk, link: `/protect/${g.id}/`, pubDate: g.data.published, categories: ['Guide'] });
  }
  if (section === 'all' || section === 'watch') {
    for (const v of await getCollection('videos')) items.push({ title: v.data.title, description: v.data.description, link: `/watch/${v.id}/`, pubDate: v.data.uploadDate, categories: ['Video'] });
  }
  return items.sort((a, b) => (b.pubDate?.valueOf() ?? 0) - (a.pubDate?.valueOf() ?? 0)).slice(0, 50);
}

export async function feed(section: FeedSection, site: URL | undefined) {
  const titles: Record<FeedSection, string> = { all: 'everything', newsletter: 'newsletter', scams: 'scams and alerts', protect: 'lockdown guides', watch: 'videos' };
  return rss({
    title: `${SITE.name} — ${titles[section]}`,
    description: SITE.description,
    site: site ?? SITE.url,
    items: await feedItems(section),
    customData: '<language>en-us</language>',
    trailingSlash: true,
  });
}
