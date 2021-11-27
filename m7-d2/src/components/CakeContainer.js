import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cakeAction';

function CakeContainer(props) {
	return (
		<div>
			<h2>Number Of Cakes - {props.numOfCake}</h2>
			<button onClick={props.buy_Cake}>Buy Cake </button>
		</div>
	);
}

const mapStateToProps = (state) => {
	return {
		numOfCake: state.numOfCake,
	};
};
const mapDispatchTOProps = (dispatch) => {
	return {
		buy_Cake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchTOProps)(CakeContainer);
