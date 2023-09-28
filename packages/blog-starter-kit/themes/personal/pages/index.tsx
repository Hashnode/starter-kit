import request from "graphql-request";
import dynamic from "next/dynamic";
import Head from "next/head";
import { Container } from "@starter-kit/components/container";
import Layout from "@starter-kit/components/layout";
import MinimalPosts from "@starter-kit/components/minimal-posts";
import type PublicationType from "@starter-kit/interfaces/publication";
import {
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
} from "../generated/graphql";
import PostType from "@starter-kit/interfaces/post";
import { NewsletterPlusSVG } from "@starter-kit/components/icons";
import { AppProvider } from "@starter-kit/components/contexts/appContext";
import Link from "next/link";
import Button from "@starter-kit/components/button";

// Dynamic Imports
const SubscribeForm = dynamic(
  () => import("@starter-kit/components/subscribe-form")
);

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  publication: PublicationType;
  allPosts: PostType[];
};

export default function Index({ publication, allPosts }: Props) {
  const listPosts = allPosts;
  const schema = {
    "@context": "https://schema.org/",
    "@type": "Blog",
    "@id": "https://dataliberate.com/blog/",
    mainEntityOfPage: "https://dataliberate.com/blog",
    name: "Data Liberate Blog",
    description:
      "Thoughts about Linked Data, Schema.org, Structured Data, Cultural Heritage Meta Data, and associated technologies",
    publisher: {
      "@type": "Organization",
      "@id": "https://dataliberate.com",
      name: "Data Liberate",
      logo: {
        "@type": "ImageObject",
        "@id":
          "https://dataliberate.com/wp-content/uploads/2011/12/Data_Liberate_Logo-200.png",
        url: "https://dataliberate.com/wp-content/uploads/2011/12/Data_Liberate_Logo-200.png",
      },
    },
  };

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>{publication.title || `Hashnode Blog Starter Kit`}</title>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
          />
        </Head>
        <Container className="flex flex-col items-stretch max-w-2xl gap-10 px-5 py-10 mx-auto">
          <header className="grid items-center grid-cols-2 gap-5 ">
            <div className="col-span-full md:col-span-1">
              <h1>
                <Link
                  className="flex flex-row items-center gap-2 text-lg font-bold tracking-tight text-black dark:text-white"
                  href="/"
                >
                  <img
                    className="block w-6 h-6 rounded-full fill-current"
                    src="https://pbs.twimg.com/profile_images/1655035919823679498/xkgrwi5W_400x400.jpg"
                  />
                  {publication.title}
                </Link>
              </h1>
            </div>
            <div className="flex flex-row items-center justify-between gap-4 md:justify-end col-span-full md:col-span-1">
              <nav>
                <ul className="flex flex-row items-center gap-4 text-xs font-semibold tracking-tight uppercase list-none text-neutral-600 dark:text-neutral-300">
                  <li>
                    <a href="#" className="hover:underline">
                      About
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Collab
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      More
                    </a>
                  </li>
                </ul>
              </nav>
              <Button
                type="outline"
                className="!p-2"
                icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
              />
            </div>
          </header>
          {listPosts.length > 0 && (
            <MinimalPosts context="home" posts={listPosts} />
          )}
          <footer className="pt-10 text-sm border-t text-neutral-500 dark:text-neutral-400 dark:border-neutral-800">
            &copy; 2023 {publication.title}
          </footer>
        </Container>
        {/* <Header /> */}
        {/* <Container className="flex flex-col items-stretch gap-10 px-5 pb-10">
          <Navbar />

          {allPosts.length === 0 && (
            <div className="grid grid-cols-1 py-20 lg:grid-cols-3">
              <div className="flex flex-col items-center col-span-1 gap-5 text-center lg:col-start-2 text-slate-700 dark:text-neutral-400">
                <div className="w-20">
                  <ArticleSVG clasName="stroke-current" />
                </div>
                <p className="text-xl font-semibold ">
                  Hang tight! We're drafting the first article.
                </p>
              </div>
            </div>
          )}

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

          {allPosts.length > 0 && (
            <div className="grid grid-cols-4 px-5 py-5 rounded-lg md:py-10 bg-primary-50 dark:bg-neutral-900">
              <div className="md:col-start-2 col-span-full md:col-span-2">
                <h3 className="mb-5 text-lg font-semibold text-center text-primary-600 dark:text-primary-500">
                  Subscribe to our newsletter for updates and changelog.
                </h3>
                <SubscribeForm />
              </div>
            </div>
          )}

          {morePosts.length > 0 && (
            <MorePosts context="home" posts={morePosts} />
          )}
        </Container>
        <Footer /> */}
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
