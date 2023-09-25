import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from "./icons";

const SocialLinks = () => {
  return (
    <div className="flex flex-row justify-end col-span-1 gap-1 text-slate-600 dark:text-neutral-300">
      <a
        href="#"
        className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
      >
        <XSVG className="w-5 h-5 stroke-current" />
      </a>
      <a
        href="#"
        className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
      >
        <GithubSVG className="w-5 h-5 stroke-current" />
      </a>
      <a
        href="#"
        className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
      >
        <LinkedinSVG className="w-5 h-5 stroke-current" />
      </a>
      <a
        href="#"
        className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
      >
        <HashnodeSVG className="w-5 h-5 stroke-current" />
      </a>
      <a
        href="#"
        className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
      >
        <RssSVG className="w-5 h-5 stroke-current" />
      </a>
    </div>
  );
};

export default SocialLinks;
