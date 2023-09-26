import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { resizeImage } from "@starter-kit/utils/image";

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  author: {
    name: string;
    profilePicture: string;
  };
  slug: string;
};

const DEFAULT_COVER =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format";

const SecondaryPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const postURL = `${
    process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
  }${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;

  return (
    <section className="grid items-start gap-5 md:grid-cols-2">
      <div className="col-span-1">
        <CoverImage
          title={title}
          src={resizeImage(coverImage, { w: 600, h:300 }) || DEFAULT_COVER}
          slug={slug}
        />
      </div>
      <div className="flex flex-col col-span-1 gap-2">
        <h3 className="text-lg font-semibold leading-tight text-slate-800 dark:text-neutral-50">
          <Link
            as={postURL}
            href={postURL}
            className="hover:underline hover:text-primary-600 dark:hover:text-primary-500"
          >
            {title}
          </Link>
        </h3>
        <Link as={postURL} href={postURL}>
          <p className="leading-snug text-md text-slate-500 dark:text-neutral-400">
            {excerpt.length > 100 ? excerpt.substring(0, 100) + "…" : excerpt}
          </p>
        </Link>
        <div className="text-sm text-slate-500 dark:text-neutral-300">
          <Link as={postURL} href={postURL}>
            <DateFormatter dateString={date} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SecondaryPost;
