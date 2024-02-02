import { twJoin } from 'tailwind-merge';

import { getBlurHash, resizeImage } from '@starter-kit/utils/image';
import CustomImage from './custom-image';

function PostAuthorInfo(props: any) {
	const { author } = props;
	console.log('author', author);
	return (
		<div className="flex flex-col flex-1 w-full md:flex-row">
			<div className="flex flex-row flex-1 w-full mb-4 md:mb-0 ">
				<div className="flex flex-row mr-4 md:mb-0">
					<a
						href={`https://hashnode.com/@${author.username}`}
						className="block w-10 h-10 overflow-hidden border rounded-full dark:border-slate-800 md:h-14 md:w-14"
					>
						<CustomImage
							className="block"
							placeholder="blur"
							originalSrc={author.profilePicture}
							src={resizeImage(author.profilePicture, {
								w: 256,
								h: 256,
								c: 'thumb',
							})}
							blurDataURL={getBlurHash(
								resizeImage(author.profilePicture, {
									w: 256,
									h: 256,
									c: 'thumb',
								}),
							)}
							width={256}
							height={256}
							alt={author.name}
						/>
					</a>
				</div>
				<div
					className={twJoin(
						'flex flex-1 flex-col justify-center md:justify-start',
						!author.bio?.html ? 'md:justify-center' : '',
					)}
				>
					<div className="flex flex-row items-center md:mb-1">
						<h1 className="font-sans text-lg font-semibold text-slate-800 dark:text-slate-100">
							<a href={`https://hashnode.com/@${author.username}`}>{author.name}</a>
						</h1>
					</div>
					{author.badges && (
						<div className="hidden pr-2 md:block">
							{author.badges.map((badge) => {
								return (
									<div
										className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 md:mt-1"
										key={badge.id}
									>
										{badge.name}
									</div>
								);
							})}
						</div>
					)}
					{author.bio?.html && (
						<div className="hidden pr-2 md:block">
							<div
								className="prose dark:prose-dark text-slate-600 dark:text-slate-300"
								dangerouslySetInnerHTML={{ __html: author.bio?.html }}
							/>
						</div>
					)}
				</div>
			</div>
			{author.bio?.html && (
				<div className="block mb-4 md:hidden">
					<div
						className="prose dark:prose-dark text-slate-600 "
						dangerouslySetInnerHTML={{ __html: author.bio?.html }}
					/>
				</div>
			)}
		</div>
	);
}

export default PostAuthorInfo;
