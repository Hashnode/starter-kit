import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from './icons';

export const SocialLinks = ({ isSidebar }: { isSidebar?: boolean }) => {
  const { publication } = useAppContext();
  
  // publication.links'in varlığını kontrol et
  const links = publication?.links || {};
  
  // Boş olmayan link değerlerini kontrol et
  const hasSocialLinks = Object.values(links).some((val) => val && val !== '');

  return (
    <>
      <div
        className={`col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
          isSidebar ? 'justify-start' : 'justify-end'
        }`}
      >
        {hasSocialLinks && (
          <>
            {links.twitter && (
              <a
                href={links.twitter}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Twitter, external website, opens in new tab"
                className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
              >
                <XSVG className="h-5 w-5 stroke-current" />
              </a>
            )}
            {links.github && (
              <a
                href={links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Github, external website, opens in new tab"
                className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
              >
                <GithubSVG className="h-5 w-5 stroke-current" />
              </a>
            )}
            {links.linkedin && (
              <a
                href={links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Linkedin, external website, opens in new tab"
                className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
              >
                <LinkedinSVG className="h-5 w-5 stroke-current" />
              </a>
            )}
            {links.hashnode && (
              <a
                href={links.hashnode}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Find us on Hashnode, external website, opens in new tab"
                className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600 "
              >
                <HashnodeSVG className="h-5 w-5 stroke-current" />
              </a>
            )}
          </>
        )}

        <Link
          prefetch={false}
          href={`/rss.xml`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Open blog XML Feed, opens in new tab"
          title="Rss"
          className="flex flex-row items-center justify-center rounded-full dark:border-neutral-800 dark:hover:bg-neutral-600 transition hover:text-gray-700/75"
        >
          <RssSVG className="h-6 w-6 stroke-current" />
        </Link>
      </div>
    </>
  );
};