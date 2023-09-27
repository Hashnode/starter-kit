import request from "graphql-request";
import Head from "next/head";
import Container from "@starter-kit/components/container";
import Layout from "@starter-kit/components/layout";
import type PublicationType from "@starter-kit/interfaces/publication";
import type PostType from "@starter-kit/interfaces/post";
import Header from "@starter-kit/components/header";
import Footer from "@starter-kit/components/footer";
import { AppProvider } from "@starter-kit/components/contexts/appContext";
import { TagPostsByPublicationDocument, TagPostsByPublicationQuery, TagPostsByPublicationQueryVariables } from "../../generated/graphql";
import MorePosts from "@starter-kit/components/more-posts";

type Props = {
  posts: PostType[];
  publication: PublicationType;
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
        <Container className="pt-10">
          <div>
            <h1>Tag: #{tag}</h1>
            <br />
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
  const data = await request<
    TagPostsByPublicationQuery,
    TagPostsByPublicationQueryVariables
  >(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    TagPostsByPublicationDocument,
    {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      first: 20,
      tagSlug: params.slug,
    }
  );

  // Extract the posts data from the GraphQL response
  const publication = data.publication;
  const posts = publication.posts.edges.map((edge) => edge.node);

  return {
    props: {
      posts,
      publication,
      tag: params.slug
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
