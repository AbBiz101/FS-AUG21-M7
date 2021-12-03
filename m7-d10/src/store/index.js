import thunk from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import currentReducer  from '../reducer/index';
import { persistStore, persistReducer } from 'redux-persist';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

export const initialState = {
	current: {
		data: {
			coord: {
				lon: 276,
				lat: 276,
			},
			weather: [
				{
					id: 276,
					main: '',
					description: '',
					icon: '',
				},
			],
			base: '',
			main: {
				temp: 276.23,
				feels_like: 270.66,
				temp_min: 274.4,
				temp_max: 277.13,
				pressure: 997,
				humidity: 73,
			},
			visibility: 10000,
			wind: {
				speed: 8.49,
				deg: 242,
				gust: 12.52,
			},
			clouds: {
				all: 0,
			},
			dt: 1638529965,
			sys: {
				type: 2,
				id: 2011538,
				country: '',
				sunrise: 1638514654,
				sunset: 1638543311,
			},
			timezone: 3600,
			id: 2950159,
			name: '',
			cod: 200,
		},
		isLoading: true,
	},
};

const persistConfig = {
	key: 'root',
	storage,
};

const bigReducer = combineReducers({
	current: currentReducer,
});

const persistedBigReducer = persistReducer(persistConfig, bigReducer);

const configStore = createStore(
	persistedBigReducer,
	initialState,
	compose(
		applyMiddleware(thunk),
		window.__REDUX_DEVTOOLS_EXTENSION__ &&
			window.__REDUX_DEVTOOLS_EXTENSION__(),
	),
);

export const persistor = persistStore(configStore);

export default configStore;
