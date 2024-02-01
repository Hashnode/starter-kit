import { AppProps } from 'next/app';
import '../styles/index.css';
import { ThemeProvider } from '../components/contexts/themeContext';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />
		</ThemeProvider>
	)
}
