import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { ChevronDownIcon, XMarkIcon } from '@heroicons/react/20/solid';
import { Bars3Icon } from '@heroicons/react/24/outline';
import { Fragment, useState } from 'react';

import Link from 'next/link';
import { PublicationNavbarItem } from '../generated/graphql';
// import mindsdbLogo from '../public/assets/mindsdb-logo.png';
import { Button } from './button';
import { useAppContext } from './contexts/appContext';
import {
	AboutUsSVG,
	BlogSVG,
	CareersSVG,
	CaseStudiesSVG,
	CommunitySVG,
	ConnectSVG,
	ContactsSVG,
	EventsSVG,
	GitHubNavBarSVG,
	IntegrationsSVG,
	MindsCloudSVG,
	MindsdbLogoSVG,
	NewsRoomSVG,
	SlackWhiteNavSGV,
	SupportSVG,
} from './icons';
function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

const NavItem = ({
	title,
	description,
	icon: Icon,
	url,
	cta,
}: {
	title: string;
	description: string;
	icon: React.ReactNode;
	url: string;
	cta?: string;
}) => {
	return (
		<a href={url} className=" flex flex-row gap-3 rounded-md  px-4 py-3 hover:bg-green-50 ">
			<div>{Icon}</div>
			<span>
				<p>{title}</p>
				<p className=" text-sm text-gray-500">{description}</p>
				{cta && <p className=" text-primary-500 mt-2 text-sm">{cta}</p>}
			</span>
		</a>
	);
};

const mindsCloudList = [
	{
		name: 'Minds Cloud',
		description:
			'Minds are intelligent systems, designed to answer data questions for applications.',
		href: 'https://mdb.ai/',
		Icon: <MindsCloudSVG />,
		cta: 'Try now →',
	},
];
const MindsCloudPopover = () => {
	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
				Minds Cloud
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
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
					<div className="flex flex-row p-4 text-black ">
						<div className="w-full">
							{/* <p className="mb-4 border-b px-4 pb-3 text-black">CLOUD</p> */}

							{mindsCloudList.map((item) => (
								<NavItem
									key={item.name}
									title={item.name}
									description={item.description}
									icon={item.Icon}
									url={item.href}
									cta={item.cta}
								/>
							))}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

const opensourceNav = [
	{
		name: 'Integrations',
		description: 'AI models, data sources, applications',
		href: 'https://docs.mindsdb.com/integrations/integrations',
		Icon: <IntegrationsSVG />,
	},
	{
		name: 'Support',
		description: 'Chat with experts on Slack',
		href: 'https://mindsdb.com/joincommunity',
		Icon: <SupportSVG />,
	},
	{
		name: 'GitHub',
		description: 'Get code, contribute, flag issues',
		href: 'https://docs.mindsdb.com/what-is-mindsdb',
		Icon: <GitHubNavBarSVG />,
	},
	{
		name: 'Community',
		description: 'Programs, rewards, swag',
		href: 'https://mindsdb.com/community',
		Icon: <CommunitySVG />,
	},
];

const OpenSourcePopover = () => {
	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
				Open Source
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
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
					<div className="flex flex-row p-4 text-black ">
						<div className="w-full">
							{/* <p className="mb-4 border-b px-4 pb-3 text-black">CLOUD</p> */}

							{opensourceNav.map((item) => (
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

const connectList = [
	{
		name: 'Connect with an Expert',
		description: "Let's explore AI together and solve your most pressing business challenges.",
		href: 'https://mindsdb.com/enterprise',
		Icon: <ConnectSVG />,
		cta: 'Learn more →',
	},
];
const ConnectPopover = () => {
	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
				Connect with an Expert
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
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
					<div className="flex flex-row p-4 text-black ">
						<div className="w-full">
							{/* <p className="mb-4 border-b px-4 pb-3 text-black">CLOUD</p> */}

							{connectList.map((item) => (
								<NavItem
									key={item.name}
									title={item.name}
									description={item.description}
									icon={item.Icon}
									url={item.href}
									cta={item?.cta}
								/>
							))}
						</div>
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};

const resources1 = [
	{
		name: 'Events',
		description: 'Learn, network, collaborate',
		href: 'https://mindsdb.com/events',
		Icon: <EventsSVG />,
	},
	{
		name: 'Blog',
		description: 'Tutorials and content about AI',
		href: 'https://mindsdb.com/blog',
		Icon: <BlogSVG />,
	},
	{
		name: 'About Us',
		description: 'Our vision and team',
		href: 'https://mindsdb.com/about',
		Icon: <AboutUsSVG />,
	},
	{
		name: 'Case Studies',
		description: 'Meet MindsDB customers',
		href: 'https://mindsdb.com/case-studies',
		Icon: <CaseStudiesSVG />,
	},
];
const resources2 = [
	{
		name: 'Newsroom',
		description: 'Latest news about MindsDB',
		href: 'https://mindsdb.com/newsroom',
		Icon: <NewsRoomSVG />,
	},
	{
		name: 'Contacts',
		description: 'Find the right channel to get in touch',
		href: 'https://mindsdb.com/contact',
		Icon: <ContactsSVG />,
	},
	{
		name: 'Careers',
		description: 'See open roles at MindsDB',
		href: 'https://mindsdb.com/careers',
		Icon: <CareersSVG />,
	},
];
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
							{resources1.map((item) => (
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
							{resources2.map((item) => (
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

	function classNames(...classes: string[]) {
		return classes.filter(Boolean).join(' ');
	}

	return (
		<header className="bg-primary-900 border-b px-10  text-white dark:border-neutral-800 ">
			<div className="flex  h-20 ">
				<div className=" col-span-2 flex w-full flex-1 flex-row items-center justify-between gap-2 lg:col-span-1">
					<h1>
						<Link
							href={'/'}
							aria-label={`${publication.title} blog home page`}
							className="flex flex-row items-center gap-3"
						>
							{PUBLICATION_LOGO ? (
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
						className=" flex w-full items-center justify-between p-6 max-lg:justify-end lg:px-8"
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
							<Link
								className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white"
								href="https://docs.mindsdb.com/what-is-mindsdb"
							>
								Docs
							</Link>
							<MindsCloudPopover />
							<OpenSourcePopover />
							<ConnectPopover />

							{/* <ConnectPopover /> */}

							{/* <CompanyPopover /> */}

							<ResourcesPopover />
						</Popover.Group>
						<div className=" col-span-2  flex flex-row items-center justify-end gap-5 text-slate-300 max-lg:hidden  lg:col-span-3">
							{/* <nav className="hidden lg:block">{navList}</nav> */}
							<a href="https://github.com/mindsdb/mindsdb">
								<img
									height={60}
									width={100}
									alt="GitHub Repo stars"
									src="https://img.shields.io/github/stars/mindsdb/mindsdb?style=social"
								/>
							</a>

							{/* <Bars3Icon className=" h-10 w-6" aria-hidden="true" /> */}
							<a href="https://mindsdb.com/joincommunity" className="flex flex-row gap-2">
								<SlackWhiteNavSGV className="w-6" />
								Join our Slack
							</a>

							{/* <Button
								href="https://cloud.mindsdb.com/login"
								as="a"
								type="outline"
								label="LOG IN"
								className="h-10 !text-sm"
							/> */}
							<Button
								href="https://github.com/mindsdb/mindsdb"
								as="a"
								type="primary"
								label="GET STARTED"
								className="h-10 !text-sm"
							/>
						</div>
					</nav>
				</div>

				<Dialog as="div" className="lg:hidden" open={mobileMenuOpen} onClose={setMobileMenuOpen}>
					<div className="fixed inset-0 z-10" />
					<Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
						<div className="flex items-center justify-between">
							<a href="#" className="-m-1.5 p-1.5">
								<span className="sr-only">Mindsdb</span>
								<MindsdbLogoSVG className="h-8 w-auto" alt="mindsdb logo" />
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
												<Link
													className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													href="https://docs.mindsdb.com/what-is-mindsdb"
												>
													Docs
												</Link>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Minds Cloud
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{mindsCloudList.map((item) => (
														<NavItem
															key={item.name}
															title={item.name}
															description={item.description}
															icon={item.Icon}
															url={item.href}
															cta={item?.cta}
														/>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
									<Disclosure as="div" className="-mx-3">
										{({ open }) => (
											<>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Open Source
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{opensourceNav.map((item) => (
														<NavItem
															key={item.name}
															title={item.name}
															description={item.description}
															icon={item.Icon}
															url={item.href}
														/>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>

									<Disclosure as="div" className="-mx-3">
										{({ open }) => (
											<>
												<Link
													className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
													href="https://docs.mindsdb.com/what-is-mindsdb"
												>
													Docs
												</Link>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Connect with an Expert
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{connectList.map((item) => (
														<NavItem
															key={item.name}
															title={item.name}
															description={item.description}
															icon={item.Icon}
															url={item.href}
															cta={item?.cta}
														/>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
									<Disclosure as="div" className="-mx-3">
										{({ open }) => (
											<>
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Resources
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[...resources1, ...resources2].map((item) => (
														<NavItem
															key={item.name}
															title={item.name}
															description={item.description}
															icon={item.Icon}
															url={item.href}
														/>
													))}
												</Disclosure.Panel>
											</>
										)}
									</Disclosure>
								</div>
								<div className="py-6">
									{/* <a
										href="https://cloud.mindsdb.com/login"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Log in
									</a> */}
									<a
										href="https://github.com/mindsdb/mindsdb"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										GET STARTED
									</a>
								</div>
							</div>
						</div>
					</Dialog.Panel>
				</Dialog>
			</div>
		</header>
	);
};
