// components/ProgressBar.tsx
import { useState, useEffect } from 'react';

const ProgressBar = () => {
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

  return (
    <div className="fixed right-0 top-0 h-full w-2 bg-gray-200">
      <div
        className="bg-blue-500 h-full"
        style={{ height: `${scrollPercentage}%` }}
      ></div>
      <div className="fixed right-4 top-2 text-black bg-white rounded px-2 py-1">
        {scrollPercentage.toFixed(0)}%
      </div>
    </div>
  );
};

export default ProgressBar;
