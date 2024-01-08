import { PostFullFragment } from '../generated/graphql';
import { useAppContext } from './contexts/appContext';
import PostAuthorInfo from './post-author-info';

function AboutAuthor() {
	const { post: _post } = useAppContext();
	const post = _post as unknown as PostFullFragment;
	const { publication, author } = post;
	let coAuthors = post.coAuthors || [];

	const allAuthors = publication?.isTeam ? [author, ...coAuthors] : [author];

	return (
		<div className="mx-auto mb-5 mt-10 flex w-full flex-col gap-16 px-5 md:max-w-screen-md">
			<div className="flex-1 px-2">
				<div className="flex flex-col flex-wrap items-start md:flex-nowrap">
					<h3 className="border-b-1-1/2 mb-4 w-full pb-2 text-base font-medium tracking-wider text-slate-500 dark:border-slate-800 dark:text-slate-400 ">
						Written by
					</h3>
					<div className="flex w-full flex-col gap-12">
						{allAuthors.map((_author) => {
							return <PostAuthorInfo key={_author.id.toString()} author={_author} />;
						})}
					</div>
				</div>
			</div>
		</div>
	);
}

export default AboutAuthor;
