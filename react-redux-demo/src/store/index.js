import { createStore, combineReducers } from 'redux';
import cartReducer from '../reducer/cart';
import userReducer from '../reducer/user';

export const initialState = {
	cart: { content: [] },
	user: {
		name: '',
		isLoading: false,
	},
	error: '',
	product: [],
	loading: false,
};

const bigReducer = combineReducers({
	cart: cartReducer,
	user: userReducer,
});

const configStore = createStore(
	bigReducer,
	initialState,
	window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
export default configStore;
