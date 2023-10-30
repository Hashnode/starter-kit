import CommentsSheet from './comments-sheet';
import Dropdown from './dropdown';
import ResponseList from './response-list';

const PostCommentsSidebar = ({
  hideSidebar,
  isPublicationPost,
  selectedFilter,
  sortResponse,
  post,
}: {
  hideSidebar: () => void;
  isPublicationPost: boolean;
  selectedFilter: string;
  sortResponse: (key: string) => void;
  post: any; // TODO:tobefixed
}) => (
  <CommentsSheet hideSheet={hideSidebar}>

    {post.responseCount > 1 && !post.preferences.disableComments && (
      <div className="my-4 ml-4">
        <Dropdown
          elements={[
            { key: 'popular', name: 'Top Comments' },
            { key: 'recent', name: 'New Comments' },
          ]}
          defaultName={selectedFilter === 'dateAdded' ? 'New Comments' : 'Top Comments'}
          onElementSelect={sortResponse!}
        />
      </div>
    )}

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
