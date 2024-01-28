import cuid from 'cuid';
import Image from 'next/legacy/image';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';

import CustomImage from './custom-image';
import { BookOpenSVG, ChartMixedSVG, PinSVG } from './icons/svgs';
import { getDefaultPostCoverImageUrl } from '../utils/commonUtils';
import { DEFAULT_AVATAR, blurImageDimensions } from '../utils/const/images';
import { getBlurHash, kFormatter, resizeImage } from '../utils/image';

import { Post, PostThumbnailFragment, RequiredPublicationFieldsFragment } from '../generated/graphql';

const FeaturedPosts = (props: {
  posts: Array<PostThumbnailFragment>;
  publication: Pick<RequiredPublicationFieldsFragment, 'id' | 'features'> & {
    pinnedPost?: Pick<Post, 'id'> | null;
  };
}) => {
  const { publication, posts } = props;
  const limit = 3;
  const padding = limit - posts.length;

  const preload = (slug: string) => async () => {
    const nextData = document.getElementById('__NEXT_DATA__');
    if (nextData) {
      const { buildId } = JSON.parse(nextData.innerHTML);
      if (buildId) {
        fetch(`/_next/data/${buildId}/${slug}.json?slug=${slug}`);
      }
    }
  };

  return (
    <div className="blog-featured-area mx-auto border-b bg-slate-50 dark:border-slate-800 dark:bg-black">
      <div className="blog-featured-container container mx-auto grid grid-cols-1 gap-8 px-4 py-4 md:grid-flow-col md:grid-cols-2 md:grid-rows-2 xl:grid-cols-3 xl:py-10 xl:px-10 2xl:px-24 2xl:py-10">
        {posts.map((post, index) => {
          const postURL = `/${post.slug}`;
          const isFirstPost = index === 0;
          const isPinnedToBlog = publication.pinnedPost?.id === post.id;
          if (!postURL) return null;
          const postCoverImageURL = post.coverImage?.url ?? getDefaultPostCoverImageUrl();

          return (
            <div
              key={post.id}
              className={twJoin('blog-article-card col-span-1', isFirstPost ? 'md:row-span-2 xl:col-span-2' : '')}
            >
              <Link
                href={postURL}
                onMouseOver={preload(post.slug)}
                onFocus={() => undefined}
                aria-label={`Cover photo of the article titled ${post.title}`}
                className="blog-article-card-cover mb-4 block w-full overflow-hidden rounded-lg border bg-slate-100 hover:opacity-90 dark:border-slate-800 dark:bg-slate-800"
              >
                <CustomImage
                  className="block w-full"
                  originalSrc={postCoverImageURL}
                  src={resizeImage(postCoverImageURL, {
                    w: 1600,
                    h: 840,
                    ...(!post.coverImage?.isPortrait ? { c: 'thumb' } : { fill: 'blur' }),
                  })}
                  width={1600}
                  height={840}
                  placeholder="blur"
                  blurDataURL={getBlurHash(
                    resizeImage(postCoverImageURL, {
                      ...blurImageDimensions,
                      ...(!post.coverImage?.isPortrait ? { c: 'thumb' } : { fill: 'blur' }),
                    }),
                  )}
                  layout="responsive"
                  alt={post.title}
                  priority={isFirstPost}
                />
              </Link>
              <h1
                className={twJoin(
                  'blog-article-card-title mx-4 mb-3 block font-heading font-extrabold text-slate-900 hover:opacity-75 dark:text-slate-100',
                  isFirstPost ? 'text-xl md:text-3xl lg:text-4xl' : 'text-xl',
                )}
              >
                <Link href={postURL} onMouseOver={preload(post.slug)} onFocus={() => undefined}>
                  {post.title}
                </Link>
              </h1>
              {isPinnedToBlog && (
                <div className="blog-article-card-label mx-4 mb-1 flex flex-row items-center break-words font-heading font-medium leading-snug text-blue-600 dark:text-blue-500">
                  <span>Pinned</span>
                  <PinSVG className="ml-1 h-6 w-6 stroke-current" />
                </div>
              )}
              {/* This p tag is added to the featured card only */}
              {isFirstPost && (
                <p className="blog-article-card-brief mx-4 mb-3 break-words text-lg leading-snug text-slate-500 hover:opacity-75 dark:text-slate-400">
                  <Link href={postURL} onMouseOver={preload(post.slug)} onFocus={() => undefined}>
                    {post.subtitle || post.brief}
                  </Link>
                </p>
              )}
              <div className="blog-article-card-author-strip mx-4 flex flex-row flex-wrap items-center">
                <a
                  href={`https://hashnode.com/@${post.author.username}`}
                  className="blog-article-card-author-photo mr-2 block h-8 w-8 overflow-hidden rounded-full bg-slate-100 dark:border-slate-800 dark:bg-slate-900"
                >
                  <Image
                    alt={post.author.name || 'Author'}
                    className="block"
                    width={72}
                    height={72}
                    src={resizeImage(post.author.profilePicture || DEFAULT_AVATAR, { w: 72, h: 72, c: 'face' })}
                  />
                </a>
                <div className="flex flex-col items-start leading-snug">
                  <a
                    className="blog-article-card-author-name block font-semibold text-slate-700 dark:text-slate-400"
                    href={`https://hashnode.com/@${post.author.username}`}
                  >
                    {post.author.name}
                  </a>
                  <div className="blog-article-card-article-meta flex flex-row text-sm">
                    {publication.features.readTime.isEnabled && post.readTimeInMinutes ? (
                      <p className="text-slate-500 dark:text-slate-400">
                        <Link
                          href={postURL}
                          className="flex flex-row items-center"
                          onMouseOver={preload(post.slug)}
                          onFocus={() => undefined}
                        >
                          <BookOpenSVG className="mr-2 h-4 w-4 fill-current" />
                          <span>{post.readTimeInMinutes} min read</span>
                        </Link>
                      </p>
                    ) : null}
                    {post.readTimeInMinutes && Number(post.views) > 0 && publication.features.viewCount.isEnabled && (
                      <p className="mx-2 font-bold text-slate-500 dark:text-slate-400">&middot;</p>
                    )}
                    {Number(post.views) > 0 && publication.features.viewCount.isEnabled && (
                      <>
                        <p className="text-slate-500 dark:text-slate-400">
                          <Link
                            href={postURL}
                            className="flex flex-row items-center"
                            onMouseOver={preload(post.slug)}
                            onFocus={() => undefined}
                          >
                            <ChartMixedSVG className="mr-2 h-4 w-4 fill-current" />
                            <span>{kFormatter(post.views)} views</span>
                          </Link>
                        </p>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
        {[...new Array(padding)].map(() => (
          <div key={`padding-${cuid()}`} className="col-span-1 row-span-1 rounded-lg bg-slate-200 dark:bg-slate-800" />
        ))}
      </div>
    </div>
  );
};

export default FeaturedPosts;
