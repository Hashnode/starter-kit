import { PostFragment, PublicationNavbarItem } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import { PostPreviewHome } from './post-preview-home';
import { Search } from './searchbar';
import { SocialLinks } from './social-links';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

function hasUrl(
	navbarItem: PublicationNavbarItem,
): navbarItem is PublicationNavbarItem & { url: string } {
	return !!navbarItem.url && navbarItem.url.length > 0;
}

export const MorePosts = ({ posts, context }: Props) => {
	const { publication } = useAppContext();
	const navbarItems = publication.preferences.navbarItems.filter(hasUrl);

	return (
		<section className="mb-10 flex flex-col items-start gap-10">
			{context === 'home' && (
				<div className="grid w-full grid-cols-4">
					<div className="col-span-3 grid grid-cols-1 gap-2">
						<div className="flex items-center gap-3">
							{navbarItems.map((item) => (
								<a
									key={item.id}
									href={item.url}
									target="_blank"
									rel="noopener noreferrer"
									className="rounded-xl border px-2 py-1 text-sm text-slate-500 ring-slate-400 transition-all hover:ring-1"
								>
									{item.label}
								</a>
							))}
						</div>
						<SocialLinks />
					</div>
					<Search />
				</div>
			)}
			<div className="grid w-full grid-cols-1 items-start gap-5">
				{posts.map((post) => (
					<PostPreviewHome
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage?.url}
						date={post.publishedAt}
						author={{
							name: post.author.name,
							profilePicture: post.author.profilePicture,
						}}
						slug={post.slug}
						excerpt={post.brief}
					/>
				))}
			</div>
		</section>
	);
};
