import Link from "next/link";

const Intro = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
      <div className="flex flex-col items-start col-span-1 gap-3">
        <Link href={baseUrl}>
          <h1 className="flex flex-row items-center gap-2 text-5xl font-bold text-slate-950 dark:text-neutral-100">
            {/* <div className="relative w-56 h-12 ">
              <Image
                src="https://cdn.hashnode.com/res/hashnode/image/upload/v1694633515420/kLIvl6p8w.png?auto=format"
                alt="Hashnode logo"
                fill
                objectFit="contain"
              />
            </div> */}
            {/* <span className="text-slate-500">/</span> */}
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
          <div className="relative w-full p-2 bg-white rounded-full dark:bg-neutral-950">
            <input
              type="email"
              placeholder="john@doe.com"
              className="w-full p-3 text-base rounded-full outline-none dark:bg-neutral-950 top-3 left-3 focus:outline-primary-600 dark:focus:outline-primary-500 focus:placeholder:text-slate-200 placeholder:text-slate-400"
            />
            <button className="absolute px-3 py-2 text-white rounded-full bg-primary-600 dark:bg-primary-500 top-3 right-3">
              Subscribe
            </button>
          </div>
          {/* <div className="relative w-full p-2">
            <p className="text-sm font-bold text-green-600 dark:text-green-500">
              Almost there!
            </p>
            <p className="text-sm font-medium text-slate-600 dark:text-neutral-300">
              Check your inbox for a confirmation email and click{" "}
              <strong>"Confirm and Subscribe"</strong> to complete your
              subscription. Thanks for joining us!
            </p>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default Intro;
