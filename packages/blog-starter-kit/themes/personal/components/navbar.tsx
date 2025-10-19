import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { PublicationNavbarItem } from '../generated/graphql';

type NavItem = {
  href: string;
  name: string;
  external?: boolean;
};

function hasUrl(navbarItem: PublicationNavbarItem): navbarItem is PublicationNavbarItem & { url: string } {
  return !!navbarItem.url && navbarItem.url.length > 0;
}

export function Navbar() {
  const { publication } = useAppContext();

  // fallback static items
  const fallback: NavItem[] = [
    { href: '/', name: 'home' },
    { href: '/Projects', name: 'Project' },
    { href: 'https://google.com', name: 'blog', external: true },
  ];

  const navItems: NavItem[] = publication?.preferences?.navbarItems
    ? publication.preferences.navbarItems.filter(hasUrl).map((i) => ({ href: i.url, name: i.label || i.url, external: true }))
    : fallback;

  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-start relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
          <div className="flex flex-row space-x-0 pr-10">
            {navItems.map(({ href, name, external }) => {
              if (external) {
                return (
                  <a
                    key={href}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                  >
                    {name}
                  </a>
                );
              }

              return (
                <Link
                  key={href}
                  href={href}
                  className="transition-all hover:text-neutral-800 dark:hover:text-neutral-200 flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              );
            })}
          </div>
        </nav>
      </div>
    </aside>
  );
}

export default Navbar;
