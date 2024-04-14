//components/theme-switcher.tsx
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import MoonSVG from './icons/svgs/MoonSVG';
import SunSVG from './icons/svgs/SunSVG';

const ThemeSwitch = () => {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
     <>
       <button 
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
            <SunSVG className="h-[1.5rem] w-[1.3rem] dark:hidden" />
            <MoonSVG className="hidden h-5 w-5 dark:block" />
            <span className="sr-only">Toggle theme</span>
        </button>
     </>
    );
};

export default ThemeSwitch;
