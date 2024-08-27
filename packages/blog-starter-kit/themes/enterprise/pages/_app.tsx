import { AppProps } from 'next/app';
import { AppProvider } from '../components/contexts/appContext';
import { ExternalLinkProvider } from '../components/contexts/ExternalLinkContext';
import { ExternalLinkModal } from '../components/ExternalLinkModal';
import '../styles/index.css';
import '../styles/globals.css';
import '../styles/OverlaySearch.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  if (!pageProps.publication) {
    return <Component {...pageProps} />;
  }

  return (
    <ExternalLinkProvider>
      <AppProvider 
        publication={pageProps.publication || {}}
        post={pageProps.post}
        page={pageProps.page}
        series={pageProps.series}
      >
        <Component {...pageProps} />
        <ExternalLinkModal />
      </AppProvider>
    </ExternalLinkProvider>
  );
}