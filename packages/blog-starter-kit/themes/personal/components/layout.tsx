import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<main className="flex flex-col min-h-screen bg-white dark:bg-neutral-950">{children}</main>
			<Analytics />
			<Integrations />
		</>
	);
};
