"use client";
import React from "react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useTheme } from "next-themes";
import { FaMoon } from "react-icons/fa";
import { IoSunnySharp } from "react-icons/io5";
import { HiOutlineMoon } from "react-icons/hi";
import { LuSunMoon } from "react-icons/lu";
export default function ThemeToggler() {
    const { setTheme, resolvedTheme } = useTheme();

    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="text-white outline-none text-2xl">
                {resolvedTheme === "light" ? <FaMoon /> : <IoSunnySharp />}
            </DropdownMenuTrigger>

            <DropdownMenuContent className="text-primary font-semibold">
                <DropdownMenuItem onClick={() => setTheme("light")}>
                    Default
                </DropdownMenuItem>
                <DropdownMenuItem onClick={() => setTheme("dark")}>
                    Dark
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
}