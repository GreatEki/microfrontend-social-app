import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './root.component.css';

import Navbar from './components/NAVBAR/Navbar';
import Messenger from './pages/MESSENGER/Messenger';

export default function Root(props) {
	return (
		<div className='navbar-app'>
			<BrowserRouter>
				<Navbar />
				<Switch>
					<Route exact path='/' component={Messenger} />
				</Switch>
			</BrowserRouter>
		</div>
	);
}
