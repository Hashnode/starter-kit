"use client";
import {
  BackpackIcon,
  EnvelopeClosedIcon,
  GitHubLogoIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  Pencil1Icon,
  Pencil2Icon,
  PersonIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import { ModeToggle } from "../ThemeToggle";
import { usePathname } from "next/navigation";

const Links = [
  {
    id: 1,
    label: "home",
    icon: <HomeIcon className=" w-6 h-6 " width={12} />,
    url: "/",
    isRedirect: false,
  },
  {
    id: 2,
    label: "blogs",
    icon: <Pencil1Icon className=" w-6 h-6 " width={12} />,
    url: "/blogs",
    isRedirect: false,
  },

  // {
  //   id: 3,
  //   label: "search",
  //   icon: <MagnifyingGlassIcon className=" w-6 h-6 " width={12} />,
  //   url: "/search",
  //   isRedirect: false,
  // },
  // {
  //   id: 6,
  //   label: "shop",
  //   isRedirect: false,
  //   url: "/shop",
  //   icon: <BackpackIcon className=" w-6 h-6 " width={12} />,
  // },
];

function Nav() {
  const pathname = usePathname();

  return (
    <nav className=" z-30 fixed bottom-1  flex w-full   justify-center rounded-[999px]   ">
      <div className=" h-16 shadow-[0 25px 60px rgba(0, 0, 0, 0.12)] flex items-center dark:bg-neutral-900 bg-neutral-100 justify-center gap-8  py-2 px-6 rounded-full  ">
        {Links.map((e) => (
          <Link
            data-tooltip
            title={e.label}
            key={e.id}
            className={`flex  items-center justify-center rounded-3xl ${
              pathname === e.url
                ? " border-2 border-neutral-700 dark:border-neutral-500 "
                : ""
            }`}
            // className="flex h-[15px] w-[15px] items-center justify-center rounded-3xl"
            href={e.url}
            target={e.isRedirect ? "_blank" : "_self"}
          >
            <div className="  rounded-full dark:bg-neutral-900  p-2 dark:text-neutral-600 hover:bg-neutral-300 hover:text-black">
              {e.icon}
            </div>
          </Link>
        ))}
        <ModeToggle />
      </div>
    </nav>
  );
}

export default Nav;
