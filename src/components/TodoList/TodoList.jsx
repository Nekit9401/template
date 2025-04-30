import { TodoItem } from '../TodoItem';
import styles from './TodoList.module.css';

export const TodoList = ({ todoData }) => {
	return (
		<ul className={styles.todoList}>
			{todoData.map((todo) => (
				<TodoItem key={todo.id} {...todo} />
			))}
		</ul>
	);
};
