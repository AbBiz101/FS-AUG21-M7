import { createStore, combineReducers } from 'redux';
import {
	userReducer,
	jobSearchedReducer,
	jobListReducer,
} from '../reducer/index';

export const initialState = {
	jobList: { list: [], isError: false, isLoading: true },

	jobSearched: {
		list: [],
		isError: false,
		isLoading: true,
	},

	user: {
		name: '',
		appliedJob: [],
	},
};

const bigReducer = combineReducers({
	user: userReducer,
	jobSearched: jobSearchedReducer,
	jobList: jobListReducer,
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
