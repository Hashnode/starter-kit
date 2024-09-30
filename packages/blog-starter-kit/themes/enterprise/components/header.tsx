import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';
import { SocialLinks } from './social-links';
import TopBar from './top-bar';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const [isSidebarVisible, setIsSidebarVisible] = useState<boolean>();
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	const navList = (
		<ul className="flex flex-row items-center gap-2 text-white">
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
		<header className="sticky top-0 z-10 bg-white dark:bg-neutral-900">
			<TopBar />
			<nav className="border-b p-4 dark:border-neutral-800">
				<Container className="grid w-full grid-cols-6 gap-5 px-5">
					<div className="col-span-2 flex flex-1 flex-row items-center gap-2 lg:col-span-2">
						<div className="lg:hidden">
							<Button
								type="outline"
								label=""
								icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
								className="rounded-xl border-transparent !px-3 !py-2 text-slate-500 hover:bg-slate-900 dark:hover:bg-neutral-800"
								onClick={toggleSidebar}
							/>

							{isSidebarVisible && (
								<PublicationSidebar navbarItems={navbarItems} toggleSidebar={toggleSidebar} />
							)}
						</div>
						<div className="block">
							<PublicationLogo />
						</div>
					</div>
					<div className="col-span-3 grid w-full grid-cols-1">
						<SocialLinks />
					</div>
				</Container>
			</nav>
		</header>
	);
};
