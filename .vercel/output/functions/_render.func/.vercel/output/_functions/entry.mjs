import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_Dfnwpul7.mjs';
import { manifest } from './manifest_Cfgsjv76.mjs';

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/rss.xml.astro.mjs');
const _page2 = () => import('./pages/sitemap.xml.astro.mjs');
const _page3 = () => import('./pages/index.astro.mjs');

const pageMap = new Map([
    ["node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/rss.xml.js", _page1],
    ["src/pages/sitemap.xml.js", _page2],
    ["src/pages/index.astro", _page3]
]);
const serverIslandMap = new Map();
const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "c1bb2636-0c60-4ae5-bdb1-0991d900e71a",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
