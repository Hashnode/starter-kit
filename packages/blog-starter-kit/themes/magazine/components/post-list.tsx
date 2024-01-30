import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';
import PostCard from './post-card';

export default function PostList({ host, posts, loadNextPost, loading, hasNextPage }: any) {
	const latestPost = posts.slice(0, 5);
	const restPosts = posts.slice(5);

	return (
		// <div className="pb-8">
		// 	<div className="px-8 pt-4 pb-8 bg-gray-100">
		// 		<LatestPost post={latestPost} host={host} />
		// 	</div>
		// {restPosts.length > 0 && (
		// 	<div className="px-8 py-16">
		// 		<div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
		// 			{restPosts.map((post) => (
		// 				<PostCard key={post?.node?.slug} host={host} post={post?.node} />
		// 			))}
		// 		</div>

		// 		<div className="flex justify-center w-full">
		// 			<button
		// 				disabled={loading || !hasNextPage}
		// 				className="p-2 mt-8 text-lg text-white capitalize bg-black w-fit hover:bg-black disabled:bg-gray-600"
		// 				onClick={loadNextPost}
		// 			>
		// 				{!hasNextPage ? 'No More Posts' : loading ? 'Loading More..' : `Show More Posts`}
		// 			</button>
		// 		</div>
		// 	</div>
		// )}
		// </div>
		<>
			<div className="grid grid-cols-1 gap-6 px-3 mt-10 lg:grid-cols-3">
				{latestPost.map(
					(post: any, i: number) =>
						i < 5 && (
							<div
								key={i}
								className={`group relative overflow-hidden rounded-xl border  border-neutral-800  bg-neutral-900 hover:cursor-pointer hover:border-blue-300
                    ${i === 0 && 'row-start-1 md:row-span-2 '}
                    ${i === 1 && 'h-64 lg:h-[280px] '}
                    ${i === 2 && 'h-64 lg:h-80 '}
                    ${i === 3 && 'h-64 lg:-mt-9 lg:h-[330px] '}
                    ${i === 4 && 'h-72'}
                    `}
							>
								<Link href={`/${post.node.slug}`}>
									<img
										className="object-cover w-full h-full"
										src={post.node.coverImage.url}
										alt=""
									/>
									<div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8">
										<p className="absolute z-20 ml-2 text-xl font-InterBold bottom-14 text-neutral-50 group-hover:hidden">
											{post.node.title}
										</p>

										<div className="absolute z-20 flex items-center justify-between w-full px-2 text-sm font-bold bottom-3 text-neutral-500 group-hover:hidden">
											<div className="flex items-center gap-x-2">
												<img
													className="object-cover w-6 h-6 rounded-full"
													src={post.node.author.profilePicture}
													alt=""
												/>

												<p className="text-base">{post.node.author.name}</p>
												<br />
												<p className="p-4 text-gray-500">
													Posted on {getFormattedDate(post.node.publishedAt)}
												</p>
											</div>
										</div>
										<div className="hidden text-primary bg-zinc-900/20 group-hover:block">
											<p className="">{post.node.brief}</p>
										</div>
									</div>
								</Link>
								<div className=" absolute  bottom-0 z-10 h-44  w-full bg-gradient-to-t  from-[#000000] via-black/80   to-transparent transition-all duration-200 ease-in" />
							</div>
						),
				)}
			</div>
			<h1 className="mt-16 ml-2 text-4xl font-semibold ">Other Post</h1>
			{restPosts.length > 0 && (
				<div className="px-8 pt-8 pb-16">
					<div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 ">
						{restPosts.map((post: any) => (
							<PostCard key={post?.node?.slug} host={host} post={post?.node} />
						))}
					</div>

					<div className="flex justify-center w-full">
						<button
							disabled={loading || !hasNextPage}
							className="p-2 mt-8 text-lg text-white capitalize bg-black w-fit hover:bg-black disabled:bg-gray-600"
							onClick={loadNextPost}
						>
							{!hasNextPage ? 'No More Posts' : loading ? 'Loading More..' : `Show More Posts`}
						</button>
					</div>
				</div>
			)}
		</>
	);
}
