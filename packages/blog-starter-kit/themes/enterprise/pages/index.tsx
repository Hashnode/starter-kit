import request from "graphql-request";
import Head from "next/head";
import { Container } from "@starter-kit/components/container";
import HeroPost from "@starter-kit/components/hero-post";
import Intro from "@starter-kit/components/intro";
import Layout from "@starter-kit/components/layout";
import MoreStories from "@starter-kit/components/more-stories";
import {
  PostFragment,
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
} from "../generated/graphql";
// import { CMS_NAME } from "../lib/constants";
import Navbar from "@starter-kit/components/navbar";

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  allPosts: PostFragment[];
};

export default function Index({ allPosts }: Props) {
  const heroPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>{`Hashnode Blog Starter Kit`}</title>
        </Head>
        <Container className="flex flex-col items-stretch gap-10 px-5 pt-10 md:pt-20 ">
          <Intro />
          <Navbar />
          {heroPost && (
            <HeroPost
              title={heroPost.title}
              coverImage={heroPost.coverImage.url}
              date={heroPost.publishedAt}
              author={{
                name: heroPost.author.name,
                profilePicture: heroPost.author.profilePicture,
              }}
              slug={heroPost.slug}
              excerpt={heroPost.brief}
            />
          )}
          {morePosts.length > 0 && <MoreStories posts={morePosts} />}
        </Container>
      </Layout>
    </>
  );
}

export const getStaticProps = async () => {
  const data = await request<
    PostsByPublicationQuery,
    PostsByPublicationQueryVariables
  >(GQL_ENDPOINT, PostsByPublicationDocument, {
    first: 9,
    host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
  });

  const allPosts = data.publication.posts.edges.map((edge) => edge.node);

  return {
    props: { allPosts },
    revalidate: 60,
  };
};
