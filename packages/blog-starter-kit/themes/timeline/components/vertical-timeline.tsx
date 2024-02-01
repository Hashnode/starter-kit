import Link from 'next/link';
import { PostFragment } from '../generated/graphql';
import { cn } from '../lib/utils';
import { DateFormatter } from './date-formatter';

const VerticalTimeline = ({ posts }: { posts: PostFragment[] }) => {
	return (
		<>
			{posts.map((post, index) => (
				<article key={index} className="relative max-w-lg group">
					<div className="absolute -inset-x-4 -inset-y-2.5 group-hover:bg-slate-50/70 dark:group-hover:bg-slate-800/50 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4" />
					<svg
						viewBox="0 0 9 9"
						className="absolute right-full top-2 mr-6 hidden h-[calc(0.5rem+1px)] w-[calc(0.5rem+1px)] overflow-visible text-slate-200 dark:text-slate-600 sm:block md:mr-12"
					>
						<circle
							cx="4.5"
							cy="4.5"
							r="4.5"
							stroke="currentColor"
							className="fill-white dark:fill-slate-900"
							strokeWidth={2}
						/>
					</svg>
					<div className="relative">
						<h3 className="pt-8 text-lg tracking-tight font-ranadeMedium text-slate-900 dark:text-slate-200 lg:pt-0">
							{post.title}
						</h3>
						<div
							className="max-w-lg mt-2 mb-4 text-muted-foreground font-ranadeLight line-clamp-2"
							// dangerouslySetInnerHTML={{ __html: post.brief }}
						>
							{post.brief}
						</div>
						<dl className="font-satoshiMedium absolute left-0 top-0 lg:left-auto lg:right-full lg:mr-[calc(6.5rem+1px)]">
							<dt className="sr-only">Date</dt>
							<dd className={cn('whitespace-nowrap text-sm leading-6 dark:text-blue-400')}>
								<time dateTime={post.publishedAt}>
									<DateFormatter dateString={post.publishedAt} />
								</time>
							</dd>
						</dl>
					</div>
					<Link
						href={`/${post.slug}`}
						className="flex items-center text-sm font-medium text-sky-500"
					>
						<span className="absolute -inset-x-4 -inset-y-2.5 sm:rounded-2xl md:-inset-x-6 md:-inset-y-4" />
						<span className="relative">
							Read more<span className="sr-only">, {post.title}</span>
						</span>
						<svg
							className="relative ml-2.5 mt-px overflow-visible text-sky-300 dark:text-sky-700"
							width="3"
							height="6"
							viewBox="0 0 3 6"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
						>
							<path d="M0 0L3 3L0 6"></path>
						</svg>
					</Link>
				</article>
			))}
		</>
	);
};

export default VerticalTimeline;
