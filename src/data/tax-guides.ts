/** Hand-written tax guides rendered by /taxes/[slug].astro. Keep answers accurate and free of sales language. */
export interface Guide {
  slug: string;
  title: string;
  description: string;
  answer: string;
  keyFacts: string[];
  sections: { heading: string; html: string }[];
  faq: { q: string; a: string }[];
  published: string;
  updated: string;
}

export const taxGuides: Guide[] = [
  {
    slug: 'unfiled-returns',
    title: 'Unfiled tax returns: what actually happens, year by year',
    description: 'What happens when you have not filed for one year, three years or ten: the failure-to-file penalty, substitute returns the IRS files for you, the refund you forfeit after three years, and the way back.',
    answer: 'Not filing is worse than filing and not paying. The failure-to-file penalty is 5% of the unpaid tax per month, up to 25%; the failure-to-pay penalty is 0.5% per month. After a few years the IRS may file a substitute return for you with no deductions, and after three years any refund you were owed is gone for good. The way back is the same at every stage: file the missing years, then deal with the balance.',
    keyFacts: [
      'Failure-to-file penalty: 5% of unpaid tax per month, capped at 25%. Failure-to-pay: 0.5% per month.',
      'Refunds expire three years after the original due date. Unfiled years with refunds are money you are leaving.',
      'The IRS can file a Substitute for Return (SFR) using only income reported to it, with no deductions or credits.',
      'The IRS generally wants the last six years filed to consider you compliant.',
      'Filing the missing years is required before any payment plan, CNC status or Offer in Compromise.',
    ],
    sections: [
      { heading: 'One year behind', html: '<p>You owe the failure-to-file penalty on any balance, plus interest. If you were owed a refund, there is no penalty at all; file and collect it. Most one-year situations are solved by filing and either paying or setting up a short payment plan.</p>' },
      { heading: 'Three years behind', html: '<p>The refund on the oldest year is about to expire. If you had withholding or credits, file that year first. The IRS may have started sending notices (CP59, CP516, CP518) asking for the returns. A Substitute for Return is possible at this stage.</p>' },
      { heading: 'Six or more years behind', html: '<p>The IRS has likely filed substitute returns for some years, which produce a balance higher than you really owe because they include no deductions. You can replace an SFR by filing the real return; the balance is recalculated. The IRS\'s own policy is to require the last six years to bring you into compliance, so ten unfiled years is usually six returns of work, not ten.</p>' },
      { heading: 'The way back, in order', html: '<ol><li>Get your IRS wage and income transcripts for each missing year (free at irs.gov or through a tax professional). They show what the IRS already knows.</li><li>File the missing years, oldest first if refunds are at stake, newest first if the IRS is already assessing.</li><li>Once filed, address the balance: payment plan, Currently Not Collectible status, or in some cases an Offer in Compromise.</li><li>Ask for first-time penalty abatement on the first year if you qualify.</li></ol>' },
    ],
    faq: [
      { q: 'Will I go to jail for not filing?', a: 'Almost never. Criminal cases are reserved for deliberate evasion with large amounts. Civil penalties and collection are what nearly everyone faces, and both are fixable.' },
      { q: 'How many years back do I need to file?', a: 'The IRS generally considers you compliant with the last six years filed, though it can require more in specific cases. Years where you are owed a refund are worth filing for the money if they are within three years of the due date.' },
      { q: 'Can I file old returns myself?', a: 'Yes. You need the correct year\'s forms and your transcripts. Multiple years with self-employment income or SFRs already filed are where professional help pays for itself.' },
    ],
    published: '2027-02-15',
    updated: '2027-02-15',
  },
  {
    slug: 'payment-plans',
    title: 'IRS payment plans: who qualifies and what they cost',
    description: 'How IRS installment agreements work: short-term plans up to 180 days, long-term plans for balances under $50,000, setup fees, the interest and penalties that keep running, and how to apply online.',
    answer: 'Most people who owe the IRS can get a payment plan online in about fifteen minutes. Balances under $50,000 (tax, penalties and interest combined) qualify for a long-term installment agreement with up to 72 months to pay; smaller balances can be paid off in 180 days with no setup fee. Penalties and interest keep accruing on the unpaid balance, so pay as much as you can up front.',
    keyFacts: [
      'Short-term plan: up to 180 days, no setup fee, any balance under $100,000.',
      'Long-term plan: up to 72 months, balance under $50,000, setup fee waived or reduced for direct debit and low income.',
      'All returns must be filed before the IRS approves a plan.',
      'The failure-to-pay penalty drops to 0.25% per month while a plan is in place.',
      'Missing a payment or a future filing can void the agreement.',
    ],
    sections: [
      { heading: 'How to apply', html: '<p>Use the IRS Online Payment Agreement tool at irs.gov. You will need your filed returns, the balance, and a bank account for direct debit. Approval for standard plans is immediate. Balances over $50,000 require a financial statement (Form 433-F) and are handled by phone or by a representative.</p>' },
      { heading: 'What it costs', html: '<p>The setup fee varies by how you apply and pay; direct debit set up online is the cheapest, and low-income taxpayers can have it waived or refunded. Interest (the federal short-term rate plus 3%, adjusted quarterly) and the reduced failure-to-pay penalty continue until the balance is zero.</p>' },
      { heading: 'When a plan is the wrong tool', html: '<p>If the monthly payment would leave you unable to cover basic living expenses, ask about Currently Not Collectible status instead. If the balance is far larger than you could ever pay, an Offer in Compromise may apply. A plan you cannot keep is worse than no plan: defaulting restarts collection.</p>' },
    ],
    faq: [
      { q: 'Does a payment plan stop a levy?', a: 'An approved installment agreement generally stops new levies while you stay current. A levy already in place may need to be released separately.' },
      { q: 'Can I pay less than the IRS asks?', a: 'For balances under $50,000, the IRS accepts a plan that pays the balance within 72 months without asking about your finances. For a lower payment than that, you will need to provide a financial statement.' },
    ],
    published: '2027-02-15',
    updated: '2027-02-15',
  },
  {
    slug: 'currently-not-collectible',
    title: 'Currently Not Collectible status: when the IRS agrees you cannot pay',
    description: 'What CNC (hardship) status is, who qualifies, how the IRS decides using its allowable living expense standards, what it stops and what it does not, and how long it lasts.',
    answer: 'Currently Not Collectible status means the IRS has reviewed your finances and agreed that collecting now would leave you unable to meet basic living expenses. It stops levies and active collection. It does not erase the debt: interest and penalties continue, refunds are kept, and the IRS reviews your situation periodically. For many people it is the right tool while the ten-year collection statute runs.',
    keyFacts: [
      'CNC stops levies, garnishments and collection calls while it is in place.',
      'The debt remains; interest and penalties accrue, and future refunds are applied to it.',
      'Qualification is based on IRS allowable expense standards for housing, food, transportation and healthcare.',
      'The IRS usually requires all returns filed first.',
      'The ten-year collection statute keeps running during CNC; debt that reaches the end expires.',
    ],
    sections: [
      { heading: 'How the IRS decides', html: '<p>You submit a financial statement (Form 433-F or 433-A) showing income, expenses and assets. The IRS compares your expenses to its national and local standards. If your income minus allowable expenses leaves nothing to pay, you qualify. Assets with equity (a paid-off car, savings, a second property) can be a problem.</p>' },
      { heading: 'What happens next', html: '<p>The IRS codes your account as CNC and stops collection. It may file a Notice of Federal Tax Lien to protect its claim. It reviews your income periodically, often when a tax return shows higher income, and can reinstate collection if your situation improves.</p>' },
    ],
    faq: [
      { q: 'Is CNC the same as the debt being forgiven?', a: 'No. The debt stays and grows with interest. But the IRS has ten years from assessment to collect, and debt that reaches the end of that period while you are in CNC expires.' },
      { q: 'Can I get CNC if I own a home?', a: 'Sometimes. Equity in a home counts as an asset, but the IRS does not generally force a sale. It depends on the equity and your overall picture.' },
    ],
    published: '2027-02-15',
    updated: '2027-02-15',
  },
  {
    slug: 'offer-in-compromise',
    title: 'Offer in Compromise: settling for less than you owe, and why most ads lie',
    description: 'How an IRS Offer in Compromise really works: the reasonable collection potential formula, who qualifies, acceptance rates, the fee and deposit, and why "pennies on the dollar" is almost always a sales pitch.',
    answer: 'An Offer in Compromise lets you settle IRS debt for less than the full amount when the IRS agrees it could not collect more from you. The IRS accepts a minority of offers, and it accepts them because the math works, not because of the story. The math is your reasonable collection potential: the equity in your assets plus what you could pay from income over 12 or 24 months. If that number is close to what you owe, an offer will be rejected.',
    keyFacts: [
      'The IRS accepts an offer only when the amount offered equals or exceeds its calculation of what it could collect from you.',
      'Acceptance rates run roughly a third of offers submitted, and many submissions are from people who never qualified.',
      'You must have all returns filed and be current on estimated payments to apply.',
      'The IRS Offer in Compromise Pre-Qualifier tool at irs.gov tells you in minutes whether you are in range.',
      'Any firm promising a settlement before seeing your financials is selling, not advising.',
    ],
    sections: [
      { heading: 'The formula', html: '<p>Reasonable collection potential equals the net realizable equity in your assets (after allowances) plus your monthly disposable income (income minus IRS allowable expenses) multiplied by 12 for a lump-sum offer or 24 for a periodic one. Offer at least that amount and it can be accepted. Offer less and it will not be, however compelling the hardship.</p>' },
      { heading: 'The process', html: '<p>Form 656 with a full financial statement (433-A OIC), the application fee and an initial payment (both waived for low-income applicants). The IRS can take six months to a year to decide. While it reviews, collection pauses but the ten-year collection clock also pauses.</p>' },
      { heading: 'When it works', html: '<p>Low or fixed income, few assets, and a balance far beyond what the formula produces. Retirees on Social Security with a large old balance are the classic case. A working professional with home equity and a $30,000 balance usually is not; a payment plan serves them better.</p>' },
    ],
    faq: [
      { q: 'How much will the IRS settle for?', a: 'Whatever its formula produces for your finances. There is no percentage; some accepted offers are a small fraction of the balance and others are most of it.' },
      { q: 'What happens if my offer is rejected?', a: 'You can appeal within 30 days, or move to a payment plan or CNC status. Nothing you submitted is wasted; the same financial statement supports those.' },
    ],
    published: '2027-02-15',
    updated: '2027-02-15',
  },
  {
    slug: 'tax-scams',
    title: 'Tax scams: the IRS does not call, text or email you first',
    description: 'How IRS impersonation scams work by phone, text and email, the "tax resolution" ads that take fees for nothing, and the ghost preparers who sign nothing. What the real IRS does and does not do.',
    answer: 'The IRS contacts you by mail first, almost always. It does not call demanding immediate payment, does not threaten arrest, does not text, and does not ask for gift cards, wire transfers or crypto. Any contact that does one of those is a scam. The second kind of tax scam is the "tax relief" company that takes a large fee before learning anything about your case.',
    keyFacts: [
      'The IRS initiates contact by mail. A first contact by phone, text or email is a scam.',
      'The IRS never demands a specific payment method, never asks for gift cards and never threatens police.',
      'Verify any IRS balance yourself at irs.gov/account before paying anyone.',
      'Legitimate tax representatives are Enrolled Agents, CPAs or attorneys; ask for the credential and look it up.',
      'Report impersonation to TIGTA and phishing@irs.gov.',
    ],
    sections: [
      { heading: 'The impersonation call', html: '<p>A recorded voice or a live caller says you owe back taxes, a warrant is being issued, and you must pay now by gift card, wire or crypto to stop it. Caller ID may show "IRS." It is always fake. Hang up. If you are worried you owe something, check your account at irs.gov or call the IRS at the number on its website.</p>' },
      { heading: 'The text and email', html: '<p>"Your refund is ready, click to claim." "Your Economic Impact Payment is pending." The IRS does not send these. The link harvests your Social Security number and bank login. Delete it and report it to phishing@irs.gov.</p>' },
      { heading: 'The "tax relief" ad', html: '<p>Not every firm is a scam, but the pattern to avoid is clear: a guaranteed settlement before anyone has seen your transcripts, a large upfront fee, and pressure to sign today. A legitimate firm investigates first, tells you the real number and your realistic options, and charges for work it has scoped. Ask what credential the person handling your case holds.</p>' },
      { heading: 'The ghost preparer', html: '<p>Someone prepares your return for a fee but does not sign it or include a PTIN, often inflating credits to get a bigger refund. When the IRS audits it, you are the one responsible. Every paid preparer must sign and include their PTIN.</p>' },
    ],
    faq: [
      { q: 'Does the IRS ever call?', a: 'After it has written to you, yes, in some situations, and revenue officers can visit. But the first contact about a balance is a letter, and the IRS never demands payment by gift card, wire or crypto.' },
      { q: 'How do I know if a tax letter is real?', a: 'Real notices have a notice number (CP14, LT11) and match what you see when you log in at irs.gov/account. If the letter asks you to call a number, compare it to the number on irs.gov.' },
    ],
    published: '2027-02-15',
    updated: '2027-02-15',
  },
];
