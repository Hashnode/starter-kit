'use client';

import BlogMarkdown from '@/components/blogMarkdown';
import WaveLoader from '@/components/loaders';
import useGetBlogById from '@/hooks/useGetBlogById';
import {} from 'next/font/google';
import Image from 'next/image';
import { useSearchParams } from 'next/navigation';
import { useEffect } from 'react';

// type Props = {
// 	params: { id: string };
// 	searchParams: { [key: string]: string | string[] | undefined };
// };

// export async function generateMetadata(
// 	{ params, searchParams }: Props,
// 	parent: ResolvingMetadata,
// ): Promise<Metadata> {
// 	// read route params
// 	const id = params.id;

// 	// fetch data
// 	const product = await fetch(`https://.../${id}`).then((res) => res.json());

// 	// optionally access and extend (rather than replace) parent metadata
// 	const previousImages = (await parent).openGraph?.images || [];

// 	return {
// 		title: product.title,
// 		openGraph: {
// 			images: ['/some-specific-page-image.jpg', ...previousImages],
// 		},
// 	};
// }

const ViewBlogPost = () => {
	let router = useSearchParams();
	let { data, error, loading, setPostId } = useGetBlogById();

	let blogId = router.get('id');

	if (!blogId) {
		throw new Error('Invalid blog id');
	}

	if (error) {
		throw new Error(error.message);
	}

	useEffect(() => {
		if (blogId) {
			setPostId(blogId);
		}
	}, [blogId]);

	return (
		<div>
			{loading || !data ? (
				<NoData />
			) : (
				<>
					<div className="flex flex-col">
						<span className="text-xl font-medium tracking-wider font-montserrat">{data.title}</span>
						<span>{data.author.name}</span>
					</div>
					<div className="relative z-0 w-full mb-6 h-72 rounded-xl">
						<Image
							src={data?.coverImage?.url as string}
							alt={`Cover Image for ${data?.slug}`}
							sizes="(max-width: 768px) 40vw, (max-width: 1200px) 50vw, 33vw"
							fill
							priority
						/>
					</div>
					<div className="p-2">
						<BlogMarkdown src={data?.content?.markdown as string} />
					</div>
				</>
			)}
		</div>
	);
};

const NoData = () => {
	return (
		<div className="flex items-center justify-center w-full col-span-6 h-96">
			<WaveLoader />
		</div>
	);
};

export default ViewBlogPost;
