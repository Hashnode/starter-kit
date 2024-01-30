import PublicationTag from '@/components/publication-tag';
import PostListTag from './_components/post-list-tag';

const Page = ({ params: { host, slug } }: any) => {
	return (
		<>
			<div className="mt-24 mx-[5vw]">
				<PublicationTag host={process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST} tag={slug} />
    	</div>
		</>
	);
};

export default Page;
