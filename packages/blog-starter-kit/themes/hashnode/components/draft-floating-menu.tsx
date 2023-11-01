import * as Tooltip from '@radix-ui/react-tooltip';
import { useEffect } from 'react';

import { Post } from '../types';
import { PublicationFragment } from '../generated/graphql';

/**
 * Can be used for both Draft preview page and Single post page
 */
type DraftType = Post & { pendingScheduledDateArrival: boolean };

function DraftFloatingMenu(props: {
  draft?: any; // TODO: Needs to be fixed
  openComments?: () => void;
  publication: PublicationFragment;
}) {
  const { draft, openComments } = props;

  const handleFloatingBarDisplay = () => {
    const blogHeader = document.querySelector('.blog-header');
    const blogContent = document.querySelector('#post-content-parent');
    const floatingBar = document.querySelector('.post-floating-bar');

    if (!floatingBar?.classList.contains('freeze')) {
      if (window.scrollY > blogHeader!.clientHeight) {
        floatingBar?.classList.add('active', 'animation');
      } else if (floatingBar?.classList.contains('active')) {
        floatingBar?.classList.remove('active');
      }
    }

    const currentViewportHeight = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0);
    // Adding 40 as a buffer to adjust the trigger
    const isPostContentBottomInsideViewport = blogContent!.getBoundingClientRect().bottom + 40 <= currentViewportHeight;
    // Adding 175 as a buffer to adjust the trigger
    const isPostContentBottomAlmostOut =
      window.scrollY - currentViewportHeight - 175 <= blogContent!.clientHeight &&
      floatingBar?.classList.contains('freeze');

    if (isPostContentBottomInsideViewport) {
      floatingBar?.classList.remove('active');
      floatingBar?.classList.add('freeze');
    } else if (isPostContentBottomAlmostOut) {
      floatingBar?.classList.remove('freeze', 'animation');
      floatingBar?.classList.add('active');
    }
  };

  useEffect(() => {
    handleFloatingBarDisplay();
    window.addEventListener('scroll', handleFloatingBarDisplay);
    return () => {
      window.removeEventListener('scroll', handleFloatingBarDisplay);
    };
  }, []);

  return (
    <Tooltip.Provider delayDuration={200}>
      <style
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: `.post-floating-bar {
              bottom: -60px;
            }
            .post-floating-bar.animation {
              -webkit-transition: .2s all;
              -o-transition: .2s all;
              transition: .2s all;
              transition-timing-function: ease-in;
            }
            .post-floating-bar.active {
              bottom: 40px
            }
            .post-floating-bar.freeze {
              bottom: 0!important;
              position: absolute!important;
              transition: none!important;
            }
            .post-floating-bar.freeze > div {
              box-shadow: none!important;
            }
            `,
        }}
      />
    </Tooltip.Provider>
  );
}

export default DraftFloatingMenu;
