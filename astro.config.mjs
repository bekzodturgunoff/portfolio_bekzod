import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/serverless';

export default {
  output: 'server',
  adapter: vercel(),
  integrations: [tailwind({}),],
};
