import { Waypoint } from 'react-waypoint';
import { twJoin } from 'tailwind-merge';
import styles from "./publication-posts.module.scss"
import { FaChevronDown } from "react-icons/fa";
 
import Button from '../hn-button';
import PubLoaderComponent from '../pub-loader-component';

import { PageInfo, Preferences, RequiredPublicationFieldsFragment, PostThumbnailFragment } from '../../generated/graphql';


import BlogPostPreview from '../blogPostPreview/blog-post-preview';

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
        <div className={styles.grid}>
          {edges.map(({ node }) => (
            <BlogPostPreview key={node.id} post={node} publication={publication} pinnedPostId={pinnedPostId} />
          ))}
          
        </div>
        {pageInfo.hasNextPage && !fetchedOnce && !fetching ? (
            <div className={styles.loadMore}>
              <button
                onClick={fetchMore}
              >
                <span className={styles.text}>Load more</span>
                <FaChevronDown size={20} className={styles.icon}/>
              </button>
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
