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
			} else {
				console.log('error fetching');
			}
		} catch (error) {
			console.log(error);
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
					'&limit=5',
			);
			if (resp.ok) {
				const res = await resp.json();
			} else {
				console.log('error fetching');
			}
		} catch (error) {
			console.log(error);
		}
	};
};
