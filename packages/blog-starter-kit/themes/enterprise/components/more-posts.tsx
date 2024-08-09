import { PostFragment } from '../generated/graphql';
import { PostPreviewHome } from './post-preview-home';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MorePosts = ({ posts, context }: Props) => {
	return (
		<section className="mb-10 flex flex-col items-start gap-10">
			{context === 'home' && (
				<h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl">
					More Posts
				</h2>
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
