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
};

export const PostPreview = ({ title, date, excerpt, slug }: Props) => {
	const postURL = `/${slug}`;
	return (
		<div className="z-50 mt-5 backdrop-blur-sm">
			<Link href={postURL}>
				<Card className="m-2 border-none">
					<CardHeader className="text-2xl font-satoshiBold md:text-4xl">
						{title}
						<CardDescription className="mt-2 font-ranadeItalic">
							{' '}
							Published:&nbsp;
							<DateFormatter dateString={date} />
						</CardDescription>
					</CardHeader>
					<CardContent className="text-muted-foreground font-ranadeRegular">{excerpt}</CardContent>
				</Card>
			</Link>
		</div>
	);
};
