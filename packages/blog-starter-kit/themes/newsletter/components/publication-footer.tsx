// MobX Stuff
import Image from 'next/legacy/image';

import { HashnodeLogoIconV2 } from './icons/svgs';
import { resizeImage } from '../utils/image';
import Link from 'next/link';
import PublicationSocialLinks from './publication-social-links';
import { Publication } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
// type PublicationFooterProps = Pick<Publication, 'title' | 'postsCount' | 'imprint' | 'isTeam'> &
//   Pick<Publication['preferences'], 'disableFooterBranding' | 'logo' | 'darkMode'> & {
//     authorName: string;
//   }; // TODO: types need to be fixed

function PublicationFooter(props: any) {
  const { isTeam, authorName, title, imprint, disableFooterBranding, logo } = props;
  const { publication } = useAppContext();
  return (
    <footer className="blog-footer-area -mt-px border-t bg-slate-100 px-5 py-10 text-center text-slate-800 dark:border-slate-800 dark:bg-black dark:text-slate-500 md:px-10 md:py-12 lg:py-20">
      {imprint && (
        <section className="blog-impressum mx-auto mb-10 rounded-lg border bg-white px-4 py-6 text-left dark:border-slate-800 dark:bg-transparent lg:w-3/4 xl:w-2/3">
          <p className="mb-4 text-center text-sm font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
            Impressum
          </p>
          {/* eslint-disable-next-line react/self-closing-comp */}
          <div
            className="prose mx-auto w-full dark:prose-dark"
            // eslint-disable-next-line react/no-danger
            dangerouslySetInnerHTML={{ __html: `${imprint}` }}
          ></div>
        </section>
      )}

<div className="blog-sub-header" data-testid="blog-sub-header">
					{/* Desktop */}
					<div className="justify-betweem mx-0 mb-2 hidden w-full flex-row items-center md:flex">
						<PublicationSocialLinks
							links={publication.links}
						/>
					</div>
					{/* Mobile view */}
					<div className="mb-2 flex w-full flex-col items-center md:hidden">
						<PublicationSocialLinks
							links={publication.links}
						/>
					</div>
				</div>



      <div className="blog-footer-credits flex flex-col items-center justify-center">
        <div className="mb-12 flex flex-col flex-wrap items-center">
          <p className="mb-2 text-slate-600 dark:text-slate-300">
            &copy;{new Date().getFullYear()} {title || `${authorName}'s Blog`}
          </p>
          <div className="flex flex-row items-center text-slate-600 dark:text-slate-300">
            <a href="https://hashnode.com/privacy?source=blog-footer" className="mx-2 underline">
              Privacy policy
            </a>
            <span className="font-extrabold text-black opacity-20 dark:text-white">&middot;</span>
            <a className="mx-2 underline" href="https://hashnode.com/terms?source=blog-footer">
              Terms
            </a>
          </div>
        </div>
        {disableFooterBranding ? (
          <>
            {logo && (
              <div className="flex flex-col items-center">
                <Link href="/" className="relative block h-10 w-40">
                  <Image
                    layout="fill"
                    alt={title || `${authorName}'s ${isTeam ? 'team' : ''} blog`}
                    src={resizeImage(logo, { w: 1000, h: 250, c: 'thumb' })}
                  />
                </Link>
              </div>
            )}
          </>
        ) : (
          <div className="flex flex-col items-center">
            <Link
              aria-label="Publish with Hashnode"
              className="mb-4 flex flex-row items-center rounded-lg border border-slate-300 bg-white p-3 font-heading font-bold tracking-wide text-slate-600 transition-colors duration-75 hover:border-slate-400 hover:text-slate-900 dark:border-slate-800 dark:bg-black dark:text-slate-300 dark:hover:border-slate-500 dark:hover:text-white"
              href="https://hashnode.com/onboard?unlock-blog=true&source=blog-footer"
            >
              <span className="mr-2 block text-blue-600">
                <HashnodeLogoIconV2 className="h-6 w-6 fill-current" />
              </span>
              <span>Publish with Hashnode</span>
            </Link>
            <p className="text-sm text-slate-600 dark:text-slate-300">
              Powered by{' '}
              <a aria-label="Hashnode" href="https://hashnode.com?source=blog-footer" className="underline">
                Hashnode
              </a>{' '}
              - Home for tech writers and readers
            </p>
          </div>
        )}
      </div>
    </footer>
  );
}

export default PublicationFooter;
