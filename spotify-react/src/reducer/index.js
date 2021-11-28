import { initialState } from '../store';

export const likedSongReducer = (state = initialState.likedSong, action) => {
	switch (action.type) {
		case 'LIKE_SONGS':
			return { ...state, song: [...state.song, action.payload] };
		case 'DISLIKE_SONGS':
			return {
				...state,
				song: state.song.filter((e, i) => i !== action.payload),
			};
		default:
			return state;
	}
};
export const allSongsReducer = (state = initialState.allSongs, action) => {
	switch (action.type) {
		case 'GET_ALL_SONGS':
			return { ...state, songs: action.payload };
		default:
			return state;
	}
};
