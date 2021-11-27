const mainReducer = (state, action) => {
	console.log(state);
	console.log(action);

	switch (action.type) {
		case 'ADD_TO_CART':
			return {
				...state,
				cart: {
					...state.cart,
					content: [...state.cart.content, action.payload],
				},
			};
		case 'REMOVE_BOOK_FROM_CART':
			return {
				...state,
				cart: {
					...state.cart,
					content: state.cart.content.filter((i) => i !== action.payload),
				},
			};
		default:
			return state;
	}
};

export default mainReducer;
