import { Analytics } from './analytics';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';
import { Inter } from 'next/font/google'

type Props = {
	children: React.ReactNode;
};

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export const Layout = ({ children }: Props) => {
	return (
		<>
			<Meta />
			<Scripts />
			<div className={`min-h-screen bg-white dark:bg-neutral-950 ${inter?.className ?? ''}`}>
				<main>{children}</main>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
