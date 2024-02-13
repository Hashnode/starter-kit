import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-4 dark:border-neutral-800">
  <Container className="px-5">
    {PUBLICATION_LOGO ? (
      <div className="m-4 flex w-full flex-row justify-between">
        <Link
          href={'/'}
          aria-label={`${publication.title} home page`}
          className="flex flex-row items-center justify-between"
        >
          <img className="block h-10 md:h-16" src={PUBLICATION_LOGO} alt={publication.title} />
        </Link>
        <div className="col-span-2 flex flex-col items-center justify-center gap-10 text-center text-slate-600 dark:text-neutral-300 md:text-center m-4">
      <SocialLinks />
    </div>
      </div>
    ) : (
      <p className="m-4 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
        {publication.title}
      </p>
    )}
    
  </Container>
</footer>

	);
};
