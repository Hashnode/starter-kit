import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { LinkedinSVG, XSVG, InstagramSVG } from './icons';

export const SocialLinks = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const hasSocialLinks = !Object.values(publication.links!).every((val) => val === '');

	return (
		<>
			<div
				className={`col-span-1 flex flex-row flex-wrap gap-1 text-slate-600 dark:text-neutral-300 md:flex-nowrap ${
					isSidebar ? 'justify-start' : 'justify-end'
				}`}
			>
				{hasSocialLinks && (
					<>
						{publication.links?.twitter && (
							<a
								href={publication.links.twitter}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Twitter, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<XSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.linkedin && (
							<a
								href={publication.links.linkedin}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on Linkedin, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<LinkedinSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						{publication.links?.instagram && (
							<a
								href={publication.links.instagram}
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Find us on instagram, external website, opens in new tab"
								className="flex flex-row items-center justify-center rounded-full border border-slate-200 p-2 hover:bg-slate-100 dark:border-neutral-800 dark:hover:bg-neutral-600"
							>
								<InstagramSVG className="h-5 w-5 stroke-current" />
							</a>
						)}
						
					</>
				)}
			</div>
		</>
	);
};
