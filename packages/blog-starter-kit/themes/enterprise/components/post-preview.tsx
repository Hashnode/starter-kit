import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { User } from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name' | 'profilePicture'>;

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
};

export const PostPreview = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<div className="grid grid-cols-1 gap-5">
			<div className="col-span-1">
				<CoverImage
					slug={slug}
					title={title}
					src={resizeImage(coverImage, { w: 400, h: 210, c: 'thumb' }, DEFAULT_COVER)}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h1 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
					<Link
						href={postURL}
						className="hover:text-primary-600 dark:hover:text-primary-500 hover:underline"
					>
						{title}
					</Link>
				</h1>
				<Link href={postURL}>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
						{excerpt.length > 140 ? excerpt.substring(0, 140) + '…' : excerpt}
					</p>
				</Link>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<Link href={postURL}>
						<DateFormatter dateString={date} />
					</Link>
				</div>
			</div>
		</div>
	);
};
