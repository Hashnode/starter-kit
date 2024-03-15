import request from 'graphql-request';
import Head from 'next/head';
import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import { Footer } from '../../components/footer';
import { Header } from '../../components/header';
import { Layout } from '../../components/layout';
import { MorePosts } from '../../components/more-posts';
import {
	Post,
	Publication,
	TagPostsByPublicationDocument,
	TagPostsByPublicationQuery,
	TagPostsByPublicationQueryVariables,
} from '../../generated/graphql';

type Props = {
	posts: Post[];
	publication: Publication;
	tag: string;
};

export default function Post({ publication, posts, tag }: Props) {
	const title = `#${tag} - ${publication.title}`;
	return (
		<AppProvider publication={publication}>
			<Layout>
				<Head>
					<title>{title}</title>
				</Head>
				<Header />
				<Container className="flex flex-col items-stretch px-5 pb-1">
					<div className="flex flex-col">
						<p className="font-['Outfit'] font-bold uppercase text-slate-500 dark:text-neutral-400 border-x border-b border-neutral-200 py-4 pl-4">Tag</p>
						<h1 className="font-['Outfit'] text-4xl font-bold text-slate-900 dark:text-neutral-50 border-x border-b border-neutral-200 py-4 pl-4">#{tag}</h1>
					</div>
					<MorePosts context="tag" posts={posts} />
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
	const data = await request<TagPostsByPublicationQuery, TagPostsByPublicationQueryVariables>(
		process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
		TagPostsByPublicationDocument,
		{
			host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
			first: 20,
			tagSlug: params.slug,
		},
	);

	const publication = data.publication;
	if (!publication) {
		return {
			notFound: true,
		};
	}
	const posts = publication.posts.edges.map((edge) => edge.node);

	return {
		props: {
			posts,
			publication,
			tag: params.slug,
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
