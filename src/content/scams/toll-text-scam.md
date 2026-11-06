---
title: The unpaid toll text scam
aliases: ["toll road text scam", "E-ZPass text scam", "FasTrak text scam", "SunPass text scam", "toll smishing"]
definition: The unpaid toll text scam is a text message claiming you owe a small toll balance and must pay through a link today to avoid a late fee; the link leads to a fake toll-agency page that takes your card number and personal details.
channels: [text]
targets: [everyone]
impersonates: ["E-ZPass", "FasTrak", "SunPass", "TxTag", "the DMV", "a state toll authority"]
redFlags:
  - A toll balance you do not remember, usually under $15, with a late fee threatened for today.
  - A link with a domain that is not the toll agency's (look for extra words, odd endings or a .top/.xyz/.vip address).
  - A text from a random number or an email address, often an overseas number.
  - A message that arrives whether or not you own a car or drive toll roads.
whatToDo:
  - Do not click. Delete the text.
  - If you think you might owe a toll, open the toll agency's real app or type its web address yourself and check your account.
  - Forward the text to 7726 (SPAM) so your carrier can block the sender.
  - Report it to reportfraud.ftc.gov; it takes a minute and tracks the wave.
ifYouPaid:
  - Call your card issuer, report the charge as fraud, and ask for a new card number.
  - If you entered a password, change it on that account and anywhere you reused it.
  - Watch your statements for small test charges in the following weeks.
reportTo:
  - { name: "FTC: reportfraud.ftc.gov", url: "https://reportfraud.ftc.gov" }
  - { name: "FBI IC3: ic3.gov", url: "https://www.ic3.gov" }
related: [package-delivery-scam, bank-impersonation-scam]
guides: [iphone, android]
readerReports: 1286
faq:
  - q: I don't even have a toll account. Why did I get this?
    a: The texts are sent to millions of numbers at random. Receiving one means nothing about you; replying or clicking does.
  - q: How do toll agencies actually contact you?
    a: By mail to the registered address of the vehicle, or through the account and app you set up. Never by a text with a payment link.
published: 2027-01-10
updated: 2027-01-10
---

The text reads like a billing notice: "Your vehicle has an unpaid toll of $6.99. To avoid a $50 late fee, pay by today at [link]." The amount is small on purpose. People pay small amounts without thinking, and the goal is not the $6.99; it is the card number, the billing address and, on some versions, a login the scammer can reuse.

The link opens a copy of a toll agency's site, often with the right logo. Enter a card and it is charged, sold and used until it is cancelled. Some versions ask for a driver's license number and date of birth "to verify the vehicle," which is identity theft, not a toll.

The scam runs in waves by state, following the real toll agencies' names. The same message arrives in Texas as TxTag, in California as FasTrak, in the Northeast as E-ZPass and in Florida as SunPass.
