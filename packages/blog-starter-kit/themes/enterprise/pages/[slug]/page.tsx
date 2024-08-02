import request from 'graphql-request';
import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { Container } from '../../components/container';
import { AppProvider } from '../../components/contexts/appContext';
import { Footer } from '../../components/footer';
import { Layout } from '../../components/layout';
import { Navbar } from "../../components/navbar";
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

export default function CategoryPage({ series, publication, posts }: Props) {
    const title = `${series.name} - ${publication.title}`;
    return (
        <AppProvider publication={publication} series={series}>
            <Layout>
                <Head>
                    <title>{title}</title>
                    <meta name="robots" content="noindex" />
                </Head>
                <Navbar />
                <Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
                    <h1 className="text-3xl font-bold mb-6">{series.name}</h1>
                    {posts.length > 0 ? (
                        <MorePosts context="series" posts={posts} />
                    ) : (
                        <div>Bu kategoride henüz içerik bulunmuyor...</div>
                    )}
                </Container>
                <Footer />
            </Layout>
        </AppProvider>
    );
}

export const getStaticProps: GetStaticProps<Props, { slug: string }> = async ({ params }) => {
    if (!params) {
        throw new Error('No params');
    }
    const data = await request<SeriesPostsByPublicationQuery, SeriesPostsByPublicationQueryVariables>(
        process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT!,
        SeriesPostsByPublicationDocument,
        {
            host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST!,
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
    const posts = series.posts.edges.map((edge) => edge.node);
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