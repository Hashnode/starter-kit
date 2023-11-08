import Link from 'next/link';

import CustomImage from './custom-image';
import { BookOpenSVG, ChartMixedSVG } from './icons/svgs';
import { getDefaultPostCoverImageUrl } from '../utils/commonUtils';
import { blurImageDimensions } from '../utils/const/images';
import { getBlurHash, resizeImage } from '../utils/image';
import { kFormatter } from '../utils/image';
import { PostThumbnailFragment, RequiredPublicationFieldsFragment } from '../generated/graphql';

function BlogPostPreview(props: {
  post: PostThumbnailFragment;
  publication: Pick<RequiredPublicationFieldsFragment, 'features'>;
}) {
  const { post, publication } = props;
  const postURL = `/${post.slug}`;
  const postCoverImageURL = post.coverImage?.url ?? getDefaultPostCoverImageUrl();

  const preload = async () => {
    const nextData = document.getElementById('__NEXT_DATA__');
    if (nextData) {
      const { buildId } = JSON.parse(nextData.innerHTML);
      if (buildId) {
        fetch(`/_next/data/${buildId}/${post.slug}.json?slug=${post.slug}`);
      }
    }
  };

  return (
    <div className="blog-article-card col-span-1">
      <Link
        href={postURL}
        onMouseOver={preload}
        onFocus={() => undefined}
        aria-label={`Cover photo of the article titled ${post.title}`}
        className="mb-4 block w-full overflow-hidden rounded-lg border bg-slate-100 hover:opacity-90 dark:border-slate-800 dark:bg-slate-800"
      >
        <CustomImage
          className="blog-article-card-cover block w-full"
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
        />
      </Link>
      <h1 className="blog-article-card-title mx-4 mb-2 block break-words font-heading text-2xl font-extrabold leading-snug text-slate-900 hover:opacity-75 dark:text-slate-100">
        <Link href={postURL} onMouseOver={preload} onFocus={() => undefined}>
          {post.title}
        </Link>
      </h1>
      <div className="blog-article-card-author-strip mx-4 flex flex-row flex-wrap items-center">
        <div className="flex flex-col items-start leading-snug">
          <a
            className="block font-semibold text-slate-700 dark:text-slate-400"
            href={`https://hashnode.com/@${post.author.username}`}
            onMouseOver={preload}
            onFocus={() => undefined}
          >
            {post.author.name}
          </a>
          <div className="blog-article-card-article-meta flex flex-row text-sm">
            {publication.features.readTime.isEnabled && post.readTimeInMinutes ? (
              <>
                <p className="text-slate-500 dark:text-slate-400">
                  <Link
                    href={postURL}
                    className="flex flex-row items-center"
                    onMouseOver={preload}
                    onFocus={() => undefined}
                  >
                    <BookOpenSVG className="mr-2 h-4 w-4 fill-current" />
                    <span>{post.readTimeInMinutes} min read</span>
                  </Link>
                </p>
              </>
            ) : null}
            {post.readTimeInMinutes && Number(post.views) > 0 && publication.features.viewCount.isEnabled ? (
              <p className="mx-2 font-bold text-slate-500 dark:text-slate-400">&middot;</p>
            ) : null}
            {Number(post.views) > 0 && publication.features.viewCount.isEnabled ? (
              <p className="text-slate-500 dark:text-slate-400">
                <Link
                  href={postURL}
                  className="flex flex-row items-center"
                  onMouseOver={preload}
                  onFocus={() => undefined}
                >
                  <ChartMixedSVG className="mr-2 h-4 w-4 fill-current" />
                  <span>{kFormatter(post.views)} views</span>
                </Link>
              </p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPostPreview;
