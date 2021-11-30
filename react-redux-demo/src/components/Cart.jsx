import { useSelector, useDispatch } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeFromCart } from '../action/index';
import { Col, Row, Button } from 'react-bootstrap';

const Cart = () => {
	const cart = useSelector((state) => state.cart.content);
	const dispatch = useDispatch();

	return (
		<Row>
			<Col sm={12}>
				<ul style={{ listStyle: 'none' }}>
					{cart.map((book, i) => (
						<li key={i} className="my-4">
							<Button
								variant="danger"
								onClick={() => {
									dispatch(removeFromCart(i));
								}}
							>
								<FaTrash />
							</Button>
							<img
								className="book-cover-small"
								src={book.imageUrl}
								alt="book selected"
							/>
							{book.title}
						</li>
					))}
				</ul>
			</Col>
			<Row>
				<Col sm={12} className="font-weight-bold">
					TOTAL:
					{cart.reduce(
						(acc, currentValue) => acc + parseFloat(currentValue.price),
						0,
					)}
				</Col>
			</Row>
		</Row>
	);
};

export default Cart;
