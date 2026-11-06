---
title: Lock down your Outlook or Microsoft account
service: Outlook / Microsoft account
category: email
atRisk: Your Microsoft account is your email, your OneDrive files and often your Windows login. It resets everything else.
totalTime: PT10M
checklist:
  - A unique password from your password manager, or go passwordless with the Authenticator app.
  - Two-step verification with Microsoft Authenticator or a passkey.
  - Recovery email and phone that you control; remove any you don't recognize.
  - Review recent activity and sign out everywhere if anything looks wrong.
  - Check mail forwarding and rules for anything you didn't create.
steps:
  - name: Open account security
    text: Go to account.microsoft.com, Security. Everything below is here.
  - name: Change the password
    text: Security, Change password. Long, unique, saved in your password manager. Or choose "passwordless account" and sign in with the Authenticator app instead.
  - name: Turn on two-step verification
    text: Security, Advanced security options, Two-step verification, turn on. Use Microsoft Authenticator (or add a passkey) rather than text codes.
  - name: Fix recovery options
    text: Advanced security options, Ways to prove who you are. Remove any email or phone you do not recognize; add ones you control.
  - name: Review recent activity
    text: Security, Sign-in activity. If you see sign-ins you do not recognize, choose "Sign out everywhere" and change the password again.
  - name: Check forwarding and rules
    text: "In Outlook on the web, Settings, Mail, Forwarding: off unless you set it. Then Rules: delete anything you did not create."
  - name: Review app access
    text: Account, Privacy, Apps and services; remove anything you no longer use.
forParent:
  - Set up Authenticator on their phone and choose the passkey or number-match sign-in; nothing to type, nothing to read to a caller.
  - Add your email as a recovery option.
  - "Show them how a real Microsoft message looks and the rule: Microsoft never calls about a virus."
recovery:
  - Go to account.live.com/acsr to recover from a device you have used before; the more familiar the device, the better.
  - If a scammer set recovery details, keep working the form; it may take more than one attempt.
tools: [a password manager, Microsoft Authenticator]
related: [gmail, wifi-router]
scams: [tech-support-scam, recovery-scam]
faq:
  - q: Is a passwordless account safe?
    a: Yes. There is no password to steal or phish; sign-in is approved on your phone. It is the setup Microsoft recommends for most people.
verified: 2027-01-19
appVersion: Outlook web and Microsoft account, January 2027
published: 2027-01-19
updated: 2027-01-19
---

Microsoft accounts carry a second risk beyond email: they are the name scammers use most in tech-support pop-ups. The account itself can be locked down in ten minutes; the pop-up is beaten by the rule that Microsoft never calls and never needs to connect to your computer.
