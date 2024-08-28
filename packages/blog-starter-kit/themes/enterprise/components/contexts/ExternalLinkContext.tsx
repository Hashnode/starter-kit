// components/contexts/ExternalLinkContext.tsx
import React, { createContext, useState, useContext, ReactNode } from 'react';

type ExternalLinkContextType = {
  showModal: (url: string) => void;
  hideModal: () => void;
  modalUrl: string | null;
};

const ExternalLinkContext = createContext<ExternalLinkContextType | undefined>(undefined);

export const ExternalLinkProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  const showModal = (url: string) => setModalUrl(url);
  const hideModal = () => setModalUrl(null);

  // Server-side rendering için dummy provider
  if (typeof window === 'undefined') {
    return <>{children}</>;
  }

  return (
    <ExternalLinkContext.Provider value={{ showModal, hideModal, modalUrl }}>
      {children}
    </ExternalLinkContext.Provider>
  );
};

export const useExternalLink = () => {
  const context = useContext(ExternalLinkContext);
  if (context === undefined) {
    throw new Error('useExternalLink must be used within a ExternalLinkProvider');
  }
  return context;
};