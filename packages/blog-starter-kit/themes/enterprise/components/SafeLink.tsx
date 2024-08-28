// src/components/SafeLink.tsx
import React from 'react';
import Link from 'next/link';
import { useExternalLink } from '../components/contexts/ExternalLinkContext';

type SafeLinkProps = React.ComponentProps<typeof Link> & {
    children: React.ReactNode;
  };
  
  const INTERNAL_DOMAINS = ['blog.temizmama.com', 'www.temizmama.com'];
  
  export const SafeLink: React.FC<SafeLinkProps> = ({ href, children, ...props }) => {
    const { showModal } = useExternalLink();
  
    const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
      const url = href.toString();
      const isExternal = !INTERNAL_DOMAINS.some(domain => url.includes(domain));
  
      if (isExternal) {
        e.preventDefault();
        showModal(url);
      }
    };
  
    return (
      <Link href={href} onClick={handleClick} {...props}>
        {children}
      </Link>
    );
  };