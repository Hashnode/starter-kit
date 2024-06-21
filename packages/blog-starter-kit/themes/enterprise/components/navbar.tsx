import React, { useState } from 'react';
import Link from 'next/link';

export const Navbar = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);

  const handleSearchOpen = () => setIsSearchVisible(true);
  const handleSearchClose = () => setIsSearchVisible(false);

  return (
    <>
      <nav className="absoulute top-0 w-full z-50 sm:p-6 p-3 animate-onload" style={{ opacity: 1, transform: "none" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-md shadow-md py-4 rounded-xl" style={{ opacity: 1, transform: "none", background: "hsl(30.98deg 100% 39.84% / 22%)" }}>
          <div className="flex items-center justify-between h-10">
            <div className="flex items-center">
              <Link href="./">
              <img className="max-h-10 max-w-full object-contain" src="https://9kelt5xnesj2nkgz.public.blob.vercel-storage.com/file-eYpF3jWI7j8924LUC1AR51hcMjnVNp.png" alt="Ana Sayfa"/>
              </Link>
            </div>
            <div className="hidden md:flex justify-end w-full">
              <ul className="flex items-center space-x-8">
                {/* <li style={{ opacity: 1, transform: "none" }}>
                  <a className="text-gray-800 hover:text-gray-700/75 cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navigation-search__icon">
                      <circle cx="11" cy="11" r="8"></circle>
                      <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                    </svg>
                  </a>
                </li>
                */}
                <li style={{ opacity: 1, transform: "none" }}>
                  <Link
                    href={'./'}
                    aria-label={`Ana Sayfa`}
                    className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  >
                    <span>
                      Ana Sayfa
                    </span>
                  </Link>
                </li>
                <li style={{ opacity: 1, transform: "none" }}>
                  <Link
                    href={'./kurumsal'}
                    aria-label={`kurumsal`}
                    className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  >
                    <span>
                      Kurumsal
                    </span>
                  </Link>
                </li>
                <li style={{ opacity: 1, transform: "none" }}>
                  <Link
                    href={'./iletisim'}
                    aria-label={`İletişim`}
                    className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  >
                    <span>
                      İletişim
                    </span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="hidden md:block" style={{ opacity: 1, transform: "none" }}></div>
            <div className="md:hidden flex items-center">
              <button className="text-white" >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </nav>
      </>
  );
};
