import thunk from 'redux-thunk';
import {
	allSongsReducer,
	likedSongReducer,
	searchSongReducer,
	singleAlbumReducer,
} from '../reducer';
import { createStore, combineReducers, compose, applyMiddleware } from 'redux';

export const initialState = {
	allAlbums: {
		Category: {
			rockSongs: [],
			popSongs: [],
			hipHopSongs: [],
			isLoading: true,
		},
		isLoading: true,
	},
	singleAlbum: {
		album: {},
		tracks: [],
		isLoading: true,
	},
	singleArtist: {
		album: {},
		tracks: [],
		isLoading: true,
	},
	search: {
		searchSong: [],
		isLoading: true,
	},
	likedSong: { songs: [] },
};

const bigReducer = combineReducers({
	allAlbums: allSongsReducer,
	likedSong: likedSongReducer,
	search: searchSongReducer,
	singleAlbum: singleAlbumReducer,
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
