import thunk from 'redux-thunk';
import {
	allSongsReducer,
	likedSongReducer,
	searchSongReducer,
	singleAlbumReducer,
	singleArtistReducer,
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
		artist: {},
		tracks: [],
		isLoading: true,
	},
	search: {
		searchSong: [],
		isLoading: true,
	},
	likedSong: { elements: [] },
};

const bigReducer = combineReducers({
	search: searchSongReducer,
	allAlbums: allSongsReducer,
	likedSong: likedSongReducer,
	singleAlbum: singleAlbumReducer,
	singleArtist: singleArtistReducer,
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
