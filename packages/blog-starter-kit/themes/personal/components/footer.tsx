import { useAppContext } from './contexts/appContext';

export const Footer = () => {
	const { publication } = useAppContext();

	return (
		<footer className="border-t pt-10 text-sm text-neutral-500 dark:border-neutral-800 dark:text-neutral-400">
			<footer id="footer" className="bg-black text-s text-white">
			
			<section
			  className="mx-auto flex max-w-4xl flex-col p-4 sm:flex-row sm:justify-between"
			>
			  <nav>
				<div className="flex justify-center gap-4">
				  <a
					href="https://twitter.com/HaimantikaM"
					target="_blank"
					className="text-current"
					>Twitter</a>
				  <a
					href="https://newsletter.haimantika.com"
					target="_blank"
					className="text-current"
					>Newsletter</a>
				  <a
					href="https://github.com/Haimantika"
					target="_blank"
					className="text-current"
					>GitHub</a>
				  <a
					href="https://www.linkedin.com/in/haimantika-mitra/"
					target="_blank"
					className="text-current"
					>LinkedIn</a>
				</div>
			  </nav>
			</section>
		  </footer>
	
		</footer>
	);
};
