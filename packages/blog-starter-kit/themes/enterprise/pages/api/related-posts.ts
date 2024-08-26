import { NextApiRequest, NextApiResponse } from 'next';
import { gql } from 'graphql-request';
import { request } from 'graphql-request';

const PostsByTagDocument = gql`
  query PostsByTag($host: String!, $tagSlugs: [String!], $first: Int!, $after: String) {
    publication(host: $host) {
      posts(first: $first, after: $after, filter: { tagSlugs: $tagSlugs }) {
        edges {
          node {
            id
            title
            brief
            slug
            coverImage {
              url
            }
            tags {
              id
              name
              slug
            }
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

type PostNode = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  } | null;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }> | null;
};

type PostsQueryResult = {
  publication: {
    posts: {
      edges: Array<{
        node: PostNode;
      }>;
      pageInfo: {
        hasNextPage: boolean;
        endCursor: string | null;
      };
    };
  };
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId, tagSlugs } = req.query;
  console.log('API Route called with:', { postId, tagSlugs }); // Debug log

  if (!postId || !tagSlugs) {
    return res.status(400).json({ error: 'Missing required parameters' });
  }

  try {
    const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
    const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;
    console.log('Using endpoint and host:', { endpoint, host }); // Debug log

    let allRelatedPosts: PostNode[] = [];
    let hasNextPage = true;
    let after: string | null = null;
    const MAX_POSTS = 1000;

    while (hasNextPage && allRelatedPosts.length < MAX_POSTS) {
      const data: PostsQueryResult = await request(endpoint, PostsByTagDocument, {
        host,
        tagSlugs: Array.isArray(tagSlugs) ? tagSlugs : [tagSlugs],
        first: 100,
        after
      });

      const newPosts = data.publication.posts.edges
        .map((edge: { node: PostNode }) => edge.node)
        .filter((post: PostNode) => post.id !== postId);

      allRelatedPosts = [...allRelatedPosts, ...newPosts];
      hasNextPage = data.publication.posts.pageInfo.hasNextPage;
      after = data.publication.posts.pageInfo.endCursor;

      if (newPosts.length === 0) {
        break;
      }
    }
    console.log(`Found ${allRelatedPosts.length} related posts`); // Debug log

    const shuffledPosts = allRelatedPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

    res.status(200).json(shuffledPosts);
  } catch (error) {
    console.error('Error in API route:', error); // Detailed error log
    res.status(500).json({ error: 'Failed to fetch related posts' });
  }
}