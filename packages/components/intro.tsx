import Link from "next/link";
import SubscribeBox from "./subscribe-box";

const Intro = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="flex flex-col items-start col-span-1 gap-3">
        <Link href={baseUrl}>
          <h1 className="flex flex-row items-center gap-2 text-5xl font-bold text-slate-950 dark:text-neutral-100">
            <span>Blog</span>
          </h1>
        </Link>
        <h3 className="text-xl text-slate-500 dark:text-neutral-300">
          The headless blog starter kit by Hashnode. Built with Next.js,
          TailwindCSS and Hashnode GraphQL APIs.
        </h3>
      </div>
      <div className="col-span-1">
        <div className="flex flex-col items-start gap-3 p-5 rounded-xl bg-slate-100 dark:bg-neutral-800">
          <h3 className="font-semibold text-slate-700 dark:text-neutral-300">
            Subscribe to our blog updates
          </h3>
          <SubscribeBox />
        </div>
      </div>
    </section>
  );
};

export default Intro;
