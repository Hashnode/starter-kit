// components/CircularProgressBar.tsx
import { useState, useEffect } from 'react';

const CircularProgressBar = () => {
  const [scrollPercentage, setScrollPercentage] = useState(0);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;
    const windowHeight = scrollHeight - clientHeight;
    const scrollPercentage = (scrollTop / windowHeight) * 100;

    setScrollPercentage(scrollPercentage);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed right-4 bottom-4 flex items-center justify-center select-none">
      <a
        href="__next"
        id="cta"
        onClick={scrollToTop}
        className="justify-center bg-white rounded-full"
      >
        <span className="sr-only">Yukarı</span>
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
        <div className="absolute top-1/2 transform -translate-y-1/2 text-sm text-black font-bold" id="circusll">
          {Math.round(scrollPercentage)}
        </div>
      </a>
    </div>
  );
};

export default CircularProgressBar;