import Container from "./container";
import Button from "./button";
import Link from "next/link";

const Intro = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <header className="py-10 border-b dark:border-neutral-600 bg-slate-950 dark:bg-neutral-900">
      <Container className="flex flex-row items-center gap-5 px-5">
        <div className="flex-1">
          <h1>
            <Link href="/" className="flex flex-row items-center gap-5">
              <img
                className="block w-56"
                src="https://uploads-ssl.webflow.com/62a8755be8bcc86e6307def8/6329b27b3fc044f886326c4e_mindsDB-full%20logo.svg"
              />
              <span className="text-3xl font-semibold text-white">Blog</span>
            </Link>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-end col-span-1 gap-5 text-slate-300">
          <nav>
            <ul className="flex flex-row items-center gap-2">
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Announcements
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Engineering
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Design
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block p-2 transition-colors rounded-full hover:bg-white hover:text-black dark:hover:bg-neutral-800 transition-200"
                >
                  Changelog
                </a>
              </li>
            </ul>
          </nav>
          <Button type="primary" label="Book a demo" />
        </div>
      </Container>
    </header>
    // <section className="grid grid-cols-1 gap-10 md:grid-cols-2">
    //   <div className="flex flex-col items-start col-span-1 gap-3">
    //     <Link href={baseUrl}>
    //       <h1 className="flex flex-row items-center gap-2 text-5xl font-bold text-slate-950 dark:text-neutral-100">
    //         <span>Blog</span>
    //       </h1>
    //     </Link>
    //     <h3 className="text-xl text-slate-500 dark:text-neutral-300">
    //       The headless blog starter kit by Hashnode. Built with Next.js,
    //       TailwindCSS and Hashnode GraphQL APIs.
    //     </h3>
    //   </div>
    //   <div className="col-span-1">
    //     <div className="flex flex-col items-start gap-3 p-5 rounded-xl bg-slate-100 dark:bg-neutral-800">
    //       <h3 className="font-semibold text-slate-700 dark:text-neutral-300">
    //         Subscribe to our blog updates
    //       </h3>
    //       <SubscribeBox />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Intro;
