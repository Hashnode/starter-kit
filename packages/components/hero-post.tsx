import Link from "next/link";
import Avatar from "./avatar";
import CoverImage from "./cover-image";
import DateFormatter from "./date-formatter";

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

const DEFAULT_COVER = 'https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format';

const HeroPost = ({
  title,
  coverImage,
  date,
  excerpt,
  author,
  slug,
}: Props) => {
  const postURL = `${process.env.NEXT_PUBLIC_MODE === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;

  return (
    <section className="grid grid-cols-1 gap-5 p-5 md:grid-cols-2 md:p-10 rounded-xl bg-slate-50 hover:bg-primary-50 dark:bg-neutral-800 dark:hover:bg-neutral-900">
      <div className="col-span-1">
        <CoverImage title={title} src={coverImage || DEFAULT_COVER} slug={slug} />
      </div>
      <div className="flex flex-col col-span-1 gap-3">
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
          <Avatar size={8} name={author.name} picture={author.profilePicture} />
        </Link>
      </div>
    </section>
  );
};

export default HeroPost;
