import request from "graphql-request";
import ErrorPage from "next/error";
import Head from "next/head";
import Container from "@starter-kit/components/container";
import Layout from "@starter-kit/components/layout";
import PostBody from "@starter-kit/components/post-body";
import PostHeader from "@starter-kit/components/post-header";
import type PublicationType from "@starter-kit/interfaces/publication";
import type PostType from "@starter-kit/interfaces/post";
import {
  PublicationByHostDocument,
  PublicationByHostQuery,
  PublicationByHostQueryVariables,
} from "../../generated/graphql";
import Header from "@starter-kit/components/header";
import Footer from "@starter-kit/components/footer";
import { AppProvider } from "@starter-kit/components/contexts/appContext";

type Props = {
  post: PostType;
  publication: PublicationType;
  preview?: boolean;
};

export default function Post({ publication, post, preview }: Props) {
  if (!post) {
    return <ErrorPage statusCode={404} />;
  }
  const title = `${post.title} | Next.js Blog Example with Hashnode`;
  const highlightJsMonokaiTheme =
    ".hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}";

  const tagsList = post.tags.map((tag) => (
    <li key={tag.id}>
      <a
        href={`/tag/${tag.slug}`}
        className="block px-2 py-1 font-medium border rounded-full dark:border-neutral-800 dark:hover:bg-neutral-800 md:px-4 hover:bg-slate-50"
      >
        #{tag.slug}
      </a>
    </li>
  ));

  return (
    <AppProvider publication={publication}>
      <Layout preview={preview}>
        <Header />
        <Container className="pt-10">
          <article className="flex flex-col items-start gap-10 pb-10">
            <Head>
              <title>{title}</title>
              <link rel="canonical" href={post.url} />
              <meta property="og:image" content={post.ogMetaData.image} />
              <style
                dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}
              ></style>
            </Head>
            <PostHeader
              title={post.title}
              coverImage={post.coverImage?.url}
              date={post.publishedAt}
              author={post.author}
            />
            <PostBody contentMarkdown={post.content.markdown} />
            <div className="w-full px-5 mx-auto md:max-w-screen-md text-slate-600 dark:text-neutral-300">
              <ul className="flex flex-row flex-wrap items-center gap-2">
                {tagsList}
              </ul>
            </div>
          </article>
        </Container>
        <Footer />
      </Layout>
    </AppProvider>
  );
}

type Params = {
  params: {
    id: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const data = await request<
    PublicationByHostQuery,
    PublicationByHostQueryVariables
  >(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    PublicationByHostDocument,
    {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
    }
  );

  // We don't have the ability to query a draft post by ID yet, so we'll just mock it for now
  const post = {
    title: "(WIP) Draft title goes here",
    content: {
        markdown: "(WIP) Draft content goes here",
    },
    author: {
        name: "Draft author",
        username: "draft-author",
        profilePicture: ""
    },
    ogMetaData: {},
    tags: []
  };
  const publication = data.publication;

  return {
    props: {
      post,
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
