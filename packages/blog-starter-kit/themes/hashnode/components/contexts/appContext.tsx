import React, { createContext, useContext } from 'react';
import { PostFullFragment, PublicationFragment } from '../../generated/graphql';

type AppContext = { publication: PublicationFragment; post: PostFullFragment | null, isUserThemeDark: boolean; };

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({
	children,
	publication,
	isUserThemeDark,
	post,
}: {
	children: React.ReactNode;
	publication: PublicationFragment;
	post?: PostFullFragment | null;
	isUserThemeDark?: boolean | false;
}) => {
	return (
		<AppContext.Provider
			value={{
				publication,
				post: post ?? null,
				isUserThemeDark: isUserThemeDark ?? false
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
