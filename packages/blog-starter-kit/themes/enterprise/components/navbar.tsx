import Search from "./searchbar";
import SocialLinks from "./social-links";

const Navbar = () => {
  return (
    <div className="grid items-center grid-cols-1 gap-5 pt-5 text-sm md:grid-cols-2">
      <Search />
      <SocialLinks />
    </div>
  );
};

export default Navbar;
