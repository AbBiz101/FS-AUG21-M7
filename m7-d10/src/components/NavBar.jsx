import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { Navbar, FormControl, Nav, Form } from 'react-bootstrap';

export default function NavBar() {
	const [cityName, setCityName] = useState('');
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
						setCityName(e.target.value);
					}}
					type="text"
					placeholder="City Name"
					className="mr-sm-2"
				/>
			</Form>
		</Navbar>
	);
}
