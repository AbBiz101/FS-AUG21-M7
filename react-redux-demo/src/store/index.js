import { createStore } from 'redux';
import mainReducer from '../reducer/index';

export const initialState = {
	count: 10,
	error: '',
	product: [],
	loading: false,
};

const configStore = createStore(
	mainReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default configStore;
