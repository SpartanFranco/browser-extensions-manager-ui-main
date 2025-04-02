import * as motion from 'motion/react-client';
import { useContext } from 'react';
import { ThemeContext } from '../../context/theme-context';
import { Themes } from '../../types/data.types';
import moon from '/images/icon-moon.svg';
import sun from '/images/icon-sun.svg';

export const ButtonTheme = () => {
	const { setTheme, theme } = useContext(ThemeContext);
	const toggleTheme = () => {
		setTheme((current) => {
			if (current === Themes.LIGHT) return Themes.DARK;

			return Themes.LIGHT;
		});
	};
	return (
		<button
			onClick={toggleTheme}
			aria-label='Toggle dark mode'
			className='cursor-pointer rounded-md bg-(--Neutral-100) px-3 py-2 hover:bg-(--Neutral-300) dark:bg-(--Neutral-700) dark:hover:bg-(--Neutral-600)'
		>
			<motion.img
				src={theme === Themes.DARK ? sun : moon}
				alt={theme === Themes.DARK ? 'sun' : 'moon'}
				key={theme === Themes.DARK ? 'sun' : 'moon'}
				initial={{ opacity: 0, rotate: -180 }}
				animate={{ opacity: 1, rotate: 0 }}
				exit={{ opacity: 0 }}
				transition={{
					duration: 0.5,
					type: 'spring',
					stiffness: 200,
				}}
				className='size-6'
			/>
		</button>
	);
};
