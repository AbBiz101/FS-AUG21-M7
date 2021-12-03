export const GET_WEATHER = 'GET_WEATHER';
export const IS_LOADER = 'IS_LOADER';

export const getweather = (text) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				'api.openweathermap.org/data/2.5/weather?q=' +
					text +
					'&appid={API key}',
			);
			if (response.ok) {
				const data = await response.json();
				console.log(data);
				dispatch({
					type: GET_WEATHER,
					payload: data,
				});
				setTimeout(() => {
					dispatch({
						type: IS_LOADER,
						payload: false,
					});
				}, 1500);
			} else {
				console.log('Error loading weather');
				dispatch({
					type: IS_LOADER,
					payload: false,
				});
			}
		} catch (error) {
			console.log(error);
			dispatch({
				type: IS_LOADER,
				payload: false,
			});
		}
	};
};
