/* eslint-disable no-nested-ternary */
import { RefObject } from 'react';
import { twJoin } from 'tailwind-merge';

import HeaderTooltip from './header-tooltip';

const variants = {
  theme: {
    label: 'Toggle blog theme',
    buttonClassName: 'blog-theme-switcher',
    tooltipText: 'Toggle theme',
    tooltipClassName: 'blog-theme-tooltip',
  },
  search: {
    label: 'Open blog search',
    buttonClassName: 'blog-search-button',
    tooltipText: 'Search blog',
    tooltipClassName: 'blog-search-tooltip',
  },
  leftSidebar: {
    label: 'Open blog links',
    buttonClassName: 'blog-bars-button',
    tooltipText: 'Blog menu',
    tooltipClassName: 'blog-sidebar-tooltip',
  },
};

interface ICommonHeaderIconBtn {
  handleClick: () => void;
  children: React.ReactNode;
  variant: keyof typeof variants;
  btnRef?: RefObject<HTMLButtonElement>;
}

export const getCommonBtnStyles = () =>
  twJoin(
    'focus-ring-base flex flex-row items-center rounded-full font-medium transition duration-100 ease-in-out',
    'focus-ring-colors-base hover:bg-black/10 dark:hover:bg-white/20',
  );

const CommonHeaderIconBtn = (props: ICommonHeaderIconBtn) => {
  const { handleClick, variant, btnRef, children } = props;

  const { label, buttonClassName, tooltipClassName, tooltipText } = variants[variant];
  const btnStyles = getCommonBtnStyles();

  return (
    <HeaderTooltip tooltipClassName={tooltipClassName} tooltipText={tooltipText}>
      <button
        type="button"
        aria-label={label}
        className={twJoin(buttonClassName, btnStyles, 'mr-2 p-2')}
        onClick={handleClick}
        ref={btnRef}
      >
        {children}
      </button>
    </HeaderTooltip>
  );
};

export default CommonHeaderIconBtn;
