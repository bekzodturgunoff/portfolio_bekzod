import type { I18n } from './types';

const en: I18n = {
  nav: {
    links: { about: 'About', skills: 'Skills', work: 'Work', contact: 'Contact', resume: 'Resume' },
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
