import { Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import {
	ArrowPathIcon,
	Bars3Icon,
	ChartPieIcon,
	CursorArrowRaysIcon,
	FingerPrintIcon,
	SquaresPlusIcon,
} from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
// import mindsdbLogo from '../public/assets/mindsdb-logo.png';
import { Button } from './button';
import { useAppContext } from './contexts/appContext';
import {
	AboutUsNavSVG,
	BlogNavSGV,
	CareersSVG,
	CaseStudiesSVG,
	CloudNavBarSVG,
	CommunitySVG,
	ContactSVG,
	DocsNavSVG,
	EnterpriseSVG,
	EventsSVG,
	GithubSVG,
	MindsdbLogoSVG,
	NewsroomSVG,
	ProductUpdatesSVG,
	SlackNavSGV,
	SlackWhiteNavSGV,
	SupportSVG,
	UpTimeNavSVG,
	UseCasesSVG,
} from './icons';
function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

const products = [
	{
		name: 'Analytics',
		description: 'Get a better understanding of your traffic',
		href: '#',
		icon: ChartPieIcon,
	},
	{
		name: 'Engagement',
		description: 'Speak directly to your customers',
		href: '#',
		icon: CursorArrowRaysIcon,
	},
	{
		name: 'Security',
		description: 'Your customers’ data will be safe and secure',
		href: '#',
		icon: FingerPrintIcon,
	},
	{
		name: 'Integrations',
		description: 'Connect with third-party tools',
		href: '#',
		icon: SquaresPlusIcon,
	},
	{
		name: 'Automations',
		description: 'Build strategic funnels that will convert',
		href: '#',
		icon: ArrowPathIcon,
	},
];

const res1 = [
	{
		name: 'Support',
		description: 'Email or chat with one of our techical experts',
		href: 'https://mindsdb.com/joincommunity',
		Icon: <SupportSVG />,
	},
	{
		name: 'Docs',
		description: 'Machine Learning made easy',
		href: 'https://docs.mindsdb.com/',
		Icon: <DocsNavSVG />,
	},
	{
		name: 'Case Studies',
		description: 'Customers success stories',
		href: 'https://mindsdb.com/case-studies',
		Icon: <CaseStudiesSVG />,
	},
	{
		name: 'Blog',
		description: 'Read posts and articles about machine learning',
		href: 'https://mindsdb.com/blog',
		Icon: <BlogNavSGV />,
	},
];
const res2 = [
	{
		name: 'Use Cases',
		description: 'Learn about the full range of ML applications',
		href: 'https://mindsdb.com/machine-learning-use-cases',
		Icon: <UseCasesSVG />,
	},
	{
		name: 'Product updates',
		description: 'latest new features',
		href: 'https://mindsdb.com/blog-categories/product-updates',
		Icon: <ProductUpdatesSVG />,
	},
	{
		name: 'Slack',
		description: 'Join our channels for helpful discussions',
		href: 'https://mindsdb.com/joincommunity',
		Icon: <SlackNavSGV />,
	},
	{
		name: 'Uptime Status',
		description: 'All systems operational',
		href: 'https://mindsdb.instatus.com/',
		Icon: <UpTimeNavSVG />,
	},
];

const NavItem = ({
	title,
	description,
	icon: Icon,
	url,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	url: string;
}) => {
	return (
		<a href={url} className=" flex flex-row gap-3 rounded-md  px-4 py-3 hover:bg-green-50 ">
			{Icon}
			<span>
				<p>{title}</p>
				<p className=" text-sm text-gray-500">{description}</p>
			</span>
		</a>
	);
};

const ProductPopover = () => {
	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
				Product
				<ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
					<div className="flex flex-row p-4 text-black ">
						<div className="w-full">
							<p className="mb-4 border-b px-4 pb-3 text-black">CLOUD</p>

							<NavItem
								title="MindsDB Pro"
								description="Try our managed service"
								icon={<CloudNavBarSVG />}
								url={'https://cloud.mindsdb.com/'}
							/>
							<NavItem
								title="MindsDB Enterprise"
								description="Contact sales"
								icon={<EnterpriseSVG />}
								url={'https://mindsdb.com/book-a-demo'}
							/>
						</div>
						<div className="w-full">
							<p className="mb-4 border-b px-4 pb-3 text-black">OPEN-SOURCE</p>

							<NavItem
								title="Github"
								description="Visit our Repo"
								icon={<GithubSVG className="w-6" />}
								url={'https://github.com/mindsdb/mindsdb/'}
							/>
							<NavItem
								title="Community"
								description="Join our Slack"
								icon={<CommunitySVG />}
								url={'https://mindsdb.com/community'}
							/>
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};
const ResourcesPopover = () => {
	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
				Resources
				<ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
					<div className="flex flex-row p-4 text-black ">
						<div className="w-full">
							{res1.map((item) => (
								<NavItem
									key={item.name}
									title={item.name}
									description={item.description}
									icon={item.Icon}
									url={item.href}
								/>
							))}
						</div>
						<div className="w-full">
							{res2.map((item) => (
								<NavItem
									key={item.name}
									title={item.name}
									description={item.description}
									icon={item.Icon}
									url={item.href}
								/>
							))}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};
const CompanyPopover = () => {
	const res1 = [
		{
			name: 'About Us',
			description: 'Our vision and team',
			href: 'https://mindsdb.com/joincommunity',
			Icon: <AboutUsNavSVG />,
		},
		{
			name: 'Events',
			description: 'Archive of past and upcoming events',
			href: 'https://docs.mindsdb.com/',
			Icon: <EventsSVG />,
		},
		{
			name: 'Newsroom',
			description: 'Read the latest news about MindsDB',
			href: 'https://mindsdb.com/case-studies',
			Icon: <NewsroomSVG />,
		},
	];
	const res2 = [
		{
			name: 'Careers',
			description: 'Learn about open roles at MindsDB',
			href: 'https://mindsdb.com/machine-learning-use-cases',
			Icon: <CareersSVG />,
		},
		{
			name: 'Contacts',
			description: 'Find the right channel to get in touch',
			href: 'https://mindsdb.com/blog-categories/product-updates',
			Icon: <ContactSVG />,
		},
	];

	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
				Company
				<ChevronDownIcon className="h-5 w-5 flex-none text-gray-400" aria-hidden="true" />
			</Popover.Button>

			<Transition
				as={Fragment}
				enter="transition ease-out duration-200"
				enterFrom="opacity-0 translate-y-1"
				enterTo="opacity-100 translate-y-0"
				leave="transition ease-in duration-150"
				leaveFrom="opacity-100 translate-y-0"
				leaveTo="opacity-0 translate-y-1"
			>
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
					<div className="flex flex-row p-4 text-black ">
						<div className="w-full">
							{res1.map((item) => (
								<NavItem
									key={item.name}
									title={item.name}
									description={item.description}
									icon={item.Icon}
									url={item.href}
								/>
							))}
						</div>
						<div className="w-full">
							{res2.map((item) => (
								<NavItem
									key={item.name}
									title={item.name}
									description={item.description}
									icon={item.Icon}
									url={item.href}
								/>
							))}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';
	const { publication } = useAppContext();
	const PUBLICATION_LOGO = publication.preferences.darkMode?.logo || publication.preferences.logo;
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);
	const visibleItems = navbarItems.slice(0, 3);
	const hiddenItems = navbarItems.slice(3);
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

	function classNames(...classes) {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<header className="bg-primary-900 border-b px-10  text-white dark:border-neutral-800 ">
			<div className="flex  h-20 ">
				<div className="col-span-2 flex flex-1 flex-row items-center justify-start gap-2 lg:col-span-1">
					<h1>
						<Link
							href={'/'}
							aria-label={`${publication.title} blog home page`}
							className="flex flex-row items-center gap-3"
						>
							{!PUBLICATION_LOGO ? (
								<>
									<MindsdbLogoSVG className="block w-32 shrink-0 md:w-40" alt={publication.title} />
									<span className="text-xl font-semibold text-white md:text-3xl"></span>
								</>
							) : (
								<span className="text-xl font-semibold text-white md:text-4xl">
									{publication.title}
								</span>
							)}
						</Link>
					</h1>

					{/* nav  */}

					<nav
						className=" flex max-w-7xl items-center justify-between p-6 lg:px-8"
						aria-label="Global"
					>
						<div className="flex lg:hidden">
							<button
								type="button"
								className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(true)}
							>
								<span className="sr-only">Open main menu</span>
								<Bars3Icon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<Popover.Group className="hidden lg:flex lg:gap-x-7">
							<ProductPopover />
							<ResourcesPopover />
							<CompanyPopover />
						</Popover.Group>
					</nav>
				</div>
				<div className="col-span-2 flex flex-row items-center justify-end gap-5 text-slate-300 lg:col-span-3">
					{/* <nav className="hidden lg:block">{navList}</nav> */}

					{/* <Bars3Icon className=" h-10 w-6" aria-hidden="true" /> */}
					<a href="https://mindsdb.com/joincommunity" className="flex flex-row gap-2">
						<SlackWhiteNavSGV className="w-6" />
						Join our Slack
					</a>

					<Button
						href="https://github.com/mindsdb/mindsdb"
						as="a"
						type="outline"
						label="LOG IN"
						className="h-10 !text-sm"
					/>
					<Button
						href="https://github.com/mindsdb/mindsdb"
						as="a"
						type="primary"
						label="GET STARTED"
						className="h-10 !text-sm"
					/>
				</div>
				{/* <Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Your Company</span>
								<img
									className="h-8 w-auto"
									src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
									alt=""
								/>
							</a>
							<button
								type="button"
								className="-m-2.5 rounded-md p-2.5 text-gray-700"
								onClick={() => setMobileMenuOpen(false)}
							>
								<span className="sr-only">Close menu</span>
								<XMarkIcon className="h-6 w-6" aria-hidden="true" />
							</button>
						</div>
						<div className="mt-6 flow-root">
							<div className="-my-6 divide-y divide-gray-500/10">
								<div className="space-y-2 py-6">
									<Disclosure as="div" className="-mx-3">
										{({ open }) => (
											<>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Product
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[...products].map((item) => (
														<Disclosure.Button
															key={item.name}
															as="a"
															href={item.href}
															className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
														>
															{item.name}
														</Disclosure.Button>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Features
									</a>
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Marketplace
									</a>
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Company
									</a>
								</div>
								<div className="py-6">
									<a
										href="#"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Log in
									</a>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog> */}
			</div>
		</header>
	);
};

// const navList = (
// 	<ul className="flex flex-row items-center gap-2 text-white">
// 		{visibleItems.map((item) => (
// 			<li key={item.url}>
// 				<a
// 					href={item.url}
// 					target="_blank"
// 					rel="noopener noreferrer"
// 					className="transition-200 block max-w-[200px] truncate text-ellipsis whitespace-nowrap rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
// 				>
// 					{item.label}
// 				</a>
// 			</li>
// 		))}

// 		{hiddenItems.length > 0 && (
// 			<li>
// 				<DropdownMenu.Root>
// 					<DropdownMenu.Trigger asChild>
// 						<button className="transition-200 block rounded-full p-2 transition-colors hover:bg-white hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white">
// 							More
// 						</button>
// 					</DropdownMenu.Trigger>

// 					<DropdownMenu.Portal>
// 						<DropdownMenu.Content
// 							className="w-48 rounded border border-gray-300 bg-white text-neutral-950 shadow-md dark:border-neutral-800 dark:bg-neutral-900 dark:text-white"
// 							align="end"
// 							sideOffset={5}
// 						>
// 							{hiddenItems.map((item) => (
// 								<DropdownMenu.Item asChild key={item.url}>
// 									<a
// 										href={item.url}
// 										target="_blank"
// 										rel="noopener noreferrer"
// 										className="transition-200 block truncate p-2 transition-colors hover:bg-slate-100 hover:text-black dark:hover:bg-neutral-800 dark:hover:text-white"
// 									>
// 										{item.label}
// 									</a>
// 								</DropdownMenu.Item>
// 							))}
// 						</DropdownMenu.Content>
// 					</DropdownMenu.Portal>
// 				</DropdownMenu.Root>
// 			</li>
// 		)}
// 	</ul>
// );
