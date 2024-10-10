import { NextApiRequest, NextApiResponse } from 'next';
import { gql } from 'graphql-request';
import { request } from 'graphql-request';

type Post = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage: {
    url: string;
  } | null;
  author: {
    name: string;
    profilePicture: string | null;
  };
  publishedAt: string;
};

type RelatedPostsData = {
  posts: {
    edges: Array<{
      node: Post;
    }>;
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string | null;
    };
  };
};

const PostsByPaginationDocument = gql`
  query GetPostsByPagination($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      edges {
        node {
          id
          title
          brief
          slug
          coverImage {
            url
          }
          author {
            name
            profilePicture
          }
          publishedAt
        }
      }
      pageInfo {
        hasNextPage
        endCursor
      }
    }
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { afterCursor } = req.query;

  try {
    const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
    if (!endpoint) {
      throw new Error('Required environment variables are not set');
    }

    const pageSize = 10;

    // Tipi açıkça belirtiyoruz
    const response: RelatedPostsData = await request(endpoint, PostsByPaginationDocument, {
      first: pageSize,
      after: afterCursor || null,
    });

    res.status(200).json(response.posts);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    res.status(500).json({ error: 'Failed to fetch related posts' });
  }
}
