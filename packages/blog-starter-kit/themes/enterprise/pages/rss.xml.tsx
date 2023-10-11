import request from "graphql-request";
import { RssFeedDocument, RssFeedQuery, RssFeedQueryVariables } from "../generated/graphql";
import constructRSSFeedFromPosts from "@starter-kit/utils/feed";

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const RSS = () => null;

export async function getServerSideProps(ctx: { req: any; res: any; query: any }) {
  const { res } = ctx;
  
  const data = await request<
  RssFeedQuery,
  RssFeedQueryVariables
  >(GQL_ENDPOINT, RssFeedDocument, {
    first: 20,
    host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
  });

  const publication = data.publication;
  if (!publication) {
    return {
      notFound: true,
    };
  }
  const allPosts = publication.posts.edges.map((edge) => edge.node);

  const xml = constructRSSFeedFromPosts(publication, allPosts, 0); // Extend it to support 20+ posts eventually by passing page as 1, 2, 3, etc.

  res.setHeader('Cache-Control', 's-maxage=1, stale-while-revalidate');
  res.setHeader('content-type', 'text/xml');
  res.write(xml);
  res.end();

  return { props: {} };
}

export default RSS;