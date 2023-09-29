import Container from "./container";
import Button from "./button";
import Link from "next/link";
// import HamburgerSVG from "./icons/svgs/HamburgerSVG";
import { useAppContext } from "./contexts/appContext";
import { resizeImage } from "@starter-kit/utils/image";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import HamburgerSVG from "./icons/svgs/HamburgerSVG";
import { NewsletterPlusSVG } from "./icons";

const PersonalHeader = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  const { publication } = useAppContext();
  const PUBLICATION_LOGO =
    publication.preferences.darkMode.logo || publication.preferences.logo;
  // const navbarItems = publication.preferences.navbarItems.map((item) => {
  //   return (
  //     <li key={item.url}>
  //       <a
  //         href={item.url}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //         className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
  //       >
  //         {item.label}
  //       </a>
  //     </li>
  //   );
  // });

  const navbarItems = publication.preferences.navbarItems;
  const visibleItems = navbarItems.slice(0, 2);
  const hiddenItems = navbarItems.slice(2);

  const navList = (
    <ul className="flex flex-row items-center gap-4 text-xs font-semibold tracking-tight uppercase list-none text-neutral-600 dark:text-neutral-300">
      {visibleItems.map((item) => (
        <li key={item.url}>
          <a
            href={item.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            {item.label}
          </a>
        </li>
      ))}

      {hiddenItems.length > 0 && (
        <li>
          <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
              <a href="#" className="hover:underline">
                More
              </a>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
              <DropdownMenu.Content
                className="flex flex-col items-stretch gap-1 text-xs font-semibold tracking-tight uppercase bg-white border rounded-lg shadow-xl text-neutral-600 dark:text-neutral-300"
                sideOffset={5}
                align="end"
              >
                {hiddenItems.map((item) => (
                  <DropdownMenu.Item key={item.url}>
                    <a
                      href={item.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full p-2 hover:underline"
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
    <header className="grid items-center grid-cols-2 gap-5 ">
      <div className="col-span-full md:col-span-1">
        <h1>
          <Link
            className="flex flex-row items-center gap-2 text-lg font-bold leading-tight tracking-tight text-black dark:text-white"
            href="/"
          >
            <img
              className="block w-8 h-8 rounded-full fill-current"
              src="https://pbs.twimg.com/profile_images/1655035919823679498/xkgrwi5W_400x400.jpg"
            />
            {publication.title}
          </Link>
        </h1>
      </div>
      <div className="flex flex-row items-center justify-between gap-4 md:justify-end col-span-full md:col-span-1">
        <nav>
          {/* <ul className="flex flex-row items-center gap-4 text-xs font-semibold tracking-tight uppercase list-none text-neutral-600 dark:text-neutral-300">
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Collab
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                More
              </a>
            </li>
          </ul> */}
          {navList}
        </nav>
        <Button
          type="outline"
          className="!p-2"
          icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
        />
      </div>
    </header>
  );
};

export default PersonalHeader;
