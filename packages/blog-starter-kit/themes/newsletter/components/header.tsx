import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import Link from 'next/link';
import { Navbar } from './navbar';
import { useTheme } from './contexts/themeContext';
import HamburgerSVG from './icons/svgs/HamburgerSVG';
import CroseSVG from './icons/svgs/CrossSVG';
import MoonSVG from './icons/svgs/MoonSVG';
import SunSVG from './icons/svgs/SunSVG';

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
	
	const toggleSidebar = () => {
		setIsSidebarVisible((prevVisibility) => !prevVisibility);
	};

	const navList = (
		<div className='fixed top-0 left-0 h-[100vh] w-[100vw] dark:text-white dark:bg-neutral-900 '>
		<button onClick={toggleSidebar} className='text-neutral-900 z-[150] fixed top-4 right-4 dark:text-white'><CroseSVG/></button>
		<ul className="flex flex-col justify-center  shadow-md h-full w-full py-16 px-6 items-center gap-2 fixed top-0 left-0 fade-in-fast z-[100]">
			{navbarItems.map((item) => (
				<li key={item.url}>
					<a
						href={item.url}
						target="_blank"
						rel="noopener noreferrer"
						className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-neutral-900 dark:hover:bg-neutral-800 dark:hover:text-white"
					>
						{item.label}
					</a>
				</li>
			))}

			
		</ul>
		</div>
	);
	const {theme , toggleTheme} = useTheme()
	return (
		<header className={`${theme} py-4 md:py-10 dark:border-neutral-800 dark:bg-neutral-900`}>
			<Container className="flex flex-row items-center justify-between
			 gap-5 px-4 md:px-8 dark:bg-neutral-900">
				<Link href='/'><span className='text-2xl font-bold flex items-center gap-2 dark:text-white'>{publication.author.profilePicture && <img className='w-8 rounded-full ' src = {publication.author.profilePicture} />}{publication.author.username}</span></Link>
				
				<Navbar/>
				<div className='flex items-center gap-4'>
				<button onClick={toggleSidebar} className='block xl:hidden w-6 dark:text-white'>
					<HamburgerSVG />
					
				</button>
			
			
				{theme && <button onClick={toggleTheme} className=' p-2 rounded-full moon-turn dark:text-white  '>
					{theme === "light" && <div className='moon-turn'><MoonSVG/></div>}
					{theme === "dark" &&  <div className='sun-turn'><SunSVG/></div>}
				</button>}
				</div>
				
			</Container>
			{
				isSidebarVisible && navList
			}
		</header>
	);
};
