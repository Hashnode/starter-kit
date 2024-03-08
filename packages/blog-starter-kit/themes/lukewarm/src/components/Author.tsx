'use client'
import { getAuthor, getBlogName } from "@/lib/requests"
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card"
import Link from "next/link"
import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons"
import { FaChrome, FaFacebook, FaStackOverflow, FaYoutube } from "react-icons/fa";
import { TfiGithub, TfiLink, TfiLinkedin, TfiTwitter } from "react-icons/tfi";
import CardAnimation from "./card-animation";
import { useQuery } from "@tanstack/react-query";
import { FaSquareXTwitter } from "react-icons/fa6";
import { RiCamera2Fill } from "react-icons/ri";
import { eczar, fira_sans } from "@/app/font"
export default function Author() {

    const { data: title, isLoading: isLoadingTile } = useQuery({
        queryKey: ["blogName"],
        queryFn: getBlogName
    })
    const username = title?.userName
    const { data: author, isLoading, error } = useQuery({
        queryKey: ["author", username],
        queryFn: () => (username ? getAuthor(username) : Promise.resolve(null)),
    });


    if (isLoading) {
        return (
            <Card className="blur-md">
                <CardHeader className="items-center">
                    <h1 className="font-semibold text-2xl text-center h-8 bg-gray-300 rounded w-3/4 mb-4"></h1>
                    <div className="rounded-full w-28 h-28 bg-gray-300 mb-4"></div>
                </CardHeader>
                <CardContent>
                    <p className="text-gray-500 text-center h-4 bg-gray-300 rounded w-3/4 mx-auto mb-4"></p>
                </CardContent>
                <CardFooter>
                    <div className="flex justify-center items-center gap-3 w-full">
                        {Array.from({ length: 7 }).map((_, index) => (
                            <div key={index} className="text-blue-500 hover:text-blue-600 animate-pulse w-6 h-6 rounded-full" />
                        ))}
                    </div>
                </CardFooter>
            </Card>
        );
    }


    if (error) return <div>An error occurred: {error.message}</div>;

    return (

        <Card className="md:min-h-[300px] md:w-[300px] py-1 text-primary ">
            <CardHeader className="items-center">
                <h1 className={`${fira_sans.className}  font-semibold text-2xl text-center`}>{author?.name}</h1>
                <img src={author?.profilePicture} alt={author?.name} className="rounded-full w-28 h-28" />

            </CardHeader>
            <CardContent>
                <p className={`text-center ${eczar.className} `}>{author?.bio.markdown}</p>
            </CardContent>

        </Card>

    )
}
