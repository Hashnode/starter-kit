// hooks/useArticleSafeLinks.ts
import { useState, useEffect } from 'react';
import { useExternalLink } from '../components/contexts/ExternalLinkContext';

const INTERNAL_DOMAINS = ['blog.temizmama.com', 'www.temizmama.com'];

export const useArticleSafeLinks = (content: string) => {
  const [safeContent, setSafeContent] = useState(content);
  const { showModal } = useExternalLink();

  useEffect(() => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, 'text/html');
    const links = doc.querySelectorAll('a');

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

    setSafeContent(doc.body.innerHTML);
  }, [content, showModal]);

  return safeContent;
};