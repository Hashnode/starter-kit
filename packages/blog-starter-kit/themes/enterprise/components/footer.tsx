import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import { Navbar } from "../components/navbar";
import Link from 'next/link';

export const Footer = () => {
const { publication } = useAppContext();
const PUBLICATION_LOGO = publication.preferences.logo;
return (
<footer className="border-t py-20 dark:border-neutral-800 ">
  <Container className="px-5">
     <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center text-teal-600">
    {PUBLICATION_LOGO ? (
    <>
    <div className="flex w-full flex-row justify-center">
        <a href="https://temizmama.com" aria-label={publication.title} className="flex flex-row items-center gap-5" target="_blank" rel="noopener noreferrer">
          <img className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
        </a>
    </div>
    <div className="flex w-full flex-row justify-center">
        <a href="https://www.cagatay.com" aria-label="Çağatay" className="flex flex-row items-center gap-5" target="_blank" rel="noopener noreferrer">
          <img className="block w-40" src="https://www.temizmama.com/assets/img/anasayfa/cagatay-Logo.webp" alt="Çağatay" />
        </a>
    </div>

    </>
    ) : (
    <p className="text-center text-xl font-semibold text-slate-900 dark:text-slate-50 md:text-4xl">
      {publication.title}
    </p>
    )}
      </div>
      <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
          <Link
				href={'./'}
        aria-label={`Ana Sayfa`}
				className="text-gray-700 transition hover:text-gray-700/75"
			>
					<span>
						Ana Sayfa
					</span>
			</Link>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="https://www.temizmama.com" target="_blank" > Online Satış </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="https://www.temizmama.com/barinaklara-bagis" target="_blank" > Barınak Bağışı </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="https://www.temizmama.com/aydinlatma-metni" target="_blank" > Aydınlatma Metni </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="https://www.temizmama.com/hakkimizda" target="_blank" > Hakkımızda </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" href="https://www.temizmama.com/iletisim" target="_blank" > İletişim </a>
        </li>
      </ul>

      <ul className="mt-12 flex justify-center gap-6 md:gap-8 items-center">
        <li>
          <a href="https://www.facebook.com/temizmama/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/temizmamacom" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
            <span className="sr-only">Instagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://x.com/temizmamacom" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
            <span className="sr-only">X</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd"
                d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/@temizmama" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">
            <span className="sr-only">Youtube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fill-rule="evenodd" 
                d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"
                clip-rule="evenodd" />
            </svg>
          </a>
        </li>
        <li>
        <SocialLinks />
        </li>
      </ul>
    </div>
        <div className="border-gray-100 pt-8">
      <p className="text-center text-xs/relaxed text-gray-500">
<a href="https://temizmama.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75"> Temizmama.com </a>, bir <a href="https://www.cagatay.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">Çağatay</a> Markasıdır.
        <br/>
© 2008 - 2024<a href="https://temizmama.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75"> Temizmama.com </a> her hakkı saklıdır.
      </p>
    </div>
  </Container>
  <a href="#head" id="cta">
  <span className="sr-only">Yukarı</span>
  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
  </svg>
</a>
<Navbar />
</footer>
);
};
