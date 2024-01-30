import Publication from '@/components/publication';

export default function Home() {
	return (
		<div className="mx-[5vw] mt-10">
			<Publication host={process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST} />
		</div>
	);
}
