'use client';

// import Tag from "../tag/Tag";
import {} from '@radix-ui/react-avatar';
import { useHashnodePostDetails } from 'hashnode-client';
import PostComments from './post-comment';
import { Badge } from './ui/badge';
// import PostComments from "./PostComments";

export default function PostDetails({ slug }: any) {
	console.log(slug, 'SLUG');
	const { post, error, loading } = useHashnodePostDetails({
		host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
		slug: slug,
	});
	console.log(post, 'POST');
	return (
		<>
			{!loading && (
				<div className="mb-16 mt-24 flex flex-col items-center justify-center p-3 ">
					<img
						className="max-w-2xl rounded-lg"
						src={post.coverImage?.url ? post.coverImage.url : 'images/gradient.jpg'}
						alt={post.title}
					/>
					<h1 className="pt-5 text-4xl font-bold">{post?.title}</h1>
					<h2 className="pb-2 pt-3 text-xl">{post.subtitle}</h2>
					<div className="mb-4 flex flex-wrap space-x-4">
						{post?.tags?.map((tag: any) => (
							<Badge key={tag.id} variant="secondary" className="m-2 md:m-0">
								{tag.name}
							</Badge>
						))}
					</div>
					<div
						className="prose lg:prose-xl dark:prose-invert"
						dangerouslySetInnerHTML={{ __html: post?.content?.html }}
					/>

					<div className="w-full ">
						<PostComments postId={slug} />
					</div>
				</div>
			)}
		</>
	);
}
