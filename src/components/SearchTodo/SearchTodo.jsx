import { useState } from 'react';
import styles from './SearchTodo.module.css';

export const SearchTodo = ({ searchTodo }) => {
	const [searchValue, setSearchValue] = useState('');

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		searchTodo(searchValue);
		setSearchValue('');
	};

	return (
		<form className={styles.searchForm} onSubmit={handleSearchSubmit}>
			<input
				className={styles.searchInput}
				name='search'
				type='text'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
				placeholder='Найти задачу'
			/>
			<button className={styles.searchTodoButton} type='submit'>
				Найти
			</button>
		</form>
	);
};
