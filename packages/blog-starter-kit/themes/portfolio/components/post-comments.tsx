import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { Comment } from '../generated/graphql';
import { Avatar } from './avatar';
import { Button } from './button';
import { useAppContext } from './contexts/appContext';
import { ExternalArrowSVG, HashnodeSVG } from './icons';

export const PostComments = () => {
	const { post } = useAppContext();
	if (!post) return null;
	const discussionUrl = `https://hashnode.com/discussions/post/${post.id}`;

	const commentsList = post.comments.edges.map((edge) => {
		const comment = edge.node as Comment;
		const content = markdownToHtml(comment.content.markdown);

		return (
			<div
				key={comment.id}
				className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-neutral-800 dark:bg-neutral-900"
			>
				<Avatar
					username={comment.author.username}
					name={comment.author.name}
					size={8}
					picture={comment.author.profilePicture}
				/>
				<div className="hashnode-content-style" dangerouslySetInnerHTML={{ __html: content }}></div>
				<div className="flex flex-row gap-5 font-medium text-slate-600 dark:text-neutral-400">
					{comment.totalReactions > 1 && (
						<a href={discussionUrl} target="_blank" rel="noopener noreferrer">
							{comment.totalReactions} likes
						</a>
					)}
				</div>
			</div>
		);
	});

	return (
		<div className="mx-auto flex w-full max-w-screen-md flex-col gap-5 px-5">
			<h3 className="text-xl font-bold tracking-tight text-slate-900 dark:text-neutral-100">
				Comments ({post.comments.totalDocuments})
			</h3>
			<Button
				as="a"
				href={discussionUrl}
				target="_blank"
				rel="noopener noreferrer"
				icon={<HashnodeSVG className="h-5 w-5 stroke-current" />}
				label="Discuss on Hashnode"
				secondaryIcon={<ExternalArrowSVG className="h-5 w-5 stroke-current" />}
			/>
			<div className="flex flex-col gap-5 rounded-lg border border-slate-200 bg-slate-50 p-5 dark:border-neutral-800 dark:bg-neutral-900">
				{commentsList}
			</div>
		</div>
	);
};
