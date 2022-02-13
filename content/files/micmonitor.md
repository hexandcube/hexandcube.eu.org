---
title: MicMonitor
description: Simple Autohotkey program that allows you to quickly toggle Microphone from the taskbar
fileName: MicMonitor-1.1.zip
fileType: ZIP File Archive
fileExtension: .zip
fileSize: 2.24MB
fileVersion: "1.1"
fileDate: 2022-01-29
image: /img/files/MicMonitor.png
imageBg: true
download: https://files.hexandcube.eu.org/download/MicMonitor/MicMonitor-1.1.zip
downloadServer: Hexandcube Files
servers:
  - name: "GitHub"
    download: https://github.com/hexandcube/MicMonitor/releases/download/v.1.1.0/MicMonitor-1.1.zip
versions:
  - name: "1.0"
    download: https://files.hexandcube.eu.org/download/MicMonitor/MicMonitor-1.0.zip
    date: 2022-01-28
---

MicMonitor is a simple program written in Autohotkey that allows you to quickly toggle microphone monitoring in Windows ("Listen to this device" option in Control panel).

Tested on Windows 11 21H2 Build 22000, but should work also work on older versions of Windows.

The zip file contains the app installer that will automatically add the app to startup, and a standalone binary of the app.'

### How to use

If you used the installer, MicMonitor will start automatically when you start your computer.

When you start MicMonitor for the first time, you will be asked to select a microphone you want to monitor.
The name of the device has to be the same as the one you see in the Settings app or in Control Panel. 

![Screenshot](https://i.imgur.com/tvQljCS.png)

The device name will be saved in the MicMonitor.ini file, in the same folder as the executable.

When MicMonitor is running, you will see a tray icon on the taskbar.

![Screenshot](https://i.imgur.com/QxYtgDa.png)

Double-click the tray icon to toggle microphone monitoring on the selected device.

To change the selected device, right-click the tray icon and click `Change device`.

![Screenshot](https://i.imgur.com/6ug5khU.png)

### Licenses

MicMonitor by Hexandcube is licensed under the [MIT license](https://github.com/hexandcube/MicMonitor/blob/master/LICENSE)

Microphone icon by [Icons8](https://icons8.com/).

### Install using Chocolatey

```powershell
choco install micmonitor
```

<a class="btn btn-primary" href="https://chocolatey.org/install" target="_blank"><i class="fas fa-download"></i> Install Chocolatey</a>
<a class="btn" href="https://community.chocolatey.org/packages/micmonitor" target="_blank"><i class="fas fa-external-link-alt"></i> Visit Package Page</a>

