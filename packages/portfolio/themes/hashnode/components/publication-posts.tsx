import { Waypoint } from 'react-waypoint';
import { twJoin } from 'tailwind-merge';

import { ChevronDownSVG } from './icons/svgs';
import Button from './hn-button';
import PubLoaderComponent from './pub-loader-component';

import { PageInfo, Preferences, RequiredPublicationFieldsFragment, PostThumbnailFragment } from '../generated/graphql';


import BlogPostPreview from './blog-post-preview';

export type RequiredPublicationProps = Pick<RequiredPublicationFieldsFragment, 'features' | 'isTeam'> & {
  preferences: Pick<Preferences, 'layout'>;
};

const PublicationPosts = (props: {
  posts: {
    edges: Array<{
      cursor: string;
      node: PostThumbnailFragment;
    }>;
    pageInfo: Pick<PageInfo, 'hasNextPage' | 'endCursor'>;
  };
  publication: RequiredPublicationProps;
  pinnedPostId?: string;
  fetchMore: () => void;
  fetching: boolean;
  fetchedOnce: boolean;
}) => {
  const { posts, publication, pinnedPostId, fetchMore, fetching, fetchedOnce } = props;
  const { edges, pageInfo } = posts;
  const {
    preferences: { layout },
  } = publication;

  return (
    <>
      <div
        className={twJoin('blog-posts-wrapper mt-10', layout === 'grid' ? 'flex flex-row flex-wrap items-start' : '')}
      >
        {edges.map(({ node }) => (
          <BlogPostPreview key={node.id} post={node} publication={publication} pinnedPostId={pinnedPostId} />
        ))}
        {pageInfo.hasNextPage && !fetchedOnce && !fetching ? (
          <div className="mb-16 flex w-full flex-row items-center justify-center">
            <Button
              type="button"
              variant="transparent"
              className="w-full justify-center px-4 py-2 text-lg text-blue-600 dark:text-blue-500"
              onClick={fetchMore}
            >
              <span>Load more</span>
              <ChevronDownSVG className="ml-3 h-5 w-5 fill-current" />
            </Button>
          </div>
        ) : null}
        {fetching ? <PubLoaderComponent layout={publication.preferences.layout} /> : null}
      </div>
      {fetchedOnce && pageInfo.hasNextPage ? <Waypoint onEnter={fetchMore} topOffset="-20%" /> : null}
      {fetchedOnce && !pageInfo.hasNextPage ? (
        <div className="blog-posts-end-card my-10 px-16 py-8 text-center font-heading font-bold text-slate-700 dark:text-slate-300">
          <p className="text-2xl">You&apos;ve reached the end! 👋</p>
        </div>
      ) : null}
    </>
  );
};

export default PublicationPosts;
