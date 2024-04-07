import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	return (
		<div className="grid grid-cols-1 max-w-7xl mx-auto w-full items-center gap-5 pt-5 text-sm px-4 sm:px-6 lg:px-8 md:grid-cols-2">
			<Search />
			<SocialLinks />
		</div>
	);
};
