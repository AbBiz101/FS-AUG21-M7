import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import MyNavbar from './components/MyNavbar';
import Home from './components/Home';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Reservations from './components/Reservations';

function App() {
	// advanced stuff!
	// const myFunction = () => console.log('hello')
	return (
		<div>
			<Router>
				<MyNavbar brand="Strivestaurant" />
				<Route
					path="/"
					exact
					render={(routerProps) => (
						<Home
							{...routerProps}
							subtitle="Ab is the cook. So dont miss it "
						/>
					)}
				/>
				<Route path="/reservations" exact component={Reservations} />
			</Router>
		</div>
	);
}

export default App;
