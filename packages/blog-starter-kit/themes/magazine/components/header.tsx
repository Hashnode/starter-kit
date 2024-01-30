import Link from "next/link";

// import { Logo } from "@/components/logo";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "./mode-toggle";

export const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 flex items-center w-full px-4 border-b shadow-sm h-14 border-muted backdrop-blur-md">
        <div className="flex items-center justify-between w-full mx-auto md:max-w-screen-2xl">
          {/* <Logo /> */}
          <h1>Blog</h1>
          <div className="flex items-center justify-between w-full space-x-4 md:block md:w-auto">
            {/* <Button size="sm" variant="outline" asChild>
              <Link href="/">Home</Link>
            </Button> */}
            <ModeToggle />
            <Button size="sm" asChild>
              <Link href="/jobs">All Jobs</Link>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};