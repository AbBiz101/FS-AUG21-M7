import { initialState } from '../store/';

const booksReducer = (state = initialState.books, action) => {
	switch (action.type) {
		case 'GET_BOOKS':
			return { ...state, stock: action.payload };
		case 'GET_BOOKS_ERROR':
			return { ...state, isError: true };
		default:
			return state;
	}
};

export default booksReducer;

