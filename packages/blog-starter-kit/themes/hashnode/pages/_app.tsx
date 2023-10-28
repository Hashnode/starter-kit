import { AppProps } from 'next/app';
import { withUrqlClient } from 'next-urql';
import { getUrqlClientConfig } from '../lib/api/client';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}

// `withUrqlClient` HOC provides the `urqlClient` prop and takes care of restoring cache from urqlState
// this will provide ssr cache to the provider and enable to use `useQuery` hook on the client side
export default withUrqlClient(getUrqlClientConfig, { neverSuspend: true })(MyApp);