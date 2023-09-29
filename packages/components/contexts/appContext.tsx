import React, { createContext, useState, useContext } from "react";
import type PublicationType from "@starter-kit/interfaces/publication";
import PostType from "@starter-kit/interfaces/post";

const appContext = createContext<{ publication: PublicationType, post: PostType }>({
    publication: null,
    post: null
});

const AppProvider = ({ children, publication, post }: { children: React.ReactChild; publication: PublicationType, post?: PostType }) => {
    const [_publication] = useState(publication);
    const [_post,] = useState(post);

    return (
        <appContext.Provider value={{
            publication: _publication,
            post: _post
        }}>
            {children}
        </appContext.Provider>
    );
}

const useAppContext = () => useContext(appContext);
export { AppProvider, useAppContext }