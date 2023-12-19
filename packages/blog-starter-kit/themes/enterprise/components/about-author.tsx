import Link from 'next/link';
import { twJoin } from 'tailwind-merge';
import { PublicationPlaceholderSVG } from '../components/icons/svgs';
import CustomImage from './custom-image';
import { getBlurHash, resizeImage } from '@starter-kit/utils/image';
import PostAuthorInfo from './post-author-info';
import { useAppContext } from './contexts/appContext';
import { PostFullFragment } from '../generated/graphql';

function AboutAuthor() {
  const { post: _post } = useAppContext();
  const post = _post as unknown as PostFullFragment;
  const { publication, author } = post;
  let coAuthors = post.coAuthors || [];

  const allAuthors = publication?.isTeam ? [author, ...coAuthors] : [author];

  return (
    <div className="mb-5 mt-10 flex flex-col gap-16">
      <div className="flex-1 px-2">
        <div className="flex flex-col flex-wrap items-start md:flex-nowrap">
          <h3 className="mb-4 w-full border-b-1-1/2 pb-2 text-base font-medium tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400 ">
            Written by
          </h3>
          <div className="flex w-full flex-col gap-12">
            {allAuthors.map((_author) => {
              return (
                <PostAuthorInfo
                  key={_author.id.toString()}
                  author={_author}
                />
              );
            })}
          </div>
        </div>
      </div>
      {publication?.isTeam && (
        <div className="flex-1 px-2">
          <div className="flex flex-col flex-wrap items-start md:flex-nowrap">
            <h3 className="mb-4 w-full border-b-1-1/2 pb-1 text-base font-medium tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400 ">
              Published on
            </h3>
            <div className="flex w-full flex-1 flex-col md:flex-row">
              <div className="mb-4 flex w-full flex-1 flex-row md:mb-0">
                <a
                  href={'/'}
                  className="mr-5 block h-10 w-10 overflow-hidden rounded-lg border dark:border-slate-800 md:h-14 md:w-14"
                >
                  {publication.favicon ? (
                    <CustomImage
                      className="block"
                      placeholder="blur"
                      originalSrc={publication.favicon}
                      src={resizeImage(publication.favicon, {
                        w: 256,
                        h: 256,
                        c: 'thumb',
                      })}
                      blurDataURL={getBlurHash(
                        resizeImage(publication.favicon, {
                          w: 256,
                          h: 256,
                          c: 'thumb',
                        }),
                      )}
                      width={256}
                      height={256}
                      alt={publication?.title}
                    />
                  ) : (
                    <div className="h-full w-full bg-slate-100 p-2 dark:bg-slate-800">
                      <PublicationPlaceholderSVG
                        width={200}
                        height={200}
                        className="text-slate-500 dark:text-slate-300"
                      />
                    </div>
                  )}
                </a>
                <div
                  className={twJoin(
                    'flex flex-1 flex-col justify-center md:justify-start',
                    !publication?.about?.html ? 'md:justify-center' : '',
                  )}
                >
                  <h1 className="font-sans text-lg font-semibold text-slate-800 dark:text-slate-100">
                    <Link href="/">{publication.title}</Link>
                  </h1>
                  {publication?.about?.html && (
                    <div className="hidden pr-2 md:block">
                      <div
                        className="prose text-slate-600 dark:prose-dark"
                        dangerouslySetInnerHTML={{
                          __html: publication?.about?.html,
                        }}
                      />
                    </div>
                  )}
                </div>
              </div>
              {publication?.about?.html && (
                <div className="mb-4 block md:hidden">
                  <div
                    className="prose text-slate-600 dark:prose-dark"
                    dangerouslySetInnerHTML={{
                      __html: publication?.about?.html,
                    }}
                  />
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default AboutAuthor;