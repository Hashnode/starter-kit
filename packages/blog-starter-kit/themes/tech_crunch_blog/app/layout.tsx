import { Inter as FontSans } from 'next/font/google';
import { BiSearch } from 'react-icons/bi';
import './globals.css';

import Footer from '@/components/footer';
import NewsLetter from '@/components/newsLetter';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
	applicationName: 'TechCrunch_X_Hashnode',
	referrer: 'origin-when-cross-origin',
	keywords: ['Next.js', 'emee', 'Hashnode', 'Hackathon'],
	authors: [{ name: 'Emmanuel', url: 'https://github.com/emee-dev' }],
	creator: 'Emmanuel Ajike',
	publisher: 'Emmanuel Ajike',
	category: 'technology',
	robots: {
		index: false,
		follow: true,
		nocache: true,
		googleBot: {
			index: true,
			follow: false,
			noimageindex: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export const fontSans = FontSans({
	subsets: ['latin'],
	variable: '--font-sans',
});

const RootLayout = async ({ children }: any) => {
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Oswald:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</head>
			<body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
				<main className="flex flex-row">
					<aside className="hidden w-[20%] p-3 lg:block">
						<div className="fixed flex flex-col justify-center gap-2">
							<Image
								className="h-auto max-h-16 w-32"
								width={40}
								height={40}
								src={'/hashnode.svg'}
								alt="Blog logo"
								priority
								unoptimized
							/>
							<Link href="/">Join Techcrunch++</Link>

							<div className="mt-14 flex flex-col">
								<div className="relative flex items-center gap-2">
									<span>Search</span>
									<BiSearch />
									<div className="relative w-56 ">
										<SearchComponent />
									</div>
								</div>
							</div>
						</div>
					</aside>
					<section className="lg:w-[80%]">
						<div className="gap-x-3 p-2 lg:flex">
							<div className="lg:w-[70%]">
								{children}
								<NewsLetter />
							</div>

							<div className="h-52 flex-col items-center p-4 lg:w-[30%]">
								<p>Ads Space</p>
							</div>
						</div>
						<footer className="sm:grid-cols-2">
							<Footer />
						</footer>
					</section>
				</main>
			</body>
		</html>
	);
};

const SearchComponent = () => {
	return (
		<div className="absolute z-[999] flex w-[300px] items-center space-x-2">
			<Input type="text" placeholder="Enter your search" />
			<Button type="submit">Search</Button>
		</div>
	);
};

export default RootLayout;
