import { PostsProvider } from 'components/contexts/postsContext';
import request from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
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

type Props = {
	series: SeriesFragment;
	posts: PostFragment[];
	publication: PublicationFragment;
};

export default function Post({ series, publication, posts }: Props) {
	const title = `${series.name} - ${publication.title}`;

	return (
		<AppProvider publication={publication} series={series}>
			<Layout>
				<Head>
					<title>{title}</title>
				</Head>
				<Header />
				<Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
					<div
						className={`${
							series.coverImage ? 'col-span-full' : 'col-span-3'
						} grid grid-cols-4 pt-5 md:gap-5`}
					>
						<div className="col-span-full flex flex-col gap-1 md:col-span-2 lg:col-span-3">
							<p className="font-bold uppercase text-slate-500 dark:text-neutral-400">Series</p>
							<h1 className="mb-4 text-4xl font-bold text-slate-900 dark:text-neutral-50">
								{series.name}
							</h1>
							<div
								className="hashnode-content-style !text-sm"
								dangerouslySetInnerHTML={{ __html: series.description?.html ?? '' }}
							></div>
						</div>
					</div>
					{posts.length > 0 ? (
						<PostsProvider>
							<MorePosts context="series" posts={posts} />
						</PostsProvider>
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
