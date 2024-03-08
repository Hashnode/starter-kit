import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';
import PostCard from './post-card';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { Button } from './ui/button';

const postHeights = [
	'row-start-1 md:row-span-3',
	'h-60 lg:h-[260px]',
	'h-70 lg:h-90',
	'h-60 lg:-mt-8 lg:h-[320px]',
	'h-80 mx-auto',
];

export default function PostList({ host, posts, loadNextPost, loading, hasNextPage }: any) {
	const latestPost = posts.slice(0, 5);
	const restPosts = posts.slice(5);
	return (
		<>
			<div className="grid grid-cols-1 gap-6 px-3 mt-10 lg:grid-cols-3">
				{latestPost.map(
					(post: any, i: number) =>
						i < 5 && (
							<div
								key={i}
								className={`group relative hover:shadow-2xl dark:hover:shadow-blue-500 hover:shadow-slate-700 overflow-hidden rounded-xl border border-neutral-800 bg-neutral-900 hover:cursor-pointer hover:border-blue-300 ${postHeights[i]}`}
							>
								<Link href={`/${post.node.slug}`}>
									<img
										className="object-cover w-full h-full"
										src={post.node.coverImage.url}
										alt=""
									/>
									<div className="absolute bottom-0 flex w-full flex-col justify-start rounded-b-[24px] bg-[rgba(0,0,0,0.5)] p-8 lg:p-0 xl:p-8">
										<p className="absolute z-20 mb-5 ml-2 text-xl font-InterBold bottom-14 text-neutral-50 group-hover:hidden">
											{post.node.title}
										</p>

										<div className="absolute z-20 flex items-center justify-between w-full px-2 text-sm font-bold bottom-3 text-neutral-500 group-hover:hidden">
											<div className="flex items-center mt-24 gap-x-2">
												<Avatar className="w-6 h-6">
													{' '}
													<AvatarImage src={post.node.author.profilePicture} />
													<AvatarFallback>SC</AvatarFallback>
												</Avatar>

												<p className="text-xs md:text-base">{post.node.author.name}</p>
												<br />
												<p className="p-4 text-xs text-gray-500 md:text-base">
													Posted on {getFormattedDate(post.node.publishedAt)}
												</p>
											</div>
										</div>
										<div className="hidden text-white dark:text-primary bg-zinc-900/20 group-hover:block">
											<p className="">{post.node.brief}</p>
										</div>
									</div>
									<div className=" absolute  bottom-0 z-10 h-44  w-full bg-gradient-to-t  from-[#000000] via-black/40   to-transparent transition-all duration-200 ease-in" />
								</Link>
							</div>
						),
				)}
			</div>
			<h1 className="mt-16 ml-2 text-4xl font-satoshiBold ">Other Articles</h1>
			{restPosts.length > 0 && (
				<div className="px-8 pt-8 pb-16">
					<div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 ">
						{restPosts.map((post: any) => (
							<PostCard key={post?.node?.slug} host={host} post={post?.node} />
						))}
					</div>

					<div className="flex justify-center w-full">
						<Button
							disabled={loading || !hasNextPage}
							className="mt-10 hover:text-indigo-500"
							variant="ghost"
							onClick={loadNextPost}
						>
							{!hasNextPage ? 'The End' : loading ? 'Loading More..' : `Show More Posts`}
						</Button>
					</div>
				</div>
			)}
		</>
	);
}
