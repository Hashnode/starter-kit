import { PropsWithChildren } from 'react';
import * as ScrollArea from '@radix-ui/react-scroll-area';

const scrollbarStyles = `
.ScrollAreaRoot {
 width: 100%;
 --scrollbar-size: 2px;
 overflow: auto;
 }

 .ScrollAreaViewport {
  width: 100%;
  height: 100%;
  border-radius: inherit;
  }

 .ScrollAreaScrollbar {
  display: flex;
  /* ensures no selection */
  user-select: none;
  /* disable browser handling of all panning and zooming gestures on touch devices */
  touch-action: none;
  padding: 5px;
  transition: background 160ms ease-out;
  }
 .ScrollAreaScrollbar[data-orientation='vertical'] {
  width: 5px;
  }
 .ScrollAreaScrollbar[data-orientation='horizontal'] {
  flex-direction: column;
  height: 5px;
  }

 .ScrollAreaThumb {
  flex: 1;
  border-radius: 20px;
  position: relative;
  }
 .ScrollAreaThumb::before {
  background: #E2E8F0;
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  border-radius: 20px;
  min-width: 9px;
  min-height: 9px;
  }
 .dark .ScrollAreaThumb::before {
  background: #475569;
  }
`;

interface ScrollAreaProps extends PropsWithChildren<any> {}

const CustomScrollArea = ({ children }: ScrollAreaProps) => (
  <>
    <style
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: scrollbarStyles }}
    />
    <ScrollArea.Root type="scroll" className="ScrollAreaRoot">
      <ScrollArea.Viewport className="ScrollAreaViewport">{children}</ScrollArea.Viewport>
      <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="vertical">
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Scrollbar className="ScrollAreaScrollbar" orientation="horizontal">
        <ScrollArea.Thumb className="ScrollAreaThumb" />
      </ScrollArea.Scrollbar>
      <ScrollArea.Corner className="ScrollAreaCorner" />
    </ScrollArea.Root>
  </>
);

export default CustomScrollArea;
