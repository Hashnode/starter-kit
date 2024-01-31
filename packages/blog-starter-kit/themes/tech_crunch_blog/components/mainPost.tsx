import { BlogData } from '@/hooks/useGetBlogPosts';
import Image from 'next/image';

const MainPost = (prop: { data: BlogData | undefined }) => {
	if (!prop.data) {
		// TODO handle when the data is empty
	}
	return (
		<div className="flex flex-col p-2">
			<h2 className="text-3xl font-semibold tracking-tight font-oswald text-balance">
				{prop.data?.title}
			</h2>
			<span className="pt-2 text-lg font-medium lg:text-lg">{prop.data?.author.name}</span>
			<div className="relative">
				<Image
					className="mt-2 h-[314px] w-full"
					width={447}
					height={300}
					src={prop.data?.coverImage.url ?? ''}
					alt={`Cover image for ${prop.data?.slug}`}
					priority
				/>
			</div>
		</div>
	);
};

export default MainPost;
