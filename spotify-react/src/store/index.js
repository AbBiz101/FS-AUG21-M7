import thunk from 'redux-thunk';
import {
	allSongsReducer,
	likedSongReducer,
	searchSongReducer,
} from '../reducer';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

export const initialState = {
	allAlbums: {
		Category: {
			rockSongs: [],
			popSongs: [],
			hipHopSongs: [],
			isLoading:true
		},
		isError: false,
		isLoading: true,
	},
	search: {
		searchSong: [],
		isError: false,
		isLoading: true,
	},
	likedSong: { songs: [] },
};

const bigReducer = combineReducers({
	allAlbums: allSongsReducer,
	likedSong: likedSongReducer,
	search: searchSongReducer,
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
