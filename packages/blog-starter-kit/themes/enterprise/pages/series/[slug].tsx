import request from "graphql-request";
import Head from "next/head";
import Container from "@starter-kit/components/container";
import Layout from "@starter-kit/components/layout";
import type PublicationType from "@starter-kit/interfaces/publication";
import type PostType from "@starter-kit/interfaces/post";
import Header from "@starter-kit/components/header";
import Footer from "@starter-kit/components/footer";
import { AppProvider } from "@starter-kit/components/contexts/appContext";
import { SeriesPostsByPublicationDocument, SeriesPostsByPublicationQuery, SeriesPostsByPublicationQueryVariables } from "../../generated/graphql";
import MorePosts from "@starter-kit/components/more-posts";
import { resizeImage } from "@starter-kit/utils/image";

type Props = {
  posts: PostType[];
  publication: PublicationType;
};

export default function Post({ publication, posts }: Props) {
  const title = `${publication.series.name} - ${publication.title}`;
  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>{title}</title>
        </Head>
        <Header />
        <Container className="pt-10">
          <div>
            <h1>Series: {publication.series.name}</h1>
            <img src={resizeImage(publication.series.coverImage, { w: 200, h: 200, c: 'thumb' })} />
            <br />
          </div>
          <MorePosts context="series" posts={posts} />
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
  const data = await request<
    SeriesPostsByPublicationQuery,
    SeriesPostsByPublicationQueryVariables
  >(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    SeriesPostsByPublicationDocument,
    {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      first: 20,
      seriesSlug: params.slug,
    }
  );

  // Extract the posts data from the GraphQL response
  const publication = data.publication;
  const posts = publication.series.posts.edges.map((edge) => edge.node);

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
    fallback: "blocking",
  };
}
