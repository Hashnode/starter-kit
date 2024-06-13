import { resizeImage } from '@starter-kit/utils/image';
import { PostFullFragment, User } from '../generated/graphql';
import { CoverImage } from './cover-image';
import CoAuthorsModal from './co-authors-modal';
import { PostTitle } from './post-title';
import { useAppContext } from './contexts/appContext';
import { twJoin } from 'tailwind-merge';
import { useState } from 'react';

type Author = Pick<User, 'username' | 'name'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
};

export const PostHeader = ({ title, coverImage}: Props) => {
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

			</div>
			{coverImage && (
				<div className="flex justify-center items-center relative w-1/2 h-1/2 w-full px-5 sm:mx-0">
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
