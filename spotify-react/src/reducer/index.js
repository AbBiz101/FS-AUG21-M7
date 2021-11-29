import { initialState } from '../store';

export const likedSongReducer = (state = initialState.likedSong, action) => {
	switch (action.type) {
		case 'LIKE_SONGS':
			return { ...state, songs: [...state.songs, action.payload] };
		case 'DISLIKE_SONGS':
			return {
				...state,
				song: state.songs.filter((i) => i._id !== action.payload),
			};
		default:
			return state;
	}
};

export const allSongsReducer = (state = initialState.allAlbums, action) => {
	switch (action.type) {
		case 'LOAD_ROCK_SONG':
			return {
				...state,
				Category: { ...state.Category, rockSongs: action.payload },
			};
		case 'LOAD_POP_SONG':
			return {
				...state,
				Category: { ...state.Category, popSongs: action.payload },
			};
		case 'LOAD_HIP_HOP_SONG':
			return {
				...state,
				Category: { ...state.Category, hipHopSongs: action.payload },
			};
		case 'LOADING_ALBUM':
			return {
				...state,
				Category: { ...state.Category, isLoading: false },
			};
		default:
			return state;
	}
};

export const searchSongReducer = (state = initialState.likedSong, action) => {
	switch (action.type) {
		case 'SEARCH_SONG':
			return { ...state, searchSong: action.payload };
		case 'SEARCH_LOADING':
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};

export const singleArtistReducer = (
	state = initialState.singleArtist,
	action,
) => {
	switch (action.type) {
		case 'SINGLE_ARTIST_ALBUMS':
			return {
				...state,
				artist: action.payload,
			};
		case 'SINGLE_ARTIST_SONG':
			return {
				...state,
				tracks: action.payload,
			};

		case 'SINGLE_ARTIST_LOAD':
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};

export const singleAlbumReducer = (
	state = initialState.singleAlbum,
	action,
) => {
	switch (action.type) {
		case 'GET_ALL_INFO':
			return {
				...state,
				album: action.payload,
			};
		case 'GET_ALL_SONGS':
			return {
				...state,
				tracks: action.payload,
			};
		case 'LOAD_ALL_SONGS':
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
