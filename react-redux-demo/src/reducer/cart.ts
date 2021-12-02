import { AnyAction } from 'redux';
import { initialState } from '../store';

const cartReducer = (state = initialState.cart, action:AnyAction) => {
	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				content: [...state.products, action.payload],
			};
		case 'REMOVE_BOOK_FROM_CART':
			return {
				...state,
				content: state.products.filter((e, i) => i !== action.payload),
			};
		default:
			return state;
	}
};

export default cartReducer;
