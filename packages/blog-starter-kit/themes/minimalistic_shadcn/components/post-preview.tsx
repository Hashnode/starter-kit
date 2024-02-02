import { EyeIcon } from 'lucide-react';
import Link from 'next/link';
import { User } from '../generated/graphql';
import { DateFormatter } from './date-formatter';
import { Card, CardContent, CardDescription, CardHeader } from './ui/card';

type Author = Pick<User, 'name' | 'profilePicture'>;

type Props = {
	title: string;
	// coverImage: string | null | undefined;
	date: string;
	excerpt: string;
	author: Author;
	slug: string;
	views: number;
};

export const PostPreview = ({ title, date, excerpt, slug, views }: Props) => {
	const postURL = `/${slug}`;
	return (
		<div className="mt-5">
			<Link href={postURL}>
				<Card className="m-2 border-none">
					<CardHeader className="font-satoshiBold text-2xl md:text-4xl">
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
