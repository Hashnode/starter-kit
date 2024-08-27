import { AppProps } from 'next/app';
import { AppProvider } from '../components/contexts/appContext';
import { useExternalLinkHandler } from '../utils/externalLinkHandler';
import { ExternalLinkModal } from '../components/ExternalLinkModal';
import '../styles/index.css';
import '../styles/globals.css';
import '../styles/OverlaySearch.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { modalUrl, hideModal } = useExternalLinkHandler();

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
      <Component {...pageProps} />
      {modalUrl && <ExternalLinkModal url={modalUrl} onClose={hideModal} />}
    </AppProvider>
  );
}