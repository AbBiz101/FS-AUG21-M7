export const searchSong = (text) => {
	return async (dispatch) => {
		try {
			let headers = new Headers({
				'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
				'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20',
			});
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/search?q=' + text,
				{
					method: 'GET',
					headers,
				},
			);
			if (response.ok) {
				let resp = await response.json();
				dispatch({ type: 'SEARCH_SONG', payload: resp.data });
				dispatch({ type: 'SEARCH_LOADING', payload: false });
			} else {
				console.log('searching error');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
