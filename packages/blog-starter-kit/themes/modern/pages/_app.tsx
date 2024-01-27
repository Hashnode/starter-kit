import { AppProps } from 'next/app';
import { withUrqlClient } from 'next-urql';
import './styles/globals.scss'
import { GlobalFontVariables } from '../components/fonts';
import { getUrqlClientConfig } from '../lib/api/client';
import TawkMessengerReact from '@tawk.to/tawk-messenger-react';

import { Fragment } from 'react';

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Fragment>
			 <GlobalFontVariables />
			 <Component {...pageProps} />
			 <TawkMessengerReact
                propertyId="65b4deda0ff6374032c57e76"
                widgetId="1hl58d1p4"/>
		</Fragment>
	);
}

// `withUrqlClient` HOC provides the `urqlClient` prop and takes care of restoring cache from urqlState
// this will provide ssr cache to the provider and enable to use `useQuery` hook on the client side
export default withUrqlClient(getUrqlClientConfig, { neverSuspend: true })(MyApp);