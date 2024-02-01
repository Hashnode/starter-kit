import { resizeImage } from '@starter-kit/utils/image';
import request from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import { CoverImage } from '../../components/cover-image';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { MorePosts } from '../../components/more-posts';
import {
	PostFragment,
	PublicationFragment,
	SeriesFragment,
	SeriesPostsByPublicationDocument,
	SeriesPostsByPublicationQuery,
	SeriesPostsByPublicationQueryVariables,
} from '../../generated/graphql';
import { DEFAULT_COVER } from '../../utils/const';
import { ThemeProvider, useTheme } from '../../components/contexts/themeContext';

type Props = {
	series: SeriesFragment;
	posts: PostFragment[];
	publication: PublicationFragment;
};

export default function Post({ series, publication, posts }: Props) {
	const title = `${series.name} - ${publication.title}`;
	const {theme} = useTheme()
	return (
		<AppProvider publication={publication}>
			
			<Layout>
				<Head>
					<title>{title}</title>
				</Head>
				<Header />
				<Container className={`${theme} flex flex-col items-stretch gap-10 px-5 pb-10 dark:bg-black`}>
					<div
						className={`col-span-full grid grid-cols-1 text-center pt-5 md:gap-5`}
					>
						<div className="col-span-full flex flex-col items-center gap-1 md:col-span-2 lg:col-span-3">
							<p className="font-bold uppercase text-slate-500 dark:text-neutral-400">Series</p>
							<h1 className="text-4xl font-bold text-slate-900 dark:text-neutral-50">
								{series.name}
							</h1>
							<div
								className="hashnode-content-style"
								dangerouslySetInnerHTML={{ __html: series.description?.html ?? '' }}
							></div>
						</div>
						
					</div>
					<h2 className='text-3xl font-bold text-center my-8 text-slate-900 dark:text-white'>Posts in Series</h2>
					{posts.length > 0 ? (
						<MorePosts context="series" posts={posts} />
					) : (
						<div>No Posts found</div>
					)}
				</Container>
				<Footer />
			</Layout>
			
		</AppProvider>
	);
}

type Params = {
	slug: string;
};

export const getStaticProps: GetStaticProps<Props, Params> = async ({ params }) => {
	if (!params) {
		throw new Error('No params');
	}
	const data = await request<SeriesPostsByPublicationQuery, SeriesPostsByPublicationQueryVariables>(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		SeriesPostsByPublicationDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			first: 20,
			seriesSlug: params.slug,
		},
	);

	const publication = data.publication;
	const series = publication?.series;
	if (!publication || !series) {
		return {
			notFound: true,
		};
	}
	const posts = publication.series ? publication.series.posts.edges.map((edge) => edge.node) : [];

	return {
		props: {
			series,
			posts,
			publication,
		},
		revalidate: 1,
	};
};

export const getStaticPaths: GetStaticPaths = () => {
	return {
		paths: [],
		fallback: 'blocking',
	};
};
