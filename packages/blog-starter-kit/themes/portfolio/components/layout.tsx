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
			<div className={theme}>
				<div className={`min-h-screen p-5 md:p-12  bg-primary-100 dark:bg-black dark:text-white`}>
					<main className='bg-white dark:bg-neutral-900  px-4 rounded-md'>{children}</main>
				</div>
			</div>
			<Analytics />
			<Integrations />
		</>
	);
};
