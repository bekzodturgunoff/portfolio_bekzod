export { renderers } from '../renderers.mjs';

const get = async () => {
  const base = 'https://example.com';
  const urls = ['/', '/#about', '/#skills', '/#work', '/#contact'];
  const body = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.map(u => `<url><loc>${base}${u}</loc></url>`).join('\n')}\n</urlset>`;
  return new Response(body, { headers: { 'Content-Type': 'application/xml' } });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
