import * as RadixTooltip from '@radix-ui/react-tooltip';
import { twJoin } from 'tailwind-merge';

import { useAppContext } from './contexts/appContext';

interface IHeaderTooltip {
  tooltipClassName: string;
  tooltipText: string;
  children: React.ReactNode;
}

const HeaderTooltip = (props: IHeaderTooltip) => {
  const { tooltipClassName, tooltipText, children } = props;

  return (
    <RadixTooltip.Provider delayDuration={800}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={twJoin(
              tooltipClassName,
              'z-50 rounded-md px-3 py-2 text-xs',
              'bg-slate-800 text-white dark:bg-white dark:text-slate-900',
            )}
            side="bottom"
            align="center"
            avoidCollisions
            sideOffset={8}
          >
            {tooltipText}
          </RadixTooltip.Content>
        </RadixTooltip.Portal>
      </RadixTooltip.Root>
    </RadixTooltip.Provider>
  );
};

export default HeaderTooltip;
