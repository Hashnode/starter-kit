import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import { SubscribeForm } from './subscribe-form';
import { useTheme } from './contexts/themeContext';
import SubscribeFormContainer from './subscribe-form-container';

export const Footer = () => {
	const { publication } = useAppContext();
	const {theme} = useTheme()
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className={`${theme} border-t py-12 footer dark:bg-neutral-900 dark:border-gray-800`}>
			<Container className="px-5 flex flex-col items-center gap-4">
				{PUBLICATION_LOGO ? (
					<div className="flex w-full flex-row justify-center">
						<Link
							href={'/'}
							aria-label={`${publication.title} home page`}
							className="flex flex-row items-center gap-5"
						>
							<img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
						</Link>
					</div>
				) : (
					<p className="mb-8 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
						{publication.title}
					</p>
				)}
				<SubscribeFormContainer/>
				<div className="flex flex-col items-center w-full gap-4">

					<div className=" flex flex-col items-center gap-4 text-right text-slate-600 dark:text-neutral-300 md:text-left">
						<p className='text-center text-gray-400'>Connect with me!</p>
						<SocialLinks />

					</div>
				</div>
			</Container>
		</footer>
	);
};
