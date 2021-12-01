import thunk from 'redux-thunk';
import searchSongReducer from '../reducer';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

export const initialState = {
	search: {
		searchSong: [],
		isLoading: true,
	},
};

const persistConfig = { key: 'root', storage: storage };

const bigReducer = combineReducers({
	search: searchSongReducer,
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
