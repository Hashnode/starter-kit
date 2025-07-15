import { resizeImage } from '@starter-kit/utils/image';
import { PostFullFragment, User } from '../generated/graphql';
import { Avatar } from './avatar';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import CoAuthorsModal from './co-authors-modal';
import { ReadTimeInMinutes } from './post-read-time-in-minutes';
import { PostTitle } from './post-title';
import { useAppContext } from './contexts/appContext';
import { twJoin } from 'tailwind-merge';
import { useState } from 'react';
import ProfileImage from './profile-image';

type Author = Pick<User, 'username' | 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	author: Author;
	readTimeInMinutes: number;
};

export const PostHeader = ({ title, coverImage, date, author, readTimeInMinutes }: Props) => {
	const { post: _post } = useAppContext();
  	const post = _post as unknown as PostFullFragment;
	const authorsArray = [post.author, ...(post.coAuthors || [])];
	const [isCoAuthorModalVisible, setIsCoAuthorModalVisible] = useState(false);
	const closeCoAuthorModal = () => {
		setIsCoAuthorModalVisible(false);
	};
	const openCoAuthorModal = () => {
		setIsCoAuthorModalVisible(true);
	};
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="flex flex-row flex-wrap items-center justify-center w-full gap-2 px-2 text-slate-700 dark:text-neutral-300 md:px-0">
				<div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
					{authorsArray.map((coAuthor, index) => (
						<div
						key={coAuthor.id?.toString()}
						style={{ zIndex: index + 1 }}
						className={twJoin(
							'overflow-hidden rounded-full  bg-slate-200  dark:bg-white/20 md:mr-3',
							index > 0 ? 'hidden md:block' : '',
							authorsArray.length === 1
							? 'h-10 w-10 md:h-12 md:w-12'
							: 'h-8 w-8 border-2 border-slate-100 dark:border-slate-800 md:h-9 md:w-9 [&:not(:first-of-type)]:-ml-3 md:[&:not(:first-of-type)]:-ml-6 ',
						)}
						>
						<ProfileImage user={coAuthor} width="200" height="200" hoverDisabled={true} />
						</div>
					))}
					{post.coAuthors && post.coAuthors.length > 0 && (
						<button
						onClick={openCoAuthorModal}
						style={{ zIndex: post.coAuthors?.length }}
						className="relative -ml-3 flex h-8 w-8 items-center justify-center overflow-hidden rounded-full border-1-1/2 border-slate-100 bg-slate-100 px-1 group-hover:border-slate-200 dark:border-slate-800 dark:bg-slate-600 dark:text-white group-hover:dark:border-slate-700 md:hidden"
						>
						<p className="truncate text-xs font-normal">+{post.coAuthors.length}</p>
						</button>
					)}
					{!post.coAuthors?.length && (
						<a
						href={`https://hashnode.com/@${post.author.username}`}
						className="ml-2 font-semibold text-slate-600 dark:text-white md:ml-0"
						>
						<span>{post.author.name}</span>
						</a>
					)}
					{post.coAuthors && post.coAuthors.length > 0 && (
						<button
						onClick={openCoAuthorModal}
						className="ml-2 text-left font-semibold text-slate-600 hover:underline dark:text-white"
						>
						<span>{post.author.name}</span>
						{post.coAuthors && (
							<span className="font-normal">
							{' '}
							<br className="block sm:hidden" />
							with {post.coAuthors.length} co-author{post.coAuthors.length === 1 ? '' : 's'}
							</span>
						)}
						</button>
					)}
				</div>
				<div className="mb-5 flex w-full flex-row items-center justify-center md:mb-0 md:w-auto md:justify-start">
					<span className="mx-3 hidden font-bold text-slate-500 md:block">&middot;</span>
					<DateFormatter dateString={date} />
					{readTimeInMinutes && <span className="mx-3 font-bold text-slate-500">&middot;</span>}
					<ReadTimeInMinutes readTimeInMinutes={readTimeInMinutes} />
				</div>
			</div>
			{coverImage && (
				<div className="w-full px-5 sm:mx-0">
					<CoverImage
						title={title}
						src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' })}
						priority={true}
					/>
				</div>
			)}
			{isCoAuthorModalVisible && (
				<CoAuthorsModal closeModal={closeCoAuthorModal} />
			)}
		</>
	);
};
