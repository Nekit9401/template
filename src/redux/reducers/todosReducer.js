const initialState = {
	items: [],
};

export const todosReducer = (state = initialState, { type, payload }) => {
	switch (type) {
		case 'FETCH_TODOS_SUCCESS':
			return {
				...state,
				items: payload,
			};

		case 'CREATE_TODO_SUCCESS':
			return {
				...state,
				items: [...state.items, payload],
			};

		case 'DELETE_TODO_SUCCESS':
			return {
				...state,
				items: state.items.filter((todo) => todo.id !== payload),
			};

		case 'UPDATE_TODO_SUCCESS':
			return {
				...state,
				items: state.items.map((todo) => (todo.id === payload.id ? payload : todo)),
			};

		default:
			return state;
	}
};
