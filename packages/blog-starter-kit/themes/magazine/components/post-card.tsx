import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Card, CardDescription, CardTitle } from './ui/card';

export default function PostCard({ post }: any) {
	return (
		<Card className="overflow-hidden rounded-lg border-none p-3 shadow-lg">
			<div className="flex flex-wrap space-x-3">
				{post.tags.map((tag: any) => (
					<Link key={tag.id} href={`/tag/${tag.id}`}>
						<Badge variant="secondary">{tag.name}</Badge>
					</Link>
				))}
			</div>
			<Link href={`/${post.slug}`}>
				<CardTitle className="p-4 text-xl font-semibold">{post.title}</CardTitle>
				<CardDescription className="text-muted-foreground mt-2 px-4">
					<h1>{post.brief}</h1>
					<h2 className="mt-2">Posted: {getFormattedDate(post.publishedAt)}</h2>
				</CardDescription>
			</Link>
		</Card>
	);
}
