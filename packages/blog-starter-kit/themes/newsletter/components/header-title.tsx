
import { useRef, useState } from 'react';
import { useAppContext } from './contexts/appContext';
import SearchBar from './search-bar';
import SearchSVG from './icons/svgs/SearchSvg';
import PublicationMeta from '../components/publication-meta';
import { twJoin } from 'tailwind-merge';

const GQL_ENDPOINT = process.env.NEXT_PUBLIC_HASHNODE_GQL_ENDPOINT;

export const HeaderTitle = () => {
	const { publication } = useAppContext();
    const { author, preferences } = publication;
 
	
	return (
		<>
           
           {publication.about?.html ? (
    <div className="blog-author-container border-b dark:border-slate-800">
        
        <div
            className={twJoin(
                'blog-author-area feed-width mx-auto md:w-3/4 lg:w-2/3',
                preferences.layout === 'grid' ? '' : 'px-4 lg:px-8',
                'flex flex-col items-center', // Center items vertically and horizontally
            )}
        >   
            <PublicationMeta
             author={author}
             aboutHTML={publication.about.html}
             isTeam={publication.isTeam}
            />
            <SearchBar publication={publication}  />
             {/* Add margin-top to create space between PublicationMeta and SearchBar */}
        </div>
    </div>
    
) : null}

            {/* <SearchSVG className="h-6 w-6 stroke-current ml-2" />
              */}	
		</>
	);
};
