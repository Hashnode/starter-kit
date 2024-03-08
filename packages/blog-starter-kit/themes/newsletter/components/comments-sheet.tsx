import { PropsWithChildren, useEffect, useState } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { twJoin } from 'tailwind-merge';

import Button from './hn-button';
import { CloseSVG } from './icons/svgs';

interface CommentsSheetProps extends PropsWithChildren<any> {
  hideSheet: () => void;
}

const CommentsSheet = ({ children, hideSheet }: CommentsSheetProps) => {
  const [isMounted, setIsMounted] = useState(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  return (
    <DialogPrimitive.Root open>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          onClick={hideSheet}
          className={twJoin(
            'fixed inset-0 z-50 bg-slate-900 opacity-0 transition-opacity ease-out dark:bg-slate-600',
            isMounted && 'opacity-50 duration-300',
          )}
        />
        <DialogPrimitive.Content
          className={twJoin(
            'fixed top-0 bottom-0 right-0 z-50 w-full transform-gpu overflow-auto border-slate-200 bg-white shadow-2xl transition-transform duration-300 ease-out dark:border-l dark:border-slate-700 dark:bg-slate-900 md:w-108',
            // When the sheet is mounted, we want to slide it in from the right.
            !isMounted ? 'translate-x-full md:translate-x-108' : 'translate-x-0',
          )}
        >
          {children}
          <DialogPrimitive.Close onClick={hideSheet} className="absolute top-3 right-3 z-50" asChild>
            <Button variant="transparent" className="p-2">
              <CloseSVG className="h-5 w-5 fill-current" />
            </Button>
          </DialogPrimitive.Close>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default CommentsSheet;
