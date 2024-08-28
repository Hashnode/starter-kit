// pages/_app.tsx
import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { AppProvider } from '../components/contexts/appContext';
import { useExternalLinkHandler } from '../utils/externalLinkHandler';
import { ExternalLinkModal } from '../components/ExternalLinkModal';
import { preloadLinkPreviews } from '../utils/linkPreview';
import '../styles/index.css';
import '../styles/globals.css';
import '../styles/OverlaySearch.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  const { modalUrl, hideModal } = useExternalLinkHandler();

  useEffect(() => {
    const preloadPreviews = async () => {
      // Sayfadaki tüm dış bağlantıları bul
      const externalLinks = Array.from(document.querySelectorAll('a'))
        .filter(link => !link.hostname.includes(window.location.hostname))
        .map(link => link.href);
      
      // Önizlemeleri oluştur ve sakla
      await preloadLinkPreviews(externalLinks);
    };

    preloadPreviews();
  }, []);

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