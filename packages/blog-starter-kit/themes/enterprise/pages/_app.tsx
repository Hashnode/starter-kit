import { ThemeProvider } from 'components/contexts/themeContext';
import { AppProps } from 'next/app';
import '../styles/index.css';

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<ThemeProvider>
			<Component {...pageProps} />;
		</ThemeProvider>
	);
}
