import Button from 'react-bootstrap/Button';
import { FaShoppingCart } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { connect } from 'react-redux';

const CartIndicator = () => {
	const navigate = useNavigate();
	return (
		<div className="ml-auto mt-2">
			<Button color="primary" onClick={() => navigate('/cart')}>
				<FaShoppingCart />
				<span className="ml-2">0</span>
			</Button>
		</div>
	);
};

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => {};

export default connect(mapStateToProps, mapDispatchToProps)(CartIndicator);
