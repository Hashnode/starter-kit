import { twJoin } from 'tailwind-merge';
import Link from 'next/link';
import { resizeImage } from '../utils/image';
import ProfileImage from './profile-image';
import CustomImage from './custom-image';
import { PostFullFragment } from '../generated/graphql';


type Props = {
  post: PostFullFragment;
  morePosts: any
};

function OtherPostsOfAccount(props: Props) {
  const {  morePosts, post } = props;
 
  if (!morePosts || morePosts.length === 0) {
    return <div />;
  }
  
  const morePostsRendered = morePosts.map((postNode: any) => {
    const post  = postNode.node;
    const postURL = `/${post.slug}`;
    return (
      <div
        className={twJoin(
          'mb-5 px-2 dark:border-slate-800 lg:mb-0',
          morePosts.length === 1
            ? 'col-span-full md:col-span-4 md:col-start-2 xl:col-span-3 xl:col-start-4'
            : 'col-span-full md:col-span-3 lg:col-span-2 xl:col-span-3',
        )}
        key={post.id.toString()}
      >
        <div className="blog-similar-article-wrapper h-full rounded-lg border p-4 dark:border-slate-800">
          {post.author && (
            <div className="blog-similar-author-wrapper mb-3 flex flex-row items-center">
              <div className="flex flex-row items-center">
                <div className="mr-2 h-6 w-6 overflow-hidden rounded-full">
                  <ProfileImage
                    user={post.author}
                    className="blog-similar-author-photo author-photo"
                    hoverDisabled={true}
                  />
                </div>
                <a
                  href={`https://hashnode.com/@${post.author.username}`}
                  className="blog-similar-author-name font-bold text-black dark:text-white"
                >
                  {post.author.name}
                </a>
              </div>
            </div>
          )}
          {post.coverImage && (
            <Link
              href={postURL}
              className="blog-similar-article-cover post-cover mb-3 block rounded border bg-cover bg-center dark:border-slate-800"
            >
              <CustomImage
                alt={post.title}
                layout="responsive"
                className="rounded"
                width={500}
                height={262}
                originalSrc={post.coverImage.url}
                src={resizeImage(post.coverImage.url, { w: 500, h: 262, c: 'thumb' })}
              />
            </Link>
          )}
          <div className="blog-post-details break-words">
            <h1 className="mb-2 font-heading text-2xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white">
              <Link href={postURL}>
                {post.title.substring(0, 100)}
                {post.title.length > 100 ? '…' : ''}
              </Link>
            </h1>
            {post.brief && (
              <p
                className={twJoin(
                  post.coverImage ? 'text-base' : 'text-base md:text-lg',
                  'text-slate-700 dark:text-slate-400',
                )}
              >
                <Link href={postURL}>
                  {post.brief.substring(0, 100)}
                  {post.brief.length > 100 ? '…' : ''}
                </Link>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  });

  return (
    <div className="blog-more-articles mt-10 mb-20">
      <h3 className="blog-more-articles-title mb-5 text-center font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
        {true ? 'More articles' : `More Stories by ${post.author.name}`}
      </h3>
      <div className="blog-more-articles-wrapper container mx-auto grid grid-flow-row grid-cols-6 px-4 xl:grid-cols-9 xl:gap-6 2xl:px-0">
        {morePostsRendered}
      </div>
    </div>
  );
}



export default OtherPostsOfAccount;
