import { getBaseUrl } from '@starter-kit/utils/consts';
import Link from 'next/link';
import DateFormatter from './date-formatter';

type Author = {
	name: string;
	username: string;
};

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	url: string;
	commentCount: number;
};

const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `${getBaseUrl()}/${slug}`;
	return (
		<section className="flex flex-col items-start gap-1">
			<h2 className="text-lg leading-tight tracking-tight text-black dark:text-white">
				<Link href={postURL}>{title}</Link>
			</h2>
			<p className="flex flex-row items-center gap-2">
				<Link href={postURL} className="text-sm text-neutral-600 dark:text-neutral-400">
					<DateFormatter dateString={date} />
				</Link>
				{commentCount > 2 && (
					<>
						<span>&middot;</span>
						<Link href={postURL} className="text-sm text-neutral-600 dark:text-neutral-400">
							{commentCount} comments
						</Link>
					</>
				)}
			</p>
		</section>
	);
};

export default MinimalPostPreview;
