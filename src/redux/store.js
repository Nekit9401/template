import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import { filtersReducer, todosReducer, uiReducer } from './reducers';

const reducer = combineReducers({
	todos: todosReducer,
	ui: uiReducer,
	filters: filtersReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
