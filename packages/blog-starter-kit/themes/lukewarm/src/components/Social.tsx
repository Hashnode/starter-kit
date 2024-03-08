'use client'
import { getAuthor, getBlogName } from '@/lib/requests';
import { useQuery } from '@tanstack/react-query';
import Link from 'next/link';
import React from 'react'
import { FaFacebook, FaStackOverflow, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { RiCamera2Fill } from 'react-icons/ri';
import { TfiGithub, TfiLink, TfiLinkedin } from 'react-icons/tfi';
import { Card } from './ui/card';
import { fira_sans } from '@/app/font';

export default function Social() {
    const { data: title, isLoading: isLoadingTile } = useQuery({
        queryKey: ["blogName"],
        queryFn: getBlogName
    })
    const username = title?.userName;
    const { data: author, isLoading, error } = useQuery({
        queryKey: ["author", username],
        queryFn: () => getAuthor(username!)
    });
    return (
        <Card className={`${fira_sans.className} grid grid-cols-3 gap-3 w-full place-content-center py-10 my-5 text-primary`}>
            {author?.socialMediaLinks.website && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>Website</h2>
                    <Link href={author.socialMediaLinks.website} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <TfiLink />
                    </Link>
                </div>
            )}
            {author?.socialMediaLinks.github && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>Github</h2>
                    <Link href={author.socialMediaLinks.github} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <TfiGithub />
                    </Link>
                </div>
            )}
            {author?.socialMediaLinks.stackoverflow && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>Stack Overflow</h2>
                    <Link href={author.socialMediaLinks.stackoverflow} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <FaStackOverflow />
                    </Link>
                </div>
            )}
            {author?.socialMediaLinks.twitter && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>Twitter</h2>
                    <Link href={author.socialMediaLinks.twitter} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <FaSquareXTwitter />
                    </Link>
                </div>
            )}
            {author?.socialMediaLinks.linkedin && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>LinkedIn</h2>
                    <Link href={author.socialMediaLinks.linkedin} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <TfiLinkedin />
                    </Link>
                </div>
            )}
            {author?.socialMediaLinks.youtube && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>Youtube</h2>
                    <Link href={author.socialMediaLinks.youtube} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <FaYoutube />
                    </Link>
                </div>
            )}
            {author?.socialMediaLinks.instagram && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>Instagram</h2>
                    <Link href={author.socialMediaLinks.instagram} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <RiCamera2Fill />
                    </Link>
                </div>
            )}
            {author?.socialMediaLinks.facebook && (
                <div className='flex flex-col-reverse gap-2 items-center'>
                    <h2>Facebook</h2>
                    <Link href={author.socialMediaLinks.facebook} target="_blank" className="text-blue-500 hover:text-blue-600">
                        <FaFacebook />
                    </Link>
                </div>
            )}
        </Card>
    )
}
