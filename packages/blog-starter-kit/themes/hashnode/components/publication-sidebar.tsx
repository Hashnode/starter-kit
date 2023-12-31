import { useEffect, useState, useRef, MutableRefObject } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';

import { useAppContext } from './contexts/appContext';
import PublicationSidebarNavLinks from './publication-sidebar-nav-links';
import PublicationSocialLinks from './publication-social-links';
import PublicationLogo from './publication-logo';
import { CloseSVG } from './icons/svgs';
import CustomScrollArea from './scroll-area';

import { Preferences, Publication, PublicationNavbarItem, User } from '../generated/graphql';
import { twJoin } from 'tailwind-merge';
import { returnFocusToElement, blurActiveFocus, doesPublicationHaveSocialLinks } from '../utils/commonUtils';

type Props = {
  publication: Pick<Publication, 'id' | 'title' | 'isTeam' | 'links'> & {
    author: Pick<User, 'username' | 'name' | 'profilePicture'>;
  } & {
    preferences: Pick<Preferences, 'navbarItems' | 'enabledPages' | 'logo' | 'darkMode'> & {
      navbarItems: Array<Omit<PublicationNavbarItem, 'series' | 'page'>>;
    };
  };
  toggleSidebar: () => void;
  isHome?: boolean | null;
  isBadge?: boolean | null;
  isPostPage?: boolean | null;
  currentActiveMenuItemId?: string | null;
  triggerRef: MutableRefObject<HTMLButtonElement | null>;
};

function PublicationSidebar(props: Props) {
  const { publication, toggleSidebar, isHome, isBadge, currentActiveMenuItemId, isPostPage, triggerRef } = props;
  const { enabledPages, navbarItems } = publication.preferences;
  const [isMounted, setIsMounted] = useState(false);
  const sidebarHeaderRef = useRef<HTMLDivElement>(null);

  const userHasSocialLinks = doesPublicationHaveSocialLinks(publication.links);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <DialogPrimitive.Root open>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={twJoin(
            'fixed inset-0 z-50 bg-slate-900 opacity-0 transition-opacity duration-300 ease-out dark:bg-slate-600 ',
            isMounted && 'opacity-50',
          )}
        />
        <DialogPrimitive.Content
          onEscapeKeyDown={() => {
            blurActiveFocus();
            toggleSidebar();
            returnFocusToElement(triggerRef);
          }}
          onCloseAutoFocus={() => returnFocusToElement(triggerRef)}
          onPointerDownOutside={() => {
            blurActiveFocus();
            toggleSidebar();
          }}
          className={twJoin(
            'fixed bottom-0 left-0 top-0 z-50 flex w-80 transform flex-col border-slate-200 bg-white text-black shadow-2xl duration-300 ease-out dark:border-slate-800 dark:bg-slate-900 dark:text-white',
            // When the sheet is mounted, we want to slide it in from the left.
            !isMounted ? '-translate-x-96' : 'translate-x-0',
          )}
        >
          <div
            ref={sidebarHeaderRef}
            className="blog-sidebar-header w-full shrink-0 bg-white py-6 dark:bg-slate-900"
          >
            <div
              className={twJoin(
                'flex items-center justify-between pl-8 pr-4', 'dark:text-white',
              )}
            >
              <PublicationLogo publication={publication} size="xs" withProfileImage isPostPage={isPostPage} />

              <DialogPrimitive.Close asChild>
                <button
                  type="button"
                  aria-label="Close sidebar"
                  onClick={() => {
                    toggleSidebar();
                    returnFocusToElement(triggerRef);
                  }}
                  className={twJoin(
                    'blog-sidebar-close-button',
                    'ml-2 rounded-full border border-transparent p-2 font-semibold transition-colors duration-150 focus:outline-none',
                  'hover:bg-black/10 focus:bg-black/10 dark:hover:bg-white/20 dark:focus:bg-white/20',
                  )}
                >
                  <CloseSVG className="h-5 w-5 fill-current" />
                </button>
              </DialogPrimitive.Close>
            </div>
          </div>

          <CustomScrollArea>
            <div className="py-10 pl-8 pr-4">
              <h2 className="mb-4 text-sm font-semibold uppercase text-slate-500 dark:text-slate-400">Blog menu</h2>
              <PublicationSidebarNavLinks
                isHome={isHome}
                isBadge={isBadge}
                currentActiveMenuItemId={currentActiveMenuItemId}
                enabledPages={enabledPages}
                navbarItems={navbarItems}
              />

              {userHasSocialLinks ? (
                <>
                  <h2 className="mb-4 text-sm font-semibold uppercase leading-6 text-slate-500 dark:text-slate-400">
                    Blog socials
                  </h2>
                  <PublicationSocialLinks links={publication.links} isSidebar />
                </>
              ) : null}
            </div>
          </CustomScrollArea>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
}

export default PublicationSidebar;
