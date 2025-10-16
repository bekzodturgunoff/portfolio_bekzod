/* empty css                                 */
import { c as createComponent, r as renderHead, a as renderSlot, b as renderTemplate, m as maybeRenderHead, e as addAttribute, f as createAstro, g as renderComponent } from '../chunks/astro/server_CdUeg0b0.mjs';
import 'kleur/colors';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$Base = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`<html lang="en"> <head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><meta name="description" content="Modern, fast portfolio"><meta name="color-scheme" content="light dark"><link rel="icon" href="/favicon.ico"><title>Portfolio</title>${renderHead()}</head> <body class="min-h-screen bg-white text-neutral-900 dark:bg-neutral-950 dark:text-neutral-100"> ${renderSlot($$result, $$slots["default"])}  </body></html>`;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/layouts/Base.astro", void 0);

const $$Nav = createComponent(($$result, $$props, $$slots) => {
  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#work", label: "Work" },
    { href: "#contact", label: "Contact" }
  ];
  return renderTemplate`${maybeRenderHead()}<nav class="sticky top-0 z-50 backdrop-blur bg-white/70 dark:bg-neutral-950/70 border-b border-black/10 dark:border-white/10"> <div class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"> <a href="#" class="font-semibold tracking-tight">Bekzod.dev</a> <div class="flex items-center gap-4"> <ul class="hidden sm:flex items-center gap-6 text-sm"> ${links.map((l) => renderTemplate`<li><a class="hover:text-brand-600 dark:hover:text-brand-400 transition-colors"${addAttribute(l.href, "href")}>${l.label}</a></li>`)} </ul> <a href="/resume/resume.pdf" download class="uppercase text-[12px] tracking-wide hover:underline underline-offset-4 decoration-neutral-400/70 dark:decoration-white/40">Resume</a> <button type="button" title="Toggle theme" class="px-2 py-1 rounded-md text-sm border border-black/10 dark:border-white/10 hover:bg-black/5 dark:hover:bg-white/10 transition-colors" onclick="window.__toggleTheme && window.__toggleTheme()"> <span class="dark:hidden">🌙</span> <span class="hidden dark:inline">☀️</span> </button> </div> </div> </nav>`;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/components/Nav.astro", void 0);

const $$Hero = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="relative overflow-hidden"> <div class="max-w-6xl mx-auto px-4 py-20 sm:py-24"> <!-- Name + thin rule + nav sits above in Nav; this bar mirrors the reference --> <div class="hidden sm:grid grid-cols-3 items-center text-xs text-neutral-500 dark:text-neutral-400 mb-8" data-reveal> <div class="font-medium">Bekzod Turgunov</div> <div class="h-px bg-neutral-200 dark:bg-white/10"></div> <div class="text-right"> <span class="inline-flex items-center gap-2"><span class="hidden md:inline">KST (GMT +9)</span></span> </div> </div> <!-- Massive headline --> <h1 class="leading-[0.95] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-6" data-reveal> <span class="block text-neutral-300 dark:text-white/90">Website Builder</span> <span class="block text-neutral-900 dark:text-white">and Brand Strategist</span> </h1> <!-- Location / availability bar --> <div class="flex items-center gap-4 text-[11px] text-neutral-500 dark:text-neutral-400 mb-12" data-reveal> <span>South Korea, Seoul</span> <div class="h-px flex-1 bg-neutral-200 dark:bg-white/10"></div> <span class="inline-flex items-center gap-2"><span class="h-2 w-2 rounded-full bg-emerald-400"></span> AVAILABLE</span> </div> <!-- Main split: description left, portrait/right visual --> <div class="grid md:grid-cols-2 gap-12 items-start"> <div class="max-w-prose" data-reveal> <p class="text-neutral-700 dark:text-neutral-300">
I help startups and enterprises create meaningful connections between their products and customers. With a focus on ethical practices, I streamline publishing workflows and empower businesses to achieve their goals while fostering lasting customer engagement.
</p> <div class="mt-10 flex gap-6 text-sm"> <a href="#contact" class="uppercase text-[12px] tracking-wide hover:underline underline-offset-4 decoration-neutral-400/70 dark:decoration-white/40">Book a Call <span aria-hidden>↗</span></a> <a href="#work" class="uppercase text-[12px] tracking-wide hover:underline underline-offset-4 decoration-neutral-400/70 dark:decoration-white/40">Work <span aria-hidden>↗</span></a> </div> </div> <div class="relative" data-reveal> <!-- Use a placeholder visual; replace with an image later --> <div class="aspect-[4/3] md:aspect-[5/4] rounded-3xl bg-gradient-to-b from-black/30 to-black/70 dark:from-white/5 dark:to-white/5 border border-black/20 dark:border-white/10"></div> </div> </div> </div> </section>`;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/components/Hero.astro", void 0);

const $$Astro$2 = createAstro();
const $$Section = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$Section;
  const { id, title, children } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section${addAttribute(id, "id")} class="max-w-6xl mx-auto px-4 py-20" data-reveal> <h2 class="text-2xl md:text-3xl font-semibold tracking-tight mb-8 text-neutral-900 dark:text-neutral-100">${title}</h2> <div> ${renderSlot($$result, $$slots["default"])} </div> </section>`;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/components/Section.astro", void 0);

const $$LogoMarquee = createComponent(($$result, $$props, $$slots) => {
  const logos = ["figma", "github", "notion", "framer", "vercel", "astro", "tailwind", "figma", "github", "notion"];
  return renderTemplate`${maybeRenderHead()}<section class="border-y border-black/10 dark:border-white/10" data-astro-cid-h2jlyvcc> <div class="max-w-6xl mx-auto px-4 overflow-hidden py-10" data-astro-cid-h2jlyvcc> <div class="marquee" data-astro-cid-h2jlyvcc> <div class="marquee__content" aria-hidden="false" data-astro-cid-h2jlyvcc> ${logos.map((l) => renderTemplate`<span class="chip" data-astro-cid-h2jlyvcc>${l}</span>`)} </div> <div class="marquee__content" aria-hidden="true" data-astro-cid-h2jlyvcc> ${logos.map((l) => renderTemplate`<span class="chip" data-astro-cid-h2jlyvcc>${l}</span>`)} </div> </div> </div> </section> `;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/components/LogoMarquee.astro", void 0);

const $$Astro$1 = createAstro();
const $$Projects = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Projects;
  const projects = [
    { title: "Astro Portfolio", year: "'25", tags: ["DEV", "DSGN"], href: "https://github.com/bekzodturgunoff" },
    { title: "React + Framer Portfolio", year: "'24", tags: ["DEV", "UX"], href: "https://github.com/bekzodturgunoff" },
    { title: "Node Email API", year: "'25", tags: ["API", "NODE"], href: "https://github.com/bekzodturgunoff" }
  ];
  return renderTemplate`${maybeRenderHead()}<section class="max-w-6xl mx-auto px-4"> <div class="divide-y divide-neutral-200/80 dark:divide-white/10"> ${projects.map((p) => renderTemplate`<a${addAttribute(p.href, "href")} class="block group"> <div class="grid grid-cols-12 items-center py-12 sm:py-16 hover:bg-black/[0.02] dark:hover:bg-white/[0.04] transition-colors" data-reveal> <div class="col-span-8 pr-6"> <h3 class="text-2xl sm:text-[28px] font-semibold tracking-tight">${p.title}</h3> <div class="mt-3 flex items-center gap-2"> ${p.tags.map((t) => renderTemplate`<span class="px-2 py-0.5 text-[11px] rounded-full bg-black/5 dark:bg-white/10 border border-black/10 dark:border-white/10">${t}</span>`)} <div class="h-px flex-1 bg-neutral-200 dark:bg-white/10 ml-3"></div> </div> </div> <div class="col-span-4 pl-6"> <div class="flex items-center justify-between mb-4"> <div></div> <div class="text-neutral-500 dark:text-neutral-400">${p.year}</div> </div> <div class="aspect-[16/10] rounded-xl border border-black/10 dark:border-white/10 bg-gradient-to-b from-neutral-200 to-neutral-100 dark:from-white/10 dark:to-white/5 group-hover:scale-[1.01] transition-transform"></div> </div> </div> </a>`)} </div> </section>`;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/components/Projects.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="max-w-6xl mx-auto px-4 py-20 text-[12px] text-neutral-500 dark:text-neutral-400"> <div class="grid grid-cols-3 items-center gap-4 mb-6"> <div>Bekzod Turgunov</div> <div class="h-px bg-neutral-200 dark:bg-white/10"></div> <div class="text-right">${(/* @__PURE__ */ new Date()).getFullYear()}</div> </div> <div class="flex items-center justify-between"> <div class="text-neutral-600 dark:text-neutral-400">© ${(/* @__PURE__ */ new Date()).getFullYear()} Bekzod — All rights reserved.</div> <div class="flex items-center gap-5"> <a class="hover:text-neutral-900 dark:hover:text-neutral-50" href="mailto:bekzodturgunoff@gmail.com" rel="noreferrer">Email</a> <a class="hover:text-neutral-900 dark:hover:text-neutral-50" href="tel:+8201079328573" rel="noreferrer">+82 10 7932 8573</a> <a class="hover:text-neutral-900 dark:hover:text-neutral-50" href="https://github.com/bekzodturgunoff" target="_blank" rel="noreferrer">GitHub</a> <a class="hover:text-neutral-900 dark:hover:text-neutral-50" href="https://t.me/bekzodturgunoff" target="_blank" rel="noreferrer">Telegram</a> <a class="hover:text-neutral-900 dark:hover:text-neutral-50" href="/resume/resume.pdf" download>Resume</a> </div> </div> </footer>`;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/components/Footer.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$Astro = createAstro();
const $$Index = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  return renderTemplate`${renderComponent($$result, "Base", $$Base, { "title": "Bekzod — Portfolio", "description": "Fast portfolio built with Astro + Tailwind" }, { "default": ($$result2) => renderTemplate(_a || (_a = __template([" ", " ", " ", " ", " ", " ", " ", " ", ' <script src="/scripts/reveal.js" defer></script> '])), renderComponent($$result2, "Nav", $$Nav, {}), renderComponent($$result2, "Hero", $$Hero, {}), renderComponent($$result2, "LogoMarquee", $$LogoMarquee, {}), renderComponent($$result2, "Section", $$Section, { "id": "about", "title": "About" }, { "default": ($$result3) => renderTemplate` ${maybeRenderHead()}<p class="max-w-prose text-neutral-700 dark:text-neutral-300">I'm a software engineer focused on building fast, accessible websites. I enjoy clean design and smooth UX. I specialize in modern web frameworks and delivering performant products.</p> <div class="mt-6 text-[13px] text-neutral-500 dark:text-neutral-400"> <span>Based in South Korea, Seoul · </span> <a class="underline underline-offset-4 decoration-neutral-400/60 dark:decoration-white/40 hover:text-neutral-800 dark:hover:text-neutral-100" href="mailto:bekzodturgunoff@gmail.com">bekzodturgunoff@gmail.com</a> </div> ` }), renderComponent($$result2, "Section", $$Section, { "id": "skills", "title": "Skills" }, { "default": ($$result3) => renderTemplate` <div class="flex flex-wrap gap-3" data-reveal> ${["JavaScript", "TypeScript", "React", "Node", "Astro", "Tailwind", "Sass", "Sanity", "Next.js", "REST/GROQ"].map((s) => renderTemplate`<span class="px-2.5 py-1 rounded-full text-[11px] tracking-wide uppercase bg-black/[0.04] dark:bg-white/10 border border-black/10 dark:border-white/10">${s}</span>`)} </div> ` }), renderComponent($$result2, "Section", $$Section, { "id": "work", "title": "Selected Work" }, { "default": ($$result3) => renderTemplate` ${renderComponent($$result3, "Projects", $$Projects, {})} ` }), renderComponent($$result2, "Section", $$Section, { "id": "contact", "title": "" }, { "default": ($$result3) => renderTemplate` <h2 class="leading-[0.95] text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tight mb-10" data-reveal> <span class="text-neutral-300 dark:text-white/90">Let's</span> <span class="ml-3 text-neutral-900 dark:text-white">Connect</span> </h2> <p class="max-w-2xl text-neutral-700 dark:text-neutral-300 mb-10" data-reveal>
Feel free to contact me if you have any questions. I'm available for new projects or just for chatting.
</p> <div class="grid sm:grid-cols-3 gap-3" data-reveal> <a href="#contact" class="group block py-6 text-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors"> <span class="uppercase text-[12px] tracking-wide">Book a Call <span aria-hidden>↗</span></span> </a> <a href="mailto:bekzodturgunoff@gmail.com" class="group block py-6 text-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors"> <span class="uppercase text-[12px] tracking-wide">Send an Email <span aria-hidden>↗</span></span> </a> <a href="https://t.me/bekzodturgunoff" target="_blank" rel="noreferrer" class="group block py-6 text-center rounded-md border border-black/10 dark:border-white/10 hover:bg-black/[0.03] dark:hover:bg-white/[0.06] transition-colors"> <span class="uppercase text-[12px] tracking-wide">Message on Telegram <span aria-hidden>↗</span></span> </a> </div>  ` }), renderComponent($$result2, "Footer", $$Footer, {})) })}`;
}, "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/pages/index.astro", void 0);
const $$file = "/Users/bekzod/Documents/code/portfolio/modern_portfolio/front_end/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
