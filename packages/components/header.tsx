import Link from "next/link";
import Button from "./button";
import { NewsletterPlusSVG } from "./icons";
import * as Popover from "@radix-ui/react-popover";
import SubscribeBox from "./subscribe-box";

const Header = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;
  return (
    <div className="grid items-center grid-cols-3 gap-10 px-5 py-10 md:grid-cols-2">
      <div className="col-span-1">
        <h2 className="text-3xl font-bold md:text-5xl text-slate-950 dark:text-neutral-100">
          <Link href={`${baseUrl}`}>Blog</Link>
        </h2>
      </div>
      <div className="flex flex-row justify-end col-span-2 md:col-span-1">
        <Popover.Root>
          <Popover.Trigger asChild>
            <div>
              <Button
                label="Subscibe for updates"
                icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
              />
            </div>
          </Popover.Trigger>
          <Popover.Portal>
            <Popover.Content
              className="w-[350px] md:w-[500px] p-2 md:p-5 bg-slate-100 dark:bg-neutral-800 rounded-xl border dark:border-neutral-600"
              align="end"
              sideOffset={5}
            >
              <SubscribeBox />
            </Popover.Content>
          </Popover.Portal>
        </Popover.Root>
      </div>
    </div>
  );
};

export default Header;
