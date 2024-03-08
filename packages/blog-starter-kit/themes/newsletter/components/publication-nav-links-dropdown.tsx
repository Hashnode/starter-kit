import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';

import { CheckSVG } from './icons/svgs/';
import CustomScrollArea from './scroll-area';
import { twJoin } from 'tailwind-merge';

type Props = {
  extraNavbarItems: any;
};

function PublicationNavLinksDropdown(props: Props) {
  const { extraNavbarItems } = props;

  return (
    <DropdownMenu.Portal>
      <DropdownMenu.Content
        align="end"
        className="z-50 mt-2 w-64 overflow-hidden whitespace-normal rounded-xl border bg-white py-2 capitalize text-slate-700 shadow-lg dark:border-slate-700 dark:bg-slate-800 dark:text-white"
      >
        <CustomScrollArea>
          <div className="max-h-72">
            {extraNavbarItems.length
              ? extraNavbarItems.map((navItem: any, index: number) => (
                  <React.Fragment key={`${navItem.label}-${index}`}>
                    <DropdownMenu.DropdownMenuItem asChild>
                      <a
                        href={navItem.url}
                        className={twJoin(
                          navItem.isActive ? 'blog-nav-more-item-active' : 'blog-nav-more-item',
                          'flex flex-row items-center justify-between px-4 py-3 font-medium hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:hover:bg-slate-700 dark:focus:bg-slate-700',
                          navItem.isActive && 'font-bold',
                        )}
                      >
                        <span>{navItem.label}</span>
                        {navItem.isActive ? (
                          <CheckSVG className="h-5 w-5 fill-current text-blue-600 dark:text-white" />
                        ) : null}
                      </a>
                    </DropdownMenu.DropdownMenuItem>
                    {index !== extraNavbarItems.length - 1 ? (
                      <hr className="h-px w-full border-none bg-slate-200 dark:bg-slate-700" />
                    ) : null}
                  </React.Fragment>
                ))
              : null}
          </div>
        </CustomScrollArea>
      </DropdownMenu.Content>
    </DropdownMenu.Portal>
  );
}

export default PublicationNavLinksDropdown;
