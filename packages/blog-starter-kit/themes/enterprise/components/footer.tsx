import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import CookieConsent from '../components/CookieConsent';
import { SocialLinks } from './social-links';
import Link from 'next/link';

export const Footer = () => {
const { publication } = useAppContext();
const PUBLICATION_LOGO = publication.preferences.logo;
return (
<footer className="dark:border-neutral-800 pt-20">
  <Container className="px-5 py-15 select-none">
     <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center text-teal-600">
    {PUBLICATION_LOGO ? (
    <>
    <div className="flex w-full flex-row justify-center">
        <a href="https://www.temizmama.com" aria-label={publication.title} className="flex flex-row items-center gap-5" target="_blank" rel="noopener noreferrer">
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
      <div className="mt-12 pt-5 pb-5">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <div className="flex flex-col items-center md:w-1/3 mb-6 md:mb-0">
                <i className="fas fa-map-marker-alt text-2xl mb-2"></i>
                <div className="text-center">
                  <h4 className="text-lg mb-1" style={{ fontFamily: 'PinkChicken' }}>Adresimiz</h4>
                  <a className="text-gray-700 transition hover:text-gray-700/75" target="_blank" href="https://maps.app.goo.gl/vApfgXquMGtYyTEr6">
                    <span>Ümit Mah. 7406/1 Sok. No: 9 Bornova - İZMİR</span>
                  </a>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between md:w-2/3 gap-6">
                <div className="flex flex-col items-center mb-6 md:mb-0 md:w-1/2">
                  <i className="fas fa-phone text-2xl mb-2"></i>
                  <div className="text-center">
                    <h4 className="text-lg mb-1" style={{ fontFamily: 'PinkChicken' }}>Bizi arayın</h4>
                    <a className="text-gray-700 transition hover:text-gray-700/75" target="_blank" href="tel:8502221869">
                      <span>850 222 1 869</span>
                    </a>
                  </div>
                </div>
                <div className="flex flex-col items-center md:w-1/2">
                  <i className="far fa-envelope-open text-2xl mb-2"></i>
                  <div className="text-center">
                    <h4 className="text-lg mb-1" style={{ fontFamily: 'PinkChicken' }}>Bize e-posta gönderin</h4>
                    <a className="text-gray-700 transition hover:text-gray-700/75" target="_blank" href="mailto:info@temizmama.com">
                      <span>info@temizmama.com</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
      <ul className="mt-12 flex flex-wrap justify-center gap-6 md:gap-8 lg:gap-12">
        <li>
        <Link
          href={'/'}
          aria-label={`Ana Sayfa`}
          className="text-gray-700 transition hover:text-gray-700/75"
          style={{ fontFamily: 'PinkChicken' }}
          rel="canonical"
          title="Ana Sayfa"
        >
					<span>
						Ana Sayfa
					</span>
			  </Link>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" title="Online Satış" href="https://www.temizmama.com" target="_blank" style={{ fontFamily: 'PinkChicken'}}> Online Satış </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" title="Barınaklara bağış" href="https://www.temizmama.com/barinaklara-bagis" target="_blank" style={{ fontFamily: 'PinkChicken'}}> Barınak Bağışı </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" title="Aydınlatma Metni" href="https://www.temizmama.com/aydinlatma-metni" target="_blank" style={{ fontFamily: 'PinkChicken'}}> Aydınlatma Metni </a>
        </li>

        <li>
          <a className="text-gray-700 transition hover:text-gray-700/75" title="Hakkımızda" href="https://www.temizmama.com/hakkimizda" target="_blank" style={{ fontFamily: 'PinkChicken'}}> Hakkımızda </a>
        </li>

        <li>
          <Link
                  href="/iletisim"
                  className="block text-gray-800 hover:text-gray-700/75"
                  style={{ fontFamily: 'PinkChicken' }}
                  rel="canonical"
                  title="İletişim"
                >
                  İletişim
                </Link>
        </li>
      </ul>

      <ul className="mt-12 flex justify-center gap-6 md:gap-8 items-center">
        <li>
          <a href="https://www.facebook.com/temizmama/" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75" title="Facebook">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd"
                d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                clipRule="evenodd" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.instagram.com/temizmamacom" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75" title="İnstagram">
            <span className="sr-only">İnstagram</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd"
                d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                clipRule="evenodd" />
            </svg>
          </a>
        </li>

        <li>
          <a href="https://x.com/temizmamacom" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75" title="X (Twitter)">
            <span className="sr-only">X</span>
            <svg   className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd"
                d="M14.095479,10.316482L22.286354,1h-1.940718l-7.115352,8.087682L7.551414,1H1l8.589488,12.231093L1,23h1.940717  l7.509372-8.542861L16.448587,23H23L14.095479,10.316482z M11.436522,13.338465l-0.871624-1.218704l-6.924311-9.68815h2.981339  l5.58978,7.82155l0.867949,1.218704l7.26506,10.166271h-2.981339L11.436522,13.338465z"
                clipRule="evenodd"/>
            </svg>
          </a>
        </li>

        <li>
          <a href="https://www.youtube.com/@temizmama" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75" title="Youtube">
            <span className="sr-only">Youtube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" 
                d="M 12 4 C 12 4 5.7455469 3.9999687 4.1855469 4.4179688 C 3.3245469 4.6479688 2.6479687 5.3255469 2.4179688 6.1855469 C 1.9999687 7.7455469 2 12 2 12 C 2 12 1.9999687 16.254453 2.4179688 17.814453 C 2.6479687 18.675453 3.3255469 19.352031 4.1855469 19.582031 C 5.7455469 20.000031 12 20 12 20 C 12 20 18.254453 20.000031 19.814453 19.582031 C 20.674453 19.352031 21.352031 18.674453 21.582031 17.814453 C 22.000031 16.254453 22 12 22 12 C 22 12 22.000031 7.7455469 21.582031 6.1855469 C 21.352031 5.3255469 20.674453 4.6479688 19.814453 4.4179688 C 18.254453 3.9999687 12 4 12 4 z M 12 6 C 14.882 6 18.490875 6.1336094 19.296875 6.3496094 C 19.465875 6.3946094 19.604391 6.533125 19.650391 6.703125 C 19.891391 7.601125 20 10.342 20 12 C 20 13.658 19.891391 16.397875 19.650391 17.296875 C 19.605391 17.465875 19.466875 17.604391 19.296875 17.650391 C 18.491875 17.866391 14.882 18 12 18 C 9.119 18 5.510125 17.866391 4.703125 17.650391 C 4.534125 17.605391 4.3956094 17.466875 4.3496094 17.296875 C 4.1086094 16.398875 4 13.658 4 12 C 4 10.342 4.1086094 7.6011719 4.3496094 6.7011719 C 4.3946094 6.5331719 4.533125 6.3946094 4.703125 6.3496094 C 5.508125 6.1336094 9.118 6 12 6 z M 10 8.5351562 L 10 15.464844 L 16 12 L 10 8.5351562 z"
                clipRule="evenodd"/>
            </svg>
          </a>
        </li>

        <li>
          <a href="https://open.spotify.com/show/6MKEPLcqSZQ1jUDKFwc6A1" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75" title="Spotfiy Podcast">
            <span className="sr-only">Spotify Podcast</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd">
              <path fillRule="evenodd"
                d="M105 0h302c57.928.154 104.845 47.072 105 104.995V407c-.155 57.925-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.925.002 407.003L0 105C.156 47.072 47.074.154 104.997 0H105zm150.998 71.497C154.101 71.497 71.492 154.102 71.492 256c0 101.902 82.609 184.504 184.506 184.504 101.909 0 184.509-82.6 184.509-184.504 0-101.892-82.6-184.495-184.512-184.495l.003-.011v.003zm84.615 266.109c-3.304 5.419-10.399 7.14-15.821 3.811-43.318-26.461-97.854-32.452-162.079-17.78-6.189 1.41-12.357-2.467-13.77-8.659-1.415-6.191 2.448-12.359 8.652-13.769 70.284-16.057 130.572-9.143 179.207 20.578 5.421 3.326 7.14 10.397 3.811 15.819zm22.584-50.238c-4.166 6.767-13.022 8.904-19.786 4.742-49.597-30.485-125.194-39.315-183.857-21.504-7.607 2.296-15.642-1.991-17.949-9.584-2.293-7.61 1.996-15.627 9.592-17.94 67.006-20.331 150.308-10.484 207.264 24.514 6.764 4.166 8.901 13.023 4.737 19.779l.002-.004-.003-.003zm1.94-52.313c-59.468-35.32-157.578-38.567-214.353-21.336-9.116 2.766-18.759-2.379-21.521-11.499-2.762-9.123 2.381-18.756 11.502-21.526 65.175-19.786 173.52-15.963 241.984 24.68 8.218 4.87 10.908 15.459 6.037 23.648-4.849 8.2-15.468 10.904-23.641 6.033h-.008z"
                clipRule="evenodd"/>
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
<a href="https://www.temizmama.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75"> Temizmama.com </a>, bir <a href="https://www.cagatay.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75">Çağatay</a> Markasıdır.
        <br/>
© 2008 - 2024<a href="https://www.temizmama.com" rel="noreferrer" target="_blank" className="text-gray-700 transition hover:text-gray-700/75"> Temizmama.com </a> her hakkı saklıdır.
      </p>
    </div>
    <CookieConsent />
  </Container>
</footer>
);
};
