import Image from "next/image";
import Link from "next/link";
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from "./icons";

const Navbar = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-5 text-sm md:grid-cols-2">
      <nav className="flex flex-row items-center justify-start col-span-1 gap-1 py-5 overflow-x-auto font-medium text-slate-500 dark:text-neutral-300">
        <a
          className="block px-4 py-2 rounded-xl hover:bg-slate-100 bg-slate-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 text-slate-900 dark:text-neutral-50"
          href="#home"
        >
          Engineering
        </a>
        <a
          className="block px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-600"
          href="#about"
        >
          Design
        </a>
        <a
          className="block px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-600"
          href="#services"
        >
          Announcements
        </a>
        <a
          className="block px-4 py-2 rounded-xl hover:bg-slate-100 dark:hover:bg-neutral-600"
          href="#contact"
        >
          APIs
        </a>
      </nav>
      <div className="flex flex-row w-full col-span-1 gap-1 text-slate-600 dark:text-neutral-300">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Search posts…"
            className="w-full px-4 py-2 border rounded-full outline-none border-slate-200 dark:bg-neutral-800 hover:bg-slate-100 dark:border-neutral-600 dark:hover:bg-neutral-950 dark:text-neutral-50"
          />
        </div>
        <a
          href="#"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100"
        >
          <XSVG className="w-5 h-5 stroke-current" />
        </a>
        <a
          href="#"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100"
        >
          <GithubSVG className="w-5 h-5 stroke-current" />
        </a>
        <a
          href="#"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100"
        >
          <LinkedinSVG className="w-5 h-5 stroke-current" />
        </a>
        <a
          href="#"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100"
        >
          <HashnodeSVG className="w-5 h-5 stroke-current" />
        </a>
        <a
          href="#"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-600 border-slate-200 hover:bg-slate-100"
        >
          <RssSVG className="w-5 h-5 stroke-current" />
        </a>
      </div>
    </div>
  );
};

export default Navbar;
