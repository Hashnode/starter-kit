import { PostMetadata } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { format, parseISO } from 'date-fns';
import { cabin, eczar, fira_sans } from "@/app/font";


export default function BlogCard({ post }: { post: PostMetadata }) {
    const date = parseISO(post.publishedAt)

    const formattedPublishedDate = format(date, 'MMM dd, yyyy',)
    return (
        <Card className="flex flex-col md:flex-row   mx-2">
            <CardHeader className="md:items-center md:w-[50%] ">
                <Link className="" href={`/${post.slug}`}>
                    <img src={post.coverImage?.url} className="rounded-lg w-[300px]  hover:scale-105 transform-gpu transition-transform ease-in-out" alt={post.title} />
                </Link>
            </CardHeader>
            <CardContent className="flex flex-col justify-between md:w-[70%] p-6 ">
                <div>
                    <h2 className={`${cabin.className} text-xl md:text-4xl text-primary font-bold line-clamp-2`}>
                        <Link className="" href={`/${post.slug}`}>{post.title}</Link>
                    </h2>

                    <div className={`${fira_sans.className}  flex gap-5 items-center`}>
                        <div className="flex gap-1 items-center">
                            <span>By</span>
                            <p className="font-semibold">
                                {post.author.name}
                            </p>
                        </div>
                        <p>{formattedPublishedDate}</p>

                    </div>
                </div>

                <p className={`${eczar.className} text-secondary line-clamp-3 dark:text-white`}>
                    <Link className="" href={`/${post.slug}`}>

                        {post.subtitle || post.content.text}
                    </Link>
                </p>
            </CardContent>
        </Card>
    )
}
