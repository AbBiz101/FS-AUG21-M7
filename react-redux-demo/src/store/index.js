import thunk from 'redux-thunk';
import cartReducer from '../reducer/cart';
import userReducer from '../reducer/user';
import booksReducer from '../reducer/books';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
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

const persistConfig = { key: 'root', storage: storage };

const bigReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
	books: booksReducer,
});

const persistBigReducer = persistReducer(persistConfig, bigReducer);

const configStore = createStore(
	persistBigReducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

export const persistor = persistStore(configStore);

export default configStore;
