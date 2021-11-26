//import { buycake } from './cakeAction';
const initialState = { numOfCake: 20 };

export const cakeReducer = (state = initialState, action) => {
	switch (action.type) {
		case 'BUY_CAKE':
			return {
				...state,
				numOfCake: state.numOfCake - 1,
			};
		default:
			return state;
	}
};

export default cakeReducer;
