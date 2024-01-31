import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import { SubscribeForm } from './subscribe-form';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t dark:border-neutral-800 ">
			<Container>
				<SubscribeForm />
				<div className="p-2 text-right text-slate-600 dark:text-neutral-300 md:text-left">
					<SocialLinks />
					<p>&copy; Shreyas Chaliha aka Trace.</p>
				</div>
			</Container>
		</footer>
	);
};
