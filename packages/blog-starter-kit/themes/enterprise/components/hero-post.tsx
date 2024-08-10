import { resizeImage } from '@starter-kit/utils/image';
import { useRouter } from 'next/router';
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
	const router = useRouter();

	const navigate = () => {
		router.push(postURL);
	};

	return (
		<section
			onClick={navigate}
			className="grid cursor-pointer grid-cols-1 gap-10 rounded-lg p-4 hover:bg-slate-50 dark:hover:bg-neutral-900 lg:grid-cols-2"
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
				<h1 className="text-xl font-bold leading-snug text-slate-800 dark:text-neutral-50 lg:text-3xl">
					<span className="leading-tight tracking-tight">{title}</span>
				</h1>
				<p className="text-md leading-snug text-slate-500 dark:text-neutral-400">{excerpt}</p>
				<div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
					<DateFormatter dateString={date} />
				</div>
			</div>
		</section>
	);
};
