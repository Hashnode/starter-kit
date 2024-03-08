import { useEffect, useRef, useState, MutableRefObject } from 'react';
import dayjs from 'dayjs';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { twJoin, twMerge } from 'tailwind-merge';
import { useQuery } from 'urql';
import { Waypoint } from 'react-waypoint';
import localizedFormat from 'dayjs/plugin/localizedFormat';

import SearchSVG from './icons/svgs/SearchSvg';
import RefreshSVG from './icons/svgs/RefreshSVG';
import CloseSVG from './icons/svgs/CloseSVG';
import CustomImage from './custom-image';

import { Publication, SearchPostsOfPublicationDocument } from '../generated/graphql';
import { inputText } from '../utils/const/styles';
import { resizeImage, getBlurHash } from '../utils/image';
import { blurActiveFocus, returnFocusToElement } from '../utils/commonUtils';


import { blurImageDimensions } from '../utils/const/images';
import CustomScrollArea from './scroll-area';


dayjs.extend(localizedFormat);

const LoadingComponent = () => (
  <div className="border-b bg-white px-8 py-6 dark:border-slate-800 dark:bg-slate-900">
    <div className="mb-2 h-4 w-2/3 rounded-lg bg-slate-200 dark:bg-slate-700" />
    <div className="mb-2 h-4 w-1/3 rounded-lg bg-slate-200 dark:bg-slate-700" />
    <div className="mb-2 h-4 w-1/3 rounded-lg bg-slate-200 dark:bg-slate-700" />
  </div>
);

const SearchResultsLoader = ({ count }: { count: number }) => (
  <div className="animate-pulse">
    {Array(count)
      .fill(0)
      .map((_, i) => (
        <LoadingComponent key={i} />
      ))}
  </div>
);

type Props = {
  publication: Pick<Publication, 'id' | 'url'>;
  toggleSearchUI: () => void;
  triggerRef: MutableRefObject<HTMLButtonElement | null>;
};

const PublicationSearch = (props: Props) => {
  let timeoutHandler: any;
  const { publication, toggleSearchUI, triggerRef } = props;

  const [searchActive, setSearchActive] = useState(false);
  const [after, setAfter] = useState<string | null>(null);
  const [isMounted, setIsMounted] = useState(false);
  const [searchKey, setSearchKey] = useState('');
  const searchField = useRef<HTMLInputElement>(null);

  const [{ data: _publicationSearchResults, fetching, error, operation }] = useQuery({
    query: SearchPostsOfPublicationDocument,
    variables: {
      first: searchKey.length > 0 ? 10 : 0,
      after,
      filter: {
        publicationId: publication.id,
        query: searchKey,
      },
    },
    // don't fire query until user types atleast once
    pause: !searchActive,
  });

  const { searchPostsOfPublication } = _publicationSearchResults || {
    searchPostsOfPublication: {
      edges: [],
      pageInfo: {
        hasNextPage: false,
        endCursor: null,
      },
    },
  };

  const { pageInfo, edges } = searchPostsOfPublication;
  const publicationSearchResults = edges;

  const isInputEmpty = searchKey.length === 0;
  const isResultEmpty = !isInputEmpty && publicationSearchResults.length === 0;
  const isLoading = fetching && !isInputEmpty;
  const isLoadingMore = fetching && !isInputEmpty && !isResultEmpty;
  const isEndOfFeed = !isLoading && !isResultEmpty && !isInputEmpty && !pageInfo.hasNextPage;
  const shouldRenderResult = operation?.variables.filter.query === searchKey && !isInputEmpty;

  // eslint-disable-next-line no-console
  if (error) console.log(error);

  const handleSearch = async () => {
    if (!searchField || !searchField.current) {
      return;
    }
    const value = searchField?.current.value;

    const isEmpty = value.trim().length === 0;

    if (!isEmpty) {
      if (searchField && searchField.current) {
        setSearchKey(searchField.current?.value);
        setAfter(null);
      }
      if (!searchActive) setSearchActive(true);
    }
  };

  const onKeywordChange = () => {
    if (searchActive && searchField && searchField.current && searchField.current.value.trim().length === 0) {
      setSearchActive(false);
      setSearchKey('');
      setAfter(null);
      return;
    }

    if (timeoutHandler) {
      clearTimeout(timeoutHandler);
    }
    timeoutHandler = setTimeout(handleSearch, 300);
  };

  const resetResults = () => {
    setSearchActive(false);
    setAfter(null);
    setSearchKey('');
    if (searchField.current) {
      searchField.current.value = '';
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const fetchMore = () => {
    setAfter(searchPostsOfPublication?.pageInfo?.endCursor || null);
  };

  return (
    <DialogPrimitive.Root open>
      <DialogPrimitive.Portal>
        <DialogPrimitive.Overlay
          className={twJoin(
            'fixed inset-0 z-50 flex flex-row items-start justify-center bg-slate-900 opacity-0 transition-opacity duration-300 ease-out dark:bg-slate-600',
            isMounted && 'opacity-50',
          )}
        />
        <DialogPrimitive.Content
          onEscapeKeyDown={() => {
            blurActiveFocus();
            toggleSearchUI();
            returnFocusToElement(triggerRef);
          }}
          onCloseAutoFocus={() => returnFocusToElement(triggerRef)}
          onPointerDownOutside={() => {
            blurActiveFocus();
            toggleSearchUI();
          }}
          className={twJoin(
            'fixed left-0 right-0 top-0 z-50 mx-2 mt-32 flex max-w-[1200px] flex-col items-center overflow-hidden rounded-2xl border-slate-200 bg-white p-6 shadow-md dark:border-slate-800 dark:bg-slate-900 md:mx-8 lg:mx-auto lg:w-3/4 xl:w-2/3',
            (isInputEmpty || isResultEmpty) && !isLoading ? 'md:max-h-50 max-h-40' : 'h-2/3',
          )}
        >
          <div className="relative mb-2 w-full md:mb-4">
            <input
              ref={searchField}
              onChange={onKeywordChange}
              type="text"
              className={twMerge(inputText, 'rounded-full px-6 py-3')}
              placeholder={fetching ? 'Searching...' : 'Start typing to search'}
            />
            {fetching ? (
              <RefreshSVG className="absolute bottom-0 right-0 top-0 my-auto mr-16 h-5 w-5 animate-hn-spin fill-current text-slate-500 dark:text-slate-200" />
            ) : null}
            {searchActive ? (
              <button
                aria-label="Clear search results"
                type="button"
                className="absolute bottom-1/2 right-4 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                onClick={resetResults}
              >
                <CloseSVG className="h-5 w-5 fill-current text-slate-500 dark:text-slate-200" />
              </button>
            ) : null}
          </div>
          <div className="relative w-full">
            {isInputEmpty && (
              <div className="my-4 flex flex-row items-center justify-center text-slate-500 dark:text-slate-300">
                <SearchSVG className="mr-2.5 h-5 w-5 stroke-current" />
                <DialogPrimitive.Title className="font-normal">Search articles from this blog</DialogPrimitive.Title>
              </div>
            )}
            {!isLoading && isResultEmpty ? (
              <div className="my-4 flex flex-row items-center justify-center text-slate-500 dark:text-slate-300">
                <SearchSVG className="mr-4 h-5 w-5 stroke-current" />
                <p>No articles found</p>
              </div>
            ) : null}
          </div>
          <CustomScrollArea>
            <div className="mt-2 rounded-xl bg-white pb-10 dark:bg-slate-900 md:mt-5">
              {isLoading && isResultEmpty && <SearchResultsLoader count={4} />}
              {shouldRenderResult &&
                publicationSearchResults.map((item, index: number) => {
                  const post = item.node;
                  const postURL = post.url;
                  const pubOrigin = post.publication?.url.replace('https://', '').replace('http://', '');

                  return (
                    <a
                      tabIndex={0}
                      data-testid="blog-search-result"
                      href={postURL!}
                      key={post.id}
                      className="block px-2 hover:bg-slate-100 focus:bg-slate-100 focus:outline-none dark:border-slate-800 dark:hover:bg-slate-800 dark:focus:bg-slate-800"
                    >
                      <div
                        className={twJoin(
                          'flex flex-col items-start justify-between py-8 dark:border-slate-700 md:flex-row md:py-5',
                          index !== publicationSearchResults.length - 1 ? 'border-b' : '',
                        )}
                      >
                        <div className="md:mr-4">
                          <h1 className="mb-2 break-words text-2xl font-bold leading-snug tracking-tight text-slate-900 hn-break-words dark:text-slate-300">
                            {post.title}
                          </h1>
                          <div className="mb-4 flex flex-row flex-wrap items-center font-medium text-slate-500 dark:text-slate-400">
                            <p className="inline-block">{post?.author?.name || 'Anonymous'}</p>
                            <span className="mx-2 inline-block font-bold opacity-50">&middot;</span>
                            <p className="inline-block">{pubOrigin}</p>
                          </div>
                          <div className="mb-4 flex flex-row items-center text-slate-500 dark:text-slate-400">
                            <p className="inline-block">{dayjs(post.publishedAt).format('LL')}</p>
                            {post.reactionCount > 0 && (
                              <>
                                <span className="mx-2 inline-block font-bold opacity-50">&middot;</span>
                                <p className="inline-block">
                                  {post.reactionCount} Reaction{post.reactionCount === 1 ? '' : 's'}
                                </p>
                              </>
                            )}
                          </div>
                        </div>

                        <div
                          className={twJoin(
                            'w-full shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-slate-900 md:w-64',
                            post.coverImage && post.coverImage.url.includes('cdn.hashnode.com')
                              ? 'border dark:border-slate-800'
                              : '',
                          )}
                        >
                          {post.coverImage && post.coverImage.url.includes('cdn.hashnode.com') ? (
                            <CustomImage
                              originalSrc={post.coverImage.url}
                              src={resizeImage(post.coverImage.url, { w: 1600, h: 840, c: 'thumb' })}
                              width={800}
                              height={420}
                              layout="responsive"
                              objectFit="contain"
                              blurDataURL={getBlurHash(
                                resizeImage(post.coverImage.url, { ...blurImageDimensions, c: 'thumb' }),
                              )}
                              alt={post.title}
                            />
                          ) : null}
                        </div>
                      </div>
                    </a>
                  );
                })}
              {isLoadingMore && (
                <div className="mb-5 w-full text-2xl font-medium text-slate-500">
                  <SearchResultsLoader count={4} />
                </div>
              )}
              {!fetching && !isResultEmpty && pageInfo?.hasNextPage && <Waypoint onEnter={fetchMore} topOffset="-5%" />}
              {isEndOfFeed && (
                <div className="self-center py-6 text-center font-heading font-semibold text-slate-700 dark:text-slate-300">
                  <p className="text-md">You&apos;ve reached the end! 👋</p>
                </div>
              )}
            </div>
          </CustomScrollArea>
        </DialogPrimitive.Content>
      </DialogPrimitive.Portal>
    </DialogPrimitive.Root>
  );
};

export default PublicationSearch;
