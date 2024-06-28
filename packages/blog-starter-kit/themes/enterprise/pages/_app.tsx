import { useEffect, useState } from 'react';
import { AppProps } from 'next/app';
import '../styles/index.css';
import '../styles/OverlaySearch.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        navigator.serviceWorker.register('/service-worker.js').then(
          (registration) => {
            console.log('ServiceWorker registration successful with scope: ', registration.scope);
          },
          (error) => {
            console.log('ServiceWorker registration failed: ', error);
          }
        );
      });
    }

    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <>
      <Component {...pageProps} />
      {isOffline && <OfflineIndicator />}
    </>
  );
}

const OfflineIndicator = () => (
  <div style={offlineIndicatorStyle as React.CSSProperties}>
    <p style={{ color: 'white' }}>You are currently offline. Some features may not be available.</p>
  </div>
);

const offlineIndicatorStyle: React.CSSProperties = {
  position: 'fixed',
  bottom: 0,
  width: '100%',
  backgroundColor: 'red',
  textAlign: 'center',
  padding: '10px 0',
  zIndex: 1000,
};
