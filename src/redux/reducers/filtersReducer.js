const initialState = {
	searchQuery: '',
	sortBy: 'default',
	isSorted: false,
};

export const filtersReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'SET_SEARCH_QUERY':
			return {
				...state,
				searchQuery: payload,
			};

		case 'SET_SORT':
			return {
				...state,
				sortBy: payload,
				isSorted: !state.isSorted,
			};

		default:
			return state;
	}
};
