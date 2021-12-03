import { initialState } from '../store';
import { GET_WEATHER, IS_LOADER } from '../action/index';

const currentReducer = (state = initialState.current, action) => {
	switch (action.type) {
		case GET_WEATHER:
			return {
				...state,
				data: action.payload,
			};
		case IS_LOADER:
			return {
				...state,
				isLoading: action.payload,
			};
		default:
			return state;
	}
};
export default currentReducer;
