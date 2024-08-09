import { PublicationNavbarItem } from 'generated/graphql';
import { useAppContext } from './contexts/appContext';
import SearchBox from './search-box';
import { SocialLinks } from './social-links';

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

function PostsTop() {
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);

	return (
		<div className="grid w-full grid-cols-4">
			<div className="col-span-3 grid grid-cols-1 gap-2">
				<SocialLinks />
				<div className="flex items-center gap-3">
					{navbarItems.map((item) => (
						<a
							key={item.id}
							href={`${process.env.NEXT_PUBLIC_BASE_URL}${item.url.split('.io')[1]}`}
							target="_blank"
							rel="noopener noreferrer"
							className="rounded-xl border px-2 py-1 text-sm text-slate-500 ring-slate-400 transition-all hover:ring-1"
						>
							{item.label}
						</a>
					))}
				</div>
			</div>
			<SearchBox />
		</div>
	);
}

export default PostsTop;
