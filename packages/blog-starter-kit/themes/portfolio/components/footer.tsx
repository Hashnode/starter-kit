import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import { SubscribeForm } from './subscribe-form';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-12 footer dark:bg-gray-900 dark:border-gray-800 ">
			<Container className="px-5">
				{PUBLICATION_LOGO ? (
					<div className="mb-20 flex w-full flex-row justify-center">
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
				<div className=" max-w-[600px] mb-8 bg-primary-50 py-6 px-2 rounded-md mx-auto ">
					<h2 className="text-primary-600 dark:text-primary-500 mb-5 text-center text-lg font-semibold">
						Subscribe to our newsletter for updates and changelog.
					</h2>
					<SubscribeForm />
				</div>
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
