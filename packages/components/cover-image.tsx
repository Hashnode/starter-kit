import cn from "classnames";
import Link from "next/link";
import Image from "next/image";

type Props = {
  title: string;
  src: string;
  slug?: string;
};

const CoverImage = ({ title, src, slug }: Props) => {
  const postURL = `${process.env.NEXT_PUBLIC_MODE === 'development' ? 'http://' : 'https://'}${process.env.NEXT_PUBLIC_BASE_URL}/${slug}`;

  const image = (
    <div className="relative pt-[56.25%]">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={cn("border dark:border-neutral-600 rounded-xl w-full", {
          "hover:border-slate-400 duration-200": slug,
        })}
        fill
        objectFit="cover"
      />
    </div>
  );
  return (
    <div className="sm:mx-0">
      {slug ? (
        <Link as={postURL} href={postURL} aria-label={title}>
          {image}
        </Link>
      ) : (
        image
      )}
    </div>
  );
};

export default CoverImage;
