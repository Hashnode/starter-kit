import React, { useState, useEffect } from 'react';

const CircularProgressBar: React.FC = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const windowHeight = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / windowHeight) * 100;

    setScrollPercentage(scrollPercentage);

    // Show the button when user has scrolled down 01% of the page
    setIsVisible(scrollTop > windowHeight * 0.01);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!isVisible) {
    return null;
  }

  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center select-none">
      <button
        onClick={scrollToTop}
        className="relative flex items-center justify-center bg-white rounded-full w-12 h-12 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-opacity duration-300"
        aria-label="Sayfanın başına dön"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m4.5 15.75 7.5-7.5 7.5 7.5"
          />
        </svg>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-sm text-black font-bold bottom-2">
          {Math.round(scrollPercentage)}
        </div>
      </button>
    </div>
  );
};

export default CircularProgressBar;