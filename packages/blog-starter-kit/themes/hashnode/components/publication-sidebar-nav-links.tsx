import { CheckSVG } from './icons/svgs';
import { Publication } from '../generated/graphql';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

type IPublicationSidebarNavLinks = {
  currentActiveMenuItemId?: string | null;
  isHome?: boolean | null;
  isBadge?: boolean | null;
  headerColor?: string | null;
  isUserThemeDark: boolean;
} & Pick<NonNullable<Publication['preferences']>, 'enabledPages' | 'navbarItems'>;

type IPublicationSidebarNavLinkItem = {
  href: string;
  label?: string | null;
  isUserThemeDark: boolean;
  headerColor?: string | null;
  isActive?: boolean;
};

const PublicationSidebarNavLinkItem = ({
  href,
  isUserThemeDark,
  headerColor,
  label,
  isActive,
}: IPublicationSidebarNavLinkItem) => {
  return (
    <Link
      href={href}
      className={twJoin(
        isActive ? 'blog-nav-active font-semibold' : 'blog-nav',
        'focus-ring-base mb-1 flex w-full flex-row items-center justify-between rounded p-3 font-medium text-slate-700 transition-colors duration-100 hover:bg-slate-100 active:opacity-100 dark:text-slate-200 dark:hover:bg-slate-800',
        isUserThemeDark
          ? 'ring-slate-950/80 dark:ring-white/80 dark:ring-offset-slate-800'
          : headerColor
          ? 'ring-slate-950/80 dark:ring-white/80 dark:ring-offset-slate-800'
          : 'focus-ring-colors-base',
      )}
    >
      <span>{label}</span>
      {isActive ? <CheckSVG className="h-5 w-5 fill-current text-slate-600 dark:text-white" /> : null}
    </Link>
  );
};

function PublicationSidebarNavLinks(props: IPublicationSidebarNavLinks) {
  const { currentActiveMenuItemId, isHome, isBadge, enabledPages, navbarItems, headerColor, isUserThemeDark } = props;
  const isHomePage = !currentActiveMenuItemId && isHome;
  const isBadgePage = !currentActiveMenuItemId && isBadge;
  const isNewsletterPage = currentActiveMenuItemId && currentActiveMenuItemId === 'newsletter';
  const isMembersPage = currentActiveMenuItemId && currentActiveMenuItemId === 'members';

  return (
    <nav className="pb-8">
      <PublicationSidebarNavLinkItem
        href="/"
        isUserThemeDark={isUserThemeDark}
        headerColor={headerColor}
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
                isUserThemeDark={isUserThemeDark}
                label={navItem.label}
                isActive={!!customTabIsActive}
                headerColor={headerColor}
              />
            );
          })
        : null}
      {enabledPages?.badges ? (
        <PublicationSidebarNavLinkItem
          href="/badges"
          isUserThemeDark={isUserThemeDark}
          label="Badges"
          isActive={!!isBadgePage}
          headerColor={headerColor}
        />
      ) : null}
      {enabledPages?.newsletter ? (
        <PublicationSidebarNavLinkItem
          href="/newsletter"
          isUserThemeDark={isUserThemeDark}
          label="Newsletter"
          isActive={!!isNewsletterPage}
          headerColor={headerColor}
        />
      ) : null}
    </nav>
  );
}

export default PublicationSidebarNavLinks;
