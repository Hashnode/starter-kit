import request from 'graphql-request';
import Link from 'next/link';
import { KeyboardEventHandler, useEffect, useRef, useState } from 'react';
import {
	SearchPostsOfPublicationDocument,
	SearchPostsOfPublicationQuery,
	SearchPostsOfPublicationQueryVariables,
} from '../generated/graphql';
import { useAppContext } from './contexts/appContext';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;
const NO_OF_SEARCH_RESULTS = 5;

type Post = SearchPostsOfPublicationQuery['searchPostsOfPublication']['edges'][0]['node'];

export const Search = () => {
	const { publication } = useAppContext();
	const componentRef = useRef<HTMLDivElement>(null)
	const searchInputRef = useRef<HTMLInputElement>(null);
	const timerRef = useRef<NodeJS.Timeout | null>(null);

	const [query, setQuery] = useState('');
	const [searchResults, setSearchResults] = useState<Post[]>([]);
	const [isSearching, setIsSearching] = useState(false);
	const resetInput = () => {
		if (!searchInputRef.current) return;
		searchInputRef.current.value = '';
		setQuery('');
	};

	const escapeSearchOnESC: KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Escape') {
			resetInput();
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
				className="flex flex-row items-center border-t-[1px] border-primary-100 gap-5 px-6 py-3 hover:bg-gray-100 transition-all duration-200 focus:outline-1 dark:hover:bg-neutral-800"
			>
				<div className="flex flex-col gap-1">
					<strong className="text-base text-justify">{post.title}</strong>
					<span className="text-slate-600 dark:text-neutral-300 text-justify">
						{post.brief.length > 140 ? post.brief.substring(0, 140) + '…' : post.brief}
					</span>
				</div>
				
			</Link>
		);
	});

	useEffect(() => {
		const handleClickOutside = (event : any) => {
		  if (componentRef.current && !componentRef.current.contains(event.target)) {
			resetInput();
		  }
		};
	
		document.addEventListener('click', handleClickOutside);
	
		return () => {
		  document.removeEventListener('click', handleClickOutside);
		};
	  }, []);

	return (
		<div ref = {componentRef} className="animate-up relative w-full max-w-[560px] mx-auto">
			<h3 className='text-center mb-4 text-3xl font-bold text-primary-950'>Search my articles...</h3>
			<input
				
				type="text"
				ref={searchInputRef}
				onFocus = {() => setIsSearching(true)}
				onKeyUp={escapeSearchOnESC}
				onChange={updateSearchQuery}
				placeholder="Search blog posts…"
				className="w-full text-lg rounded-md border border-slate-200  px-4 py-2 focus:bg-transparent dark:border-neutral-800 dark:bg-neutral-800 dark:text-neutral-50 dark:placeholder:text-neutral-400 dark:hover:bg-neutral-950"
			/>
			{query && (
				<>
					{isSearching && (
						<div className="top-100 absolute left-0 z-10 mt-1 flex w-full flex-col items-stretch overflow-hidden border bg-white p-1 text-left text-slate-900 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50">
							<div className="flex animate-pulse flex-col gap-1 p-4">
								<div className="h-8 w-full bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-full bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-2/3 bg-slate-100 dark:bg-neutral-800"></div>
							</div>
							<div className="flex animate-pulse flex-col gap-1 p-4">
								<div className="h-8 w-full bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-full bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-2/3 bg-slate-100 dark:bg-neutral-800"></div>
							</div>
							<div className="flex animate-pulse flex-col gap-1 p-4">
								<div className="h-8 w-full bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-full bg-slate-100 dark:bg-neutral-800"></div>
								<div className="h-4 w-2/3 bg-slate-100 dark:bg-neutral-800"></div>
							</div>
						</div>
					)}
					{searchResults.length > 0 && !isSearching && (
						<div className="top-100 max-h-[400px] overflow-y-scroll absolute left-0 z-10 mt-1 flex w-full flex-col items-stretch overflow-hidden border bg-white text-left text-slate-900 shadow-2xl dark:border-neutral-800 dark:bg-neutral-900 dark:text-neutral-50">
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
