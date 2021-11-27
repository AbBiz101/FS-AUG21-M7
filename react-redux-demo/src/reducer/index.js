// import { initialState } from '../store/index';

const mainReducer = (state, action) => {
	console.log(state);
	console.log(action);

	switch (action.type) {
		case 'INCREASE':
			return { count: state.count + 1 };
		case 'DECREASE':
			return { count: state.count - 1 };
		default:
			return state;
	}
};

export default mainReducer;
