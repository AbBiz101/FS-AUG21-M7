import thunk from 'redux-thunk';
import cartReducer from '../reducer/cart';
import userReducer from '../reducer/user';
import booksReducer from '../reducer/books';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import { ReduxStore } from '../types/ReduxStore';

export const initialState: ReduxStore = {
	cart: { products: [] },
	user: {
		firstName: '',
	},
	books: {
		stock: [],
		isError: false,
		loading: true,
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
		(window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
			(window as any).__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

export const persistor = persistStore(configStore);

export default configStore;
