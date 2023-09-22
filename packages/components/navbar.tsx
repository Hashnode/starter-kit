import Image from "next/image";
import Link from "next/link";
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from "./icons";

const Navbar = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-5 pt-5 text-sm md:grid-cols-2">
      <div className="relative col-span-1">
        <input
          type="text"
          placeholder="Search posts…"
          className="w-full px-4 py-2 border rounded-full bg-slate-50 border-slate-200 dark:bg-neutral-800 focus:bg-transparent dark:border-neutral-600 dark:hover:bg-neutral-950 dark:text-neutral-50"
        />
        {/* <div className="absolute left-0 z-10 flex flex-col items-start w-full p-1 mt-1 overflow-hidden text-left bg-white border rounded-lg shadow-lg dark:border-neutral-600 dark:bg-neutral-900 text-slate-900 dark:text-neutral-50 top-100">
            <a
              href="#"
              className="flex flex-col gap-1 px-4 py-2 focus:outline-1 hover:bg-slate-50 dark:hover:bg-neutral-800"
            >
              <strong>In eu nulla culpa culpa duis non sunt voluptate.</strong>
              <span className="text-slate-600 dark:text-neutral-300">
                Eu consectetur Lorem enim enim eiusmod magna eu ut occaecat
                ipsum. Proident nisi magna nulla anim minim veniam amet amet
                culpa ipsum officia magna.
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-1 px-4 py-2 focus:outline-1 hover:bg-slate-50 dark:hover:bg-neutral-800"
            >
              <strong>
                Incididunt eu fugiat non sunt elit ex mollit elit elit.
              </strong>
              <span className="text-slate-600 dark:text-neutral-300">
                Elit fugiat eu voluptate ullamco incididunt qui. Aliqua qui elit
                adipisicing et. Officia ullamco minim sint irure consectetur
                mollit est magna mollit ea.
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-1 px-4 py-2 focus:outline-1 hover:bg-slate-50 dark:hover:bg-neutral-800"
            >
              <strong>
                Est incididunt duis eu ullamco qui non Lorem officia.
              </strong>
              <span className="text-slate-600 dark:text-neutral-300">
                In pariatur anim est eiusmod aliqua quis duis minim labore ex
                non enim dolor nulla. Ipsum quis deserunt consectetur consequat
                elit proident nulla nisi id Lorem amet nostrud duis esse.
              </span>
            </a>
            <a
              href="#"
              className="flex flex-col gap-1 px-4 py-2 focus:outline-1 hover:bg-slate-50 dark:hover:bg-neutral-800"
            >
              <strong>Ea aliqua amet nisi culpa ad laborum dolore.</strong>
              <span className="text-slate-600 dark:text-neutral-300">
                Culpa aliqua commodo sunt aliqua eiusmod amet laboris. Sit dolor
                dolore officia mollit veniam proident sint enim occaecat
                voluptate ea excepteur aliquip tempor.
              </span>
            </a>
          </div> */}
      </div>
      <div className="flex flex-row justify-end col-span-1 gap-1 text-slate-600 dark:text-neutral-300">
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
