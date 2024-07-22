import { addPublicationJsonLd } from "@starter-kit/utils/seo/addPublicationJsonLd";
import { getAutogeneratedPublicationOG } from "@starter-kit/utils/social/og";
import request from "graphql-request";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useState, useRef, useEffect, useMemo, useCallback } from 'react';
import { Navbar } from "../components/navbar";
import { Container } from "../components/container";
import { AppProvider } from "../components/contexts/appContext";
import { Footer } from "../components/footer";
import { HeroPost } from "../components/hero-post";
import { ArticleSVG } from "../components/icons";
import { Layout } from "../components/layout";
import { MorePosts } from "../components/more-posts";
import { SecondaryPost } from "../components/secondary-post";
import { DEFAULT_COVER } from "../utils/const";

import {
  MorePostsByPublicationDocument,
  MorePostsByPublicationQuery,
  MorePostsByPublicationQueryVariables,
  PageInfo,
  PostFragment,
  PostsByPublicationDocument,
  PostsByPublicationQuery,
  PostsByPublicationQueryVariables,
  PublicationFragment,
} from "../generated/graphql";

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  publication: PublicationFragment;
  initialAllPosts: PostFragment[];
  initialPageInfo: PageInfo;
};

type Category = 'all' | 'cat' | 'dog';

export default function Index({ publication, initialAllPosts, initialPageInfo }: Props) {
  const [allPosts, setAllPosts] = useState<PostFragment[]>(initialAllPosts);
  const [pageInfo, setPageInfo] = useState<Props["initialPageInfo"]>(initialPageInfo);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');
  const [hasMorePosts, setHasMorePosts] = useState(true);

  const observerRef = useRef<IntersectionObserver | null>(null);
  const loadingRef = useRef<HTMLDivElement>(null);

  const loadMore = useCallback(async () => {
    if (isLoading || !pageInfo.hasNextPage) return;

    setIsLoading(true);
    try {
      const data = await request<
        MorePostsByPublicationQuery,
        MorePostsByPublicationQueryVariables
      >(GQL_ENDPOINT, MorePostsByPublicationDocument, {
        first: 7,
        host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
        after: pageInfo.endCursor,
      });
      if (!data.publication) return;

      const newPosts = data.publication.posts.edges.map((edge) => edge.node);
      setAllPosts((prevPosts) => [...prevPosts, ...newPosts]);
      setPageInfo(data.publication.posts.pageInfo);
      setHasMorePosts(data.publication.posts.pageInfo.hasNextPage || false);
    } catch (error) {
      console.error('Error loading more posts:', error);
    } finally {
      setIsLoading(false);
    }
  }, [pageInfo, isLoading]);

  useEffect(() => {
    if (!loadingRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !isLoading && hasMorePosts) {
          loadMore();
        }
      },
      { threshold: 0.1 } 
    );

    observerRef.current.observe(loadingRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loadMore, isLoading, hasMorePosts]);

  const filteredPosts = useMemo(() => {
    if (selectedCategory === 'all') return allPosts;
    return allPosts.filter(post => {
      const lowerCaseTitle = post.title.toLowerCase();
      const lowerCaseBrief = post.brief.toLowerCase();
      const lowerCaseContent = (post as any).content?.html?.toLowerCase() || '';

      if (selectedCategory === 'cat') {
        return lowerCaseTitle.includes('kedi') || lowerCaseBrief.includes('kedi') || lowerCaseContent.includes('kedi');
      } else if (selectedCategory === 'dog') {
        return lowerCaseTitle.includes('köpek') || lowerCaseBrief.includes('köpek') || lowerCaseContent.includes('köpek');
      }
      return false;
    });
  }, [allPosts, selectedCategory]);

  const memoizedContent = useMemo(() => {
    const firstPost = filteredPosts[0];
    const secondaryPosts = filteredPosts.slice(1, 4).map((post) => (
      <SecondaryPost
        key={post.id}
        title={post.title}
        coverImage={post.coverImage?.url || DEFAULT_COVER}
        date={post.publishedAt}
        slug={post.slug}
        excerpt={post.brief}
      />
    ));
    const morePosts = filteredPosts.slice(4);

    return { firstPost, secondaryPosts, morePosts };
  }, [filteredPosts]);

  const handleCategoryChange = (category: Category) => {
    setSelectedCategory(category);
    // Reset scroll position when changing category
    window.scrollTo(0, 0);
  };

  return (
    <AppProvider publication={publication}>
      <Layout>
        <Head>
          <title>
            {publication.displayTitle ||
              publication.title ||
              "Temizmama Blog"}
          </title>
          <meta name="theme-color" content="#efdcc9" />
          <meta name="msapplication-navbutton-color" content="#efdcc9" />
          <meta name="apple-mobile-web-app-status-bar-style" content="#efdcc9" />
          <meta
            name="description"
            content={
              publication.descriptionSEO ||
              publication.title ||
              `${publication.author.name}'s Blog`
            }
          />
          <meta property="twitter:card" content="summary_large_image" />
          <meta
            property="twitter:title"
            content={
              publication.displayTitle ||
              publication.title ||
              "Temizmama Blog"
            }
          />
          <meta
            property="twitter:description"
            content={
              publication.descriptionSEO ||
              publication.title ||
              `${publication.author.name}'s Blog`
            }
          />
          <meta
            property="og:image"
            content={
              publication.ogMetaData.image ||
              getAutogeneratedPublicationOG(publication)
            }
          />
          <meta
            property="twitter:image"
            content={
              publication.ogMetaData.image ||
              getAutogeneratedPublicationOG(publication)
            }
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(addPublicationJsonLd(publication)),
            }}
          />
        </Head>
        <Navbar />

        <Container className="flex flex-col items-stretch gap-10 px-5 pb-10 select-none">
          <div className="text-center">
            <h1 className="text-5xl text-gray-900 font-semibold mt-2 mb-5">
              Temizmama Blog
            </h1>
            <p className="text-md leading-snug text-slate-500 dark:text-neutral-400 text-lg max-w-xl mx-auto">
              Sevimli dostlarımız için en taze mamayı sunan <a href="https://www.temizmama.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:orangeshadow transition duration-300">Temizmama</a> aracılığıyla kedi & köpek bakımı ile ilgili bilinmesi
              gerekenlerin hepsi bu sayfada!
            </p>
          </div>

          <div className="flex justify-center space-x-4 mb-6">
            <button 
              onClick={() => handleCategoryChange('all')}
              className={`px-4 py-2 rounded ${selectedCategory === 'all' ? 'bg-orange-500 text-white' : 'bg-gray-200-pre'}`}
            >
              Tümü
            </button>
            <button 
              onClick={() => handleCategoryChange('cat')}
              className={`px-4 py-2 rounded ${selectedCategory === 'cat' ? 'bg-orange-500 text-white' : 'bg-gray-200-pre'}`}
            >
              Kedi
            </button>
            <button 
              onClick={() => handleCategoryChange('dog')}
              className={`px-4 py-2 rounded ${selectedCategory === 'dog' ? 'bg-orange-500 text-white' : 'bg-gray-200-pre'}`}
            >
              Köpek
            </button>
          </div>

          {filteredPosts.length === 0 ? (
            <div className="grid grid-cols-1 py-20 lg:grid-cols-3">
              <div className="col-span-1 flex flex-col items-center gap-5 text-center text-slate-700 dark:text-neutral-400 lg:col-start-2">
                <div className="w-20">
                  <ArticleSVG clasName="stroke-current" />
                </div>
                <p className="text-xl font-semibold ">
                  Bu kategoride gönderi bulunamadı.
                </p>
              </div>
            </div>
          ) : (
            <>
              <div className="grid items-start gap-6 xl:grid-cols-2">
                <div className="col-span-1">
                  {memoizedContent.firstPost && (
                    <HeroPost
                      title={memoizedContent.firstPost.title}
                      coverImage={memoizedContent.firstPost.coverImage?.url || DEFAULT_COVER}
                      date={memoizedContent.firstPost.publishedAt}
                      slug={memoizedContent.firstPost.slug}
                      excerpt={memoizedContent.firstPost.brief}
                    />
                  )}
                </div>
                <div className="col-span-1 flex flex-col gap-6">
                  {memoizedContent.secondaryPosts}
                </div>
              </div>

              {memoizedContent.morePosts.length > 0 && (
                <MorePosts context="home" posts={memoizedContent.morePosts} />
              )}
            </>
          )}

          {hasMorePosts && (
            <div ref={loadingRef} className="flex justify-center items-center py-4">
              {isLoading ? (
                <span>Yükleniyor...</span>
              ) : (
                <span>Daha fazla gönderi için kaydırın</span>
              )}
            </div>
          )}
        </Container>
        <Footer />
      </Layout>
    </AppProvider>
  );
}

export const getStaticProps: GetStaticProps<Props> = async () => {
  const data = await request<
    PostsByPublicationQuery,
    PostsByPublicationQueryVariables
  >(GQL_ENDPOINT, PostsByPublicationDocument, {
    first: 10,
    host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
  });

  const publication = data.publication;
  if (!publication) {
    return {
      notFound: true,
    };
  }
  const initialAllPosts = publication.posts.edges.map((edge) => edge.node);

  return {
    props: {
      publication,
      initialAllPosts,
      initialPageInfo: publication.posts.pageInfo,
    },
    revalidate: 60,
  };
};