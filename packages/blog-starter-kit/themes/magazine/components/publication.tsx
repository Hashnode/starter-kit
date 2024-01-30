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
		return <p>Loading Posts...</p>;
	}

	return (
		<div>
			{/* <div className="flex items-end w-full bg-gray-100">
				<Link className="px-3 pt-2 ml-auto text-xl" href={`${host}/about`}>
					About Page
				</Link>
			</div> */}
			{/* {tagName && (
				<h1 className="px-8 py-4 text-2xl font-bold bg-gray-100">
					Results for Tag&nbsp;|&nbsp;{tagName}
				</h1>
			)} */}
			{posts && posts.length > 0 ? (
				<PostList
					hasNextPage={pageInfo.hasNextPage}
					loading={loading}
					host={host}
					posts={posts}
					loadNextPost={loadMorePost}
				/>
			) : (
				<>
					<h1>No Post</h1>
				</>
			)}
		</div>
	);
};

export default Publication;
