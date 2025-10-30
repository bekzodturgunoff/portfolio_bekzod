import tailwind from '@astrojs/tailwind';
import vercel from '@astrojs/vercel/static';

export default {
  site: 'https://bekzodturgunov.com',
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
