import Link from "next/link";
import Container from "./container";
import SocialLinks from "./social-links";
import { useAppContext } from "./contexts/appContext";

const Footer = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;
  const { publication } = useAppContext();
  const PUBLICATION_LOGO = publication.preferences.logo;
  return (
    <footer className="py-20 border-t dark:border-neutral-800 ">
      <Container className="px-5">
        {PUBLICATION_LOGO && <div className="flex flex-row justify-center w-full mb-20">
          <Link href={baseUrl} className="flex flex-row items-center gap-5">
            <img
              className="block w-40"
              src={PUBLICATION_LOGO}
            />
          </Link>
        </div>}
        <div className="grid w-full grid-cols-5 gap-5">
          <div className="grid grid-cols-4 col-span-3 gap-5">
            <div className="col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Stay in touch
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Contact us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Book a demo
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Newsletter
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Slack
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Resources
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Community
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Use Cases
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Source Code
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Blog
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Product
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Pricing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Integrations
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <p className="mb-2 font-semibold text-slate-600 dark:text-neutral-200">
                Other links
              </p>
              <ul className="flex flex-col gap-1 text-slate-700 dark:text-neutral-300">
                <li>
                  <a href="#" className="hover:underline">
                    Events
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Careers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Newsroom
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    About us
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col items-end col-span-2 gap-5 text-slate-600 dark:text-neutral-300">
            <SocialLinks />
            <p>&copy; 2023 Company Inc.</p>
            <p>
              <a href="#" className="hover:underline">
                Privacy Policy
              </a>{" "}
              ·{" "}
              <a href="#" className="hover:underline">
                Terms
              </a>
            </p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
