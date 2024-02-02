import { useEffect, useState } from "react";
import BentoCard, {
  BentoContainer,
  BentoImage,
  BentoSubtitle,
  BentoTitle,
  BentoToolTip,
} from "@/components/BentoCard";
import Link from "next/link";
import { getPosts } from "@/lib/datafetch/getPost";
import LoadMore from "@/components/LoadMore";
import { getPostsByTags } from "@/lib/datafetch/getPostByTags";

async function Posts({ params }: { params: { id: string } }) {
  const tag = params.id;
  const staticdata = await getPostsByTags({ after: "", tag: tag });

  return (
    <div className="text-black dark:text-white flex flex-col gap-4 mt-10  no-scrollbar  items-center">
      <div className="text-neutal-800 text-4xl font-extrabold  ">
        {"#" + tag}
      </div>

      <div className="text-black flex flex-col gap-4 ">
        {staticdata.data.publication.posts.edges.map((e: any) => {
          return (
            <BentoCard
              type="large"
              key={e.node.id}
              isLink
              href={"/blogs/" + e.node.slug}
            >
              <BentoContainer type="large">
                <div className="flex flex-col h-full justify-between ">
                  <div className="flex flex-col gap-2">
                    <BentoTitle>{e.node.title}</BentoTitle>
                    <BentoSubtitle>{e.node.subtitle}</BentoSubtitle>
                  </div>
                  <BentoImage
                    type="large"
                    src={e.node.coverImage?.url}
                    alt={e.node.title}
                  >
                    <BentoToolTip type="large">
                      {" "}
                      {e.node.readTimeInMinutes} mins
                    </BentoToolTip>
                  </BentoImage>
                </div>
              </BentoContainer>
            </BentoCard>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
