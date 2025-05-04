export const setSearchQuery = (query) => ({
	type: 'SET_SEARCH_QUERY',
	payload: query,
});

export const setSort = (sortType) => ({
	type: 'SET_SORT',
	payload: sortType,
});
