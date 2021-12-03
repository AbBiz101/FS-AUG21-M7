import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import currentReducer from '../reducer/index';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

export const initialState = {
	current: {
		data: [],
		isLoading: true,
		cityName: '',
	},
};

const persistConfig = {
	key: 'root',
	storage,
};

const bigReducer = combineReducers({
	current: currentReducer,
});

const persistedBigReducer = persistReducer(persistConfig, bigReducer);

const configStore = createStore(
	persistedBigReducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

export const persistor = persistStore(configStore);

export default configStore;
