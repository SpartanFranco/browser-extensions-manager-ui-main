import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import App from '../App';

import { ContainerCards } from '../components/container-cards';
const AppRouter = () => {
	return (
		<Router>
			<Routes>
				<Route
					path='/browser-extensions-manager-ui-main'
					element={<App />}
				>
					<Route
						path='/browser-extensions-manager-ui-main/:status'
						element={<ContainerCards />}
					/>
				</Route>
			</Routes>
		</Router>
	);
};

export default AppRouter;
