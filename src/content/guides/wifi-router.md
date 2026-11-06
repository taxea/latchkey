---
title: Lock down your home Wi-Fi router
service: Wi-Fi router
category: home
atRisk: The router is the front door for every device in the house, and most are still on the password printed on the box.
totalTime: PT15M
checklist:
  - Change the router's admin password (not the Wi-Fi password; the one for its settings).
  - Use WPA3 (or WPA2-AES) with a long Wi-Fi password.
  - Turn on automatic firmware updates.
  - Turn off remote management and WPS.
  - Put smart-home gadgets and guests on a separate guest network.
steps:
  - name: Find the router's settings page
    text: On a device connected to the Wi-Fi, open the router's app or type its address (often 192.168.1.1 or 192.168.0.1, printed on the router) into a browser. Log in with the admin details printed on the router if you never changed them.
  - name: Change the admin password
    text: In the settings, find Administration or System and change the admin password to a long one saved in your password manager. This is the password that controls the router, and the default one is public.
  - name: Set the Wi-Fi security and password
    text: In Wireless settings, choose WPA3 if offered, otherwise WPA2 (AES). Set a long Wi-Fi password; a phrase of four words is fine. You will need to reconnect devices once.
  - name: Turn on automatic updates
    text: Find Firmware or Software update and turn on automatic updates. If the router has no update in two years, it is time to replace it.
  - name: Turn off remote management and WPS
    text: Remote management (sometimes "access from the internet") off. WPS (the push-button connect) off; it has a known weakness.
  - name: Set up a guest network
    text: Turn on the guest network with its own password. Put visitors, smart TVs, cameras and plugs on it so a compromised gadget cannot see your laptop.
  - name: Rename the network if it reveals the brand
    text: If the network name is the router model or your family name, change it to something neutral. Attackers look up default passwords by model.
forParent:
  - If the router came from the internet provider, call the provider and ask them to change the admin password and turn on updates; they can often do it remotely.
  - Write the Wi-Fi password on a card by the router, not the admin password.
  - If the router is more than five years old, replace it; new ones update themselves.
recovery:
  - Locked out of the settings? Hold the reset button on the router for ten seconds to restore factory settings, then redo the steps above.
tools: [the router's app or settings address, a password manager]
related: [gmail, outlook]
scams: [tech-support-scam]
faq:
  - q: Do I really need to change the admin password?
    a: Yes. Default admin passwords are listed online by model. Anyone on your network, including a hacked smart plug, can take over a router that still has one.
  - q: Is the provider's router good enough?
    a: Usually, if it updates itself and you change the admin password. Ask the provider; many now push updates automatically.
verified: 2027-01-22
appVersion: Varies by router, January 2027
published: 2027-01-22
updated: 2027-01-22
---

Routers are the device nobody thinks about and everybody depends on. The two fixes that matter most take five minutes: the admin password and automatic updates. The guest network is the third, because the cheap smart plug from the holidays is the weakest thing on your network.
