import { resizeImage } from '@starter-kit/utils/image';
import { User } from '../generated/graphql';
import { CoverImage } from './cover-image';
import { DateFormatter } from './date-formatter';
import { ReadTimeInMinutes } from './post-read-time-in-minutes';
import { PostTitle } from './post-title';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import { HoverCard, HoverCardContent, HoverCardTrigger } from './ui/hover-card';
import { Label } from './ui/label';

type Author = Pick<User, 'username' | 'name' | 'profilePicture'>;

type Bio =
	| {
			html: string;
	  }
	| null
	| undefined;

type Badge = {
	id: string;
	name: string;
	description?: string | null | undefined;
	image: string;
	dateAssigned?: string | null | undefined;
	infoURL?: string | null | undefined;
	suppressed?: boolean | null | undefined;
};

type Props = {
	title: string;
	coverImage: string | null | undefined;
	date: string;
	author: Author;
	readTimeInMinutes: number;
	views: number;
	bio: Bio;
	badges?: Badge[];
};

export const PostHeader = ({
	title,
	coverImage,
	date,
	author,
	readTimeInMinutes,
	views,
	bio,
	badges,
}: Props) => {
	return (
		<>
			<PostTitle>{title}</PostTitle>
			<div className="z-50 flex flex-col items-center justify-center w-full gap-5 space-x-5 font-ranadeRegular text-slate-700 dark:text-neutral-300 md:flex-row md:gap-0">
				<HoverCard>
					<HoverCardTrigger>
						<div className="flex items-center space-x-3">
							<Avatar className="w-8 h-8">
								<AvatarImage
									src={
										author.profilePicture ?? 'https://hashnode.com/static/images/default-avatar.png'
									}
								/>
								<AvatarFallback>DP</AvatarFallback>
							</Avatar>
							<Label className="text-base">{author.name}</Label>
						</div>
					</HoverCardTrigger>
					<HoverCardContent className="flex flex-col md:w-[750px]">
						<div className="flex flex-wrap items-center w-full mb-3 space-x-8 text-center">
							{badges &&
								badges.map((badge) => (
									<>
										<div className="flex flex-col items-center space-x-5">
											<HoverCard>
												<HoverCardTrigger>
													<Avatar className="w-12 h-12">
														<AvatarImage
															src={
																badge.image ??
																'https://hashnode.com/static/images/default-avatar.png'
															}
														/>
														<AvatarFallback>DP</AvatarFallback>
													</Avatar>
												</HoverCardTrigger>
												<HoverCardContent className="bg-indigo-400">
													<Label className="">{badge.name}</Label>
												</HoverCardContent>
											</HoverCard>
										</div>
									</>
								))}
						</div>
						<div>
							{bio?.html && (
								<div className="hidden pr-2 md:block">
									<div
										className="prose dark:prose-dark text-slate-600 dark:text-slate-300"
										dangerouslySetInnerHTML={{ __html: bio?.html }}
									/>
								</div>
							)}
						</div>

						{/* {author.badges.map((badge) => {
								return (
									<div
										className="inline-flex items-center rounded-full bg-blue-100 px-2.5 py-0.5 text-xs font-medium text-blue-800 md:mt-1"
										key={badge.id}
									>
										{badge.name}
									</div>
								);
							})} */}
					</HoverCardContent>
				</HoverCard>

				<section className="flex">
					&nbsp;
					<DateFormatter dateString={date} />
					<ReadTimeInMinutes readTimeInMinutes={readTimeInMinutes} />
					{/* <div>{views}</div> */}
				</section>
			</div>
			{coverImage && (
				<div className="w-full px-5 sm:mx-0">
					<CoverImage
						title={title}
						src={resizeImage(coverImage, { w: 1600, h: 840, c: 'thumb' })}
						priority={true}
					/>
				</div>
			)}
		</>
	);
};
