
import { useRef, useState } from 'react';
import { useAppContext } from './contexts/appContext';
import SearchBar from './search-bar';
import SearchSVG from './icons/svgs/SearchSvg';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const HeaderTitle = () => {
	const { publication } = useAppContext();
 
	
	return (
		<>
           <SearchBar publication={publication} />
            {/* <SearchSVG className="h-6 w-6 stroke-current ml-2" />
              */}	
		</>
	);
};
