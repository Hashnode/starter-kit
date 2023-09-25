import Container from "./container";
import Button from "./button";
import Link from "next/link";
import { LinkedinSVG } from "./icons";
import HamburgerSVG from "./icons/svgs/HamburgerSVG";

const Header = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

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
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1695624897726/JYChHGzvT.png?auto=format"
              />
              <span className="text-xl font-semibold text-white md:text-4xl">
                Blog
              </span>
            </Link>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-end col-span-1 gap-5 text-slate-300">
          <nav className="hidden lg:block">
            <ul className="flex flex-row items-center gap-2">
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </nav>
          <Button type="primary" label="Book a demo" />
        </div>
      </Container>
      <div className="fixed h-full left-0 w-2/3 flex flex-col gap-5 p-5 bg-white dark:bg-neutral-900 border-r dark:border-neutral-800 shadow-xl top-0 z-[1000]">
        <div className="flex flex-row justify-end">
          <Button type="outline" label="Collapse" />
        </div>
        <nav className="w-full text-slate-900 dark:text-neutral-300">
          <ul className="flex flex-col items-stretch w-full gap-2">
            <li>
              <a
                href="#"
                className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
              >
                Announcements
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
              >
                Engineering
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
              >
                Design
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white transition-200"
              >
                Changelog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
