export const removeFromCart = (bookIndex) => ({
	type: 'REMOVE_BOOK_FROM_CART',
	payload: bookIndex,
});

export const addToCar = (bookToAdd) => ({
	type: 'ADD_TO_CART',
	payload: bookToAdd,
});

export const addUserName = (name) => ({
	type: 'ADD_USER_NAME',
	payload: name,
});
