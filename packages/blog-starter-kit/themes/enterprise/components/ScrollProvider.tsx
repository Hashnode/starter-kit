// components/ScrollProvider.tsx
import { useEffect } from 'react';

const ScrollProvider = ({ children }) => {
  useEffect(() => {
    let isScrolling;
    
    const handleScroll = () => {
      window.clearTimeout(isScrolling);
  
      isScrolling = setTimeout(() => {
        let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        let scrollTarget = scrollTop;
  
        const step = () => {
          let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
          if (Math.abs(scrollTarget - currentScroll) > 1) {
            window.scrollTo(0, currentScroll + (scrollTarget - currentScroll) / 10);
            requestAnimationFrame(step);
          }
        };
  
        requestAnimationFrame(step);
      }, 100);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return <>{children}</>;
};

export default ScrollProvider;
