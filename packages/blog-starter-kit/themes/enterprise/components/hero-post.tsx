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

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;

	// URL'leri excerpt'ten temizlemek için bir fonksiyon oluşturuyoruz
	const cleanExcerpt = (text: string) => {
		const urlRegex = /(https?:\/\/[^\s]+)/g;
		return text.replace(urlRegex, '');
	};

	return (
		<section className="grid grid-cols-1 gap-5 hover:opacity-90">
			<Link
				href={postURL}
				className="dark:hover:text-primary-500 leading-tight tracking-tight"
				rel="canonical"
			>
			<div className="col-span-1">
				<CoverImage
					title={title}
					src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' }) || DEFAULT_COVER}
					slug={slug}
					priority={true}
				/>
			</div>
			<div className="col-span-1 flex flex-col gap-2">
				<h3 className="text-xl font-bold leading-snug text-slate-800 dark:text-neutral-50 lg:text-3xl">
						{title}
				</h3>
					<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">{cleanExcerpt(excerpt)}</p>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
						<DateFormatter dateString={date} />
				</div>
			</div>
			</Link>
		</section>
	);
};
