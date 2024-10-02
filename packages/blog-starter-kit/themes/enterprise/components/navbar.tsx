import { Search } from './searchbar';
import { SocialLinks } from './social-links';

export const Navbar = () => {
	return (
		<div className="grid items-center grid-cols-[1fr_auto] gap-5 pt-5 text-sm">
			<Search />
			<SocialLinks />
		</div>
	);
};
