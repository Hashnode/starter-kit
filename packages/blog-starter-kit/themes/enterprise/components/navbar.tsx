import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from './searchbar';
import { useRouter } from 'next/router';

interface MenuItem {
  name: string;
  url: string;
}

export const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isCatMenuOpen, setIsCatMenuOpen] = useState(false);
  const [isDogMenuOpen, setIsDogMenuOpen] = useState(false);
  const [isImagesLoaded, setIsImagesLoaded] = useState(false);
  const [currentHoverImage, setCurrentHoverImage] = useState<string | null>(null);
  const [preloadedImages, setPreloadedImages] = useState<Record<string, HTMLImageElement>>({});
  const [currentCatImage, setCurrentCatImage] = useState<string>('');
  const [currentDogImage, setCurrentDogImage] = useState<string>('');
  const [metaImages, setMetaImages] = useState<Record<string, string>>({});
  const [isMetaImagesLoaded, setIsMetaImagesLoaded] = useState(false);
  const [isMobile, setIsMobile] = useState(false);



  const catMenuRef = useRef<HTMLDivElement>(null);
  const dogMenuRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const catImages = [
    "assets/blog/navbar/all.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   "assets/blog/navbar/kedi/28b52b89-5dd2-45fb-a43f-1e9703f7eab9.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   "assets/blog/navbar/kedi/73d02acd-c140-44f8-bf5b-a88dc6886f46.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   "assets/blog/navbar/kedi/97a1a9ae-4f35-44da-9f8e-4257263a690c.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   "assets/blog/navbar/kedi/302f54be-9665-47c4-8a2f-142f580dd0f4.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   "assets/blog/navbar/kedi/341e8904-e5f1-4746-909d-a20f60317ff8.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   "assets/blog/navbar/kedi/f45abcb8-5043-4dee-b45e-12a802e858ba.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
  //   "assets/blog/navbar/kedi/ca7ba310-adc0-4bd8-9402-6c95210345cf.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  ];

  const dogImages = [
    "assets/blog/navbar/all.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
    // "assets/blog/navbar/kopek/2a58504a-4418-4273-9c66-6e31985451f5.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/4cac18aa-5d81-4c31-985d-c172e29c78dd.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/7f66abca-c7ee-4e07-abe7-70c644ab1f19.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/061ceafa-7063-4ec8-894b-b922e0893d3e.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/93dc6921-00d2-4d7e-a836-242fadd08804.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/389e4f1a-3c7c-4e10-a677-89af8ca1f2cf.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/3201e855-eec1-4b2b-8783-dfed466146ae.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/9739937a-2d83-431d-bd78-358bf2fbedf5.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/a1df46d4-404f-44ea-ab6a-b425d6b7ad1f.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
    // "assets/blog/navbar/kopek/a202c886-748a-4809-90ae-b687d51108ef.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
  ];

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getRandomImage = (images: string[]) => {
    const lastImage = localStorage.getItem('lastImage');
    let newImage;
    do {
      newImage = images[Math.floor(Math.random() * images.length)];
    } while (newImage === lastImage && images.length > 1);
    localStorage.setItem('lastImage', newImage);
    return newImage;
  };


  const preloadImages = useCallback((images: string[]) => {
    const promises = images.map(src => new Promise<void>((resolve, reject) => {
      const img = new (window.Image as any)() as HTMLImageElement;
      img.src = src;
      img.onload = () => resolve();
      img.onerror = (error) => reject(error);
    }));

    Promise.all(promises).then(() => {
      setIsImagesLoaded(true);
    }).catch(error => {
      console.error('Failed to preload images:', error);
      setIsImagesLoaded(true); // Set to true even on error to prevent UI from being stuck
    });
  }, []);


  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleSearch = () => setIsSearchOpen(!isSearchOpen);
  
  const toggleCatMenu = () => {
    setIsCatMenuOpen(!isCatMenuOpen);
    setIsDogMenuOpen(false);
    if (!isCatMenuOpen) {
      const newImage = getRandomImage(catImages);
      setCurrentCatImage(newImage);
    }
  };

  const toggleDogMenu = () => {
    setIsDogMenuOpen(!isDogMenuOpen);
    setIsCatMenuOpen(false);
    if (!isDogMenuOpen) {
      const newImage = getRandomImage(dogImages);
      setCurrentDogImage(newImage);
    }
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

    const handleScroll = () => {
      closeAllMenus();
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', controlNavbar);
      window.addEventListener('scroll', handleScroll);
      document.addEventListener('mousedown', handleClickOutside);
      window.addEventListener('wheel', handleScroll);

      return () => {
        window.removeEventListener('scroll', controlNavbar);
        window.removeEventListener('scroll', handleScroll);
        document.removeEventListener('mousedown', handleClickOutside);
        window.removeEventListener('wheel', handleScroll);
      };
    }
  }, [lastScrollY]);

  useEffect(() => {
    router.events.on('routeChangeStart', closeAllMenus);
    return () => {
      router.events.off('routeChangeStart', closeAllMenus);
    };
  }, [router]);

  useEffect(() => {
    if (isMetaImagesLoaded) {
      const allImages = [...catImages, ...dogImages, ...Object.values(metaImages)];
      preloadImages(allImages);
    }
  }, [preloadImages, metaImages, catImages, dogImages, isMetaImagesLoaded]);

  const catMenuItems: MenuItem[] = [
    { name: "Kedi Bakımı", url: "/kedi-bakimi" },
    { name: "Kedi Beslenmesi", url: "/kedi-beslenmesi" },
    { name: "Kedi Irkları", url: "/kedi-irklari" },
    { name: "Kedi Sağlığı", url: "/kedi-sagligi" },
    { name: "Kedi Diğer", url: "/kedi-diger" }
  ];

  const dogMenuItems: MenuItem[] = [
    { name: "Köpek Bakımı", url: "/kopek-bakimi" },
    { name: "Köpek Beslenmesi", url: "/kopek-beslenmesi" },
    { name: "Köpek Irkları", url: "/kopek-irklari" },
    { name: "Köpek Sağlığı", url: "/kopek-sagligi" },
    { name: "Köpek Diğer", url: "/kopek-diger" }
  ];

  const fetchMetaImage = async (url: string): Promise<string | null> => {
    try {
      const response = await fetch(url);
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, 'text/html');
      const metaTag = doc.querySelector('meta[property="og:image"]');
      return metaTag ? metaTag.getAttribute('content') : null;
    } catch (error) {
      console.error('Error fetching meta image:', error);
      return null;
    }
  };


  const fetchMetaImages = useCallback(async () => {
    const allItems = [...catMenuItems, ...dogMenuItems];
    const images: Record<string, string> = {};
    const fetchPromises = allItems.map(async item => {
      try {
        const response = await fetch(item.url);
        const html = await response.text();
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');
        const metaTag = doc.querySelector('meta[property="og:image"]');
        if (metaTag) {
          const content = metaTag.getAttribute('content');
          if (content) {
            images[item.url] = content;
          }
        }
      } catch (error) {
        console.error(`Error fetching meta image for ${item.url}:`, error);
      }
    });
    await Promise.all(fetchPromises);
    setMetaImages(images);
    setIsMetaImagesLoaded(true);
  }, [catMenuItems, dogMenuItems]);

  useEffect(() => {
    if (!isMetaImagesLoaded) {
      fetchMetaImages();
    }
  }, [fetchMetaImages, isMetaImagesLoaded]);

  const renderDropdownMenu = (items: MenuItem[], defaultImage: string, altText: string, description: React.ReactNode) => (
    <div className={`fixed left-0 w-full bg-white bg-opacity-90 backdrop-filter backdrop-blur-md shadow-lg mt-2 py-6 px-4 z-50 ${isMobile ? 'top-16' : 'left-1/2 transform -translate-x-1/2 w-3/5 rounded-xl'}`}>
      <div className="flex flex-col">
        {isMobile && <div className="mb-4 font-bold text-center">{description}</div>}
        <div className={`flex ${isMobile ? 'flex-col' : ''}`}>
          <div className={`${isMobile ? 'w-full mb-4' : 'w-1/2 pr-4'}`}>
            {isImagesLoaded && (
              <Image
                src={currentHoverImage || (items === catMenuItems ? currentCatImage : currentDogImage)}
                alt={altText}
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-auto"
              />
            )}
          </div>
          <div className={`${isMobile ? 'w-full' : 'w-1/2 pl-4'}`}>
            <div className="grid grid-cols-2 gap-4">
              {items.map((item, index) => (
                <div key={index}>
                  <Link 
                    href={item.url} 
                    className="block text-gray-800 hover:text-gray-600"
                    onClick={() => {
                      closeAllMenus();
                      setIsMobileMenuOpen(false);
                    }}
                    onMouseEnter={() => {
                      const metaImage = metaImages[item.url];
                      if (metaImage) {
                        setCurrentHoverImage(metaImage);
                      }
                    }}
                    onMouseLeave={() => {
                      setCurrentHoverImage(null);
                    }}
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
      className="container mx-auto px-4 py-4 select-none top-0 w-full z-50 transition-all duration-300"
      style={{ 
        opacity: 1, 
        zIndex: 2,
        background: "hsl(30.5, 100%, 87.6%)",
      } as React.CSSProperties}
    >
      <div className="flex items-center justify-between">
        <Link rel="canonical" href="/">
          <div className="relative w-[100px] h-[53px] flex items-center justify-start">
            <Image
              src="https://9kelt5xnesj2nkgz.public.blob.vercel-storage.com/file-eYpF3jWI7j8924LUC1AR51hcMjnVNp.png"
              alt="Ana Sayfa"
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              style={{ objectFit: 'contain' }}
            />
          </div>
        </Link>
        <div className="hidden md:flex items-center space-x-8">
          <button onClick={toggleSearch} className="text-gray-800 hover:text-gray-600">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
          <button
            onClick={toggleCatMenu}
            className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
            style={{ fontFamily: 'PinkChicken' }}
          >
            Kedi
          </button>
          <button
            onClick={toggleDogMenu}
            className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
            style={{ fontFamily: 'PinkChicken' }}
          >
            Köpek
          </button>
          <Link
            href='/'
            aria-label="Ana Sayfa"
            className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
            style={{ fontFamily: 'PinkChicken' }}
            rel="canonical"
          >
            <span>Ana Sayfa</span>
          </Link>
          <Link
            href='/iletisim'
            aria-label="İletişim"
            className="text-gray-800 transition hover:text-gray-700/75 cursor-pointer font-bold"
            style={{ fontFamily: 'PinkChicken' }}
            rel="canonical"
          >
            <span>İletişim</span>
          </Link>
        </div>
        <div className="md:hidden flex items-center">
          <button onClick={toggleSearch} className="text-gray-800 hover:text-gray-600 mr-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
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
        <div className="md:hidden mt-4">
          <ul className="space-y-2">
            <li>
              <button
                onClick={toggleCatMenu}
                className="block w-full text-left text-gray-800 hover:text-gray-700/75 font-bold"
                style={{ fontFamily: 'PinkChicken' }}
              >
                Kedi
              </button>
            </li>
            <li>
              <button
                onClick={toggleDogMenu}
                className="block w-full text-left text-gray-800 hover:text-gray-700/75 font-bold"
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
                onClick={() => setIsMobileMenuOpen(false)}
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
                onClick={() => setIsMobileMenuOpen(false)}
                rel="canonical"
              >
                İletişim
              </Link>
            </li>
          </ul>
        </div>
      )}
      {(isCatMenuOpen || isDogMenuOpen) && (
        <div ref={isCatMenuOpen ? catMenuRef : dogMenuRef}>
          {renderDropdownMenu(
            isCatMenuOpen ? catMenuItems : dogMenuItems, 
            isCatMenuOpen ? currentCatImage : currentDogImage, 
            isCatMenuOpen ? "Kedi" : "Köpek", 
            isCatMenuOpen ? "Kediler hakkında bilmek istediğiniz her şey" : "Köpekler hakkında bilmek istediğiniz her şey"
          )}
        </div>
      )}
      {isSearchOpen && <Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />}
    </nav>
  );
};