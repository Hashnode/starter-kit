import { Analytics } from './analytics';
import { useTheme } from './contexts/themeContext';
import { Integrations } from './integrations';
import { Meta } from './meta';
import { Scripts } from './scripts';

type Props = {
	children: React.ReactNode;
};

export const Layout = ({ children }: Props) => {
	const {theme} = useTheme()
	return (
		<>
			<Meta />
			<Scripts />
			
				<div className={`min-h-screen ${theme} !text-neutral-900 dark:bg-neutral-900`}>
					<main className='shadow-sm shadow-primary-100 rounded-md'>{children}</main>
				</div>
			
			<Analytics />
			<Integrations />
		</>
	);
};