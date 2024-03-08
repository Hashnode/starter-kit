'use client'
import { getTableOfContents } from '@/lib/requests';
import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { Card, CardContent } from './ui/card';
import { cabin } from '@/app/font';

type Props = {
    id: string;
}
export default function TableOfContents({ id }: Props) {
    const { data } = useQuery({
        queryKey: ["TableOfContents", id],
        queryFn: () => getTableOfContents(id),
    });

    if (!data?.features?.tableOfContents?.isEnabled) {
        return (
            <Card className=''>
                <h1 className='px-[18px] py-2 text-sm font-medium uppercase text-primary dark:text-slate-400'>Table of contents</h1>
                <CardContent className='w-[300px] min-h-[300px] justify-center items-center flex  '>
                    <p className={` ${cabin.className}text-slate-800 font-bold dark:text-slate-100`}>Whoops! This Article has no Table of Contents</p>
                </CardContent>
            </Card>
        )
    }
    return (

        <Card className='w-[300px] min-h-[300px] '>
            <h1 className='px-[18px] py-2 text-sm font-medium uppercase text-primary dark:text-slate-400'>Table of contents</h1>
            <CardContent className='p-2'>
                <ul>
                    {data?.features?.tableOfContents?.items?.map((item, index) => (
                        <li key={index}>
                            <a className='w-full py-2.5 pr-2.5 text-sm font-medium text-slate-800 dark:text-slate-100 hover:underline' href={`#heading-${item.slug}`}>{item.title}</a>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    )
}
