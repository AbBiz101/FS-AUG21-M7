export const removeFromCart = (bookIndex) => ({
	type: 'REMOVE_BOOK_FROM_CART',
	payload: bookIndex,
});

export const addToCar = (bookToAdd) => ({
	type: 'ADD_TO_CART',
	payload: bookToAdd,
});
