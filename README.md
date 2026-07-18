<div align="center">

  <img src=".docs/icon.png" alt="icon" width="25%">

  <h1>File Rename Pro</h1>

  <strong>A lightweight desktop application for batch renaming files.</strong>

  <p align="center">
      <a href="https://x.com/aoaochanchan_">
      <img src="https://shields.io/badge/@aoaochanchan__
-111?logo=x&logoColor=fff" alt="x">
    </a>
    <a href="https://bsky.app/profile/aoaoaoaochan.bsky.social">
      <img src="https://shields.io/badge/@aoaoaoaochan.bsky.social
-01A5FF?logo=bluesky&logoColor=E6F2FF" alt="bluesky">
    </a>
    <a href="https://www.youtube.com/@aoaochanchan">
      <img src="https://shields.io/badge/@aoaochanchan
-f00?logo=youtube&logoColor=fff" alt="youtube">
    </a>
  </p>

  <img src=".docs/banner.png" alt="File Rename Pro Banner" width="100%">

  <h2>Download</h2>

  <p align="center">
    <!--Windows 11-->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.msi_(Windows_11_%7C_x64)-08a1f7?logo=tauri&logoColor=fff" alt="Download .msi for Windows 11">
    </a>
    <br>
    <br>
    <!--macOS-->
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif" width="26" height="1">
    <a href="https://google.com">
      <img src="https://shields.io/badge/.dmg_(Apple_Silicon_%7C_arm64)-e8e8e8?logo=apple&logoColor=808080" alt="Download .dmg for Apple Silicon">
    </a>
    <a href="https://google.com">
      <img src="https://shields.io/badge/.dmg_(Universal_%7C_x64_%7C_arm64)-e8e8e8?logo=apple&logoColor=808080" alt="Download .dmg for">
    </a>
    <br>
    <br>
    <!--Linux (.AppImage)-->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.AppImage_(Linux_%7C_arm64)-222427?logo=linux&logoColor=F9E94E" alt="Download .AppImage for arm64 Linux">
    </a>
    <a href="https://google.com">
      <img src="https://shields.io/badge/.AppImage_(Linux_%7C_x64)-222427?logo=linux&logoColor=F9E94E" alt="Download .AppImage for x64 Linux">
    </a>
    <br>
    <!--Debian-based Linux-->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.deb_(Debian--based_%7C_arm64)-6b0027?logo=debian&logoColor=D80150" alt="Download .AppImage for arm64 Debian-based Linux">
    </a>
    <a href="https://google.com">
      <img src="https://shields.io/badge/.deb_(Debian--based_%7C_x64)-6b0027?logo=debian&logoColor=D80150" alt="Download .AppImage for x64 Debian-based Linux">
    </a>
    <br>
    <!--RHEL-based Linux-->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.rpm_(RHEL--based_%7C_arm64)-294172?logo=fedora&logoColor=3C6EB4" alt="Download .AppImage for arm64 RHEL-based Linux">
    </a>
    <a href="https://google.com">
      <img src="https://shields.io/badge/.rpm_(RHEL--based_%7C_x64)-294172?logo=fedora&logoColor=3C6EB4" alt="Download .AppImage for x64 RHEL-based Linux">
    </a>
    <br>
    <br>
    <br>
    <a href="https://google.com">
      <img src="https://shields.io/badge/Gumroad-222?logo=gumroad&logoColor=FF90E8" alt="Download .AppImage for arm64 Debian-based Linux">
    </a>
    <a href="https://google.com">
      <img src="https://shields.io/badge/itch.io-fa5c5c?logo=itch.io&logoColor=fff" alt="Download .AppImage for arm64 Debian-based Linux">
    </a>
    <a href="https://google.com">
      <img src="https://shields.io/badge/Payhip-599AD7?logo=payhip&logoColor=fff" alt="Download .AppImage for arm64 Debian-based Linux">
    </a>
  </p>

  <br>
</div>

---

## Roadmap

- [x] Sprint 1 - Basic Rename
- [x] Sprint 2 - Preview
- [x] Sprint 3 - Deploy
- [ ] Sprint 4 - Undo
- [ ] Sprint 5 - Drag & Drop

---

## Features

### Sprint 3 (v0.3)
- [x] Icon design update and implementation
  - [x] Generate Icon with Figma and Icon Composer
- [ ] User Manual
  - [ ] PDF
  - [ ] Video (Youtube)
- [ ] Dockerized Linux Build Environments
  - [ ] Dockerfile.ubuntu (.deb | .AppImage)
    - [ ] `.\.docker\Dockerfile.ubuntu`
  - [ ] Dockerfile.fedora (.rpm | .AppImage)
    - [ ] `.\.docker\Dockerfile.fedora`
- [ ] Create Builder Project (npm-workspace)
  - [ ] `.\tools\package.json`
  - [ ] `.\tools\builder.linux.js`
  - [ ] Update npm scripts for build
    - [ ] `npm run build:window`
    - [ ] `npm run build:macOS`
    - [ ] `npm run build:linux`
- [ ] Build Installers
  - [ ] Windows 11 (x64)
  - [ ] macOS
    - [ ] Apple Silicon | arm64
    - [ ] Universal | x64 | arm64
  - [ ] Linux
    - [ ] Common (.AppImage)
      - [ ] x64
      - [ ] arm64
    - [ ] Debian-based (.deb)
      - [ ] x64
      - [ ] arm64
    - [ ] RHEL-based (.rpm)
      - [ ] x64
      - [ ] arm64
- [ ] QA
  - [ ] Windows 11
  - [ ] macOS Tahoe
  - [ ] Linux 
    - [ ] Oracle VirtualBox
    - [ ] Debian 12.15.0
    - [ ] Fedora Workstation 44
- [ ] Deploy
  - [ ] Github
  - [ ] Gumroad
  - [ ] itch.io
  - [ ] Payhip
- [ ] Posting
  - [ ] X
  - [ ] Bluesky
  - [ ] Youtube

#### Fixed
- Fixed an issue where the file name incorrectly displays as "FileRenamePro" instead of "File Rename Pro".
- Fixed a bug where renaming was still possible on the previous path after task completion.

#### Known Issues
- Top menu requires updates, particularly on macOS

### Sprint 2 (v0.2)
- [x] Preview the changes
  - [x] Prevent files starting with '.' from being added.

#### Fixed
- Fixed a bug where hidden files were unintentionally renamed.

#### Known Issues
- Real-time file detection is not supported.
- ~~A bug has been identified where renaming is still possible on the previous path, even though a reset is executed after task completion.~~

### Sprint 1 (v0.1)
- [x] Select a folder
- [x] Display File List
- [x] Rename

#### Known Issues
- ~~Hidden files are unintentionally renamed.~~

---

## Built With
- Tauri
- Vanilla (HTML/CSS/JS)