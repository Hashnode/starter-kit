import { useRef, useState } from 'react';
import moment from 'dayjs';
import { twJoin } from 'tailwind-merge';

import Autolinker from '../utils/autolinker';
import { imageReplacer } from '../utils/image';

import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

// Components
import ProfileImage from './profile-image';
import ResponseFooter from './response-footer';
import { formatDate } from '../utils/index';
import { ReportScrollFunction, Response } from '../types';

import { useAppContext } from './contexts/appContext';
moment.extend(relativeTime);
moment.extend(localizedFormat);

// MobX Stuff

interface Props {
  isPublicationPost: boolean;
  response: Response;
  context: string;
  draftId?: string;
  isLast?: boolean;
  isValidating?: boolean;
}

function ResponseComponent(props: Props) {
  const { isPublicationPost, response, context, draftId, isLast, isValidating = false } = props;
  const [editMode, toggleEditMode] = useState(false);
  const post = useAppContext().post;
  const [extraOption, setExtraOption] = useState('');
  const isArticleAuthor = response.author._id.toString() === post?.author.id.toString();
  const reportSectionRef = useRef<ReportScrollFunction>(null);

  const loadProfile = (e: any) => {
    e.preventDefault();
    const isPublication = isPublicationPost;
    const url = `${isPublication ? 'https://hashnode.com/@' : '/@'}${response.author.username}`;
    if (isPublication) {
      window.location.href = url;
    }
    return null;
    // Router.push(url);
  };

  const noop = (e: any) => {
    e.preventDefault();
  };

  const responseContent = Autolinker.link(response.content, {
    twitter: true,
    truncate: 45,
    css: 'autolinkedURL',
    replaceFn(_autolinker: string, match: { getType: () => string; getTwitterHandle: () => void }) {
      switch (match.getType()) {
        case 'twitter':
          // eslint-disable-next-line no-case-declarations
          const username = match.getTwitterHandle();
          return `<a href="https://hashnode.com/@${username}" class="user-mention" target="_blank" rel="noopener">@${username}</a>`;
        default:
          return null;
      }
    },
  });

  // const responseURL =
  //   post.type === 'question'
  //     ? `${(!isPublicationPost ? '/post/' : '/') + post.slug}-${post.cuid}/answer/${response.stamp}`
  //     : `${
  //         (!isPublicationPost ? '/post/' : '/') +
  //         post.slug +
  //         (post.partOfPublication && post.publication && post.publication.urlPattern === 'simple'
  //           ? ''
  //           : `-${post.cuid}`)
  //       }#${response.stamp}`;
  const formattedDate = formatDate(response.dateAdded);

  return (
    <div>
      <div
            className={twJoin(
            'flex flex-row border-b-1/2 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:flex-nowrap',
            isLast && 'border-b-0',
            )}
            id={response.stamp}
        >
            <div className="w-full min-w-0">
            <div className="flex flex-col">
                <div className="flex justify-between text-slate-900 dark:text-slate-50">
                <div className="flex min-w-0 items-center">
                    <div className="h-8 w-8 shrink-0 rounded-full bg-slate-100 dark:bg-slate-700">
                    <ProfileImage width="160" height="160" user={response.author} hoverDisabled={isPublicationPost} />
                    </div>
                    <div className="ml-2 min-w-0">
                    <div className="flex flex-row flex-wrap">
                        <p className="flex items-center truncate">
                        <a
                            className="truncate"
                            onClick={!response.author.isDeactivated ? loadProfile : noop}
                            href={
                            !response.author.isDeactivated
                                ? `${isPublicationPost ? 'https://hashnode.com/@' : '/@'}${response.author.username}`
                                : '#'
                            }
                        >
                            <span
                            title={response.author.name}
                            className={twJoin(
                                'truncate text-sm font-semibold text-slate-800 dark:text-slate-100 mr-2',
                            )}
                            >
                            {response.author.name}
                            </span>
                        </a>

                        {isArticleAuthor && (
                            <span className="block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium leading-normal text-green-700 dark:bg-green-800 dark:text-green-50">
                            Author
                            </span>
                        )}
                        </p>
                    </div>

                    <p className="text-sm text-slate-500 dark:text-slate-400">
                        {/* <a
                        href={`#${response.stamp}`}
                        title={moment(response.dateAdded).format('MMM D, YYYY HH:mm')}
                        className="date-time"
                        aria-label="Response added at"
                        >
                        {formattedDate}
                        </a> */}
                        <span
                        title={moment(response.dateAdded).format('MMM D, YYYY HH:mm')}
                        aria-label="Response added at"
                        >
                        {formattedDate}
                        </span>
                    </p>
                    </div>
                </div>
                </div>
            </div>
            <div
                className="prose mt-3 mb-4 break-words leading-snug text-slate-800 dark:text-slate-100 dark:prose-dark"
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                __html:
                    context === 'feed'
                    ? response.responseBrief + (response.responseBrief.length > 140 ? '...' : '')
                    : imageReplacer(responseContent),
                }}
            />
            <ResponseFooter
                draftId={draftId}
                isPublicationPost={isPublicationPost}
                response={response}
                isValidating={isValidating}
            />
            </div>
        </div>
    </div>
  );
}

export default ResponseComponent;
