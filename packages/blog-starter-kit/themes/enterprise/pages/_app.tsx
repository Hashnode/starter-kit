import { AppProps } from 'next/app';
import { AppProvider } from '../components/contexts/appContext';
import '../styles/index.css';
import '../styles/globals.css';
import '../styles/OverlaySearch.css';

export default function MyApp({ Component, pageProps }: AppProps) {
  // Eğer publication yoksa, AppProvider'ı kullanma
  if (!pageProps.publication) {
    return <Component {...pageProps} />;
  }

  return (
	<AppProvider 
	publication={pageProps.publication || {}} // Eğer publication undefined ise boş nesne kullan
	post={pageProps.post}
	page={pageProps.page}
	series={pageProps.series}
	>
	<Component {...pageProps} />
	</AppProvider>
  );
}