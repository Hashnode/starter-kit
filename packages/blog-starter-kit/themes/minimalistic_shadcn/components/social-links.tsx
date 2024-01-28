import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { GithubSVG, HashnodeSVG, LinkedinSVG, RssSVG, XSVG } from './icons';

export const SocialLinks = () => {
	const { publication } = useAppContext();

	return (
		<div className="flex flex-row flex-wrap justify-end col-span-1 gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap">
			{publication.links?.twitter && (
				<a
					href={publication.links.twitter}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Find us on Twitter, external website, opens in new tab"
					className="flex flex-row items-center justify-center p-2 border rounded-full border-slate-200 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
				>
					<XSVG className="w-5 h-5 stroke-current" />
				</a>
			)}
			{publication.links?.github && (
				<a
					href={publication.links.github}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Find us on Github, external website, opens in new tab"
					className="flex flex-row items-center justify-center p-2 border rounded-full border-slate-200 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
				>
					<GithubSVG className="w-5 h-5 stroke-current" />
				</a>
			)}
			{publication.links?.linkedin && (
				<a
					href={publication.links.linkedin}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Find us on Linkedin, external website, opens in new tab"
					className="flex flex-row items-center justify-center p-2 border rounded-full border-slate-200 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
				>
					<LinkedinSVG className="w-5 h-5 stroke-current" />
				</a>
			)}
			{publication.links?.hashnode && (
				<a
					href={publication.links.hashnode}
					target="_blank"
					rel="noopener noreferrer"
					aria-label="Find us on Hashnode, external website, opens in new tab"
					className="flex flex-row items-center justify-center p-2 border rounded-full border-slate-200 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
				>
					<HashnodeSVG className="w-5 h-5 stroke-current" />
				</a>
			)}
			<Link
				prefetch={false}
				href={`/rss.xml`}
				target="_blank"
				rel="noopener noreferrer"
				aria-label="Open blog XML Feed, opens in new tab"
				className="flex flex-row items-center justify-center p-2 border rounded-full border-slate-200 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
			>
				<RssSVG className="w-5 h-5 stroke-current" />
			</Link>
		</div>
	);
};
