import React from 'react';
import Link, { LinkProps } from 'next/link';
import { useExternalLink } from '../components/contexts/ExternalLinkContext';

type SafeLinkProps = Omit<LinkProps, 'href'> & {
  href: string;
  children: React.ReactNode;
};

const INTERNAL_DOMAINS = ['blog.temizmama.com', 'www.temizmama.com'];

export const SafeLink: React.FC<SafeLinkProps> = ({ href, children, ...props }) => {
  const { showModal } = useExternalLink();

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    const isExternal = !INTERNAL_DOMAINS.some(domain => href.includes(domain));

    if (isExternal) {
      e.preventDefault();
      showModal(href);
    }
  };

  return (
    <Link href={href} {...props} onClick={handleClick}>
      {children}
    </Link>
  );
};