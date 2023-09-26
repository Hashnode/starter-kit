// import Image from "next/image";
// import Link from "next/link";
import { useAppContext } from "./contexts/appContext";
import { useState, useRef } from "react";
import PostType from "./interfaces/post";

const Search = () => {
  const { publication } = useAppContext();
  const searchInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);
  const [searchResults, setSearchResults] = useState<PostType[]>([]);

  const search = async () => {
    const query = searchInputRef.current?.value;

    if (!query) {
      setSearchResults([]);
      return clearTimeout(timerRef.current);
    }

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      const response = await fetch(
        `/api/search?q=${query}&publication=${publication.id}`
      );
      const posts = await response.json();
      setSearchResults(posts);
    }, 500);
  };

  const searchResultsList = searchResults.map((post) => {
    const postURL = `${
      process.env.NEXT_PUBLIC_MODE === "development" ? "http://" : "https://"
    }${process.env.NEXT_PUBLIC_BASE_URL}/${post.slug}`;
    return (
      <a
        key={post.id}
        href={postURL}
        className="flex flex-col gap-1 px-4 py-2 focus:outline-1 hover:bg-slate-50 dark:hover:bg-neutral-800"
      >
        <strong>{post.title}</strong>
        <span className="text-slate-600 dark:text-neutral-300">
          {post.brief}
        </span>
      </a>
    );
  });

  return (
    <div className="relative col-span-1">
      <input
        ref={searchInputRef}
        onChange={search}
        type="text"
        placeholder="Search posts…"
        className="w-full px-4 py-2 border rounded-full bg-slate-50 border-slate-200 dark:bg-neutral-800 focus:bg-transparent dark:border-neutral-800 dark:hover:bg-neutral-950 dark:text-neutral-50"
      />
      {searchResults.length > 0 && <div className="absolute left-0 z-10 flex flex-col items-start w-full p-1 mt-1 overflow-hidden text-left bg-white border rounded-lg shadow-lg dark:border-neutral-800 dark:bg-neutral-900 text-slate-900 dark:text-neutral-50 top-100">
        {searchResultsList}
      </div>}
    </div>
  );
};

export default Search;
