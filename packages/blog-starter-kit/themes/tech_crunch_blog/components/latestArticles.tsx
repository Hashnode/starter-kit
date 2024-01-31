'use client';

import { BlogData } from '@/hooks/useGetBlogPosts';
import TimeAgo from 'javascript-time-ago';
import Image from 'next/image';
import Link from 'next/link';
import { Suspense } from 'react';
import WaveLoader from './loaders';

// English.
import en from 'javascript-time-ago/locale/en';

TimeAgo.addDefaultLocale(en);

const timeAgo = new TimeAgo('en-US');

const LatestArticle = ({ data }: { data: BlogData[] }) => {
	return (
		<>
			<Suspense fallback={<WaveLoader />}>
				{data && data.length > 0
					? data.map((item) => {
							const date = new Date(item.publishedAt);

							return (
								<article
									key={crypto.randomUUID()}
									className="mt-2 grid h-fit grid-cols-4 items-center border-b-2 p-2 pb-4 md:grid-cols-3"
								>
									<div className="col-span-2 flex flex-col gap-2 md:col-span-2">
										<span className="text-green-500">{timeAgo.format(date)}</span>
										<Link
											href={{
												pathname: `/${item.slug}`,
												query: `id=${item.id}`,
											}}
										>
											<span className="font-oswald text-ellipsis font-bold leading-5 md:text-xl">
												{item.title}
											</span>
										</Link>
										<span className="pt-2 text-base font-light leading-3 tracking-tighter md:text-lg">
											{item.author.name}
										</span>
									</div>
									<div className="hidden text-ellipsis leading-4 tracking-tight sm:hidden ">
										{item.brief}
									</div>
									<footer className="col-span-2 w-auto sm:h-auto sm:w-full md:col-span-1">
										<Image width={470} height={300} src={item.coverImage.url} alt={item.slug} />
									</footer>
								</article>
							);
					  })
					: null}
			</Suspense>
		</>
	);
};

export default LatestArticle;
