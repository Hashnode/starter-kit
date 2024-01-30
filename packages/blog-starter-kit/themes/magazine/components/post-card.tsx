import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';

export default function PostCard({ host, post }) {
	return (
		<div className="overflow-hidden bg-white rounded-lg shadow-lg card">
			<Link href={`/${post.slug}`}>
				{/* <img
          alt="Cover image for A Guide to CSS Flexbox"
          className="object-cover w-full h-auto"
          src={post.coverImage.url}
        /> */}
				{post.coverImage && (
					<img
						alt="Cover image for A Guide to CSS Flexbox"
						className="object-cover w-full h-auto"
						src={post.coverImage.url}
					/>
				)}
				<h3 className="p-4 text-xl font-semibold">{post.title}</h3>
				<p className="p-4 text-gray-500">Posted on {getFormattedDate(post.publishedAt)}</p>
				<p className="p-4 mt-2 text-gray-700">{post.brief}</p>
			</Link>
		</div>
	);
}
