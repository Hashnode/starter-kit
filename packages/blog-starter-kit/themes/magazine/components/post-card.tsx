import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';

export default function PostCard({ host, post }: any) {
	return (
		<div className="overflow-hidden rounded-lg shadow-lg card">
			<Link href={`/${post.slug}`}>
				{/* {post.coverImage && (
					<img
						alt="Cover image for A Guide to CSS Flexbox"
						className="object-cover w-full h-auto max-w-md"
						src={post.coverImage.url}
					/>
				)} */}
				<h3 className="p-4 text-xl font-semibold">{post.title}</h3>
				<p className="p-4 text-gray-500">Posted on {getFormattedDate(post.publishedAt)}</p>
				<p className="p-4 mt-2 text-secondary-foreground">{post.brief}</p>
                
			</Link>
		</div>
	);
}
