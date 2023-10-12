import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { useAppContext } from './contexts/appContext';

const PersonalHeader = () => {
	const { publication } = useAppContext();

	const navbarItems = publication.preferences.navbarItems;
	const visibleItems = navbarItems.slice(0, 2);
	const hiddenItems = navbarItems.slice(2);

	const navList = (
		<ul className="flex list-none flex-row items-center gap-4 text-xs font-semibold uppercase tracking-tight text-neutral-600 dark:text-neutral-300">
			{visibleItems.map((item) => (
				<li key={item.url}>
					<a href={item.url} target="_blank" rel="noopener noreferrer" className="hover:underline">
						{item.label}
					</a>
				</li>
			))}

			{hiddenItems.length > 0 && (
				<li>
					<DropdownMenu.Root>
						<DropdownMenu.Trigger asChild>
							<a href="#" className="hover:underline">
								More
							</a>
						</DropdownMenu.Trigger>

						<DropdownMenu.Portal>
							<DropdownMenu.Content
								className="flex flex-col items-stretch gap-1 rounded-lg border bg-white text-xs font-semibold uppercase tracking-tight text-neutral-600 shadow-xl dark:text-neutral-300"
								sideOffset={5}
								align="end"
							>
								{hiddenItems.map((item) => (
									<DropdownMenu.Item key={item.url}>
										<a
											href={item.url}
											target="_blank"
											rel="noopener noreferrer"
											className="block w-full p-2 hover:underline"
										>
											{item.label}
										</a>
									</DropdownMenu.Item>
								))}
							</DropdownMenu.Content>
						</DropdownMenu.Portal>
					</DropdownMenu.Root>
				</li>
			)}
		</ul>
	);

	return (
		<header className="grid grid-cols-2 items-center gap-5 ">
			<div className="col-span-full md:col-span-1">
				<h1>
					<Link
						className="flex flex-row items-center gap-2 text-lg font-bold leading-tight tracking-tight text-black dark:text-white"
						href="/"
						aria-label={`Go to ${publication.author.name}'s blog home page`}
					>
						{publication.author.profilePicture && (
							<img
								className="block h-8 w-8 rounded-full fill-current"
								alt={publication.author.name}
								src={resizeImage(publication.author.profilePicture, {
									w: 400,
									h: 400,
									c: 'face',
								})}
							/>
						)}
						{publication.title}
					</Link>
				</h1>
			</div>
			<div className="col-span-full flex flex-row items-center justify-between gap-4 md:col-span-1 md:justify-end">
				<nav>{navList}</nav>
				{/* <Button
          label=""
          type="outline"
          className="!p-2"
          icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
        /> */}
			</div>
		</header>
	);
};

export default PersonalHeader;
