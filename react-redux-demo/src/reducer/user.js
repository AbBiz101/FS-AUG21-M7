import { initialState } from '../store/';

const userReducer = (state = initialState.user, action) => {
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
export default userReducer;
