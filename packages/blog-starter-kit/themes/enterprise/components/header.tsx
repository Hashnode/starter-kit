import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useRef, useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import { PublicationLogo } from './publication-logo';
import PublicationSidebar from './sidebar';
import { AnimatePresence, motion } from 'framer-motion'

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

	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
	let timeoutRef = useRef<number | null>(null)

	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	const headerLinks = [
		{id: 1, url: '/#how-it-works', label: 'How It Works'},
		{id: 2, url: '/#features', label: 'Features'},
		{id: 3, url: '/#reviews', label: 'Reviews'},
		{id: 4, url: '/#pricing', label: 'Pricing'},
		{id: 5, url: '/#faqs', label: 'FAQs'},
		{id: 6, url: '/blog', label: 'Blog'},
	]

	const navList = (
		<ul className="flex flex-row items-center gap-4 text-gray-700 lg:gap-4 xl:gap-6">
			{headerLinks.map((item, index) => (
				<li key={item.url} className='relative px-3 py-2'>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="-mx-3 -my-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition-colors delay-150 hover:text-gray-900 hover:delay-0"
						onMouseEnter={() => {
							if (timeoutRef.current) {
								window.clearTimeout(timeoutRef.current)
							}
							setHoveredIndex(index)
						}}
						onMouseLeave={() => {
							timeoutRef.current = window.setTimeout(() => {
								setHoveredIndex(null)
							}, 200)
						}}
					>
					<AnimatePresence>
						{hoveredIndex === index && (
							<motion.span
								className="absolute inset-0 rounded-lg bg-gray-100"
								layoutId="hoverBackground"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1, transition: { duration: 0.15 } }}
								exit={{
									opacity: 0,
									transition: { duration: 0.15 },
								}}
							/>
						)}
      		</AnimatePresence>
					<span className="relative z-10">{item.label}</span>
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<button className="transition-200 block rounded-lg p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
								More
							</button>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
								align="end"
								sideOffset={5}
							>
								{headerLinks.map((item) => (
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
		<header className="py-8 dark:border-neutral-800 dark:bg-neutral-900">
			<Container className="flex justify-center md:justify-between max-w-7xl px-4 lg:px-8">
				<div className="flex justify-between mx-auto w-full lg:mx-0 lg:w-3/4 lg:justify-start">
					<div className='flex items-center gap-10'>
						<div>
							<PublicationLogo />
						</div>
						<div>
							<nav className="hidden lg:flex flex-col gap-4">{navList}</nav>
						</div>
					</div>
					<div className="lg:hidden">
						<Button
							type="outline"
							label=""
							icon={<HamburgerSVG className="h-5 w-5 stroke-current" />}
							className="rounded-lg border-transparent !px-3 !py-2 dark:text-white hover:bg-slate-900 hover:text-white dark:hover:bg-neutral-800"
							onClick={toggleSidebar}
						/>

						{isSidebarVisible && (
							<PublicationSidebar navbarItems={navbarItems} toggleSidebar={toggleSidebar} />
						)}
					</div>
				</div>

				<div className="flex items-center gap-6">
					<Button href={baseUrl} as="a" type="secondary" label="Get Started" className="hidden lg:block" />
				</div>
			</Container>
		</header>
	);
};
