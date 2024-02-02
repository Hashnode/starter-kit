import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { redirect } from 'next/navigation';

type Props = {
	title: string;
	date: string;
	excerpt: string;
	slug: string;
};

export const HeroPost = ({ title, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<div className="grid animate-up grid-cols-1 self-stretch gap-5   p-4">
			
			<div className="col-span-1 flex flex-col gap-2">
				<h3 className="text-lg font-bold leading-snug text-slate-800 dark:text-neutral-50 lg:text-3xl">
					<Link href={postURL}
						
						className=" text-xl hover:underline leading-1 tracking-tight"
					>
						{title}
					</Link>
				</h3>
				
					<p className="text-md leading-snug text-justify text-slate-500 dark:text-neutral-400">{excerpt}</p>
				
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<p >
						<DateFormatter dateString={date} />
					</p>
				</div>
			</div>
		</div>
	);
};
