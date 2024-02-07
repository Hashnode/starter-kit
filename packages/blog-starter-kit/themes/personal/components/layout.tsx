import { Inter } from 'next/font/google';
import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

const inter = Inter({ subsets: ['latin'] })

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className="min-h-screen text-zinc-300 bg-[conic-gradient(at_top,_var(--tw-gradient-stops))] from-zinc-900 via-zinc-600 to-zinc-900">
				<main className={inter.className}>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
