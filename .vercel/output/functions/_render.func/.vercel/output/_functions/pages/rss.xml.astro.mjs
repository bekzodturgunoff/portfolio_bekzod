export { renderers } from '../renderers.mjs';

const get = async () => {
  return new Response('<rss version="2.0"></rss>', {
    headers: { 'Content-Type': 'application/xml' }
  });
};

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  get
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
