import React, { createContext, useContext } from 'react';
import { Post, Publication } from '../../generated/graphql';

type AppContext = { publication: Publication; post: Post | null };

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({
	children,
	publication,
	post,
}: {
	children: React.ReactNode;
	publication: Publication;
	post?: Post;
}) => {
	return (
		<AppContext.Provider
			value={{
				publication,
				post: post ?? null,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

const useAppContext = () => {
	const context = useContext(AppContext);

	if (!context) {
		throw new Error('useAppContext must be used within a <AppProvider />');
	}

	return context;
};
export { AppProvider, useAppContext };
