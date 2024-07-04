import { Analytics } from './analytics';
import { headers } from 'next/headers';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import OfflineNotification from './OfflineNotification';


type Props = {
	children: React.ReactNode;
};
const policy = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' *.googletagmanager.com *.google-analytics.com ${process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT};
    style-src 'self' 'unsafe-inline';
    img-src * blob: data:;
    font-src 'self' data:;
    connect-src *;
  `;

  headers().set('Content-Security-Policy', policy);
export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen bg-white dark:bg-neutral-950">
				<main>{children}</main>
				<OfflineNotification />
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
