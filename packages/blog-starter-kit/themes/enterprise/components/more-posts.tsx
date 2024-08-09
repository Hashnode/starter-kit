import { PostFragment } from '../generated/graphql';
import PostsList from './posts-list';
import PostsTop from './posts-top';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MorePosts = ({ posts }: Props) => {
	return (
		<section className="mb-10 flex flex-col items-start gap-10">
			<PostsTop />
			<PostsList posts={posts} />
		</section>
	);
};
