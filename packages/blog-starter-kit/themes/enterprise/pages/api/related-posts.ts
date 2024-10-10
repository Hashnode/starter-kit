import { NextApiRequest, NextApiResponse } from 'next';
import { gql } from 'graphql-request';
import { request } from 'graphql-request';

// Tip tanımlamaları
type Tag = {
  slug: string;
};

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

type CurrentPostData = {
  post: {
    tags: Tag[];
  };
};

type RelatedPostsData = {
  publication: {
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
};

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
  }
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  if (!postId || typeof postId !== 'string') {
    return res.status(400).json({ error: 'Post ID is required and must be a string' });
  }

  try {
    const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
    const host = process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST;

    if (!endpoint || !host) {
      throw new Error('Required environment variables are not set');
    }

    // Mevcut postu al
    const currentPostData = await request<CurrentPostData>(endpoint, gql`
      query GetPost($id: ID!) {
        post(id: $id) {
          tags {
            slug
          }
        }
      }
    `, { id: postId });

    const tagSlugs = currentPostData.post.tags.map(tag => tag.slug);

    // İlgili postları al - tüm sayfaları çek
    let relatedPosts: Post[] = [];
    let hasNextPage = true;
    let endCursor: string | null = null;

    while (hasNextPage) {
      const relatedPostsData: RelatedPostsData = await request<RelatedPostsData>(endpoint, PostsByTagDocument, {
        host,
        tagSlugs,
        first: 20, // Her seferinde 20 post çekiyoruz
        after: endCursor, // Sayfalar arasında gezinmek için
      });

      const fetchedPosts = relatedPostsData.publication?.posts.edges
        .map((edge: { node: Post }) => edge.node)
        .filter((post: Post) => post.id !== postId); // Aynı postu çıkar

      relatedPosts = [...relatedPosts, ...fetchedPosts];

      hasNextPage = relatedPostsData.publication.posts.pageInfo.hasNextPage;
      endCursor = relatedPostsData.publication.posts.pageInfo.endCursor; // Sonraki sayfa için cursor
    }

    // İlgili postları karıştır ve en fazla 3 tanesini al
    const shuffledPosts = relatedPosts.sort(() => 0.5 - Math.random()).slice(0, 3);

    res.status(200).json(shuffledPosts);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    res.status(500).json({ error: 'Failed to fetch related posts' });
  }
}
