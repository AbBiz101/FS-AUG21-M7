import { createStore } from 'redux';
import { mainReducer } from '../reducer/index';

export const initialState = {
	jobList: { appliedJob: [] },

	jobFatched: {
		list: [],
		isError: false,
		isLoading: true,
	},
	jobSearched: {
		list: [],
		isError: false,
		isLoading: true,
	},
	user: {
		name: '',
	},
};

const configStore = createStore(
	mainReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default configStore;
