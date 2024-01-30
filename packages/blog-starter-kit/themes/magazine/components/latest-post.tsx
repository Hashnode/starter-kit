import { getFormattedDate } from "@/lib/utils";
import Link from "next/link";

export default function LatestPost({ post, host }) {
  return (
    <Link href={`/publication/${host}/${post.slug}`}>
      <article className="mt-4">
        <h3 className="text-xl font-semibold">{post.title}</h3>
        <p className="text-gray-500">
          Posted on {getFormattedDate(post.publishedAt)}
        </p>
        <img
          alt="Cover image"
          className="object-cover mt-4 rounded-md xs:w-full sm:w-full md:w-2/3 lg:w-2/3 xl:w-1/2 2xl:w-1/3"
          src={post.coverImage?.url}
        />
        <p className="mt-4 text-gray-700">{post.brief}</p>
      </article>
    </Link>
  );
}