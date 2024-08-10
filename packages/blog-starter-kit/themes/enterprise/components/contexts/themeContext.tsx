import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

type ThemeContextType = {
	theme: Theme;
	toggleTheme: () => void;
};

const ThemeContext = createContext<ThemeContextType | null>(null);

const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Theme>('light');

	useEffect(() => {
		// Check the user's preference on first load
		const storedTheme = localStorage.getItem('theme') as Theme | null;
		if (storedTheme) {
			setTheme(storedTheme);
			document.documentElement.classList.add(storedTheme);
		} else {
			const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
			if (prefersDark) {
				setTheme('dark');
				document.documentElement.classList.add('dark');
			}
		}
	}, []);

	const toggleTheme = () => {
		const newTheme = theme === 'dark' ? 'light' : 'dark';
		setTheme(newTheme);
		document.documentElement.classList.remove(theme);
		document.documentElement.classList.add(newTheme);
		localStorage.setItem('theme', newTheme);
	};

	return (
		<ThemeContext.Provider
			value={{
				theme,
				toggleTheme,
			}}
		>
			{children}
		</ThemeContext.Provider>
	);
};

const useThemeContext = () => {
	const context = useContext(ThemeContext);

	if (!context) {
		throw new Error('useThemeContext must be used within a <ThemeProvider />');
	}

	return context;
};

export { ThemeProvider, useThemeContext };
