/**
 * Hand-written guides for the Tech, Money, Family and Estate hubs, rendered by each hub's [slug].astro.
 * These open in Phases 1 and 2; the seed set below gives each hub real pages at launch.
 */
export interface HubGuide {
  hub: 'tech' | 'money' | 'family' | 'estate';
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

export const HUB_META = {
  tech: {
    title: 'Tech',
    eyebrow: 'Pillar 2',
    description: 'What to actually use AI and technology for, which devices are worth it, and what to ignore, in plain English from the friend who works in IT. No hype and no condescension: you have been using computers since before the people selling them were born.',
  },
  money: {
    title: 'Money',
    eyebrow: 'Pillar 3',
    description: 'Catch-up retirement saving, how to vet a financial advisor, the conversation about a parent\'s money, and the small-business basics for the self-employed half of Gen X. Specific numbers, no product pitches.',
  },
  family: {
    title: 'Family',
    eyebrow: 'Pillar 4',
    description: 'The sandwich years: caring for a parent while launching a kid. Medicare navigation, patient portals, medical-bill errors, the documents to get from your parents now, and how to protect them from elder fraud.',
  },
  estate: {
    title: 'Estate',
    eyebrow: 'Pillar 5',
    description: 'Wills, trusts, power of attorney and your digital legacy: what your kids will need, how to make sure they can get into your accounts, and the checklist most people put off until it is too late.',
  },
} as const;

export const hubGuides: HubGuide[] = [
  {
    hub: 'tech',
    slug: 'ai-what-to-use-it-for',
    title: 'What to actually use AI for (and what to skip)',
    description: 'The ten things AI assistants are reliably good at for a Gen X household, the three things they are bad at, and the one rule for using them safely: never paste anything you would not put on a postcard.',
    answer: 'AI assistants are reliably useful for drafting, summarizing, explaining, translating and planning: the first draft of a hard email, the plain-English version of a medical letter, the meal plan for the week. They are unreliable for facts you cannot check, for anything involving your money or identity, and for medical or legal decisions. Use them as a fast, tireless intern, not an expert.',
    keyFacts: [
      'Good at: drafts, summaries, explanations, translations, plans, rewriting, brainstorming.',
      'Bad at: facts you cannot verify, math with money, anything that must be exactly right.',
      'Never paste account numbers, passwords, your Social Security number or a parent\'s medical records into one.',
      'Ask it to show its sources, then check one.',
    ],
    sections: [
      { heading: 'Ten things worth doing this week', html: '<ol><li>Paste a confusing letter (insurance, HOA, school) and ask for the plain-English version and what it wants you to do.</li><li>Draft the hard email: the one to your sibling about Mom\'s care, the one to the contractor.</li><li>Summarize a long article or PDF before you decide whether to read it.</li><li>Plan a week of dinners from what is in the fridge.</li><li>Explain a term from your kid\'s financial aid letter or your 401(k) statement.</li><li>Prepare the questions for a doctor\'s appointment.</li><li>Rewrite your resume bullet points for a specific job posting.</li><li>Translate a message to or from a relative who speaks another language.</li><li>Turn your notes from a call into a clean to-do list.</li><li>Ask "what am I not thinking about" before a big decision. It is good at lists of considerations.</li></ol>' },
      { heading: 'Three things to skip', html: '<ul><li><strong>Facts you will repeat.</strong> It will state wrong things with total confidence. Verify anything you will act on or tell someone else.</li><li><strong>Money math.</strong> Use a calculator or a spreadsheet; use AI to explain the result.</li><li><strong>Medical or legal decisions.</strong> Use it to prepare for the professional, not replace them.</li></ul>' },
      { heading: 'The safety rule', html: '<p>Treat the chat box like a postcard: assume someone could read it. No account numbers, passwords, Social Security numbers, or someone else\'s medical details. For anything sensitive, describe the situation without the identifying details; the advice is just as good.</p>' },
    ],
    faq: [
      { q: 'Which AI assistant should I use?', a: 'Any of the major ones (ChatGPT, Claude, Gemini, Copilot) will do everything on this list. Pick the one built into tools you already use, or the one your kid can help you with.' },
      { q: 'Is it safe to let my parent use one?', a: 'Yes, with the postcard rule and one more: it is not a person, and it will not know when it is wrong. For a parent, the best uses are explaining letters and drafting messages.' },
    ],
    published: '2027-02-10',
    updated: '2027-02-10',
  },
  {
    hub: 'tech',
    slug: 'passkeys',
    title: 'Passkeys: the end of passwords, explained in two minutes',
    description: 'What a passkey is, why it cannot be phished, how it works with your phone\'s face or fingerprint unlock, and how to turn one on for Google, Apple, Amazon and your bank.',
    answer: 'A passkey replaces your password with a cryptographic key stored on your phone or computer and unlocked with your face, fingerprint or device PIN. There is nothing to type and nothing to steal: a fake login page gets nothing, because the passkey only works on the real site. It is the biggest security improvement in twenty years and most people have not turned it on.',
    keyFacts: [
      'A passkey cannot be phished: it only works on the site that created it.',
      'It is unlocked with your face, fingerprint or device PIN; nothing is typed or sent.',
      'Passkeys sync through your Apple, Google or password-manager account, so losing a phone does not lose them.',
      'Google, Apple, Amazon, PayPal, Microsoft and most major banks support them now.',
    ],
    sections: [
      { heading: 'How to turn one on', html: '<p>Go to the account\'s security settings and look for "passkeys" or "sign in with face/fingerprint." The site creates the key and your device stores it. Keep your password as a backup until you have used the passkey a few times. A password manager can store passkeys too, which is the right place for a family that shares one.</p>' },
      { heading: 'For a parent', html: '<p>Passkeys are easier for an older adult than passwords: nothing to remember, nothing to type, and the scam page that asks for a password gets nowhere. Set it up on their email and bank first.</p>' },
    ],
    faq: [
      { q: 'What if I lose my phone?', a: 'Passkeys sync to your Apple or Google account (or your password manager). Sign in on the new device and they are there. Keep your account recovery options current.' },
      { q: 'Is a passkey the same as two-factor authentication?', a: 'It replaces both the password and the code. It is stronger than either, because there is nothing to phish.' },
    ],
    published: '2027-02-12',
    updated: '2027-02-12',
  },
  {
    hub: 'money',
    slug: 'catch-up',
    title: 'Catch-up contributions after 50: how much more you can put away',
    description: 'The extra retirement contributions allowed from age 50 in a 401(k), IRA and HSA, how the limits work, the special window in your early 60s, and whether to prioritize them over paying down the mortgage.',
    answer: 'From the year you turn 50, you can contribute more than the standard limit to a 401(k) and an IRA, and there is an additional higher catch-up window in the early 60s. The amounts are set by the IRS each year; check the current figures on irs.gov before you set your deferral. For most people with a match, filling the 401(k) first is right; for people without one, the IRA and HSA come first.',
    keyFacts: [
      'Catch-up contributions start in the calendar year you turn 50, not on your birthday.',
      'There are separate catch-up amounts for 401(k)/403(b) plans and for IRAs; the HSA has its own at 55.',
      'A higher "super catch-up" applies in the early 60s under current law; confirm the ages and amounts for the current tax year at irs.gov.',
      'Higher earners may be required to make 401(k) catch-ups as Roth contributions; your plan will tell you.',
      'Order: employer match first, then HSA if eligible, then the rest of the 401(k) or IRA, then taxable savings.',
    ],
    sections: [
      { heading: 'Why it matters more than it looks', html: '<p>Fifteen years of maximum catch-ups, invested, is the difference between a tight retirement and a comfortable one for most Gen X households. The dollars added after 50 also arrive when many of the big expenses (childcare, the first home) are behind you.</p>' },
      { heading: 'Catch-up or mortgage?', html: '<p>If your mortgage rate is below what a diversified portfolio has historically returned, and you have an employer match, the catch-up usually wins on the math. If the rate is high or the debt keeps you up at night, split it. Nobody regrets either one at 65.</p>' },
    ],
    faq: [
      { q: 'What are the catch-up limits this year?', a: 'They change annually. Search "retirement topics catch-up contributions" at irs.gov for the current year\'s figures, or ask your plan administrator.' },
      { q: 'Can I do catch-ups in both a 401(k) and an IRA?', a: 'Yes. They are separate limits.' },
    ],
    published: '2027-05-05',
    updated: '2027-05-05',
  },
  {
    hub: 'money',
    slug: 'small-business',
    title: 'The self-employed Gen X money checklist',
    description: 'For the roughly one in four Gen Xers who work for themselves: the quarterly estimated-tax rhythm, the retirement accounts that beat an IRA, separating business and personal money, and the records that keep an audit boring.',
    answer: 'Self-employment turns four things into your job that an employer used to do: paying tax quarterly, saving for retirement, keeping business money separate and keeping records. Do those four and most of the stress disappears. The retirement piece is the big one: a Solo 401(k) or SEP IRA lets you put away far more than an employee can.',
    keyFacts: [
      'Pay estimated taxes quarterly (April, June, September, January) to avoid penalties and the April surprise.',
      'A Solo 401(k) or SEP IRA allows much larger contributions than a regular IRA.',
      'A separate business checking account and card make bookkeeping and audits simple.',
      'Keep receipts and mileage as you go; reconstructing a year is where people give up and overpay.',
      'Unfiled years are common among the self-employed and fixable; the penalties are worst when ignored.',
    ],
    sections: [
      { heading: 'The quarterly rhythm', html: '<p>Set aside a fixed percentage of every payment (25 to 30% is a common starting point) into a separate savings account the day it arrives. Pay the estimate from that account each quarter. The money was never yours to spend; treating it that way removes the April problem.</p>' },
      { heading: 'If you are behind', html: '<p>The self-employed make up a large share of people with unfiled years, usually because one hard year became three. The way back is the same for everyone: transcripts, file the missing years, then deal with the balance. <a href="/taxes/unfiled-returns/">What actually happens, year by year.</a></p>' },
    ],
    faq: [
      { q: 'Should I form an LLC or S corp?', a: 'An LLC is about liability, not tax. An S corp election can reduce self-employment tax once profit is high enough to justify payroll and the extra filing. Ask a tax professional with your numbers; the answer depends on the profit.' },
    ],
    published: '2027-05-12',
    updated: '2027-05-12',
  },
  {
    hub: 'family',
    slug: 'caregiving',
    title: 'Caring for a parent: the first 30 days',
    description: 'What to do in the first month after a parent needs help: the documents to get, the accounts to understand, the care options and what they cost, and how to split the work with siblings without a fight.',
    answer: 'The first month is about information and authority, not decisions. Get the documents that let you act (power of attorney, healthcare proxy, HIPAA release), learn what the money and insurance look like, and find out what help exists locally before anyone picks a plan. Most family conflict comes from one sibling deciding alone with incomplete information.',
    keyFacts: [
      'Get signed now, while your parent can sign: durable power of attorney, healthcare proxy, HIPAA release.',
      'Make a one-page list of accounts, policies, doctors and medications; the password manager\'s emergency access is the digital version.',
      'Call the Eldercare Locator (1-800-677-1116) for the local Area Agency on Aging; they know every program and its cost.',
      'Medicare does not pay for long-term custodial care. Know that before the plan is made.',
      'Put the siblings on one shared document and one monthly call.',
    ],
    sections: [
      { heading: 'Week one: the documents', html: '<p>Durable power of attorney for finances, a healthcare proxy (or healthcare power of attorney) and a HIPAA release. Without them you cannot talk to the bank or the doctor. A state-specific template from the state bar or Area Agency on Aging is fine for most families; an elder-law attorney is worth it if there are assets, a second marriage or a sibling dispute.</p>' },
      { heading: 'Week two: the picture', html: '<p>Income (Social Security, pension, withdrawals), accounts, insurance (Medicare parts and supplements, long-term care policy if any), the house, debts, and the medication list. <a href="/family/the-talk/">The documents to get from your parents</a> has the full list.</p>' },
      { heading: 'Week three: the options', html: '<p>In-home help by the hour, adult day programs, assisted living, memory care and skilled nursing are different things with different costs and different payers. The Area Agency on Aging will walk you through what is available locally and what Medicaid covers in your state.</p>' },
      { heading: 'Week four: the family', html: '<p>One shared document, one monthly call, and named jobs: who handles money, who handles medical, who handles the house. The sibling who lives farthest can own the paperwork; distance does not matter for that.</p>' },
    ],
    faq: [
      { q: 'Does Medicare pay for a nursing home?', a: 'Only short rehabilitation stays after a hospital admission, and only partially. Long-term custodial care is paid by the person, a long-term care policy, or Medicaid after assets are spent down.' },
      { q: 'What if my parent refuses help?', a: 'Common. Start with the documents framed as "so I can help if you ever need it," and with one small accepted thing (a cleaner, a ride service). Involve their doctor; people accept from a physician what they refuse from a child.' },
    ],
    published: '2027-06-02',
    updated: '2027-06-02',
  },
  {
    hub: 'family',
    slug: 'the-talk',
    title: 'The documents to get from your parents this year',
    description: 'The twelve documents and pieces of information you will need when a parent is sick or gone, how to ask for them without a fight, and where to keep them so the right people can find them.',
    answer: 'You need twelve things from your parents, and you need them while they are well: the legal documents that let you act, the location of the will, the account and policy list, and the digital access. The ask is easier than it sounds if it starts with "I did this for myself and I want you to have the same thing."',
    keyFacts: [
      'Legal: will or trust, durable power of attorney, healthcare proxy, HIPAA release, advance directive.',
      'Financial: list of accounts and institutions, pensions, insurance policies, the deed, the car title, debts.',
      'Medical: doctors, medications, conditions, the pharmacy, Medicare and supplement cards.',
      'Digital: password manager emergency access, phone passcode, email access, where the photos live.',
      'Keep originals in one place both of you know; keep a copy in the password manager\'s secure notes.',
    ],
    sections: [
      { heading: 'How to ask', html: '<p>Not "what happens when you die." Try: "I set this up for myself last month so the kids would not have a mess. Can we do the same for you? It takes an afternoon." Bring your own list as the example. Do it in one sitting if you can, with their coffee, at their table.</p>' },
      { heading: 'Where it lives', html: '<p>Originals in a fireproof box or with the attorney; a scanned copy in the password manager as secure notes, shared with the sibling who holds power of attorney. Not in a safe deposit box only they can open.</p>' },
    ],
    faq: [
      { q: 'What if they do not have a will?', a: 'Most people over 70 without one can get a simple will done through a state bar referral or a reputable online service in an afternoon. The power of attorney and healthcare proxy are more urgent than the will.' },
    ],
    published: '2027-06-09',
    updated: '2027-06-09',
  },
  {
    hub: 'estate',
    slug: 'digital-legacy',
    title: 'Your digital legacy: making sure your family can get into your accounts',
    description: 'How to make sure someone can access your email, phone, photos, password manager and online accounts if you die or are incapacitated: legacy contacts at Apple and Google, password-manager emergency access, and the one document that ties it together.',
    answer: 'If you died tomorrow, could your spouse or kid get into your phone, your email and your password manager? For most people the answer is no, and that locks them out of everything else: the bank, the photos, the subscriptions that keep billing. Three settings and one document fix it in an hour.',
    keyFacts: [
      'Apple: set a Legacy Contact in Settings; they get an access key for your iCloud data after death.',
      'Google: set an Inactive Account Manager; it hands a trusted person access after a period of inactivity.',
      'Password manager: set emergency access so a named person can request your vault after a waiting period.',
      'Write a one-page "if something happens" letter with the phone passcode and where the originals are; keep it with the will.',
      'Facebook and Instagram have legacy and memorialization settings too; set them or your accounts become scam bait.',
    ],
    sections: [
      { heading: 'The hour, step by step', html: '<ol><li>Apple Legacy Contact or Google Inactive Account Manager (both, if you use both).</li><li>Password manager emergency access for your spouse or one child.</li><li>Facebook legacy contact; Instagram memorialization request instructions in the letter.</li><li>The letter: phone passcode, computer login, where the will and the originals are, who the emergency contact is. Signed and dated, kept with the will.</li></ol>' },
      { heading: 'Why it matters for scams', html: '<p>A dead person\'s unattended email and social accounts are a scammer\'s favorite tool: they are used to message relatives "from" the deceased. Legacy settings let the family close or memorialize them quickly.</p>' },
    ],
    faq: [
      { q: 'Should I just write my passwords down?', a: 'A list goes stale in a month. Emergency access to the password manager stays current automatically. Write down only the master password and the phone passcode, in the sealed letter.' },
    ],
    published: '2027-08-04',
    updated: '2027-08-04',
  },
  {
    hub: 'estate',
    slug: 'checklist',
    title: 'The estate checklist most people put off',
    description: 'The nine documents and decisions that make up a complete basic estate plan for a Gen X household: will, beneficiary designations, power of attorney, healthcare proxy, guardianship, life insurance, the digital legacy and where it all lives.',
    answer: 'A basic estate plan is nine items, and most of them take less time than renewing a passport. Beneficiary designations on retirement accounts and life insurance override your will, so check those first; they are where most mistakes live. Then the will, the two powers of attorney, guardianship for minor children, and the digital legacy.',
    keyFacts: [
      'Beneficiary designations on 401(k)s, IRAs and life insurance override the will. Check them every few years and after every divorce or death.',
      'A will names guardians for minor children; without one, a court decides.',
      'Durable power of attorney and a healthcare proxy cover incapacity, which is likelier than death at this age.',
      'A revocable trust avoids probate and is worth it in some states and for some families, not all.',
      'Tell the executor where everything is. A plan nobody can find is not a plan.',
    ],
    sections: [
      { heading: 'The nine items', html: '<ol><li>Beneficiary designations, checked and current</li><li>A will</li><li>Durable power of attorney for finances</li><li>Healthcare proxy and advance directive</li><li>Guardianship nomination for minor children</li><li>Life insurance that matches the mortgage and the years until the kids are independent</li><li>Titles and deeds in the right names (joint, transfer-on-death where your state allows)</li><li>Digital legacy settings and the letter</li><li>One place where the executor can find all of it</li></ol>' },
      { heading: 'Lawyer or online?', html: '<p>Simple situation (one marriage, assets under the estate-tax threshold, no business, no special-needs beneficiary): a reputable online service is fine. Any of those complications: an estate attorney, once, for a flat fee. The cost of getting it wrong lands on the people you are trying to protect.</p>' },
    ],
    faq: [
      { q: 'Do I need a trust?', a: 'Not necessarily. A trust avoids probate and keeps the estate private; its value depends on your state\'s probate process and the size and type of your assets. Ask an estate attorney what probate looks like where you live.' },
    ],
    published: '2027-08-11',
    updated: '2027-08-11',
  },
];
