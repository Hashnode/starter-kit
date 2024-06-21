import { Search } from "./searchbar";
import Link from 'next/link';
import { PublicationLogo } from './publication-logo';

export const Navbar = () => {
  return (
      <nav className="fixed bottom-0 w-full z-50 sm:p-6 p-3 animate-onload" style={{ opacity: 1, transform: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-md shadow-md py-4 rounded-xl" style={{ opacity: 1, transform: "none" }}>
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <Link href="./">
                <PublicationLogo />
              </Link>
            </div>
            <div className="hidden md:flex justify-end w-full">
              <ul className="flex items-center space-x-8">
                <li style={{ opacity: 1, transform: "none" }}>
                  <a className="text-gray-800 hover:text-gray-700/75 cursor-pointer">Ana Sayfa</a>
                </li>
                <li style={{ opacity: 1, transform: "none" }}>
                  <a className="text-gray-800 hover:text-gray-700/75 cursor-pointer">İletişim</a>
                </li>
              </ul>
            </div>
            <div className="hidden md:block" style={{ opacity: 1, transform: "none" }}></div>
            <div className="md:hidden flex items-center">
              <button className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
          <Search />
        </div>
      </nav>
  );
};
