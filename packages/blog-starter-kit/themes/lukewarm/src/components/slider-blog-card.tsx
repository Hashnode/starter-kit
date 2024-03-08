import { PostMetadata } from "@/lib/types";
import { Card, CardContent, CardHeader } from "./ui/card";
import Link from "next/link";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { cabin, eczar, fira_sans } from "@/app/font";



export default function SliderBlogCard({ post }: { post: PostMetadata }) {
    console.log(post)
    return (
        <div className="relative">
            <Link className="" href={`/${post.slug}`}>
                <div className="relative">
                    <img src={post.coverImage?.url} className="rounded-lg w-[300px] h-[300px] md:w-full hover:scale-105 transform-gpu transition-transform ease-in-out" alt={post.title} />
                    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 rounded-lg"></div>
                </div>

                <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-between">
                    <div className="p-4">
                        <h2 className={`${cabin.className} text-white text-xl font-bold line-clamp-1`}>
                            <Link className="" href={`/${post.slug}`}>{post.title}</Link>
                        </h2>
                    </div>
                    <CardContent className="p-4 text-white">
                        <div className={` ${fira_sans.className}  flex gap-3 items-center`}>
                            {post.author.profilePicture && <img src={post.author.profilePicture} className="rounded-full w-7 h-7" alt={post.author.name} />}
                            {post.author.name}
                        </div>
                        <p className={`text-white font-medium line-clamp-3 ${eczar.className} `}>
                            <Link className="" href={`/${post.slug}`}>
                                {post.subtitle || post.content.text}
                            </Link>
                        </p>
                    </CardContent>
                </div>
            </Link>
        </div>
    )
}
