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

function App(props) {
	return <div className="App"></div>;
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
