import { NextApiRequest, NextApiResponse } from 'next';
import { gql } from 'graphql-request';
import { request } from 'graphql-request';

// Tip tanımlamaları
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

type PostData = {
  post: Post;
};

type AllPostsData = {
  posts: Post[];
};

const PostByIdDocument = gql`
  query GetPost($id: ID!) {
    post(id: $id) {
      id
      publishedAt
    }
  }
`;

const AllPostsDocument = gql`
  query GetAllPosts {
    posts {
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
`;

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { postId } = req.query;

  if (!postId || typeof postId !== 'string') {
    return res.status(400).json({ error: 'Post ID is required and must be a string' });
  }

  try {
    const endpoint = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

    if (!endpoint) {
      throw new Error('Required environment variables are not set');
    }

    // Mevcut postu al
    const currentPostData = await request<PostData>(endpoint, PostByIdDocument, { id: postId });
    const currentPublishedAt = currentPostData.post.publishedAt;

    // Tüm postları al
    const allPostsData = await request<AllPostsData>(endpoint, AllPostsDocument);

    // Tüm postları yayınlanma tarihine göre sırala
    const sortedPosts = allPostsData.posts.sort((a, b) => {
      return new Date(a.publishedAt).getTime() - new Date(b.publishedAt).getTime();
    });

    // Mevcut postun indexini bul
    const currentPostIndex = sortedPosts.findIndex(post => post.id === postId);

    // Eğer post bulunamazsa hata ver
    if (currentPostIndex === -1) {
      return res.status(404).json({ error: 'Post not found' });
    }

    // Önceki 10 ve sonraki 10 postu seç
    const relatedPosts = [
      ...sortedPosts.slice(Math.max(0, currentPostIndex - 10), currentPostIndex), // Önceki 10
      ...sortedPosts.slice(currentPostIndex + 1, currentPostIndex + 11) // Sonraki 10
    ];

    res.status(200).json(relatedPosts);
  } catch (error) {
    console.error('Error fetching related posts:', error);
    res.status(500).json({ error: 'Failed to fetch related posts' });
  }
}
