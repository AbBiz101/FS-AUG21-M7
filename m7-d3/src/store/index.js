import { createStore } from 'redux';
import { mainReducer } from '../reducer/index';

export const initialState = {
	jobList: [],
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
