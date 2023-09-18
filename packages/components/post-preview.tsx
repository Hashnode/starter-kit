import Avatar from "./avatar";
import DateFormatter from "./date-formatter";
import CoverImage from "./cover-image";
import Link from "next/link";
import type Author from "./interfaces/author";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: Author;
  slug: string;
  url: string;
};

const PostPreview = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const postURL = `${process.env.NEXT_PUBLIC_MODE === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;
  return (
    <div className="flex flex-col items-stretch gap-3">
      {coverImage && <div className="">
        <CoverImage slug={slug} title={title} src={coverImage} />
      </div>}
      <h3 className="text-xl font-bold lg:text-3xl text-slate-800 dark:text-neutral-50">
        <Link
          as={postURL}
          href={postURL}
          className="leading-tight tracking-tight hover:underline hover:text-primary-600 dark:hover:text-primary-500"
        >
          {title}
        </Link>
      </h3>
      <div className="font-medium text-md md:mb-0 text-slate-600 dark:text-neutral-300">
        <Link as={postURL} href={postURL}>
          <DateFormatter dateString={date} />
        </Link>
      </div>
      <Link as={postURL} href={postURL}>
        <p className="text-lg leading-snug text-slate-600 dark:text-neutral-300">
          {excerpt}
        </p>
      </Link>
      <Link as={postURL} href={postURL}>
        <Avatar name={author.name} size={8} picture={author.profilePicture} />
      </Link>
    </div>
  );
};

export default PostPreview;
