// Import necessary libraries and components
import { AppProps } from 'next/app';
import { withUrqlClient } from 'next-urql';
import { Fragment, useState } from 'react';
import { getUrqlClientConfig } from '../lib/api/client';

// Import styles and fonts
import './styles/globals.scss';
import { GlobalFontVariables } from '../components/fonts';

// MyApp component
function MyApp({ Component, pageProps }: AppProps) {
  const [contextMenu, setContextMenu] = useState({
    isVisible: false,
    left: 0,
    top: 0,
  });

  // Show the custom context menu on right-click
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({
      isVisible: true,
      left: event.pageX,
      top: event.pageY,
    });
  };

  // Hide the custom context menu on click outside
  const handleClickOutside = () => {
    setContextMenu({ ...contextMenu, isVisible: false });
  };

  return (
    <Fragment>
      <GlobalFontVariables />
      <div
        onContextMenu={handleContextMenu}
        onClick={handleClickOutside}
      >
        {/* Render your content */}
        <Component {...pageProps} />

        {/* Custom context menu */}
        {contextMenu.isVisible && (
          <div
            className={"custom-context-menu active"}
            style={{ left: contextMenu.left, top: contextMenu.top }}
          >
            <div className="custom-menu-item">Custom Menu Item</div>
            <div className="custom-menu-item">Custom Menu Item</div>
            <div className="custom-menu-item">Custom Menu Item</div>
            <div className="custom-menu-item">Custom Menu Item</div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

// `withUrqlClient` HOC provides the `urqlClient` prop and takes care of restoring cache from urqlState
// this will provide ssr cache to the provider and enable the use of `useQuery` hook on the client side
export default withUrqlClient(getUrqlClientConfig, { neverSuspend: true })(MyApp);
