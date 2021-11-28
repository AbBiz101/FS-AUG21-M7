import { initialState } from '../store/';
const mainReducer = (state = initialState.user, action) => {
	switch (action.type) {
		case 'ADD_USER_NAME':
			return {
				...state,
				name: action.payload,
			};
		default:
			return state;
	}
};

export default mainReducer;
