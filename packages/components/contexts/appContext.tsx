import React, { createContext, useState, useContext } from "react";
import type PublicationType from "@starter-kit/interfaces/publication";

const appContext = createContext<{ publication: PublicationType }>({
    publication: null
});

const AppProvider = ({ children, publication }: { children: React.ReactChild; publication: PublicationType }) => {
    const [_publication, _] = useState(publication);

    return (
        <appContext.Provider value={{
            publication: _publication
        }}>
            {children}
        </appContext.Provider>
    );
}

const useAppContext = () => useContext(appContext);
export { AppProvider, useAppContext }