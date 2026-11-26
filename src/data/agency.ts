export interface Project {
  id: string;
  number: string;
  title: string;
  client: string;
  category: string;
  year: string;
  tagline: string;
  description: string;
  accentColor: string;
  badge: string;
  deliverables: string[];
  metrics: string;
  gradient: string;
}

export interface Service {
  id: string;
  number: string;
  title: string;
  description: string;
  deliverables: string[];
  capabilities: string[];
  icon: string;
}

export const SERVICES: Service[] = [
  {
    id: "ui-ux-design",
    number: "01",
    title: "UI/UX & Product Design",
    description:
      "We design thoughtful, research-backed interfaces that balance human emotional resonance with rigorous functional utility. From multi-platform design systems to high-conversion SaaS workflows.",
    deliverables: ["Product Strategy & Audits", "Design Systems & Token Architecture", "Interactive Prototyping", "Complex SaaS UX Architecture"],
    capabilities: ["Figma & Tokens", "Usability Testing", "Micro-Interactions", "Accessibility (WCAG 2.1)"],
    icon: "Layout"
  },
  {
    id: "web-engineering",
    number: "02",
    title: "Full-Stack Web Engineering",
    description:
      "We build uncompromisingly fast, accessible and resilient digital flagships. Utilizing modern Next.js App Router, TypeScript, and edge rendering architectures that scale effortlessly.",
    deliverables: ["Next.js & React Engineering", "Headless CMS & Commerce", "High-Performance Animations", "Edge API Integrations"],
    capabilities: ["TypeScript", "Tailwind CSS", "Server Components", "Vercel Edge Optimization"],
    icon: "Code2"
  },
  {
    id: "brand-identity",
    number: "03",
    title: "Brand Identity & Systems",
    description:
      "We forge distinctive visual identities that endow contemporary companies with an unmistakable point of view, unmistakable typography, and cohesive digital design guidelines.",
    deliverables: ["Brand Strategy & Positioning", "Logomark & Custom Typography", "Visual Identity Guidelines", "Motion Language & 3D Assets"],
    capabilities: ["Editorial Direction", "Tone of Voice", "Design Tokens", "Brand Collateral"],
    icon: "Sparkles"
  },
  {
    id: "digital-experiences",
    number: "04",
    title: "Creative Tech & Experiences",
    description:
      "We pioneer immersive digital campaigns, micro-sites, and experimental 3D web applications that capture attention, win awards, and generate viral brand equity.",
    deliverables: ["WebGL & 3D Experiences", "Award-Winning Campaign Microsites", "Generative Visualizations", "Interactive Product Storytelling"],
    capabilities: ["Shaders & Canvas", "Spatial Storytelling", "Sound Design Sync", "Fluid Interactions"],
    icon: "Boxes"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "nexora",
    number: "01",
    title: "NEXORA",
    client: "Nexora Capital Partners",
    category: "Fintech / Digital Product",
    year: "2026",
    tagline: "Autonomous Wealth Architecture for Institutional Capital",
    description:
      "A next-generation financial operating system providing algorithmic liquidity management, multi-currency treasury balancing, and crystal-clear real-time telemetry.",
    accentColor: "#FF5733",
    badge: "Case Study 01",
    deliverables: ["Platform UX/UI", "Design System", "Real-Time Telemetry Interface"],
    metrics: "+148% Trade Velocity",
    gradient: "from-stone-900 via-neutral-800 to-orange-950"
  },
  {
    id: "monograph",
    number: "02",
    title: "MONOGRAPH",
    client: "Monograph Living Zurich",
    category: "Brand Identity / Lifestyle",
    year: "2026",
    tagline: "Editorial Minimalist Homeware & Spatial Design",
    description:
      "A refined typographic identity, bespoke e-commerce flagship, and sensory digital lookbook crafted for a Swiss architectural homeware studio.",
    accentColor: "#C7F36B",
    badge: "Brand Identity",
    deliverables: ["Visual Identity", "Custom Typography", "Headless Commerce"],
    metrics: "Featured in Wallpaper* & Awwwards",
    gradient: "from-zinc-900 via-stone-900 to-zinc-800"
  },
  {
    id: "veloce",
    number: "03",
    title: "VELOCE",
    client: "Veloce Hyper-Mobility",
    category: "E-Commerce / Experience",
    year: "2025",
    tagline: "Ultra-Lightweight Electric Supercar Configurator",
    description:
      "A tactile 60fps web experience allowing collectors to customize carbon monocoque finishes, aerodynamic trims, and battery telemetry in photorealistic fidelity.",
    accentColor: "#FF5733",
    badge: "Web Experience",
    deliverables: ["3D Configurator", "Motion System", "Global Checkout"],
    metrics: "€42M Presales Generated",
    gradient: "from-neutral-950 via-zinc-900 to-stone-900"
  },
  {
    id: "orbital",
    number: "04",
    title: "ORBITAL",
    client: "Orbital Cloud Systems",
    category: "SaaS / Observability",
    year: "2025",
    tagline: "Autonomous Kubernetes Cloud Orchestration",
    description:
      "A dense yet remarkably legible observability dashboard designed for distributed infrastructure architects managing petabyte-scale pipeline nodes.",
    accentColor: "#C7F36B",
    badge: "Enterprise Platform",
    deliverables: ["Product Architecture", "Data Visualization", "Dark Mode Suite"],
    metrics: "99.999% Fault Reduction",
    gradient: "from-stone-950 via-neutral-900 to-emerald-950"
  },
  {
    id: "noir-atelier",
    number: "05",
    title: "NOIR ATELIER",
    client: "Noir Fragrances Paris",
    category: "Luxury / Creative Direction",
    year: "2025",
    tagline: "Sensory Olfactory Exploration & Bespoke Perfumery",
    description:
      "An evocative dark-aesthetic digital boutique that translates rare botanicals, notes of amber, and artisanal extraction processes into an intimate digital narrative.",
    accentColor: "#FF5733",
    badge: "Luxury Flagship",
    deliverables: ["Creative Direction", "Editorial Storytelling", "Interactive Fragrance Wheel"],
    metrics: "4.8x Avg Session Duration",
    gradient: "from-black via-zinc-950 to-neutral-900"
  },
  {
    id: "greenform",
    number: "06",
    title: "GREENFORM",
    client: "Greenform Ecological Labs",
    category: "Sustainability / Digital Experience",
    year: "2024",
    tagline: "Transparent Carbon Ledger for Circular Manufacturing",
    description:
      "An open-access interactive data storytelling portal quantifying biopolymer lifecycle impacts, supply chain transparency, and circular material flows.",
    accentColor: "#C7F36B",
    badge: "Impact Initiative",
    deliverables: ["Data Journalism", "Interactive Infographics", "Public Audit Tool"],
    metrics: "1.2M Verified Tons Tracked",
    gradient: "from-stone-950 via-neutral-900 to-lime-950"
  }
];

export const STUDIO_PRINCIPLES = [
  {
    number: "01",
    title: "Substance Precedes Style",
    description: "Aesthetics without sound architectural underpinnings is mere decoration. We engineer every pixel with deliberate strategic purpose."
  },
  {
    number: "02",
    title: "Obsession with Nuance",
    description: "The difference between good software and memorable craft lies in the micro-details: typographic tracking, kinetic easing, and zero latency."
  },
  {
    number: "03",
    title: "Modern Engineering Rigor",
    description: "Our design team writes production React code. No handover friction, no compromised compromises, only immaculate execution."
  }
];
