import React, { useEffect, useState, useRef } from 'react';
import { Search } from './searchbar';

interface OverlaySearchProps {
  isVisible: boolean;
  onClose: () => void;
}

export const OverlaySearch: React.FC<OverlaySearchProps> = ({ isVisible, onClose }) => {
  const [wHeight, setWHeight] = useState(0);
  const searchRef = useRef<{ reset: () => void }>(null);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setWHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined') {
        setWHeight(window.innerHeight);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const form = document.getElementById('mk-fullscreen-searchform');
    if (form) {
      form.style.top = `${wHeight / 2}px`;
    }
  }, [wHeight, isVisible]);

  const handleClose = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (searchRef.current) {
      searchRef.current.reset();
    }
    onClose();
  };

  return (
    <div className={`mk-fullscreen-search-overlay ${isVisible ? 'mk-fullscreen-search-overlay-show' : ''}`}>
      <a href="#" className="mk-fullscreen-close" onClick={handleClose}>x<i className="fa fa-times"></i></a>
      <div id="mk-fullscreen-search-wrapper">
        <Search ref={searchRef} onClose={onClose} />
      </div>
    </div>
  );
};
