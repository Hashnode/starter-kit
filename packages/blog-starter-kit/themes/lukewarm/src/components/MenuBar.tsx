'use client'
import { Button } from "@/components/ui/button"
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { NavigationMenuLink, NavigationMenuList, NavigationMenu } from "@/components/ui/navigation-menu"
import { HamburgerMenuIcon } from "@radix-ui/react-icons"
import Author from "./Author"
import { useQuery } from "@tanstack/react-query"
import { getBlogName, getSeriesList } from "@/lib/requests"
import ThemeToggler from "./theme-toggler"
import Newsletter from "./newsletter"
import { cabin, fira_sans } from "@/app/font"

export default function MenuBar() {
    const { data: seriesList, isLoading, error } = useQuery({
        queryKey: ["seriesList"],
        queryFn: getSeriesList
    });
    const { data: title, isLoading: isLoadingTile } = useQuery({
        queryKey: ["blogName"],
        queryFn: getBlogName
    })

    return (
        <header className="flex h-20 w-full shrink-0 items-center px-4 md:px-6 bg-primary mb-2">
            <Sheet>
                <SheetTrigger asChild>
                    <Button className="lg:hidden" size="icon" variant="outline">
                        <HamburgerMenuIcon />
                        <span className="sr-only">Toggle navigation menu</span>
                    </Button>
                </SheetTrigger>
                <h1 className="font-semibold md:hidden block w-[200px] ml-2 whitespace-nowrap">
                    {title?.title}
                </h1>
                <SheetContent side="left" className="overflow-y-auto">
                    <Link
                        className="flex gap-2 items-center mb-2"
                        href="/">
                        <img src={title?.favicon} alt={title?.title} className="w-10 rounded-md" />
                        <h1 className="text-xl md:text-2xl font-bold text-blue-800">
                            {title?.title}
                        </h1>
                    </Link>
                    <Author />
                    <div className="flex justify-center">

                        <Newsletter />
                    </div>
                    <div className="grid gap-2 py-6">
                        {seriesList?.map((series) => (
                            <Link href={`/series/${series.node.slug}`} key={series.node.id} className="inline-flex h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors  hover:text-gray-900  focus:text-gray-900 focus:outline-none disabled:pointer-events-none disabled:opacity-50">
                                {series.node.name}
                            </Link>
                        ))}
                    </div>

                </SheetContent>
            </Sheet>
            <div className="inline-block w-fit">
                <Link href={'/'} className="mr-6 hidden lg:flex items-center gap-2 " >
                    <img src={title?.favicon} alt={title?.title} className="w-10 rounded-md" />
                    <h1 className={`${fira_sans.className} text-2xl font-semibold text-card whitespace-nowrap`}>{title?.title}</h1>
                </Link>
            </div>
            <div className="flex w-full justify-center">
                <NavigationMenu className="hidden lg:flex">
                    <NavigationMenuList>
                        {seriesList?.map((series) => (
                            <NavigationMenuLink asChild>
                                <Link href={`/series/${series.node.slug}`} key={series.node.id} className={`${cabin.className} inline-flex  h-9 w-max items-center justify-center rounded-md  px-4 py-2 text-sm font-medium transition-colors text-white hover:text-accent  focus:text-accent focus:outline-none disabled:pointer-events-none disabled:opacity-50`}>
                                    {series.node.name}
                                </Link>
                            </NavigationMenuLink>
                        ))}
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
            <div className="ml-auto flex gap-1">
                <ThemeToggler />
                <div className="hidden md:block">
                    <Newsletter className="py-4 text-base border" />
                </div>
            </div>
        </header>
    )
}




