import { Search } from './searchbar';

export const Navbar = () => {
	return (
		<div className="items-center gap-5 pt-5 text-sm  lg:hidden">
			<Search />
			{/* <SocialLinks /> */}
		</div>
	);
};
