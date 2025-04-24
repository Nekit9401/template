import { truncate } from '../../utils/truncate';
import styles from './TitleTodo.module.css';

export const TitleTodo = ({ title }) => {
	return (
		<div className={styles.todoItem}>
			<h1>{truncate(title, 6)}</h1>
		</div>
	);
};
