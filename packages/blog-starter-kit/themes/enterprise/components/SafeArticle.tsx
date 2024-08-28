// components/SafeArticle.tsx
import React from 'react';
import { useArticleSafeLinks } from '../hooks/useArticleSafeLinks';

interface SafeArticleProps {
  content: string;
}

export const SafeArticle: React.FC<SafeArticleProps> = ({ content }) => {
  const safeContent = useArticleSafeLinks(content);

  return (
    <article dangerouslySetInnerHTML={{ __html: safeContent }} />
  );
};