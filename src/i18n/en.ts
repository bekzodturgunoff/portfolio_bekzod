import type { I18n } from './types';

const en: I18n = {
  nav: {
    links: { about: 'About', skills: 'Skills', caseStudy: 'Case Study', work: 'Work', contact: 'Contact', resume: 'Resume' },
  },
  hero: {
    name: 'Bekzod Turgunov',
    titleTop: 'Front-end Developer',
    titleBottom: 'focused on Design and User Experience',
    description: `I build fast, meaningful websites that connect businesses with their customers. Based in Seoul, I'm originally from Uzbekistan and I love turning ideas into sleek, accessible digital experiences.`,
    location: 'South Korea, Seoul',
    availability: 'Open for new projects',
    timezoneLabel: 'KST (GMT +9)',
    buttons: {
      contact: 'Contact Me',
      viewWork: 'View Work'
    }
  },
  about: {
    intro: `I’m a front-end developer who believes the web should feel alive and easy to use. I focus on fast, accessible design that makes people’s lives a little simpler.`,
    basedIn: 'Based in South Korea, Seoul',
    languagesLine: 'Languages: English (primary), Russian, Korean.'
  },
  contact: {
    heading: `Let's Connect`,
    intro: `Want to build something cool, fix a tricky bug, or just talk ideas? Message me anytime — I’m around.`,
    ctas: { call: 'Call Me', email: 'Send an Email', telegram: 'Message on Telegram' },
    form: {
      name: 'Name',
      namePlaceholder: 'Your name',
      email: 'Email',
      emailPlaceholder: 'your@email.com',
      message: 'Message',
      messagePlaceholder: "What's on your mind?",
      submit: 'Send Message'
    }
  },
  projects: {
    selectedWork: 'Selected Work'
  },
  caseStudy: {
    badge: 'Case Study',
    title: 'KDSX Landing Page',
    subtitle: 'Turning an AI knowledge base concept into a high-converting launch in four weeks.',
    meta: [
      { label: 'Client', value: 'KDSX' },
      { label: 'Role', value: 'Product Designer · Front-end Developer' },
      { label: 'Timeline', value: '4 weeks · 2025' },
      { label: 'Stack', value: 'Next.js, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: 'The challenge',
      body: 'KDSX needed a landing page that explained a technical AI product while earning signups from operations teams with no time to read. The early MVP page was dense, unclear on value, and underperformed on mobile.'
    },
    research: {
      title: 'What I learned',
      bullets: [
        'Interviewed 6 early adopters and uncovered that “instant answers” and “Slack-ready” were the deciding messages.',
        'Benchmarked 8 competitors and found most buried social proof and integrations below the fold.',
        'Mapped the trial signup flow and identified two high-friction steps causing 40% drop-off on phones.'
      ]
    },
    design: {
      title: 'Design & build',
      bullets: [
        'Prototyped three hero variations in Figma; usability tests favoured the conversational headline and live demo preview.',
        'Crafted a modular layout system in Tailwind so new sections (use cases, integrations) could launch in under an hour.',
        'Developed the production site in Next.js with image optimisation, edge caching, and a Resend-powered waitlist form.'
      ]
    },
    impact: {
      title: 'Impact',
      metrics: [
        { value: '+38%', label: 'Signup conversion in first month' },
        { value: '4 weeks', label: 'Concept to launch timeline' },
        { value: '-24%', label: 'Mobile bounce rate after redesign' }
      ],
      body: 'Beyond the numbers, the modular system let the team ship three more page updates without design support. The brand now feels polished enough for enterprise buyers while keeping the build lightweight.'
    },
    images: [
      { src: '/images/projects/before.png', alt: 'Original KDSX landing page before redesign', caption: 'Original MVP screen before the redesign — dense copy, low contrast, and no clear call to action.' },
      { src: '/images/projects/kdsx.png', alt: 'Screenshot of the KDSX landing page', caption: 'High-fidelity desktop screen highlighting the reworked hero, use cases, and social proof.' },
      { src: '/images/projects/kdsx.svg', alt: 'Illustration created for the KDSX hero section', caption: 'Custom illustration system used across hero states and onboarding emails.' }
    ],
    cta: { label: 'Visit live site', href: 'https://kdsx.vercel.app' }
  },
  skills: {
    title: 'What I Work With',
    items: ['JavaScript','TypeScript','React','Astro','Tailwind','Sass']
  },
  footer: {
    reserved: 'All rights reserved.',
    email: 'Email',
    github: 'GitHub',
    telegram: 'Telegram',
    resume: 'Resume',
    bandName: 'Bekzod Turgunov',
    maintenance: 'This site is fully built and maintained by me. If something breaks, I probably broke it (and I’ll fix it soon).',
  }
};

export default en;
