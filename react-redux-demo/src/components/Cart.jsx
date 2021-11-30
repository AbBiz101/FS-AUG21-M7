import { connect } from 'react-redux';
import { FaTrash } from 'react-icons/fa';
import { removeFromCart } from '../action/index';
import { Col, Row,Button } from 'react-bootstrap';

const mapStateToProps = (state) => ({
	cart: state.cart.content,
});
const mapDispatchToProps = (dispatch) => ({
	removeFromCart: (bookToRemove) => {
		dispatch(removeFromCart(bookToRemove));
	},
});

const Cart = ({ cart, removeFromCart }) => (
	<Row>
		<Col sm={12}>
			<ul style={{ listStyle: 'none' }}>
				{cart.map((book, i) => (
					<li key={i} className="my-4">
						<Button
							variant="danger"
							onClick={() => {
								removeFromCart(i);
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
