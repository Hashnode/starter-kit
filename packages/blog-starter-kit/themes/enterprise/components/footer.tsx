import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import CookieConsent from '../components/CookieConsent';
import { SocialLinks } from './social-links';
import Link from 'next/link';

export const Footer = () => {
const { publication } = useAppContext();

const PUBLICATION_LOGO = publication?.preferences?.logo ?? null;
const publicationTitle = publication?.title ?? 'Temizmama Blog';

return (
<footer className="dark:border-neutral-800 pt-20">
  <Container className="px-5 py-15 select-none">
     <div className="mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-center text-teal-600">
    {PUBLICATION_LOGO && 
    <>
    <div className="flex w-full flex-row justify-center">
        <a href="https://www.temizmama.com" aria-label={publication.title} className="flex flex-row items-center gap-5" target="_blank" rel="noopener noreferrer">
          <img loading="lazy" className="block w-40" src={PUBLICATION_LOGO} alt={publication.title} />
        </a>
    </div>
    <div className="flex w-full flex-row justify-center">
        <a href="https://www.cagatay.com" aria-label="Çağatay" className="flex flex-row items-center gap-5" target="_blank" rel="noopener noreferrer">
          <img loading="lazy" className="block w-40" src="https://www.temizmama.com/assets/img/anasayfa/cagatay-Logo.webp" alt="Çağatay" />
        </a>
    </div>

    </>
    } 
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
                    <a className="text-gray-700 transition hover:text-gray-700/75" target="_blank" href="tel:+908502221869">
                      <span>+90 850 222 1 869</span>
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
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path  fillRule="evenodd"
                  d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 10.689453 8 C 9.1494531 8 7.696125 8.171625 6.328125 8.515625 C 5.986125 8.600625 5.7285156 8.8561406 5.7285156 9.3691406 C 5.7285156 9.8821406 6.0709844 10.310609 6.5839844 10.224609 C 6.8399844 10.224609 6.9266562 10.138672 7.0976562 10.138672 C 8.2096562 9.8816719 9.4924531 9.7109375 10.689453 9.7109375 C 13.084453 9.7109375 15.564391 10.309 17.275391 11.25 C 17.531391 11.335 17.616109 11.421875 17.787109 11.421875 C 18.301109 11.421875 18.643516 11.079406 18.728516 10.566406 C 18.728516 10.139406 18.473797 9.8819375 18.216797 9.7109375 C 16.078797 8.5989375 13.340453 8 10.689453 8 z M 10.519531 10.994141 C 9.0655312 10.994141 8.0396719 11.250813 7.0136719 11.507812 C 6.5856719 11.678813 6.4140625 11.849344 6.4140625 12.277344 C 6.4140625 12.619344 6.6696563 12.960938 7.0976562 12.960938 C 7.2686562 12.960937 7.3543906 12.961 7.5253906 12.875 C 8.2953906 12.704 9.3215937 12.533203 10.433594 12.533203 C 12.656594 12.533203 14.710062 13.045328 16.164062 13.986328 C 16.335063 14.071328 16.506734 14.158203 16.677734 14.158203 C 17.104734 14.158203 17.360266 13.815672 17.447266 13.388672 C 17.447266 13.132672 17.276531 12.876078 17.019531 12.705078 C 15.137531 11.593078 12.914531 10.994141 10.519531 10.994141 z M 10.775391 14.007812 C 9.5783906 14.007812 8.4655156 14.178547 7.3535156 14.435547 C 7.0115156 14.435547 6.8417969 14.691203 6.8417969 15.033203 C 6.8417969 15.375203 7.0974531 15.632812 7.4394531 15.632812 C 7.5254531 15.632812 7.6961875 15.546875 7.8671875 15.546875 C 8.7221875 15.375875 9.7484531 15.205078 10.689453 15.205078 C 12.399453 15.205078 14.025594 15.632344 15.308594 16.402344 C 15.479594 16.487344 15.565328 16.572266 15.736328 16.572266 C 15.992328 16.572266 16.248922 16.402609 16.419922 15.974609 C 16.419922 15.632609 16.249125 15.546 16.078125 15.375 C 14.538125 14.52 12.742391 14.007812 10.775391 14.007812 z"
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
