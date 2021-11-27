import './App.css';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state;
const mapDispatchToProps = (dispatch) => ({
	increase: () => {
		dispatch({ type: 'INCREASE' });
	},
	decrease: () => {
		dispatch({ type: 'DECREASE' });
	},
});

// {
// 	return { count: state.count };
// };

function App(props) {
	return (
		<div className="App">
			<button onClick={props.increase}></button>
			<p>{props.count}</p>
			<button onClick={props.decrease}></button>
		</div>
	);
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
