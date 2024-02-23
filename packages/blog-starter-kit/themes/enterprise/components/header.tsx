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
	AIAgentsSVG,
	AboutUsNavSVG,
	BlogNavSGV,
	CareersSVG,
	CaseStudiesSVG,
	CommunitySVG,
	ContactSVG,
	ContributeSVG,
	CustomChatbotSVG,
	DocsNavSVG,
	EnterpriseSVG,
	EventsSVG,
	FeaturesSVG,
	FineTuningSVG,
	ForecastingSVG,
	GithubSVG,
	IntegrationsSVG,
	MindsdbLogoSVG,
	NewsroomSVG,
	ProductUpdatesSVG,
	SemanticSearchSVG,
	SlackNavSGV,
	SlackWhiteNavSGV,
	SupportSVG,
	TextProcessingSVG,
	UpTimeNavSVG,
	UseCasesSVG,
} from './icons';
function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

const product1 = [
	// {
	// 	name: 'MindsDB Pro',
	// 	description: 'Try our managed service',
	// 	href: 'https://cloud.mindsdb.com/',
	// 	Icon: <CloudNavBarSVG />,
	// },
	{
		name: 'Features',
		description: 'Building blocks & concepts',
		href: 'https://docs.mindsdb.com/what-is-mindsdb',
		Icon: <FeaturesSVG />,
	},
	{
		name: 'Integrations',
		description: 'AI engines, data sources, and apps',
		href: 'https://docs.mindsdb.com/integrations/integrations',
		Icon: <IntegrationsSVG />,
	},
	{
		name: 'Product Updates',
		description: 'New features and improvements',
		href: 'https://github.com/mindsdb/mindsdb/releases',
		Icon: <ProductUpdatesSVG />,
	},
	{
		name: 'Enterprise',
		description: 'Get it on your terms',
		href: 'https://mindsdb.com/book-a-demo',
		Icon: <EnterpriseSVG />,
	},
];
const product2 = [
	{
		name: 'Github',
		description: 'Visit our Repo',
		href: 'https://github.com/mindsdb/mindsdb/',
		Icon: <GithubSVG />,
	},
	{
		name: 'Community',
		description: ' Join our Slack',
		href: 'https://mindsdb.com/community',
		Icon: <CommunitySVG />,
	},
];
const sol1 = [
	{
		name: 'Continuous Fine-Tuning',
		description: 'Improve AI models in real time',
		href: 'https://docs.mindsdb.com/finetune/openai',
		Icon: <FineTuningSVG />,
	},
	{
		name: 'AI Agents',
		description: 'Enhance versatility with customizable “skills”',
		href: 'https://docs.mindsdb.com/mindsdb_sql/agents/agent',
		Icon: <AIAgentsSVG />,
	},
	{
		name: 'Semantic Search',
		description: 'RAG and embeddings sync',
		href: 'https://docs.mindsdb.com/sql/tutorials/rag',
		Icon: <SemanticSearchSVG />,
	},
];
const sol2 = [
	{
		name: 'Custom Chatbots',
		description: 'Connect agents with chat interfaces',
		href: 'https://docs.mindsdb.com/mindsdb_sql/agents/chatbot',
		Icon: <CustomChatbotSVG />,
	},
	{
		name: 'Forecasting',
		description: 'Forecast trends in your data with enhanced SQL',
		href: 'https://docs.mindsdb.com/sql/tutorials/house-sales-forecasting',
		Icon: <ForecastingSVG />,
	},
	{
		name: 'In-database Text Processing',
		description: 'Sentiment analysis, summarization, and more',
		href: 'https://docs.mindsdb.com/nlp/sentiment-analysis-inside-mysql-with-openai',
		Icon: <TextProcessingSVG />,
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
	{
		name: 'Slack',
		description: 'Join our channels for helpful discussions',
		href: 'https://mindsdb.com/joincommunity',
		Icon: <SlackNavSGV />,
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
		name: 'Uptime Status',
		description: 'All systems operational',
		href: 'https://mindsdb.instatus.com/',
		Icon: <UpTimeNavSVG />,
	},
];

const company1 = [
	{
		name: 'About Us',
		description: 'Our vision and team',
		href: 'https://mindsdb.com/about',
		Icon: <AboutUsNavSVG />,
	},
	{
		name: 'Events',
		description: 'Archive of past and upcoming events',
		href: 'https://mindsdb.com/events',
		Icon: <EventsSVG />,
	},
	{
		name: 'Newsroom',
		description: 'Read the latest news about MindsDB',
		href: 'https://mindsdb.com/newsroom',
		Icon: <NewsroomSVG />,
	},
];
const company2 = [
	{
		name: 'Careers',
		description: 'Learn about open roles at MindsDB',
		href: 'https://mindsdb.com/careers',
		Icon: <CareersSVG />,
	},
	{
		name: 'Contacts',
		description: 'Find the right channel to get in touch',
		href: 'https://mindsdb.com/contact',
		Icon: <ContactSVG />,
	},
	{
		name: 'Contribute',
		description: 'Check guidelines and first-time issues',
		href: 'https://docs.mindsdb.com/contribute/contribute',
		Icon: <ContributeSVG />,
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
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
					<div className="flex flex-row p-4 text-black ">
						<div className="w-full">
							{/* <p className="mb-4 border-b px-4 pb-3 text-black">CLOUD</p> */}

							{product1.map((item) => (
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
const SolutionsPopover = () => {
	return (
		<Popover className="relative">
			<Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
				Solutions
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
							{sol1.map((item) => (
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
							{sol2.map((item) => (
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
				<Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-96 max-w-2xl overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
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
						{/* <div className="w-full">
							{res2.map((item) => (
								<NavItem
									key={item.name}
									title={item.name}
									description={item.description}
									icon={item.Icon}
									url={item.href}
								/>
							))}
						</div> */}
					</div>
				</Popover.Panel>
			</Transition>
		</Popover>
	);
};
const CompanyPopover = () => {
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
							{company1.map((item) => (
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
							{company2.map((item) => (
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
							<ProductPopover />
							<SolutionsPopover />
							<ResourcesPopover />
							<CompanyPopover />
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

							<Button
								href="https://cloud.mindsdb.com/login"
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
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Product
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[...product1, ...product2].map((item) => (
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
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Resources
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[...res1, ...res2].map((item) => (
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
												<Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
													Company
													<ChevronDownIcon
														className={classNames(open ? 'rotate-180' : '', 'h-5 w-5 flex-none')}
														aria-hidden="true"
													/>
												</Disclosure.Button>
												<Disclosure.Panel className="mt-2 space-y-2">
													{[...company1, ...company2].map((item) => (
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
									<a
										href="https://cloud.mindsdb.com/login"
										className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
									>
										Log in
									</a>
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
