import { resizeImage } from '@starter-kit/utils/image';
import { GetServerSideProps } from 'next';
import { WithUrqlProps, initUrqlClient } from 'next-urql';
import Head from 'next/head';
import { useState } from 'react';
import { twJoin } from 'tailwind-merge';
import { useQuery } from 'urql';
import { AppProvider } from '../../components/contexts/appContext';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import PublicationFooter from '../../components/publication-footer';
import PublicationPosts from '../../components/publication-posts';
import {
	PublicationFragment,
	SeriesPageInitialDocument,
	SeriesPageInitialQuery,
} from '../../generated/graphql';
import { createHeaders, createSSRExchange, getUrqlClientConfig } from '../../lib/api/client';

const INITIAL_LIMIT = 6;

type Props = {
	publication: PublicationFragment;
	series: NonNullable<NonNullable<SeriesPageInitialQuery['publication']>['series']>;
	slug: string;
	initialLimit: number;
	currentMenuId: string;
};

export default function Series({
	publication,
	series,
	slug,
	currentMenuId,
}: Required<WithUrqlProps> & Props) {
	const title = `${series.name} - ${publication.title}`;
	const [after, setAfter] = useState<string | null>(null);
	const [{ data, fetching }] = useQuery({
		query: SeriesPageInitialDocument,
		variables: {
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			slug,
			first: INITIAL_LIMIT,
			after,
		},
		requestPolicy: 'cache-first',
	});
	const postData = data?.publication?.series?.posts ?? {
		edges: [],
		pageInfo: { hasNextPage: false },
	};
	const posts = postData.edges.map((edge) => edge.node);

	const fetchedOnce = postData.edges.length > INITIAL_LIMIT;

	const fetchMore = () => {
		if (postData.pageInfo.hasNextPage) {
			setAfter(postData.edges[postData.edges.length - 1].cursor);
		}
	};

	return (
		<AppProvider publication={publication} series={series}>
			<Layout>
				<Head>
					<title>{title}</title>
				</Head>
				<Header currentMenuId={currentMenuId} isHome={false} />
				<div
					className={twJoin(
						'blog-content-area feed-width mx-auto md:w-2/3',
						!!publication.about?.html && 'mt-12',
					)}
				>
					<div>
						<div
							className={twJoin(
								'blog-series-card mb-16 mt-12',
								publication.preferences.layout === 'grid' ? 'px-4 lg:px-8' : 'px-4 lg:px-16',
							)}
						>
							<div className="flex flex-col-reverse flex-wrap items-start md:flex-row">
								<div className={twJoin('pr-8', series.coverImage ? 'w-full md:w-1/2' : 'w-full')}>
									<span className="blog-series-label mb-2 font-semibold uppercase tracking-tight text-slate-600 dark:text-slate-400">
										Series
									</span>
									<h1 className="blog-series-title font-heading mb-2 text-3xl font-bold text-slate-900 dark:text-white md:text-4xl xl:text-5xl">
										{series.name}
									</h1>
									{series.description?.html && (
										<div
											className="blog-series-desc prose prose-lg dark:prose-dark mb-5"
											// eslint-disable-next-line react/no-danger
											dangerouslySetInnerHTML={{ __html: series.description.html }}
										/>
									)}
								</div>
								{series.coverImage && (
									<div className="blog-series-cover-container mb-5 w-full md:mb-0 md:w-1/2">
										{/* custom-style */}
										<div
											className="blog-series-cover h-32 w-full rounded-lg border bg-cover bg-center bg-no-repeat dark:border-slate-800"
											style={{
												backgroundImage: `url('${resizeImage(series.coverImage, {
													w: 800,
													c: 'thumb',
												})}')`,
												width: '100%',
												paddingTop: '52.5%',
											}}
										/>
									</div>
								)}
							</div>
						</div>

						{posts.length === 0 && publication.isTeam ? (
							<div className="mb-6 flex w-full flex-col items-center rounded border-2 border-dashed p-6 dark:border-slate-800">
								<img
									className="mb-5 block w-56"
									alt="No posts"
									src="https://cdn.hashnode.com/res/hashnode/image/upload/v1584017401345/LrrwlBZC0.png"
								/>
								<p className="text-2xl font-bold leading-snug tracking-tight text-slate-700 dark:text-slate-400">
									No posts yet
								</p>
							</div>
						) : null}

						{posts.length > 0 && (
							<div className="my-10 flex flex-col items-center justify-center">
								<hr className="w-full border-t dark:border-slate-800" />
								<p className="-mt-5 bg-white p-2 font-medium text-slate-600 dark:bg-slate-900 dark:text-slate-400">
									Articles in this series
								</p>
							</div>
						)}

						<PublicationPosts
							publication={publication}
							posts={postData}
							fetchMore={fetchMore}
							fetchedOnce={fetchedOnce}
							fetching={fetching}
						/>
					</div>
				</div>
				<PublicationFooter
					authorName={publication.author.name}
					title={publication.title}
					imprint={publication.imprint}
					disableFooterBranding={publication.preferences.disableFooterBranding}
					isTeam={publication.isTeam}
					logo={publication.preferences.logo}
					darkMode={publication.preferences.darkMode}
				/>
			</Layout>
		</AppProvider>
	);
}

type Params = {
	slug: string;
};

export const getServerSideProps: GetServerSideProps<Props, Params> = async (ctx) => {
	const { req, query, resolvedUrl, params } = ctx;
	const slug = params!.slug;
	const requestHost = query['x-host'] || req.headers.host;
	const [resolvedPath] = resolvedUrl.split('?');
	const ssrCache = createSSRExchange();
	const urqlClient = initUrqlClient(getUrqlClientConfig(ssrCache), false);
	let rawCurrentMenuId = '';
	const publicationInfo = await urqlClient
		.query(
			SeriesPageInitialDocument,
			{
				host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
				slug,
				first: INITIAL_LIMIT,
				after: null,
			},
			{
				fetchOptions: {
					headers: createHeaders({ byPassCache: false }),
				},
				requestPolicy: 'network-only',
			},
		)
		.toPromise();

	const { publication } = publicationInfo.data || {};

	if (!publication) {
		return {
			notFound: true,
		};
	}

	const { series } = publication || {};

	if (!series) {
		return {
			notFound: true,
		};
	}

	if (publication && series) {
		const menu = publication.preferences.navbarItems || [];

		for (let i = 0; i < menu.length; i++) {
			const menuItem = menu[i];

			if (menuItem.type === 'series' && menuItem.series && menuItem.series.id === series.id) {
				rawCurrentMenuId = menuItem.id!;
				break;
			}
			// check for links that could be mapped to the series page
			if (menuItem.type === 'link' && menuItem.url && !rawCurrentMenuId) {
				const { pathname, host } = new URL(menuItem.url);
				const isLinkOnSameDomain = requestHost === host;
				const pathnameMatches = resolvedPath === pathname;

				if (pathnameMatches && isLinkOnSameDomain) {
					rawCurrentMenuId = menuItem.id.toString();
					break;
				}
			}
		}
	}

	return {
		props: {
			publication,
			series,
			slug,
			urqlState: ssrCache.extractData(),
			initialLimit: INITIAL_LIMIT,
			currentMenuId: rawCurrentMenuId,
		},
	};
};
