import { SITE, absolute, isoDate } from './site';

/** JSON-LD builders. Every page emits at least WebPage + BreadcrumbList; templates add their own. */

export const organization = () => ({
  '@type': 'Organization',
  '@id': `${SITE.url}/#organization`,
  name: SITE.name,
  url: SITE.url,
  logo: { '@type': 'ImageObject', url: absolute('/logo.png'), width: 1200, height: 630 },
  description: SITE.description,
  foundingDate: SITE.founded,
  email: SITE.email,
  sameAs: Object.values(SITE.social),
});

export const website = () => ({
  '@type': 'WebSite',
  '@id': `${SITE.url}/#website`,
  url: SITE.url,
  name: SITE.name,
  alternateName: 'Latchkey',
  description: SITE.description,
  publisher: { '@id': `${SITE.url}/#organization` },
  inLanguage: 'en-US',
  potentialAction: {
    '@type': 'SearchAction',
    target: { '@type': 'EntryPoint', urlTemplate: `${SITE.url}/search/?q={search_term_string}` },
    'query-input': 'required name=search_term_string',
  },
});

export const person = (p: { name: string; slug: string; role: string; bio?: string; knowsAbout?: string[]; sameAs?: string[]; image?: string }) => ({
  '@type': 'Person',
  '@id': absolute(`/about/team/${p.slug}/#person`),
  name: p.name,
  url: absolute(`/about/team/${p.slug}/`),
  jobTitle: p.role,
  description: p.bio,
  knowsAbout: p.knowsAbout,
  sameAs: p.sameAs,
  image: p.image ? absolute(p.image) : undefined,
  worksFor: { '@id': `${SITE.url}/#organization` },
});

export const breadcrumbs = (items: { name: string; href: string }[]) => ({
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: it.name,
    item: absolute(it.href),
  })),
});

export const webpage = (p: { url: string; title: string; description: string; updated?: Date | string; published?: Date | string }) => ({
  '@type': 'WebPage',
  '@id': absolute(p.url),
  url: absolute(p.url),
  name: p.title,
  description: p.description,
  isPartOf: { '@id': `${SITE.url}/#website` },
  dateModified: p.updated ? isoDate(p.updated) : undefined,
  datePublished: p.published ? isoDate(p.published) : undefined,
  inLanguage: 'en-US',
});

export const article = (p: {
  url: string;
  title: string;
  description: string;
  published: Date | string;
  updated: Date | string;
  authorSlug?: string;
  authorName?: string;
  news?: boolean;
  about?: string[];
  citations?: string[];
}) => ({
  '@type': p.news ? 'NewsArticle' : 'Article',
  '@id': absolute(p.url) + '#article',
  headline: p.title,
  description: p.description,
  url: absolute(p.url),
  mainEntityOfPage: absolute(p.url),
  datePublished: isoDate(p.published),
  dateModified: isoDate(p.updated),
  author: p.authorSlug
    ? { '@id': absolute(`/about/team/${p.authorSlug}/#person`) }
    : { '@type': 'Organization', '@id': `${SITE.url}/#organization` },
  publisher: { '@id': `${SITE.url}/#organization` },
  about: p.about?.map((name) => ({ '@type': 'Thing', name })),
  citation: p.citations,
  isAccessibleForFree: true,
  inLanguage: 'en-US',
});

export const howTo = (p: { url: string; name: string; description: string; totalTime: string; tools?: string[]; steps: { name: string; text: string }[]; updated: Date | string }) => ({
  '@type': 'HowTo',
  '@id': absolute(p.url) + '#howto',
  name: p.name,
  description: p.description,
  totalTime: p.totalTime,
  tool: p.tools?.map((t) => ({ '@type': 'HowToTool', name: t })),
  step: p.steps.map((s, i) => ({
    '@type': 'HowToStep',
    position: i + 1,
    name: s.name,
    text: s.text,
    url: absolute(p.url) + `#step-${i + 1}`,
  })),
  dateModified: isoDate(p.updated),
});

export const faqPage = (items: { q: string; a: string }[]) =>
  items.length
    ? {
        '@type': 'FAQPage',
        mainEntity: items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      }
    : null;

export const definedTerm = (p: { url: string; term: string; definition: string }) => ({
  '@type': 'DefinedTerm',
  '@id': absolute(p.url),
  name: p.term,
  description: p.definition,
  url: absolute(p.url),
  inDefinedTermSet: { '@type': 'DefinedTermSet', '@id': absolute('/glossary/'), name: 'Latchkey Daily Glossary' },
});

export const product = (p: { url: string; name: string; brand?: string; description: string; price?: string; rating?: number; pros?: string[]; cons?: string[]; updated: Date | string; authorSlug?: string }) => ({
  '@type': 'Product',
  '@id': absolute(p.url) + '#product',
  name: p.name,
  brand: p.brand ? { '@type': 'Brand', name: p.brand } : undefined,
  description: p.description,
  offers: p.price ? { '@type': 'Offer', price: p.price.replace(/[^0-9.]/g, '') || undefined, priceCurrency: 'USD', description: p.price } : undefined,
  review: {
    '@type': 'Review',
    author: p.authorSlug ? { '@id': absolute(`/about/team/${p.authorSlug}/#person`) } : { '@id': `${SITE.url}/#organization` },
    datePublished: isoDate(p.updated),
    reviewRating: p.rating ? { '@type': 'Rating', ratingValue: p.rating, bestRating: 5 } : undefined,
    positiveNotes: p.pros?.length ? { '@type': 'ItemList', itemListElement: p.pros.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t })) } : undefined,
    negativeNotes: p.cons?.length ? { '@type': 'ItemList', itemListElement: p.cons.map((t, i) => ({ '@type': 'ListItem', position: i + 1, name: t })) } : undefined,
  },
});

export const itemList = (p: { name: string; items: { name: string; href: string }[] }) => ({
  '@type': 'ItemList',
  name: p.name,
  numberOfItems: p.items.length,
  itemListElement: p.items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, url: absolute(it.href) })),
});

export const collectionPage = (p: { url: string; title: string; description: string; items: { name: string; href: string }[] }) => ({
  '@type': 'CollectionPage',
  '@id': absolute(p.url),
  url: absolute(p.url),
  name: p.title,
  description: p.description,
  isPartOf: { '@id': `${SITE.url}/#website` },
  mainEntity: itemList({ name: p.title, items: p.items }),
});

export const videoObject = (p: { url: string; name: string; description: string; youtubeId: string; uploadDate: Date | string; duration: string; transcript?: string }) => ({
  '@type': 'VideoObject',
  '@id': absolute(p.url) + '#video',
  name: p.name,
  description: p.description,
  thumbnailUrl: [`https://i.ytimg.com/vi/${p.youtubeId}/maxresdefault.jpg`],
  uploadDate: isoDate(p.uploadDate),
  duration: p.duration,
  embedUrl: `https://www.youtube.com/embed/${p.youtubeId}`,
  contentUrl: `https://www.youtube.com/watch?v=${p.youtubeId}`,
  transcript: p.transcript,
  publisher: { '@id': `${SITE.url}/#organization` },
});

/** Wrap any number of nodes into one JSON-LD graph. Nulls are dropped. */
export function graph(...nodes: (object | null | undefined)[]) {
  return {
    '@context': 'https://schema.org',
    '@graph': nodes.filter(Boolean).map(clean),
  };
}

function clean<T>(obj: T): T {
  if (Array.isArray(obj)) return obj.map(clean) as T;
  if (obj && typeof obj === 'object') {
    return Object.fromEntries(
      Object.entries(obj as Record<string, unknown>)
        .filter(([, v]) => v !== undefined && v !== null)
        .map(([k, v]) => [k, clean(v)]),
    ) as T;
  }
  return obj;
}
