import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from './searchbar';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);

  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== 'undefined') {
        if (window.scrollY > lastScrollY) { // scroll down
          setIsSticky(false);
        } else { // scroll up
          setIsSticky(true);
        }
        setLastScrollY(window.scrollY);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav 
      className={`container mx-auto items-stretch gap-10 px-5 pb-10 select-none top-0 w-full z-50 sm:p-6 p-3 animate-onload transition-all duration-300 ${isSticky ? 'sticky' : ''}`}
      style={{ 
        opacity: 1, 
        zIndex: 2,
      } as React.CSSProperties}
    >
      <div className="mx-auto px-4 sm:px-6 lg:px-8 bg-white/10 shadow-md py-4 rounded-xl select-none" style={{ opacity: 1, transform: "none", background: "hsl(30.5, 100%, 87.6%)" }}>
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <Link rel="canonical" href="/">
              <div className="relative w-[100px] h-[53px] flex items-center justify-start scale-160 origin-top-left bottom-4">
                <Image
                  src="https://9kelt5xnesj2nkgz.public.blob.vercel-storage.com/file-eYpF3jWI7j8924LUC1AR51hcMjnVNp.png"
                  alt="Ana Sayfa"
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  style={{ objectFit: 'contain' }}
                />
              </div>
            </Link>
          </div>
          <div className="hidden md:flex justify-end w-full">
            <ul className="flex items-center space-x-8">
              <li className="mt-2" style={{ opacity: 1, transform: "none" }}>
                <button onClick={toggleSearch} className="text-gray-800 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <Link
                  href='/'
                  aria-label="Ana Sayfa"
                  className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                  rel="canonical"
                >
                  <span>Ana Sayfa</span>
                </Link>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <Link
                  href='/iletisim'
                  aria-label="İletişim"
                  className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                  rel="canonical"
                >
                  <span>İletişim</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center">
            <ul className="space-y-2 mt-2 mr-4">
              <li style={{ opacity: 1, transform: "none" }}>
                <button onClick={toggleSearch} className="text-gray-800 hover:text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </button>
              </li>
            </ul>
            <button
              className="text-gray-800 relative w-6 h-6"
              onClick={toggleMobileMenu}
              aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
            >
              <span className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </span>
              <span className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
                <svg xmlns="https://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </span>
            </button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden top-0 left-0 right-0 rounded-b-xl mt-2 py-2 px-4">
            <ul className="space-y-2 mt-2 mr-4">
              <li>
                <Link
                  href="/"
                  className="block text-gray-800 hover:text-gray-700/75 font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                  onClick={toggleMobileMenu}
                  rel="canonical"
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="/iletisim"
                  className="block text-gray-800 hover:text-gray-700/75 font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                  onClick={toggleMobileMenu}
                  rel="canonical"
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
      {isSearchOpen && <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
    </nav>
  );
};