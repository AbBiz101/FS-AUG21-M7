import thunk from 'redux-thunk';
import cartReducer from '../reducer/cart';
import userReducer from '../reducer/user';
import booksReducer from '../reducer/books';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

export const initialState = {
	cart: { content: [] },
	user: {
		name: '',
		isLoading: false,
	},
	books: {
		stock: [],
		isError: false,
		isLoading: true,
	},
};

const bigReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	books: booksReducer,
});

const configStore = createStore(
	bigReducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);
export default configStore;
