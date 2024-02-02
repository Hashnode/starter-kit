/* eslint-disable no-nested-ternary */
import { useState, useRef } from 'react';
import dynamic from 'next/dynamic';
import CommonHeaderIconBtn from './common-header-icon-btn';
import { Preferences, Publication, PublicationNavbarItem, User } from '../generated/graphql';
import SearchSVG from './icons/svgs/SearchSvg';

const PublicationSearch = dynamic(() => import('./publication-search'), { ssr: false });

interface Props {
  publication: Pick<Publication, 'id' | 'title' | 'url' | 'isTeam' | 'favicon' | 'links'> & {
    author: Pick<User, 'id' | 'username' | 'name' | 'profilePicture'>;
  } & {
    preferences: Omit<Preferences, 'navbarItems'> & {
      navbarItems: Array<Omit<PublicationNavbarItem, 'series'>>;
    };
  };
}

const SearchBar = (props: Props) => {
  const { publication } = props;

  const [isSearchUIVisible, toggleSearchUIState] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const toggleSearchUI = () => {
    toggleSearchUIState(!isSearchUIVisible);
  };

  return (
    <>
      {isSearchUIVisible ? (
        <PublicationSearch publication={publication} toggleSearchUI={toggleSearchUI} triggerRef={triggerRef} />
      ) : null}
      <CommonHeaderIconBtn
        handleClick={toggleSearchUI}
        variant="search"
        btnRef={triggerRef}
      >
        <input
		type="text"
		placeholder="               Search posts,tags"
		className="focus:outline-primary-600 dark:focus:outline-primary-500  top-3 w-full rounded-full p-3 text-base text-black outline-none dark:bg-neutral-950 dark:text-neutral-50"
		/>
      </CommonHeaderIconBtn>
    </>
  );
};

export default SearchBar;
