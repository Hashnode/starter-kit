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
			<div className="min-h-screen p-5 md:p-12  bg-primary-100  dark:bg-neutral-950">
				<main className='bg-white shadow-sm px-4 shadow-primary-100 rounded-md'>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
