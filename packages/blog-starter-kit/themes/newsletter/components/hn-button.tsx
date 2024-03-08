import React from 'react';
import { twJoin, twMerge } from 'tailwind-merge';

type ButtonProps = {
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'transparent' | 'primary-outline' | 'transparent-outline';
  active?: boolean;
  disabled?: boolean;
  size?: 'small' | 'big';
  children: React.ReactChild | React.ReactChild[];
} & React.ButtonHTMLAttributes<any>;

type AnchorProps = {
  as?: null | 'a'; // improve this
  href?: string; // improve this
} & React.AnchorHTMLAttributes<any>;

type ButtonAtomProps = ButtonProps & AnchorProps;

const buttonSizes = {
  small: 'px-2 text-sm',
  big: 'px-4 py-2 text-lg',
};

type ButtonState = 'default' | 'active' | 'disabled';

const buttonStyles: Record<Required<ButtonProps>['variant'], Record<ButtonState, string>> = {
  transparent: {
    default: twJoin(
      'rounded-full border border-transparent px-3 py-1 text-base font-medium leading-relaxed text-slate-700 dark:text-slate-200',
      'hover:bg-slate-200 disabled:opacity-50 hover:dark:bg-slate-700',
      'flex flex-row items-center focus:outline-none', // Extra added, instead of sending from parent component
    ),
    active: 'text-blue-600 dark:text-blue-600',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  'transparent-outline': {
    default: twJoin(
      'rounded-full border border-slate-200 px-3 py-1 text-base font-medium leading-relaxed text-slate-700 dark:border-slate-800 dark:text-slate-200',
      'hover:bg-slate-200 disabled:opacity-50 hover:dark:bg-slate-700',
      'flex flex-row items-center focus:outline-none', // Extra added, instead of sending from parent component
    ),
    active: 'text-white bg-blue-600 hover:bg-blue-600 border-blue-600',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  primary: {
    default: twJoin(
      'rounded-full border border-blue-600 bg-blue-600 px-3 py-1 text-center text-base font-medium leading-relaxed text-white transition-colors duration-150',
      'hover:bg-opacity-90 hover:shadow-lg focus:outline-none disabled:opacity-50', // Extra added, instead of sending from parent component
    ),
    active: 'text-white bg-blue-600 hover:bg-blue-500 hover:dark:bg-blue-500',
    disabled: 'opacity-50 cursor-not-allowed',
  },
  'primary-outline': {
    default: twJoin(
      'rounded-full border border-blue-600 px-3 py-1 text-center text-base font-medium leading-relaxed transition-colors duration-150 dark:border-blue-500',
      `flex flex-row items-center justify-center text-blue-600 focus:outline-none
    dark:text-blue-500`, // Extra added, instead of sending from parent component
      'hover:bg-blue-50 disabled:opacity-50 hover:dark:bg-slate-800',
    ),
    active: 'text-white bg-blue-600 hover:bg-blue-500 hover:dark:bg-blue-500',
    disabled: 'opacity-50 cursor-not-allowed',
  },
};

/**
 * Button component
 * @param {string} props.value Button value
 * @param {string=} props.variant Button variant
 * @returns {React.Reactnode} Button
 */
const Index = React.forwardRef((props: ButtonAtomProps, ref: React.Ref<any>) => {
  const { size, active, as, href, disabled, children, className, ...restOfTheProps } = props;

  // use 'primary' as a fallback if a not supported variant is passed
  let { variant = 'primary' } = props;
  if (!(variant in buttonStyles)) {
    variant = 'primary';
  }

  const styles = buttonStyles[variant];

  if (as === 'a') {
    delete restOfTheProps.type;
    return (
      <a
        ref={ref}
        href={href}
        className={twMerge(
          styles.default,
          active && styles.active,
          disabled && styles.disabled,
          size && buttonSizes[size],
          className,
        )}
        // TODO: need to make this dynamic
        {...restOfTheProps}
      >
        {children}
      </a>
    );
  }

  return (
    <button
      ref={ref}
      disabled={disabled}
      className={twMerge(
        styles.default,
        active && styles.active,
        disabled && styles.disabled,
        size && buttonSizes[size],
        className,
      )}
      // TODO: need to make this dynamic
      type="button"
      {...restOfTheProps}
    >
      {/* {value} */}
      {children}
    </button>
  );
});

Index.displayName = 'Button';

Index.defaultProps = {
  variant: 'primary',
  active: false,
  disabled: false,
  size: undefined,
  type: 'button',
  as: null,
  href: '#',
};

export default Index;
