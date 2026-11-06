import { SITE } from '@/lib/site';

export interface AboutPage {
  slug: string;
  title: string;
  description: string;
  answer: string;
  keyFacts?: string[];
  html: string;
  updated: string;
}

export const aboutPages: AboutPage[] = [
  {
    slug: 'editorial-policy',
    title: 'Editorial policy',
    description: 'The rules Latchkey Daily writes by: sources on every claim, named authors, dated and re-verified guides, corrections published, no fear without a fix, and a wall between sponsors and editorial.',
    answer: 'Every piece we publish has a named author, a date, and sources a reader can check. Guides are re-verified on a schedule and show the date. Sponsors and affiliates never see content before it publishes and never influence a pick. When we get something wrong, we say so in the next issue and on the corrections page.',
    keyFacts: [
      'Named author and reviewer on every article; bios on the team page.',
      'Primary sources (FTC, FBI, IRS, vendor documentation) linked on every factual claim.',
      'Lockdown guides re-verified quarterly; the verified date is on the page.',
      'Sponsored content is labeled. Sponsors do not see editorial content in advance.',
      'Corrections published within one issue of discovery.',
    ],
    html: `
      <h2>What we publish</h2>
      <p>Practical, verifiable, actionable. Every scam story ends with what to do. Every guide is something a member of the team has done on a real device. Every number has a source.</p>
      <h2>What we do not publish</h2>
      <p>Fear without a fix. Speculation presented as fact. Advice on medical or legal decisions beyond "here is how to prepare for the professional." Content we have not checked.</p>
      <h2>Independence</h2>
      <p>${SITE.ownership} Tax content is written to be useful whether or not a reader ever contacts TaxSolve, and the relationship is disclosed on every tax page. Affiliate relationships are disclosed on every page that has one; picks are made before affiliate terms are known.</p>
      <h2>Corrections</h2>
      <p>Send corrections to <a href="mailto:${SITE.email}">${SITE.email}</a>. Material corrections are noted on the article, in the next issue, and on the <a href="/about/corrections/">corrections page</a>.</p>`,
    updated: '2027-02-01',
  },
  {
    slug: 'how-we-use-ai',
    title: 'How we use AI, and how we don\'t',
    description: 'Where AI is used in producing Latchkey Daily (research, drafting, editing, captions, repurposing) and where it is never used (synthetic hosts, voices, faces, fabricated examples). A publication about trusting technology has to be clear about this.',
    answer: 'We use AI the way we tell readers to: as a fast assistant for research, first drafts, editing, captions, thumbnails and turning one long video into short ones. We do not use synthetic hosts, voices or faces, generated testimonials, or any image a reader could mistake for a real person. A human writes, checks and signs everything we publish.',
    keyFacts: [
      'Used for: research, scam-pattern monitoring, first drafts, editing, captions, subject-line tests, repurposing video.',
      'Never used for: hosts, voices, faces, testimonials, reader reports, or any image that could pass as a real person.',
      'Every published piece is written or rewritten, fact-checked and signed by a named human.',
      'If a piece used AI for a substantive draft, the author says so at the bottom.',
    ],
    html: `
      <h2>Why this matters here</h2>
      <p>Latchkey Daily exists to make technology, including AI, usable and safe for people who did not grow up with it. The fastest way to lose that trust would be to put a synthetic face in front of the camera and hope nobody noticed. So we don't. The person on camera is real, the voice is theirs, and the byline is a human who will answer your email.</p>
      <h2>What readers can expect</h2>
      <ul>
        <li>Real examples of scam messages, redacted, from real reports, never generated</li>
        <li>Screenshots in guides taken on real devices by the person who wrote the guide</li>
        <li>A note at the bottom of any article where AI produced a substantive first draft</li>
        <li>The same postcard rule we give you: nothing sensitive about a reader goes into an AI tool</li>
      </ul>`,
    updated: '2027-02-01',
  },
  {
    slug: 'ownership',
    title: 'Ownership',
    description: 'Who owns Latchkey Daily, its relationship to TaxSolve, and how that relationship is disclosed and kept separate from editorial decisions.',
    answer: SITE.ownership + ' That relationship is why our tax content is written by people who do this work, and it is also a conflict of interest, so we disclose it on every tax page and keep the editorial team separate from the TaxSolve business.',
    keyFacts: [
      'Latchkey Daily and TaxSolve share an owner.',
      'Tax pages carry a disclosed link to a free TaxSolve consult; the content is written to be useful without it.',
      'Reader email addresses are never shared with TaxSolve or anyone else.',
      'Editorial decisions are made by the Latchkey Daily editor, not by TaxSolve.',
    ],
    html: `
      <h2>What the relationship is</h2>
      <p>The owner of Latchkey Daily also owns TaxSolve, a tax resolution firm of Enrolled Agents serving clients in all fifty states. Latchkey Daily's tax section draws on that expertise, and readers with IRS problems are offered a free consult with TaxSolve on those pages.</p>
      <h2>What it is not</h2>
      <p>It is not a lead-generation site dressed as a newsletter. The tax section is one of seven, the consult link appears only on tax pages, and every tax guide explains how to handle the situation yourself. If we ever think the relationship is bending our coverage, we will say so here.</p>`,
    updated: '2027-02-01',
  },
  {
    slug: 'corrections',
    title: 'Corrections',
    description: 'Every material correction to a Latchkey Daily article or issue, newest first, with what was wrong and what was fixed.',
    answer: 'When we get something wrong, the correction is noted on the article, published in the next issue, and logged here. This page is the record.',
    html: `
      <h2>The log</h2>
      <p>No corrections yet. When there are, they will appear here newest first: date, article, what was wrong, what was fixed.</p>
      <h2>Report an error</h2>
      <p>Email <a href="mailto:${SITE.email}">${SITE.email}</a> with the page link and what you believe is wrong. We reply to every one.</p>`,
    updated: '2027-02-01',
  },
  {
    slug: 'contact',
    title: 'Contact',
    description: 'How to reach Latchkey Daily: editorial, corrections, scam reports, press, partnerships and advertising.',
    answer: 'Email is the fastest way to reach us, and a person reads every message.',
    html: `
      <ul>
        <li><strong>Editorial, corrections, questions:</strong> <a href="mailto:${SITE.email}">${SITE.email}</a></li>
        <li><strong>Report a scam:</strong> <a href="/tools/is-this-a-scam/">the report form</a></li>
        <li><strong>Press:</strong> <a href="mailto:${SITE.pressEmail}">${SITE.pressEmail}</a> · <a href="/about/press/">press kit</a></li>
        <li><strong>Sponsorship and partnerships:</strong> <a href="mailto:${SITE.advertiseEmail}">${SITE.advertiseEmail}</a> · <a href="/about/advertise/">advertise</a></li>
      </ul>
      <p>We do not give individual tax, legal, medical or financial advice by email. For IRS matters, <a href="/taxes/get-help/">the free consult</a> is the right door.</p>`,
    updated: '2027-02-01',
  },
  {
    slug: 'press',
    title: 'Press',
    description: 'Press kit for Latchkey Daily: what it is, who it reaches, citable data from reader scam reports and the annual Year in Scams report, logos, and a media contact.',
    answer: `Latchkey Daily is a free weekday brief for Gen X readers covering scams, security, technology and the money and family questions of the sandwich years. For interviews, data or comment on a scam wave, email ${SITE.pressEmail}.`,
    keyFacts: [
      'Launched 2027; reaches Gen X readers across the United States by email, YouTube and social.',
      'Original data: reader scam reports by type and channel, updated continuously, and the annual Year in Scams report.',
      'Spokespeople available on scams targeting older adults, family security, and AI for non-technical users.',
      `Media contact: ${SITE.pressEmail}`,
    ],
    html: `
      <h2>Citable data</h2>
      <p>Reader report counts on every <a href="/scams/">scam page</a> are original data, updated as reports arrive, with methodology on request. The Year in Scams report publishes each November.</p>
      <h2>Logos and brand</h2>
      <p>The Latchkey Daily wordmark and the orange key mark are available on request. Please do not alter colors or proportions. Use "Latchkey Daily" (two words, capital L and D) in copy.</p>
      <h2>Boilerplate</h2>
      <p>${SITE.description}</p>`,
    updated: '2027-02-01',
  },
  {
    slug: 'advertise',
    title: 'Advertise and partner',
    description: 'Sponsorship in the Latchkey Daily newsletter and videos: who the audience is, the inventory, category exclusivity, and how to get the rate card.',
    answer: 'Latchkey Daily reaches Gen X household decision-makers: the people who buy the password manager, choose the parent\'s phone, hire the advisor and pick the insurance. Inventory is limited to two sponsored sends a week, YouTube pre-roll and host-reads, and one monthly sponsored deep-dive, with category exclusivity available.',
    keyFacts: [
      'Audience: Gen X (46 to 61), US, household decision-makers, many caring for a parent and a young adult.',
      'Inventory: two sponsored sends per week, video pre-roll and host-read, one sponsored deep-dive per month.',
      'Category exclusivity for password managers and identity protection.',
      'Sponsors are labeled and never see editorial content in advance.',
      `Rate card: ${SITE.advertiseEmail}`,
    ],
    html: `
      <h2>What we will not sell</h2>
      <p>Placement in the picks, a rating, a review, or the reader list. Sponsorship buys reach and the credibility of being labeled a sponsor of a publication readers trust; it does not buy the editorial.</p>
      <h2>Get the rate card</h2>
      <p>Email <a href="mailto:${SITE.advertiseEmail}">${SITE.advertiseEmail}</a> with your category and timing.</p>`,
    updated: '2027-02-01',
  },
  {
    slug: 'careers',
    title: 'Careers',
    description: 'Open roles at Latchkey Daily.',
    answer: 'We hire writers, producers and growth people who are Gen X themselves or write for them like they are. Open roles are listed here when there are any.',
    html: `
      <h2>Open roles</h2>
      <p>None listed right now. If you write clearly, have set up a parent's phone, and can explain a passkey to a 55-year-old without condescending, email <a href="mailto:${SITE.email}">${SITE.email}</a> with a sample.</p>`,
    updated: '2027-02-01',
  },
];
