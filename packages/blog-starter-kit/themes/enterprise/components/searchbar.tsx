import { resizeImage } from '@starter-kit/utils/image';
import request from 'graphql-request';
import Link from 'next/link';
import { KeyboardEventHandler, useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import {
  SearchPostsOfPublicationDocument,
  SearchPostsOfPublicationQuery,
  SearchPostsOfPublicationQueryVariables,
} from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';
import { useAppContext } from './contexts/appContext';
import { CoverImage } from './cover-image';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const NO_OF_SEARCH_RESULTS = 5;

type Post = SearchPostsOfPublicationQuery['searchPostsOfPublication']['edges'][0]['node'];

interface SearchProps {
  onClose: () => void;
}

export const Search = forwardRef(({ onClose }: SearchProps, ref) => {
  const { publication } = useAppContext();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState(false);

  useImperativeHandle(ref, () => ({
    reset: () => {
      resetInput();
    },
  }));

  const resetInput = () => {
    if (!searchInputRef.current) return;
    searchInputRef.current.value = '';
    setQuery('');
    setSearchResults([]);
  };

  const escapeSearchOnESC: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Escape') {
      resetInput();
      onClose();
    }
  };

  const updateSearchQuery = () => {
    setQuery(searchInputRef.current?.value || '');
  };

  const search = async (query: string) => {
    if (timerRef.current) clearTimeout(timerRef.current);

    if (!query) {
      setSearchResults([]);
      setIsSearching(false);
      return;
    }

    timerRef.current = setTimeout(async () => {
      setIsSearching(true);

      const data = await request<
        SearchPostsOfPublicationQuery,
        SearchPostsOfPublicationQueryVariables
      >(GQL_ENDPOINT, SearchPostsOfPublicationDocument, {
        first: NO_OF_SEARCH_RESULTS,
        filter: { query, publicationId: publication.id },
      });
      const posts = data.searchPostsOfPublication.edges.map((edge) => edge.node);
      setSearchResults(posts);
      setIsSearching(false);
    }, 500);
  };

  useEffect(() => {
    search(query);
  }, [query]);

  const searchResultsList = searchResults.map((post) => {
    const postURL = `/${post.slug}`;
    return (
      <Link
        key={post.id}
        href={postURL}
        className="flex flex-row items-center gap-5 px-4 py-2 hover:bg-slate-50 focus:outline-1 dark:hover:bg-neutral-800"
        onClick={() => {
          resetInput();
          onClose();
        }}
      >
        <div className="flex flex-col gap-1">
          <strong className="text-base">{post.title}</strong>
          <span className="text-slate-600 dark:text-neutral-300">
            {post.brief.length > 140 ? post.brief.substring(0, 140) + '…' : post.brief}
          </span>
        </div>
        <div className="w-56">
          <CoverImage
            title={post.title}
            src={resizeImage(
              post.coverImage?.url,
              {
                w: 400,
                h: 210,
                c: 'thumb',
              },
              DEFAULT_COVER,
            )}
          />
        </div>
      </Link>
    );
  });

  return (
    <div className="relative col-span-1">
      <form method="get" id="mk-fullscreen-searchform" className="absolute left-1/2 transform -translate-x-1/2" style={{ position: 'sticky', transform: 'translate(0, 300%)' }} action="">
        <input
          type="text"
          ref={searchInputRef}
          onKeyUp={escapeSearchOnESC}
          onChange={updateSearchQuery}
          placeholder="Ara…"
          className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-base dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"
          required
        />
        <i className="fa fa-search"></i>
      </form>
      {query && (
        <>
          {isSearching && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-0 flex w-full max-w-4xl flex-col items-stretch overflow-hidden rounded-lg border bg-white p-1 text-left text-slate-900 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50" style={{ 
				transform: 'translate(-50%, 10%)',
				width: 'max-content',
				height: 'max-content',
				position: 'fixed',
				top: '10rem',
				zIndex: '10',
				marginTop: '0',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'stretch',
				overflow: 'hidden',
				borderRadius: '0.5rem',
				border: '1px solid',
				padding: '1rem',
				textAlign: 'left',
				backgroundColor: 'white',
				boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
				}}>
              <div className="flex animate-pulse flex-col gap-1 p-4">
                <div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="h-4 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="h-4 w-2/3 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
              </div>
              <div className="flex animate-pulse flex-col gap-1 p-4">
                <div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="h-4 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="h-4 w-2/3 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
              </div>
              <div className="flex animate-pulse flex-col gap-1 p-4">
                <div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="h-4 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
                <div className="h-4 w-2/3 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
              </div>
            </div>
          )}
          {searchResults.length > 0 && !isSearching && (
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mt-0 flex w-full max-w-4xl flex-col items-stretch overflow-hidden rounded-lg border bg-white p-1 text-left text-slate-900 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50" style={{ 
							transform: 'translate(-50%, 10%)',
							width: 'max-content',
							height: 'max-content',
							position: 'fixed',
							top: '10rem',
							zIndex: '10',
							marginTop: '0',
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'stretch',
							overflow: 'hidden',
							borderRadius: '0.5rem',
							border: '1px solid',
							padding: '1rem',
							textAlign: 'left',
							backgroundColor: 'white',
							boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)'
							}}>
              <h3 className="px-4 py-2 font-medium text-slate-500 dark:text-neutral-400">
                {searchResults.length} sonuç bulundu
              </h3>
              <hr className="dark:border-neutral-800" />
              {searchResultsList}
            </div>
          )}
        </>
      )}
    </div>
  );
});
