import { PostFragment } from "../blog-starter-kit/themes/enterprise/generated/graphql";
import PostPreview from "./post-preview";

type Props = {
  posts: PostFragment[];
};

const MoreStories = ({ posts }: Props) => {
  return (
    <section className="flex flex-col items-start gap-10 mb-10">
      <h2 className="text-xl font-bold leading-tight tracking-tight lg:text-3xl">
        More Stories
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-20 gap-y-10 md:gap-y-10">
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
      {/* <div className="flex flex-row items-center justify-center w-full">
        <Button label="View all posts" />
      </div> */}
    </section>
  );
};

export default MoreStories;
