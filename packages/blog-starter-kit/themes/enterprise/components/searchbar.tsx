import { useAppContext } from "./contexts/appContext";
import { useState, useRef, useEffect, KeyboardEventHandler } from "react";
import {
  Post
} from "../generated/graphql";
import CoverImage from "./cover-image";
import { resizeImage } from "@starter-kit/utils/image";
import { getBaseUrl } from "@starter-kit/utils/consts";

const DEFAULT_COVER =
  "https://cdn.hashnode.com/res/hashnode/image/upload/v1683525272978/MB5H_kgOC.png?auto=format";

const Search = () => {
  const { publication } = useAppContext();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [query, setQuery] = useState("");
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  const resetInput = () => {
    searchInputRef.current.value = "";
    setQuery("");
  }

  const escapeSearchOnESC: KeyboardEventHandler<HTMLInputElement> = e => {
    if (e.key === "Escape") {
      resetInput();
    }
  }

  const updateSearchQuery = () => {
    setQuery(searchInputRef.current?.value || "");
  };

  const search = async (query: string) => {
    if (!query) {
      setSearchResults([]);
      setIsSearching(false);
      return clearTimeout(timerRef.current);
    }

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = setTimeout(async () => {
      setIsSearching(true);

      const response = await fetch(
        `/api/search?q=${query}&publication=${publication.id}`
      );
      const posts = await response.json();

      setSearchResults(posts);
      setIsSearching(false);
    }, 500);
  };

  useEffect(() => {
    search(query);
  }, [query]);

  const searchResultsList = searchResults.map((post) => {
    const postURL = `${getBaseUrl()}/${post.slug}`;
    return (
      <a
        key={post.id}
        href={postURL}
        className="flex flex-row items-center gap-5 px-4 py-2 focus:outline-1 hover:bg-slate-50 dark:hover:bg-neutral-800"
      >
        <div className="flex flex-col gap-1">
          <strong className="text-base">{post.title}</strong>
          <span className="text-slate-600 dark:text-neutral-300">
            {post.brief.length > 140
              ? post.brief.substring(0, 140) + "…"
              : post.brief}
          </span>
        </div>
        <div className="w-56">
          <CoverImage
            title={post.title}
            src={
              resizeImage(post.coverImage?.url, {
                w: 400,
                h: 210,
                c: "thumb",
              }) || DEFAULT_COVER
            }
          />
        </div>
      </a>
    );
  });

  return (
    <div className="relative col-span-1">
      <input
        type="text"
        ref={searchInputRef}
        onKeyUp={escapeSearchOnESC}
        onChange={updateSearchQuery}
        placeholder="Search blog posts…"
        className="w-full px-4 py-2 text-base border rounded-full bg-slate-50 border-slate-200 dark:bg-neutral-800 focus:bg-transparent dark:border-neutral-800 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950 dark:text-neutral-50"
      />
      {query && (
        <>
          {isSearching && (
            <div className="absolute left-0 z-10 flex flex-col items-stretch w-full p-1 mt-1 overflow-hidden text-left bg-white border rounded-lg shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 text-slate-900 dark:text-neutral-50 top-100">
              <div className="flex flex-col gap-1 p-4 animate-pulse">
                <div className="w-full h-8 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="w-2/3 h-4 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
              </div>
              <div className="flex flex-col gap-1 p-4 animate-pulse">
                <div className="w-full h-8 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="w-2/3 h-4 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
              </div>
              <div className="flex flex-col gap-1 p-4 animate-pulse">
                <div className="w-full h-8 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="w-full h-4 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="w-2/3 h-4 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
              </div>
            </div>
          )}
          {searchResults.length > 0 && !isSearching && (
            <div className="absolute left-0 z-10 flex flex-col items-stretch w-full p-1 mt-1 overflow-hidden text-left bg-white border rounded-lg shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 text-slate-900 dark:text-neutral-50 top-100">
              <h3 className="px-4 py-2 font-medium text-slate-500 dark:text-neutral-400">
                Found {searchResults.length} results
              </h3>
              <hr className="dark:border-neutral-800" />
              {searchResultsList}
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default Search;
