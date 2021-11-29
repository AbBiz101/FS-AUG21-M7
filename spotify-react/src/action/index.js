export const likeSongs = (id, action) => {
	return async (dispatch) => {
		dispatch({
			type: action,
			payload: id,
		});
	};
};

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
				console.log('error loading all songs');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

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

export const getSingleAlbum = (id) => {
	return async (dispatch) => {
		try {
			let headers = new Headers({
				'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
				'X-RapidAPI-Key': 'c74a0a086emshf55ffb8dbdcb59ap17a486jsnb83bb4d3e387',
			});

			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/album/' + id,
				{
					method: 'GET',
					headers,
				},
			);
			if (response.ok) {
				let data = await response.json();
				dispatch({ type: 'GET_ALL_INFO', payload: data });
				dispatch({ type: 'GET_ALL_SONGS', payload: data.tracks.data });
				dispatch({ type: 'LOAD_ALL_SONGS', payload: false });
			} else {
				console.log('error loading single artist');
			}
		} catch (error) {
			console.log(error);
		}
	};
};

export const getSingleArtist = (id) => {
	return async (dispatch) => {
		try {
			let headers = new Headers({
				'X-RapidAPI-Host': 'deezerdevs-deezer.p.rapidapi.com',
				'X-RapidAPI-Key': '222902beabmshb95a65b737cead6p1f3ac9jsn23ced94c0d20',
			});
			let response = await fetch(
				'https://striveschool-api.herokuapp.com/api/deezer/artist/' + id,
				{
					method: 'GET',
					headers,
				},
			);
			if (response.ok) {
				let data = await response.json();
				dispatch({ type: 'SINGLE_ARTIST_ALBUMS', payload: data });
				const tracks = await fetch(
					'https://striveschool-api.herokuapp.com/api/deezer/search?q=' +
						data.name,
					{
						method: 'GET',
						headers,
					},
				);
				if (tracks.ok) {
					let resp = await tracks.json();
					dispatch({
						type: 'SINGLE_ARTIST_SONG',
						payload: resp.data,
					});
					dispatch({ type: 'SINGLE_ARTIST_LOAD', payload: false });
				} else {
					dispatch({ type: 'SINGLE_ARTIST_LOAD', payload: false });
				}
			} else {
				console.log('error loading single album');
			}
		} catch (error) {
			console.log(error);
		}
		dispatch({ type: 'SINGLE_ARTIST_LOAD', payload: false });
	};
};
