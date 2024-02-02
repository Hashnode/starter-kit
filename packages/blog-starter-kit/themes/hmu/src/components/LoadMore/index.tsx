"use client";

import Link from "next/link";
import { useState } from "react";
import BentoCard, {
  BentoContainer,
  BentoImage,
  BentoSubtitle,
  BentoTitle,
  BentoToolTip,
} from "../BentoCard";
import { getMorePost } from "@/lib/datafetch/loadmore";

export type PageInfoFragment = {
  __typename?: "PageInfo";
  endCursor?: string | null;
  hasNextPage?: boolean | null;
};

function LoadMore({ publication, initialPosts, initialPageInfo }: any) {
  const [posts, setPosts] = useState<any>([]);
  const [isNextPage, setIsNextPage] = useState(true);
  const [pageInfo, setPageInfo] = useState<any>(initialPageInfo);

  const loadMore = async () => {
    const data = await getMorePost({ after: pageInfo.endCursor });
    if (!data.data.publication) {
      return;
    }
    const newPosts = data.data.publication.posts.edges.map(
      (edge: any) => edge.node
    );

    setIsNextPage(data.data.publication.posts.pageInfo.hasNextPage);

    setPosts([...posts, ...newPosts]);
    setPageInfo(data.data.publication.posts.pageInfo);
  };

  return (
    <>
      <div className="flex flex-wrap gap-8 justify-center mt-8">
        {posts?.map((e: any, i: any) => {
          return (
            <BentoCard type="large" key={e.id} isLink href={"/blogs/" + e.slug}>
              <BentoContainer type="large">
                <div className="flex flex-col min-h-full gap-3 justify-between ">
                  <div className="flex flex-col gap-2">
                    <BentoTitle>{e.title}</BentoTitle>
                    <BentoSubtitle>{e.subtitle}</BentoSubtitle>
                  </div>
                  <BentoImage
                    type="large"
                    src={e.coverImage?.url}
                    alt={e.title}
                  >
                    <BentoToolTip type="small">
                      {e.readTimeInMinutes} mins
                    </BentoToolTip>
                  </BentoImage>
                </div>
              </BentoContainer>
            </BentoCard>
          );
        })}
      </div>
      <div className="flex justify-center mt-10">
        {isNextPage && (
          <button
            className=" transition-colors duration-200 rounded-lg w-fit py-4 px-5 mb-36 dark:text-white  hover:bg-neutral-800 hover:text-neutral-200 bg-neutral-200 dark:bg-neutral-900 font-medium "
            onClick={() => loadMore()}
          >
            Load More
          </button>
        )}
      </div>
    </>
  );
}

export default LoadMore;
