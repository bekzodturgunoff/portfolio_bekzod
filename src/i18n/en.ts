import type { I18n } from './types';

const en: I18n = {
  nav: {
    links: { about: 'About', skills: 'Skills', caseStudy: 'Case Study', work: 'Work', contact: 'Contact', resume: 'Resume' },
  },
  hero: {
  name: 'Bekzod',
  titleTop: 'Front-end Developer',
  titleBottom: 'focused on User Experience',
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
      { label: 'Stack', value: 'Astro, Tailwind, Vercel, Resend' }
    ],
    problem: {
      title: 'The challenge',
      body: 'KDSX needed a modern landing page that clearly explained its AI tools and encouraged users to try them. The previous version looked outdated, didn’t show product value well, and wasn’t friendly on mobile.'
    },
    research: {
      title: 'What I did',
      bullets: [
        'Redesigned and rebuilt the entire website from scratch to make it faster, more visual, and easier to understand.',
        'Created custom mockups of the KDSX apps inside iMac, iPad, and iPhone frames so visitors can see how the tools actually work.',
        'Built a simple wizard form that collects user info and gives instant access to a free trial of KDSX’s three main apps.'
      ]
    },
    design: {
      title: 'Results',
      bullets: [
        'The new site feels clean, fast, and professional, helping people grasp KDSX in seconds and motivating more visitors to try it.'
      ]
    },
    images: [
      { src: '/images/projects/before.png', alt: 'Original KDSX landing page before redesign', caption: 'Original MVP screen before the redesign — dense copy, low contrast, and no clear call to action.' },
      { src: '/images/projects/kdsx.png', alt: 'Screenshot of the KDSX landing page', caption: 'High-fidelity desktop screen highlighting the reworked hero, use cases, and social proof.' }
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
  bandName: 'Bekzod',
    maintenance: 'Built with love, caffeine, and a few mysterious errors. If it breaks, I probably learned something new. (Fix incoming… soonish.)',
  }
};

export default en;
