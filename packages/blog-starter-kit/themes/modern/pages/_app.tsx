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

  const [defination, setDefination] = useState([])

  // Show the custom context menu on right-click
  const handleContextMenu = (event: React.MouseEvent) => {
    event.preventDefault();
    setContextMenu({
      isVisible: true,
      left: event.pageX,
      top: event.pageY,
    });
    defineWord()
  };

  // Hide the custom context menu on click outside
  const handleClickOutside = () => {
    setContextMenu({ ...contextMenu, isVisible: false });
  };

  async function defineWord() {
    const word = window.getSelection().toString().trim();
    const url = `https://api.datamuse.com/words?rel_syn=${word}`
    fetch(url)
      .then((response) => response.json())
      .then((json) => {
        console.log(json, " DEFINATION", word)
        setDefination(json)
      })
      .catch((error) => {
        console.log(error);
        return ''; // Return an empty string in case of an error
      });
  }

  function copyText() {
    
  }

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
            <div className="custom-menu-item" onClick={copyText}>Copy Selected Text</div>
            <div className='definations'>
              <h4>DEFINATIONS:- </h4>
            {
              defination.length > 0 ?
                defination.map((item, index) => {
                  console.log(item)
                  return <div key={index} className="tag">{item.word}</div>
                }) : ""
            }
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
}

// `withUrqlClient` HOC provides the `urqlClient` prop and takes care of restoring cache from urqlState
// this will provide ssr cache to the provider and enable the use of `useQuery` hook on the client side
export default withUrqlClient(getUrqlClientConfig, { neverSuspend: true })(MyApp);
