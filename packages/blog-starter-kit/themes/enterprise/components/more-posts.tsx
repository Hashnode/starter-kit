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
				<h2 className="text-xl font-bold leading-tight tracking-tight text-slate-900 dark:text-neutral-50 lg:text-3xl">
					More Posts
				</h2>
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
				{/* <>
          <div className="flex flex-col items-stretch gap-3 animate-pulse">
            <div className="w-full pt-[56.25%] border dark:border-neutral-800 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <h3 className="w-full h-10 rounded-xl bg-slate-200 dark:bg-neutral-800"></h3>
            <div className="w-full h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-3/4 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-2/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
          </div>
          <div className="flex flex-col items-stretch gap-3 animate-pulse">
            <div className="w-full pt-[56.25%] border dark:border-neutral-800 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <h3 className="w-full h-10 rounded-xl bg-slate-200 dark:bg-neutral-800"></h3>
            <div className="w-full h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-3/4 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-2/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
          </div>
          <div className="flex flex-col items-stretch gap-3 animate-pulse">
            <div className="w-full pt-[56.25%] border dark:border-neutral-800 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <h3 className="w-full h-10 rounded-xl bg-slate-200 dark:bg-neutral-800"></h3>
            <div className="w-full h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-3/4 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-2/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
          </div>
        </> */}
			</div>
			{/* <div className="flex flex-row items-center justify-center w-full">
        <Button
          type="outline"
          icon={<ChevronDownSVG className="w-5 h-5 stroke-current" />}
          label="Load more posts"
        />
      </div> */}
		</section>
	);
};
