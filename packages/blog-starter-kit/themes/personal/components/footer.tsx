import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t border-neutral-700 dark:border-neutral-700 pt-10 text-sm text-neutral-900 dark:text-neutral-400 bg-white dark:bg-black">
		<section className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between">
			<nav>
				<div className="flex justify-center gap-4">
					<a href="https://twitter.com/HaimantikaM" target="_blank" className="text-neutral-900 dark:text-white hover:opacity-90">Twitter</a>
					<a href="https://newsletter.haimantika.com" target="_blank" className="text-neutral-900 dark:text-white hover:opacity-90">Newsletter</a>
					<a href="https://github.com/Haimantika" target="_blank" className="text-neutral-900 dark:text-white hover:opacity-90">GitHub</a>
					<a href="https://www.linkedin.com/in/haimantika-mitra/" target="_blank" className="text-neutral-900 dark:text-white hover:opacity-90">LinkedIn</a>
				</div>
			</nav>
		</section>
	</footer>
	

	);
};
