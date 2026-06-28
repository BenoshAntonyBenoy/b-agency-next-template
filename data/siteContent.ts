// Edit this file whenever you want to reuse the website for a new business.
// Keep the component files unchanged unless you want layout/design changes.

export const siteContent = {
  brand: {
    name: "B Studio",
    logoLetter: "B",
    tagline: "Design systems, sites, and digital growth without the agency drag."
  },

  nav: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" }
  ],

  cta: {
    primary: "Start a project",
    secondary: "View pricing",
    chat: "Chat with us",
    href: "#contact"
  },

  hero: {
    eyebrow: "B Studio // New launches every week",
    title: "The best design and development partner for ambitious brands.",
    description:
      "We design and build conversion-focused websites, dashboards, landing pages, and product experiences that help your business grow.",
    giantWord: "B Studio"
  },

  trustedBy: [
    "CURSOR", "Metricbooks", "Sapient", "Helium", "Kearney", "Spot", "Avant Page", "Moonbeam", "Appsecure", "Webstone", "Joyhealth", "Content Brew"
  ],

  services: {
    title: "Replace your Engineering Team",
    cards: [
      {
        title: "Design and Development",
        description:
          "From idea to launch: strategy, visuals, responsive frontend, and clean handoff in one flow.",
        theme: "dark"
      },
      {
        title: "Regular updates and progress tracking",
        description: "See revisions, milestones, and approvals without endless follow-ups.",
        theme: "light"
      },
      {
        title: "Hosting, Deployment & Maintenance",
        description: "Reliable releases, backups, monitoring, and performance checks after launch.",
        theme: "dark-map"
      },
      {
        title: "Get found on Google",
        description: "SEO-ready content structure, metadata, and performance optimization.",
        theme: "search"
      },
      {
        title: "Components, Dashboards and Everything else",
        description: "Reusable UI blocks, product screens, admin dashboards, and marketing sections.",
        theme: "circuit"
      }
    ]
  },

  builder: {
    badge: "New Launch",
    title: "B Builder is now Live",
    prompt: "Generate a landing page for a healthcare B2B SaaS",
    poweredBy: ["Claude", "Meta", "OpenAI", "Perplexity", "Replicate"]
  },

  projects: {
    title: "Projects",
    items: [
      {
        title: "AI search landing page",
        description: "A conversion-focused landing page designed to explain a complex product fast.",
        type: "Figma Design, Next.js Development",
        layout: "wide"
      },
      {
        title: "Mobile app launch screen",
        description: "A polished launch visual with premium depth and responsive layout.",
        type: "Brand UI",
        layout: "phone"
      },
      {
        title: "Workspace onboarding",
        description: "A modern onboarding flow for teams, roles, and account setup.",
        type: "Product UX",
        layout: "green"
      },
      {
        title: "Analytics dashboard",
        description: "Clean metrics, cards, charts, and fast scanning for product teams.",
        type: "Dashboard UI",
        layout: "warm"
      },
      {
        title: "Productized service homepage",
        description: "A homepage that positions a service like a product, making the offer easier to buy.",
        type: "Next.js, CMS-ready",
        layout: "blue"
      }
    ]
  },

  testimonials: {
    title: "See insights straight from our users",
    items: [
      {
        company: "Helium",
        quote:
          "The team understood the requirements quickly and turned them into a beautiful working product.",
        name: "John Shahawy",
        role: "Founder"
      },
      {
        company: "Metricbooks",
        quote:
          "Exceptional attention to detail and a collaborative approach. The handoff was smooth and fast.",
        name: "Sarah Johnson",
        role: "Product Manager"
      },
      {
        company: "Performance",
        quote:
          "Our new pages look premium, load quickly, and are easier to manage than our older site.",
        name: "Michael Brown",
        role: "Lead Developer"
      },
      {
        company: "Webstone",
        quote:
          "We finally have a design system that our team can reuse without breaking the brand.",
        name: "Anaya Roy",
        role: "Marketing Lead"
      }
    ]
  },

  scale: {
    title: "Scaling Successful Companies",
    intro:
      "We combine senior design thinking, clean frontend engineering, and launch support to move faster than traditional service providers.",
    stats: [
      { value: "80+", label: "Projects shipped" },
      { value: "12", label: "Industries served" },
      { value: "4.9/5", label: "Average rating" }
    ],
    technologies: ["AWS", "Analytics", "AI", "Realtime", "React", "Next.js"]
  },

  comparison: {
    title: "B Studio VS Traditional Service Providers",
    rows: [
      { label: "Communication", us: "Clear updates", them: "Multiple middlemen" },
      { label: "Deliverables", us: "Production-ready design systems", them: "Static mockups" },
      { label: "Support", us: "Long-term partnership mindset", them: "One-and-done projects" },
      { label: "Speed", us: "Launch-ready sprints", them: "Slow approvals" }
    ],
    benefits: [
      { title: "Instant Onboarding", text: "Skip hiring delays and start seeing progress fast." },
      { title: "High Impact, Low Overhead", text: "Focused execution without extra layers." },
      { title: "Stress-Free Collaboration", text: "Simple updates, clean handoff, and reliable support." }
    ]
  },

  pricing: {
    title: "Extensive Pricing Plans",
    note: "Doubts? Reach out to us anytime.",
    plans: [
      {
        name: "Components",
        badge: "Starter",
        title: "Tailored Website Components",
        subtitle: "for fast-moving brands",
        price: "$4,995/mo",
        featured: false,
        features: [
          "Custom strategy & wireframe",
          "High-fidelity design",
          "Responsive frontend",
          "Smooth animations",
          "Basic SEO setup",
          "Unlimited revisions"
        ]
      },
      {
        name: "Website Pages",
        badge: "Popular",
        title: "Tailored Website Pages",
        subtitle: "for premium landing pages",
        price: "$6,995/mo",
        featured: true,
        features: [
          "Everything in Components",
          "Conversion-focused copywriting",
          "CMS-ready structure",
          "Deployment support",
          "Performance optimization",
          "Maintenance guidance"
        ]
      },
      {
        name: "Multi Pages",
        badge: "Scale",
        title: "Tailored Multi Page Websites",
        subtitle: "for best conversion rates",
        price: "$12,499/mo",
        featured: false,
        features: [
          "Full website architecture",
          "Design system foundation",
          "Reusable sections",
          "Advanced interactions",
          "Launch checklist",
          "Post-launch support"
        ]
      }
    ]
  },

  founder: {
    title: "The Founder's Desk",
    name: "Founder Name",
    text:
      "I help businesses turn vague website ideas into polished, conversion-focused digital experiences. This template is built so your future edits stay easy: change the content file, keep the layout intact, and relaunch fast.",
    highlights: ["Full-stack mindset", "Design-led execution", "Reusable website systems"]
  },

  faq: {
    title: "Frequently asked questions",
    items: [
      {
        question: "Can I edit this site later?",
        answer:
          "Yes. Most text, links, logos, prices, services, and FAQ content are stored in data/siteContent.ts so you can update the site without touching the layout."
      },
      {
        question: "Can an AI modify this template quickly?",
        answer:
          "Yes. Ask the AI to edit only data/siteContent.ts for content changes, or specific components for design changes."
      },
      {
        question: "Can I replace the placeholder visuals?",
        answer:
          "Yes. Add images inside the public folder and reference their paths from the content file or components."
      },
      {
        question: "Does the site include animations?",
        answer:
          "Yes. It includes reveal-on-scroll, floating cards, marquee logos, hover lift effects, gradient movement, and FAQ interactions."
      },
      {
        question: "Can this be hosted online?",
        answer:
          "Yes. It is ready for Vercel, Netlify, or any hosting service that supports Next.js."
      }
    ]
  },

  footer: {
    headline: "Make Your Website a Sales Machine",
    columns: [
      { heading: "Home", links: ["Overview", "Features", "Pricing"] },
      { heading: "About", links: ["Our Story", "Team", "Careers"] },
      { heading: "Contact", links: ["Contact Us", "Support", "Live Chat"] },
      { heading: "Legal", links: ["Privacy Policy", "Terms of Service", "Cookie Policy"] }
    ]
  }
};
