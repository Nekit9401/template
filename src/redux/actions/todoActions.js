export const fetchTodosSuccess = (todos) => ({
	type: 'FETCH_TODOS_SUCCESS',
	payload: todos,
});

export const createTodoSuccess = (createdTodo) => ({
	type: 'CREATE_TODO_SUCCESS',
	payload: createdTodo,
});

export const deleteTodoSuccess = (id) => ({
	type: 'DELETE_TODO_SUCCESS',
	payload: id,
});

export const updateTodoSuccess = (updatedTodo) => ({
	type: 'UPDATE_TODO_SUCCESS',
	payload: updatedTodo,
});
