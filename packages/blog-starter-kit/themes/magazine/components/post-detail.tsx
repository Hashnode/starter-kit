'use client';

// import Tag from "../tag/Tag";
import { useHashnodePostDetails } from 'hashnode-client';
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
				<article className="flex flex-col items-center justify-center p-3 mt-10 mb-16 bg-white ">
					<img className="rounded-lg" src={post.coverImage?.url} alt={post.title} />
					<h1 className="pt-5 text-4xl font-bold">{post?.title}</h1>
					<h2 className="pt-3 pb-3 text-xl">{post.subtitle}</h2>
					{/* <div className="flex mb-4">
						{post?.tags?.map((tag) => <Tag tag={tag} key={tag.id} host={host} />)}
					</div> */}
					<div className="prose " dangerouslySetInnerHTML={{ __html: post?.content?.html }} />

					{/* <Markdown className="prose">{post?.content?.html}</Markdown> */}
					{/* <div className="w-full">
						<PostComments host={host} postId={slug} />
					</div> */}
				</article>
			)}
		</>
	);
}
