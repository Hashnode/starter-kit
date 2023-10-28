import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { twJoin } from 'tailwind-merge';

import { PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { lightOrDark } from '../utils/commonUtils';
import PublicationLogo from './publication-logo';
import HeaderBlogSearch from './header-blog-search';
import PublicationSocialLinks from './publication-social-links';
import PublicationNavLinks from './publication-nav-links';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);
	const headerColor = publication.headerColor;
	const isUserThemeDark = headerColor ? lightOrDark(headerColor) === 'dark' : false;
	const navList = (
		<ul className="flex flex-row items-center gap-2 text-white">
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
					>
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="transition-200 block rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
								More
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
								align="end"
								sideOffset={5}
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item asChild key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="transition-200 block truncate p-2 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
		<div className="container mx-auto px-2 md:px-4 2xl:px-10">
			<div className="relative z-40 flex flex-row items-center justify-between pb-2 pt-8 md:mb-4">
				<div className="flex flex-row items-center py-1">
					<div className="hidden md:block">
						<PublicationLogo publication={publication} size="lg" withProfileImage />
					</div>
				</div>

				<div className={twJoin('flex flex-row items-center',
            		isUserThemeDark ? 'text-white' : publication.headerColor ? 'text-black' : 'dark:text-white',
         		 )}>
          			<HeaderBlogSearch isUserThemeDark={isUserThemeDark} publication={publication} />
          		</div>
			</div>

			{/* Logo for mobile view */}
			<div className="mx-auto my-5 flex w-2/3 flex-row items-center justify-center md:hidden">
        		<PublicationLogo publication={publication} size="xl" />
      		</div>

			<div className="blog-sub-header" data-testid="blog-sub-header">
				{/* Desktop */}
				<div className="justify-betweem mx-0 mb-2 hidden w-full flex-row items-center md:flex">
					<PublicationSocialLinks links={publication.links} headerColor={publication.headerColor} />
				</div>
				{/* Mobile view */}
				<div className="mb-2 flex w-full flex-col items-center md:hidden">
					<PublicationSocialLinks links={publication.links} headerColor={publication.headerColor} />
				</div>
     		</div>

			<div className="relative mt-8 hidden flex-row items-center justify-center overflow-hidden text-base md:flex"
          		data-tom="hidden md:flex relative flex-row items-center justify-center overflow-hidden text-base mt-8">
          		<PublicationNavLinks
					isHome={true}
					currentActiveMenuItemId={null}
					enabledPages={publication.preferences?.enabledPages}
					navbarItems={publication.preferences?.navbarItems || []}
					headerColor={publication.headerColor}
          		/>
        	</div>
		</div>
	);
};
