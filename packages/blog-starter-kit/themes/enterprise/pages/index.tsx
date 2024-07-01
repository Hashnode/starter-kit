import { addPublicationJsonLd } from "@starter-kit/utils/seo/addPublicationJsonLd";
import { getAutogeneratedPublicationOG } from "@starter-kit/utils/social/og";
import request from "graphql-request";
import { GetStaticProps } from "next";
import Head from "next/head";
import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from "../components/navbar";
import { Waypoint } from "react-waypoint";
import { Container } from "../components/container";
import { AppProvider } from "../components/contexts/appContext";
import { Footer } from "../components/footer";
import { HeroPost } from "../components/hero-post";
import { ArticleSVG, ChevronDownSVG } from "../components/icons";
import styles from '../styles/SketchButton.module.css';
import { Layout } from "../components/layout";
import { MorePosts } from "../components/more-posts";
import { SecondaryPost } from "../components/secondary-post";
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
import { DEFAULT_COVER } from "../utils/const";

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

type Props = {
  publication: PublicationFragment;
  initialAllPosts: PostFragment[];
  initialPageInfo: PageInfo;
};

export default function Index({
  publication,
  initialAllPosts,
  initialPageInfo,
}: Props) {
  const [allPosts, setAllPosts] = useState<PostFragment[]>(initialAllPosts);
  const [pageInfo, setPageInfo] =
    useState<Props["initialPageInfo"]>(initialPageInfo);
  const [loadedMore, setLoadedMore] = useState(false);

  const loadMore = async () => {
    const data = await request<
      MorePostsByPublicationQuery,
      MorePostsByPublicationQueryVariables
    >(GQL_ENDPOINT, MorePostsByPublicationDocument, {
      first: 10,
      host: process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST,
      after: pageInfo.endCursor,
    });
    if (!data.publication) {
      return;
    }
    const newPosts = data.publication.posts.edges.map((edge) => edge.node);
    setAllPosts([...allPosts, ...newPosts]);
    setPageInfo(data.publication.posts.pageInfo);
    setLoadedMore(true);
  };

  const firstPost = allPosts[0];
  const secondaryPosts = allPosts.slice(1, 4).map((post) => {
    return (
      <SecondaryPost
        key={post.id}
        title={post.title}
        coverImage={post.coverImage?.url || DEFAULT_COVER}
        date={post.publishedAt}
        slug={post.slug}
        excerpt={post.brief}
      />
    );
  });
  const morePosts = allPosts.slice(4);




  const createSVG = () => {
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    const rectangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    svg.setAttributeNS("http://www.w3.org/2000/svg", "viewBox", "0 0 100 100");
    rectangle.setAttribute("width", "100");
    rectangle.setAttribute("height", "100");
    svg.appendChild(rectangle);
    return svg;
  };
  
  const SketchButton: React.FC<{ onClick: () => void; label: string }> = ({ onClick, label }) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
  
    useEffect(() => {
      const button = buttonRef.current;
      if (!button) return;
  
      const lines = document.createElement("div");
      lines.classList.add(styles.lines);
      const groupTop = document.createElement("div");
      const groupBottom = document.createElement("div");
  
      for (let i = 0; i < 4; i++) {
        groupTop.appendChild(createSVG());
        groupBottom.appendChild(createSVG());
      }
  
      lines.appendChild(groupTop);
      lines.appendChild(groupBottom);
      button.appendChild(lines);
  
      const handlePointerEnter = () => {
        button.classList.add(styles.start);
      };
  
      const handleAnimationEnd = () => {
        button.classList.remove(styles.start);
      };
  
      button.addEventListener("pointerenter", handlePointerEnter);
      button.addEventListener("animationend", handleAnimationEnd);
  
      return () => {
        button.removeEventListener("pointerenter", handlePointerEnter);
        button.removeEventListener("animationend", handleAnimationEnd);
      };
    }, []);

    return (
      <button
        ref={buttonRef}
        onClick={onClick}
        className={styles['sketch-button']}
      >
        {label}
      </button>
    );
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
          <meta
            name="description"
            content={
              publication.descriptionSEO ||
              publication.title ||
              `${publication.author.name}'s Blog`
            }
          />
          <meta http-equiv="Content-Security-Policy" content="script-src 'none'"></meta>
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
              Sevimli dostlarımız için en taze mamayı sunan <a href="https://www.temizmama.com" target="_blank" rel="noopener noreferrer" className="text-orange-500 hover:bg-orange-300 hover:bg-opacity-30 transition duration-300">Temizmama</a> aracılığıyla kedi & köpek bakımı ile ilgili bilinmesi
              gerekenlerin hepsi bu sayfada!
            </p>
          </div>
          {allPosts.length === 0 && (
            <div className="grid grid-cols-1 py-20 lg:grid-cols-3">
              <div className="col-span-1 flex flex-col items-center gap-5 text-center text-slate-700 dark:text-neutral-400 lg:col-start-2">
                <div className="w-20">
                  <ArticleSVG clasName="stroke-current" />
                </div>
                <p className="text-xl font-semibold ">
                </p>
              </div>
            </div>
          )}

          <div className="grid items-start gap-6 xl:grid-cols-2">
            <div className="col-span-1">
              {firstPost && (
                <HeroPost
                  title={firstPost.title}
                  coverImage={firstPost.coverImage?.url || DEFAULT_COVER}
                  date={firstPost.publishedAt}
                  slug={firstPost.slug}
                  excerpt={firstPost.brief}
                />
              )}
            </div>
            <div className="col-span-1 flex flex-col gap-6">
              {secondaryPosts}
            </div>
          </div>

          {morePosts.length > 0 && (
            <>
              <MorePosts context="home" posts={morePosts} />
              {!loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
                <div className="flex w-full flex-row items-center justify-center">
                  <SketchButton
                    onClick={loadMore}
                    label="Daha fazla"
                  />
                </div>
              )}
              {loadedMore && pageInfo.hasNextPage && pageInfo.endCursor && (
                <Waypoint onEnter={loadMore} bottomOffset={"10%"} />
              )}
            </>
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
    revalidate: 1,
  };
};
