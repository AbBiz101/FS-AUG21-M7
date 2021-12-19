import './App.css';
import Cart from './components/Cart';
import BookStore from './components/BookStore';
import { Col, Container, Row } from 'react-bootstrap';
import CartIndicator from './components/CartIndicator';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

const App = () => (
	<BrowserRouter>
		<Container>
			<Row>
				<Col  className="text-center background-div">
					<Link to="/">
						<h1>Strivazon Book Store</h1>
					</Link>
				</Col>
				<CartIndicator />
			</Row>
			<hr />
			<Routes>
				<Route path="/" element={<BookStore />} />
				<Route path="/cart" element={<Cart />} />
			</Routes>
		</Container>
	</BrowserRouter>
);

export default App;
