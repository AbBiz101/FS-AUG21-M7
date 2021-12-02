import { Dispatch } from 'redux';
import { Book } from '../types/Book';

export const removeFromCart = (bookIndex: number) => ({
	type: 'REMOVE_BOOK_FROM_CART',
	payload: bookIndex,
});

export const addToCar = (bookToAdd: Book) => ({
	type: 'ADD_TO_CART',
	payload: bookToAdd,
});

export const addUserName = (name: string) => ({
	type: 'ADD_USER_NAME',
	payload: name,
});

export const getAllBooks = () => {
	return async (dispatch: Dispatch) => {
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
				setTimeout(() => {
					dispatch({ type: 'TOGGLE_LOADER', payload: false });
				}, 1100);
			} else {
				console.log('Error fetching.');
				dispatch({ type: 'GET_BOOKS_ERROR' });
				dispatch({ type: 'TOGGLE_LOADER', payload: false });
			}
		} catch (error) {
			console.log(error);
			dispatch({ type: 'GET_BOOKS_ERROR' });
			dispatch({ type: 'TOGGLE_LOADER', payload: false });
		}
	};
};
