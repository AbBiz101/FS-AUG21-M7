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

export const getAllBooks = () => {
	return async (dispatch) => {
		try {
			const resp = await fetch(
				'https://striveschool-api.herokuapp.com/food-books',
			);
			if (resp.ok) {
				const data = await resp.json();
				dispatch({
					type: 'GET_BOOKS',
					payload: data,
				});
			} else {
				console.log('Error fetching.');
				dispatch({ type: 'GET_BOOKS_ERROR' });
			}
		} catch (error) {
			console.log(error);
			dispatch({ type: 'GET_BOOKS_ERROR' });
		}
	};
};
