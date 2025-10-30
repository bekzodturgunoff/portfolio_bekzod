import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default {
  site: 'https://bekzodturgunov.com',
  adapter: vercel(),
  integrations: [tailwind({}),],
};
