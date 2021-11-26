import React from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/cakeAction';

function CakeContainer(props) {
	return (
		<div>
			<h2>Number Of Cakes - {props.numOfCake}</h2>
			<button onClick={props.buyCake}>Buy Cake </button>
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
		buyCake: () => dispatch(buyCake()),
	};
};

export default connect(mapStateToProps, mapDispatchTOProps)(CakeContainer);
