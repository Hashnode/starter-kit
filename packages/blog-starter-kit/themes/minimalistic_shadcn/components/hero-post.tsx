import Link from 'next/link';
import { DateFormatter } from './date-formatter';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
};

export const HeroPost = ({ title, coverImage, date, excerpt, slug }: Props) => {
	// console.log(excerpt);
	const postURL = `/${slug}`;

	return (
		<section className="grid grid-cols-1 gap-5">
			<Link href={postURL}>
				<div className="flex flex-col col-span-1 gap-2">
					<h1 className="text-6xl leading-tight tracking-tight font-satoshiBold hover:text-primary-600 dark:hover:text-primary-500 text-slate-800 hover:underline dark:text-neutral-50 md:text-8xl lg:text-9xl ">
						{title}
					</h1>
					<div className="text-sm font-semibold font-ranadeLight text-slate-500 dark:text-neutral-300">
						<DateFormatter dateString={date} />
					</div>

					<p className="leading-snug text-md font-ranadeMedium text-slate-500 dark:text-neutral-400">
						{excerpt}
					</p>
				</div>
			</Link>
		</section>
	);
};
