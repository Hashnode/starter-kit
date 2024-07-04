import React, { createContext, useContext } from 'react';
import {
	PostFullFragment,
	PublicationFragment,
	SeriesPageInitialQuery,
	StaticPageFragment,
} from '../../generated/graphql';

type AppContext = {
	publication: PublicationFragment;
	post: PostFullFragment | null;
	page: StaticPageFragment | null;
	series: NonNullable<SeriesPageInitialQuery['publication']>['series'];
};

const AppContext = createContext<AppContext | null>(null);

const AppProvider = ({
	children,
	publication,
	post,
	page,
	series,
}: {
	children: React.ReactNode;
	publication: PublicationFragment;
	post?: PostFullFragment | null;
	page?: StaticPageFragment | null;
	series?: NonNullable<SeriesPageInitialQuery['publication']>['series'];
}) => {
	return (
		<AppContext.Provider
			value={{
				publication,
				post: post ?? null,
				page: page ?? null,
				series: series ?? null,
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
