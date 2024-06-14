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
    <div className="fixed right-0 top-0 h-full w-12 bg-gray-200 flex flex-col items-center justify-center">
      <div className="fixed right-4 top-2 text-black bg-white rounded px-2 py-1">
        {scrollPercentage.toFixed(0)}%
      </div>
      <div className="h-full w-2 bg-gray-200">
        <div
          className="bg-blue-500"
          style={{ height: `${scrollPercentage}%`, width: '100%' }}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
