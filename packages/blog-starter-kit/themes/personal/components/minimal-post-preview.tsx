import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';

type Author = Pick<User, 'name'>;

type Props = {
	title: string;
	date: string;
	author: Author;
	slug: string;
	commentCount: number;
};

export const MinimalPostPreview = ({ title, date, slug, commentCount }: Props) => {
	const postURL = `/${slug}`;

	return (
		<section className="flex flex-col items-start gap-1 backdrop-blur-2xl bg-zinc-600/50 px-10 py-16 rounded-2xl">
			<h2 className="text-xl font-bold leading-tight tracking-tight text-yellow-500/70">
				<Link href={postURL}>{title}</Link>
			</h2>
			<p className="flex flex-row items-center gap-2 text-zinc-400">
				<Link href={postURL} className="text-sm ">
					<DateFormatter dateString={date} />
				</Link>
				{commentCount > 2 && (
					<>
						<span>&middot;</span>
						<Link href={postURL} className="text-sm ">
							{commentCount} comments
						</Link>
					</>
				)}
			</p>
		</section>
	);
};
