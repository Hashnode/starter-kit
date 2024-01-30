import Publication from "@/components/publication";
import SearchBlog from "@/components/search-blog";

export default function Home() {
  return (
    <div className="">
    <Publication host={process.env.NEXT_PUBLIC_HASHNODE_PUBLICATION_HOST} />
    </div>
  );
}