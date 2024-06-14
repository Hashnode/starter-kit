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
    <div className="fixed right-4 bottom-4 flex items-center justify-center">
      <svg className="w-16 h-16" viewBox="0 0 36 36">
        <path
          className="text-gray-200"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831
            a 15.9155 15.9155 0 0 1 0 -31.831"
          fill="none"
          strokeWidth="2"
        />
        <path
          className="text-blue-500"
          d="M18 2.0845
            a 15.9155 15.9155 0 0 1 0 31.831"
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${scrollPercentage}, 100`}
        />
      </svg>
      <a href="#head" id="cta" onClick={scrollToTop} className="absolute flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg">
        <span className="sr-only">Yukarı</span>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
        </svg>
      </a>
    </div>
  );
};

export default CircularProgressBar;
