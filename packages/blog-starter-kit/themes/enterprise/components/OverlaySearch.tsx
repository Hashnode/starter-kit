import React, { useEffect, useState } from 'react';
import { Search } from './searchbar';

interface OverlaySearchProps {
  isVisible: boolean;
  onClose: () => void;
}

export const OverlaySearch: React.FC<OverlaySearchProps> = ({ isVisible, onClose }) => {
  const [wHeight, setWHeight] = useState(0);

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

  return (
    <div className={`mk-fullscreen-search-overlay ${isVisible ? 'mk-fullscreen-search-overlay-show' : ''}`}>
      <a href="#" className="mk-fullscreen-close" onClick={onClose}><i className="fa fa-times"></i></a>
      <div id="mk-fullscreen-search-wrapper">
        <Search />
      </div>
    </div>
  );
};
