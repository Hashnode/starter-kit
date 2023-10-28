import { useAppContext } from './contexts/appContext';
import * as RadixTooltip from '@radix-ui/react-tooltip';
import { twJoin } from 'tailwind-merge';

interface IHeaderTooltip {
  tooltipClassName: string;
  headerColor?: string | null;
  tooltipText: string;
  children: React.ReactNode;
}

const HeaderTooltip = (props: IHeaderTooltip) => {
  const { headerColor, tooltipClassName, tooltipText, children } = props;
  const { isUserThemeDark } = useAppContext();

  return (
    <RadixTooltip.Provider delayDuration={800}>
      <RadixTooltip.Root>
        <RadixTooltip.Trigger asChild>{children}</RadixTooltip.Trigger>
        <RadixTooltip.Portal>
          <RadixTooltip.Content
            className={twJoin(
              tooltipClassName,
              'z-50 rounded-md px-3 py-2 text-xs',
              isUserThemeDark
                ? 'bg-slate-50 text-slate-900'
                : headerColor
                ? 'bg-slate-800 text-white'
                : 'bg-slate-800 text-white dark:bg-white dark:text-slate-900',
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
