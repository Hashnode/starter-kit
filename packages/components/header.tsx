import Link from "next/link";
import Button from "./button";
import { NewsletterPlusSVG } from "./icons";

const Header = () => {
  const baseUrl = `${process.env.NEXT_PUBLIC_MODE === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_BASE_URL}`;
  return (
    <div className="grid items-center grid-cols-3 gap-10 px-5 py-10 md:grid-cols-2">
      <div className="col-span-1">
        <h2 className="text-3xl font-bold md:text-5xl text-slate-950 dark:text-neutral-100">
          <Link href={`${baseUrl}`}>Blog</Link>
        </h2>
      </div>
      <div className="flex flex-row justify-end col-span-2 md:col-span-1">
        <Button
          label="Subscibe for updates"
          icon={<NewsletterPlusSVG className="w-5 h-5 fill-current" />}
        />
      </div>
    </div>
  );
};

export default Header;
