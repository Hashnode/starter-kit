import Container from "./container";
import { HashnodeSVG } from "./icons";

const Footer = () => {
  return (
    <footer className="px-5 py-20 border-t bg-slate-100 dark:bg-neutral-900 dark:border-neutral-800">
      <Container className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <div className="flex flex-col items-start col-span-1 gap-10 text-slate-500 dark:text-neutral-300">
          <h3 className="text-lg md:text-xl">
            The headless blog starter kit by Hashnode. Built with Next.js,
            TailwindCSS and Hashnode GraphQL APIs.
          </h3>
          <div className="flex flex-row items-center gap-2 p-5 text-slate-600 bg-slate-200 rounded-xl">
            <p className="">Blog powered by</p>
            <a
              href="#"
              className="flex flex-row items-center gap-1 font-semibold hover:underline"
            >
              <HashnodeSVG className="w-5 h-5 stroke-current" />
              Hashnode
            </a>
          </div>
        </div>
        <div className="flex flex-row items-center justify-start col-span-1 gap-2 md:justify-end text-slate-600 dark:text-neutral-300">
          <a className="hover:underline" href="#">
            Privacy
          </a>
          <a className="hover:underline" href="#">
            Terms
          </a>
          <p>&copy; Company 2023</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
