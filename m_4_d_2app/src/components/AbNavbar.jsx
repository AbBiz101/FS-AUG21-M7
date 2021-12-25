import { Navbar, Nav } from 'react-bootstrap';

export default function AbNavbar() {
	return (
		<Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
			<Navbar.Brand href="#home">MyNav</Navbar.Brand>
			<Navbar.Toggle aria-controls="responsive-navbar-nav" />
			<Navbar.Collapse id="responsive-navbar-nav">
				<Nav className="mr-auto">
					<Nav.Link href="#">Home</Nav.Link>
					<Nav.Link href="#">About</Nav.Link>
					<Nav.Link href="#">Browse</Nav.Link>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
}
