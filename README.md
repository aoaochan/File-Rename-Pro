<!-- ========================================================= -->
<!-- 1. Header -->
<!-- ========================================================= -->

<div align="center">  
  <!-- --------------------------------------------------------- -->
  <!-- 1-1. Hola! -->
  <!-- --------------------------------------------------------- -->
  <h1>
    <!-- Icon -->
    <img src=".docs/Icon.png" alt="icon" width="25%">
    <br>
    <!-- Project Title -->
    File Rename Pro
  </h1>

  <!-- --------------------------------------------------------- -->
  <!-- 1-2. Description -->
  <!-- --------------------------------------------------------- -->
  <strong>A lightweight desktop application for batch renaming files.</strong>

  <!-- --------------------------------------------------------- -->
  <!-- 1-3. SNS Badges -->
  <!-- --------------------------------------------------------- -->
  <p align="center">
    <!-- X (Twitter) -->
    <a href="https://x.com/aoaochanchan_">
      <img src="https://shields.io/badge/@aoaochanchan__-111?logo=x&logoColor=fff" alt="x">
    </a>
    <!-- Bluesky -->
    <a href="https://bsky.app/profile/aoaoaoaochan.bsky.social">
      <img src="https://shields.io/badge/@aoaoaoaochan.bsky.social-01A5FF?logo=bluesky&logoColor=E6F2FF" alt="bluesky">
    </a>
    <!-- Youtube -->
    <a href="https://www.youtube.com/@aoaochanchan">
      <img src="https://shields.io/badge/@aoaochanchan-f00?logo=youtube&logoColor=fff" alt="youtube">
    </a>
  </p>

  <!-- --------------------------------------------------------- -->
  <!-- 1-4. Banner Image -->
  <img src=".docs/banner.png" alt="File Rename Pro Banner" width="100%">
  <!-- --------------------------------------------------------- -->

  <!-- --------------------------------------------------------- -->
  <!-- 1-5. Download Section -->
  <!-- --------------------------------------------------------- -->
  <h2>Download</h2>

  <p align="center">
    <!-- Store -->
    <!-- itch.io -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/itch.io-fa5c5c?logo=itch.io&logoColor=fff" alt="Download on the itch.io">
    </a>
    <!-- Payhip -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/Payhip-599AD7?logo=payhip&logoColor=fff" alt="Download on the Payhip">
    </a>
    <!-- Gumroad -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/Gumroad-222?logo=gumroad&logoColor=FF90E8" alt="Download on the Gumraod">
    </a>
    <br>
    <br>
    <br>
    <!-- Windows 11 -->
    <!-- .msi (Windows 11 | x64) -->
    <a href="https://google.com">
      <!-- Memo (2026-07-19 16:40): shields.io doesn't have microsoft and windows icon. Damn! -->
      <img src="https://shields.io/badge/.msi_(Windows_11_%7C_x64)-08a1f7?logo=tauri&logoColor=fff" alt="Download .msi for Windows 11">
    </a>
    <br>
    <br>
    <!-- macOS -->
    <!-- .dmg (Apple Silicon | arm64) -->
    <img src="https://upload.wikimedia.org/wikipedia/commons/c/ce/Transparent.gif" width="26" height="1">
    <a href="https://google.com">
      <img src="https://shields.io/badge/.dmg_(Apple_Silicon_%7C_arm64)-e8e8e8?logo=apple&logoColor=808080" alt="Download .dmg for Apple Silicon">
    </a>
    <!-- .dmg (Universal | x64 | arm64) -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.dmg_(Universal_%7C_x64_%7C_arm64)-e8e8e8?logo=apple&logoColor=808080" alt="Download .dmg for">
    </a>
    <br>
    <br>
    <!-- Linux -->
    <!-- .AppImage (Linux | arm64) -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.AppImage_(Linux_%7C_arm64)-222427?logo=linux&logoColor=F9E94E" alt="Download .AppImage for arm64 Linux">
    </a>
    <!-- .AppImage (Linux | x64) -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.AppImage_(Linux_%7C_x64)-222427?logo=linux&logoColor=F9E94E" alt="Download .AppImage for x64 Linux">
    </a>
    <br>
    <!-- .deb (Debian-based | arm64) -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.deb_(Debian--based_%7C_arm64)-6b0027?logo=debian&logoColor=D80150" alt="Download .deb for arm64 Debian-based Linux">
    </a>
    <!-- .deb (Debian-based | x64) -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.deb_(Debian--based_%7C_x64)-6b0027?logo=debian&logoColor=D80150" alt="Download .deb for x64 Debian-based Linux">
    </a>
    <br>
    <!-- .rpm (RHEL-based | arm64) -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.rpm_(RHEL--based_%7C_arm64)-294172?logo=fedora&logoColor=3C6EB4" alt="Download .rpm for arm64 RHEL-based Linux">
    </a>
    <!-- .rpm (RHEL-based | x64) -->
    <a href="https://google.com">
      <img src="https://shields.io/badge/.rpm_(RHEL--based_%7C_x64)-294172?logo=fedora&logoColor=3C6EB4" alt="Download .rpm for x64 RHEL-based Linux">
    </a>
  </p>

  <br>
</div>


---


<!-- ========================================================= -->
<!-- 2. Body -->
<!-- ========================================================= -->

<!-- --------------------------------------------------------- -->
<!-- 2-1. Roadmap -->
<!-- --------------------------------------------------------- -->
## Roadmap

- [x] Sprint 1 - Basic Rename
- [x] Sprint 2 - Preview
- [x] Sprint 3 - Deploy
- [ ] Sprint 4 - Undo
- [ ] Sprint 5 - Drag & Drop

---

<!-- --------------------------------------------------------- -->
<!-- 2-2. Features -->
<!-- --------------------------------------------------------- -->
## Features

<!-- --------------------------------------------------------- -->
<!-- v0.3 -->
<!-- --------------------------------------------------------- -->
### Sprint 3 (v0.3)
- [x] Icon design update and implementation
  - [x] Generate Icon with Figma and Icon Composer
- [x] Improving the build environment
  - [x] Monorepo Migration via npm Workspaces (app, tools)
    - [x] Test: npm run dev (`"dev": "npm run tauri dev --workspace=app"`)
    - [x] Test: npm run build: (`"build": "npm run build --workspace=tools"`)
- [ ] Build
  - [ ] Windows 11 (x64)
  - [x] macOS
    - [x] Apple Silicon | arm64
    - [x] Universal | x64 | arm64
  - [x] Linux
    - [ ] Common (.AppImage)
      - [ ] x64
      - [x] arm64
    - [ ] Debian-based (.deb)
      - [ ] x64
      - [x] arm64
    - [ ] RHEL-based (.rpm)
      - [ ] x64
      - [x] arm64
- [ ] QA
  - [ ] Windows 11
  - [ ] macOS Tahoe
  - [ ] Linux (Oracle VirtualBox) 
    - [ ] Ubuntu 22.04
    - [ ] Debian 12.15.0
    - [ ] Fedora Workstation 40
    - [ ] Fedora Workstation 44
- [ ] User Manual
  - [ ] PDF
  - [ ] Video (Youtube)
- [ ] ❗️ **Deploy**
  - [ ] **itch.io**
  - [ ] **Payhip**
  - [ ] **Gumroad**
- [ ] Payments
  - [ ] Stripe
  - [ ] Paypal
- [ ] Marketing
  - [ ] X
  - [ ] Bluesky
  - [ ] Reddit
  - [ ] Video (Satisfying)
    - [ ] Youtube Shorts
    - [ ] TikTok
    - [ ] Instagram Reels

#### Fixed
- ✅ <span style="opacity: 0.5">Fixed an issue where the file name incorrectly displays as "FileRenamePro" instead of "File Rename Pro".</span>
- ✅ <span style="opacity: 0.5">Fixed a bug where renaming was still possible on the previous path after task completion.</span>

#### Known Issues
- ⚠️ Top menu requires updates, particularly on macOS
- ⚠️ Program title is repeatedly displayed inside the message box on Linux. (Works correctly on Windows and macOS)
- ✅ <span style="opacity: 0.5">Explore using Docker to make Linux builds simpler than using virtual machines.</span>
  - ↪ Plan to use Docker
- ✅ <span style="opacity: 0.5">Linux build process needs documentation.</span>
  - ↪ Anticipated to be fixed by adopting Docker and the builder subproject.
- ✅ <span style="opacity: 0.5">Need a separate installation guide for Linux (dependencies, etc.).</span>
  - ↪ Also expected to be resolved by introducing the Docker-based build method.
- ✅ <span style="opacity: 0.5">Need to change Linux version for build (glibc version issue)</span>
  - ↪ Determined:
    Old|New
    -|-
    Debian 12.15.0|**Ubuntu 22.04**
    Fedora 44|**Fedora 40**

---

<!-- --------------------------------------------------------- -->
<!-- v0.2 -->  
<!-- --------------------------------------------------------- -->
### Sprint 2 (v0.2)
- [x] Preview the changes
  - [x] Prevent files starting with '.' from being added.

#### Fixed
- ✅ <span style="opacity: 0.5">Fixed a bug where hidden files were unintentionally renamed.</span>

#### Known Issues
- ⚠️ Real-time file detection is not supported.
- ✅ <span style="opacity: 0.5">A bug has been identified where renaming is still possible on the previous path, even though a reset is executed after task completion.</span>
  - ↪ Fixed in v0.3

---

<!-- --------------------------------------------------------- -->
<!-- v0.1 -->
<!-- --------------------------------------------------------- -->
### Sprint 1 (v0.1)
- [x] Select a folder
- [x] Display File List
- [x] Rename

#### Known Issues
- ✅ <span style="opacity: 0.5">Hidden files are unintentionally renamed.</span>
  - ↪ Fixed in v0.2


---


<!-- ========================================================= -->
<!-- 3. Footer -->
<!-- ========================================================= -->

## Built With
- Tauri
- Vanilla (HTML/CSS/JavaScript)
