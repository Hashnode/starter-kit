import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';
import Link from 'next/link';
import { useTheme } from './contexts/themeContext';
import MoonSVG from './icons/svgs/moon';
import SunSVG from './icons/svgs/sun';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}
export const Header = () => {
	const { publication } = useAppContext();
	const {toggleTheme} = useTheme()

	return (
		<header className="border-b mb-10 py-4 md:py-10 dark:border-neutral-800">
			<Container className="flex flex-col md:flex-row items-center justify-between
			 gap-5 px-8">
				<Link href='/'><span className='text-2xl font-bold flex items-center gap-2'>{publication.author.profilePicture && <img className='w-8 rounded-full' src = {publication.author.profilePicture} />}{publication.author.username}</span></Link>
				
				<div className='flex items-center gap-4'>
				<SocialLinks/>
				<button onClick={toggleTheme} className=' p-2 rounded-lg w-8 outline outline-1 dark:text-white'>
					<div className='block dark:hidden '> <MoonSVG/> </div>
					<div className='hidden dark:block'><SunSVG/></div>
				</button>
				</div>
			</Container>
		</header>
	);
};
