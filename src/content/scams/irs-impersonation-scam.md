---
title: The IRS impersonation scam
aliases: ["IRS phone scam", "fake IRS call", "IRS text scam", "tax refund text scam", "IRS arrest warrant scam"]
definition: The IRS impersonation scam is a call, text or email from someone claiming to be the IRS, demanding immediate payment of back taxes by gift card, wire or crypto under threat of arrest, or offering a refund you can claim by clicking a link and entering your Social Security number and bank details.
channels: [phone, text, email]
targets: [everyone, retirees, small-business]
impersonates: ["the IRS", "the Treasury Department", "a federal agent"]
redFlags:
  - The IRS contacts you first by mail. A first contact by phone, text or email is a scam.
  - "A demand for a specific payment method: gift cards, wire, crypto, a payment app."
  - Threats of arrest, deportation, license revocation or police at your door today.
  - A refund you must "claim" by clicking a link and entering personal details.
  - Caller ID showing "IRS" or a Washington number; caller ID is trivially faked.
whatToDo:
  - Hang up, delete the text, do not click the link.
  - If you think you might owe, log in at irs.gov/account to see your real balance, or call the IRS at the number on irs.gov.
  - Forward scam emails and texts to phishing@irs.gov.
  - Report impersonation calls to the Treasury Inspector General at tigta.gov.
ifYouPaid:
  - Gift cards, call the issuer and report the cards; wire, call your bank for a recall; crypto, report to the exchange and ic3.gov.
  - If you gave your Social Security number, file at identitytheft.gov and get an IRS Identity Protection PIN so nobody can file a return in your name.
  - If you gave bank details, call the bank and have the account secured.
reportTo:
  - { name: "TIGTA (IRS impersonation)", url: "https://www.tigta.gov" }
  - { name: "FTC: reportfraud.ftc.gov", url: "https://reportfraud.ftc.gov" }
  - { name: "FBI IC3: ic3.gov", url: "https://www.ic3.gov" }
related: [bank-impersonation-scam, recovery-scam]
guides: [gmail]
readerReports: 437
faq:
  - q: Does the IRS ever call or visit?
    a: After it has written to you about a specific matter, yes, in some situations, and revenue officers can visit. It still never demands payment by gift card, wire or crypto, and never threatens arrest on a call.
  - q: How do I know if an IRS letter is real?
    a: Real notices carry a notice number (CP14, LT11) and match what you see at irs.gov/account. Look up the number in our IRS notices guide.
published: 2027-01-10
updated: 2027-01-10
---

There are two versions. The threat: a call or voicemail says you owe back taxes, a warrant is being issued, and only an immediate payment stops it. The caller knows the last four digits of your Social Security number (bought from a breach) and sounds official. The payment is always something irreversible.

The refund: a text or email says your refund or stimulus payment is waiting, and you need to click to claim it. The page asks for your Social Security number, date of birth, driver's license and bank login "to deposit the refund." That is everything needed to file a fraudulent return in your name and to empty the account.

The real IRS does neither. It sends letters first, it does not demand a payment method, and it does not threaten police. If a letter does arrive, our [IRS notices guide](/taxes/irs-notices/) explains what each one means and what to do.
