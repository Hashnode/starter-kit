import { resizeImage } from '@starter-kit/utils/image';
import request from 'graphql-request';
import Error from 'next/error';
import Head from 'next/head';
import Container from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import CoverImage from '../../components/cover-image';
import Footer from '../../components/footer';
import Header from '../../components/header';
import Layout from '../../components/layout';
import MorePosts from '../../components/more-posts';
import {
	Post,
	Publication,
	SeriesPostsByPublicationDocument,
	SeriesPostsByPublicationQuery,
	SeriesPostsByPublicationQueryVariables,
} from '../../generated/graphql';

type Props = {
	posts: Post[];
	publication: Publication;
};

const DEFAULT_COVER =
	'https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format';

export default function Post({ publication, posts }: Props) {
	if (!publication.series) {
		return <Error statusCode={404} />;
	}
	const title = `${publication.series.name} - ${publication.title}`;
	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{title}</title>
				</Head>
				<Header />
				<Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
					<div
						className={`${
							publication.series.coverImage ? 'col-span-full' : 'col-span-3'
						} grid grid-cols-4 pt-5 md:gap-5`}
					>
						<div className="col-span-full flex flex-col gap-1 md:col-span-2 lg:col-span-3">
							<p className="font-bold uppercase text-slate-500 dark:text-neutral-400">Series</p>
							<h1 className="text-4xl font-bold text-slate-900 dark:text-neutral-50">
								{publication.series.name}
							</h1>
							<div
								className="hashnode-content-style"
								dangerouslySetInnerHTML={{ __html: publication.series.description.html }}
							></div>
						</div>
						<div className="relative col-span-full md:col-span-2 lg:col-span-1">
							<CoverImage
								title={publication.series.name}
								src={
									resizeImage(publication.series.coverImage, {
										w: 400,
										h: 210,
										c: 'thumb',
									}) || DEFAULT_COVER
								}
							/>
						</div>
					</div>
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
	params: {
		slug: string;
	};
};

export async function getStaticProps({ params }: Params) {
	const data = await request<SeriesPostsByPublicationQuery, SeriesPostsByPublicationQueryVariables>(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		SeriesPostsByPublicationDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			first: 20,
			seriesSlug: params.slug,
		},
	);

	// Extract the posts data from the GraphQL response
	const publication = data.publication;
	const posts = publication.series ? publication.series.posts.edges.map((edge) => edge.node) : [];

	return {
		props: {
			posts,
			publication,
		},
		revalidate: 1,
	};
}

export async function getStaticPaths() {
	return {
		paths: [],
		fallback: 'blocking',
	};
}
