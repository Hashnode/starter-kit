import React, { useEffect, useState } from 'react';
import '../styles/OverlaySearch.css';


export const OverlaySearch = ({ isVisible, onClose }) => {
  const [wHeight, setWHeight] = useState(window.innerHeight);

  useEffect(() => {
    const handleResize = () => setWHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
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
        <form method="get" id="mk-fullscreen-searchform" action="">
          <input type="text" value="" placeholder="Search..." id="mk-fullscreen-search-input" />
          <i className="fa fa-search fullscreen-search-icon">
            <input value="" type="submit" />
          </i>
        </form>
      </div>
    </div>
  );
};
