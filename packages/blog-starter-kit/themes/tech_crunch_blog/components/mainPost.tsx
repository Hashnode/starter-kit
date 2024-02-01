import { BlogData } from '@/hooks/useGetBlogPosts';
import Image from 'next/image';

const MainPost = (prop: { data: BlogData | undefined }) => {
	if (!prop.data) {
		// TODO handle when the data is empty
	}
	return (
		<div className="mt-10 flex flex-col gap-3 p-2">
			<h2 className="font-montserrat text-balance text-3xl font-semibold leading-7">
				{prop.data?.title}
			</h2>
			<span className="pt-2 text-lg font-medium lg:text-base">{prop.data?.author.name}</span>
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
