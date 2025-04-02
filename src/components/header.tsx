import { ButtonTheme } from './buttons/button-theme';
import { Logo } from './logo/logo';

export const Header = () => {
	return (
		<header className='mt-4 flex w-full max-w-[150rem] justify-between rounded-2xl bg-white p-4 shadow-[0px_0px_14px_-6px_rgba(0,_0,_0,_0.35)] dark:bg-(--Neutral-800)'>
			<Logo />
			<ButtonTheme />
		</header>
	);
};
