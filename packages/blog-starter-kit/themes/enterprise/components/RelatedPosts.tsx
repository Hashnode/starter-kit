import React, { useState, useEffect, useRef } from 'react';
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
  content: string;
};

const RelatedPosts: React.FC = () => {
  const [relatedPosts, setRelatedPosts] = useState<PostFragment[]>([]);
  const [loading, setLoading] = useState(true);
  const [afterCursor, setAfterCursor] = useState<string | null>(null);
  const observerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const fetchRelatedPosts = async () => {
      setLoading(true);
      try {
        const response = await fetch(`/api/related-posts?afterCursor=${afterCursor}`);
        if (!response.ok) {
          throw new Error('Failed to fetch related posts');
        }
        const data = await response.json();
        setRelatedPosts((prevPosts) => [...prevPosts, ...data.edges.map((edge: any) => edge.node)]);
        setAfterCursor(data.pageInfo.endCursor); // Yeni endCursor
      } catch (error) {
        console.error('Error fetching related posts:', error);
      } finally {
        setLoading(false);
      }
    };

    // Observer callback when user scrolls near the bottom
    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      if (entries[0].isIntersecting && afterCursor !== null) {
        fetchRelatedPosts();
      }
    };

    // Create Intersection Observer
    const observer = new IntersectionObserver(observerCallback, { threshold: 1.0 });
    if (observerRef.current) {
      observer.observe(observerRef.current);
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current);
      }
    };
  }, [afterCursor]);

  if (loading && relatedPosts.length === 0) {
    return <div>Loading...</div>;
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
        <div ref={observerRef} style={{ height: '50px' }} />
        {loading && <div>Loading more posts...</div>}
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
              loading="lazy"
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
    </div>
  </div>
);

export default RelatedPosts;
