import { PostFragment } from "../blog-starter-kit/themes/enterprise/generated/graphql";
import Button from "./button";
import { ChevronDownSVG } from "./icons";
import PostPreview from "./post-preview";

type Props = {
  posts: PostFragment[];
};

const MorePosts = ({ posts }: Props) => {
  return (
    <section className="flex flex-col items-start gap-10 mb-10">
      <h2 className="text-xl font-bold leading-tight tracking-tight dark:text-neutral-50 text-slate-900 lg:text-3xl">
        More Posts
      </h2>
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
            url={post.url}
          />
        ))}
        {/* <>
          <div className="flex flex-col items-stretch gap-3 animate-pulse">
            <div className="w-full pt-[56.25%] border dark:border-neutral-600 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <h3 className="w-full h-10 mb-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></h3>
            <div className="w-full h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-3/4 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-2/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-neutral-800"></div>
              <div className="w-1/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-3 animate-pulse">
            <div className="w-full pt-[56.25%] border dark:border-neutral-600 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <h3 className="w-full h-10 mb-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></h3>
            <div className="w-full h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-3/4 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-2/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-neutral-800"></div>
              <div className="w-1/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-3 animate-pulse">
            <div className="w-full pt-[56.25%] border dark:border-neutral-600 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <h3 className="w-full h-10 mb-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></h3>
            <div className="w-full h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-3/4 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-2/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-neutral-800"></div>
              <div className="w-1/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            </div>
          </div>
          <div className="flex flex-col items-stretch gap-3 animate-pulse">
            <div className="w-full pt-[56.25%] border dark:border-neutral-600 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <h3 className="w-full h-10 mb-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></h3>
            <div className="w-full h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-3/4 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="w-2/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            <div className="flex flex-row items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-slate-200 dark:bg-neutral-800"></div>
              <div className="w-1/3 h-5 rounded-xl bg-slate-200 dark:bg-neutral-800"></div>
            </div>
          </div>
        </> */}
      </div>
      <div className="flex flex-row items-center justify-center w-full">
        <Button
          type="outline"
          icon={<ChevronDownSVG className="w-5 h-5 stroke-current" />}
          label="Load more posts"
        />
      </div>
    </section>
  );
};

export default MorePosts;
