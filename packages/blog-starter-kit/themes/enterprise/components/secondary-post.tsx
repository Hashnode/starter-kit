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
  
	return (
	  <section className="grid items-start md:grid-cols-2 divide-y divide-x">
		<div className="col-span-1 divide-x">
		  <div className="w-full h-full overflow-hidden">
			<CoverImage
			  slug={slug}
			  title={title}
			  src={resizeImage(coverImage, { w: 400, h: 210, c: 'thumb' }, DEFAULT_COVER)}
			/>
		  </div>
		</div>
		<div className="col-span-1 flex flex-col gap-2 p-8">
		  <h1 className="text-xl font-['Outfit'] font-semibold leading-tight text-slate-800 dark:text-neutral-50">
			<Link
			  href={postURL}
			  className="hover:text-primary-500 dark:hover:text-primary-500 hover:underline font-['Outfit']"
			>
			  {title}
			</Link>
		  </h1>
		  <Link href={postURL}>
			<p className="font-['Outfit'] text-md leading-snug text-slate-500 dark:text-neutral-400">
			  {excerpt.length > 100 ? excerpt.substring(0, 100) + '…' : excerpt}
			</p>
		  </Link>
		  <div className="font-['Outfit'] text-sm font-semibold text-slate-500 dark:text-neutral-300">
			<Link href={postURL}>
			  <DateFormatter dateString={date} />
			</Link>
		  </div>
		</div>
	  </section>
	);
  };
  

