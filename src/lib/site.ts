/**
 * Site-wide constants. One name for every entity, used everywhere
 * (copy, schema, llms.txt, feeds) so every engine sees the same definition.
 */
export const SITE = {
  name: 'Latchkey Daily',
  domain: 'latchkeydaily.com',
  url: 'https://latchkeydaily.com',
  tagline: 'The Gen X guide to life in the middle.',
  taglines: [
    'A practical guide for the sandwich years.',
    'Real advice for real life in Gen X.',
    'Figured it out before. Still do.',
  ],
  // This sentence is the meta description, the WebSite schema description and the hero sub-line. Keep them identical.
  description:
    'Latchkey Daily is the free weekday brief for Gen X: the scams going around and how to stop them, technology made usable, and the money, family and caregiving questions of the sandwich years. Five minutes, one action, every weekday.',
  shortDescription:
    'The free weekday brief for Gen X: scams, security, tech made usable, and the money and family questions of the sandwich years.',
  email: 'hello@latchkeydaily.com',
  pressEmail: 'press@latchkeydaily.com',
  advertiseEmail: 'partners@latchkeydaily.com',
  founded: '2027',
  // Social handles: same name everywhere.
  social: {
    youtube: 'https://www.youtube.com/@latchkeydaily',
    facebook: 'https://www.facebook.com/latchkeydaily',
    instagram: 'https://www.instagram.com/latchkeydaily',
    tiktok: 'https://www.tiktok.com/@latchkeydaily',
    x: 'https://x.com/latchkeydaily',
    linkedin: 'https://www.linkedin.com/company/latchkeydaily',
  },
  // Ownership disclosure, verbatim everywhere it appears.
  ownership:
    'Latchkey Daily is independently operated and owned by the owner of TaxSolve. Tax content links to TaxSolve and says so.',
  // Replace with the on-camera host once cast. Used in Person schema and bylines.
  host: {
    name: 'The Latchkey Daily Team',
    slug: 'team',
    title: 'Editors',
  },
  // Newsletter signup endpoint. Point this at your email platform's form action
  // (Beehiiv, Kit, etc.) or a Cloudflare Worker that forwards to it.
  signupAction: '/subscribe/thanks/',
  signupMethod: 'GET',
  // Scam report form endpoint. Point at a form service or a Cloudflare Worker that writes to the moderation queue.
  scamReportAction: '/tools/is-this-a-scam/thanks/',
  // TaxSolve consult booking. Tracked at the source.
  taxsolveConsultUrl: 'https://taxsolve.com/?utm_source=latchkeydaily&utm_medium=site&utm_campaign=taxes',
  // Live subscriber count shown on the home page (rounded). Update from the email platform.
  subscriberCount: 12000,
} as const;

export const NAV = [
  { label: 'Scams', href: '/scams/' },
  { label: 'Protect', href: '/protect/' },
  { label: 'Tech', href: '/tech/' },
  { label: 'Money & Taxes', href: '/money/', children: [{ label: 'Money', href: '/money/' }, { label: 'Taxes', href: '/taxes/' }] },
  { label: 'Family', href: '/family/', children: [{ label: 'Family', href: '/family/' }, { label: 'Estate', href: '/estate/' }] },
  { label: 'Watch', href: '/watch/' },
  { label: 'Recommends', href: '/recommends/' },
] as const;

export const SECONDARY_NAV = [
  { label: 'Tools', href: '/tools/' },
  { label: 'Glossary', href: '/glossary/' },
  { label: 'Archive', href: '/newsletter/archive/' },
  { label: 'About', href: '/about/' },
  { label: 'Report a scam', href: '/tools/is-this-a-scam/' },
] as const;

/** The seven brand topics from the brand kit, with the hub each one maps to. */
export const TOPICS = [
  { key: 'work', label: 'Work & Career', href: '/money/small-business/', icon: 'laptop' },
  { key: 'family', label: 'Family & Kids', href: '/family/', icon: 'family' },
  { key: 'parents', label: 'Aging Parents', href: '/family/caregiving/', icon: 'heart' },
  { key: 'money', label: 'Money & Planning', href: '/money/', icon: 'coins' },
  { key: 'health', label: 'Health & Wellbeing', href: '/family/', icon: 'dumbbell' },
  { key: 'tech', label: 'Tech & AI', href: '/tech/', icon: 'cursor' },
  { key: 'life', label: 'Life & Adventure', href: '/newsletter/', icon: 'mountain' },
] as const;

export const HUBS = [
  { slug: 'scams', title: 'Scams', href: '/scams/', blurb: 'Every scam going around, what it looks like, and what to do.' },
  { slug: 'protect', title: 'Protect', href: '/protect/', blurb: 'Step-by-step lockdown guides for every account and device.' },
  { slug: 'tech', title: 'Tech', href: '/tech/', blurb: 'What to actually use AI and technology for, in plain English.' },
  { slug: 'money', title: 'Money', href: '/money/', blurb: 'Retirement, catch-up saving, advisors and the parent-money talk.' },
  { slug: 'taxes', title: 'Taxes', href: '/taxes/', blurb: 'IRS letters decoded, unfiled years, and when to get help.' },
  { slug: 'family', title: 'Family', href: '/family/', blurb: 'Caregiving, Medicare, medical bills and the documents to get now.' },
  { slug: 'estate', title: 'Estate', href: '/estate/', blurb: 'Wills, power of attorney and your digital legacy.' },
] as const;

export function absolute(path: string): string {
  return new URL(path, SITE.url).toString();
}

export function formatDate(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric', timeZone: 'UTC' });
}

export function isoDate(d: Date | string): string {
  const date = typeof d === 'string' ? new Date(d) : d;
  return date.toISOString().slice(0, 10);
}
