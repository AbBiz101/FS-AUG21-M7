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
		case 'LOADING_ALBUM"':
			return {
				...state,
				Category: { ...state.Category, isLoading: action.payload },
			};
		default:
			return state;
	}
};

export const searchSongReducer = (state = initialState.likedSong, action) => {
	switch (action.type) {
		default:
			return state;
	}
};
