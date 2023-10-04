import DateFormatter from "./date-formatter";
import Link from "next/link";
import { resizeImage } from "@starter-kit/utils/image";

type Author = {
  name: string;
  username: string;
  profilePicture: string;
};

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  url: string;
  commentCount: number;
};

const MinimalPostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
  commentCount,
}: Props) => {
  const postURL = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;
  return (
    <section className="flex flex-col items-start gap-1">
      <h2 className="text-lg leading-tight tracking-tight text-black dark:text-white">
        <Link as={postURL} href={postURL}>
          {title}
        </Link>
      </h2>
      <p className="flex flex-row items-center gap-2">
        <Link
          as={postURL}
          href={postURL}
          className="text-sm text-neutral-600 dark:text-neutral-400"
        >
          <DateFormatter dateString={date} />
        </Link>
        {commentCount > 2 && (
          <>
            <span>&middot;</span>
            <Link
              as={postURL}
              href={postURL}
              className="text-sm text-neutral-600 dark:text-neutral-400"
            >
              {commentCount} comments
            </Link>
          </>
        )}
      </p>
    </section>
  );
};

export default MinimalPostPreview;
