import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default {
  adapter: vercel(),
  integrations: [tailwind({}),],
};
