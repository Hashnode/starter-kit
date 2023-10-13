import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

const DEFAULT_COVER =
	'https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format';

export const SecondaryPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="grid items-start gap-5 md:grid-cols-2">
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }, DEFAULT_COVER)}
					slug={slug}
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
						{excerpt.length > 100 ? excerpt.substring(0, 100) + '…' : excerpt}
					</p>
				</Link>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<Link href={postURL}>
						<DateFormatter dateString={date} />
					</Link>
				</div>
			</div>
		</section>
	);
};
