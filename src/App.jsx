import { useEffect, useState } from 'react';
import styles from './App.module.css';

export const App = () => {
	const [todoData, setTodoData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch('https://jsonplaceholder.typicode.com/todos');
				const loadedTodoData = await response.json();
				setTodoData(loadedTodoData);
			} catch (error) {
				console.error(error);
			}
		};

		fetchData();
	}, []);

	return (
		<>
			<div className={styles.todoList}>
				{todoData.map(({ id, title }) => (
					<div key={id} className={styles.todoItem}>
						{title}
					</div>
				))}
			</div>
		</>
	);
};
