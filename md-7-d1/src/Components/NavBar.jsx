import { useState, useEffect } from 'react';
import { Navbar, Button, Form, FormControl } from 'react-bootstrap';

export default function NavBar() {
	const [searchVal, setSearchVal] = useState('');

	return (
		<Navbar className="navbrContainer" bg="dark" variant="dark">
			<Navbar.Brand className="" href="#home">
				Search for JOB
			</Navbar.Brand>
			<Form inline className="searchContainer">
				<FormControl
					type="text"
					placeholder="Search"
					onChange={(e) => {
						setSearchVal(e.target.value);
					}}
				/>
				<Button variant="outline-info">Search</Button>
			</Form>
		</Navbar>
	);
}
