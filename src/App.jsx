import styles from './App.module.css';
import { TodoList } from './components/TodoList';
import { CreateTodo } from './components/CreateTodo/';
import { SearchTodo } from './components/SearchTodo/';
import { SortButton } from './components/SortButton/';
import { useDispatch, useSelector } from 'react-redux';
import { selectError, selectIsLoading } from './redux/selectors';
import { useEffect } from 'react';
import { fetchTodos } from './redux/thunks';

export const App = () => {
	const isLoading = useSelector(selectIsLoading);
	const error = useSelector(selectError);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchTodos());
	}, [dispatch]);

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}
	if (error) {
		return <h2>{error}</h2>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<CreateTodo />
				<SearchTodo />
				<SortButton />
			</div>
			<TodoList />
		</div>
	);
};
