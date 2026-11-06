import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

/**
 * The five programmatic record types from the site architecture, plus
 * newsletter issues, video pages and the team. Writers fill fields;
 * templates and schema are generated from them.
 */

const faq = z.array(z.object({ q: z.string(), a: z.string() }));

const scams = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/scams' }),
  schema: z.object({
    title: z.string(), // "The grandparent scam"
    aliases: z.array(z.string()).default([]),
    definition: z.string(), // one quotable sentence
    channels: z.array(z.enum(['text', 'phone', 'email', 'social', 'in-person', 'mail', 'web'])),
    targets: z.array(z.enum(['parents', 'teens', 'small-business', 'homeowners', 'job-seekers', 'retirees', 'everyone'])),
    impersonates: z.array(z.string()).default([]), // "IRS", "Amazon", "a grandchild"
    redFlags: z.array(z.string()),
    whatToDo: z.array(z.string()),
    ifYouPaid: z.array(z.string()).default([]),
    reportTo: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
    related: z.array(z.string()).default([]), // scam slugs
    guides: z.array(z.string()).default([]), // guide slugs
    readerReports: z.number().int().default(0),
    faq: faq.default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
    reviewedBy: z.string().default('team'),
  }),
});

const alerts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/alerts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    status: z.enum(['active', 'watch', 'resolved']).default('active'),
    scam: z.string().optional(), // parent scam slug
    guide: z.string().optional(), // related guide slug
    summary: z.string(),
    action: z.string(),
    sources: z.array(z.object({ name: z.string(), url: z.string().url() })).default([]),
  }),
});

const guides = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/guides' }),
  schema: z.object({
    title: z.string(), // "Lock down your Gmail account"
    service: z.string(), // "Gmail"
    category: z.enum(['email', 'phone', 'social', 'banking', 'payments', 'accounts', 'home', 'family']),
    atRisk: z.string(), // what is at risk, two lines
    totalTime: z.string().default('PT10M'), // ISO 8601 duration for HowTo
    checklist: z.array(z.string()), // the 10-minute version
    steps: z.array(z.object({ name: z.string(), text: z.string() })),
    forParent: z.array(z.string()).default([]),
    recovery: z.array(z.string()).default([]),
    tools: z.array(z.string()).default([]),
    related: z.array(z.string()).default([]),
    scams: z.array(z.string()).default([]),
    faq: faq.default([]),
    verified: z.coerce.date(),
    appVersion: z.string().optional(),
    published: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

const glossary = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/glossary' }),
  schema: z.object({
    term: z.string(),
    definition: z.string(), // one sentence, quotable
    example: z.string().optional(),
    whyItMatters: z.string().optional(),
    seeAlso: z.array(z.string()).default([]), // glossary slugs
    links: z.array(z.object({ label: z.string(), href: z.string() })).default([]),
    updated: z.coerce.date(),
  }),
});

const notices = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/notices' }),
  schema: z.object({
    notice: z.string(), // "CP14"
    title: z.string(), // "IRS Notice CP14: you owe a balance"
    meaning: z.string(), // one sentence
    why: z.string(),
    deadline: z.string(),
    ifIgnored: z.string(),
    doThisWeek: z.array(z.string()),
    getHelpWhen: z.array(z.string()).default([]),
    faq: faq.default([]),
    related: z.array(z.string()).default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

const issues = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/issues' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    subject: z.string(), // email subject line
    preview: z.string(), // preheader
    items: z.array(z.object({ headline: z.string(), href: z.string().optional() })).length(3),
    action: z.string(), // the one action
    author: z.string().default('team'),
    sponsor: z.string().optional(),
  }),
});

const recommends = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/recommends' }),
  schema: z.object({
    kind: z.enum(['category', 'product', 'compare']),
    title: z.string(),
    category: z.string(), // "password-managers"
    categoryTitle: z.string().optional(),
    product: z.string().optional(), // brand name for product pages
    brand: z.string().optional(),
    price: z.string().optional(),
    url: z.string().url().optional(), // affiliate link
    forWhom: z.string(),
    pick: z.string().optional(),
    runnerUp: z.string().optional(),
    skip: z.string().optional(),
    pros: z.array(z.string()).default([]),
    cons: z.array(z.string()).default([]),
    rating: z.number().min(1).max(5).optional(),
    tested: z.coerce.date(),
    faq: faq.default([]),
    related: z.array(z.string()).default([]),
    published: z.coerce.date(),
    updated: z.coerce.date(),
  }),
});

const videos = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/videos' }),
  schema: z.object({
    title: z.string(),
    youtubeId: z.string(),
    series: z.enum(['deadbolt', 'scam-of-the-week', 'long-form', 'live']),
    description: z.string(),
    duration: z.string(), // ISO 8601, PT8M30S
    uploadDate: z.coerce.date(),
    action: z.string(),
    guide: z.string().optional(),
    scam: z.string().optional(),
    // Body of the markdown file is the transcript.
  }),
});

const team = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/team' }),
  schema: z.object({
    name: z.string(),
    role: z.string(),
    bio: z.string(),
    knowsAbout: z.array(z.string()).default([]),
    sameAs: z.array(z.string().url()).default([]),
    image: z.string().optional(),
  }),
});

export const collections = { scams, alerts, guides, glossary, notices, issues, recommends, videos, team };
