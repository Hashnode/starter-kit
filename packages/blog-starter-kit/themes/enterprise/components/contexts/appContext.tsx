import React, { createContext, useContext, useState } from 'react';
import { Post, Publication } from '../../generated/graphql';

const appContext = createContext<{ publication: Publication; post: Post }>({
	publication: null,
	post: null,
});

const AppProvider = ({
	children,
	publication,
	post,
}: {
	children: React.ReactChild;
	publication: Publication;
	post?: Post;
}) => {
	const [_publication] = useState(publication);
	const [_post] = useState(post);

	return (
		<appContext.Provider
			value={{
				publication: _publication,
				post: _post,
			}}
		>
			{children}
		</appContext.Provider>
	);
};

const useAppContext = () => useContext(appContext);
export { AppProvider, useAppContext };
