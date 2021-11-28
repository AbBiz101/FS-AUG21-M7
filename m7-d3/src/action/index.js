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
