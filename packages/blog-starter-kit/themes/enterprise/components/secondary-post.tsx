import { resizeImage } from '@starter-kit/utils/image';
import Link from 'next/link';
import { DEFAULT_COVER } from '../utils/const';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

export const SecondaryPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	// URL'leri excerpt'ten temizlemek için bir fonksiyon oluşturuyoruz
	const cleanExcerpt = (text: string) => {
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		return text.replace(urlRegex, '');
	};

	return (
		<article className="grid items-start gap-5 md:grid-cols-2 hover:opacity-90">
			<Link
						href={postURL}
						className="dark:hover:text-primary-500 contents"
					>
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }, DEFAULT_COVER)}
					slug={slug}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h3 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
						{title}
				</h3>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">
						{cleanExcerpt(excerpt.length > 100 ? excerpt.substring(0, 100) + '…' : excerpt)}
					</p>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
						<DateFormatter dateString={date} />
				</div>
			</div>
			</Link>
		</article>
	);
};
