import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo, useRef } from 'react'; // Import useRef

type Props = {
  contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });
  // Create a ref to store the reference to the div
  const contentRef = useRef<HTMLDivElement | null>(null); 

  return (
    <div
      className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
      dangerouslySetInnerHTML={{ __html: content }}
      ref={contentRef}  // Attach the ref to the div
    />
  );
};

export const MarkdownToHtml = memo(_MarkdownToHtml);
