import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Search } from './searchbar';

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
	const [isVisible, setIsVisible] = useState(true);

	const catMenuRef = useRef<HTMLDivElement>(null);
	const dogMenuRef = useRef<HTMLDivElement>(null);
	const mobileMenuRef = useRef<HTMLDivElement>(null);
	const router = useRouter();

	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	}, []);

	const catImages = [
		'assets/blog/navbar/all.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
		//   "assets/blog/navbar/kedi/28b52b89-5dd2-45fb-a43f-1e9703f7eab9.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		//   "assets/blog/navbar/kedi/73d02acd-c140-44f8-bf5b-a88dc6886f46.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		//   "assets/blog/navbar/kedi/97a1a9ae-4f35-44da-9f8e-4257263a690c.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		//   "assets/blog/navbar/kedi/302f54be-9665-47c4-8a2f-142f580dd0f4.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		//   "assets/blog/navbar/kedi/341e8904-e5f1-4746-909d-a20f60317ff8.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		//   "assets/blog/navbar/kedi/f45abcb8-5043-4dee-b45e-12a802e858ba.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp",
		//   "assets/blog/navbar/kedi/ca7ba310-adc0-4bd8-9402-6c95210345cf.avif?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp"
	];

	const dogImages = [
		'assets/blog/navbar/all.png?w=1600&h=840&fit=crop&crop=entropy&auto=compress,format&format=webp',
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
		const promises = images.map(
			(src) =>
				new Promise<void>((resolve, reject) => {
					const img = new (window.Image as any)() as HTMLImageElement;
					img.src = src;
					img.onload = () => resolve();
					img.onerror = (error) => reject(error);
				}),
		);

		Promise.all(promises)
			.then(() => {
				setIsImagesLoaded(true);
			})
			.catch((error) => {
				console.error('Failed to preload images:', error);
				setIsImagesLoaded(true); // Set to true even on error to prevent UI from being stuck
			});
	}, []);

	const toggleMobileMenu = useCallback(() => {
		setIsMobileMenuOpen((prev) => !prev);
		setIsCatMenuOpen(false);
		setIsDogMenuOpen(false);
	}, []);

	const toggleSearch = useCallback(() => setIsSearchOpen((prev) => !prev), []);

	const toggleCatMenu = useCallback(() => {
		setIsCatMenuOpen((prev) => !prev);
		setIsDogMenuOpen(false);
		setIsMobileMenuOpen(false);
		if (!isCatMenuOpen) {
			const newImage = getRandomImage(catImages);
			setCurrentCatImage(newImage);
		}
	}, [isCatMenuOpen, catImages]);

	const toggleDogMenu = useCallback(() => {
		setIsDogMenuOpen((prev) => !prev);
		setIsCatMenuOpen(false);
		setIsMobileMenuOpen(false);
		if (!isDogMenuOpen) {
			const newImage = getRandomImage(dogImages);
			setCurrentDogImage(newImage);
		}
	}, [isDogMenuOpen, dogImages]);

	const closeAllMenus = useCallback(() => {
		setIsCatMenuOpen(false);
		setIsDogMenuOpen(false);
		setIsMobileMenuOpen(false);
	}, []);

	useEffect(() => {
		const controlNavbar = () => {
			if (typeof window !== 'undefined') {
				if (window.scrollY > lastScrollY) {
					// scroll down
					setIsVisible(false);
				} else {
					// scroll up
					setIsVisible(true);
				}
				setLastScrollY(window.scrollY);
			}
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (
				catMenuRef.current &&
				!catMenuRef.current.contains(event.target as Node) &&
				dogMenuRef.current &&
				!dogMenuRef.current.contains(event.target as Node) &&
				mobileMenuRef.current &&
				!mobileMenuRef.current.contains(event.target as Node)
			) {
				closeAllMenus();
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
	}, [lastScrollY, closeAllMenus]);

	useEffect(() => {
		router.events.on('routeChangeStart', closeAllMenus);
		return () => {
			router.events.off('routeChangeStart', closeAllMenus);
		};
	}, [router, closeAllMenus]);

	useEffect(() => {
		if (isMetaImagesLoaded) {
			const allImages = [...catImages, ...dogImages, ...Object.values(metaImages)];
			preloadImages(allImages);
		}
	}, [preloadImages, metaImages, catImages, dogImages, isMetaImagesLoaded]);

	const catMenuItems: MenuItem[] = [
		{ name: 'Kedi Bakımı', url: '/kedi-bakimi' },
		{ name: 'Kedi Beslenmesi', url: '/kedi-beslenmesi' },
		{ name: 'Kedi Irkları', url: '/kedi-irklari' },
		{ name: 'Kedi Sağlığı', url: '/kedi-sagligi' },
		{ name: 'Kedi Diğer', url: '/kedi-diger' },
	];

	const dogMenuItems: MenuItem[] = [
		{ name: 'Köpek Bakımı', url: '/kopek-bakimi' },
		{ name: 'Köpek Beslenmesi', url: '/kopek-beslenmesi' },
		{ name: 'Köpek Irkları', url: '/kopek-irklari' },
		{ name: 'Köpek Sağlığı', url: '/kopek-sagligi' },
		{ name: 'Köpek Diğer', url: '/kopek-diger' },
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
		const fetchPromises = allItems.map(async (item) => {
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

	const renderDropdownMenu = (
		items: MenuItem[],
		defaultImage: string,
		altText: string,
		description: React.ReactNode,
	) => (
		<div
			className={`fixed ${isMobile ? 'left-1/2 w-3/4 -translate-x-1/2 transform' : 'left-1/2 w-3/5 -translate-x-1/2 transform'} z-50 mt-2 rounded-xl bg-white bg-opacity-70 px-8 py-6 shadow-lg backdrop-blur-md backdrop-filter`}
		>
			<div className="flex flex-col">
				<div className={`flex ${isMobile ? 'flex-col' : ''}`}>
					<div className={isMobile ? 'mb-4 w-full' : 'w-1/2 pr-4'}>
						{isImagesLoaded && (
							<Image
								src={
									currentHoverImage || (items === catMenuItems ? currentCatImage : currentDogImage)
								}
								alt={altText}
								width={300}
								height={200}
								className="h-auto w-full rounded-lg object-cover"
							/>
						)}
					</div>
					<div className={isMobile ? '-ml-4 -mr-8 pl-0 pt-4' : 'w-1/2 content-center pl-4'}>
						<div className="grid grid-cols-2 gap-x-0 gap-y-4">
							{items.map((item, index) => (
								<div key={index}>
									<Link
										href={item.url}
										className="block text-gray-800 hover:text-gray-600"
										onClick={closeAllMenus}
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
		<>
			<nav
				className={`container fixed left-0 right-0 top-0 z-50 mx-auto w-full select-none px-4 py-4 transition-all duration-300 ${
					isVisible ? 'translate-y-0' : '-translate-y-full'
				}`}
				style={
					{
						opacity: 1,
						zIndex: 2,
					} as React.CSSProperties
				}
			>
				<div
					className="mx-auto select-none rounded-xl bg-white/10 px-4 py-4 shadow-md sm:px-6 lg:px-8"
					style={{
						background: 'hsl(30.5, 100%, 87.6%)',
					}}
				>
					<div className="flex h-10 items-center justify-between">
						<div className="flex items-center">
							<Link rel="canonical" href="/">
								<div className="scale-160 relative bottom-4 flex h-[53px] w-[100px] origin-top-left items-center justify-start">
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
						<div className="hidden w-full justify-end md:flex">
							<ul className="flex items-center space-x-8">
								<li className="mt-2" style={{ opacity: 1, transform: 'none' }}>
									<button onClick={toggleSearch} className="text-gray-800 hover:text-gray-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</button>
								</li>
								<li style={{ opacity: 1, transform: 'none' }}>
									<button
										onClick={toggleCatMenu}
										className="cursor-pointer font-bold text-gray-800 transition hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
									>
										Kedi
									</button>
								</li>
								<li style={{ opacity: 1, transform: 'none' }}>
									<button
										onClick={toggleDogMenu}
										className="cursor-pointer font-bold text-gray-800 transition hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
									>
										Köpek
									</button>
								</li>
								<li style={{ opacity: 1, transform: 'none' }}>
									<Link
										href="/"
										aria-label="Ana Sayfa"
										className="cursor-pointer font-bold text-gray-800 transition hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
										rel="canonical"
									>
										<span>Ana Sayfa</span>
									</Link>
								</li>
								<li style={{ opacity: 1, transform: 'none' }}>
									<Link
										href="/iletisim"
										aria-label="İletişim"
										className="cursor-pointer font-bold text-gray-800 transition hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
										rel="canonical"
									>
										<span>İletişim</span>
									</Link>
								</li>
							</ul>
						</div>
						<div className="flex items-center md:hidden">
							<ul className="mr-4 mt-2 space-y-2">
								<li style={{ opacity: 1, transform: 'none' }}>
									<button onClick={toggleSearch} className="text-gray-800 hover:text-gray-600">
										<svg
											xmlns="http://www.w3.org/2000/svg"
											className="h-6 w-6"
											fill="none"
											viewBox="0 0 24 24"
											stroke="currentColor"
										>
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
											/>
										</svg>
									</button>
								</li>
							</ul>
							<button
								className="relative h-6 w-6 text-gray-800 md:hidden"
								onClick={toggleMobileMenu}
								aria-label={isMobileMenuOpen ? 'Menüyü Kapat' : 'Menüyü Aç'}
							>
								{isMobileMenuOpen ? (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M6 18L18 6M6 6l12 12"
										/>
									</svg>
								) : (
									<svg
										xmlns="http://www.w3.org/2000/svg"
										className="h-6 w-6"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
									>
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M4 6h16M4 12h16M4 18h16"
										/>
									</svg>
								)}
							</button>
						</div>
					</div>
					{isMobileMenuOpen && (
						<div
							ref={mobileMenuRef}
							className="left-0 right-0 top-0 mt-2 rounded-b-xl px-4 py-2 md:hidden"
						>
							<ul className="mr-4 mt-2 space-y-2">
								<li>
									<button
										onClick={() => {
											toggleCatMenu();
											setIsMobileMenuOpen(false);
										}}
										className="block font-bold text-gray-800 hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
									>
										Kedi
									</button>
								</li>
								<li>
									<button
										onClick={() => {
											toggleDogMenu();
											setIsMobileMenuOpen(false);
										}}
										className="block font-bold text-gray-800 hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
									>
										Köpek
									</button>
								</li>
								<li>
									<Link
										href="/"
										className="block font-bold text-gray-800 hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
										onClick={() => {
											setIsMobileMenuOpen(false);
											closeAllMenus();
										}}
										rel="canonical"
									>
										Ana Sayfa
									</Link>
								</li>
								<li>
									<Link
										href="/iletisim"
										className="block font-bold text-gray-800 hover:text-gray-700/75"
										style={{ fontFamily: 'PinkChicken' }}
										onClick={() => {
											setIsMobileMenuOpen(false);
											closeAllMenus();
										}}
										rel="canonical"
									>
										İletişim
									</Link>
								</li>
							</ul>
						</div>
					)}
				</div>
				{(isCatMenuOpen || isDogMenuOpen) && (
					<div ref={isCatMenuOpen ? catMenuRef : dogMenuRef}>
						{renderDropdownMenu(
							isCatMenuOpen ? catMenuItems : dogMenuItems,
							isCatMenuOpen ? currentCatImage : currentDogImage,
							isCatMenuOpen ? 'Kedi' : 'Köpek',
							isCatMenuOpen
								? 'Kediler hakkında bilmek istediğiniz her şey'
								: 'Köpekler hakkında bilmek istediğiniz her şey',
						)}
					</div>
				)}
			</nav>
			{isSearchOpen && (
				<div className="fixed inset-0 z-50 bg-black bg-opacity-50">
					<Search isOpen={isSearchOpen} onClose={() => setIsSearchOpen(false)} />
				</div>
			)}
		</>
	);
};
