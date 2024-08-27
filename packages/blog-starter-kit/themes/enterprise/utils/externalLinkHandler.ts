// utils/externalLinkHandler.ts
import { useState, useEffect } from 'react';

const internalDomains = ['example.com', 'www.example.com']; // Kendi domainlerinizi ekleyin

export const useExternalLinkHandler = () => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      const isExternal = !internalDomains.some(domain => href.includes(domain));
      if (isExternal && !href.startsWith('#') && !href.startsWith('javascript:')) {
        event.preventDefault();
        setModalUrl(href);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const hideModal = () => setModalUrl(null);

  return { modalUrl, hideModal };
};