import React, { useMemo } from 'react';
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

type RelatedPostsProps = {
  currentPost: PostFragment;
  allPosts: PostFragment[];
};

const RelatedPosts: React.FC<RelatedPostsProps> = ({ currentPost, allPosts }) => {
  const relatedPosts = useMemo(() => {
    const isCurrentPostCat = isCatPost(currentPost);
    const isCurrentPostDog = isDogPost(currentPost);

    const sameCategory = allPosts.filter(post => 
      post.id !== currentPost.id && 
      ((isCurrentPostCat && isCatPost(post)) || (isCurrentPostDog && isDogPost(post)))
    );

    const scoredPosts = sameCategory.map(post => ({
      ...post,
      score: calculateSimilarityScore(currentPost, post)
    }));

    return scoredPosts
      .sort((a, b) => b.score - a.score)
      .slice(0, 3);
  }, [currentPost, allPosts]);

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

// Yardımcı fonksiyonlar
function isCatPost(post: PostFragment): boolean {
  const catKeywords = ['kedi', 'kedicik', 'miyav', 'kedi maması', 'kedi bakımı'];
  return checkKeywords(post, catKeywords);
}

function isDogPost(post: PostFragment): boolean {
  const dogKeywords = ['köpek', 'köpecik', 'hav hav', 'köpek maması', 'köpek bakımı'];
  return checkKeywords(post, dogKeywords);
}

function checkKeywords(post: PostFragment, keywords: string[]): boolean {
  return (post.tags ?? []).some(tag => keywords.some(keyword => tag.name.toLowerCase().includes(keyword))) ||
         keywords.some(keyword => 
           post.title.toLowerCase().includes(keyword) || 
           (post.content?.toLowerCase().includes(keyword) ?? false)
         );
}

function calculateSimilarityScore(post1: PostFragment, post2: PostFragment): number {
  let score = 0;

  // Etiket benzerliği
  const commonTags = (post1.tags ?? []).filter(tag1 => 
    (post2.tags ?? []).some(tag2 => tag2.name.toLowerCase() === tag1.name.toLowerCase())
  );
  score += commonTags.length * 2;

  // İçerik benzerliği (basit kelime eşleştirme)
  if (post1.content && post2.content) {
    const words1 = post1.content.toLowerCase().split(/\s+/);
    const words2 = post2.content.toLowerCase().split(/\s+/);
    const commonWords = words1.filter(word => words2.includes(word));
    score += commonWords.length / Math.max(words1.length, words2.length);
  }

  return score;
}

export default RelatedPosts;