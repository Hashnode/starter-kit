import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { useAppContext } from './contexts/appContext';

export const PublicationLogo = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.darkMode?.logo || publication.preferences.logo;

	return (
		<h1>
			<Link
				href={'/'}
				aria-label={`${publication.title} blog home page`}
				className="flex flex-row items-center gap-3"
			>
				{PUBLICATION_LOGO ? (
					<>
						<img
							className="block w-32 shrink-0 md:w-40"
							alt={publication.title}
							src={resizeImage(PUBLICATION_LOGO, { w: 320, h: 80 })}
						/>
						<span className="text-xl font-semibold text-white md:text-3xl">Blog</span>
					</>
				) : (
					<span
						className={`text-xl font-semibold ${
							isSidebar ? 'text-black dark:text-white' : 'text-white md:text-4xl'
						}`}
					>
						{publication.title}
					</span>
				)}
			</Link>
		</h1>
	);
};
