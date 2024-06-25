import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  return (
    <nav className=" top-0 w-full z-50 sm:p-6 p-3 animate-onload" style={{ opacity: 1, transform: "none" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white/10 backdrop-blur-md shadow-md py-4 rounded-xl select-none" style={{ opacity: 1, transform: "none", background: "hsl(30.98deg 100% 39.84% / 22%)" }}>
        <div className="flex items-center justify-between h-10">
          <div className="flex items-center">
            <Link href="./">
              <div style={{ position: 'relative', width: '100px', height: '53px', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', zoom: '1.6'}}>
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
              <li style={{ opacity: 1, transform: "none" }}>
                <Link
                  href='./'
                  aria-label="Ana Sayfa"
                  className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                >
                  <span>Ana Sayfa</span>
                </Link>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <Link
                  href='./kurumsal'
                  aria-label="Kurumsal"
                  className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                >
                  <span>Kurumsal</span>
                </Link>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <Link
                  href='./iletisim'
                  aria-label="İletişim"
                  className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                >
                  <span>İletişim</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="md:hidden flex items-center">
        <button 
          className="text-gray-800 relative w-6 h-6" 
          onClick={toggleMobileMenu}
          aria-label={isMobileMenuOpen ? "Menüyü Kapat" : "Menüyü Aç"}
        >
          <span className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-0 rotate-90' : 'opacity-100 rotate-0'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </span>
          <span className={`absolute inset-0 transition-all duration-300 ease-in-out ${isMobileMenuOpen ? 'opacity-100 rotate-0' : 'opacity-0 -rotate-90'}`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </span>
        </button>
      </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white/10 backdrop-blur-md shadow-md rounded-b-xl mt-2 py-2 px-4" style={{ backgroundColor: 'hsl(26.84deg 63.33% 88.24%)' }}>
            <ul className="space-y-2">
              <li>
                <Link
                  href="./"
                  className="block text-gray-800 hover:text-gray-700/75 font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                  onClick={toggleMobileMenu}
                >
                  Ana Sayfa
                </Link>
              </li>
              <li>
                <Link
                  href="./kurumsal"
                  className="block text-gray-800 hover:text-gray-700/75 font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                  onClick={toggleMobileMenu}
                >
                  Kurumsal
                </Link>
              </li>
              <li>
                <Link
                  href="./iletisim"
                  className="block text-gray-800 hover:text-gray-700/75 font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                  onClick={toggleMobileMenu}
                >
                  İletişim
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};