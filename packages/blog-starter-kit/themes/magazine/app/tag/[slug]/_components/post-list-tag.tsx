import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { getFormattedDate } from '@/lib/utils';
import Link from 'next/link';

// interface PostListTagProps {}

const PostListTag = ({ host, posts, loadNextPost, loading, hasNextPage }: any) => {
	return (
		<>
			{posts.map((post: any, index: number) => (
				<Card key={index} className="mb-4 border border-none">
					<Link href={`/${post.node.slug}`}>
						<CardHeader>
							<CardTitle>{post.node.title}</CardTitle>
						</CardHeader>
					</Link>
					<CardContent className=" text-muted-foreground">
						<div className="space-y-3">
							<Link href={`/${post.node.slug}`}>
								<p>{post.node.brief}</p>
							</Link>
							<p className="space-x-2">
								{post.node.tags.map((tag: any) => (
									<Link href={`/tag/${tag.id}`}>
										<Badge variant="secondary">{tag.name}</Badge>
									</Link>
								))}
							</p>
							<p>Posted on {getFormattedDate(post.node.publishedAt)}</p>
						</div>
					</CardContent>
				</Card>
			))}
		</>
	);
};

export default PostListTag;
