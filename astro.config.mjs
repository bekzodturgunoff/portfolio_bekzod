import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default {
  site: 'https://bekzod.dev',
  adapter: vercel(),
  integrations: [tailwind({}),],
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'ru', 'ko'],
    routing: {
      prefixDefaultLocale: false
    }
  }
};
