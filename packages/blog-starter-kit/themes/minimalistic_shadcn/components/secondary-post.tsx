import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { DateFormatter } from './date-formatter';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';

type Props = {
	title: string;
	coverImage: string;
	date: string;
	excerpt: string;
	slug: string;
	views: number;
};

export const SecondaryPost = ({ title, coverImage, date, excerpt, slug, views }: Props) => {
	const postURL = `/${slug}`;

	return (
		<div className="mt-5">
			<Link href={postURL}>
				<Card className="m-2 border-none">
					<CardHeader className="font-satoshiBold text-2xl text-zinc-800 dark:text-zinc-300 md:text-4xl">
						{title}
						<CardDescription className="font-ranadeItalic mt-2 flex space-x-5">
							{' '}
							Published:&nbsp;
							<DateFormatter dateString={date} /> <EyeIcon className="h-5 w-5" />
							&nbsp;{views}
						</CardDescription>
					</CardHeader>
					<CardContent className="text-muted-foreground font-ranadeRegular">{excerpt}</CardContent>
				</Card>
			</Link>
		</div>
	);
};
