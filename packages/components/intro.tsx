import Link from "next/link";
import SubscribeBox from "./subscribe-box";
import Container from "./container";
import Button from "./button";

const Intro = () => {
  const baseUrl = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}`;

  return (
    <header className="py-10 mb-10 border-b bg-slate-950">
      <Container className="grid grid-cols-2 gap-5 px-5">
        <div className="col-span-1">
          <h1>
            <a href="#" className="flex flex-row items-center gap-5">
              <img
                className="block w-56"
                src="https://uploads-ssl.webflow.com/62a8755be8bcc86e6307def8/6329b27b3fc044f886326c4e_mindsDB-full%20logo.svg"
              />
              <span className="text-3xl font-semibold text-white">Blog</span>
            </a>
          </h1>
        </div>
        <div className="flex flex-row items-center justify-end col-span-1 gap-5 text-slate-300">
          <nav>
            <ul className="flex flex-row items-center gap-2">
              <li>
                <a href="#" className="block p-2 rounded-lg hover:bg-slate-900">
                  Announcements
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded-lg hover:bg-slate-900">
                  Engineering
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded-lg hover:bg-slate-900">
                  Design
                </a>
              </li>
              <li>
                <a href="#" className="block p-2 rounded-lg hover:bg-slate-900">
                  Changelog
                </a>
              </li>
            </ul>
          </nav>
          <Button label="Get Started" />
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
