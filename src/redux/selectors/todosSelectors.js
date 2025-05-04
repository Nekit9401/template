// export const selectTodos = (state) => state.todos.items;

export const selectFilteredTodos = (state) => {
	const { items } = state.todos;
	const { searchQuery, sortBy } = state.filters;

	const filteredTodos = items.filter((todo) => todo.title.toLowerCase().includes(searchQuery.toLowerCase()));

	if (sortBy === 'title') {
		return [...filteredTodos].sort((a, b) => a.title.localeCompare(b.title));
	}

	return filteredTodos;
};
