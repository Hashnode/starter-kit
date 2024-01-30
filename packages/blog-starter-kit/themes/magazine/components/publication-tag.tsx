'use client';
import PostListTag from '@/app/tag/[slug]/_components/post-list-tag';
import { useHashnodePosts } from 'hashnode-client';
import { Empty } from './empty';
import { Loader } from './loader';

const PublicationTag = ({ host, tag }: any) => {
	const { loading, posts, loadMorePost, pageInfo } = useHashnodePosts({ host: host, tags: tag });
	console.log(tag, 'TAG TAG');
	const tagName = tag
		? posts[0]?.node.tags.filter((tagBox: any) => tagBox.id === tag)[0]?.name
		: undefined;
	console.log(posts, 'POST TAG');
	console.log(tagName, 'TAG NAME');
	console.log(loadMorePost);
	if (posts.length === 0 && loading) {
		return <Loader description="Searching Post" />;
	}

	return (
		<div>
			{tagName && (
				<h1 className="py-4 text-2xl font-bold ">
					Results for Tag&nbsp;:&nbsp;<span className="text-indigo-400">{tagName}</span>
				</h1>
			)}
			{posts && posts.length > 0 ? (
				<PostListTag
					hasNextPage={pageInfo.hasNextPage}
					loading={loading}
					posts={posts}
					loadNextPost={loadMorePost}
				/>
			) : (
				<>
					<Empty label="No Post with this Tag Found" />
				</>
			)}
		</div>
	);
};

export default PublicationTag;
