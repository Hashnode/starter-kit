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
};

export const PostHeader = ({ title, coverImage, date, author, readTimeInMinutes }: Props) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="flex w-full flex-col items-center justify-center gap-2 text-slate-700 dark:text-neutral-300 md:flex-row">
				<Avatar
					username={author.username}
					name={author.name}
					size={8}
					picture={author.profilePicture}
				/>
				<span className="block font-bold text-slate-500">&middot;</span>
				<DateFormatter dateString={date} />
				{readTimeInMinutes && <span className="block font-bold text-slate-500">&middot;</span>}
				<ReadTimeInMinutes readTimeInMinutes={readTimeInMinutes} />
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
