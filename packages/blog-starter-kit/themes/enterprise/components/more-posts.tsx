import { PostFragment } from '../generated/graphql';
import { PostPreview } from './post-preview';

type Props = {
	posts: PostFragment[];
	context: 'home' | 'series' | 'tag';
};

export const MorePosts = ({ posts, context }: Props) => {
	return (
		<section className="mb-10 flex flex-col items-start gap-10">
			{context === 'home' && (
			  <div className="text-center flex flex-col items-center">
			  <img className="w-1/2 block" src="https://9kelt5xnesj2nkgz.public.blob.vercel-storage.com/underline-G32Fu5noQ2QvXU7bIiaq9zclJsLPcm.png" />
			  <p className="text-md leading-snug text-slate-500 dark:text-neutral-400 text-lg max-w-xl mx-auto mt-4">
			  Kedilerle ve köpeklerle ilgili öğrenmek istediğiniz başka bir şey varsa önceki yazılarımıza göz atabilirsiniz.
			  </p>
			</div>
			)}
			<div className="grid items-start gap-5 md:grid-cols-2 xl:grid-cols-3">
				{posts.map((post) => (
					<PostPreview
						key={post.slug}
						title={post.title}
						coverImage={post.coverImage?.url}
						date={post.publishedAt}
						author={{
							name: post.author.name,
							profilePicture: post.author.profilePicture,
						}}
						slug={post.slug}
						excerpt={post.brief}
					/>
				))}
			</div>
		</section>
	);
};
