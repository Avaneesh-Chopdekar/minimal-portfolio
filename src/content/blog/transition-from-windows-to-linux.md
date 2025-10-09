---
title: "Transition from Windows to Linux"
description: In this blog article I have documented my journey of switching from Windows to Linux.
tags: ["linux", "windows", "os", "documentary"]
date: 2025-10-09
---

### Introduction

Life is all about discovering new opportunities and going through new experiences. As a computer science student, I knew about Linux and was always interested to use it myself. This blog article goes through my experience of transitioning from Windows to Linux.

### Understanding Linux

Linux is an operating system (in this context) that powers a vast portion of the internet infrastructure and many desktop computers worldwide. It offers a multitude of distributions (Ubuntu, Fedora, Mint, etc.)
tailored to suit various user needs and preferences.

Benefits of Linux over Windows:

- Better performance
- Works smooth on okay-ish hardware
- Free and Open source nature
- Next level customization support
- Robust Security
- More Freedom

### Preparing for the Switch

I spent an entire week understanding about Linux. What is a distro? What is a desktop environment?

I studied Linux commands and most importantly watched YouTube videos of people trying out Linux for the first time. Took some notes to not repeat their mistakes. Took a backup of my important files in an external hard drive. Did some more research with respect to my device. Finally, chose a Linux distro that fulfilled my needs and was beginner friendly.

### Choosing a Linux Distribution

Everyone has different needs. Some choose a Linux distro for gaming while others choose for normal productivity and office work (coding in my scenario). I decided to go with **Fedora Workstation 42**.

I had already used Debian based Linux distro on my Windows via WSL 2. So, I wanted something better and more modern to use. Fedora comes under Red hat ecosystem. It is free and open source. It updates every 6 months compared to Debian based Linux distros which get updates every 2 years. It is extremely popular in Linux ecosystem, so if I ever get stuck at something I will most likely find a solution on the web.

### Linux Distro Recommendations

1. Linux Mint Cinnamon
   - If you want a windows replacement that just works out of the box. Go with Linux Mint Cinnamon.
   - It is based on Ubuntu. It is widely used by Linux community. It is very stable to use.
1. Fedora Workstation
   - If you want something different from Debian ecosystem that's equally stable and popular.
   - Go with Fedora Workstation. GNOME Desktop environment comes with bunch of extensions to customize it.
   - Fedora is actively maintained by Red hat. Performance and privacy are top notch.
1. Pop!\_OS
   - It is based of Debian. It comes out of the box with latest NVIDIA graphic card drivers.
   - It is very easy to use, extremely popular.
   - Mostly recommended for users with heavy GPU usage like gaming, 3D animation, training llms.
1. Ubuntu
   - If you want something vanilla. That just works without any hassle. Ubuntu is for you.
   - Most used Linux distribution out there.
1. Bazzite / SteamOS
   - If you want a Linux distribution for gaming. Either go with Bazzite or SteamOS.
   - Bazzite is based on Fedora and SteamOS is based on Arch Linux (preinstalled in Steam Decks).

### Familiarizing with the New Environment

I installed **Fedora Workstation 42**, which comes with GNOME desktop environment.

GNOME is very easy to use, It's similar to Mac OS. There is no application drawer like Windows but a dock in the bottom center of your screen with pinned apps displayed along side menu button to view all apps.

Ran `sudo dnf update -y` command in the terminal to update my fresh installation with latest updates.

There were no Microsoft apps installed like Microsoft Word, Excel, PowerPoint, etc but there were LibreOffice's alternatives preinstalled. They worked fine but compatibility with MS Office's documents wasn't great like your PPT won't look the same on LibreOffice or Excel's formulas might not translate well on LibreOffice. So, I decided to uninstall LibreOffice and install OnlyOffice.

OnlyOffice is a free and open source MS Office alternative with excellent support for MS Office documents. Even the user interface of OnlyOffice was very similar to MS Office unlike LibreOffice.

Installed additional software required for my needs. Loaded all my files from my external hard drive and I was ready to go.

### Common Challenges and Solutions

Normally when you install Linux on your device, there will be instances where your certain keyboard keys are not working or any hardware module is not working like WiFi or Bluetooth etc.

In my case nothing like that happened, I had a very seamless transition.

I installed the propriety NVIDIA graphic card drivers from GNOME software manager.

I had to additionally install asusctl, supergfxctl and asusctl-rog-gui, these tools let me control my laptop's fans and lights.

I forgot to mention one thing. When I used Windows on my device, I used my fingerprint sensor to authenticate myself to unlock it but with Linux the specific fingerprint sensor is not supported and it defaults to password for authentication. Not too big of an issue, just minor inconvenience.

### Conclusion

From 14th October 2025, Windows 10 will reach its end of support. Marking an end of all technical assistance, feature updates, and security updates for the operating system. I personally didn't like Windows 11 that much compared to Windows 10. So I decided to go with Linux and It was a great experience. Applications launch faster, so many customization options, no unnecessary data collection to feed to LLMs. If you are tech savvy, I would highly recommend to try out Linux at least once in your life.
