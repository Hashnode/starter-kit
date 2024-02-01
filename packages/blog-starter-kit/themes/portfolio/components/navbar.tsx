import Link from 'next/link';
import { useAppContext } from './contexts/appContext';
import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	const { publication } = useAppContext()
	const navItems = publication.preferences.navbarItems
	return (
		<div className="w-full flex flex-col justify-center items-center gap-8 pt-4">
			<p className='text-xl text-center text-gray-700 dark:text-gray-400'>{publication.descriptionSEO ? publication.descriptionSEO : "Welcome to My Blog Space: Dive into a world of thoughts and ideas."}</p>
			{
				navItems.length > 0 && (
					<div className='flex justify-center w-[80%] md:w-[60%] gap-4 flex-wrap' >
						{
							navItems.map(({ id, label, type, url }) => (
								url 
								? (<Link className='outline outline-1 outline-primary-900 text-primary-900 rounded-full transition-all duration-150 hover:bg-primary-100 px-2 py-1 dark:text-primary-200 dark:outline-primary-900 dark:hover:text-primary-950' href={new URL(url).pathname} key={id}>{label}</Link>) 
								: (<p className='outline outline-1 outline-primary-900 text-primary-900 rounded-full transition-all duration-150 hover:bg-primary-100 px-2 py-1 dark:text-primary-200 dark:outline-primary-900' key={id}>{label}</p>)
							))
						}
					</div>
				)
			}
			

		</div>
	);
};
