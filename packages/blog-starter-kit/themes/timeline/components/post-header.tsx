import { resizeImage } from '@starter-kit/utils/image';
import { User } from '../generated/graphql';
import { Avatar } from './avatar';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { ReadTimeInMinutes } from './post-read-time-in-minutes';
import { PostTitle } from './post-title';

type Author = Pick<User, 'username' | 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	author: Author;
	readTimeInMinutes: number;
	views: number;
};

export const PostHeader = ({ title, coverImage, date, author, readTimeInMinutes, views }: Props) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="flex flex-col items-center justify-center w-full gap-5 text-slate-700 dark:text-neutral-300 md:flex-row md:gap-0">
				<Avatar
					username={author.username}
					name={author.name}
					size={8}
					picture={author.profilePicture}
				/>
				<section className="flex">
					&nbsp;
					<DateFormatter dateString={date} />
					<ReadTimeInMinutes readTimeInMinutes={readTimeInMinutes} />
					{/* <div>{views}</div> */}
				</section>
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
		</>
	);
};
