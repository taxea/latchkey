import { SITE } from '@/lib/site';

export const legalPages = {
  privacy: {
    title: 'Privacy policy',
    description: 'What Latchkey Daily collects (your email if you subscribe, basic analytics), what it never does (sell or share your address), and how to delete your data.',
    answer: 'We collect your email address when you subscribe and basic, privacy-respecting analytics about how the site is used. We do not sell, rent or share subscriber addresses with anyone, including TaxSolve. You can unsubscribe in one click and ask us to delete everything we hold.',
    html: `
      <h2>What we collect</h2>
      <ul><li>Your email address and the page you subscribed from, if you subscribe</li><li>Aggregate analytics (pages viewed, referrers, device type) without cross-site tracking</li><li>Anything you choose to send us in a scam report or an email</li></ul>
      <h2>What we do with it</h2>
      <ul><li>Send you the newsletter you asked for</li><li>Understand which pages help readers</li><li>Publish redacted scam reports as alerts, with phone numbers, names and addresses removed</li></ul>
      <h2>What we never do</h2>
      <ul><li>Sell, rent or share your email address</li><li>Pass subscriber data to TaxSolve or any sponsor</li><li>Run ad-tech trackers across other sites</li></ul>
      <h2>Your choices</h2>
      <p>Unsubscribe with the link in any issue. To delete your data, email <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>
      <h2>Third parties</h2>
      <p>Email is delivered by our email service provider; video is embedded from YouTube in privacy-enhanced mode; fonts load from Google Fonts. Each has its own privacy policy.</p>`,
  },
  terms: {
    title: 'Terms of use',
    description: 'The terms for using latchkeydaily.com: the content is information, not professional advice; what you can and cannot do with it; and the limits of our liability.',
    answer: 'Latchkey Daily is information, written carefully, and it is not individual legal, tax, financial or medical advice. Use it to prepare, then talk to a professional for decisions that matter. You may read, share and link freely; you may not republish our content as your own.',
    html: `
      <h2>Information, not advice</h2>
      <p>Nothing here is individual legal, tax, financial, medical or security advice. Laws, products and scams change; we re-verify on a schedule, but check anything you will act on.</p>
      <h2>Using the content</h2>
      <p>Read it, share links to it, quote short excerpts with attribution. Do not republish articles, guides or the scam database in whole, or present them as your own.</p>
      <h2>Affiliate links and sponsors</h2>
      <p>See the <a href="/recommends/disclosure/">disclosure</a>. Purchases through affiliate links are between you and the vendor.</p>
      <h2>Liability</h2>
      <p>We work hard to be accurate, and we are not liable for losses arising from use of the site. If something here is wrong, <a href="/about/contact/">tell us</a> and we will fix it.</p>`,
  },
  accessibility: {
    title: 'Accessibility',
    description: 'Latchkey Daily is built to be readable by everyone: semantic HTML, keyboard navigation, readable contrast, text alternatives, and no content that needs JavaScript to read.',
    answer: 'The site is built on semantic HTML with visible focus states, readable contrast, a skip link, captions and transcripts on every video, and nothing that requires a mouse or JavaScript to read. If something does not work for you, tell us and we will fix it.',
    html: `
      <ul><li>Every video has a transcript on its page</li><li>Headings, lists and tables are real HTML so screen readers can navigate them</li><li>Text is resizable and the layout adapts to any screen</li><li>Color is never the only way information is conveyed</li></ul>
      <p>Found a barrier? Email <a href="mailto:${SITE.email}">${SITE.email}</a>.</p>`,
  },
} as const;
