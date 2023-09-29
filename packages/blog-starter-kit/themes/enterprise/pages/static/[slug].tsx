import request from "graphql-request";
import Head from "next/head";
import Container from "@starter-kit/components/container";
import Layout from "@starter-kit/components/layout";
import PostBody from "@starter-kit/components/post-body";
import type PublicationType from "@starter-kit/interfaces/publication";
import type PageType from "@starter-kit/interfaces/page";
import Header from "@starter-kit/components/header";
import Footer from "@starter-kit/components/footer";
import { AppProvider } from "@starter-kit/components/contexts/appContext";
import { PageByPublicationDocument, PageByPublicationQuery, PageByPublicationQueryVariables } from "../../generated/graphql";

type Props = {
  page: PageType;
  publication: PublicationType;
};

export default function Page({ publication, page }: Props) {
  const highlightJsMonokaiTheme =
    ".hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}";

  const contentMarkdown = page.content.markdown;

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Header />
        <Container className="pt-10">
          <article className="flex flex-col items-start gap-10 pb-10">
            <Head>
              <title>{page.title}</title>
              <link rel="canonical" href={`${publication.url}/${page.slug}`} />
              <style
                dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}
              ></style>
            </Head>
            <PostBody contentMarkdown={contentMarkdown} />
          </article>
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
    PageByPublicationQuery,
    PageByPublicationQueryVariables
  >(
    process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT,
    PageByPublicationDocument,
    {
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      slug: params.slug,
    }
  );

  // Extract the post data from the GraphQL response
  const publication = data.publication;
  const page = publication.staticPage;

  return {
    props: {
      publication,
      page
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
