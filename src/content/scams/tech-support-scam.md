---
title: The tech support scam
aliases: ["Microsoft support scam", "Apple support scam", "computer virus pop-up scam", "refund scam", "remote access scam", "Geek Squad renewal scam"]
definition: The tech support scam is a pop-up, call or email claiming your computer is infected or a subscription is about to renew, which leads to a "technician" taking remote control of your computer and either charging for fake repairs or using the access to get into your bank.
channels: [web, phone, email]
targets: [parents, retirees, everyone]
impersonates: ["Microsoft", "Apple", "Norton", "McAfee", "Geek Squad", "Amazon"]
redFlags:
  - A full-screen pop-up with an alarm sound saying your computer is infected and giving a number to call.
  - An email saying a $399 antivirus or Geek Squad subscription will renew unless you call to cancel.
  - A "technician" who asks you to install remote-access software (AnyDesk, TeamViewer, UltraViewer).
  - A "refund" that is "accidentally" overpaid, and a request to send the difference back by gift card or wire.
  - Any instruction to log in to your bank while they are connected.
whatToDo:
  - Close the browser (force quit if needed) or restart the computer. The pop-up is a web page, not a diagnosis.
  - Never call a number from a pop-up or email. Real companies do not monitor your computer.
  - If someone is already connected, disconnect the internet, then shut the computer down.
  - If you want a real check, use your own antivirus or a local repair shop you chose yourself.
ifYouPaid:
  - Call your bank and card issuer; report the charge and any transfers as fraud.
  - Uninstall the remote-access program, change your passwords from a different device, and have the computer checked before using it for banking.
  - If you paid by gift card, call the issuer with the card numbers.
reportTo:
  - { name: "FTC: reportfraud.ftc.gov", url: "https://reportfraud.ftc.gov" }
  - { name: "Microsoft: report a tech support scam", url: "https://www.microsoft.com/reportascam" }
related: [bank-impersonation-scam, recovery-scam]
guides: [wifi-router, gmail]
readerReports: 611
faq:
  - q: Will Microsoft or Apple ever call me about a virus?
    a: No. Neither company monitors your computer or calls about infections. Any such call is a scam.
  - q: Is the pop-up itself dangerous?
    a: Usually not by itself; it is a web page designed to scare you into calling. The damage happens when you call and let them connect.
published: 2027-01-10
updated: 2027-01-10
---

The classic version is the pop-up: a browser page that fills the screen, plays a siren, shows a Microsoft or Apple logo and says the computer is locked because of a virus. Call this number. The person who answers is calm and technical and asks you to install a remote-access program so they can "scan" the machine. They find "infections," charge a few hundred dollars for a fake fix, and often leave the access in place.

The refund version is worse. Months later a "technician" calls to refund you because the company is closing. They connect, "accidentally" refund $4,000 instead of $400 by editing the bank page on your screen, and beg you to send the difference back by gift card or wire so they will not lose their job. The bank balance on your screen was edited; no refund happened; the money you send is gone.

The subscription version arrives by email: a $399 renewal for antivirus or Geek Squad you never bought, with a number to call to cancel. The call leads to the same remote access.
