"use client";

import * as React from "react";
import { MoonIcon, SunIcon } from "@radix-ui/react-icons";
import { useTheme } from "next-themes";

type themes = "light" | "dark" | "system";

export function ModeToggle() {
  const { setTheme, theme, themes } = useTheme();

  return (
    <>
      {" "}
      <button
        id="themetoggle"
        aria-label="Toggle theme"
        role="button"
        onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        className="dark:bg-neutral-900 bg-neutral-100 text-neutral-900 p-2 dark:text-neutral-600 rounded-full flex justify-center  "
      >
        <SunIcon className=" w-6 h-6  dark:-rotate-90 dark:scale-0 dark:hidden" />
        <MoonIcon className=" w-6 h-6  transition-all dark:rotate-0 dark:scale-100 hidden dark:block" />
      </button>
    </>
  );
}
