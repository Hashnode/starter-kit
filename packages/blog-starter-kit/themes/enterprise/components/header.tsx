import { PublicationNavbarItem } from '../generated/graphql';
import { Button } from './button';
import { Container } from './container';
import { PublicationLogo } from './publication-logo';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const Header = () => {
	const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || '/';

	return (
		<header className="border-b bg-slate-950 py-5 dark:border-neutral-800 dark:bg-neutral-900">
			<Container className="grid grid-cols-4 gap-5 px-5">
				<div className="col-span-2 flex flex-1 flex-row items-center gap-2 lg:col-span-1">
					<div className="text-4xl">
						<PublicationLogo />
					</div>
				</div>
				<div className="col-span-2 flex flex-row items-center justify-end gap-5 text-slate-300 lg:col-span-3">
					<div className="flex justify-end flex-1">
						<Button href={baseUrl} as="a" type="primary" label="Home" />
					</div>
				</div>
			</Container>
		</header>
	);
};
