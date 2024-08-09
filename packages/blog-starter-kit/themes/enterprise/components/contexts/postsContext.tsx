import React, { createContext, useContext, useState } from 'react';
import { ViewType } from 'types/ViewType';

type PostsContext = {
	view: ViewType;
	toggle: () => void;
};

const PostsContext = createContext<PostsContext | null>(null);

const PostsProvider = ({ children }: { children: React.ReactNode }) => {
	const [view, setView] = useState<ViewType>(ViewType.LIST);

	const toggle = () => {
		setView(view === ViewType.LIST ? ViewType.GRID : ViewType.LIST);
	};

	return (
		<PostsContext.Provider
			value={{
				view,
				toggle,
			}}
		>
			{children}
		</PostsContext.Provider>
	);
};

const usePostsContext = () => {
	const context = useContext(PostsContext);

	if (!context) {
		throw new Error('usePostsContext must be used within a <AppProvider />');
	}

	return context;
};
export { PostsProvider, usePostsContext };
