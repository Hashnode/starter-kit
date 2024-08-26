import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { resizeImage } from '@starter-kit/utils/image';
import { DEFAULT_COVER } from '../utils/const';

type PostFragment = {
  id: string;
  title: string;
  brief: string;
  slug: string;
  coverImage?: { url: string } | null;
  tags?: Array<{ id: string; name: string; slug: string }> | null;
};

type RelatedPostsProps = {
  currentPost: PostFragment;
};

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost }) => {
  const [relatedPosts, setRelatedPosts] = useState<PostFragment[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      setIsLoading(true);
      setError(null);
      try {
        const tagSlugs = currentPost.tags?.map(tag => tag.slug) || [];
        const response = await fetch(`/api/related-posts?postId=${currentPost.id}&tagSlugs=${tagSlugs.join(',')}`);
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        if (data.error) {
          throw new Error(data.error);
        }
        setRelatedPosts(data);
      } catch (error) {
        console.error('Error fetching related posts:', error);
        setError('Failed to load related posts. Please try again later.');
      } finally {
        setIsLoading(false);
      }
    };

    fetchRelatedPosts();
  }, [currentPost]);

  if (isLoading) {
    return <div>İlgili içerikler yükleniyor...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (relatedPosts.length === 0) {
    return null;
  }

  return (
    <section className="py-10 dark:bg-neutral-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-semibold text-center mb-10 text-slate-800 dark:text-neutral-50">
          İlgili Blog Yazıları
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedPosts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </div>
    </section>
  );
};

const PostCard: React.FC<{ post: PostFragment }> = ({ post }) => (
  <div className="card">
    <div className="card-inner rounded-lg overflow-hidden shadow-md">
      <div className="box relative pb-[56.25%]">
        <Link href={`/${post.slug}`} className="iconBox absolute inset-2 bg-slate-800 dark:bg-neutral-900 rounded-full flex items-center justify-center transition-transform hover:scale-110">
          <div className="imgBox absolute inset-0">
            <img
              src={resizeImage(post.coverImage?.url, { w: 800, h: 450, c: 'thumb' }, DEFAULT_COVER)}
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
      </div>
    </div>
    <div className="content mt-4">
      <h3 className="text-xl font-semibold mb-2 text-slate-800 dark:text-neutral-50">
        <Link href={`/${post.slug}`} className="hover:text-orange-500 transition-colors">
          {post.title}
        </Link>
      </h3>
      <p className="text-slate-600 dark:text-neutral-400 mb-4">
        {post.brief.length > 100 ? post.brief.substring(0, 100) + '…' : post.brief}
      </p>
      {post.tags && post.tags.length > 0 && (
        <ul className="flex flex-wrap gap-2">
          {post.tags.slice(0, 3).map((tag) => (
            <li
              key={tag.id}
              className="text-xs font-semibold px-2 py-1 rounded-full bg-orange-100 text-orange-800 dark:bg-orange-900 dark:text-orange-100"
            >
              #{tag.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  </div>
);

export default RelatedPosts;