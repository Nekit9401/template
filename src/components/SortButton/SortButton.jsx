import styles from './SortButton.module.css';

export const SortButton = ({ isSorted, onClick }) => (
	<button className={styles.button} onClick={onClick}>
		{isSorted ? 'Сортировать по умолчанию' : 'Сортировать по алфавиту'}
	</button>
);
