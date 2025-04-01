import React, { createContext, useEffect, useState } from 'react';
import { Themes } from '../types/data.types';

interface ContextProps {
	theme: Themes;
	setTheme: React.Dispatch<React.SetStateAction<Themes>>;
	objectThemes: { [k in Themes]: k };
}

const objectThemes: { [k in Themes]: k } = {
	dark: Themes.DARK,
	light: Themes.LIGHT,
	system: Themes.SYSTEM,
};

export const ThemeContext = createContext<ContextProps>({} as ContextProps);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
	const [theme, setTheme] = useState<Themes>(() => {
		const savedTheme = localStorage.getItem('theme');

		return savedTheme &&
			Object.keys(objectThemes).includes(savedTheme as Themes)
			? (savedTheme as Themes)
			: Themes.SYSTEM;
	});

	useEffect(() => {
		const root = document.documentElement;
		const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

		const applyTheme = () => {
			root.classList.remove('light', 'dark');

			if (theme === Themes.SYSTEM) {
				const systemTheme = mediaQuery.matches ? Themes.DARK : Themes.LIGHT;
				root.classList.add(systemTheme);
			} else {
				root.classList.add(theme);
			}

			localStorage.setItem('theme', theme);
		};

		applyTheme();
		const handleSystemThemeChange = () => {
			if (theme === Themes.SYSTEM) {
				applyTheme();
			}
		};

		mediaQuery.addEventListener('change', handleSystemThemeChange);
		return () =>
			mediaQuery.removeEventListener('change', handleSystemThemeChange);
	}, [theme]);

	return (
		<ThemeContext.Provider value={{ objectThemes, theme, setTheme }}>
			{children}
		</ThemeContext.Provider>
	);
};
