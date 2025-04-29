import styles from './SortButton.module.css';

export const SortButton = ({ onClick, isSorted }) => {
	return (
		<button className={styles.sortTodoButton} onClick={onClick}>
			{isSorted ? 'Сортировать по умочанию' : 'Сортировать по алфавиту'}
		</button>
	);
};
