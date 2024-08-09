import { PostFragment } from 'generated/graphql';
import { ViewType } from 'types/ViewType';
import { usePostsContext } from './contexts/postsContext';
import { PostPreview } from './post-preview';
import { PostPreviewHome } from './post-preview-home';

type Props = {
	posts: PostFragment[];
};

function PostsList({ posts }: Props) {
	const { view } = usePostsContext();

	switch (view) {
		case ViewType.GRID:
			return (
				<div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
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
			);

		case ViewType.LIST:
			return (
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
			);

		default:
			return;
	}
}

export default PostsList;
