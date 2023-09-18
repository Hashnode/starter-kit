import { ReactNode } from "react";

type Props = {
  children?: ReactNode;
};

const PostTitle = ({ children }: Props) => {
  return (
    <div className="max-w-screen-lg px-5 mx-auto prose md:prose-xl dark:prose-invert prose-h1:text-center">
      <h1 className="">{children}</h1>
    </div>
  );
};

export default PostTitle;
