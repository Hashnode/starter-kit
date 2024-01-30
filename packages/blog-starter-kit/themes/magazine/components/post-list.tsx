import PostCard from "./post-card";
import LatestPost from "./latest-post";

export default function PostList({
  host,
  posts,
  loadNextPost,
  loading,
  hasNextPage,
}) {
  const latestPost = posts[0].node;
  const restPosts = posts.slice(1);

  return (
    <div className="pb-8">
      <div className="px-8 pt-4 pb-8 bg-gray-100">
        <LatestPost post={latestPost} host={host} />
      </div>
      {restPosts.length > 0 && (
        <div className="px-8 py-16">
          <div className="grid grid-cols-1 gap-4 mt-4 md:grid-cols-2 lg:grid-cols-3">
            {restPosts.map((post) => (
              <PostCard key={post?.node?.slug} host={host} post={post?.node} />
            ))}
          </div>

          <div className="flex justify-center w-full">
            <button
              disabled={loading || !hasNextPage}
              className="p-2 mt-8 text-lg text-white capitalize bg-black w-fit hover:bg-black disabled:bg-gray-600"
              onClick={loadNextPost}
            >
              {!hasNextPage
                ? "No More Posts"
                : loading
                ? "Loading More.."
                : `Show More Posts`}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}