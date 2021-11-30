import { initialState } from '../store/';

export const userReducer = (state = initialState.user, action) => {
	switch (action.type) {
		case 'ADD_USER_NAME':
			return { ...state, name: action.payload };
		case 'APPLY_JOB':
			return { ...state, appliedJob: [...state.appliedJob, action.payload] };
		case 'REMOVE_JOB':
			return {
				...state,
				appliedJob: state.appliedJob.filter((e,i) => i !== action.payload)
			};
		default:
			return state;
	}
};

export const jobSearchedReducer = (
	state = initialState.jobSearched,
	action,
) => {
	switch (action.type) {
		case 'SEARCH_JOB':
			return { ...state, list: action.payload };
		case 'SEARCH_JOB_LOADING':
			return { ...state, isLoading: action.payload };
		case 'SEARCH_JOB_ERROR':
			return {
				...state,
				isError: action,
			};
		default:
			return state;
	}
};

export const jobListReducer = (state = initialState.jobList, action) => {
	switch (action.type) {
		case 'GET_JOBS':
			return { ...state, list: action.payload };
		case 'GET_JOBS_ERROR':
			return {
				...state,
				isError: action,
			};
		case 'GET_JOBS_LOADING':
			return { ...state, isLoading: action.payload };
		default:
			return state;
	}
};
