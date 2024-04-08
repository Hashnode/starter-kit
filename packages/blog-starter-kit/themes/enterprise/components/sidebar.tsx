import * as DialogPrimitive from '@radix-ui/react-dialog';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { useAppContext } from './contexts/appContext';
import ChevronUpSVG from './icons/svgs/ChevronUpSVG';
import { PublicationLogo } from './publication-logo';

type Props = {
	toggleSidebar: () => void;
	navbarItems: (PublicationNavbarItem & { url: string })[];
};

function PublicationSidebar(props: Props) {
	const { toggleSidebar } = props;
	const [isMounted, setIsMounted] = useState(false);
	const { publication } = useAppContext();

	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';

	useEffect(() => {
		setIsMounted(true);
	}, []);

	const headerLinks = [
		{id: 1, url: '/#how-it-works', label: 'How It Works'},
		{id: 2, url: '/#features', label: 'Features'},
		{id: 3, url: '/#reviews', label: 'Reviews'},
		{id: 4, url: '/#pricing', label: 'Pricing'},
		{id: 5, url: '/#faqs', label: 'FAQs'},
		{id: 6, url: '/blog', label: 'Blog'},
	]

	const closeMenu = () => {
		setIsMounted(false)
		setTimeout(() => {
			toggleSidebar();
		}, 500);
	}

	return (
		<DialogPrimitive.Root open>
			<DialogPrimitive.Portal>
				<DialogPrimitive.Overlay
					className={`fixed inset-0 z-50 bg-slate-900 opacity-0 transition-opacity duration-300 ease-out ${
						isMounted && 'opacity-50'
					}`}
				/>
				
				<DialogPrimitive.Content
					onEscapeKeyDown={() => {
						closeMenu()
					}}
					onPointerDownOutside={() => {
						closeMenu()
					}}
					className={`${
						// When the sheet is mounted, we want to slide it in from the top.
						!isMounted ? '-translate-y-full' : 'translate-y-0'
					} fixed inset-0 z-50 flex w-full h-2/3 transform flex-col bg-white shadow-2xl duration-500 ease-in-out dark:border-neutral-800 dark:bg-neutral-950`}
				>
					<div className="blog-sidebar-header shrink-0 py-6">
						<div className="flex items-center justify-between pl-8 pr-4">
							<div className="!text-xl flex items-center h-10">
							
								<PublicationLogo isSidebar />
							</div>

							<DialogPrimitive.Close asChild>
								<Button
									type="outline"
									label=""
									icon={<ChevronUpSVG className="h-6 w-6"/>}
									className="rounded-xl !border-transparent !px-3 !py-2 hover:bg-neutral-800 dark:text-white"
									onClick={closeMenu}
								/>
							</DialogPrimitive.Close>
						</div>
					</div>

					<div className="py-8 pl-5 pr-4">
						<section className="mb-10">
							<ul className="flex flex-col gap-1 text-slate-700 dark:text-white">
								{headerLinks.map((item) => (
									<li key={item.url}>
										<Link
											href={item.url}
											className="transition-200 block truncate text-ellipsis whitespace-nowrap rounded p-2 transition-colors  dark:hover:bg-neutral-800 dark:hover:text-white"
										>
											{item.label}
										</Link>
									</li>
								))}
							</ul>
							<div className="flex mt-5 px-1">
								<Button href={baseUrl} as="a" type="secondary" label="Get Started" className="w-full justify-center" />
							</div>
						</section>
					</div>
				</DialogPrimitive.Content>
			</DialogPrimitive.Portal>
		</DialogPrimitive.Root>
	);
}

export default PublicationSidebar;
