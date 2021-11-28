import { initialState } from '../store/';
const mainReducer = (state = initialState.cart, action) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				content: [...state.content, action.payload],
			};
		case 'REMOVE_BOOK_FROM_CART':
			return {
				...state,
				content: state.content.filter((e, i) => i !== action.payload),
			};
		default:
			return state;
	}
};

export default mainReducer;
