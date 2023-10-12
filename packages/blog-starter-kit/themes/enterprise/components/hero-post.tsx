import Link from "next/link";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";
import { resizeImage } from "@starter-kit/utils/image";
import { getBaseUrl } from '@starter-kit/utils/consts';

type Props = {
  title: string;
  coverImage: string;
  date: string;
  excerpt: string;
  slug: string;
};

const DEFAULT_COVER =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format";

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  slug,
}: Props) => {
  const postURL = `${getBaseUrl()}/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-5">
      <div className="col-span-1">
        <CoverImage
          title={title}
          src={
            resizeImage(coverImage, { w: 1600, h: 840, c: "thumb" }) ||
            DEFAULT_COVER
          }
          slug={slug}
          priority={true}
        />
      </div>
      <div className="flex flex-col col-span-1 gap-2">
        <h1 className="text-xl font-bold leading-snug lg:text-3xl text-slate-800 dark:text-neutral-50">
          <Link
            href={postURL}
            className="leading-tight tracking-tight hover:underline hover:text-primary-600 dark:hover:text-primary-500"
          >
            {title}
          </Link>
        </h1>
        <Link href={postURL}>
          <p className="leading-snug text-md text-slate-500 dark:text-neutral-400">
            {excerpt}
          </p>
        </Link>
        <div className="text-sm font-semibold text-slate-500 dark:text-neutral-300">
          <Link href={postURL}>
            <DateFormatter dateString={date} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
