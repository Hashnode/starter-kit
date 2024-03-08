"use client";
import { getPostBySlug, getTableOfContents } from "@/lib/requests";
import { useQuery } from "@tanstack/react-query";
import { notFound, useRouter } from "next/navigation";
import Author from "./Author";
import Newsletter from "./newsletter";
import TableOfContents from "./table-of-content";
import TOCpopover from "./table-of-content-pop";
import { format, parseISO } from "date-fns";
import Comments from "./Comments";
import { FaBookReader } from "react-icons/fa";
import Social from "./Social";
import { cabin } from "@/app/font";
import { useEffect, useState } from "react";
import { Button } from "./ui/button";
import { IoMdArrowRoundBack } from "react-icons/io";
type Props = {
    slug: string;
};

export default function Post({ slug }: Props) {
    const router = useRouter();
    const { data } = useQuery({
        queryKey: ["post", slug],
        queryFn: () => getPostBySlug(slug),
    });

    const [scrollProgress, setScrollProgress] = useState(0);

    const handleScroll = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY / scrollHeight;
        setScrollProgress(scrolled);
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);




    if (!data) return notFound();
    const date = parseISO(data?.publishedAt!)
    const formattedPublishedDate = format(date, 'MMM dd, yyyy')
    const highlightJsMonokaiTheme =
        '.hljs{display:block;overflow-x:auto;padding:.5em;background:#23241f}.hljs,.hljs-subst,.hljs-tag{color:#f8f8f2}.hljs-emphasis,.hljs-strong{color:#a8a8a2}.hljs-bullet,.hljs-link,.hljs-literal,.hljs-number,.hljs-quote,.hljs-regexp{color:#ae81ff}.hljs-code,.hljs-section,.hljs-selector-class,.hljs-title{color:#a6e22e}.hljs-strong{font-weight:700}.hljs-emphasis{font-style:italic}.hljs-attr,.hljs-keyword,.hljs-name,.hljs-selector-tag{color:#f92672}.hljs-attribute,.hljs-symbol{color:#66d9ef}.hljs-class .hljs-title,.hljs-params{color:#f8f8f2}.hljs-addition,.hljs-built_in,.hljs-builtin-name,.hljs-selector-attr,.hljs-selector-id,.hljs-selector-pseudo,.hljs-string,.hljs-template-variable,.hljs-type,.hljs-variable{color:#e6db74}.hljs-comment,.hljs-deletion,.hljs-meta{color:#75715e}';

    return (
        <section className="flex flex-col gap-2 md:flex-row">
            <Button onClick={() => router.back()} className="md:hidden w-[30%] text-white hover:bg-primary">
                <IoMdArrowRoundBack />
            </Button>
            {/* Table of Contents */}
            <div className="md:w-1/4 mx-auto mt-8 md:mt-28 hidden md:flex flex-col">
                <TableOfContents id={data.id} />
                <Comments id={data.id} />
            </div>
            <div className="md:hidden fixed right-5">
                <TOCpopover>
                    <TableOfContents id={data.id} />

                </TOCpopover>
            </div>
            {/* Blog Content */}
            <div className="flex-1 max-w-3xl mx-auto mt-8">
                <div className="fixed top-0 left-0 h-1 bg-primary" style={{ width: `${scrollProgress * 100}%` }}></div>
                <div className="grid gap-6 grid-cols-1">
                    <h1 className={` ${cabin.className}  text-3xl lg:text-4xl font-bold leading-tight mb-4 text-center`}>
                        {data?.title}
                    </h1>
                    <div className="md:col-span-1">
                        <img src={data?.coverImage?.url} alt="" className="w-full rounded-md" />
                    </div>
                    <div>
                        <div className="flex gap-5 justify-center items-center">

                            <span className="font-semibold text-xs">
                                By {data?.author.name}
                            </span>
                            <span className="text-xs">
                                {formattedPublishedDate}
                            </span>
                            <span className="flex items-center gap-2 text-xs">
                                <FaBookReader /> {data?.readTimeInMinutes} min read
                            </span>
                        </div>

                    </div>
                    <div className="md:col-span-1">

                        <style dangerouslySetInnerHTML={{ __html: highlightJsMonokaiTheme }}></style>
                        <div className="blog-content text-lg leading-loose">
                            <div dangerouslySetInnerHTML={{ __html: data?.content.html }}></div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Author and Newsletter */}
            <div className="md:w-1/4 mx-auto mt-8 md:mt-28 flex flex-col">
                <Author />
                <Newsletter />
                <Social />
            </div>
        </section>

    );
}
