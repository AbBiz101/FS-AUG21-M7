// import { Navbar, Nav } from 'react-bootstrap'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-router-dom';

const MyNavbar = (props) => (
	<Navbar collapseOnSelect expand="md" bg="dark" variant="dark">
		<Navbar.Brand href="#home">{props.brand}</Navbar.Brand>
		<Navbar.Toggle aria-controls="responsive-navbar-nav" />
		<Navbar.Collapse id="responsive-navbar-nav">
			<Nav className="ml-auto">
				<Nav.Link>Menu</Nav.Link>
				<Link>
					<div className="nav-link">Reservations</div>
				</Link>
				<Nav.Link>Contact us</Nav.Link>
			</Nav>
		</Navbar.Collapse>
	</Navbar>
);

export default MyNavbar;