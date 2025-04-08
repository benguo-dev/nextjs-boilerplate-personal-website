import { NavLinks } from '@/utils/AppConfig';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LinkProps = {
  name: 'Home' | 'About' | 'Projects' | 'Blog' | 'Contact';
};

export function NavBarForMobile({ isShowMenu, closeMenu }: { isShowMenu: boolean; closeMenu: () => void }) {
  const t = useTranslations('Header');
  const pathname = usePathname();
  return (
    <>
      <div className={` mobile_menu fixed transition-all duration-300 top-0 -left-96 h-full bg-white dark:bg-powerBlack z-999 p-4 lg:p-6 w-80 shadow-lg [&.is-menu-open]:left-0 flex flex-col lg:hidden ${isShowMenu ? 'is-menu-open' : ''} `}>
        <div className="relative">
          <a href="index.html">
            <img src="/assets/images/logo.svg" alt="bentoMan - Personal portfolio resume template" className="max-md:w-32 dark:hidden" />
            <img src="/assets/images/logo-dark.svg" alt="bentoMan - Personal portfolio resume template" className="max-md:w-32 hidden dark:block" />
          </a>
          <button
            type="button"
            onClick={closeMenu}
            className="close_menu absolute right-0 top-0 w-8 h-8 bg-powerBlack dark:bg-pastelGrey text-white dark:text-black flex items-center justify-center text-sm rounded-sm"
          >
            <i className="iconfont icon-baseline-close-px"></i>
          </button>
        </div>
        <div className="navbar-nav my-12 h-calc(100vh_-_16rem) overflow-y-auto" id="bentoman_mobile_menu">
          <ul className="main-menu space-y-2">
            {
              NavLinks.map(link => (
                <li className={`menu-item relative ${pathname.includes(link.href) ? 'current-menu-item' : ''}`} key={link.name}>
                  <Link href={link.href} onClick={closeMenu}>
                    { t(link.name as LinkProps['name']) }
                  </Link>
                </li>
              ))
            }
          </ul>
        </div>

        <div className="mt-auto">
          <div className="cta_button text-center space-y-1">
            <p className="font-medium">
              Have an idea?
            </p>
            <Link href="/contact" className="bg-darkGray dark:bg-metalBlack inline-flex text-white font-semibold py-6 px-16 leading-1.75 rounded-md">
              Let's Talk
            </Link>
          </div>
        </div>
      </div>
      <div
        role="button"
        tabIndex={0}
        onClick={closeMenu}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            closeMenu();
          }
        }}
        className={`mobile_overlay fixed inset-0 z-50 bg-black/60 transition-all opacity-0 invisible [&.is-menu-open]:opacity-100 [&.is-menu-open]:visible lg:hidden ${isShowMenu ? 'is-menu-open' : ''} `}
      >
      </div>
    </>
  );
}
