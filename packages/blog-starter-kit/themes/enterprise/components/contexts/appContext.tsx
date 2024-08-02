import React, { createContext, useContext } from 'react';
import {
  PostFullFragment,
  PublicationFragment,
  SeriesPostsByPublicationQuery,
  StaticPageFragment,
} from '../../generated/graphql';

type AppContext = {
  publication: PublicationFragment;
  post: PostFullFragment | null;
  page: StaticPageFragment | null;
  series: NonNullable<SeriesPostsByPublicationQuery['publication']>['series'] | null;
};

const AppContext = createContext<AppContext | null>(null);

export const AppProvider: React.FC<{
  children: React.ReactNode;
  publication: PublicationFragment;
  post?: PostFullFragment | null;
  page?: StaticPageFragment | null;
  series?: NonNullable<SeriesPostsByPublicationQuery['publication']>['series'] | null;
}> = ({ children, publication, post, page, series }) => {
  const value: AppContext = {
    publication,
    post: post ?? null,
    page: page ?? null,
    series: series ?? null,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export const useAppContext = () => {
  const context = useContext(AppContext);

  if (!context) {
    // Opsiyonel: Varsayılan bir değer döndürebilirsiniz
    return {
      publication: {} as PublicationFragment,
      post: null,
      page: null,
      series: null,
    };
  }

  return context;
};