import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
	views: number;
};

export const HeroPost = ({ title, coverImage, date, excerpt, slug, views }: Props) => {
	// console.log(excerpt);
	const postURL = `/${slug}`;

	return (
		<section className="grid grid-cols-1 gap-5">
			<Link href={postURL}>
				<div className="col-span-1 flex flex-col gap-2">
					<h1 className="font-satoshiBold hover:text-primary-600 dark:hover:text-primary-500 text-6xl leading-tight tracking-tight text-slate-800 hover:underline dark:text-neutral-50 md:text-8xl lg:text-9xl ">
						{title}
					</h1>
					<div className="font-ranadeLight flex space-x-5 text-sm font-semibold text-slate-500 dark:text-neutral-300">
						<DateFormatter dateString={date} /> <EyeIcon className="h-5 w-5" />
						&nbsp;{views} views
					</div>

					<p className="text-md font-ranadeMedium leading-snug text-slate-500 dark:text-neutral-400">
						{excerpt}
					</p>
				</div>
			</Link>
		</section>
	);
};
