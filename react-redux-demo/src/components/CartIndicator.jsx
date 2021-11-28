import { connect } from 'react-redux';
import { addUserName } from '../action/index';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { Button, Form, Col, Row } from 'react-bootstrap';
import { useState } from 'react';

const mapStateToProps = (state) => ({
	cartLength: state.cart.content.length,
	userName: state.user.name,
});
const mapDispatchToProps = (dispatch) => ({
	addUserName: (name) => {
		dispatch(addUserName(name));
	},
});

const CartIndicator = ({ cartLength, userName, addUserName }) => {
	const navigate = useNavigate();
	const [username, setUsername] = useState('');

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
								onClick={() => addUserName(username)}
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

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator);
