import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { User } from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { redirect } from 'next/navigation';

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
		<div className='self-stretch col-span-1 fade-in transition-all duration-150 rounded-md'>
			<div className="grid grid-cols-1 grid-rows-1 s  gap-5 p-4">
				
				<div className="col-span-1 flex flex-col gap-2">
					<h2 className="text-lg font-semibold cursor-pointer leading-tight text-slate-800 dark:text-neutral-50">
						<Link href={postURL}
						
							className="hover:underline cursor-pointer transition-all duration-150"
						>
							{title}
						</Link>
					</h2>
					<div>
						<p className="text-md leading-snug text-slate-500 dark:text-neutral-400 text-justify">
							{excerpt.length > 140 ? excerpt.substring(0, 140) + '…' : excerpt}
						</p>
					</div>
					<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
						<p>
							<DateFormatter dateString={date} />
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
