import { AppProps } from 'next/app';
import { withUrqlClient } from 'next-urql';
import 'tailwindcss/tailwind.css'

import '../styles/index.css';
import { GlobalFontVariables } from '../components/fonts';
import { getUrqlClientConfig } from '../lib/api/client';

import { Fragment } from 'react';
import { ThemeProvider } from 'next-themes'

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			 <GlobalFontVariables />
			 <Component {...pageProps} />
		</Fragment>
    <ThemeProvider attribute="class">
            <Component {...pageProps} />
        </ThemeProvider>
	);
}

import { AppProps } from 'next/app';
import '../styles/index.css';

// `withUrqlClient` HOC provides the `urqlClient` prop and takes care of restoring cache from urqlState
// this will provide ssr cache to the provider and enable to use `useQuery` hook on the client side
export default withUrqlClient(getUrqlClientConfig, { neverSuspend: true })(MyApp);
