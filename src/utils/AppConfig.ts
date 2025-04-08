import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

// FIXME: Update this configuration file based on your project information
export const AppConfig = {
  name: 'Nextjs Starter',
  locales: ['en', 'fr', 'zh'],
  defaultLocale: 'en',
  localePrefix,
};

export const NavLinks = [{
  name: 'Home',
  href: '/home',
}, {
  name: 'About',
  href: '/about',
}, {
  name: 'Projects',
  href: '/projects',
}, {
  name: 'Blog',
  href: '/blog',
}, {
  name: 'Contact',
  href: '/contact',
}];
