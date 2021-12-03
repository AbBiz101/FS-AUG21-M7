import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { Navbar, FormControl, Nav, Form } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { addCityName } from '../action/index';

export default function NavBar() {
	const [cityName, setCityName] = useState('');
	const dispatch = useDispatch();

	return (
		<Navbar bg="dark" variant="dark">
			<Navbar.Brand href="/home">Today</Navbar.Brand>
			<Nav className="mr-auto">
				<Link to="/hourly">
					<Nav.Link href="/hourly">Hourly Forecast</Nav.Link>
				</Link>

				<Link to="/16day">
					<Nav.Link href="/16day">16 days Forecast</Nav.Link>
				</Link>

				<Link to="/30day">
					<Nav.Link href="/30day">30 days Forecast</Nav.Link>
				</Link>
			</Nav>

			<Form inline>
				<FormControl
					onChange={(e) => {
						dispatch(addCityName(e.target.value));
					}}
					type="text"
					placeholder="City Name"
					className="mr-sm-2"
				/>
			</Form>
		</Navbar>
	);
}
