import { applyMiddleware, combineReducers, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { filtersReducer, todosReducer, uiReducer } from './reducers';

const reducer = combineReducers({
	todos: todosReducer,
	ui: uiReducer,
	filters: filtersReducer,
});

export const store = createStore(reducer, applyMiddleware(thunk));
