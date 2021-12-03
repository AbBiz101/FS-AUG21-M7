export const GET_WEATHER = 'GET_WEATHER';
export const IS_LOADER = 'IS_LOADER';
export const ADD_CITY_NAME = 'ADD_CITY_NAME';

export const getWeather = (text) => {
	return async (dispatch) => {
		try {
			const response = await fetch(
				`https://api.openweathermap.org/data/2.5/weather?q=${text}&appid=679a06c755158c69007a0bfb5f3bf77e`,
			);
			if (response.ok) {
				const data = await response.json();
                console.log(data);
                
				dispatch({
					type: GET_WEATHER,
					payload: data,
				});

				dispatch({
					type: IS_LOADER,
					payload: false,
                });
                
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

export const addCityName = (name) => ({
	type: ADD_CITY_NAME,
	payload: name,
});
