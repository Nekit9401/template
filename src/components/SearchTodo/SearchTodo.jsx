import styles from './SearchTodo.module.css';

export const SearchTodo = ({ onSubmit, searchValue, setSearchValue }) => {
	return (
		<form className={styles.searchForm} onSubmit={onSubmit}>
			<input
				className={styles.searchInput}
				name='search'
				type='text'
				value={searchValue}
				onChange={(e) => setSearchValue(e.target.value)}
			/>
			<button className={styles.searchTodoButton} type='submit'>
				Найти
			</button>
		</form>
	);
};
