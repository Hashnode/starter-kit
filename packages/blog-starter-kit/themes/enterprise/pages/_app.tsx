import { AppProps } from 'next/app';
import '../styles/index.css';
import { Outfit } from '@next/font/google';

const outfit = Outfit({
	weight: ['400', '100', '200', '300', '500', '600', '700', '800', '900'],
	subsets: ['latin'],
  });

export default function MyApp({ Component, pageProps }: AppProps) {
	return <main className={`${outfit.className}`}><Component {...pageProps} /></main> ;
}
