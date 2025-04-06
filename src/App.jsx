import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { ref, onValue, push, remove, update } from 'firebase/database';
import { db } from './firebase';
import { useDebounce } from './hooks';
import { TodoForm } from './components/TodoForm';
import { SearchBar } from './components/SearchBar';
import { SortButton } from './components/SortButton/SortButton';
import { TodoList } from './components/TodoList';

export const App = () => {
	const [todoData, setTodoData] = useState({});
	const [inputValue, setInputValue] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	const debouncedSearchValue = useDebounce(searchValue, 300);

	const todosDbRef = ref(db, 'todos');

	const filterTodos = (todos, searchPhrase) => {
		if (!searchPhrase) return todos;

		return Object.fromEntries(
			Object.entries(todos).filter((todo) => todo[1].title.toLowerCase().includes(searchPhrase.toLowerCase())),
		);
	};

	const filteredTodos = filterTodos(todoData, debouncedSearchValue);

	const sortedTodos = Object.entries(filteredTodos).sort((a, b) => {
		const valueA = a[1].title;
		const valueB = b[1].title;

		return valueA.localeCompare(valueB);
	});

	const fetchData = () => {
		setIsLoading(true);

		return onValue(todosDbRef, (shapshot) => {
			const loadedTodos = shapshot.val() || {};
			setTodoData(loadedTodos);
			setIsLoading(false);
			setIsSorted(false);
		});
	};

	const addTodo = async (payLoad) => {
		setIsLoading(true);

		try {
			await push(todosDbRef, payLoad);
			setInputValue('');
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodo = async (id) => {
		setIsLoading(true);

		try {
			const removedTodoDbRef = ref(db, `todos/${id}`);
			await remove(removedTodoDbRef);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const updateTodo = async (id, payLoad) => {
		setIsLoading(true);

		try {
			const updatedTodoDbRef = ref(db, `todos/${id}`);
			await update(updatedTodoDbRef, payLoad);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleSortClick = () => {
		console.log(Object.fromEntries(sortedTodos));
		console.log(sortedTodos);
		return isSorted ? fetchData() : setIsSorted(true);
	};

	const handleCreateSubmit = (event) => {
		event.preventDefault();
		addTodo({ title: inputValue, complete: false });
	};

	const handleSearchChange = (e) => setSearchValue(e.target.value);

	useEffect(() => fetchData(), []);

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}
	if (error) {
		return <h2>{error}</h2>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<TodoForm onSubmit={handleCreateSubmit} inputValue={inputValue} setInputValue={setInputValue} />
				<SearchBar value={searchValue} onChange={handleSearchChange} />
				<SortButton isSorted={isSorted} onClick={handleSortClick} />
			</div>
			<TodoList
				isSorted={isSorted}
				sortedTodos={sortedTodos}
				filteredTodos={filteredTodos}
				deleteTodo={deleteTodo}
				updateTodo={updateTodo}
			/>
		</div>
	);
};
