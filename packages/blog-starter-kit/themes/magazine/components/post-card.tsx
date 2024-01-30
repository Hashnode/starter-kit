import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Card, CardDescription, CardTitle } from './ui/card';

export default function PostCard({ post }: any) {
	return (
		<Card className="p-3 overflow-hidden border-none rounded-lg shadow-lg">
			<div className="flex flex-wrap space-x-3">
				{post.tags.map((tag: any) => (
					<Link key={tag.id} href={`/tag/${tag.id}`}>
						<Badge variant="secondary">{tag.name}</Badge>
					</Link>
				))}
			</div>
			<Link href={`/${post.slug}`}>
				<CardTitle className="p-4 text-xl font-semibold">{post.title}</CardTitle>
				<CardDescription className="px-4 mt-2 text-muted-foreground">
					<h1>{post.brief}</h1>
					<h2 className="mt-2">Posted: {getFormattedDate(post.publishedAt)}</h2>
				</CardDescription>
			</Link>
		</Card>
	);
}
