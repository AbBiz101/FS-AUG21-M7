const mainReducer = (state, action) => {
	switch (action.type) {
		case 'ADD_USER_NAME':
			return { ...state };
		case 'APPLY_JOB':
			return { ...state, jobList: [...state.jobList, action.payload] };
		case 'REMOVE_JOB':
			return {
				...state,
				jobList: state.jobList.filter((e, i) => i !== action.payload),
			};
		default:
			return state;
	}
};
export default mainReducer;
