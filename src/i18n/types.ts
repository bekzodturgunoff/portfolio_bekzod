export type Locale = 'en' | 'ru' | 'ko';

export type I18n = {
  nav: {
    links: { about: string; skills: string; caseStudy: string; work: string; contact: string; resume: string };
  };
  hero: {
    name: string;
    titleTop: string;
    titleBottom: string;
    description: string;
    location: string;
    availability: string;
    timezoneLabel: string;
    buttons: {
      contact: string;
      viewWork: string;
    };
  };
  about: {
    intro: string;
    basedIn: string;
    languagesLine: string;
  };
  contact: {
    heading: string;
    intro: string;
    ctas: { call: string; email: string; telegram: string };
    form: {
      name: string;
      namePlaceholder: string;
      email: string;
      emailPlaceholder: string;
      message: string;
      messagePlaceholder: string;
      submit: string;
    };
  };
  projects: {
    selectedWork: string;
  };
  caseStudy: {
    badge: string;
    title: string;
    subtitle: string;
    meta: { label: string; value: string }[];
    problem: { title: string; body: string };
    research: { title: string; bullets: string[] };
    design: { title: string; bullets: string[] };
    impact: { title: string; metrics: { value: string; label: string }[]; body: string };
    images: { src: string; alt: string; caption: string }[];
    cta: { label: string; href: string };
  };
  skills: {
    title: string;
    items: string[];
  };
  footer: {
    reserved: string;
    email: string;
    github: string;
    telegram: string;
    resume: string;
    bandName: string;
    maintenance: string;
  };
};
