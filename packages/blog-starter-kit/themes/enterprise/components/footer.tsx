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
      <div class="flex flex-col justify-center items-center gap-1"><p class="text-sm text-default-400">© <!-- -->2008 - 2024<!-- --> Çağatay Inc.</p><a class="relative tap-highlight-transparent outline-none data-[focus-visible=true]:z-10 data-[focus-visible=true]:outline-2 data-[focus-visible=true]:outline-focus data-[focus-visible=true]:outline-offset-2 text-medium no-underline hover:opacity-80 active:opacity-disabled transition-opacity flex justify-end items-center gap-2 text-foreground" href="https://www.vercel.com?utm_source=nextui&amp;utm_marketing=oss" target="_blank" rel="noopener noreferrer" tabindex="0" role="link"><p class="font-normal">Deployed on</p><svg fill="none" height="18" viewBox="0 0 4438 1000" xmlns="http://www.w3.org/2000/svg" class="text-black dark:text-white"><path d="M2223.75 250C2051.25 250 1926.87 362.5 1926.87 531.25C1926.87 700 2066.72 812.5 2239.38 812.5C2343.59 812.5 2435.47 771.25 2492.34 701.719L2372.81 632.656C2341.25 667.188 2293.28 687.344 2239.38 687.344C2164.53 687.344 2100.94 648.281 2077.34 585.781H2515.16C2518.59 568.281 2520.63 550.156 2520.63 531.094C2520.63 362.5 2396.41 250 2223.75 250ZM2076.09 476.562C2095.62 414.219 2149.06 375 2223.75 375C2298.59 375 2352.03 414.219 2371.41 476.562H2076.09ZM2040.78 78.125L1607.81 828.125L1174.69 78.125H1337.03L1607.66 546.875L1878.28 78.125H2040.78ZM577.344 0L1154.69 1000H0L577.344 0ZM3148.75 531.25C3148.75 625 3210 687.5 3305 687.5C3369.38 687.5 3417.66 658.281 3442.5 610.625L3562.5 679.844C3512.81 762.656 3419.69 812.5 3305 812.5C3132.34 812.5 3008.13 700 3008.13 531.25C3008.13 362.5 3132.5 250 3305 250C3419.69 250 3512.66 299.844 3562.5 382.656L3442.5 451.875C3417.66 404.219 3369.38 375 3305 375C3210.16 375 3148.75 437.5 3148.75 531.25ZM4437.5 78.125V796.875H4296.88V78.125H4437.5ZM3906.25 250C3733.75 250 3609.38 362.5 3609.38 531.25C3609.38 700 3749.38 812.5 3921.88 812.5C4026.09 812.5 4117.97 771.25 4174.84 701.719L4055.31 632.656C4023.75 667.188 3975.78 687.344 3921.88 687.344C3847.03 687.344 3783.44 648.281 3759.84 585.781H4197.66C4201.09 568.281 4203.12 550.156 4203.12 531.094C4203.12 362.5 4078.91 250 3906.25 250ZM3758.59 476.562C3778.13 414.219 3831.41 375 3906.25 375C3981.09 375 4034.53 414.219 4053.91 476.562H3758.59ZM2961.25 265.625V417.031C2945.63 412.5 2929.06 409.375 2911.25 409.375C2820.47 409.375 2755 471.875 2755 565.625V796.875H2614.38V265.625H2755V409.375C2755 330 2847.34 265.625 2961.25 265.625Z" fill="currentColor"></path></svg></a></div>
		</footer>
	);
};
