import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	return (
		<div className="grid grid-cols-1 items-center gap-5 pt-5 text-sm md:grid-cols-2">
			<Search />
			<SocialLinks />
		</div>
	);
};
