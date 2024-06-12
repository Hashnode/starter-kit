import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.logo;
	return (
		<footer className="border-t py-20 dark:border-neutral-800 ">
      <Container className="px-5">
        <div className="grid w-full grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 grid grid-cols-4 gap-5 md:col-span-4 lg:col-span-3">
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Bizi tanıyın
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="/iletisim" className="hover:underline">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="/hakkimizda" className="hover:underline">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="/sirket-bilgileri" className="hover:underline">
                    Şirket Bilgileri
                  </a>
                </li>
                <li>
                  <a href="/uretim-teknolojimiz" className="hover:underline">
                    Üretim Teknolojilerimiz
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">Markalarımız</p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    BonaCibo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Kennel
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Micho
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    LaMito
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-span-2 flex flex-col items-end gap-5 text-right text-slate-600 dark:text-neutral-300 md:text-left">
            <SocialLinks />
            <p>&copy; 2023 Company Inc.</p>
            <div className="text-uppercase">
              Server time: {localTime}
            </div>
            <p>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>{' '}
              ·{' '}
              <a href="#" className="hover:underline">
                Terms
              </a>
            </p>
          </div>
        </div>
      </Container>
      <div className="flex flex-col justify-center items-center gap-1">
        <p className="text-sm text-default-400">© <!-- -->2008 - 2024<!-- --> Temizmama Inc.</p>
        <a
          className="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex justify-end items-center gap-2 text-foreground"
          href="#"
          target="_blank"
          rel="noopener noreferrer"
          tabIndex="0"
          role="link"
        >
          <p className="font-normal"></p>
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
            <p className="mb-20 text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
              {publication.title}
            </p>
          )}
        </a>
      </div>
    </footer>
	);
};
