import { Root as SeparatorRoot } from '@radix-ui/react-separator';
import { twMerge } from 'tailwind-merge';

export const Separator = ({ className, ...props }) => (
  <SeparatorRoot
    orientation="vertical"
    className={twMerge(`my-auto h-full w-px bg-slate-200 dark:bg-slate-600`, className)}
    {...props}
  />
);
