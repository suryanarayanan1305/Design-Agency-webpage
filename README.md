# FORMORA® — Independent Creative & Digital Experience Studio

> **Weboin Technologies Pvt Ltd — React / Next.js Developer Internship Evaluation**  
> Candidate: **Suryanarayanan**  
> GitHub Repository: [https://github.com/suryanarayanan1305/Design-Agency-webpage](https://github.com/suryanarayanan1305/Design-Agency-webpage)  
> Role Target: Next.js / React Frontend Developer Intern  
> Technology: Next.js 16+ (App Router), React 19, TypeScript, Tailwind CSS, Lucide Icons

---

## 1. Executive Summary & Design Vision

**FORMORA®** is a modern, production-grade creative design studio digital flagship. Rather than building a conventional, cookie-cutter agency template filled with repetitive rectangular cards and purple-blue gradient clichés, FORMORA is art-directed around **Swiss editorial design, contemporary digital brutalism, and luxury studio aesthetics**.

### Distinctive Design Language & Palette
- **Warm Ivory Background (`#F2EFE8`)**: Architectural editorial canvas for high readability.
- **Obsidian Dark Surface (`#121212`)**: High-contrast typographic dominance and deep dark-mode showcase cards.
- **Electric Coral (`#FF5733`)**: High-impact interactive accent on CTAs, hover states, and key metrics.
- **Vivid Lime (`#C7F36B`)**: Studio availability indicator, status badges, and precision tags.
- **Stone Grey (`#73736C`)**: Muted secondary text and editorial captions.
- **Typography**: Fluid scale combining Space Grotesk (display headings), Inter (ergonomic UI/body), and Newsreader (editorial elegance).

---

## 2. Core Sections Built (All Mandatory Requirements & Beyond)

### 01. Minimal Sticky Navigation Bar (`Navbar.tsx`)
- Minimalist brand wordmark `FORMORA®` with live Q1 availability badge.
- Smooth-scroll anchor links (`#studio`, `#services`, `#work`, `#process`, `#contact`).
- Sticky transition with background blur and elevation on scroll.
- Responsive mobile menu drawer with smooth toggle interactions.

### 02. The Hero Section (`Hero.tsx`)
- **Headline**: *"WE MAKE DIGITAL FEEL DIFFERENT."*
- Asymmetric Swiss layout with oversized editorial typography.
- Primary CTA (*"Start a Project"*) and secondary exploration CTA (*"Explore Work"*).
- Architectural real-time telemetry card showcasing agency performance metrics (99.8% score, 60fps animations, 100% type safety).
- Kinetic scroll indicator.

### 03. Studio Manifesto & Principles (`Studio.tsx`)
- Architectural philosophy: *"We believe good design does more than look good."*
- Core agency manifesto with 3 strategic principles: *Substance Precedes Style*, *Obsession with Nuance*, and *Modern Engineering Rigor*.

### 04. The Services Section (`Services.tsx`)
- Interactive studio showcase featuring 4 core practice areas:
  1. **UI/UX & Product Design** (Design systems, token architecture, prototyping)
  2. **Full-Stack Web Engineering** (Next.js 16 App Router, TypeScript, edge optimization)
  3. **Brand Identity & Systems** (Visual identity, custom logomarks, motion language)
  4. **Creative Tech & Experiences** (3D configurators, WebGL storytelling, microsites)
- Interactive tabbed / detailed breakdown with strategic deliverables and tech stack badges.

### 05. The Portfolio Showcase (`Portfolio.tsx`)
- Six comprehensive fictional studio case studies:
  - **NEXORA**: Institutional Fintech Wealth Architecture
  - **MONOGRAPH**: Editorial Swiss Minimalist Homeware Flagship
  - **VELOCE**: 60fps Hyper-Mobility 3D Configurator
  - **ORBITAL**: Cloud Infrastructure & Kubernetes Observability Platform
  - **NOIR ATELIER**: Paris Luxury Perfumery & Sensory Brand Experience
  - **GREENFORM**: Circular Economy & Biopolymer Carbon Ledger
- Category filtering tabs (*All, Fintech, Brand Identity, E-Commerce, SaaS, Luxury*).
- Asymmetric editorial grid with hover scaling, deliverable tags, and client metrics.

### 06. The Contact Section (`Contact.tsx`)
- Polished, fully functional interactive form with client-side validation.
- Validates name length, email format (RFC regex), and message detail.
- Project scope and budget allocation selector dropdowns.
- Instant submission simulation with animated confirmation success card.
- Studio contact coordinates and SLA guarantees.

### 07. Studio Footer (`Footer.tsx`)
- Full agency index, social links (GitHub, LinkedIn, Dribbble, X), dynamic copyright year, and animated "Back to Top" smooth scroll.

---

## 3. Technology Stack

| Layer | Technology |
|---|---|
| **Framework** | Next.js 16 (App Router) |
| **Language** | TypeScript |
| **Library** | React 19 (Server & Client Components) |
| **Styling** | Tailwind CSS v4 |
| **Icons** | Lucide React |
| **Fonts** | Next.js Google Fonts (`Space Grotesk`, `Inter`, `Newsreader`) |
| **Hosting & CI/CD** | Vercel |

---

## 4. Project Directory Structure

```text
formora-agency/
├── src/
│   ├── app/
│   │   ├── layout.tsx         # Root layout with fonts, SEO meta, Navbar & Footer
│   │   ├── page.tsx           # Assembled single-page experience
│   │   ├── globals.css        # Palette variables & architectural grid patterns
│   │   └── not-found.tsx      # Branded custom 404 page
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx     # Sticky responsive navigation with mobile drawer
│   │   │   └── Footer.tsx     # Comprehensive studio footer with index & back-to-top
│   │   ├── sections/
│   │   │   ├── Hero.tsx       # Swiss headline composition & metrics showcase
│   │   │   ├── Studio.tsx     # Agency philosophy & principles
│   │   │   ├── Services.tsx   # Interactive capability breakdown
│   │   │   ├── Portfolio.tsx  # Asymmetric 6-project case study grid with filtering
│   │   │   └── Contact.tsx    # Validated contact form with success states
│   │   └── ui/
│   │       └── SectionHeading.tsx # Reusable numbered section title component
│   └── data/
│       └── agency.ts          # Strongly typed project, service, and principle data
├── public/                    # Static assets & favicons
├── package.json
├── tsconfig.json
└── README.md
```

---

## 5. Local Setup & Development Instructions

### Prerequisites
- Node.js 18.18+ or 20+
- npm or pnpm

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/suryanarayanan1305/Design-Agency-webpage.git
   cd Design-Agency-webpage
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
To create an optimized production build:
```bash
npm run build
npm run start
```

---

## 6. Deployment to Vercel

1. Push your repository to your GitHub account:
   ```bash
   git remote add origin https://github.com/suryanarayanan1305/Design-Agency-webpage.git
   git branch -M main
   git push -u origin main
   ```
2. Go to [https://vercel.com](https://vercel.com) and log in with your GitHub account.
3. Click **"Add New..."** -> **"Project"**.
4. Import the repository `Design-Agency-webpage`.
5. Keep the Framework Preset as **Next.js** and click **Deploy**.
6. Vercel will automatically build and publish the live production URL.

---

## 7. Assumptions & Project Notes

- **Fictional Showcase**: The six portfolio projects (*NEXORA, MONOGRAPH, VELOCE, ORBITAL, NOIR ATELIER, GREENFORM*) are concept case studies designed specifically to demonstrate end-to-end UI/UX art direction and technical implementation for this hiring assignment.
- **Contact Form Backend**: Form submissions are validated and processed client-side with feedback states. A production deployment can easily attach a Next.js Server Action with Resend or SendGrid without UI changes.
