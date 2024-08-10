import { resizeImage } from '@starter-kit/utils/image';
import Image from 'next/image';
import Link from 'next/link';
import { PublicationFragment } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { useThemeContext } from './contexts/themeContext';

const getPublicationLogo = (publication: PublicationFragment, theme?: string) => {
	switch (theme) {
		case 'light':
			return publication.preferences.logo;
		case 'dark':
			return publication.preferences.darkMode?.logo;
		default:
			return publication.preferences.logo;
	}
};

export const PublicationLogo = ({ isSidebar }: { isSidebar?: boolean }) => {
	const { publication } = useAppContext();
	const { theme } = useThemeContext();
	const PUBLICATION_LOGO = getPublicationLogo(publication, theme);

	return (
		<h1 className="relative w-full">
			<Link
				href={'/'}
				aria-label={`${publication.title} blog home page`}
				className="flex flex-row items-center justify-center gap-3"
			>
				{PUBLICATION_LOGO ? (
					<>
						<Image
							className="block w-32 shrink-0 md:w-40"
							alt={publication.title}
							src={resizeImage(PUBLICATION_LOGO, { w: 320, h: 80 })}
							width={320}
							height={80}
						/>
					</>
				) : (
					<span
						className={`block text-2xl font-semibold ${
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
