import request from "graphql-request";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Container } from "@starter-kit/components/container";
import HeroPost from "@starter-kit/components/hero-post";
import SecondaryPost from "@starter-kit/components/secondary-post";
import Header from "@starter-kit/components/header";
import Layout from "@starter-kit/components/layout";
import MorePosts from "@starter-kit/components/more-posts";
import type PublicationType from "@starter-kit/components/interfaces/publication";
import {
  PostFragment,
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
} from "../generated/graphql";
import Navbar from "@starter-kit/components/navbar";
import Footer from "@starter-kit/components/footer";
import { ArticleSVG } from "@starter-kit/components/icons";
import { AppProvider } from '@starter-kit/components/contexts/appContext';

// Dynamic Imports
const SubscribeForm = dynamic(
  () => import("@starter-kit/components/subscribe-form")
);

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  publication: PublicationType;
  allPosts: PostFragment[];
};

export default function Index({ publication, allPosts }: Props) {
  const firstPost = allPosts[0];
  const secondaryPosts = allPosts.slice(1, 4).map((post) => {
    return (
      <SecondaryPost
        key={post.id}
        title={post.title}
        coverImage={
          post.coverImage?.url ||
          "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format"
        }
        date={post.publishedAt}
        author={{
          name: post.author.name,
          profilePicture: post.author.profilePicture,
        }}
        slug={post.slug}
        excerpt={post.brief}
      />
    );
  });
  const morePosts = allPosts.slice(4);

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>{publication.title || `Hashnode Blog Starter Kit`}</title>
        </Head>
        <Header />
        <Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
          <Navbar />

          {/* No article component */}
          {allPosts.length === 0 && <div className="grid grid-cols-1 py-20 lg:grid-cols-3">
            <div className="flex flex-col items-center col-span-1 gap-5 text-center lg:col-start-2 text-slate-700 dark:text-neutral-400">
              <div className="w-20">
                <ArticleSVG clasName="stroke-current" />
              </div>
              <p className="text-xl font-semibold ">
                Hang tight! We're drafting the first article.
              </p>
            </div>
          </div>}

          <div className="grid items-start gap-6 xl:grid-cols-2">
            <div className="col-span-1">
              {firstPost && (
                <HeroPost
                  title={firstPost.title}
                  coverImage={
                    firstPost.coverImage?.url ||
                    "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format"
                  }
                  date={firstPost.publishedAt}
                  author={{
                    name: firstPost.author.name,
                    profilePicture: firstPost.author.profilePicture,
                  }}
                  slug={firstPost.slug}
                  excerpt={firstPost.brief}
                />
              )}
            </div>
            <div className="flex flex-col col-span-1 gap-6">
              {secondaryPosts}
            </div>
          </div>

          {allPosts.length > 0 && <div className="grid grid-cols-4 px-5 py-5 rounded-lg md:py-10 bg-primary-50 dark:bg-neutral-900">
            <div className="md:col-start-2 col-span-full md:col-span-2">
              <h3 className="mb-5 text-lg font-semibold text-center text-primary-600 dark:text-primary-500">
                Subscribe to our newsletter for updates and changelog.
              </h3>
              <SubscribeForm />
            </div>
          </div>}

          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
        </Container>
        <Footer />
      </Layout>
    </AppProvider>
  );
}

export const getStaticProps = async () => {
  const data = await request<
    PostsByPublicationQuery,
    PostsByPublicationQueryVariables
  >(GQL_ENDPOINT, PostsByPublicationDocument, {
    first: 10,
    host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
  });

  const publication = data.publication;
  const allPosts = publication.posts.edges.map((edge) => edge.node);

  return {
    props: { publication, allPosts },
    revalidate: 1,
  };
};
