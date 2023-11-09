import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

import { CheckSVG } from './icons/svgs';
import { Publication } from '../generated/graphql';


type IPublicationSidebarNavLinks = {
  currentActiveMenuItemId?: string | null;
  isHome?: boolean | null;
  isBadge?: boolean | null;
} & Pick<NonNullable<Publication['preferences']>, 'enabledPages' | 'navbarItems'>;

type IPublicationSidebarNavLinkItem = {
  href: string;
  label?: string | null;
  isActive?: boolean;
};

const PublicationSidebarNavLinkItem = ({
  href,
  label,
  isActive,
}: IPublicationSidebarNavLinkItem) => {
  return (
    <Link
      href={href}
      className={twJoin(
        isActive ? 'blog-nav-active font-semibold' : 'blog-nav',
        'focus-ring-base mb-1 flex w-full flex-row items-center justify-between rounded p-3 font-medium text-slate-700 transition-colors duration-100 hover:bg-slate-100 active:opacity-100 dark:text-slate-200 dark:hover:bg-slate-800',
       'focus-ring-colors-base',
      )}
    >
      <span>{label}</span>
      {isActive ? <CheckSVG className="h-5 w-5 fill-current text-slate-600 dark:text-white" /> : null}
    </Link>
  );
};

function PublicationSidebarNavLinks(props: IPublicationSidebarNavLinks) {
  const { currentActiveMenuItemId, isHome, isBadge, enabledPages, navbarItems } = props;
  const isHomePage = !currentActiveMenuItemId && isHome;
  const isBadgePage = !currentActiveMenuItemId && isBadge;
  const isNewsletterPage = currentActiveMenuItemId && currentActiveMenuItemId === 'newsletter';

  return (
    <nav className="pb-8">
      <PublicationSidebarNavLinkItem
        href="/"
        label="Home"
        isActive={!!isHomePage}
      />

      {navbarItems && navbarItems.length > 0
        ? navbarItems.map((navItem) => {
            if (!navItem.url) return null;

            const customTabIsActive = currentActiveMenuItemId && navItem.id === currentActiveMenuItemId;
            return (
              <PublicationSidebarNavLinkItem
                key={navItem.id}
                href={navItem.url}
                label={navItem.label}
                isActive={!!customTabIsActive}
              />
            );
          })
        : null}
      {enabledPages?.badges ? (
        <PublicationSidebarNavLinkItem
          href="/badges"
          label="Badges"
          isActive={!!isBadgePage}
        />
      ) : null}
      {enabledPages?.newsletter ? (
        <PublicationSidebarNavLinkItem
          href="/newsletter"
          label="Newsletter"
          isActive={!!isNewsletterPage}
        />
      ) : null}
    </nav>
  );
}

export default PublicationSidebarNavLinks;
