import thunk from 'react-thunk';
import { allSongsReducer, likedSongReducer } from '../reducer';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

export const initialState = {
	allSongs: { songs: [] },
	likedSong: { song: [] },
};

const bigReducer = combineReducers({
	allSongs: allSongsReducer,
	likedSong: likedSongReducer,
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
