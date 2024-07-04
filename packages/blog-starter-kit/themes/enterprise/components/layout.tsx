import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import OfflineNotification from './OfflineNotification';


type Props = {
	children: React.ReactNode;
};

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
