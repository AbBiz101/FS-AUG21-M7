export const likeSongs = (id) => ({
	type: 'LIKE_SONGS',
	payload: id,
});

export const disLikeSongs = (id) => ({
	type: 'DISLIKE_SONGS',
	payload: id,
});

export const getAllSongs = (song) => ({
	type: 'GET_ALL_SONGS',
	payload: song,
});
