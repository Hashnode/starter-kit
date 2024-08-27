// utils/externalLinkHandler.ts
import { useState, useEffect } from 'react';

const internalDomains = ['blog.temizmama.com', 'www.temizmama.com'];

export const useExternalLinkHandler = () => {
  const [modalUrl, setModalUrl] = useState<string | null>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const link = target.closest('a');
      if (!link) return;

      const href = link.getAttribute('href');
      if (!href) return;

      console.log('Clicked link:', href); // Debug için

      // Aynı origin'deki linkler için kontrol
      if (href.startsWith('/') || href.startsWith('#') || href.startsWith('javascript:')) {
        console.log('Internal link, allowing default behavior');
        return; // Bu durumda normal davranışa izin ver
      }

      try {
        const url = new URL(href, window.location.origin);
        const isExternal = !internalDomains.some(domain => url.hostname.includes(domain));

        if (isExternal) {
          event.preventDefault();
          console.log('External link detected, showing modal');
          setModalUrl(href);
        } else {
          console.log('Internal link, allowing default behavior');
        }
      } catch (error) {
        console.error('Error parsing URL:', error);
      }
    };

    document.addEventListener('click', handleClick);
    return () => document.removeEventListener('click', handleClick);
  }, []);

  const hideModal = () => setModalUrl(null);

  return { modalUrl, hideModal };
};