import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t pt-5 text-sm text-zinc-400 border-zinc-900/20 mt-16">
			&copy; {new Date().getFullYear()} {publication.title}
		</footer>
	);
};
