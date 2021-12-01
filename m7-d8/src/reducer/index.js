import { initialState } from '../store/index';

export const searchSongReducer = (state = initialState.search, action) => {
	switch (action.type) {
		case 'SEARCH_SONG':
			return { ...state, searchSong: action.payload };
		case 'SEARCH_LOADING':
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
