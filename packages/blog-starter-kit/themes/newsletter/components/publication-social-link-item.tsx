import React from 'react';
import { twJoin } from 'tailwind-merge';

type Props = {
  href: string;
  labelText: string;
  children: React.ReactElement | null;
  isSidebar?: boolean;
};

function PublicationSocialLinkItem(props: Props) {
  const { href, labelText, children, isSidebar } = props;

  return (
    <a
      href={href}
      aria-label={labelText}
      target="_blank"
      rel="me noopener"
      className={twJoin(
        'focus-ring-base flex flex-row items-center justify-center rounded-full p-2 transition-colors duration-150',
        isSidebar
          ? 'ring-blue-600 ring-offset-white hover:bg-black/10 dark:ring-offset-slate-800 dark:hover:bg-white/20'
          : '',
        !isSidebar
          ? 'focus-ring-colors-base hover:bg-black/10 dark:hover:bg-white/20'
          : '',
      )}
    >
      {children}
    </a>
  );
}

export default PublicationSocialLinkItem;
