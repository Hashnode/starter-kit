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
				<div className="flex flex-col items-center justify-center p-3 mt-24 mb-16 ">
					<img
						className="max-w-2xl rounded-lg"
						src={post.coverImage?.url ? post.coverImage.url : 'images/gradient.jpg'}
						alt={post.title}
					/>
					<h1 className="pt-5 text-4xl font-bold">{post?.title}</h1>
					<h2 className="pt-3 pb-2 text-xl">{post.subtitle}</h2>
					<div className="flex flex-wrap mb-4 space-x-4">
						{post?.tags?.map((tag: any) => (
							<Badge key={tag.id} variant="secondary" className="m-2 md:m-0">
								{tag.name}
							</Badge>
						))}
					</div>
					<div
						className="w-full px-5 mx-auto prose break-words dark:prose-invert prose-p:font-ranadeLight first:prose-p:mt-0 prose-img:max-w-full prose-p:leading-snug prose-a:underline hover:prose-a:bg-primary-50 dark:hover:prose-a:text-primary-500 dark:hover:prose-a:bg-neutral-800 prose-blockquote:leading-snug prose-a:leading-snug prose-figure:leading-snug prose-figcaption:leading-snug prose-pre:leading-snug prose-li:leading-snug prose-ul:leading-snug prose-ol:leading-snug prose-th:leading-snug prose-td:leading-snug lg:prose-xl dark:prose-pre:bg-neutral-900 first:prose-h1:mt-0 first:prose-h2:mt-0 first:prose-h3:mt-0 first:prose-h4:mt-0 first:prose-h5:mt-0 prose-h1:font-satoshiBlack prose-h2:font-satoshiBold text-slate-950 dark:text-neutral-50 md:max-w-screen-md"
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
