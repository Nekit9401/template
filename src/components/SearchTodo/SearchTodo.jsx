import { useState } from 'react';
import styles from './SearchTodo.module.css';
import { useDispatch } from 'react-redux';
import { setSearchQuery } from '../../redux/actions/filterAction';

export const SearchTodo = () => {
	const [searchValue, setSearchValue] = useState('');
	const dispatch = useDispatch();

	const handleSearchSubmit = (event) => {
		event.preventDefault();
		dispatch(setSearchQuery(searchValue));
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
