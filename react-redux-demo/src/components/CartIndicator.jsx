import { connect } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';

const mapStateToProps = (state) => ({
	cartLength: state.cart.content.length,
});

const CartIndicator = ({ cartLength }) => {
	const navigate = useNavigate();
	return (
		<div className="ml-auto mt-2">
			<Button color="primary" onClick={() => navigate('/cart')}>
				<FaShoppingCart />
				<span className="ml-2">{cartLength}</span>
			</Button>
		</div>
	);
};

export default connect(mapStateToProps)(CartIndicator);
