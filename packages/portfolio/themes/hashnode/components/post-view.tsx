import { useRef, useMemo } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import moment from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import {
  BookOpenSVG,
} from './icons/svgs';
import { useAppContext } from './contexts/appContext';
import ProfileImage from './profile-image';
import { getBlurHash, imageReplacer, resizeImage } from '../utils/image';
import CustomImage from './custom-image';
import { blurImageDimensions } from '../utils/const/images';
import TocRenderDesign from './toc-render-design';
import { PostFullFragment } from '../generated/graphql';

moment.extend(relativeTime);
moment.extend(localizedFormat);

const PublicationSubscribeStandOut = dynamic(
  () => import('./publication-subscribe-standout'),
  { ssr: false },
);

function PostView(props: any) {
  const postContentEle = useRef<HTMLDivElement>(null);
  const { post: _post } = useAppContext();
  const post = _post as unknown as PostFullFragment;
  const textSelectionSharerEnabled = post.publication?.features?.textSelectionSharer?.isEnabled || typeof post.publication?.features?.textSelectionSharer?.isEnabled === 'undefined';

  const toc = post.features.tableOfContents.items.map((item) => [
    {
      id: item.id,
      level: item.level,
      slug: item.slug,
      title: item.title,
      parentId: item.parentId,
    },
  ]);

  const memoizedPostContent = useMemo(() => imageReplacer(post.content, true), [post.content]);

  return (
    <main className="blog-post-detail-card pb-24">
        <article>
            <div className="blog-article-page container relative mx-auto grid grid-cols-8">
            <div className="col-span-full lg:col-span-6 lg:col-start-2">
                {/* Top cover */}
                {post.coverImage && post.coverImage.url && !post.preferences.stickCoverToBottom && (
                <div className="relative">
                    <CustomImage
                    className="mb-0 block w-full"
                    placeholder="blur"
                    originalSrc={post.coverImage.url}
                    src={resizeImage(post.coverImage, {
                        w: 1600,
                        h: 840,
                        ...(!post.coverImage?.isPortrait ?? false ? { c: 'thumb' } : { fill: 'blur' }),
                    })}
                    blurDataURL={getBlurHash(
                        resizeImage(post.coverImage, {
                        ...blurImageDimensions,
                        ...(!post.coverImage?.isPortrait ?? false ? { c: 'thumb' } : { fill: 'blur' }),
                        }),
                    )}
                    width={1600}
                    height={840}
                    alt={post.title}
                    priority
                    layout="responsive"
                    />
                </div>
                )}

                {/* Article title */}
                <div
                className={twJoin(
                    `mt-6 break-words px-4 text-center font-heading text-3xl font-extrabold text-slate-900 dark:text-white md:mt-10 md:px-5 md:text-4xl lg:px-8 xl:px-20 xl:text-5xl`,
                    post.subtitle ? `mb-5` : `mb-8 md:mb-14`,
                )}
                >
                    <h1 className="leading-snug" data-query="post-title">
                        {post.title}
                    </h1>
                </div>

                {/* Article subtitle */}
                {post.subtitle && (
                <div className="mb-8 px-4 text-center font-heading md:mb-14 md:px-5 lg:px-8 xl:px-20">
                    <h2 className="text-2xl leading-snug text-slate-700 dark:text-slate-400 md:text-3xl xl:text-3xl">
                    {post.subtitle}
                    </h2>
                </div>
                )}

                <div className="relative z-20 mb-8 flex flex-row flex-wrap items-center justify-center px-4 md:-mt-7 md:mb-14 md:text-lg last:md:mb-10">
                <div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
                    <div className="mr-2 h-10 w-10 overflow-hidden rounded-full bg-slate-200 dark:bg-white/20 md:mr-3 md:h-12 md:w-12">
                    <ProfileImage user={post.author} width="200" height="200" hoverDisabled={props.isPublicationPost} />
                    </div>
                    <a
                    href={`https://hashnode.com/@${post.author.username}`}
                    className="font-medium text-slate-900 dark:text-white"
                    >
                    <span>{post.author.name}</span>
                    </a>
                </div>
                <div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
                    <span className="mx-3 hidden font-bold text-slate-500 md:block">&middot;</span>
                    <Link
                    href='/'
                    className="tooltip-handle text-slate-700 dark:text-slate-400"
                    data-title={`${moment(new Date(post.publishedAt)).format('MMM D, YYYY HH:mm')}`}
                    >
                    <span>{moment(new Date(post.publishedAt)).format('MMM D, YYYY')}</span>
                    </Link>
                    {(post?.publication?.features.readTime.isEnabled) && (
                    <>
                        <span className="mx-3 block font-bold text-slate-500">&middot;</span>
                        <p className="flex flex-row items-center text-slate-700 dark:text-slate-400">
                        <BookOpenSVG className="mr-2 h-5 w-5 fill-current opacity-75" />
                        <span>{post.readTimeInMinutes} min read</span>
                        </p>
                    </>
                    )}
                </div>
                </div>
                {post.coverImage && post.preferences.stickCoverToBottom && (
                <div className="relative my-8 md:my-14">
                    <CustomImage
                    className="mb-0 block w-full"
                    placeholder="blur"
                    originalSrc={post.coverImage.url}
                    src={resizeImage(post.coverImage, {
                        w: 1600,
                        h: 840,
                        ...(!post.coverImage?.isPortrait ?? false ? { c: 'thumb' } : { fill: 'blur' }),
                    })}
                    blurDataURL={getBlurHash(
                        resizeImage(post.coverImage, {
                        ...blurImageDimensions,
                        ...(!post.coverImage?.isPortrait ?? false ? { c: 'thumb' } : { fill: 'blur' }),
                        }),
                    )}
                    width={1600}
                    height={840}
                    alt={post.title}
                    layout="responsive"
                    />
                </div>
                )}
            </div>
            </div>
            <div className="blog-content-wrapper article-main-wrapper container relative z-30 mx-auto grid grid-flow-row grid-cols-8 xl:gap-6 2xl:grid-cols-10">
            <section className="blog-content-main z-20 col-span-8 mb-10 px-4 md:z-10 lg:col-span-6 lg:col-start-2 lg:px-0 xl:col-span-6 xl:col-start-2 2xl:col-span-6 2xl:col-start-3">
                <div className="relative">

                {post.features.tableOfContents.isEnabled && <TocRenderDesign list={toc} />}

                {/* temporarily hiding the modal */}

                <div id="post-content-parent" className="relative mb-10 pb-14">
                    {memoizedPostContent && (
                    <div
                        id="post-content-wrapper"
                        ref={postContentEle}
                        className="prose prose-lg mx-auto mb-10 min-h-30 break-words dark:prose-dark xl:prose-xl"
                        // eslint-disable-next-line react/no-danger
                        dangerouslySetInnerHTML={{
                        __html: memoizedPostContent,
                        }}
                    />
                    )}
                </div>

                {post.publication && post.publication.features.newsletter.isEnabled && (
                    <PublicationSubscribeStandOut />
                )}

                {post?.tags && post.tags.length > 0 && (
                    <div className="mb-5 flex w-full flex-row flex-wrap justify-center md:mb-0">
                    {post.tags.map((tag: any) => (
                        <a
                        className="mb-2 mr-3 rounded-lg border bg-slate-100 px-2 py-1 text-base font-medium text-slate-700 hover:bg-slate-200 dark:border-slate-800 dark:bg-slate-800 dark:text-slate-100 dark:hover:bg-slate-700"
                        key={tag._id.toString()}
                        href={`/tag/${tag.slug}?source=tags_bottom_blogs`}
                        >
                        {/* source from app-base.less most likely unused */}
                        <span>{tag.name}</span>
                        </a>
                    ))}
                    </div>
                )}
                </div>
            </section>
            </div>
            {textSelectionSharerEnabled && (
            <>
                <div className="absolute h-px w-px overflow-hidden" id="refNode1" style={{ top: `100px`, left: `100px` }}>
                &nbsp;
                </div>
                <div className="absolute left-0 top-0 h-px w-px overflow-hidden" id="refNode2" />
            </>
            )}
            <div className="container relative z-20 mx-auto grid grid-flow-row grid-cols-8 xl:gap-6 2xl:grid-cols-10">
            </div>
        </article>
    </main>
  );
}

export default PostView;
