import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import OfflineNotification from './OfflineNotification';
import GradientBg from './rainbow/GradientBg';
import ClickSpark from './ClickSpark';


type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<ClickSpark />
			<div className="min-h-screen bg-white dark:bg-neutral-950">
			<GradientBg />
			<main className="relative z-1">{children}</main>
				<OfflineNotification />
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
