export const startLoading = () => ({
	type: 'UI_START_LOADING',
});

export const stopLoading = () => ({
	type: 'UI_STOP_LOADING',
});

export const setError = (message) => ({
	type: 'UI_SET_ERROR',
	payload: message,
});
