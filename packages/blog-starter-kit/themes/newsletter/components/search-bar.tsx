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
    <div className=" p-4 "> {/* Add "rounded-full" class for rounded corners */}
      {isSearchUIVisible ? (
        <PublicationSearch publication={publication} toggleSearchUI={toggleSearchUI} triggerRef={triggerRef} />
      ) : null}
      <CommonHeaderIconBtn
        handleClick={toggleSearchUI}
        variant="search"
        btnRef={triggerRef}
      >  
        <div className="relative flex items-center">
          
        <input
          type="text"
          placeholder="Search posts, tags"
          className="focus:outline-primary-800 dark:focus:outline-primary-500 top-3 w-full rounded-full p-4 text-base text-black outline-none bg-gray-100 dark:bg-gray-950 dark:text-neutral-50" 
          
        />
        <button className="bg-primary-600 dark:bg-primary-600 absolute right-3 top-3 rounded-full px-3 py-2 text-white disabled:cursor-not-allowed disabled:opacity-80">
          Search
				</button>
        </div>
      </CommonHeaderIconBtn>
    </div>
  );
      };  
export default SearchBar;
