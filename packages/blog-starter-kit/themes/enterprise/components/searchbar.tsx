import React, { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import { resizeImage } from '@starter-kit/utils/image';
import request from 'graphql-request';
import Link from 'next/link';
import {
  SearchPostsOfPublicationDocument,
  SearchPostsOfPublicationQuery,
  SearchPostsOfPublicationQueryVariables,
} from '../generated/graphql';
import { DEFAULT_COVER } from '../utils/const';
import { useAppContext } from './contexts/appContext';
import { CoverImage } from './cover-image';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const RESULTS_PER_PAGE = 20;

type Post = SearchPostsOfPublicationQuery['searchPostsOfPublication']['edges'][0]['node'];

interface SearchProps {
  isOpen: boolean;
  onClose: () => void;
}

export const Search: React.FC<SearchProps> = ({ isOpen, onClose }) => {
  const { publication } = useAppContext();

  const searchInputRef = useRef<HTMLInputElement>(null);
  const searchResultsRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState<Post[]>([]);
  const [isSearching, setIsSearching] = useState(false);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [endCursor, setEndCursor] = useState<string | null>(null);

  const resetInput = () => {
    if (!searchInputRef.current) return;
    searchInputRef.current.value = '';
    setQuery('');
    setSearchResults([]);
    setHasNextPage(false);
    setEndCursor(null);
  };

  const escapeSearchOnESC: KeyboardEventHandler<HTMLInputElement> = (e) => {
    if (e.key === 'Escape') {
      resetInput();
      onClose();
    }
  };

  const updateSearchQuery = () => {
    const newQuery = searchInputRef.current?.value || '';
    setQuery(newQuery);
  };

  const search = async (query: string, after: string | null = null) => {
    if (timerRef.current) clearTimeout(timerRef.current);
    
    if (!query) {
      resetInput();
      return;
    }
    
    timerRef.current = setTimeout(async () => {
      setIsSearching(true);
    
      try {
        const data = await request<
          SearchPostsOfPublicationQuery,
          SearchPostsOfPublicationQueryVariables
        >(GQL_ENDPOINT, SearchPostsOfPublicationDocument, {
          first: RESULTS_PER_PAGE,
          after: after,
          filter: { query, publicationId: publication.id },
        });

        const newPosts = data.searchPostsOfPublication.edges.map((edge) => edge.node);
        setSearchResults(prev => after ? [...prev, ...newPosts] : newPosts);
        setHasNextPage(data.searchPostsOfPublication.pageInfo.hasNextPage);
        setEndCursor(data.searchPostsOfPublication.pageInfo.endCursor || null);
      } catch (error) {
        console.error('GraphQL request failed:', error);
        setSearchResults([]);
        setHasNextPage(false);
        setEndCursor(null);
      } finally {
        setIsSearching(false);
      }
    }, 500);
  };

  useEffect(() => {
    search(query);
  }, [query]);

  useEffect(() => {
    if (isOpen) {
      searchInputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen]);

  const loadMore = () => {
    if (hasNextPage && endCursor) {
      search(query, endCursor);
    }
  };

  const searchResultsList = searchResults.map((post) => {
    const postURL = `/${post.slug}`;

	return (
		<Link
		  key={post.id}
		  href={postURL}
		  className="flex flex-col md:flex-row items-center gap-5 px-4 py-2 hover:bg-slate-50 focus:outline-1 dark:hover:bg-neutral-800"
		>
		  <div className="w-full md:w-56 mb-4 md:mb-0">
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
		  <div className="flex flex-col gap-1 w-full md:w-auto">
			<strong className="text-base text-center md:text-left">{post.title}</strong>
			<span className="text-slate-600 dark:text-neutral-300 text-center md:text-left">
			  {post.brief.length > 140 ? post.brief.substring(0, 140) + '…' : post.brief}
			</span>
		  </div>
		</Link>
	  );
	});
  
	if (!isOpen) return null;
  
	return (
	  <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
		<div 
		  className="fixed inset-0 transition-opacity bg-gray-500 bg-opacity-75 backdrop-filter backdrop-blur-sm" 
		  aria-hidden="true" 
		  onClick={onClose}
		></div>
  
  		<div 
		  className="bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all w-[90%] md:w-[70%] max-w-[70rem]"
		style={{
		  maxHeight: '70vh',
		  overflow: 'scroll',
		}}
		>
		  <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4 h-full flex flex-col">
			<div className="flex justify-between items-center mb-4">
			  <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-title">
				{searchResults.length > 0 ? `${searchResults.length} sonuç bulundu` : 'Arama'}
			  </h3>
			  <button
				onClick={onClose}
				className="text-gray-400 hover:text-gray-500 focus:outline-none focus:text-gray-500 transition ease-in-out duration-150"
				aria-label="Close"
			  >
				<svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
				  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
				</svg>
			  </button>
			</div>
			<div className="mb-4">
			  <input
				type="text"
				ref={searchInputRef}
				onKeyUp={escapeSearchOnESC}
				onChange={updateSearchQuery}
				placeholder="Ara…"
				className="w-full rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-base dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"
				required
			  />
			</div>
			<div className="flex-grow overflow-y-auto">
			  {isSearching && searchResults.length === 0 ? (
				<div className="flex animate-pulse flex-col gap-1 p-4">
				  <div className="h-8 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
				  <div className="h-4 w-full rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
				  <div className="h-4 w-2/3 rounded-lg bg-slate-100 dark:bg-neutral-800"></div>
				</div>
			  ) : searchResults.length > 0 ? (
				<>
				  {searchResultsList}
				  {hasNextPage && (
					<button
					  onClick={loadMore}
					  className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 w-full"
					  disabled={isSearching}
					>
					  {isSearching ? 'Yükleniyor...' : 'Daha fazla yükle'}
					</button>
				  )}
				</>
			  ) : query && !isSearching ? (
				<p className="p-4 text-center text-slate-500 dark:text-neutral-400">Sonuç bulunamadı.</p>
			  ) : null}
			</div>
		  </div>
		</div>
	  </div>
	);
  };