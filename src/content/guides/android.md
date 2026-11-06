---
title: Lock down your Android phone
service: Android
category: phone
atRisk: Your phone holds your bank, your email and your two-factor codes. A weak screen lock or a sideloaded app hands all of it over.
totalTime: PT10M
checklist:
  - Use a six-digit PIN or a password, plus fingerprint or face unlock.
  - Turn on Theft Detection Lock and Offline Device Lock.
  - Turn on caller ID and spam protection, and spam protection in Messages.
  - Keep Google Play Protect on and never install apps from a link.
  - Turn on Find My Device and automatic updates.
steps:
  - name: Strengthen the screen lock
    text: Settings, Security & privacy, Device unlock, Screen lock. Choose PIN (six digits) or Password. Add fingerprint or face unlock for convenience; the PIN is the backup.
  - name: Turn on theft protection
    text: Settings, Security & privacy, Device unlock (or Theft protection on recent versions). Turn on Theft Detection Lock, Offline Device Lock and Remote Lock. These lock the phone automatically when it is snatched or taken offline.
  - name: Turn on call and text spam protection
    text: Open the Phone app, tap the menu, Settings, Caller ID & spam, and turn on both switches. Open Messages, menu, Settings, Spam protection, on. Add your carrier's free scam-blocking app if it has one.
  - name: Keep Play Protect on
    text: Open Google Play, tap your profile, Play Protect, settings gear, and make sure Scan apps with Play Protect is on. Never install an app from a link in a text or email; that is how banking malware arrives.
  - name: Turn on Find My Device
    text: Settings, Security & privacy, Device finders, Find My Device, on. Test it at android.com/find.
  - name: Turn on automatic updates
    text: Settings, System, Software update; turn on automatic download. In Google Play, settings, Network preferences, auto-update apps.
  - name: Lock the SIM with your carrier
    text: Call your carrier or use its app and add an account PIN and a port-out or number lock. This stops SIM swaps, where a scammer moves your number to their phone and receives your codes.
  - name: Review app permissions
    text: Settings, Security & privacy, Privacy, Permission manager. Look at SMS, Accessibility and Display over other apps; nothing but your keyboard and a password manager should have Accessibility.
forParent:
  - Set a six-digit PIN they will remember and write it in their notebook.
  - Turn on spam protection in Phone and Messages; explain that family in Contacts always gets through.
  - Add yourself in Google Family Link or share location in Google Maps so you can find the phone.
  - Hide the Play Store sideloading option; set "Install unknown apps" to off for every app.
recovery:
  - If the phone is lost, go to android.com/find, lock it and show a message with a callback number.
  - If you forgot the PIN, you will need to erase from android.com/find and restore from your Google backup; check that backup is on today.
tools: [your Android phone, your carrier account login]
related: [iphone, gmail, bank-login]
scams: [toll-text-scam, package-delivery-scam, grandparent-scam, tech-support-scam]
faq:
  - q: Why is sideloading the big risk?
    a: Most Android banking malware arrives as an app installed from a link ("install this to track your package"). Keeping Play Protect on and never installing from a link closes that door.
  - q: My phone is a few years old and doesn't have these settings.
    a: Older versions have the screen lock, spam protection and Find My Device; the theft-protection features arrived in 2024 and 2025. If the phone no longer gets security updates, that is the strongest reason to replace it.
verified: 2027-01-16
appVersion: Android 16, January 2027
published: 2027-01-16
updated: 2027-01-16
---

Android's biggest risk is different from iPhone's: it is the app you were talked into installing. A "delivery tracker," a "video call app" from a stranger, a "bank security update." Once installed with Accessibility permission, it reads your screen, including your bank. Play Protect and the no-links rule prevent it; the permission review above catches it.
