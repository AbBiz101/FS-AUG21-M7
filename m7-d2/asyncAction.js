const redux = require('redux');
const axios = require('axios');
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const thunkMiddleware = require('redux-thunk').default;

//state
const initialState = { loading: false, user: [], error: '' };

//action type
const FETCH_USERS_REQUEST = 'FETCH_USERS_REQUEST';
const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
const FETCH_USERS_FAILURE = 'FETCH_USERS_FAILURE';

//action createColors
const fetchUserRequest = () => {
	return {
		type: FETCH_USERS_REQUEST,
	};
};
const fetchUsersSuccess = (users) => {
	return {
		type: FETCH_USERS_SUCCESS,
		payload: users,
	};
};
const fetchUsersFailure = (error) => {
	return {
		type: FETCH_USERS_FAILURE,
		payload: error,
	};
};

const reducer = (state = initialState, action) => {
	switch (action.type) {
		case FETCH_USERS_REQUEST:
			return { loading: true };
		case FETCH_USERS_SUCCESS:
			return { loading: false, users: action.payload, error: '' };
		case FETCH_USERS_FAILURE:
			return { loading: false, users: [], error: action.payload };
	}
};
const fetchUsers = () => {
	return function (dispatch) {
		dispatch(fetchUserRequest());
		axios
			.get('https://jsonplacehdsolder.typicode.com/users')
			.then((res) => {
				const users = res.data.map((user) => user.id);
				dispatch(fetchUsersSuccess(users));
			})
			.catch((err) => {
				dispatch(fetchUsersFailure(error.message));
			});
	};
};

const store = createStore(reducer, applyMiddleware(thunkMiddleware));
store.subscribe(() => {
	console.log(store.getState());
});

store.dispatch(fetchUsers);
