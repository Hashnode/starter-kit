import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from './ui/badge';

export default function PostCard({ host, post }: any) {
	return (
		<div className="overflow-hidden rounded-lg shadow-lg card">
			<div className="flex flex-wrap space-x-3">
				{post.tags.map((tag: any) => (
					<Link href={`/tag/${tag.id}`}>
						<Badge variant="secondary">{tag.name}</Badge>
					</Link>
				))}
			</div>
			<Link href={`/${post.slug}`}>
				{/* {post.coverImage && (
					<img
						alt="Cover image for A Guide to CSS Flexbox"
						className="object-cover w-full h-auto max-w-md"
						src={post.coverImage.url}
					/>
				)} */}

				<h3 className="p-4 text-xl font-semibold">{post.title}</h3>
				<p className="p-4 text-muted-foreground">Posted on {getFormattedDate(post.publishedAt)}</p>
				<p className="p-4 mt-2 text-secondary-foreground">{post.brief}</p>
			</Link>
		</div>
	);
}
