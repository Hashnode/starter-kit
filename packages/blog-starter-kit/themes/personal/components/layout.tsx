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
			<div className="min-h-screen bg-white dark:bg-[#121212] flex justify-center">
				<main className='max-w-[700px] '>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
