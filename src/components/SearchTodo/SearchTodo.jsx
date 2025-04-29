import styles from './SearchTodo.module.css';

export const SearchTodo = ({ onSubmit, value, setValue }) => {
	return (
		<form className={styles.searchForm} onSubmit={onSubmit}>
			<input
				className={styles.searchInput}
				name='search'
				type='text'
				value={value}
				onChange={(e) => setValue(e.target.value)}
			/>
			<button className={styles.searchTodoButton} type='submit'>
				Найти
			</button>
		</form>
	);
};
