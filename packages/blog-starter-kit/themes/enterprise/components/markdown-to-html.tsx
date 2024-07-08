import React, { memo, useRef, useImperativeHandle, forwardRef } from 'react';
import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';

type Props = {
  contentMarkdown: string;
};

export type MarkdownToHtmlRef = {
  scrollToTop: () => void;
};

const _MarkdownToHtml = forwardRef<MarkdownToHtmlRef, Props>(({ contentMarkdown }, ref) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });
  
  const contentRef = useRef<HTMLDivElement | null>(null);

  useImperativeHandle(ref, () => ({
    scrollToTop: () => {
      contentRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }));

  return (
    <div
      className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
      dangerouslySetInnerHTML={{ __html: content }}
      ref={contentRef}
    />
  );
});

export const MarkdownToHtml = memo(_MarkdownToHtml);