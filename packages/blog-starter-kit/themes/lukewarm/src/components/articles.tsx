'use client'

import { getPosts } from "@/lib/requests"
import { UseQueryResult, useInfiniteQuery, useQuery } from "@tanstack/react-query"
import BlogCard from "./blog-card"
import { Button } from "./ui/button"
import { useEffect, useRef, useState } from "react"
import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { motion } from "framer-motion"
import { GetPostsResponse } from "@/lib/types"

export default function Articles() {
    const { data, hasNextPage, isFetching, fetchNextPage, isFetchingNextPage } = useInfiniteQuery({
        queryKey: ['posts'],
        queryFn: getPosts,
        getNextPageParam: (lastPage) => lastPage.length < 5 ? undefined : lastPage[lastPage.length - 1].cursor,
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
    return (
        <>
            {data?.pages.map(group => group.map((post) => <motion.div
                key={post.cursor}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9 }}
            >
                <BlogCard post={post.node} />
            </motion.div>))}


            <div ref={observerRef} className="col-span-1 lg:col-span-3 w-full flex justify-center my-5">
                {isFetching ? <DotsHorizontalIcon className="animate-bounce" /> : ""}
            </div>

        </>
    )
}