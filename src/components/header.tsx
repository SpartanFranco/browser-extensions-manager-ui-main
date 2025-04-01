import { ButtonTheme } from './buttons/button-theme';
import { Logo } from './logo/logo';

export const Header = () => {
	return (
		<header className='flex justify-between rounded-xl bg-white px-4 py-2 shadow-[0px_0px_14px_-6px_rgba(0,_0,_0,_0.35)] dark:bg-(--Neutral-800)'>
			<Logo />
			<ButtonTheme />
		</header>
	);
};
