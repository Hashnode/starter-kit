import { useEmbeds } from '@starter-kit/utils/renderer/hooks/useEmbeds';
import { markdownToHtml } from '@starter-kit/utils/renderer/markdownToHtml';
import { memo, useRef, useEffect } from 'react';
import { useExternalLink } from '../components/contexts/ExternalLinkContext';

const INTERNAL_DOMAINS = ['blog.temizmama.com', 'www.temizmama.com'];

type Props = {
  contentMarkdown: string;
};

const _MarkdownToHtml = ({ contentMarkdown }: Props) => {
  const content = markdownToHtml(contentMarkdown);
  useEmbeds({ enabled: true });
  const contentRef = useRef<HTMLDivElement | null>(null);
  const { showModal } = useExternalLink();

  useEffect(() => {
    if (contentRef.current) {
      const links = contentRef.current.querySelectorAll('a');
      links.forEach((link) => {
        const href = link.getAttribute('href');
        if (href) {
          const isExternal = !INTERNAL_DOMAINS.some(domain => href.includes(domain));
          if (isExternal) {
            link.addEventListener('click', (e) => {
              e.preventDefault();
              showModal(href);
            });
          }
        }
      });
    }
  }, [content, showModal]);

  return (
    <div
      className="hashnode-content-style mx-auto w-full px-5 md:max-w-screen-md"
      dangerouslySetInnerHTML={{ __html: content }}
      ref={contentRef}
    />
  );
};

export const MarkdownToHtml = memo(_MarkdownToHtml);