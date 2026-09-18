<div align="center">

  # 🌟 PEAK BROSMAO — Personal Portfolio

  <p align="center">
    <strong>Modern, high-performance personal portfolio showcasing full-stack web development, computer science projects, and creative video direction.</strong>
  </p>

  <p align="center">
    <a href="https://peakbrosmao.me" target="_blank">
      <img src="https://img.shields.io/badge/Live_Demo-peakbrosmao.me-6366f1?style=for-the-badge&logo=googlechrome&logoColor=white" alt="Live Demo" />
    </a>
    <a href="https://github.com/peak-brosmao/portfolio" target="_blank">
      <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repo" />
    </a>
    <img src="https://img.shields.io/badge/Status-Active-22c55e?style=for-the-badge" alt="Status Active" />
  </p>

  <p align="center">
    <img src="https://img.shields.io/badge/React-18.3-61DAFB?style=flat-square&logo=react&logoColor=black" alt="React" />
    <img src="https://img.shields.io/badge/Vite-5.4-646CFF?style=flat-square&logo=vite&logoColor=white" alt="Vite" />
    <img src="https://img.shields.io/badge/React_Router-v6-CA4245?style=flat-square&logo=reactrouter&logoColor=white" alt="React Router" />
    <img src="https://img.shields.io/badge/CSS3-Vanilla_Glassmorphic-1572B6?style=flat-square&logo=css3&logoColor=white" alt="CSS3" />
    <img src="https://img.shields.io/badge/Vercel-Deployed-000000?style=flat-square&logo=vercel&logoColor=white" alt="Vercel" />
    <img src="https://img.shields.io/badge/Language-English_%26_Khmer-ff69b4?style=flat-square" alt="Bilingual" />
  </p>

</div>

---

## 📖 Table of Contents

- [About The Project](#-about-the-project)
- [Key Features](#-key-features)
- [Tech Stack](#-tech-stack)
- [Project Architecture](#-project-architecture)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Development Server](#development-server)
  - [Production Build](#production-build)
- [Pages & Highlights](#-pages--highlights)
- [Deployment](#-deployment)
- [Connect With Me](#-connect-with-me)
- [License](#-license)

---

## 👤 About The Project

This is the official personal portfolio website of **PEAK BROSMAO** — a Computer Science student at the **Institute of Technology of Cambodia (ITC - GIC)**, Web Developer, Video Director, and Tech Enthusiast.

The platform is designed to offer visitors a seamless, interactive, and visually stunning experience while showcasing academic milestones, technical skillsets, creative media projects, and direct contact channels.

🌐 **Live Website**: [https://peakbrosmao.me](https://peakbrosmao.me)

---

## ✨ Key Features

- **⚡ Blazing-Fast Performance**: Built on React 18 and Vite with instant HMR and optimized asset bundling.
- **🎨 Glassmorphic & Modern Aesthetic**: Curated dark theme palette with subtle glowing gradients, smooth glassmorphism, and responsive micro-animations.
- **🌌 Interactive Animated Canvas**: Dynamic particle and nebula animation rendered directly on HTML5 Canvas.
- **🌐 Bilingual Support (EN & KM)**: Seamless in-app toggle between English and Khmer (ភាសាខ្មែរ) with dedicated translations.
- **🌓 Theme Support**: Built-in Dark & Light mode support powered by React context.
- **📱 Fully Responsive**: Fluid typography and flex/grid layouts optimized across smartphones, tablets, and ultra-wide desktops.
- **📋 One-Click Copy & Toast Notifications**: Interactive click-to-copy functionality for contact handles, emails, and social handles with real-time feedback toast.
- **📬 Working Contact Form**: Integrated contact channel with form validation, Formspree API submission, and automatic mailto fallback.
- **🚀 7+ Live Web Platforms Showcase**: Dedicated interactive experience hub highlighting production web applications with live links, technology badges, and metrics.

---

## 🌐 Featured Live Applications & Production Platforms

| Platform | Category | URL | Stack & Key Capabilities |
| :--- | :--- | :--- | :--- |
| **iUseTools** | File Converter & Dev Suite | [iusetools.site](https://www.iusetools.site) | Next.js, React, OCR (JPG to Word), PDF tools, 30+ client-side private utilities |
| **URLGenZ** | URL Shortener & Link Suite | [urlgenz.site](https://www.urlgenz.site) | Next.js, React, Custom aliases, auto QR generator, UTM analytics, bulk tools |
| **QRGenZ** | QR Generator & Scanner | [qrgenz.online](https://www.qrgenz.online) | Next.js, React, 12 artistic styled templates, live camera scan, SVG/PNG export |
| **SnapDown** | HD Media Downloader | [snapdown.online](https://www.snapdown.online/) | JavaScript, Video/audio extraction from YouTube, TikTok, Facebook, IG, X |
| **Fake-Inbox** | Disposable Email Service | [fake-inbox.com](https://fake-inbox.com) | PHP, Instant ephemeral mailboxes, spam defense, fast online verification |
| **CamHost** | Telegram Cloud Storage | [camhost.space](https://camhost.space) | Vite, React, Open-source unlimited cloud storage powered by Telegram API |
| **24hMovie** | Cinema & Streaming Portal | [24hmoive.site](https://24hmoive.site) | Web Streaming, Video player integration, dark cinema UI, responsive catalog |

---

## 🛠 Tech Stack

### **Frontend & Core**
- **[React 18](https://react.dev/)** — Modern component-based declarative UI
- **[Vite 5](https://vitejs.dev/)** — Next-generation frontend tooling and fast bundler
- **[React Router DOM v6](https://reactrouter.com/)** — Client-side SPA routing and navigation
- **[Lucide React](https://lucide.dev/)** — Clean, consistent, and lightweight icon library
- **Vanilla CSS3** — Custom-engineered design tokens, keyframe animations, glassmorphism, and responsive utilities

### **Deployment & Infrastructure**
- **[Vercel](https://vercel.com/)** — Edge deployment, automatic CI/CD, and global CDN caching
- **Custom Domain & SSL** — [peakbrosmao.me](https://peakbrosmao.me) with automatic HTTPS

---

## 📂 Project Architecture

```plaintext
portfolio/
├── index.html              # HTML entry point with OpenGraph & SEO tags
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite build & plugin configurations
├── vercel.json             # Vercel SPA rewrite & header rules
├── img/                    # Static image assets (Profile photo, previews)
├── public/                 # Static public assets
└── src/
    ├── App.jsx             # Root application component with routing & layout
    ├── main.jsx            # React root mount point
    ├── index.css           # Global design system, theme tokens & styling
    ├── components/         # Reusable UI components
    │   ├── AnimatedBg.jsx  # Interactive particle/nebula canvas component
    │   ├── Footer.jsx      # Global footer with social badges & copyright
    │   ├── Navbar.jsx      # Navigation bar with language & theme toggles
    │   ├── TechIcon.jsx    # SVG icons for tech stacks & social platforms
    │   └── Toast.jsx       # Floating clipboard feedback toast
    ├── context/            # Global state providers
    │   ├── LanguageContext.jsx # English / Khmer localization context
    │   └── ThemeContext.jsx    # Dark / Light theme context
    ├── data/
    │   └── translations.js # Comprehensive bilingual dictionary (EN & KM)
    └── pages/              # Application route pages
        ├── HomePage.jsx        # Hero with typewriter, highlights & intro
        ├── AboutPage.jsx       # Personal biography, timeline & interests
        ├── EducationPage.jsx   # ITC (GIC) academic background & coursework
        ├── SkillsPage.jsx      # Technical skills, frameworks & tools
        ├── ExperiencePage.jsx  # Media production & dev experiences
        ├── AchievementsPage.jsx# Honors, awards & certifications
        ├── ContactPage.jsx     # Contact form, direct channels & map location
        └── MaintenancePage.jsx # Graceful 404 & fallback page
```

---

## 🚀 Getting Started

Follow these steps to set up and run the project locally on your machine.

### Prerequisites

Ensure you have the following installed:
- [Node.js](https://nodejs.org/) (version `18.x` or higher recommended)
- [Git](https://git-scm.com/)

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/peak-brosmao/portfolio.git
   ```

2. Navigate into the project directory:
   ```bash
   cd portfolio
   ```

3. Install project dependencies:
   ```bash
   npm install
   ```

### Development Server

Start the local development server with Hot Module Replacement (HMR):
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### Production Build

To compile and bundle the application for production:
```bash
npm run build
```

Preview the production build locally:
```bash
npm run preview
```

---

## 📄 Pages & Highlights

| Route | Page | Description |
| :--- | :--- | :--- |
| `/` | **Home** | Typewriter hero, quick stats, technology stack preview, and primary CTAs |
| `/about` | **About** | Detailed biography, personal journey, core values, and life timeline |
| `/education` | **Education** | Academic background at ITC (GIC), coursework, and academic journey |
| `/skills` | **Skills** | Frontend, backend, programming languages (C++, Java, JS), and creative tools |
| `/experience` | **Experience** | **7+ Live Web Apps** ([iUseTools](https://www.iusetools.site), [URLGenZ](https://www.urlgenz.site), [QRGenZ](https://www.qrgenz.online), [SnapDown](https://www.snapdown.online/), [Fake-Inbox](https://fake-inbox.com), [CamHost](https://camhost.space), [24hMovie](https://24hmoive.site)), film direction & industry roles |
| `/achievements`| **Achievements**| Verified certifications, competition wins, and recognitions |
| `/contact` | **Contact** | Direct communication handles (Telegram, Email, Socials) and message form |

---

## ☁️ Deployment

This project is configured for one-click continuous deployment on **Vercel**.

1. Connect your GitHub repository to [Vercel](https://vercel.com/).
2. Build Settings:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`
3. Push to `main` to trigger automatic deployments.

The included `vercel.json` ensures client-side routing handles deep links properly:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

---

## 📬 Connect With Me

Feel free to reach out for collaborations, project inquiries, or just to say hello!

- 🌐 **Portfolio**: [peakbrosmao.me](https://peakbrosmao.me)
- ✉️ **Email**: [contact@peakbrosmao.me](mailto:contact@peakbrosmao.me)
- ✈️ **Telegram**: [@peak_brosmao](https://t.me/peak_brosmao)
- 💼 **LinkedIn**: [PEAK BROSMAO](https://www.linkedin.com/in/peak-brosmao-2a5304389/)
- 📘 **Facebook**: [peakbrosmao](https://www.facebook.com/peakbrosmao)
- 🐦 **X (Twitter)**: [@peak_brosmao](https://x.com/peak_brosmao)
- 🎥 **YouTube**: [@peak_brosmao](https://www.youtube.com/@peak_brosmao)

---

## 📝 License

Distributed under the MIT License. Feel free to use this project for inspiration or reference.

<div align="center">
  <sub>Built with ❤️ by <a href="https://peakbrosmao.me">PEAK BROSMAO</a> • Phnom Penh, Cambodia</sub>
</div>
