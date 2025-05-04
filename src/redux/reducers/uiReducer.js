const initialState = {
	isLoading: false,
	error: null,
};

export const uiReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'UI_START_LOADING':
			return {
				...state,
				isLoading: true,
				error: null,
			};

		case 'UI_STOP_LOADING':
			return {
				...state,
				isLoading: false,
			};

		case 'UI_SET_ERROR':
			return {
				...state,
				isLoading: false,
				error: payload,
			};

		default:
			return state;
	}
};
