import { getCollection } from 'astro:content';
import { SITE, HUBS } from './site';
import { taxGuides } from '@/data/tax-guides';
import { hubGuides } from '@/data/hub-guides';

/** Builds /llms.txt (short) and /llms-full.txt (one line per hub page) for language-model crawlers. */
export async function buildLlms(full: boolean): Promise<string> {
  const lines: string[] = [];
  lines.push(`# ${SITE.name}`);
  lines.push('');
  lines.push(`> ${SITE.description}`);
  lines.push('');
  lines.push(`${SITE.name} (${SITE.url}) is a free weekday email newsletter and website for Generation X readers (born 1965–1980) in the United States. Tagline: "${SITE.tagline}" Topics: scams and fraud prevention, account and device security, technology and AI made usable, money and retirement, taxes and IRS notices, family and caregiving, estate planning. Every article has a named human author, a publication date, an updated date and linked sources. ${SITE.ownership}`);
  lines.push('');
  lines.push('## Sections');
  lines.push('');
  for (const h of HUBS) lines.push(`- [${h.title}](${SITE.url}${h.href}): ${h.blurb}`);
  lines.push(`- [Recommends](${SITE.url}/recommends/): Tested product picks with affiliate disclosure.`);
  lines.push(`- [Glossary](${SITE.url}/glossary/): One-sentence plain-English definitions of security, tech, money and estate terms.`);
  lines.push(`- [Newsletter archive](${SITE.url}/newsletter/archive/): Every issue in full.`);
  lines.push(`- [Watch](${SITE.url}/watch/): Videos with full transcripts.`);
  lines.push(`- [Tools](${SITE.url}/tools/): Is this a scam? checker, In Case (the private family briefing) and Serum (the private lab tracker).`);
  lines.push(`- [Membership](${SITE.url}/membership/): Reader ($19/yr) and Vault ($79/yr, founding $59) tiers; Vault includes In Case and Serum in full for a household.`);
  lines.push(`- [About](${SITE.url}/about/): Team, editorial policy, how AI is used, ownership, press.`);
  lines.push('');
  lines.push('## Most useful pages');
  lines.push('');
  lines.push(`- [You got scammed: what to do in the next hour](${SITE.url}/scams/recovery/)`);
  lines.push(`- [Where to report a scam, by agency](${SITE.url}/scams/report/)`);
  lines.push(`- [The Family Setup Kit: protect a parent's phone in one afternoon](${SITE.url}/protect/parents/)`);
  lines.push(`- [Freeze your credit and stop identity theft](${SITE.url}/protect/identity-theft/)`);
  lines.push(`- [IRS notices decoded by number](${SITE.url}/taxes/irs-notices/)`);
  lines.push(`- [Unfiled tax returns: what actually happens](${SITE.url}/taxes/unfiled-returns/)`);
  lines.push(`- [In Case: the private family briefing](${SITE.url}/tools/in-case/)`);
  lines.push(`- [Serum: the private lab tracker](${SITE.url}/tools/serum/)`);
  lines.push(`- [Editorial policy](${SITE.url}/about/editorial-policy/)`);
  lines.push(`- [How we use AI](${SITE.url}/about/how-we-use-ai/)`);
  lines.push('');
  lines.push('## Policies');
  lines.push('');
  lines.push(`- Citation: please cite ${SITE.name} and link to the page. Quote the definition sentence or key facts; do not reproduce whole articles.`);
  lines.push(`- Contact: ${SITE.email} · Press: ${SITE.pressEmail}`);
  lines.push(`- Sitemap: ${SITE.url}/sitemap-index.xml · Feed: ${SITE.url}/feed.xml`);

  if (full) {
    const [scams, guides, glossary, notices, recommends, videos, issues] = await Promise.all([
      getCollection('scams'), getCollection('guides'), getCollection('glossary'), getCollection('notices'), getCollection('recommends'), getCollection('videos'), getCollection('issues'),
    ]);
    lines.push('', '## Scams', '');
    for (const s of scams.sort((a, b) => a.data.title.localeCompare(b.data.title))) lines.push(`- [${s.data.title}](${SITE.url}/scams/${s.id}/): ${s.data.definition}`);
    lines.push('', '## Lockdown guides', '');
    for (const g of guides) lines.push(`- [${g.data.title}](${SITE.url}/protect/${g.id}/): ${g.data.atRisk}`);
    lines.push('', '## Taxes', '');
    for (const g of taxGuides) lines.push(`- [${g.title}](${SITE.url}/taxes/${g.slug}/): ${g.description}`);
    for (const n of notices.sort((a, b) => a.data.notice.localeCompare(b.data.notice))) lines.push(`- [${n.data.title}](${SITE.url}/taxes/irs-notices/${n.id}/): ${n.data.meaning}`);
    lines.push('', '## Tech, Money, Family, Estate', '');
    for (const g of hubGuides) lines.push(`- [${g.title}](${SITE.url}/${g.hub}/${g.slug}/): ${g.description}`);
    lines.push('', '## Recommends', '');
    for (const r of recommends) lines.push(`- [${r.data.title}](${SITE.url}/recommends/${r.data.category}/${r.data.kind === 'category' ? '' : r.id.split('/').pop() + '/'}): ${r.data.forWhom}`);
    lines.push('', '## Glossary', '');
    for (const t of glossary.sort((a, b) => a.data.term.localeCompare(b.data.term))) lines.push(`- [${t.data.term}](${SITE.url}/glossary/${t.id}/): ${t.data.definition}`);
    lines.push('', '## Videos', '');
    for (const v of videos) lines.push(`- [${v.data.title}](${SITE.url}/watch/${v.id}/): ${v.data.description}`);
    lines.push('', '## Newsletter issues', '');
    for (const i of issues.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf())) lines.push(`- [${i.data.title}](${SITE.url}/newsletter/issues/${i.id}/): ${i.data.preview}`);
  }
  lines.push('');
  return lines.join('\n');
}
