import thunk from 'redux-thunk';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import {
	userReducer,
	jobSearchedReducer,
	jobListReducer,
} from '../reducer/index';
import storage from 'redux-persist/lib/storage';
import { persistStore, persistReducer } from 'redux-persist';

export const initialState = {
	jobList: { list: [], selectedJob: [], isError: false, isLoading: true },

	jobSearched: {
		searchList: [],
		searchError: false,
		searchLoading: true,
	},

	user: {
		name: '',
		appliedJob: [],
	},
};
const persistConfig = { key: 'root', storage: storage };

const bigReducer = combineReducers({
	user: userReducer,
	jobSearched: jobSearchedReducer,
	jobList: jobListReducer,
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
