import Link from "next/link";
import Image from "next/image";
import { getBaseUrl } from '@starter-kit/utils/consts';

type Props = {
  title: string;
  src: string;
  slug?: string;
  priority?: boolean;
};

const CoverImage = ({ title, src, slug, priority = false }: Props) => {
  const postURL = `${getBaseUrl()}/${slug}`;

  const image = (
    <div className="relative pt-[52.5%]">
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className="w-full object-cover border rounded-md hover:opacity-90 dark:border-neutral-800"
        fill
        unoptimized
        priority={priority}
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
