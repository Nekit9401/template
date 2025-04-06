import styles from './SearchBar.module.css';

export const SearchBar = ({ value, onChange }) => {
	return (
		<div className={styles.searchContainer}>
			<input
				className={styles.input}
				name='search'
				type='text'
				value={value}
				onChange={onChange}
				placeholder='Поиск задач...'
			/>
		</div>
	);
};
