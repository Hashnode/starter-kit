import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';
import { Badge } from './ui/badge';
import { Card, CardDescription, CardTitle } from './ui/card';

export default function PostCard({ post }: any) {
	console.log("POST POST ===>", post)
	return (
		<Card className="p-3 overflow-hidden border-none rounded-lg shadow-lg hover:shadow-2xl dark:hover:shadow-blue-500 hover:shadow-slate-700">
			<div className="flex flex-wrap space-x-3">
				{post.tags.map((tag: any) => (
					<Link key={tag.id} href={`/tag/${tag.id}`}>
						<Badge variant="secondary" className='font-ranadeLight'>{tag.name}</Badge>
					</Link>
				))}
			</div>
			<Link href={`/${post.slug}`}>
				<CardTitle className="p-4 text-xl font-satoshiBold">{post.title}</CardTitle>
				<CardDescription className="px-4 mt-2 text-muted-foreground">
					<h1 className='font-ranadeMedium'>{post.brief}</h1>
					<h2 className="mt-2 font-ranadeLightItalic">Posted: {getFormattedDate(post.publishedAt)}</h2>
				</CardDescription>
			</Link>
		</Card>
	);
}
