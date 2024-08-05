import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from './searchbar';
import { useRouter } from 'next/router';
import { StaticImport } from 'next/dist/shared/lib/get-img-props';

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isCatMenuOpen, setIsCatMenuOpen] = useState(false);
  const [isDogMenuOpen, setIsDogMenuOpen] = useState(false);
  
  const catMenuRef = useRef<HTMLDivElement>(null);
  const dogMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  const toggleCatMenu = () => {
    setIsCatMenuOpen(!isCatMenuOpen);
    setIsDogMenuOpen(false);
  };
  const toggleDogMenu = () => {
    setIsDogMenuOpen(!isDogMenuOpen);
    setIsCatMenuOpen(false);
  };

  const closeAllMenus = () => {
    setIsCatMenuOpen(false);
    setIsDogMenuOpen(false);
  };

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

    const handleClickOutside = (event: MouseEvent) => {
      if (catMenuRef.current && !catMenuRef.current.contains(event.target as Node)) {
        setIsCatMenuOpen(false);
      }
      if (dogMenuRef.current && !dogMenuRef.current.contains(event.target as Node)) {
        setIsDogMenuOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      document.addEventListener('mousedown', handleClickOutside);

      // cleanup function
      return () => {
        window.removeEventListener('scroll', controlNavbar);
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    // Close menus on route change
    router.events.on('routeChangeStart', closeAllMenus);
    return () => {
      router.events.off('routeChangeStart', closeAllMenus);
    };
  }, [router]);

  const catMenuItems = [
    { name: "Kedi Bakımı", url: "/kedi-bakimi" },
    { name: "Kedi Beslenmesi", url: "/kedi-beslenmesi" },
    { name: "Kedi Diğer", url: "/kedi-diger" },
    { name: "Kedi Irkları", url: "/kedi-irklari" },
    { name: "Kedi Sağlığı", url: "/kedi-sagligi" }
  ];

  const dogMenuItems = [
    { name: "Köpek Bakımı", url: "/kopek-bakimi" },
    { name: "Köpek Beslenmesi", url: "/kopek-beslenmesi" },
    { name: "Köpek Diğer", url: "/kopek-diger" },
    { name: "Köpek Irkları", url: "/kopek-irklari" },
    { name: "Köpek Sağlığı", url: "/kopek-sagligi" }
  ];

  const renderDropdownMenu = (items: any[], imageSrc: string | StaticImport, altText: string, description: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | Promise<React.AwaitedReactNode> | null | undefined) => (
    <div className="fixed left-1/2 transform -translate-x-1/2 w-3/5 bg-white bg-opacity-70 backdrop-filter backdrop-blur-md shadow-lg rounded-xl mt-2 py-6 px-8 z-50">
      <div className="flex flex-col">
        <div className="mb-4 font-bold text-end mr-12">{description}</div>
        <div className="flex">
          <div className="w-1/2 pr-4"
               style={{
                marginTop: '-2.5rem'
                }}>
            <Image
              src={imageSrc}
              alt={altText}
              width={300}
              height={200}
              objectFit="cover"
              className="rounded-lg"
            />
          </div>
          <div className="w-1/2 pl-4">
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index}>
                  <Link 
                    href={item.url} 
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={closeAllMenus}
                  >
                    {item.name}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <nav 
      className={`container mx-auto items-stretch gap-10 px-5 pb-10 select-none top-0 w-full z-50 p-3 animate-onload transition-all duration-300 ${isSticky ? 'sticky' : ''}`}
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
                <button
                  onClick={toggleCatMenu}
                  className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                >
                  Kedi
                </button>
              </li>
              <li style={{ opacity: 1, transform: "none" }}>
                <button
                  onClick={toggleDogMenu}
                  className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                >
                  Köpek
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
                <button
                  onClick={toggleCatMenu}
                  className="block text-gray-800 hover:text-gray-700/75 font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                >
                  Kedi
                </button>
              </li>
              <li>
                <button
                  onClick={toggleDogMenu}
                  className="block text-gray-800 hover:text-gray-700/75 font-bold"
                  style={{ fontFamily: 'PinkChicken' }}
                >
                  Köpek
                </button>
              </li>
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
      {isCatMenuOpen && (
        <div ref={catMenuRef}>
          {renderDropdownMenu(
            catMenuItems, 
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1720701543770/73d02acd-c140-44f8-bf5b-a88dc6886f46.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", 
            "Kedi", 
            "Kediler hakkında bilmek istediğiniz her şey"
          )}
        </div>
      )}
      {isDogMenuOpen && (
        <div ref={dogMenuRef}>
          {renderDropdownMenu(
            dogMenuItems, 
            "https://cdn.hashnode.com/res/hashnode/image/upload/v1719406285402/9739937a-2d83-431d-bd78-358bf2fbedf5.jpeg?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp", 
            "Köpek", 
            "Köpekler hakkında bilmek istediğiniz her şey"
          )}
        </div>
      )}
      {isSearchOpen && <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
    </nav>
  );
};