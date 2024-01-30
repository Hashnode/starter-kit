import { useHashnodeComments } from 'hashnode-client';
import CommentCard from './comment-card';
import { Button } from './ui/button';

const PostComments = ({ postId }: { postId: string }) => {
	const { loading, error, pageInfo, totalComments, comments, loadMoreComments } =
		useHashnodeComments({ host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST, slug: postId });
	const { hasNextPage } = pageInfo;
	return (
		<div className="w-full md:px-[20vw]">
			<div className="w-full pb-10 mt-5">
				<h2 className="flex items-center w-full gap-3 mt-2 text-3xl font-bold text-left">
					Comments{' '}
					<span className="inline-flex h-[24px] w-[24px] items-center justify-center rounded-full bg-black text-base text-white">
						{totalComments}
					</span>
				</h2>

				<div className="flex flex-col gap-3 mt-5">
					{comments.map((comment: any) => {
						return <CommentCard key={comment.id} comment={comment.node} />;
					})}
				</div>
				<div className="flex justify-center w-full">
					<Button
						disabled={loading || !hasNextPage}
						className="mt-10"
						variant="outline"
						onClick={loadMoreComments}
					>
						{!hasNextPage ? 'No More Comments' : loading ? 'Loading More..' : `Show More Comments`}
					</Button>
				</div>
			</div>
		</div>
	);
};

export default PostComments;
