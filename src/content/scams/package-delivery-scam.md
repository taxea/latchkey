---
title: The package delivery text scam
aliases: ["USPS text scam", "UPS text scam", "FedEx text scam", "delivery smishing", "redelivery fee scam"]
definition: The package delivery text scam is a text claiming a package could not be delivered because of a missing address detail or a small redelivery fee, with a link to a fake carrier page that collects your card number and personal details.
channels: [text, email]
targets: [everyone]
impersonates: ["USPS", "UPS", "FedEx", "Amazon", "DHL"]
redFlags:
  - A delivery problem for a package you are not expecting, or a vague one with no order details.
  - A tiny fee ($1.99, $3.00) to "reschedule delivery."
  - A link whose address is not usps.com, ups.com or fedex.com.
  - A text from a random number or an email address, often starting with a personal greeting that does not match.
whatToDo:
  - Do not click. Delete it.
  - If you are expecting something, check the carrier's real app or type its address yourself and use the tracking number from your order.
  - Forward the text to 7726 (SPAM) and, for USPS versions, to spam@uspis.gov.
ifYouPaid:
  - Call your card issuer, report it as fraud and get a new card number.
  - Change any password you entered and turn on two-factor authentication on that account.
reportTo:
  - { name: "USPS Inspection Service", url: "https://www.uspis.gov/report" }
  - { name: "FTC: reportfraud.ftc.gov", url: "https://reportfraud.ftc.gov" }
related: [toll-text-scam, amazon-impersonation-scam]
guides: [iphone, android]
readerReports: 958
faq:
  - q: USPS texted me a tracking link once. Was that fake?
    a: USPS only texts if you signed up for tracking alerts on a specific package, and it never asks for payment or personal details by text. If you did not sign up, it is a scam.
published: 2027-01-10
updated: 2027-01-10
---

"USPS: your package is on hold due to an incomplete address. Confirm your details within 24 hours: [link]." The page looks like the carrier's site and asks for your address, then a card for a $1.99 redelivery fee. The address confirms you are real; the card is the prize.

The texts go out by the million, timed to the holidays and to big sale days when most people are expecting something. Receiving one proves nothing. The real carriers do not charge redelivery fees by text and do not need your card to deliver a package you already paid for.
