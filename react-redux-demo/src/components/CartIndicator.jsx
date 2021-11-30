import { useSelector, useDispatch } from 'react-redux';
import { addUserName } from '../action/index';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const CartIndicator = () => {
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const [username, setUsername] = useState('');
	const userName = useSelector((state) => state.user.name);
	const cartLength = useSelector((state) => state.cart.content.length);

	return (
		<div className="ml-auto mt-2">
			{userName ? (
				<Button color="primary" onClick={() => navigate('/cart')}>
					<FaShoppingCart />
					<span className="ml-2">{cartLength}</span>
				</Button>
			) : (
				<Form>
					<Row className="align-items-center">
						<Col xs="auto">
							<Form.Control
								className="mb-2"
								id="inlineFormInput"
								placeholder="User Name"
								onChange={(e) => setUsername(e.target.value)}
							/>
						</Col>

						<Col xs="auto">
							<Button
								type="submit"
								className="mb-2"
								onClick={() => dispatch(addUserName(username))}
							>
								Login
							</Button>
						</Col>
					</Row>
				</Form>
			)}
		</div>
	);
};

export default CartIndicator;
