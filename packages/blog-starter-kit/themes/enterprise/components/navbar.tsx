import { Search } from './searchbar';

export const Navbar = () => {
	return (
		<div className="grid grid-cols-1 items-center gap-5 pt-5 text-sm md:grid-cols-2">
			<Search />
            <div class="text-center">
    
    <h1 class="text-5xl text-gray-900 font-semibold mt-2 mb-5">Temizmama Blog</h1>
    <p class="text-purple-500 text-lg max-w-xl mx-auto">Sevimli dostlarımız için en taze mamayı sunan Temizmama aracılığıyla kedi &amp; köpek bakımı ile ilgili bilinmesi gerekenlerin hepsi bu sayfada!</p>
  </div>
		</div>
	);
};
