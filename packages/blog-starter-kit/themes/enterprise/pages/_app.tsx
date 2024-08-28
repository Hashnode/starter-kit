// pages/_app.tsx
import { AppProps } from 'next/app';
import { AppProvider } from '../components/contexts/appContext';
import { useExternalLinkHandler } from '../utils/externalLinkHandler';
import { ExternalLinkModal } from '../components/ExternalLinkModal';
import { ThemeSwitcher } from '../components/ThemeSwitcher';
import '../styles/index.css';
import '../styles/globals.css';
import '../styles/OverlaySearch.css';
import '../styles/themes.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { modalUrl, hideModal } = useExternalLinkHandler();

  console.log('Current modal URL:', modalUrl); // Debug için

  if (!pageProps.publication) {
    return <Component {...pageProps} />;
  }

  return (
    <AppProvider 
      publication={pageProps.publication || {}}
      post={pageProps.post}
      page={pageProps.page}
      series={pageProps.series}
    >
      <div className="app-container">
        <ThemeSwitcher />
        <Component {...pageProps} />
        {modalUrl && <ExternalLinkModal url={modalUrl} onClose={hideModal} />}
      </div>
    </AppProvider>
  );
}