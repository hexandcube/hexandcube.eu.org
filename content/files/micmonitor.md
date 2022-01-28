---
title: MicMonitor
description: Simple Autohotkey program that allows you to quickly toggle Microphone monitoring in Windows 
fileName: MicMonitor-1.0.zip
fileType: ZIP File Archive
fileExtension: .zip
fileSize: 2.24MB
fileVersion: "1.0"
fileDate: 2022-01-28
image: /img/files/MicMonitor.png
imageBg: true
download: https://files.hexandcube.eu.org/download/MicMonitor/MicMonitor-1.0.zip
downloadServer: Hexandcube Files
servers:
  - name: "GitHub"
    download: https://github.com/hexandcube/MicMonitor/releases/download/v.1.0.0/MicMonitor-1.0.zip
---

MicMonitor is a simple program written in Autohotkey that allows you to quickly toggle microphone monitoring in Windows ("Listen to this device" option in Control panel).

Tested on Windows 11 21H2 Build 22000, but should work also work on older versions of Windows.

### How to use

By default MicMonitor toggles monitoring for the Microphone with a name "Microphone".
If you want to change this, you can set the name of your Microphone device in the toggle.ini file.

![Example](https://i.imgur.com/CwkZeHx.png)

If there is no toggle.ini file in the MicMonitor directory, the program will toggle the first device on the list of the recording devices.

To toggle microphone monitoring (when the program is running), you can either double click the icon in the taskbar, or click the "Toggle Microphone Monitoring" option in the MicMonitor right-click menu.

The zip file contains the app installer that will automatically add the app to startup, and a standalone binary of the app.

### License

Microphone icon by [Icons8](https://icons8.com/).

### Install using Chocolatey

`choco install micmonitor`

<a class="btn btn-primary" href="https://chocolatey.org/install" target="_blank"><i class="fas fa-download"></i> Install Chocolatey</a>
<a class="btn" href="https://community.chocolatey.org/packages/micmonitor" target="_blank"><i class="fas fa-external-link-alt"></i> Visit Package Page</a>

