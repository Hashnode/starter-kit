type Props = {
  // content: string;
};

const PostTOC = () => {
  return (
    <div className="w-full px-5">
      <div className="w-full max-w-screen-md p-5 mx-auto text-base leading-snug border border-b-4 border-r-4 rounded-lg md:text-lg dark:border-neutral-600 md:p-8 dark:text-neutral-50">
        <h3 className="mb-5 text-lg font-bold md:text-xl">Table of content</h3>
        <ul className="flex flex-col gap-5 pl-5 mt-5 font-medium text-slate-800 dark:text-neutral-200">
          <li>
            <a
              href="#"
              className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
            >
              Ipsum qui aliqua duis consectetur officia tempor esse nostrud
              ullamco proident sint ad enim.
            </a>
          </li>
          <li>
            <a
              href="#"
              className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
            >
              Nulla proident deserunt sunt tempor non tempor id ullamco.
            </a>
            <ul className="flex flex-col gap-5 pl-5 mt-5 text-slate-800 dark:text-neutral-200">
              <li>
                <a
                  href="#"
                  className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
                >
                  Ipsum qui aliqua duis consectetur officia tempor esse nostrud
                  ullamco proident sint ad enim.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
                >
                  Nulla proident deserunt sunt tempor non tempor id ullamco.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
                >
                  Qui consectetur anim nostrud amet anim dolore mollit deserunt
                  ex ex nulla.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
                >
                  Dolor aliqua commodo ullamco quis in ex incididunt nisi et
                  minim sunt.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
                >
                  Eiusmod laborum excepteur anim reprehenderit occaecat dolor
                  sit nostrud occaecat fugiat nulla.
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
                >
                  Quis eiusmod tempor tempor veniam dolor tempor.
                </a>
              </li>
            </ul>
          </li>
          <li>
            <a
              href="#"
              className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
            >
              Qui consectetur anim nostrud amet anim dolore mollit deserunt ex
              ex nulla.
            </a>
          </li>
          <li>
            <a
              href="#"
              className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
            >
              Dolor aliqua commodo ullamco quis in ex incididunt nisi et minim
              sunt.
            </a>
          </li>
          <li>
            <a
              href="#"
              className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
            >
              Eiusmod laborum excepteur anim reprehenderit occaecat dolor sit
              nostrud occaecat fugiat nulla.
            </a>
          </li>
          <li>
            <a
              href="#"
              className="underline hover:text-primary-600 hover:bg-primary-50 dark:hover:text-primary-500 dark:hover:bg-neutral-800"
            >
              Quis eiusmod tempor tempor veniam dolor tempor.
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PostTOC;
