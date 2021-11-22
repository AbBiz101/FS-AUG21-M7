import React from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

export default function NavBar() {
	return (
		<Navbar className="navbrContainer" bg="dark" variant="dark">
			<Navbar.Brand className="" href="#home">
				Search for JOB
			</Navbar.Brand>
			<Form inline className="searchContainer">
				<FormControl type="text" placeholder="Search" className="mr-sm-4" />
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	);
}
