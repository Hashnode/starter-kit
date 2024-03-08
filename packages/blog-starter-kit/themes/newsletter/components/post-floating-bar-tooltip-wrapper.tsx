import * as Tooltip from '@radix-ui/react-tooltip';
import React from 'react';
import { twMerge } from 'tailwind-merge';

export default function PostFloatingBarTooltipWrapper({
  children,
  label,
  asChild = true,
  labelSide = 'top',
  contentClassName = '',
  delayDuration,
}: {
  children: React.ReactChild;
  label: string;
  asChild?: boolean;
  labelSide?: 'top' | 'right' | 'bottom' | 'left';
  contentClassName?: string;
  delayDuration?: number;
}) {
  return (
    <Tooltip.Root delayDuration={delayDuration || 1000}>
      <Tooltip.Trigger asChild={asChild} className="outline-none">
        {children}
      </Tooltip.Trigger>
      <Tooltip.Portal>
        <Tooltip.Content
          side={labelSide}
          sideOffset={15}
          className={twMerge('z-50 rounded-md bg-slate-800 p-2 px-3 text-xs text-white', contentClassName)}
        >
          {label}
        </Tooltip.Content>
      </Tooltip.Portal>
    </Tooltip.Root>
  );
}
