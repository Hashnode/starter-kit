import { useEffect, useState } from "react";
import BentoCard, { BentoImage } from "../BentoCard";
import Link from "next/link";
import SubscribeBox from "../SubscribeBox";
import SeoHome from "../Seo/home";
import markdownit from "markdown-it";

async function Header({ staticdata }: { staticdata: any }) {
  const md = markdownit();
  const aboutMarkdownHTML = md.render(
    staticdata.data.publication.about?.markdown || ""
  );

  return (
    <div className=" motion-reduce:animate-none animate-in min-w-min fade-in slide-in-from-bottom-5 duration-1000 text-black   dark:text-white flex flex-col gap-4">
      <img
        alt={"Profile Pic " + staticdata.data.publication.title}
        className=" w-32 h-32 rounded-full border border-neutral-400 border-opacity-80"
        src={staticdata.data.publication.author.profilePicture}
      />
      <div className="text-neutal-800 md:text-5xl font-bold  text-2xl text-nowrap   ">
        {staticdata.data.publication.author.name}
      </div>

      <div
        className=" max-w-lg dark:text-neutral-400 mt-3 text-neutral-500 xl:mt-3 xl:text-xl"
        dangerouslySetInnerHTML={{
          __html: aboutMarkdownHTML,
        }}
      />
      <SeoHome publication={staticdata.data.publication} />

      <SubscribeBox publicationId={staticdata.data.publication.id} />
    </div>
  );
}

export default Header;
