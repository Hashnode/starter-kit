'use client';

import useGetBlogById from '@/hooks/useGetBlogById';
import Image from 'next/image';
import { useEffect } from 'react';
import BlogMarkdown from './blogMarkdown';

const BlogPost = (prop: { id: string }) => {
	let { data, error, loading, setPostId } = useGetBlogById();

	if (!prop.id) {
		throw new Error('Invalid blog check your URL');
	}

	if (error) {
		throw new Error('useGetBlogById: ' + error.message);
	}

	useEffect(() => {
		if (prop.id) {
			setPostId(prop.id);
		}
	}, [prop.id]);

	// return (
	// 	<>
	// 		{!data ? (
	// 			<NotFoundLottie />
	// 		) : (
	// 			<div>
	// 				<div className="flex flex-col">
	// 					<span className="text-xl font-medium tracking-wider font-montserrat">
	// 						{data?.title}
	// 					</span>
	// 					<span>{data?.author.name}</span>
	// 				</div>

	// 				<div className="relative w-full p-4 mb-6 h-72 rounded-xl">
	// 					<Image
	// 						src={(data?.coverImage?.url as string) || ''}
	// 						alt={`Cover Image for ${data?.slug}`}
	// 						sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
	// 						fill
	// 						priority
	// 					/>
	// 				</div>
	// 				<div className="p-2">
	// 					<BlogMarkdown src={data?.content?.markdown as string} />
	// 				</div>
	// 			</div>
	// 		)}
	// 	</>
	// );
	return (
		<>
			<div>
				<div className="flex flex-col">
					<span className="font-montserrat text-xl font-medium tracking-wider">{data?.title}</span>
				</div>

				<div className="z-0 flex w-full flex-col justify-center">
					<div className="relative mb-6 h-72 w-[95%] items-start justify-center rounded-xl p-4">
						<Image
							src={(data?.coverImage?.url as string) || ''}
							alt={`Cover Image for ${data?.slug}`}
							sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
							fill
							priority
						/>
					</div>
				</div>

				<div className="p-2">
					<BlogMarkdown src={data?.content?.markdown as string} />
				</div>
			</div>
		</>
	);
};

export default BlogPost;
