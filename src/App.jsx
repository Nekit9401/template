import { useEffect, useState } from 'react';
import styles from './App.module.css';
import { CreateTodo } from './components/CreateTodo';
import { SearchTodo } from './components/SearchTodo/SearchTodo';
import { SortButton } from './components/SortButton/SortButton';
import { TodoList } from './components/TodoList/TodoList';

export const App = () => {
	const [todoData, setTodoData] = useState([]);
	const [createValue, setCreateValue] = useState('');
	const [searchValue, setSearchValue] = useState('');
	const [error, setError] = useState('');
	const [isLoading, setIsLoading] = useState(false);
	const [isSorted, setIsSorted] = useState(false);

	const fetchData = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('http://localhost:3000/todos');
			const loadedTodoData = await response.json();
			setTodoData(loadedTodoData);
			setIsSorted(false);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const addTodo = async (payLoad) => {
		setIsLoading(true);
		try {
			const response = await fetch('http://localhost:3000/todos', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payLoad),
			});
			const addsTodo = await response.json();
			setTodoData([...todoData, addsTodo]);
			console.log(addsTodo);
			setCreateValue('');
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const deleteTodo = async (id) => {
		setIsLoading(true);
		try {
			fetch(`http://localhost:3000/todos/${id}`, {
				method: 'DELETE',
			});
			setTodoData(todoData.filter((todo) => todo.id !== id));
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const updateTodo = async (id, payLoad) => {
		setIsLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/todos/${id}`, {
				method: 'PATCH',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(payLoad),
			});
			const updatedTodo = await response.json();
			setTodoData((prevData) => prevData.map((todo) => (todo.id === id ? { ...todo, ...updatedTodo } : todo)));
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const sortTodo = async () => {
		setIsLoading(true);
		try {
			const response = await fetch('http://localhost:3000/todos?_sort=title');
			const sortedTodoData = await response.json();
			setTodoData(sortedTodoData);
			setIsSorted(true);
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const searchTodo = async (phrase) => {
		setIsLoading(true);
		try {
			const response = await fetch(`http://localhost:3000/todos?title_like=${phrase}`);
			const filteredTodoData = await response.json();
			setTodoData(filteredTodoData);
			setSearchValue('');
		} catch (error) {
			setError(error.message);
		} finally {
			setIsLoading(false);
		}
	};

	const handleCreateSubmit = (event) => {
		event.preventDefault();
		addTodo({ title: createValue, complete: false });
	};

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		searchTodo(searchValue);
	};

	const handleOnClickSort = () => (isSorted ? fetchData() : sortTodo());

	useEffect(() => {
		fetchData();
	}, []);

	if (isLoading) {
		return <h1>Загрузка...</h1>;
	}
	if (error) {
		return <h2>{error}</h2>;
	}

	return (
		<div className={styles.container}>
			<div className={styles.controls}>
				<CreateTodo onSubmit={handleCreateSubmit} value={createValue} setCreateValue={setCreateValue} />
				<SearchTodo onSubmit={handleSearchSubmit} value={searchValue} setSearchValue={setSearchValue} />
				<SortButton onClick={handleOnClickSort} isSorted={isSorted} />
			</div>
			<TodoList todoData={todoData} />
		</div>
	);
};
