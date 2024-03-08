import PublicationTag from '@/components/publication-tag';

const Page = ({ params: { slug } }: any) => {
	return (
		<>
			<div className="mx-[5vw] mt-24">
				<PublicationTag host={process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST} tag={slug} />
			</div>
		</>
	);
};

export default Page;
