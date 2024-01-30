import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';

const CommentCard = ({ comment }: { comment: any }) => {
	const { author, content, replies } = comment;
	const allReplies = replies?.edges;
	return (
		<div>
			<div className="flex items-start gap-3">
				<div className="">
					<Avatar>
						<AvatarImage src={author.profilePicture} />
						<AvatarFallback>DP</AvatarFallback>
					</Avatar>
				</div>
				<div className="bg-secondary min-h-[64px] w-full rounded-md px-5 pt-2">
					<div className="text-[13px] font-bold">{author.name}</div>
					<div className="text-[14px]" dangerouslySetInnerHTML={{ __html: content.html }}></div>
				</div>
			</div>
			{allReplies?.length > 0 && (
				<div className="mt-5 ml-20">
					{allReplies.map((reply: any) => (
						<CommentCard comment={reply.node} />
					))}
				</div>
			)}
		</div>
	);
};

export default CommentCard;
