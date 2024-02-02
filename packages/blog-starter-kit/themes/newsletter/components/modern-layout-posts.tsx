import { Waypoint } from 'react-waypoint';

import Button from './hn-button';
import { ChevronDownSVG, BookOpenSVG, ChartMixedSVG } from './icons/svgs';
import { PageInfo, RequiredPublicationFieldsFragment, PostThumbnailFragment } from '../generated/graphql';
import BlogPostPreview from './magazine-blog-post-preview-home';
import { kFormatter } from '../utils/image';
import { format } from 'date-fns'; // Import the format function for date formatting

const PublicationPosts = (props: {
  posts: {
    edges: Array<{
      cursor: string;
      node: PostThumbnailFragment; 
    }>;
    pageInfo: Pick<PageInfo, 'hasNextPage' | 'endCursor'>;
  };
  publication: Pick<RequiredPublicationFieldsFragment, 'features'>;
  fetchMore: () => void;
  fetching: boolean;
  fetchedOnce: boolean;
}) => {
  const { posts, publication, fetchMore, fetching, fetchedOnce } = props;
  const { edges, pageInfo } = posts;

  const slicedPosts = edges.map((edge) => edge.node).slice(1);

  return (
    <div className="blog-articles-area mx-auto mt-10 dark:border-slate-800">
      <div className="blog-articles-container container mx-auto flex flex-col px-4 py-4 xl:py-10 xl:px-10 2xl:px-24 2xl:py-5">
        {slicedPosts.map((post) => (
          <div key={post.id} className="flex mb-4">
            <div className="w-full">
              {/* Adjust the width as needed */}
              <div className="flex flex-col h-full">
                <div className="text-left mb-4">
                  <h2 className="text-4xl font-bold text-center xl:text-left mb-2">{post.title}</h2>
                </div>
                <div className="flex justify-center mt-4">
                  {/* Post Image, Read Time, Analytics - Adjust as needed */}
                </div>
                <div className="blog-article-card-article-meta flex flex-row text-sm">
                  {publication.features.readTime.isEnabled && post.readTimeInMinutes ? (
                    <>
                      <p className="text-slate-500 dark:text-slate-400">
                        {/* <BookOpenSVG className="mr-2 h-4 w-4 fill-current" /> */}
                        <span>{post.readTimeInMinutes} min read</span>
                      </p>
                    </>
                  ) : null}
                  {post.readTimeInMinutes && Number(post.views) > 0 && publication.features.viewCount.isEnabled ? (
                    <p className="mx-2 font-bold text-slate-500 dark:text-slate-400">&middot;</p>
                  ) : null}
                  {Number(post.views) > 0 && publication.features.viewCount.isEnabled ? (
                    <p className="text-slate-500 dark:text-slate-400">
                      {/* <ChartMixedSVG className="mr-2 h-4 w-4 fill-current" /> */}
                      <span>{kFormatter(post.views)} views</span>
                    </p>
                  ) : null}
                </div>
                <div className="flex items-center mt-2">
                  <p className="text-slate-500 dark:text-slate-400">Written by</p>
                  <span className="ml-2">{post.author.name}</span>
                </div>
                <div className="text-right">
                  
                </div>
              </div>
            </div>
            <div className="w-full pl-4">
              {/* Adjust the width as needed */}
              <BlogPostPreview post={post} publication={publication} />
              
            </div>
          </div>
        ))}
        {fetching && (
          <div className="animate-pulse">
            <div
              style={{ paddingTop: '52.5%' }}
              className="mb-4 block w-full rounded-lg bg-slate-200 dark:border-slate-800"
            />
            <div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
            <div className="mb-2 h-4 rounded-lg bg-slate-200 dark:border-slate-800" />
            <div className="mb-2 h-4 w-2/3 rounded-lg bg-slate-200 dark:border-slate-800" />
            <div className="mb-2 h-4 w-1/2 rounded-lg bg-slate-200 dark:border-slate-800" />
          </div>
        )}
      </div>
      {pageInfo.hasNextPage && !fetchedOnce && !fetching ? (
        <div className="flex justify-center py-10">
          <Button
            type="button"
            variant="transparent"
            className="px-4 py-2 text-lg text-blue-600 dark:text-blue-500"
            onClick={fetchMore}
          >
            <span>Load more</span>
            <ChevronDownSVG className="ml-3 h-5 w-5 fill-current" />
          </Button>
        </div>
      ) : null}
      {fetchedOnce && pageInfo.hasNextPage ? <Waypoint onEnter={fetchMore} topOffset="-20%" /> : null}
      {fetchedOnce && !pageInfo.hasNextPage ? (
        <div className="mt-10 px-16 py-8 text-center font-heading font-bold text-slate-700 dark:text-slate-300">
          <p className="text-2xl">You&apos;ve reached the end! 👋</p>
        </div>
      ) : null}
    </div>
  );
};

export default PublicationPosts;
