# latchkeydaily.com

The Gen X guide to life in the middle. Static site built with [Astro 7](https://astro.build), Tailwind 4, deployed to Cloudflare Workers from this repo.

## Deploy (Cloudflare Workers, Git integration)

1. Cloudflare dashboard → **Compute → Workers & Pages → Create → Import a repository** → pick `taxea/latchkey`.
2. Settings:
   - **Build command:** `npx astro build`
   - **Deploy command:** `npx wrangler deploy`
   - Node version: 22 (set `NODE_VERSION=22` in build variables if the default is older)
3. Save and deploy. The Worker serves `dist/` as static assets using `wrangler.jsonc`.
4. **Custom domain:** Worker → Settings → Domains & Routes → add `latchkeydaily.com` and `www.latchkeydaily.com` (redirect www → apex with a Bulk Redirect or a Redirect Rule).
5. Every push to `main` rebuilds and deploys.

Local: `npm install`, `npm run dev`. Production preview with the Worker runtime: `npm run preview`.

## Where things live

```
src/
  lib/site.ts          Site constants: name, tagline, description, social, host, signup endpoint, TaxSolve link
  lib/schema.ts        JSON-LD builders (Organization, WebSite, Person, Article, HowTo, FAQPage, DefinedTerm, Product, VideoObject…)
  lib/llms.ts          Builds /llms.txt and /llms-full.txt
  lib/feed.ts          RSS feeds (/feed.xml and /feed/{newsletter,scams,protect,watch}.xml)
  content.config.ts    Content collections: the record types writers fill in
  content/
    scams/             One markdown file per scam → /scams/{slug}/
    alerts/            Dated warnings → /scams/alerts/{slug}/
    guides/            Lockdown guides (HowTo) → /protect/{slug}/
    glossary/          One term per file → /glossary/{slug}/
    notices/           IRS notices by number → /taxes/irs-notices/{slug}/
    issues/            Newsletter issues → /newsletter/issues/{slug}/
    recommends/        {category}.md and {category}/{product}.md → /recommends/…
    videos/            Video pages with transcripts → /watch/{slug}/
    team/              Authors → /about/team/{slug}/
  data/
    tax-guides.ts      Hand-written tax guides → /taxes/{slug}/
    hub-guides.ts      Tech, Money, Family, Estate guides → /{hub}/{slug}/
    about-pages.ts     Editorial policy, How we use AI, Ownership, Corrections, Contact, Press, Advertise, Careers
    legal-pages.ts     Privacy, Terms, Accessibility
    scam-channels.ts   /scams/by-channel/{channel}/ facets
    scam-targets.ts    /scams/targeting/{target}/ facets
  layouts/             BaseLayout (head + schema), HubLayout, ArticleLayout, PillarHub, PillarGuide
  components/          Header, Footer, SignupForm, Logo, Breadcrumbs, KeyFacts, Faq, RelatedPages, Byline, TaxSolveCta, TopicIcon
  pages/               Routes (see the architecture doc for the full map)
  styles/global.css    Brand tokens from the brand kit (colors, type) and component classes
public/                favicon.svg, og-default.png, logo.png
```

## Adding content

- **A scam:** copy any file in `src/content/scams/`, change the slug (file name) and fields. Required: `title`, `definition`, `channels`, `targets`, `redFlags`, `whatToDo`, `published`, `updated`. The body under the frontmatter is "How it works."
- **A lockdown guide:** copy a file in `src/content/guides/`. `steps` become the HowTo schema; `checklist` is the ten-minute box; `verified` shows as the badge.
- **An issue:** `src/content/issues/YYYY-MM-DD-slug.md` with exactly three `items` and one `action`. The body is the issue text. It appears on the home page, the archive, Do This Now, the feed, and llms-full.txt automatically.
- **A glossary term, IRS notice, review or video:** same pattern; see the schema in `src/content.config.ts` for every field.
- YAML tip: quote any value that contains a colon followed by a space (`"like: this"`).

## Things to wire up before launch

| What | Where | Note |
| --- | --- | --- |
| Newsletter signup endpoint | `SITE.signupAction` / `signupMethod` in `src/lib/site.ts` | Point at the email platform's form action (Beehiiv/Kit) or a Worker that forwards to it. Currently lands on `/subscribe/thanks/` without storing anything. |
| Scam report form | `SITE.scamReportAction` | Point at a form service or a Worker that writes to a moderation queue. |
| Subscriber count | `SITE.subscriberCount` | Shown rounded on the home page. |
| The host | `src/content/team/team.md` and `SITE.host` | Replace the team placeholder with the host's real name, bio and photo; Person schema and bylines follow. |
| Social handles | `SITE.social` | Same name everywhere. |
| Video IDs | `src/content/videos/*.md` | `youtubeId` is a placeholder. |
| TaxSolve consult link | `SITE.taxsolveConsultUrl` | Carries UTM tags for attribution at the source. |
| Analytics | `src/layouts/BaseLayout.astro` | Add Cloudflare Web Analytics (privacy-friendly, no cookie banner) in the head. |
| www redirect, HSTS | Cloudflare dashboard | Redirect Rule for www → apex; enable HSTS once the domain is live. |

## AI search and SEO

- `robots.txt` explicitly allows GPTBot, OAI-SearchBot, ClaudeBot, Claude-SearchBot, PerplexityBot, Google-Extended, xAI and the search engines; disallows `/search/`, `/members/`, thank-you pages.
- `/llms.txt` (short) and `/llms-full.txt` (one line per page) describe the site for language models.
- Every page emits JSON-LD: Organization + WebSite + WebPage + BreadcrumbList, plus the template's own type (Article, HowTo, FAQPage, DefinedTerm, Product/Review, VideoObject with transcript, CollectionPage).
- Sitemap at `/sitemap-index.xml`, RSS at `/feed.xml`, server-rendered HTML throughout, no content behind JavaScript.
- The hero sentence on the home page, the meta description and the WebSite schema description are the same string (`SITE.description`) so every engine sees one definition.
