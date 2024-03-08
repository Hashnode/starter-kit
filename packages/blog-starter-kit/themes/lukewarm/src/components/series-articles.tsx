'use client'

import { getPosts, getSeriesBlogs } from "@/lib/requests"
import { UseQueryResult, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import BlogCard from "./blog-card"
import { Button } from "./ui/button"
import { useEffect, useRef, useState } from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { GetPostsResponse } from "@/lib/types"
import { Card, CardContent, CardHeader } from "./ui/card"
import Link from "next/link"
import { cabin, eczar } from "@/app/font"
type Props = {
    slug: string;

}
export default function SeriesArticles({ slug }: Props) {
    if (typeof slug !== 'string') {
        throw new Error('Slug must be a string');
    }
    console.log(typeof slug)
    const { data, hasNextPage, isFetching, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['seriesBlogs', slug],
        queryFn: getSeriesBlogs,
        getNextPageParam: (lastPage) => lastPage.series.posts.edges.length < 5
            ? undefined
            : lastPage.series.posts.edges[
                lastPage.series.posts.edges.length - 1
            ].cursor,
        initialPageParam: ""
    })


    const observerRef = useRef(null);

    const handleIntersection = (entries: any) => {
        const [entry] = entries;
        if (entry.isIntersecting && hasNextPage && !isFetching && !isFetchingNextPage) {
            fetchNextPage();
        }
    };

    useEffect(() => {
        const observer = new IntersectionObserver(handleIntersection, {
            root: null,
            rootMargin: '0px',
            threshold: 0.1,
        });

        if (observerRef.current) {
            observer.observe(observerRef.current);
        }

        return () => {
            if (observerRef.current) {
                observer.unobserve(observerRef.current);
            }
        };
    }, [hasNextPage, isFetching, isFetchingNextPage]);

    console.log(data)
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 place-content-center gap-5">
            {data?.pages.map((group) =>
                group.series.posts.edges.map((post) => (
                    <motion.div
                        key={post.cursor}
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9 }}
                        whileTap={{ scale: 0.9 }}
                    >
                        <Card className="flex flex-col md:flex-row  mx-2">
                            <CardHeader className="md:items-center md:w-[50%]">
                                <Link className="" href={`/${post.node.slug}`}>
                                    <img
                                        src={post.node.coverImage?.url}
                                        className="rounded-lg w-[300px]  hover:scale-105 transform-gpu transition-transform ease-in-out"
                                        alt={post.node.title}
                                    />
                                </Link>
                            </CardHeader>
                            <CardContent className="flex flex-col justify-between md:w-[70%] p-6">
                                <h2 className={`${cabin.className} text-xl md:text-xl text-primary font-bold line-clamp-1`}>
                                    <Link className="" href={`/${post.node.slug}`}>
                                        {post.node.title}
                                    </Link>
                                </h2>
                                <div className="flex gap-1 items-center">
                                    <span>By</span>
                                    <span className="font-semibold">{post.node.author.name}</span>
                                </div>
                                {/* <p>{formattedPublishedDate}</p> */}
                                <p className={`${eczar.className} text-secondary line-clamp-3`}>
                                    <Link className="" href={`/${post.node.slug}`}>
                                        {post.node.subtitle || post.node.content.text}
                                    </Link>
                                </p>
                            </CardContent>
                        </Card>
                    </motion.div>
                ))
            )}

            <div ref={observerRef} className="col-span-1 lg:col-span-3 w-full flex justify-center my-5">
                {isFetching ? <DotsHorizontalIcon className="animate-bounce" /> : ""}
            </div>

        </div>
    )
}