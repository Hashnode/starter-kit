'use client';

import useContext from '@/context/index';
import { BlogData } from '@/hooks/useGetBlogPosts';
import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

import { getBlogPostById } from '@/lib/queries/getBlogPostById';
import { relativeTime } from '@/lib/utils';
import Image from 'next/image';
import WaveLoader from '../loaders';
import BlogMarkdown from './blogMarkdown';

const BlogPost = () => {
	let context = useContext();
	const [data, setData] = useState<BlogData | null>(null); // TODO refactor later
	const searchParams = useSearchParams();

	const blogId = searchParams.get('id');

	useEffect(() => {
		let isMounted = true;

		async function fetchData() {
			try {
				if (context.blog) {
					setData(context.blog);
				} else if (blogId) {
					if (!isMounted) {
						return;
					}

					let blog = await getBlogPostById(blogId);

					if (!blog) {
						throw new Error('Could not fetch blog data');
					}

					setData(blog as unknown as BlogData);
				}
			} catch (e) {
				console.error('Error fetching data: ', e);
			}
		}

		fetchData();

		return () => {
			isMounted = false;
		};
	}, [context.blog, blogId]);

	return (
		<>
			{!data ? (
				<div className="mt-10 flex w-[360px] items-center justify-center md:w-full">
					<WaveLoader />
				</div>
			) : (
				<div className="mt-10 w-[360px] md:w-full">
					<div className="flex h-56 w-full flex-col items-center font-bold">
						<div>
							<span className="font-montserrat text-2xl font-bold tracking-wider">
								{data.title}
							</span>
						</div>
						<div className="mt-5">
							<span className="font-montserrat text-base font-medium tracking-wider">
								{relativeTime(data.publishedAt)}
							</span>
						</div>
						<div className="mt-2 border-b-2 underline">
							<span className="font-montserrat text-base font-medium tracking-wider">
								{data.author.name}
							</span>
						</div>
					</div>

					<div className="z-0 flex w-full flex-col justify-center">
						<div className="relative mb-6 h-72 items-start justify-center rounded-xl p-4">
							<Image
								src={data.coverImage?.url ?? '/cover.jpg'}
								alt={`Cover Image for ${data.title}`}
								sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
								fill
								priority
							/>
						</div>
					</div>

					<BlogMarkdown src={data.content?.markdown as string} />
				</div>
			)}
		</>
	);
};

export default BlogPost;
