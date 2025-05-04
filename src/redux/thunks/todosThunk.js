import { createTodoSuccess, deleteTodoSuccess, fetchTodosSuccess, updateTodoSuccess } from '../actions/todoActions';
import { setError, startLoading, stopLoading } from '../actions/uiActions';

export const fetchTodos = () => async (dispatch) => {
	dispatch(startLoading());
	try {
		const response = await fetch('http://localhost:3000/todos');
		const todos = await response.json();
		dispatch(fetchTodosSuccess(todos));
	} catch (error) {
		dispatch(setError(error.message));
	} finally {
		dispatch(stopLoading());
	}
};

export const createTodo = (todoData) => async (dispatch) => {
	dispatch(startLoading());
	try {
		const response = await fetch('http://localhost:3000/todos', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(todoData),
		});
		const newTodo = await response.json();
		dispatch(createTodoSuccess(newTodo));
	} catch (error) {
		dispatch(setError(error.message));
	} finally {
		dispatch(stopLoading());
	}
};

export const deleteTodo = (id) => async (dispatch) => {
	dispatch(startLoading());
	try {
		await fetch(`http://localhost:3000/todos/${id}`, {
			method: 'DELETE',
		});
		dispatch(deleteTodoSuccess(id));
	} catch (error) {
		dispatch(setError(error.message));
	} finally {
		dispatch(stopLoading());
	}
};

export const updateTodo = (id, changes) => async (dispatch) => {
	dispatch(startLoading());
	try {
		const response = await fetch(`http://localhost:3000/todos/${id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(changes),
		});
		const updatedTodo = await response.json();
		dispatch(updateTodoSuccess(updatedTodo));
	} catch (error) {
		dispatch(setError(error.message));
	} finally {
		dispatch(stopLoading());
	}
};
