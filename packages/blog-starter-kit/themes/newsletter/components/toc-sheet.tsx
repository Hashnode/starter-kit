import { CloseSVG, ListSVG } from './icons/svgs';
import { create } from 'zustand';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import * as Tooltip from '@radix-ui/react-tooltip';

import Button from './hn-button';
import { useStickyNavElement } from './use-sticky-nav-scroll';
import TocRenderDesign from './toc-render-design';
import CustomScrollArea from './scroll-area';
import PostFloatingBarTooltipWrapper from './post-floating-bar-tooltip-wrapper';

export const useTocModalStore = create<{
  isVisible: boolean;
  show: () => void;
  hide: () => void;
}>((set) => ({
  isVisible: false,
  show: () => {
    const { setPositioning, translateElement } = useStickyNavElement.getState();
    setPositioning('relative');
    translateElement('zero');
    set({ isVisible: true });
  },
  hide: () => {
    const { setPositioning, translateElement } = useStickyNavElement.getState();
    setPositioning('sticky');
    translateElement('full');
    set({ isVisible: false });
  },
}));

function TocSheet({ list }: { list: any[] }) {
  const { isVisible: isTocModalVisible, show: openTocModal, hide: closeModal } = useTocModalStore();

  const openTocModalWithEvent = async () => {
    openTocModal();
  };

  return (
    <>
      <Tooltip.Provider>
        <PostFloatingBarTooltipWrapper label="Table of contents">
          <Tooltip.Trigger asChild>
            <Button
              onClick={openTocModalWithEvent}
              variant="transparent"
              className="rounded-full p-2 hover:bg-slate-100 dark:hover:bg-slate-800"
              aria-label="Open table of contents"
            >
              <ListSVG className="h-4 w-4 fill-current text-slate-800 dark:text-slate-50 sm:h-5 sm:w-5 2xl:h-6 2xl:w-6" />
            </Button>
          </Tooltip.Trigger>
        </PostFloatingBarTooltipWrapper>
      </Tooltip.Provider>

      {isTocModalVisible && (
        <DialogPrimitive.Root open>
          <DialogPrimitive.Portal>
            <DialogPrimitive.Overlay
              onClick={closeModal}
              className="fixed inset-0 z-50 bg-slate-900 opacity-50 transition-opacity duration-300 ease-out dark:bg-slate-600"
            />
            <DialogPrimitive.Content
              className={`
                fixed bottom-0 left-0 right-0 z-50 flex h-fc max-w-[1200px] flex-col items-center overflow-hidden rounded-2xl rounded-bl-none rounded-br-none border border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-900 md:top-50 md:left-50 md:w-[40rem] md:-translate-x-1/2 md:-translate-y-1/2 md:rounded-bl-2xl md:rounded-br-2xl lg:w-[40rem]`}
              onEscapeKeyDown={closeModal}
            >
              <>
                <div className="z-50 flex w-full items-center justify-between p-4 pb-0">
                  <DialogPrimitive.DialogTitle className="py-2 text-sm font-medium uppercase text-slate-500 dark:text-slate-400">
                    Table of contents
                  </DialogPrimitive.DialogTitle>

                  <DialogPrimitive.Close className="" asChild>
                    <div className="flex justify-between gap-2">
                      <Button
                        type="button"
                        className="p-1 text-sm text-slate-600 focus:outline-none focus-visible:ring focus-visible:ring-blue-600 focus-visible:ring-offset-2 focus-visible:ring-offset-white dark:text-slate-300 dark:focus-visible:ring-offset-slate-800"
                        onClick={closeModal}
                        aria-label="Close table of contents modal"
                        variant="transparent"
                      >
                        <CloseSVG className="h-5 w-5 fill-current" />
                      </Button>
                    </div>
                  </DialogPrimitive.Close>
                </div>

                <CustomScrollArea>
                  <div className="max-h-[560px]">
                    <TocRenderDesign list={list} hideShowMoreOption modal />
                  </div>
                </CustomScrollArea>
              </>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        </DialogPrimitive.Root>
      )}
    </>
  );
}

export default TocSheet;
