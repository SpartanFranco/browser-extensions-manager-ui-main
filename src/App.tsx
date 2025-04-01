import { Header } from './components/header';
import Main from './components/main';
import { CardsProvider } from './context/card-context';
import { ThemeProvider } from './context/theme-context';

function App() {
	return (
		<ThemeProvider>
			<CardsProvider>
				<div className='min-h-screen w-full bg-linear-(--light-gradient) px-3 py-6 md:px-20 2xl:px-40 dark:bg-linear-(--dark-gradient)'>
					<Header />
					<Main />
				</div>
			</CardsProvider>
		</ThemeProvider>
	);
}

export default App;
