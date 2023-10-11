import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from "./icons";
import { useAppContext } from "./contexts/appContext";

const SocialLinks = () => {
  const { publication } = useAppContext();
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <div className="flex flex-row justify-end col-span-1 gap-1 text-slate-600 dark:text-neutral-300">
      {publication.links.twitter && (
        <a
          href={publication.links.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find us on Twitter, external website, opens in new tab"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
        >
          <XSVG className="w-5 h-5 stroke-current" />
        </a>
      )}
      {publication.links.github && (
        <a
          href={publication.links.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find us on Github, external website, opens in new tab"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
        >
          <GithubSVG className="w-5 h-5 stroke-current" />
        </a>
      )}
      {publication.links.linkedin && (
        <a
          href={publication.links.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find us on Linkedin, external website, opens in new tab"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
        >
          <LinkedinSVG className="w-5 h-5 stroke-current" />
        </a>
      )}
      {publication.links.hashnode && (
        <a
          href={publication.links.hashnode}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Find us on Hashnode, external website, opens in new tab"
          className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
        >
          <HashnodeSVG className="w-5 h-5 stroke-current" />
        </a>
      )}
      <a
        href={`${baseUrl}/rss.xml`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Open blog XML Feed, opens in new tab"
        className="flex flex-row items-center justify-center p-2 border rounded-full dark:hover:bg-neutral-600 dark:border-neutral-800 border-slate-200 hover:bg-slate-100"
      >
        <RssSVG className="w-5 h-5 stroke-current" />
      </a>
    </div>
  );
};

export default SocialLinks;
