import { initialState } from '../store/';

const booksReducer = (state = initialState.books, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default booksReducer;
