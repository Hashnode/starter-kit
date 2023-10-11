import Container from "./container";
import Button from "./button";
import Link from "next/link";
import { useAppContext } from "./contexts/appContext";
import { resizeImage } from "@starter-kit/utils/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";

const Header = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  const { publication } = useAppContext();
  const PUBLICATION_LOGO =
    publication.preferences.darkMode.logo || publication.preferences.logo;

  const navbarItems = publication.preferences.navbarItems;
  const visibleItems = navbarItems.slice(0, 3);
  const hiddenItems = navbarItems.slice(3);

  const navList = (
    <ul className="flex flex-row items-center gap-2 text-white">
      {visibleItems.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block max-w-[200px] whitespace-nowrap truncate p-2 transition-colors rounded-full text-ellipsis hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
          >
            {item.label}
          </a>
        </li>
      ))}

      {hiddenItems.length > 0 && (
        <li>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger>
              <a className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200">
                More
              </a>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="w-48 bg-white border border-gray-300 rounded shadow-md text-neutral-950 dark:text-white dark:border-neutral-800 dark:bg-neutral-900"
                align="end"
                sideOffset={5}
              >
                {hiddenItems.map((item) => (
                  <DropdownMenu.Item key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block p-2 truncate transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
                    >
                      {item.label}
                    </a>
                  </DropdownMenu.Item>
                ))}
              </DropdownMenu.Content>
            </DropdownMenu.Portal>
          </DropdownMenu.Root>
        </li>
      )}
    </ul>
  );

  return (
    <header className="py-10 border-b dark:border-neutral-800 bg-slate-950 dark:bg-neutral-900">
      <Container className="grid grid-cols-4 gap-5 px-5">
        <div className="flex flex-row items-center flex-1 col-span-2 gap-2 lg:col-span-1">
          {/* <div className="lg:hidden">
            <Button
              type="outline"
              label=""
              icon={<HamburgerSVG className="w-5 h-5 stroke-current" />}
              className="!px-3 !py-2 text-white border-transparent rounded-xl hover:bg-neutral-800"
            />
          </div> */}
          <h1>
            <Link
              href={baseUrl}
              aria-label={`Go to ${publication.title} home page`}
              className="flex flex-row items-center gap-3"
            >
              {PUBLICATION_LOGO ? (
                <>
                  <img
                    className="block w-32 md:w-40 shrink-0"
                    alt={publication.title}
                    src={resizeImage(PUBLICATION_LOGO, { w: 320, h: 80 })}
                  />
                  <span className="text-xl font-semibold text-white md:text-3xl">
                    Blog
                  </span>
                </>
              ) : (
                <span className="text-xl font-semibold text-white md:text-4xl">
                  {publication.title}
                </span>
              )}
            </Link>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-end col-span-2 gap-5 lg:col-span-3 text-slate-300">
          <nav className="hidden lg:block">{navList}</nav>
          <Button href={baseUrl} as="a" type="primary" label="Book a demo" />
        </div>
      </Container>
    </header>
  );
};

export default Header;
