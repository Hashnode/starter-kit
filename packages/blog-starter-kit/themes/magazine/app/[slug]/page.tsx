import PostDetails from '@/components/post-detail';
import { FC } from 'react';

interface pageProps {
	params: {
		slug: string;
	};
}

const page: FC<pageProps> = ({ params: { slug } }) => {
	return (
		<>
			<PostDetails slug={slug} />
		</>
	);
};

export default page;
