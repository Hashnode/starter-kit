import request from "graphql-request";
import Head from "next/head";
import { Container } from "@starter-kit/components/container";
import HeroPost from "@starter-kit/components/hero-post";
import SecondaryPost from "@starter-kit/components/secondary-post";
import Intro from "@starter-kit/components/intro";
import Layout from "@starter-kit/components/layout";
import MoreStories from "@starter-kit/components/more-stories";
import {
  Publication,
  PostFragment,
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
} from "../generated/graphql";
// import { CMS_NAME } from "../lib/constants";
import Navbar from "@starter-kit/components/navbar";

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  publication: Publication;
  allPosts: PostFragment[];
};

export default function Index({ publication, allPosts }: Props) {
  const heroPost = allPosts[0];
  const secondaryPost = allPosts[1];
  const thirdPost = allPosts[2];
  const fourthPost = allPosts[3];
  const morePosts = allPosts.slice(4);
  return (
    <>
      <Layout>
        <Head>
          <title>{publication.title || `Hashnode Blog Starter Kit`}</title>
        </Head>
        <Container className="flex flex-col items-stretch gap-10 px-5 pt-10 md:pt-20 ">
          <Intro />
          <Navbar />

          <div className="grid items-start gap-6 xl:grid-cols-2">
            <div className="col-span-1">
              {heroPost && (
                <HeroPost
                  title={heroPost.title}
                  coverImage={heroPost.coverImage?.url}
                  date={heroPost.publishedAt}
                  author={{
                    name: heroPost.author.name,
                    profilePicture: heroPost.author.profilePicture,
                  }}
                  slug={heroPost.slug}
                  excerpt={heroPost.brief}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-6">
              {secondaryPost && (
                <SecondaryPost
                  title={secondaryPost.title}
                  coverImage={secondaryPost.coverImage?.url}
                  date={secondaryPost.publishedAt}
                  author={{
                    name: secondaryPost.author.name,
                    profilePicture: secondaryPost.author.profilePicture,
                  }}
                  slug={secondaryPost.slug}
                  excerpt={secondaryPost.brief}
                />
              )}
              {thirdPost && (
                <SecondaryPost
                  title={thirdPost.title}
                  coverImage={thirdPost.coverImage?.url}
                  date={thirdPost.publishedAt}
                  author={{
                    name: thirdPost.author.name,
                    profilePicture: thirdPost.author.profilePicture,
                  }}
                  slug={thirdPost.slug}
                  excerpt={thirdPost.brief}
                />
              )}
              {fourthPost && (
                <SecondaryPost
                  title={fourthPost.title}
                  coverImage={fourthPost.coverImage?.url}
                  date={fourthPost.publishedAt}
                  author={{
                    name: fourthPost.author.name,
                    profilePicture: fourthPost.author.profilePicture,
                  }}
                  slug={fourthPost.slug}
                  excerpt={fourthPost.brief}
                />
              )}
            </div>
          </div>

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

  const publication = data.publication;
  const allPosts = publication.posts.edges.map((edge) => edge.node);

  return {
    props: { publication, allPosts },
    revalidate: 1,
  };
};
