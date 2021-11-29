import { findAllByTestId } from '@testing-library/dom';

export const likeSongs = (action, id) => ({
	type: action,
	payload: id,
});

export const disLikeSongs = (id) => ({
	type: 'DISLIKE_SONGS',
	payload: id,
});

// const likeToggle = (action) => {
// 	if (likedSong.filter((el) => el.id === action.id).length < 1) {
// 		likeSong(action, 'LIKE_SONGS');
// 	} else {
// 		likeSong(action, 'DISLIKE_SONGS');
// 	}
// };

export const getAllSongs = (artistName, category) => {
	return async (dispatch) => {
		let headers = new Headers({
			'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
			'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20',
		});
		try {
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
					artistName,
				{
					method: 'GET',
					headers,
				},
			);
			if (response.ok) {
				let album = await response.json();
				dispatch({ type: category, payload: album.data });
				dispatch({ type: 'LOADING_ALBUM', payload: false });
			} else {
				console.log('error');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
