---
title: Lock down your Gmail account
service: Gmail
category: email
atRisk: Your email is the master key. Anyone inside it can reset the password on your bank, your Amazon and everything else.
totalTime: PT10M
checklist:
  - Change the password to a long one you use nowhere else, stored in a password manager.
  - Turn on 2-Step Verification, with a passkey or an authenticator app rather than text codes.
  - Add a recovery phone and a recovery email you control, and remove any you do not recognize.
  - Review "Your devices" and sign out of anything you do not recognize.
  - Check forwarding and filters for rules you did not create.
steps:
  - name: Open your Google Account security page
    text: Go to myaccount.google.com and choose Security in the left menu. Everything below lives on this page.
  - name: Change the password
    text: Under "How you sign in to Google," choose Password. Make the new one a long phrase (four or more unrelated words) and save it in your password manager. Do not reuse it anywhere.
  - name: Turn on 2-Step Verification
    text: Still under "How you sign in," choose 2-Step Verification and turn it on. Add a passkey (face or fingerprint on your phone) or the Google Authenticator app. Text-message codes are the fallback, not the first choice, because they can be intercepted by a SIM swap.
  - name: Save the backup codes
    text: On the 2-Step Verification page, generate backup codes and store them in your password manager's secure notes. They get you in if you lose your phone.
  - name: Fix recovery options
    text: Under "How you sign in," check the recovery phone and recovery email. Remove any you do not recognize and add ones you control. A scammer who set a recovery email can reset your password at will.
  - name: Review your devices
    text: Under "Your devices," look at every signed-in device. Sign out of anything you do not recognize or no longer use.
  - name: Check forwarding and filters
    text: Open Gmail, click the gear, See all settings, then Forwarding and POP/IMAP. Make sure nothing forwards your mail elsewhere. Then Filters and Blocked Addresses; delete any filter you did not create, especially ones that delete or archive messages from your bank.
  - name: Review third-party access
    text: Back on the Security page, under "Your connections to third-party apps and services," remove anything you do not use.
forParent:
  - Do it with them, on their device, and write the new password in their notebook as well as the password manager.
  - Add yourself as the recovery email so you can get them back in.
  - Choose the passkey option; a face or fingerprint is easier for them than a code.
  - Show them the one rule, out loud, twice. "Never read a code to anyone who calls."
recovery:
  - Go to g.co/recover and follow the prompts from a device and location you usually use; Google weighs that heavily.
  - Use a backup code if you saved them.
  - If a scammer changed the recovery options, keep working the recovery flow; it can take several attempts over several days.
tools: [a password manager, your phone]
related: [outlook, iphone, android]
scams: [bank-impersonation-scam, recovery-scam, irs-impersonation-scam]
faq:
  - q: Is 2-Step Verification by text message good enough?
    a: It is far better than nothing, and far worse than a passkey or authenticator app. SIM-swap attacks redirect your texts to a scammer's phone. Use text codes as the last resort, not the first.
  - q: What if I'm already locked out?
    a: Go to g.co/recover on a device you normally use. The more familiar the device, network and location, the better the odds.
verified: 2027-01-15
appVersion: Gmail web and app, January 2027
published: 2027-01-15
updated: 2027-01-15
---

Email is where every other account sends its password reset. That is why scammers who get into Gmail do not read your mail; they reset your bank login, your Amazon, your Facebook, and set a forwarding rule so you never see the confirmations. The ten minutes above close every one of those doors.
