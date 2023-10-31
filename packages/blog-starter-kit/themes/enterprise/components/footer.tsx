import Link from 'next/link';
import { Container } from './container';
import { useAppContext } from './contexts/appContext';
import { SocialLinks } from './social-links';

export const Footer = () => {
	return (
		<footer className="border-t py-10 px-40 md: px-12 md: py-7 dark:border-neutral-800 dark:bg-neutral-900 bg-[#00012B]">
			<Container className="flex justify-center flex-wrap">
				<div className="flex-1 flex-shrink-0 w-64 m-10">
					<h3 className="text-3xl text-white pb-4 font-normal">Ramin's Blog</h3>
					<p className="text-lg text-gray-300 pb-2">
						Thank you for visiting my personal Blog website. Connect with me over socials.
					<br />
					<br />
						Keep Rising 🚀. Connect with me over live chat!
					</p>
				</div>

				<div className="flex-1 flex-shrink-0 w-64 m-10">
					<h3  className="text-3xl text-white pb-4">
						Quick links
					</h3>
					<a href='https://ramin.website/' className="text-white text-lg pb-2 block hover:text-[#ffae00]">
					<i className="fas fa-chevron-circle-right"></i>Portfolio
					</a>
					<a href={'/'} className="text-white text-lg pb-2 block hover:text-[#ffae00]">
						Blog
					</a>
					<a href="https://hashnode.com/@RsmkCode" className="text-white text-lg pb-2 block hover:text-[#ffae00]">
						Hashnode
					</a>
					<a href="https://ramin.website/#contact" className="text-white text-lg pb-2 block hover:text-[#ffae00]">
						Contact us
					</a>
				</div>
				<div className="flex-1 flex-shrink-0 w-64 m-10">
					<h3 className="text-3xl text-white pb-4">contact info</h3>
					<p className="text-lg text-gray-300 pb-2">
						<i className="fas fa-envelope"></i>sramin963@gmail.com
					</p>
					<p className="text-lg text-gray-300 pb-2">
						<i className="fas fa-map-marked-alt"></i>Isparta, Türkiye-32100
					</p>
					<div className="share flex flex-wrap py-4">
					<SocialLinks />
					</div>
				</div>
			</Container>
		</footer>
	);
};
