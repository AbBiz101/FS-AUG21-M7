import { createStore } from 'redux';
import mainReducer from '../reducer/index';

export const initialState = {
	count: 0,
};

createStore(mainReducer, initialState);
