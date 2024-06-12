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
        <div className="grid w-full grid-cols-3 gap-5 md:grid-cols-6 lg:grid-cols-5">
          <div className="col-span-1 grid grid-cols-4 gap-5 md:col-span-4 lg:col-span-3">
            <div className="col-span-full md:col-span-2 lg:col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Bizi tanıyın
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="https://temizmama.com/iletisim" className="hover:underline">
                    İletişim
                  </a>
                </li>
                <li>
                  <a href="https://temizmama.com/hakkimizda" className="hover:underline">
                    Hakkımızda
                  </a>
                </li>
                <li>
                  <a href="https://temizmama.com/sirket-bilgileri" className="hover:underline">
                    Şirket Bilgileri
                  </a>
                </li>
                <li>
                  <a href="https://temizmama.com/uretim-teknolojimiz" className="hover:underline">
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
      <div class="flex flex-col justify-center items-center gap-1">
        <p class="text-sm text-default-400">© <!-- -->2008 - 2024<!-- --> Çağatay Inc.</p>
          <a class="" href="https://temizmama.com" target="_blank" rel="noopener noreferrer" tabindex="0" role="link">
            <p class="font-normal">Deployed on</p>
          </a>
        </div>
		</footer>
	);
};
