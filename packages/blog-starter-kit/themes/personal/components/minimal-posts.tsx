import {
  Post
} from "../generated/graphql";
import MinimalPostPreview from "./minimal-post-preview";

type Props = {
  posts: Post[];
  context: "home" | "series" | "tag";
};

const MinimalPosts = ({ posts }: Props) => {
  return (
    <section className="flex flex-col items-stretch w-full gap-10 lg:max-w-lg">
      {posts.map((post) => (
        <MinimalPostPreview
          key={post.id}
          title={post.title}
          date={post.publishedAt}
          author={{
            username: post.author.username,
            name: post.author.name,
          }}
          slug={post.slug}
          url={post.url}
          commentCount={post.comments?.totalDocuments}
        />
      ))}
    </section>
  );
};

export default MinimalPosts;
