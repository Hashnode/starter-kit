import { Inter as FontSans, Montserrat } from 'next/font/google';
import './globals.css';

import ContextProvider from '@/components/contextProvider';
import Footer from '@/components/footer';
import NavBar from '@/components/navBar';
import NewsLetter from '@/components/newsLetter';
import { cn } from '@/lib/utils';
import { Metadata } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import { config } from './config';

const montserrat = Montserrat({
	subsets: ['latin'],
	weight: ['400', '500', '600', '700'], // if single weight, otherwise you use array like [400, 500, 700],
	style: 'normal', // if single style, otherwise you use array like ['normal', 'italic']
});

export const metadata: Metadata = {
	title: config.title,
	description: config.description,
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
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Oswald:wght@400;500&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body className={cn('bg-background min-h-screen font-sans antialiased', fontSans.variable)}>
				<ContextProvider>
					<main className="flex flex-col bg-gray-200">
						<NavBar />

						<section className="mt-16 flex px-3 lg:w-full">
							<aside className="hidden w-[20%] p-3 lg:block">
								<div className="relative flex flex-col justify-center gap-2">
									<Link href="/">Join TechPro++</Link>

									<div className="mt-14 flex flex-col gap-2">
										<div className="relative flex items-center">
											<span>Technology</span>
										</div>
										<div className="relative flex items-center">
											<span>Startups</span>
										</div>
										<div className="relative flex items-center">
											<span>Venture</span>
										</div>
									</div>
								</div>
							</aside>
							<div className="gap-x-3 p-2 md:flex lg:flex lg:w-[80%]">
								<div className="md:w-[75%]">
									{children}
									<NewsLetter />
								</div>

								<div className="flex-col items-center md:w-[25%]">
									<p>Ads Space</p>
								</div>
							</div>
						</section>
					</main>
					<footer className="bg-gray-200 ">
						<Footer />
					</footer>
				</ContextProvider>
			</body>
		</html>
	);
};

export default RootLayout;
