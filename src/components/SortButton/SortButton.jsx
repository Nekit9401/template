import { useDispatch, useSelector } from 'react-redux';
import styles from './SortButton.module.css';
import { selectIsSorted } from '../../redux/selectors';
import { setSort } from '../../redux/actions/filterAction';

export const SortButton = () => {
	const isSorted = useSelector(selectIsSorted);
	const dispatch = useDispatch();

	const handleSort = () => {
		dispatch(setSort(isSorted ? 'default' : 'title'));
	};

	return (
		<button className={styles.sortTodoButton} onClick={handleSort}>
			{isSorted ? 'Сортировать по умочанию' : 'Сортировать по алфавиту'}
		</button>
	);
};
