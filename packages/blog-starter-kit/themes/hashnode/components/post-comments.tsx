import moment from 'dayjs';

import localizedFormat from 'dayjs/plugin/localizedFormat';
import relativeTime from 'dayjs/plugin/relativeTime';

import { twJoin } from 'tailwind-merge';
import { formatDate } from '../utils';
import Autolinker from '../utils/autolinker';
import { imageReplacer } from '../utils/image';
import { useAppContext } from './contexts/appContext';
import { Button } from './custom-button';
import { ExternalArrowSVG, HashnodeSVG } from './icons';
import ProfileImage from './profile-image';
import ResponseFooter from './response-footer';

moment.extend(relativeTime);
moment.extend(localizedFormat);

export const PostComments = () => {
	const { post } = useAppContext();
	if (!post) return null;
	const discussionUrl = `https://hashnode.com/discussions/post/${post.id}`;
	const checkIfCommentByAuthor = (comment: any) => {
		return comment.author.id.toString() === post.author.id.toString();
	};

	const loadProfile = (e: any, comment: any) => {
		e.preventDefault();
		const isPublication = true;
		const url = `${isPublication ? 'https://hashnode.com/@' : '/@'}${comment.author.username}`;
		if (isPublication) {
			window.location.href = url;
		}
		return null;
		// Router.push(url);
	};

	const noop = (e: any) => {
		e.preventDefault();
	};

	const commentsList = post.comments.edges.map((edge) => {
		const comment = edge.node as any;
		return (
			<div
				key={comment.id}
				className="border-b-1/2 bg-white px-4 py-4 dark:border-slate-700 dark:bg-slate-900 md:flex-nowrap"
			>
				<div className="flex flex-col">
					<div className="flex justify-between text-slate-900 dark:text-slate-50">
						<div className="flex min-w-0 items-center">
							<div className="h-8 w-8 shrink-0 rounded-full bg-slate-100 dark:bg-slate-700">
								<ProfileImage width="160" height="160" user={comment.author} hoverDisabled={true} />
							</div>
							<div className="ml-2 min-w-0">
								<div className="flex flex-row flex-wrap">
									<p className="flex items-center truncate">
										<a
											className="truncate"
											onClick={!comment.author.deactivated ? (e) => loadProfile(e, comment) : noop}
											href={
												!comment.author.deactivated
													? `${true ? 'https://hashnode.com/@' : '/@'}${comment.author.username}`
													: '#'
											}
										>
											<span
												title={comment.author.name}
												className={twJoin(
													'mr-2 truncate text-sm font-semibold text-slate-800 dark:text-slate-100',
												)}
											>
												{comment.author.name}
											</span>
										</a>

										{checkIfCommentByAuthor(comment) && (
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
										title={moment(comment.dateAdded).format('MMM D, YYYY HH:mm')}
										aria-label="Response added at"
									>
										{formatDate(comment.dateAdded)}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<div
					className="prose dark:prose-dark mb-4 mt-3 break-words leading-snug text-slate-800 dark:text-slate-100"
					// eslint-disable-next-line react/no-danger
					dangerouslySetInnerHTML={{
						__html: imageReplacer(
							Autolinker.link(comment.content.html, {
								twitter: true,
								truncate: 45,
								css: 'autolinkedURL',
								replaceFn(
									_autolinker: string,
									match: { getType: () => string; getTwitterHandle: () => void },
								) {
									switch (match.getType()) {
										case 'twitter':
											// eslint-disable-next-line no-case-declarations
											const username = match.getTwitterHandle();
											return `<a href="https://hashnode.com/@${username}" class="user-mention" target="_blank" rel="noopener">@${username}</a>`;
										default:
											return null;
									}
								},
							}),
						),
					}}
				/>
				<ResponseFooter
					draftId={undefined}
					isPublicationPost={true}
					response={comment}
					isValidating={false} // To check
				/>
			</div>
		);
	});

	return (
		<div id="write-comment" className="mx-2 flex flex-col gap-5">
			<div className="relative z-50 flex flex-row flex-wrap items-center justify-between border-b bg-white p-4 dark:border-slate-800 dark:bg-transparent">
				<div className="flex w-full flex-row items-center dark:text-slate-200 md:w-auto">
					<h3 className="text-xl font-medium tracking-tight text-slate-900 dark:text-slate-100">
						Comments{' '}
						{post.responseCount > 0 ? (
							<span>({(post.responseCount || 0) + (post.replyCount || 0)})</span>
						) : (
							''
						)}
					</h3>
				</div>
			</div>
			<div>{commentsList}</div>
			<div className="px-2">
				<Button
					as="a"
					href={discussionUrl}
					target="_blank"
					type="outline"
					rel="noopener noreferrer"
					icon={<HashnodeSVG className="h-5 w-5 stroke-current" />}
					label="Add a comment"
					secondaryIcon={<ExternalArrowSVG className="h-4 w-4 stroke-current" />}
					className="border-primary-600 dark:border-primary-500 text-primary-600 dark:text-primary-500 !font-normal"
				/>
			</div>
		</div>
	);
};
