import dynamic from 'next/dynamic';
import { useEffect, useState } from 'react';

import { getHashId } from '../utils/commonUtils';
import { useAppContext } from './contexts/appContext';
import { Button } from './custom-button';
import { ExternalArrowSVG, HashnodeSVG } from './icons';
import { NoCommentsLightSVG } from './icons/svgs';

interface Props {
	isPublicationPost: boolean;
	currentFilter: string;
}

const PostComments = dynamic(() =>
	import('../components/post-comments').then((mod) => mod.PostComments),
);

function ResponseList(props: Props) {
	const { currentFilter } = props;
	const { post: _post } = useAppContext();
	const post = _post as any;
	const [isLoading, setLoading] = useState(false);
	const [initialResponsesLoaded, setInitialResponsesLoaded] = useState(false);
	const hashId = getHashId();

	useEffect(() => {
		(async () => {
			if (post.responseCount === 0) {
				return;
			}
			setLoading(true);
			setLoading(false);
			if (!initialResponsesLoaded) {
				setInitialResponsesLoaded(true);
			}
			// Scroll to responseId after the responses load
			if (!hashId) {
				return;
			}
			const el = document.getElementById(hashId);
			if (!el) {
				return;
			}
			el.scrollIntoView();
		})();
	}, [currentFilter]);

	if (post.responseCount === 0) {
		const discussionUrl = `https://hashnode.com/discussions/post/${post.id}`;
		return (
			<div className="flex h-3/5 flex-col items-center justify-center text-sm text-slate-500 dark:text-slate-400">
				<Button
					as="a"
					href={discussionUrl}
					target="_blank"
					rel="noopener noreferrer"
					icon={<HashnodeSVG className="h-5 w-5 stroke-current" />}
					label="Add a comment"
					secondaryIcon={<ExternalArrowSVG className="h-4 w-4 stroke-current" />}
				/>
				<NoCommentsLightSVG className="h-40 w-40" />
				<p>No comments yet</p>
			</div>
		);
	}

	return (
		<div className="mx-2 pb-10 lg:mx-0" id="comments-list">
			<PostComments />
			{isLoading &&
				[...Array(3).keys()].map((val: number) => (
					<div
						key={`comments-list-loader-${val}`}
						className="border-b-1/2 animate-pulse dark:border-slate-700"
					>
						<div className="px-4 py-5">
							<div className="mb-6 flex flex-row items-center bg-white dark:border-slate-800 dark:bg-slate-900">
								<div className="mr-4 h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-700" />
								<div className="flex flex-col gap-2">
									<div className="h-3 w-56 rounded bg-slate-200 dark:bg-slate-700" />
									<div className="h-3 w-24 rounded bg-slate-200 dark:bg-slate-700" />
								</div>
							</div>
							<div>
								<div className="mb-2 h-3 w-11/12 rounded bg-slate-200 dark:bg-slate-700" />
								<div className="mb-2 h-3 w-11/12 rounded bg-slate-200 dark:bg-slate-700" />
								<div className="mb-2 h-3 w-11/12 rounded bg-slate-200 dark:bg-slate-700" />
							</div>
						</div>
					</div>
				))}
		</div>
	);
}

export default ResponseList;
