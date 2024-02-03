'use client'

import SeriesArticles from '@/components/series-articles';
import { Card } from '@/components/ui/card';
import { getSeriesDetails } from '@/lib/requests';
import { useInfiniteQuery, useQuery } from '@tanstack/react-query';
import React from 'react'

export default function SeriesPage({ params }: { params: { slug: string } }) {
    const { data: seriesDetails, isLoading, error } = useQuery({
        queryKey: ["seriesDetails", params.slug],
        queryFn: () => getSeriesDetails(params.slug)
    });

    return (
        <div>
            <Card className="relative bg-transparent shadow-none">
                {seriesDetails && (
                    <div className="relative h-64 md:h-96 overflow-hidden">
                        <img
                            src={seriesDetails?.coverImage}
                            alt={seriesDetails?.slug}
                            className="object-cover w-full md:w-[80%] h-full filter blur-sm hover:scale-101 transform-gpu transition-transform ease-in-out mx-auto"
                        />
                        <div className="absolute bottom-3 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white bg-[#2F3D7E] rounded bg-opacity-30 py-2 px-4 h-fit">
                            <h1 className="text-xl md:text-6xl font-bold mb-2 text-stroke">{seriesDetails?.name}</h1>
                            <p className="text-xs md:text-sm lg:text-lg">{seriesDetails?.description?.markdown}</p>
                        </div>
                    </div>
                )}
            </Card>
            <div className='flex justify-center items-center gap-5 py-5'>
                <img className='w-8 h-8 rounded-full' src={seriesDetails?.author?.profilePicture} alt={seriesDetails?.author.name} />
                <h1 className='font-semibold'>{seriesDetails?.author?.name}</h1>
            </div>
            <SeriesArticles slug={params.slug} />
        </div>
    )
}
