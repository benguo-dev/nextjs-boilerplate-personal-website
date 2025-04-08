import { NavLinks } from '@/utils/AppConfig';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

type LinkProps = {
  name: 'Home' | 'About' | 'Projects' | 'Blog' | 'Contact';
};

export function NavBar() {
  const t = useTranslations('Header');
  const pathname = usePathname();
  return (
    <div className="navbar-nav">
      <ul className="main-menu lg:flex max-lg:hidden">
        {
          NavLinks.map(link => (
            <li className={`menu-item relative ${pathname.includes(link.href) ? 'current-menu-item' : ''}`} key={link.name}>
              <Link href={link.href}>
                { t(link.name as LinkProps['name']) }
              </Link>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
