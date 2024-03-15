import { PostFragment } from '../generated/graphql';
import { PostPreview } from './post-preview';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MorePosts = ({ posts, context }: Props) => {
	return (
		<section className="mb-24 flex flex-col items-start">
			{context === 'home' && (
				<h2 className="w-full text-xl font-['Outfit'] font-bold leading-tight tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl border border-neutral-200 p-8">
					More Posts
				</h2>
			)}
			<div className="w-full grid items-start md:grid-cols-2 xl:grid-cols-3">
				{posts.map((post) => (
					<PostPreview
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
