import Container from "./container";
import Button from "./button";
import Link from "next/link";
import HamburgerSVG from "./icons/svgs/HamburgerSVG";
import { useAppContext } from "./contexts/appContext";
import { resizeImage } from "@starter-kit/utils/image";

const Header = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  const { publication } = useAppContext();
  const PUBLICATION_LOGO =
    publication.preferences.darkMode.logo || publication.preferences.logo;
  const navbarItems = publication.preferences.navbarItems.map((item) => {
    return (
      <li>
        <a
          key={item.url}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
        >
          {item.label}
        </a>
      </li>
    );
  });

  return (
    <header className="py-10 border-b dark:border-neutral-800 bg-slate-950 dark:bg-neutral-900">
      <Container className="flex flex-row items-center gap-5 px-5">
        <div className="flex flex-row items-center flex-1 gap-2">
          <div className="lg:hidden">
            <Button
              type="outline"
              label=""
              icon={<HamburgerSVG className="w-5 h-5 stroke-current" />}
            />
          </div>
          <h1>
            <Link
              href={baseUrl}
              className="flex flex-row items-center gap-2 md:gap-5"
            >
              <img
                className="block w-20 md:w-40"
                src={resizeImage(PUBLICATION_LOGO, { w: 320, h: 80 })}
              />
              {/* <span className="text-xl font-semibold text-white md:text-4xl">
                Blog
              </span> */}
            </Link>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-end col-span-1 gap-5 text-slate-300">
          <nav className="hidden lg:block">
            <ul className="flex flex-row items-center gap-2">
              {navbarItems}
            </ul>
          </nav>
          <Button href={baseUrl} type="primary" label="Book a demo" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
