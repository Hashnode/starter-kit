import Link from 'next/link';
import { useAppContext } from './contexts/appContext';

export const Navbar = () => {
	const { publication } = useAppContext()
	const navItems = publication.preferences.navbarItems
	return (
		<div className="flex items-center gap-4">

			{
				navItems.length > 0 && (
					<div className=' hidden item-center gap-4 xl:flex ' >
						{
							navItems.slice(0,10).map(({ id, label, url }) => (
								url 
								? (<Link className=' hover:underline rounded-md px-2 py-1 dark:text-white' href={new URL(url).pathname} key={id}>{label}</Link>) 
								: (<p key={id}>{label}</p>)
							))
						}
					</div>
				)
			}

			
		</div>
	);
};
