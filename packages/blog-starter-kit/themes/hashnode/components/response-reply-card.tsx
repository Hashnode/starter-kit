
import moment from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import Autolinker from '../utils/autolinker';
import ProfileImage from './profile-image';
import { formatDate } from '../utils';
import { Response, Reply, User } from '../types';

import { twJoin } from 'tailwind-merge';
import { useAppContext } from './contexts/appContext';

moment.extend(relativeTime);
moment.extend(localizedFormat);
interface Props {
  showReplyArea: (e: any, user: User) => void;
  isPublicationPost: boolean;
  response: Response;
  reply: Reply;
  draftId?: string;
  isValidating?: boolean;
}

function ResponseReplyCard(props: Props) {
  const {
    showReplyArea,
    isPublicationPost,
    response,
    reply,
    draftId,
  } = props;
  const { post } = useAppContext();

  const isArticleAuthor = reply.author._id.toString() === post?.author.id.toString();

  const loadUserProfile = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    // Router.push('/@' + reply.author.username);
  };

  const noop = (e: { preventDefault: () => void }) => {
    e.preventDefault();
  };

  const _showReplyArea = (e: { preventDefault: () => void }) => {
    e.preventDefault();
      //   const query = '?next=' + window.location.pathname;
      //   return Router.pushRoute('/login' + query);
    
    showReplyArea(e, reply.author);
  };

  const replyContent = Autolinker.link(reply.content, {
    twitter: true,
    truncate: 45,
    css: 'autolinkedURL',
    replaceFn: (_autolinker: any, match: any) => {
      switch (match.getType()) {
        case 'twitter':
          // eslint-disable-next-line no-case-declarations
          const username: any = match.getTwitterHandle();
          return `<a href="https://hashnode.com/@${username}" class="user-mention" target="_blank" rel="noopener">@${username}</a>`;
        default:
          return null;
        // case 'url':
        //     var tag = autolinker.getTagBuilder().build(match);
        //     tag.setAttr('rel', 'nofollow');
        //     tag.addClass('external-link');
        //     tag.setAttr('href', 'https://hashnode.com/util/redirect?url=' + match.getUrl());
        //     return tag;
        //     break;
      }
    },
  });
  const formattedDate = formatDate(reply.dateAdded);

  return (
    <div className="w-full">
      {true ? (
        <div className="flex flex-row rounded-lg dark:border-slate-800" id={`${reply.stamp}`}>
          <div className="min-w-0 flex-1">
            <div className="flex flex-col">
              <div className="flex flex-row justify-between text-slate-900 dark:text-slate-300">
                <div className="flex min-w-0 items-center">
                  <div className="h-8 w-8 shrink-0 rounded-full">
                    <ProfileImage
                      width="160"
                      height="160"
                      user={reply.author}
                      className="prof-pic"
                      hoverDisabled={isPublicationPost}
                    />
                  </div>
                  <div className="ml-3 min-w-0">
                    <p className="mr-2 flex items-center truncate">
                      <a
                        className="truncate"
                        href={
                          reply.author && !reply.author.isDeactivated
                            ? `${isPublicationPost ? 'https://hashnode.com' : ''}/@${reply.author.username}`
                            : '#'
                        }
                        onClick={
                          // eslint-disable-next-line no-nested-ternary
                          reply.author && !reply.author.isDeactivated
                            ? isPublicationPost
                              ? undefined
                              : loadUserProfile
                            : noop
                        }
                      >
                        <span
                          title={reply.author.name}
                          className={twJoin(
                            'truncate text-sm font-semibold text-slate-800 dark:text-slate-100 mr-2',
                          )}
                        >
                          {reply.author.name}
                        </span>
                      </a>

                      {isArticleAuthor && (
                        <span className="block rounded-full bg-green-100 px-2 py-0.5 text-xs font-medium leading-normal text-green-700 dark:bg-green-800 dark:text-green-50">
                          Author
                        </span>
                      )}
                    </p>
                    <p className="text-sm text-slate-500 dark:text-slate-400">
                      {/* <a
                        href={`#${reply.stamp}`}
                        title={moment(reply.dateAdded).format('MMM D, YYYY HH:mm')}
                        className="date-time"
                        aria-label="Reply added at"
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
              dangerouslySetInnerHTML={{ __html: replyContent }}
            />
            <div className="flex flex-row flex-nowrap items-center gap-4">

              <button
                type="button"
                onClick={_showReplyArea}
                className="flex flex-row items-center p-0 text-sm font-medium text-slate-600 hover:underline focus:outline-none dark:text-slate-200"
                aria-label="Reply to comment"
              >
                Reply
              </button>
            </div>
          </div>
        </div>
      ) : !draftId ? (
      null
      ) : (
        null
      )}
    </div>
  );
}

export default ResponseReplyCard;
