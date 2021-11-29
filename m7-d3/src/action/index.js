export const addUserName = (name) => ({
	type: 'ADD_USER_NAME',
	payload: name,
});

export const applyJob = (job) => ({
	type: 'APPLY_JOB',
	payload: job,
});

export const removeJob = (job) => ({
	type: 'REMOVE_JOB',
	payload: job,
});

export const getJob = () => {
	return async (dispatch) => {
		try {
			let resp = await fetch(
				'https://strive-jobs-api.herokuapp.com/jobs?limit=10&skip=10',
			);
			if (resp.ok) {
				const res = await resp.json();
				dispatch({ type: 'GET_JOBS', payload: res.data });
				dispatch({ type: 'GET_JOBS_LOADING', payload: false });
			} else {
				console.log('error fetching');
				dispatch({ type: 'GET_JOBS_ERROR', payload: true });
				dispatch({ type: 'GET_JOBS_LOADING', payload: false });
			}
		} catch (error) {
			console.log(error);
			dispatch({ type: 'GET_JOBS_ERROR', payload: true });
			dispatch({ type: 'GET_JOBS_LOADING', payload: false });
		}
	};
};

export const searchJob = (e, string) => {
	return async (dispatch) => {
		e.preventDefault();
		try {
			let resp = await fetch(
				'https://strive-jobs-api.herokuapp.com/jobs?search=' +
					`${string}` +
					'&limit=8',
			);
			if (resp.ok) {
				const res = await resp.json();
				dispatch({ type: 'SEARCH_JOB', payload: res.data });
				dispatch({ type: 'SEARCH_JOB_LOADING', payload: false });
			} else {
				dispatch({ type: 'SEARCH_JOB_ERROR', payload: true });
				dispatch({ type: 'SEARCH_JOB_LOADING', payload: false });
				console.log('error fetching');
			}
		} catch (error) {
			console.log(error);
			dispatch({ type: 'SEARCH_JOB_ERROR', payload: true });
			dispatch({ type: 'SEARCH_JOB_LOADING', payload: false });
		}
	};
};
