import { PostFullFragment } from '../generated/graphql';
import CommentsSheet from './comments-sheet';
import ResponseList from './response-list';

const PostCommentsSidebar = ({
  hideSidebar,
  isPublicationPost,
  selectedFilter,
  post,
}: {
  hideSidebar: () => void;
  isPublicationPost: boolean;
  selectedFilter: string;
  post: PostFullFragment;
}) => (
  <CommentsSheet hideSheet={hideSidebar}>

    {!post.preferences.disableComments ? (
      <ResponseList
        isPublicationPost={isPublicationPost}
        currentFilter={selectedFilter}
      />
    ) : (
      <div className="flex h-full items-center justify-center text-base text-slate-500 dark:text-slate-400">
        <p className="mx-auto w-4/5 text-center">The comments have been disabled by the author for this article</p>
      </div>
    )}
  </CommentsSheet>
);

export default PostCommentsSidebar;
