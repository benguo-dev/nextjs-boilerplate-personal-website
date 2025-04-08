'use client';

import { NavBar } from '@/components/NavBar';
import { NavBarForMobile } from '@/components/NavBarForMobile';
import { usePathname, useRouter } from '@/libs/i18nNavigation';
import moon from '@/public/assets/images/moon.svg';
import sun from '@/public/assets/images/sun.svg';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const currentLocale = useLocale();
  const Language = {
    en: 'en',
    zh: 'zh',
  };

  const [isDarkMode, setIsDarkMode] = useState(false);

  function languageSwitch() {
    const nextLocale = currentLocale === Language.zh ? Language.en : Language.zh;
    router.replace(
      { pathname },
      { locale: nextLocale },
    );
    localStorage.setItem('locale', nextLocale);
  }

  const toggleDarkMode = () => {
    const html = document.documentElement;
    if (isDarkMode) {
      html.classList.remove('dark');
    } else {
      html.classList.add('dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  const [isShowMenu, setShowMenu] = useState(false);
  const toggleMenu = () => {
    setShowMenu(!isShowMenu);
  };

  const closeMenu = () => {
    setShowMenu(false);
  };

  useEffect(() => {
    const locale = localStorage.getItem('locale') || navigator.language.split('-')[0];
    if (locale !== currentLocale) {
      router.replace(
        { pathname },
        { locale },
      );
    }
  }, []);

  // const t = useTranslations('Header');

  return (
    <>
      <header className="my-4 lg:my-6 fixed top-0 [body.admin-bar_&]:top-4 w-full left-0 z-50 transition-all duration-300 [&.is-sticky]:mt-0 is-sticky">
        <div className="container mx-auto">
          <div className="nav max-md:py-3 py-5 px-4 lg:px-6 xl:px-8 flex items-center justify-between bg-white dark:bg-[#1B1C1C] rounded-xl shadow-lg shadow-black/5">
            <Link href="/">
              <Image
                className="max-md:w-32 dark:hidden"
                src="/assets/images/logo.svg"
                alt="Ben - Personal website template"
                width={210}
                height={40}
              />
              <Image
                className="max-md:w-32 hidden dark:block"
                src="/assets/images/logo-dark.svg"
                alt="Ben - Personal website template"
                width={210}
                height={40}
              />
            </Link>
            <NavBar />
            <div className="button-groups flex items-center gap-4 *:border *:border-flasWhite *:dark:border-flasBlack *:bg-gradient-to-b *:from-milkWhite *:to-seashell dark:*:from-metalBlack dark:*:to-oilBlack">
              <button
                type="button"
                onClick={toggleDarkMode}
                className="btn_theme_switch w-13 h-13 max-md:w-12 max-md:h-12 relative rounded-full group *:w-5 *:h-5 *:max-md:w-6 *:max-md:h-6 *:absolute *:top-1/2 *:left-1/2 *:-translate-x-1/2 *:-translate-y-1/2"
                aria-label="Dark - Light Switch"
              >
                <Image
                  className="max-md:w-32 dark:hidden"
                  src={moon}
                  alt="switch to light"
                  width={22}
                  height={22}
                />
                <Image
                  className="max-md:w-32 hidden dark:block"
                  src={sun}
                  alt="switch to dark"
                  width={22}
                  height={22}
                />
              </button>
              <button
                type="button"
                className="btn_theme_switch w-13 h-13 max-md:w-12 max-md:h-12 relative rounded-full group *:w-5 *:h-5 *:max-md:w-6 *:max-md:h-6 *:absolute *:top-1/2 *:left-1/2 *:-translate-x-1/2 *:-translate-y-1/2"
                onClick={languageSwitch}
                aria-label="Dark - Light Switch"
              >
                <Image
                  className="max-md:w-32 dark:hidden"
                  src="/assets/images/lan-switch-dark.png"
                  alt="language switch"
                  width={22}
                  height={22}
                />
                <Image
                  className="max-md:w-32 hidden dark:block"
                  src="/assets/images/lan-switch-light.png"
                  alt="language switch"
                  width={22}
                  height={22}
                />
              </button>
              <button
                type="button"
                onClick={toggleMenu}
                className="text-darkGray dark:text-pastelGrey menu_toggle flex items-center text-xl lg:hidden"
              >
                <i className="iconfont icon-bars"></i>
              </button>
            </div>
          </div>
        </div>
      </header>
      <NavBarForMobile isShowMenu={isShowMenu} closeMenu={closeMenu} />
    </>
  );
};
