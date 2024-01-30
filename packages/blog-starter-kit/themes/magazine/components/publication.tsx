'use client';
import { useHashnodePosts } from 'hashnode-client';
// import PostList from "./PostList";
// import NoPosts from "../search/NoPosts";
import PostList from './post-list';

const Publication = ({ host }: any) => {
	const settings = { host: host };
	const { loading, posts, loadMorePost, pageInfo } = useHashnodePosts(settings, { first: 10 });

	// const tagName = tag
	// 	? posts[0]?.node.tags.filter((tagBox:any) => tagBox.id === tag)[0]?.name
	// 	: undefined;
	console.log(posts);
	console.log(loadMorePost);
	if (posts.length === 0 && loading) {
		return <Loader description="Post Loading" />;
	}

	return (
		<div>
			{posts && posts.length > 0 ? (
				<Suspense fallback={<Loader description="Post Loading" />}>
					<PostList
						hasNextPage={pageInfo.hasNextPage}
						loading={loading}
						host={host}
						posts={posts}
						loadNextPost={loadMorePost}
					/>
				</Suspense>
			) : (
				<>
					<Empty label="This User do not have any post published yet" />
				</>
			)}
		</div>
	);
};

export default Publication;

import { Skeleton } from '@/components/ui/skeleton';
import { Suspense } from 'react';
import { Empty } from './empty';
import { Loader } from './loader';

export function SkeletonDemo() {
	return (
		<div className="flex items-center space-x-4">
			<Skeleton className="h-12 w-12 rounded-full" />
			<div className="space-y-2">
				<Skeleton className="h-4 w-[250px]" />
				<Skeleton className="h-4 w-[200px]" />
			</div>
		</div>
	);
}
