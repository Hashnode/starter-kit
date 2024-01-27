import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	return (
		<div className="grid grid-cols-1 items-center gap-4 pt-4 text-sm md:grid-cols-3">
			<div></div>
			<Search />
			<SocialLinks />
		</div>
	);
};
