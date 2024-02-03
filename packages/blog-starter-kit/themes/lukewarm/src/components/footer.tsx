'use client'
import React, { useState } from 'react'
import Author from './Author'
import { Card, CardContent, CardFooter, CardHeader } from './ui/card'
import { Input } from './ui/input'
import { Button } from './ui/button'
import { useMutation, useQuery } from '@tanstack/react-query'
import { getAuthor, getBlogName, subscribeToNewsletter } from '@/lib/requests'
import { toast } from 'sonner'
import { ClientError } from "graphql-request";
import { cabin, fira_sans } from '@/app/font'
import { MdMarkEmailRead } from "react-icons/md"
import { IoMail } from 'react-icons/io5'
import { FaFacebook, FaStackOverflow, FaYoutube } from 'react-icons/fa';
import { FaSquareXTwitter } from 'react-icons/fa6';
import { RiCamera2Fill } from 'react-icons/ri';
import { TfiGithub, TfiLink, TfiLinkedin } from 'react-icons/tfi';
import Link from 'next/link'
export default function Footer() {
    const [email, setEmail] = useState("");

    const { mutateAsync, isPending, error } = useMutation({
        mutationKey: ["newsletter"],
        mutationFn: subscribeToNewsletter,
        onError: onError,
        onSuccess: onSuccess,
    });

    const { data: title, isLoading: isLoadingTile } = useQuery({
        queryKey: ["blogName"],
        queryFn: getBlogName
    })
    function onSuccess() {
        localStorage.setItem("newsletter", email);
        toast.success(
            "Subscribed to newsletter! Check your email to confirm your subscription."
        );

    }

    function onError(err: ClientError) {
        if (!err.response.errors) return toast.error("Something went wrong!");
        toast.error(err.response.errors[0]!.message);
    }

    const username = title?.userName;
    const { data: author, isLoading, error: authorError } = useQuery({
        queryKey: ["author", username],
        queryFn: () => getAuthor(username!)
    });
    const currentYear = new Date().getFullYear()
    return (
        <footer className='flex flex-col-reverse md:flex-row w-full justify-between'>
            <div className=' md:w-[30%] bg-card flex flex-col items-center '>
                <CardHeader>
                    <img src={title?.favicon} alt={title?.title} className='w-20 md:w-32 rounded-full' />
                </CardHeader>
                <CardContent>
                    <h1 className={`text-4xl ${cabin.className}`}>{title?.title}</h1>
                </CardContent>
                <CardFooter className={`${fira_sans.className} text-center`}>
                    <p>© {currentYear} {title?.title}</p>
                </CardFooter>
            </div>
            <div className='bg-primary md:w-[70%] flex flex-col items-center justify-center py-5 md:py-0'>
                <div>
                    <IoMail className='text-5xl text-white' />
                </div>

                <p className={`text-2xl text-white ${fira_sans.className}`}>
                    Subscribe to our Newsletter!
                </p>


                <div className="flex justify-center gap-5 mt-3">
                    <Input
                        type="email"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className='bg-card text-primary dark:text-slate-100 border-primary dark:border-slate-100'
                    />
                    <Button className='px-5 bg-card hover:bg-accent' onClick={() => mutateAsync(email)} disabled={isPending}>
                        {isPending ? "Loading..." : <MdMarkEmailRead className='text-3xl text-primary' />}
                    </Button>
                </div>
                <div className='flex gap-2 flex-wrap items-center py-2 text-xl'>
                    {author?.socialMediaLinks.website && (
                        <Link href={author.socialMediaLinks.website} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <TfiLink />
                        </Link>
                    )}
                    {author?.socialMediaLinks.github && (
                        <Link href={author.socialMediaLinks.github} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <TfiGithub />
                        </Link>
                    )}
                    {author?.socialMediaLinks.stackoverflow && (
                        <Link href={author.socialMediaLinks.stackoverflow} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <FaStackOverflow />
                        </Link>
                    )}
                    {author?.socialMediaLinks.twitter && (
                        <Link href={author.socialMediaLinks.twitter} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <FaSquareXTwitter />
                        </Link>
                    )}
                    {author?.socialMediaLinks.linkedin && (
                        <Link href={author.socialMediaLinks.linkedin} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <TfiLinkedin />
                        </Link>
                    )}
                    {author?.socialMediaLinks.youtube && (
                        <Link href={author.socialMediaLinks.youtube} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <FaYoutube />
                        </Link>
                    )}
                    {author?.socialMediaLinks.instagram && (
                        <Link href={author.socialMediaLinks.instagram} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <RiCamera2Fill />
                        </Link>
                    )}
                    {author?.socialMediaLinks.facebook && (
                        <Link href={author.socialMediaLinks.facebook} target="_blank" className="text-blue-500 hover:text-blue-600 flex flex-col-reverse gap-2 items-center">
                            <FaFacebook />
                        </Link>
                    )}
                </div>

            </div>
        </footer>
    )
}
