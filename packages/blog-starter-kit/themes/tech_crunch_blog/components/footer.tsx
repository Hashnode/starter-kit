import Link from 'next/link';
import { BiLogoFacebook, BiLogoInstagram, BiLogoTwitter, BiLogoYoutube } from 'react-icons/bi';
type Socials = {
	icon: JSX.Element;
	label: string;
}[];

type Links = {
	header: string;
	items: {
		label: string;
		url: string;
	}[];
}[];

let socials: Socials = [
	{ icon: <BiLogoFacebook size={'1.2rem'} />, label: 'Facebook' },
	{ icon: <BiLogoTwitter size={'1.2rem'} />, label: 'X' },
	{ icon: <BiLogoYoutube size={'1.2rem'} />, label: 'Youtube' },
	{ icon: <BiLogoInstagram size={'1.2rem'} />, label: 'Instagram' },
];

let links: Links = [
	{
		header: 'About',
		items: [
			{ label: 'TechCrunch', url: '/#' },
			{ label: 'Staff', url: '/#' },
			{ label: 'Contact Us', url: '/#' },
			{ label: 'Advertise', url: '/#' },
			{ label: 'Jobs', url: '/#' },
			{ label: 'Site Map', url: '/#' },
		],
	},
	{
		header: 'Legal',
		items: [
			{ label: 'Terms of Service', url: '/#' },
			{ label: 'Privary Policy', url: '/#' },
			{ label: 'Terms', url: '/#' },
			{ label: 'Rss Terms of Use', url: '/#' },
		],
	},
];

const Footer = () => {
	return (
		<div className="grid grid-cols-4 items-center justify-center p-4 text-base sm:text-lg md:text-base">
			<ul className="col-span-3 flex px-4">
				<FooterLinks data={links} />
			</ul>
			<div className="mt-4 flex h-full w-full flex-col px-4">
				<SocialItems data={socials} />
			</div>
		</div>
	);
};

const FooterLinks = (prop: { data: Links }) => {
	return prop.data.map(({ header, items }) => {
		return (
			<li key={crypto.randomUUID()} className="mt-3 flex w-[50%] flex-col gap-3 sm:col-span-4">
				<a className="font-semibold">{header}</a>
				<ul className="mt-2 items-center justify-center">
					{items.map(({ label, url }) => (
						<Link href={url} key={crypto.randomUUID()}>
							<li className="hover:underline">{label}</li>
						</Link>
					))}
				</ul>
			</li>
		);
	});
};

const SocialItems = (prop: { data: { label: string; icon: React.ReactNode }[] }) => {
	return prop.data.map((item) => {
		return (
			<a key={crypto.randomUUID()} className="mt-2 flex items-center gap-2 sm:mt-0">
				<span>{item.icon}</span>
				<span>{item.label}</span>
			</a>
		);
	});
};

export default Footer;
