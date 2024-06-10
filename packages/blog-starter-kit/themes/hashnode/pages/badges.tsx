import { formatDistance, parseISO } from 'date-fns';
import { InferGetStaticPropsType } from 'next';
import { WithUrqlProps, initUrqlClient } from 'next-urql';
import Head from 'next/head';
import Image from 'next/image';
import { AppProvider } from '../components/contexts/appContext';
import { Header } from '../components/header';
import { Layout } from '../components/layout';
import PublicationFooter from '../components/publication-footer';
import { BadgesDocument, BadgesQueryVariables } from '../generated/graphql';
import { createHeaders, createSSRExchange, getUrqlClientConfig } from '../lib/api/client';

const REVALIDATION_INTERVAL = 60 * 60 * 24 * 30; // 1 month

export default function BadgesPage(
	props: InferGetStaticPropsType<typeof getStaticProps> & Required<WithUrqlProps>,
) {
	const { publication, title, badgesData, currentMenuId } = props;

	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{title}</title>
					<meta
						name="description"
						content={`List of badges earned by ${publication.author.name} on Hashnode community for blogging.`}
					></meta>
					<meta
						property="og:site_name"
						content={`${publication.displayTitle || publication.author.name}`}
					></meta>
					<meta property="og:type" content="website"></meta>
					<meta property="og:url" content={`${publication.url}/badges`}></meta>
					{/* <meta name="image" property="og:image" content=""></meta> */}
					{/* <meta name="theme-color" content="#000000"></meta> */}
					<meta property="twitter:card" content="summary_large_image"></meta>
					<meta
						property="twitter:title"
						content={`Badges Earned | ${publication.displayTitle || publication.author.name}`}
					></meta>
					<meta
						property="twitter:description"
						content={`List of badges earned by ${publication.author.name} on Hashnode community for blogging.`}
					></meta>
					{/* <meta property="twitter:image" content=""></meta> */}
				</Head>
				<Header currentMenuId={currentMenuId} isHome={false} />
				<div className="mx-auto min-h-screen px-4 py-8 md:w-2/3 md:p-10">
					<div className="mb-10 flex flex-row flex-wrap items-center justify-between">
						<div className="lg:flex-1">
							<h1 className="mb-4 text-3xl font-bold leading-snug tracking-tight dark:text-white md:text-4xl xl:text-5xl">
								Badges Earned
							</h1>
						</div>
						<a
							className="lg:w-84 flex flex-row items-center rounded-lg border p-4 text-xs font-semibold leading-snug text-slate-700 hover:bg-white hover:shadow dark:border-slate-800 dark:text-slate-300 dark:hover:bg-slate-800"
							href="https://hashnode.com"
						>
							<span className="text-green-600">
								<svg className="mr-2 h-8 w-8 shrink-0 fill-current" viewBox="0 0 512 512">
									<path d="M466.5 83.7l-192-80a48.15 48.15 0 00-36.9 0l-192 80C27.7 91.1 16 108.6 16 128c0 198.5 114.5 335.7 221.5 380.3 11.8 4.9 25.1 4.9 36.9 0C360.1 472.6 496 349.3 496 128c0-19.4-11.7-36.9-29.5-44.3zM262.2 478.8c-4 1.6-8.4 1.6-12.3 0C152 440 48 304 48 128c0-6.5 3.9-12.3 9.8-14.8l192-80c3.9-1.6 8.4-1.6 12.3 0l192 80c6 2.5 9.9 8.3 9.8 14.8.1 176-103.9 312-201.7 350.8zM256 411V100l-142.7 59.5c10.1 120.1 77.1 215 142.7 251.5zm-32-66.8c-36.4-39.9-65.8-97.8-76.1-164.5L224 148z" />
								</svg>
							</span>
							<span>
								This is an auto-generated verified page by Hashnode. The blog author has received
								the following badges.
							</span>
						</a>
					</div>

					{badgesData?.map((badge) => {
						const date = parseISO(badge?.dateAssigned!)!;

						return (
							<div
								key={badge.id}
								className="mb-5 flex flex-row flex-wrap items-center rounded-lg border bg-white p-4 dark:border-slate-800 dark:bg-slate-800 lg:p-10"
							>
								<div className="mr-10 lg:w-56">
									<Image src={badge?.image} width={220} height={220} alt={badge?.name} />
								</div>
								<div className="lg:flex-1">
									<h2 className="font-heading mb-2 text-2xl font-bold dark:text-white">
										{badge?.name}
									</h2>
									<div className="prose dark:prose-dark text-slate-700">
										<p className="">Earned {formatDistance(date, new Date())} ago</p>
										{/* <p className="">Earned {format(date, 'LLL d, yyyy')}</p> */}

										<p>{badge?.description}</p>
									</div>
								</div>
							</div>
						);
					})}
				</div>
				{publication ? (
					<PublicationFooter
						authorName={publication.author.name}
						title={publication.title}
						imprint={publication.imprint}
						disableFooterBranding={publication.preferences.disableFooterBranding}
						isTeam={publication.isTeam}
						logo={publication.preferences.logo}
						darkMode={publication.preferences.darkMode}
					/>
				) : null}
			</Layout>
		</AppProvider>
	);
}

export const getStaticProps = async () => {
	const ssrCache = createSSRExchange();
	const urqlClient = initUrqlClient(getUrqlClientConfig(ssrCache), false);
	const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
	const badgesQueryVariables: BadgesQueryVariables = {
		host,
	};
	const publicationInfo = await urqlClient
		.query(BadgesDocument, badgesQueryVariables, {
			fetchOptions: {
				headers: createHeaders({ byPassCache: false }),
			},
			requestPolicy: 'network-only',
		})
		.toPromise();

	if (publicationInfo.error) {
		console.error('Error while fetching publication info', {
			variables: badgesQueryVariables,
			error: publicationInfo.error,
		});
		throw publicationInfo.error;
	}
	if (!publicationInfo.data?.publication) {
		console.error('Publication not found fetching publication info; returning 404', {
			variables: badgesQueryVariables,
		});
		return {
			notFound: true,
			revalidate: REVALIDATION_INTERVAL,
		};
	}

	const { publication: badgesWithPublication } = publicationInfo.data;

	const badgesData = badgesWithPublication.author.badges;

	// Did this to make TS happy
	// @ <AppProvider publication={publication}>
	const publication = {
		...badgesWithPublication,
		author: {
			__typename: badgesWithPublication.author.__typename,
			id: badgesWithPublication.author.id,
			name: badgesWithPublication.author.name,
			username: badgesWithPublication.author.username,
			profilePicture: badgesWithPublication.author.profilePicture,
			followersCount: badgesWithPublication.author.followersCount,
		},
	};

	return {
		props: {
			publication,
			badgesData,
			title: `Badges Earned | ${publication.displayTitle || publication.title}`,
			currentMenuId: 'badges',
		},
		revalidate: 1,
	};
};
