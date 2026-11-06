export const scamChannels = {
  text: { label: 'Text message scams', blurb: 'Scams that arrive as a text: fake toll bills, delivery notices, bank alerts, wrong-number openers and job offers. If a text asks you to click, pay or reply, start here.' },
  phone: { label: 'Phone call scams', blurb: 'Scams that arrive as a call, including AI-cloned voices: the grandchild in trouble, the bank fraud department, the IRS, Medicare and tech support.' },
  email: { label: 'Email scams', blurb: 'Phishing and its variants: fake invoices, password-reset emails, bank and PayPal notices, and the boss asking for gift cards.' },
  social: { label: 'Social media scams', blurb: 'Scams that run through Facebook, Instagram, TikTok and dating apps: fake marketplace sellers, hacked-friend messages, romance and investment pitches.' },
  'in-person': { label: 'In-person and door-to-door scams', blurb: 'Contractors, utility workers, charity collectors and roof inspectors who are not who they say.' },
  mail: { label: 'Mail scams', blurb: 'Fake IRS letters, sweepstakes, "final notice" warranties and deed and title scams that come through the post.' },
  web: { label: 'Website scams', blurb: 'Fake shops, fake support numbers in search results, fake login pages and pop-ups that say your computer is infected.' },
} as const;
